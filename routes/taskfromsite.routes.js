const {Router}  = require('express')
const TaskFromSite = require('../models/TaskFromSite')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/create', auth, async (req,res) =>{
    try{
        const {topic, body} = req.body
        const task =  new TaskFromSite({
            topic, body
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
      const tasks = await TaskFromSite.find()
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

router.get('/:id', auth, async (req, res) => {
    try {
      const task = await TaskFromSite.findById(req.params.id)
      res.json(task)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  
  router.get('/all', auth, async (req, res) => {
    try {
      const tasks = await TaskFromSite.find()
    console.log(tasks)
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router