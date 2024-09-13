require('dotenv').config()

const express = require('express')
// import express from "express"(Above line is same like this)
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=>{
    res.send('<h1> PLease login to our ebsite')
})

app.get('/signup',(req,res)=>{
    res.send('PLease do Sign Up to  create an New Account')
})

app.get('/youtube',(req,res)=>{
    res.send('Amulya You have a mini ebsite through server')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})