const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello invotech");
});

app.get('/instagram',(req,res) => {
    res.send("instagram")
})

app.get('/login',(req,res) => {
    res.send("login")
})

app.get('/register',(req,res) => {
    res.send("register")
})

// port number 

app.listen(port, () => {
  console.log(`app is listing on port number ${port} `);
});

// nodejs express mongoose

// 1. Data
// 2. file
// 3. third party (api) google,aws,azure,cloudinary,sms,email,payment gateway

//  index.js or server.js
