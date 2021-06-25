const{Schema, model, Types} = require('mongoose')

const schema = new Schema({
    decisiveuser: {type:Types.ObjectId, ref:'User', required: true},
    decisiveuseremail: {type:String},
    checkinguser:{type:Types.ObjectId, ref:'User'},
    checkinguseremail:{type:String},
    text:{type:String},
    task:{type:Types.ObjectId, ref:'TaskFromUser', required: true},
    estimate: {type:Boolean, required:true, default:'false'},
    checked:{type:Boolean, required:true, default:'false'},
    comment:{type: String}
})

module.exports = model('Decision', schema)