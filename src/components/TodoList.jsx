import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { useState } from 'react';
import '../styles/TodoList.css';

const TodoList = ({ tasks, onTaskDelete, onTaskUpdate, onTaskComplete, onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list-container">
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Adicionar Tarefa
        </button>
      </div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onTaskDelete={() => onTaskDelete(task)}
          onTaskUpdate={(updatedTask) => onTaskUpdate(index, updatedTask)}
          onTaskComplete={() => onTaskComplete(index)}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskComplete: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

export default TodoList;