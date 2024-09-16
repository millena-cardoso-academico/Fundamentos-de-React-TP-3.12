import { useState } from 'react';
import TodoList from './components/TodoList';
import List from './components/List';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'Comprar leite', completed: false },
    { text: 'Estudar React', completed: false },
    { text: 'Fazer exercício', completed: false },
  ]);

  const [numbers] = useState([1, 2, 3, 4, 5]);

  const handleTaskDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleTaskUpdate = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, text: updatedTask } : task));
    setTasks(updatedTasks);
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, completed: true } : task));
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <TodoList
        tasks={tasks}
        onTaskDelete={handleTaskDelete}
        onTaskUpdate={handleTaskUpdate}
        onTaskComplete={handleTaskComplete}
        onAddTask={handleAddTask}
      />
      <h2>Lista de Números</h2>
      <List numbers={numbers} />
    </div>
  );
};

export default App;