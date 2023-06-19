const express = require('express');
const path = require('path')
const bodyParser = require("body-parser")

const app=express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req,res)=> {
    //This is for getting user data
   // res.sendFile(path.join(__dirname+"/index.html"));


   //Now we create a JSON 
   res.json({
    name: "Rimpy",
    email: "example@123gmail.com",
    password:"hjhfhfh",

   });
});

app.post('/api/v1/login',(req, res)=>{
   // res.send("<h1> DONE </h1>");
   // console.log(req.body);
   const userName = req.body.name;
   const userEmail = req.body.email;
   const userPassword = req.body.password;
   //Now we create JSON

   res.json({
    success: true, //Here we cant access form and server also not showing POST details then we use POSTMAN here
    //we will not it here but we using because we are not using database and when we use we create an object and use it in database
    name: userName,
    email: userEmail,
    password: userPassword,


    });

});

app.listen(port,()=>{
    console.log('Server is Working on port: ${port}');
});
