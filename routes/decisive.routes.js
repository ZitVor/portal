const {Router}  = require('express')
const ForumPost = require('../models/ForumPost')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const Comment = require('../models/Comment')
const Decision = require('../models/Decision')
const router = Router()

router.post('/create/:id', auth, async (req, res) => {
  try {
    const {decisiveuseremail, text} = req.body
    console.log(req.params.id)
    const decision = new Decision({
        decisiveuser:req.user.userId, decisiveuseremail, text, task: req.params.id 
    })
    await decision.save()
    res.status(201).json({ decision })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


  //DesiciveCalls вызывает все существующие решения
router.get('/', auth, async (req, res) => {
    try {
        console.log('hm')
      const decisions = await Decision.find()
      res.json(decisions)
    } catch (e) {
        console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

    //DesiciveCalls обноволяет решение
    router.put('/updatedicisive/:id', auth, async(req, res)=>{
        try {
          const body = req.body
          const user = await Decision.findByIdAndUpdate(req.params.id, body)
          res.status(200).json(await Decision.find())
         
        } catch (e) {
          console.log(e)
          res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
      })

  //Выводит по айдишнику решение
router.get('/getby/:id', auth, async (req, res) => {
    try {
        console.log('pltcz')
      const estimate = await Decision.findById(req.params.id)
      console.log(estimate)
      res.json(estimate)
    } catch (e) {
        console.log('dorowa')
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  //pizda
router.put('/updaterate/:id', auth, async (req, res) => {
    try {
        
      const user = await User.findById(req.params.id)
       await User.findByIdAndUpdate(req.params.id, { rate:user.rate+1})
        
      console.log('dorowa')
      console.log(user.rate)

      res.json(user)
    } catch (e) {
        console.log(e)
        console.log('dorowa')
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.delete('/delete/:id', auth, async (req, res) => {
    try {
      const estimate = await Decision.findByIdAndRemove(req.params.id)
      console.log(estimate)
      res.json(estimate)
    } catch (e) {
        console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })


    //CARIED OUT ВЫПОЛНЕНЫЕ
  router.get('/carriedout/:id', auth, async (req, res) => {
    try {
      console.log('carriedout')
      const decisions = await Decision.find({decisiveuser:req.params.id})
   
      res.json(decisions)
    } catch (e) {
        console.log('not working')
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
    //APPRECIETED ОЦЕНЕНЫ
    router.get('/apprecieted/:id', auth, async (req, res) => {
        try {
          console.log('apprecieted')
          const decisions = await Decision.find({decisiveuser:req.params.id, checked:true, estimate:false})

          res.json(decisions)
        } catch (e) {
            console.log('not working')
          res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
      })
    //HANDED OVER СДАНЫ
    router.get('/handedover/:id', auth, async (req, res) => {
        try {
          console.log('handedover')
          console.log(req.params.id)
          const wow = req.params.id
          const decisions = await Decision.find({decisiveuser:req.params.id, checked:true})
 
          
          res.json(decisions)
        } catch (e) {
            console.log(e)
          res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
      })


router.put('/checking/:id', auth, async (req, res) => {
    try {
      
      const {body, authoremail} = req.body
      console.log('darova')
      const comment = new Comment({
      body, author: req.user.userId, thema:req.params.id , authoremail
      })
      await comment.save()
      res.status(201).json({ comment })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  
module.exports = router