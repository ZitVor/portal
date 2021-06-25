const{Schema, model, Types} = require('mongoose')

const schema = new Schema({
    author:{type:Types.ObjectId, ref:'User', required: true},
    authoremail:{type:String},
    thema:{type:Types.ObjectId, ref:'ForumPost'},
    body:{type:String, required: true},//текст темы
    date:{type:Date,default:Date.now, required: true}//время 
})

module.exports = model('Comment', schema)