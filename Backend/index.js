import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.post('/tasks', (req, res) => {
    const task = {
        id: nextId++,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        dueDate: req.body.dueDate
    };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            id: parseInt(req.params.id),
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate
        };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});