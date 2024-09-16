import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

const TodoItem = ({ task, onTaskDelete, onTaskUpdate, onTaskComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    onTaskUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.text}
            onChange={handleTaskChange}
            className="task-input"
          />
          <button onClick={handleSave} className="save-btn">Salvar</button>
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={handleEditToggle} className="edit-btn">Editar</button>
          <button onClick={() => onTaskDelete(task)} className="delete-btn">Excluir</button>
          <button onClick={() => onTaskComplete(task)} className="complete-btn">Concluir</button>
        </>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskComplete: PropTypes.func.isRequired,
};

export default TodoItem;