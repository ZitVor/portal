const{Schema, model, Types} = require('mongoose')

const schema = new Schema({
    
    topic:{type:String, required: true},//название задания
    author:{type:Types.ObjectId, ref:'User', required: true},
    authoremail:{type:String},
    body:{type:String, required: true},
    date:{type:Date,default:Date.now, required: true}//время 
})

module.exports = model('TaskFromUser', schema)