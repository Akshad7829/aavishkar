const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/msg')
const port = 3001;
//express app



const app = express();




app.set('view engine', 'hbs');
const dbURI="mongodb+srv://db:asn7829@cluster0.9sld41u.mongodb.net/?retryWrites=true&w=majority";// const dbURI="mongodb+srv://<user>:yash123456@@cluster0.hnaib.mongodb.net/myFirstDatabase?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
mongoose.connect(dbURI,{ useNewUrlParser:true , useUnifiedTopology:true})
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      dbURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

// app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));



app.get('/',function(req,res){
    res.render('index',{title:'Yash Dhanlobhe'})
});

app.post('/',function(req,res){
    const msg = new Message(req.body);
    msg.save()
    .then((result) =>{
        res.redirect('/success')
        
    })
    .catch((err) =>{
        console.log(err);
     
    });
})


app.post('/',function(req,res){
  // const msg = new Message(req.body);
  const subTaskArray = req.body.subtasksArray; 
  const newTodaysTask = new TodaysTask({
    
    subtasksArray      
  });
  newTodaysTask.save()
  // .then(() => )
  .then(() =>{
    res.json('Task added!')
    
    
})
  .catch(err => res.status(400).json('Error: ' + err));
});





app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function(){
  console.log('Running on port '+app.get('port'));
});
app.listen(port , ()=>{
  console.log("connection on port " + port);
})