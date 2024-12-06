import Todo from '../models/todoModel.js';
import mongoose from 'mongoose';

// get all todos
export const getTodos = async (req, res) => {
  const user_id = req.user._id;
  const todos = await Todo.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

// create new todo
export const createTodo = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Please add a todo text' });
  }

  try {
    const user_id = req.user._id;
    const todo = await Todo.create({ text, user_id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such todo' });
  }

  const todo = await Todo.findOneAndUpdate({ _id: id, user_id: req.user._id }, { ...req.body }, { new: true });

  if (!todo) {
    return res.status(404).json({ error: 'No such todo' });
  }

  res.status(200).json(todo);
};

// delete a todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such todo' });
  }

  const todo = await Todo.findOneAndDelete({ _id: id, user_id: req.user._id });

  if (!todo) {
    return res.status(404).json({ error: 'No such todo' });
  }

  res.status(200).json(todo);
};
