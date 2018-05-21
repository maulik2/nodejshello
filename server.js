require('dotenv').config();
var PORT = process.env.PORT;


const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = 'mongodb://127.0.0.1:27017/ng';


var express = require('express');
var app = express();

app.listen(PORT, function(){
    console.log('Server is up and running on port 3000');
});

app.get('/', function(request, response){
   response.send('Hello World');
});



app.get('/testpromise', function(req,res) {

asyncPromise1()
  .then(function(result1) {
      console.log(result1);
     return asyncPromise2();
  })
  .then(function(result2) {
    res.send(result2);
  })
  .catch(function(error){
    console.log("we have an error", errror);
  })
});

function asyncPromise1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("hello from Promise 1");
        }, 4000);
    });
}

    function asyncPromise2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("hello from Promise 2");
        }, 4000);
    });
}

app.get('/users', function(request, response){
    MongoClient.connect(MONGO_URI,function(err,db){
        if(err){
            response.send(`Error fetching all users ==> ${err}`);
        }
        db.collection('users').find().toArray( function(err, docs){
         if(err){
            response.send(`Error fetching all users ==> ${err}`);
        }
            response.send(docs);
        });
    });
});

app.post('/users', function(request, response){

    const user = request.body;

console.log(user);

    MongoClient.connect(MONGO_URI,function(err,db){
         if(err){
            response.send(`Error fetching all users ==> ${err}`);
        }  
       
        db.collection('users').insertOne(user);  
        
     
        
    });
});