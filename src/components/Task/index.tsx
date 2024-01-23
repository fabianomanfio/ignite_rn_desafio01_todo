import { TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from "./styles";

import Check from '../../assets/check.png'
import UnCheck from '../../assets/uncheck.png'
import Trash from '../../assets/trash.png'

type Task = {
  id: string | number[];
  task: string;
  isConcluded: boolean;
}

interface TaskProps {
  task: Task;
  onConcludedTask: () => void;
  onRemoveTask: () => void;
}

export function Task({ task, onConcludedTask, onRemoveTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <TouchableOpacity onPress={onConcludedTask}>
          {task.isConcluded && <Image source={Check} />}
          {!task.isConcluded && <Image source={UnCheck} />}
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        {task.isConcluded && (
          <Text style={styles.descriptionTextCheck}>{task.task}</Text>
        )}
        {!task.isConcluded && (
          <Text style={styles.descriptionText}>{task.task}</Text>
        )}
      </View>
      <View style={styles.trashButton}>
        <TouchableOpacity onPress={onRemoveTask}>
          <Image source={Trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
}