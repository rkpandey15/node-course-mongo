// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err){
       return console.log("Unable to connect Mongodb");
    }
    console.log("Connected to mongo db");
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=> {
        if (err){
            return console.log("Unable to insert record");
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
        console.log(result.ops[0]._id.getTimestamp())
    });
    client.close();
});
