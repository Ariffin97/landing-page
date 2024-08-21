const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Explicitly set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define the main route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
