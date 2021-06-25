const{Schema, model, Types} = require('mongoose')

const schema = new Schema({
    author:{type:Types.ObjectId, ref:'User'},
    authoremail:{type:String},
    topic:{type:String, required: true, unique:true},//название темы
    body:{type:String, required: true},//текст темы
    date:{type:Date,default:Date.now}//время 
})

module.exports = model('ForumPost', schema)