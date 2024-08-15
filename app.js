const express = require('express');
const mongoose = require('mongoose');
const module = require('module');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/major', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const pizzaRoutes = require('./routes/pizza');
app.use('/pizzas', pizzaRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Pizza store server is running on port 3000');
});
