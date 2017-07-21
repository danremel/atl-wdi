const express = require('express');
const router = express.Router();
const data = require('../data');
/* INDEX TODOS */
router.get('/', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos,
  });
});

/* NEW TODO */
router.get('/new', (req, res) => {
  res.render('todos/new');
});

/* SHOW TODO */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  res.render('todos/show', {
    todo: todo,
    id: id,
  });
});

/* EDIT TODO */
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  res.render("todos/edit", {
    todo: todo,
    id: id
  });
});

/* UPDATE TODO */
router.put('/:id', (req, res) => {
  // we have the id
  const id = req.params.id;
  // use the id to grab specific index in array
  const todo = data.seededTodos[id];
  // update the description and urgent values
  todo.description = req.body.description;
  todo.urgent = req.body.urgent;
  // redirect back to individual todo
  res.method = "GET";
  res.redirect(`/todos/${id}`);
});

/* SAVE TODO */
router.post('/', (req, res) => {
  console.log(req.body);
  const newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededTodos.push(newTodo);
  res.redirect("/todos");
});

/* DELETE TODO */
router.delete('/:id', (req, res) => {
  data.seededTodos.splice(req.params.id, 1);
  res.redirect("/todos");
});

module.exports = router;