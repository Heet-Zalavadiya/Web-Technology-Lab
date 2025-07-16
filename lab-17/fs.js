const fs = require('fs');

// fs.exists('/path/to/file',(exists) =>{
//     console.log(exists ? 'found' : 'not found!');
// });

// fs.stat('demo.js', (err,data) =>{
//     console.log(data);
// });

// const data = fs.readFileSync('darshan.txt');
// console.log(data.toString());

// fs.readFile('darshan.txt',(err,data)=>{
//     console.log(data.toString());
// })

// fs.unlink('darshan.txt', (err) =>{
//     if(err){throw err}
//     console.log("file deleted");
// })

fs.rename('darshan.txt' ,'darshan_uni.txt',(err) =>{
    if(err){throw err}
    console.log("file rename");
})