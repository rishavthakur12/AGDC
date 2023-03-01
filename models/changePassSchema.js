var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var changePassSchema = new Schema({
   newPassword:{
      type: String,
      require:true
   },
   confirmPassword:{
      type: String,
      require:true
   }
})
module.exports = mongoose.model('changePassSchema', changePassSchema)