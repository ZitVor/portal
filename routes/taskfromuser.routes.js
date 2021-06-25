const {Router}  = require('express')
const TaskFromUser = require('../models/TaskFromUser')
const auth = require('../middleware/auth.middleware')
const Decision = require('../models/Decision')
const router = Router()

router.post('/create', auth, async (req,res) =>{
    try{
        const {topic, body, authoremail} = req.body
        const task =  new TaskFromUser({
            topic, body, author: req.user.userId, authoremail
        })
        await task.save()
        res.status(201).json({task})
    }
    catch(e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
     }
})




router.get('/', auth, async (req, res) => {
    try {
      const tasks = await TaskFromUser.find()
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

router.get('/:id', auth, async (req, res) => {
    try {
      const task = await TaskFromUser.findById(req.params.id)
      res.json(task)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  
  router.get('/all', auth, async (req, res) => {
    try {
      const tasks = await TaskFromUser.find()
    console.log(tasks)
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })


module.exports = router