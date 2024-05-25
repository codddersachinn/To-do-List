import React from 'react';
import Task from './Tasks';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;