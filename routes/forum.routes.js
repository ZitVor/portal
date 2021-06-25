const {Router}  = require('express')
const ForumPost = require('../models/ForumPost')
const Decision = require('../models/Decision')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/create', auth, async (req,res) =>{
    try{
        const {topic, body, authoremail} = req.body
        const post =  new ForumPost({
            topic, body, author: req.user.userId, authoremail
        })
        await post.save()
        console.log(post)
        res.status(201).json({post})
    }
    catch(e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
     }
})


router.delete('/user/:id', auth, async(req,res)=>{
  try{
    const { id } = req.params
    console.log(id)
    await User.findByIdAndRemove(id)
    console.log('wtf')
    res.json(await User.find())
  }
  catch(e){
    console.log('catch ebaniy')
  }
}
)

router.delete('/forupost/:id', auth, async(req,res)=>{
  try{
    const { id } = req.params
    console.log(id)
    await ForumPost.findByIdAndRemove(id)
    console.log('wtf')
    res.json(await ForumPost.find())
  }
  catch(e){

  }
}
)

router.get('/', auth, async (req, res) => {
    try {
      const posts = await ForumPost.find()
      res.json(posts)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

router.get('/:id', auth, async (req, res) => {
    try {
      const post = await ForumPost.findById(req.params.id)
      res.json(post)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router