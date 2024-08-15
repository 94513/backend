const express = require('express');
const router = express.Router();
const Pizza = require('../modles/Pizza');
const module = require('./module/pizza.js');

// INDEX - Show all pizzas
router.get('/', async (req, res) => {
    const pizzas = await Pizza.find({});
    res.render('index', { pizzas });
});

// NEW - Show form to create new pizza
router.get('/new', (req, res) => {
    res.render('new');
});

// CREATE - Add new pizza to the database
router.post('/', async (req, res) => {
    await Pizza.create(req.body.pizza);
    res.redirect('/pizzas');
});

// SHOW - Show details about one pizza
router.get('/:id', async (req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    res.render('show', { pizza });
});

// EDIT - Show form to edit a pizza
router.get('/:id/edit', async (req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    res.render('edit', { pizza });
});

// UPDATE - Update a particular pizza
router.put('/:id', async (req, res) => {
    await Pizza.findByIdAndUpdate(req.params.id, req.body.pizza);
    res.redirect(`/pizzas/${req.params.id}`);
});

// DELETE - Delete a particular pizza
router.delete('/:id', async (req, res) => {
    await Pizza.findByIdAndDelete(req.params.id);
    res.redirect('/pizzas');
});

module.exports = router;
