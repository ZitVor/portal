const{Schema, model, Types} = require('mongoose')

const schema = new Schema({
    topic:{type:String, required: true},//название темы
    body:{type:String, required: true},//текст темы
    
    date:{type:Date,default:Date.now}//время 
})

module.exports = model('TaskFromSite', schema)