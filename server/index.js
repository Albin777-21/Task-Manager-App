const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user-routes');
const taskRouter = require('./routes/task-routes');
const app = express();

require('./database');

// Middleware setup
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes setup
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

// Default route
app.use('/api', (req, res) => {
  res.status(200).json({ message: 'Hello Express' });
});

// Server setup
app.listen(5000, () => console.log(`App is running on port 5000`));
