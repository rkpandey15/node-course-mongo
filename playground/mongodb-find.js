// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err){
       return console.log("Unable to connect Mongodb");
    }
    console.log("Connected to mongo db");
    const db = client.db('TodoApp');
   db.collection('Todos').find({completed:true}).toArray().then((docs)=> {
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));
   }, (err)=>{
        console.log('Unable to fetch todos',err);
   });
    client.close();
});
