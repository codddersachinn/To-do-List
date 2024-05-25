import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './Component/Tasklist';
import TaskForm from './Component/Taaskforms';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('/tasks');
    setTasks(response.data);
  };

  const handleSaveTask = async (task) => {
    if (task.id) {
      await axios.put(`/tasks/${task.id}`, task);
    } else {
      await axios.post('/tasks', task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const handleEditTask =  (task) => {
   setEditingTask(task);
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1 className='title'>To-Do List</h1>
      <button onClick={() => setEditingTask({})}>Create New Task</button>
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      {editingTask && <TaskForm task={editingTask} onSave={handleSaveTask} onCancel={() => setEditingTask(null)} />}
    </div>
  );
};

export default App;