require('dotenv').config();
const express = require('express');
const app = express();

const port= process.env.PORT;


// Midleware to serve static pages
app.use( express.static('public'))


app.get('/', (req, res) => { // Invalid request to Express are disabled by default
    console.log(req.url); 
    // We don't need to define a page in sendFile if it's named index.html
});

app.get('/generic', (req, res) => { 
    console.log(req.url);
    res.sendFile(__dirname + '/public/generic.html'); 
});

app.get('/elements', (req, res) => { 
    console.log(req.url);
    res.sendFile(__dirname + '/public/elements.html'); 
});

app.get('*', (req, res) => { // We can also handle the invalid request by using *
    res.send('404 - Page not found :/')
  //  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});