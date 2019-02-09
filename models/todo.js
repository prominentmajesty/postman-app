var mongoose = require('mongoose');
var Schema = mongoose.Schema({

    text : {
      type : String,
      require : true,
      minlength : 1,
      trim : true
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

var Todo = mongoose.model('Todo',Schema);

module.export = {Todo}
