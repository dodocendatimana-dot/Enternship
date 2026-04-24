const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.listen(port);
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Blog Post 1', snippet: 'This is the first blog post.' },
        { title: 'Blog Post 2', snippet: 'This is the second blog post.' },
        { title: 'Blog Post 3', snippet: 'This is the third blog post.' }
    ];
    res.render('index', { title: 'home', blogs });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404).render('404');
});