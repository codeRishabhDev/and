// screens/TodoScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TodoScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([
        ...tasks,
        {id: tasks.length + 1, text: task, completed: false},
      ]);
      setTask('');
    }
  };

  const toggleTask = taskId => {
    setTasks(
      tasks.map(t => (t.id === taskId ? {...t, completed: !t.completed} : t)),
    );
  };

  const removeTask = taskId => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App Lalit</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Icon
                name={
                  item.completed ? 'ios-checkbox-outline' : 'ios-square-outline'
                }
                size={24}
                color={item.completed ? 'green' : 'black'}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.taskText,
                // eslint-disable-next-line react-native/no-inline-styles
                {textDecorationLine: item.completed ? 'line-through' : 'none'},
              ]}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Icon name="ios-trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});

export default TodoScreen;
