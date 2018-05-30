//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
       if(err){
         return console.log('unable to connect to DB');
       }
          console.log('Connected to MongoDB');


       // db.collection('todos').find({_id: ObjectID("5b0c3bfb49ae123508bdd3e5")}).toArray().then((docs) => {
       //        console.log(JSON.stringify(docs, undefined, 2));
       //    } , (err) => {
       //        console.log('unable to print the Query');
       // });

       // db.collection('todos').find().count().then((count) => {
       //        console.log(`${count}`);
       //    } , (err) => {
       //        console.log('unable to print the Query');
       // });
       db.collection('Users').find({name: "charan"}).toArray().then((docs) =>{
         console.log('connected to Users Collection');
         console.log(JSON.stringify(docs, undefined, 2));
       },(err) => {
          console.log('error accessing Users collection', err);

       });

   //db.close();

});
