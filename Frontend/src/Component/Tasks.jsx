import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.status}</td>
      <td>{task.dueDate}</td>
      <td>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;