const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
  return console.log('Unable to connect to MongoDB', err);
}
console.log('Connected to MongoDB');

//deletemany
// db.collection('todos').deleteMany({text: 'Something to do'}).then((result) => {
//   console.log(result);
// },(err) => {
//   console.log('unable to delete records');
// });

//delete connect
db.collection('todos').deleteOne({text: 'eat dinner'}).then( (result) => {
   console.log(result);
},(err) => {
   console.log('unable to delete one document', err);
});

//find one and delete (is better compared to deleteone)
// db.collection('todos').findOneAndDelete({}).then((result) => {
//   console.log(result);
// });

//db.close();
});
