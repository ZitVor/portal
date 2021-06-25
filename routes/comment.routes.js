const {Router}  = require('express')
const ForumPost = require('../models/ForumPost')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const Comment = require('../models/Comment')
const router = Router()

router.post('/:id', auth, async (req, res) => {
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


router.get('/:id', auth, async (req, res) => {
    try {
      const comments = await Comment.find({ thema: req.params.id })
      res.status(200).json(comments)
     
    } catch (e) {
      console.log('dfqawd')
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  
module.exports = router