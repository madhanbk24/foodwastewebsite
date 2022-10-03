const express = require('express');
const path = require('path');

const app = express();


const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true })); 


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/volunteer', function(req, res) {
  res.sendFile(path.join(__dirname, '/volunteer.htm'));
});
app.get('/donator', function(req, res) {
  res.sendFile(path.join(__dirname, '/donator.htm'));
});
app.post('/donate',(req,res)=>{
   
  //res.send('hello');
  // res.redirect('back');
 // res.sendFile(path.join(__dirname, '/index.html'));

  res.redirect('http://localhost:8080/donator')

});
app.post('/volunteer',(req,res)=>{
   
 // res.send('hello');
  // res.redirect('back');
 // res.sendFile(path.join(__dirname, '/index.html'));

  res.redirect('http://localhost:8080/volunteer')

});








app.listen(8080);
console.log('Server started at http://localhost:' +8080);