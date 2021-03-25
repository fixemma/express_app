const express = require('express');

const app = express();

/*app.use((req,res,next)=>{
    console.log('middleware 1')
    next();
});
app.use((req,res,next)=>{
    console.log('middleware 2')
    res.send('<h3>Response from middleware 2</h3>')
});*/

app.use(/(\/)?(users)?/,(req,res)=>{
    res.send(`<h3>Response on '/users' or '/' </h3>`)
});


app.listen(3000);