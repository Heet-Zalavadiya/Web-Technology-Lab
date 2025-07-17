const http = require('http');
const app = http.createServer((req ,res) => {
    // res.write()
    res.statusCode = 200;
    res.end('<h1>Hello Word</h1>')
}) 

app.listen(3000,() =>{
    console.log("Server is running");
})