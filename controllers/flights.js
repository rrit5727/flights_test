const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  
};

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      title: 'All To-Dos'
    });
  }

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
  }