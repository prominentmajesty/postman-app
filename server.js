var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var {config} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');
 var app = express();

 mongoose.connect(config, {
     useNewUrlParser: true
 });
  const conn = mongoose.connection;

 conn.once('open', () => {
     console.log('Database Connection Established Successfully.');
 });

 conn.on('error', (err) => {
     console.log('Unable to Connect to Database. ' + err);
 });

 app.use(bodyParser.json()) ;

app.post('/todos', (req, res)=>{
        var todo = new Todo({
        text : 'my name is majesty'
        });

        todo.save().then((doc)=>{
            res.send(doc);
        },(e)=>{
            res.status(400).send(e);
        });
});

 app.listen(3000, ()=>{
   console.log('app starting @ port 3000')
 });
