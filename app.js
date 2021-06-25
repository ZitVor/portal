const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended:true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/taskfromusers', require('./routes/taskfromuser.routes'))

app.use('/api/decisive', require('./routes/decisive.routes'))
app.use('/api/forumtheme', require('./routes/forum.routes'))
app.use('/api/admin', require('./routes/admin.routes'))
app.use('/api/comment', require('./routes/comment.routes'))
app.use('/api/rate', require('./routes/rate.routes'))
app.use('/api/taskfromsite', require('./routes/taskfromsite.routes'))
const PORT = config.get('port') || 5000


async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        app.listen(PORT, () => console.log('App has been started started on ${PORT}'))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)

    }

}
start()
