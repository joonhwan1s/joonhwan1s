const express = require("express");
const app = express()

// app.use((req, res) =>{
//     console.log("WE GOT A NEW REQUEST")
//     res.send('<h1>This is my webpage</h1>')
// })

app.get('*', (req, res) => {
    res.send('I DONT KNOW THAT')
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.post('/cats', (req,res) =>{
    res.send("DDDDDDDDDDDDDD")
})

app.get('/dogs', (req,res) =>{
    res.send('bark!')
})
// /cats => 'meow'
// /

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})