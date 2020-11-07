// importing express.js and Handlebars
const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// importing api routes
var routes = require('./routes/api_routes.js');

app.use(routes);

// starting server
app.listen(PORT, function(){
    console.log('Serving Personal Achievements on PORT ' + PORT);
});