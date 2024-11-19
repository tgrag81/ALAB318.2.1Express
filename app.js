const express = require('express');

const app = express();
const PORT = 3000;
const pug = require ('pug');


//Template Engine is PUG
app.set('view engine', 'pug');

//Views directory

app.set('views', './views');




app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome Home");
});


const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'Static Files')))


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

//Route with Parameter

app.get('user/:id', (req, res) => {
    const userID = req.params.id;
    res.send('User ID is ${userID}');
});

app.get('/products/:category/:id', (req, res) => {
    const { category, id } = req.params; // Destructure parameters
    res.send(`Product Category: ${category}, Product ID: ${id}`);
});

// Route with optional parameter
app.get('/article/:slug/:commentId?', (req, res) => {
    const { slug, commentId } = req.params;
    if (commentId) {
        res.send(`Article Slug: ${slug}, Comment ID: ${commentId}`);
    } else {
        res.send(`Article Slug: ${slug}`);
    }
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', message: 'Learn more about us!' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us', message: 'Get in touch with us.' });
});
