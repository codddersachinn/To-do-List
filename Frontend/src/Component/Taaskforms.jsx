import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setStatus(task.status || 'pending');
      setDueDate(task.dueDate || '');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: task.id, title, description, status, dueDate });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCancel}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <label>
            Due Date:
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;