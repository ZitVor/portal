const {Router}  = require('express')
const ForumPost = require('../models/ForumPost')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const Comment = require('../models/Comment')
const TaskFromUser = require('../models/TaskFromUser')
const router = Router()

router.get('/getcomments', auth, async (req, res) => {
    try {
      const comments = await Comment.find()
      res.status(200).json(comments)
     
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.get('/getusers', auth, async (req, res) => {
    try {
      
      const users = await User.find()
      res.status(200).json(users)
     
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  
  router.get('/getthemes', auth, async (req, res) => {
    try {
      const themes = await ForumPost.find()
      res.status(200).json(themes) 
     
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.put('/changeuser/:id', auth, async(req, res)=>{
    try {
      const body = req.body
      const user = await User.findByIdAndUpdate(req.params.id, body)
      res.status(200).json(await User.find())
     
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  router.delete('/deletecomment/:id', auth, async(req,res)=>{
    try{
      const { id } = req.params
      console.log(id)
      await Comment.findByIdAndRemove(id)
      console.log('wtf')
      res.json(await Comment.find())
    }
    catch(e){
      console.log('catch ebaniy')
    }
  }
  )

  router.delete('/deletetheme/:id', auth, async(req,res)=>{
    try{
      const { id } = req.params
      console.log(id)
      await ForumPost.findByIdAndRemove(id)
      console.log('wtf')
      res.json(await ForumPost.find())
    }
    catch(e){
      console.log('catch ebaniy')
    }
  }
  )

  router.put('/changecomment/:id', auth, async(req, res)=>{
    try {
      const body = req.body
      const user = await Comment.findByIdAndUpdate(req.params.id, body)
      res.status(200).json(await Comment.find())
     
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.put('/changetheme/:id', auth, async(req, res)=>{
    try {
      const body = req.body
      const theme = await ForumPost.findByIdAndUpdate(req.params.id, body)
      res.status(200).json(await ForumPost.find())
     
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.get('/getpractice', auth, async (req, res) => {
    try {
      const tasks = await TaskFromUser.find()
      res.status(200).json(tasks)
     
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })


  
module.exports = router