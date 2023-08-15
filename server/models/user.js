const mongoose = require('mongoose');

const pm = require('passport-local-mongoose');

var userSchemaDefinition = {
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String
    }
}

var userSchema = new mongoose.Schema(userSchemaDefinition);

userSchema.plugin(pm);

module.exports = new mongoose.model('User', userSchema);