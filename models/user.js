var mongoose = require('mongoose');

 var Schema = mongoose.Schema({

   text : {

     type : String,
     require : true,
     minlength : 1,
     trim :true
   },

    completed : {
    type : Boolean,
    default : false
     },

    completedAt : {
     type : Number,
     default : null
       }

 });

 var User = mongoose.model('User',Schema);

 module.exports = {User};
