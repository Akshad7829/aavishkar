const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const msgSchema = new Schema({
    fName: {
            type:String,
            required:true
    },
    lName: {
        type: String,
        required:true
    },
    eMail: {
        type:String,
         required:true ,
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']  
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

const Message = mongoose.model('Message',msgSchema);
module.exports = Message;