import { useState } from 'react';
import { FlatList, Image, Text, View, Alert } from 'react-native';
import uuid from "react-native-uuid";

import { styles } from "./styles";

import Logo from '../../assets/Logo.png';
import Clipboard from '../../assets/Clipboard.svg'
import { AddTask } from '../../components/AddTask';
import { Task } from '../../components/Task';


type Task = {
  id: string | number[];
  task: string;
  isConcluded: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  const concludedTasks = tasks.reduce((acc, task) => {
    return task.isConcluded ? acc + 1 : acc;
  }, 0);

  function handleAddTask(taskText: string) {
    if (!taskText.trim()) {
      return Alert.alert("Erro", "Digite uma tarefa.");
    }

    if (taskText.trim().length <= 3) {
      return Alert.alert("Erro", "Uma tarefa deve ter mais do que 3 caracteres.");
    }

    const isExistTask = tasks.some(task => task.task === taskText);

    if(isExistTask) {
      return Alert.alert("Aviso", "Tarefa já cadastrada!")
    }

    const task = {
      id: uuid.v4(),
      task: taskText,
      isConcluded: false,
    };

    setTasks([...tasks, task]);
  }

  function handleConcludedTask(id: string | number[]) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isConcluded: !task.isConcluded } : task
    );

    setTasks(newTasks);
    
  }

  function handleRemoveTask(id: string | number[], description: string) {
    Alert.alert("Remover", `Remover a tarefa ${description}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
      </View>

      <AddTask onAddTask={handleAddTask} />

      <View style={styles.taskContainer}>
        <View style={styles.taskInfoContainer}>
          <View style={styles.taskCreated}>
            <Text style={styles.textTaskCreated}>Criadas</Text>
            <Text style={styles.taskCreatedCounter}>{tasks.length}</Text>
          </View>
          <View style={styles.taskConcluded}>
            <Text style={styles.textTaskConcluded}>Concluídas</Text>
            <Text style={styles.taskConcludedCounter}>{concludedTasks}</Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              task={item}
              key={String(item.id)}
              onConcludedTask={() => handleConcludedTask(item.id)}
              onRemoveTask={() => handleRemoveTask(item.id, item.task)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.taskListEmptyContainer}>
              <Clipboard />
              <Text
                style={[
                  styles.taskListEmptyText,
                  { marginTop: 16, fontWeight: "bold" },
                ]}
              >
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text style={styles.taskListEmptyText}>
                Crie tarefas e organize seus itens a fazer.
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}