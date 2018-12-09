const express=require('express');
const hbs = require('hbs');
const fs=require('fs');
<<<<<<< HEAD
const port=process.env.PORT || 3000;

=======
>>>>>>> 1d2a989a32880a093eb9520ad4c50480f103c9dc
var app=express();

hbs.registerPartials(__dirname+'/views/partials')

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase()
});

app.use((req,res,next)=>{
  var now=new Date().toString();
  var log=`${now} ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('Unable to append to server.log');
    }
  });
  next();
});
// app.use((req,res,next)=>{
//   res.render('maintainence.hbs');
// });
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    name:'Pranali'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About this page'
  });
});
app.get('/bad',(req,res)=>{
  res.send({errorMessage:'Bad request'});
});

<<<<<<< HEAD
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
=======
app.listen(3000,()=>{
  console.log('Server is up on port 3000');
>>>>>>> 1d2a989a32880a093eb9520ad4c50480f103c9dc
}
);
