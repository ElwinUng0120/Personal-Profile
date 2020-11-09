// importing express.js and Handlebars
const express = require('express');
const fileSorter = require('./config/fileSorter.js');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/imageList', function(req, res){
    const response = fileSorter.sortImgList();
    res.send(response);
});

// starting server
app.listen(PORT, function(){
    console.log('Serving Personal Achievements on PORT ' + PORT);
});