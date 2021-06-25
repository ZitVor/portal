import React, {useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from '../../context/AuthContext'
import '../../index.css'
export const  CreateTheme = () =>{
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [post, setPost] = useState({
      topic:'', body:'',authoremail:auth.userEmail 
  })
    
  const changeHandler = event => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }
  const pressHandler = async() => {
         try {
           console.log(post)
        const data = await request('/api/forumtheme/create', 'POST', {...post}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/theme/${data.post._id}`)
      } catch (e) {}
    }
    useEffect(() => {
        window.M.updateTextFields()
      }, [])

    return(
        <div className="create">
        <p className="pageName" style={{textAlign:"center", fontWeight:"900"}}>Створити тему</p>
            <div className="input-field  ">
                  <input 
                  placeholder="Введіть назву теми" 
                  id="topic"
                  type="text"
                  name ="topic"
                  value={post.topic}
                  onChange={changeHandler}
                  />
                  <input
                  placeholder="Розкрийте тему" 
                  id="body"
                  name = "body"
                  type="text"
                  value={post.body}
                  onChange={changeHandler}
                  />
            </div>
      
            <button 
                className="btn grey lighten-1 black-text"
                onClick={pressHandler}>
                Створити 
            </button>
        </div>
    )
    
}