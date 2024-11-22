const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
});

// Create a new task
router.get("/create", (req, res) => {
  res.render("create-task");
});

router.post("/create", async (req, res) => {
  const { title, description } = req.body;
  try {
    await Task.create({ title, description });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Mark task as completed
router.post("/complete/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) throw new Error("Task not found.");
    if (task.completed) throw new Error("Task is already completed.");

    task.completed = true;
    await task.save();
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Edit task
router.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render("edit-task", { task });
});

router.post("/edit/:id", async (req, res) => {
  const { title, description } = req.body;
  try {
    await Task.findByIdAndUpdate(req.params.id, { title, description });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete task
router.post("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
