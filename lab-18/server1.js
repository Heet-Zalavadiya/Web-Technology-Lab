const http = require('http');
const fs = require('fs');
const app = http.createServer((req, res) => {
    if (req.url === '/home') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Page Not Found</h1>");
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data);
            } 
        }) 
    }
    else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Page Not Found</h1>");
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data);
            }
        })
    }
    else if (req.url === '/darshan') {
        fs.readFile('./darshan.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Page Not Found</h1>");
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data);
            }
        })
    }
    else if (req.url === '/ums') {
        fs.readFile('./ums.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Page Not Found</h1>");
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data);
            }
        })
    }
      else if (req.url === '/contact') {
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>Page Not Found</h1>");
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data);
            }
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running");
})