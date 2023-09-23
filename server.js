const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

app.get('/', (reg, res) =>{
    res.send('hallo!!')
})


app.listen(PORT, ()=>{
    console.log('Server runnug on port ${PORT}')
}) 