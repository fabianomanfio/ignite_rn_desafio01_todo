import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from "react-native";
import { styles } from "./styles";
import Plus from '../../assets/plus.png'
import { theme } from '../../theme';
import { useState } from 'react';
 
interface AddTaskProps {
  onAddTask: (taskText: string) => void;
};

  export function AddTask({ onAddTask }: AddTaskProps) {
    const [isFocused, setIsFocused]= useState(false);
    const [taskText, setTaskText]= useState('');
    
    function handleNewTask() {
      onAddTask(taskText);
      setTaskText('')
    }

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.gray300}
          style={[
            styles.input,
            isFocused
              ? { borderColor: theme.colors.purple_dark }
              : { borderColor: theme.colors.gray700 },
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={handleNewTask}
          underlayColor={theme.colors.blue}
        >
          <Text style={styles.buttonPlus}>+</Text>
          {/* <Image source={Plus} style={styles.imagePlus} /> */}
        </TouchableHighlight>
      </View>
    );
  }