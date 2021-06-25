import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hook/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory, useParams} from 'react-router-dom'
import { useMessage } from '../hook/message.hook'

export const ForumThemeCard = ({post, comments}) => 
{
  console.log(comments)
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const {message} = useMessage()
  const [comment, setComment] = useState('')
  const {id} = useParams()

  const pressHandler = async () => {
      try {
        const data = await request(`/api/comment/${id}`, 'POST', {body: comment, authoremail: auth.userEmail }, {
          Authorization: `Bearer ${auth.token}`
        })
        
        message('Коментар був створений')
        console.log(data)
       history.push(`/theme/${id}`)
      } catch (e) {}
    }
  

    useEffect(() => 
    {
      window.M.updateTextFields()
    }, [])
  
  return (
    <div>
      <div>
        <p style={{display:"flex", justifyContent:"space-between" }}><span><strong>{post.authoremail}</strong></span>{new Date(post.date).toLocaleDateString()}<span></span></p>
        <p>Назва теми: <strong>{post.topic}</strong></p>
        <p>Текст теми:</p>
        <p>{post.body}</p>
      <div className="row">
      <div>
      <div  >
        <div className="input-field" style={{width:'80%', alignItems:'center'}}>
          <input 
            placeholder="Введите комментарий"
            id="comment"
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div> 
        <button style={{marginBottom:'25px'}}
                className="btn grey lighten-1 black-text"
                onClick={pressHandler}>
                Створити 
            </button>
      </div>
      </div>
      <div  > 
      {comments && comments.map(comment => {
        console.log(comment)
        return(
          <div>
          <div>
            <strong  style={{paddingTop:'10px'}}>{comment.authoremail}</strong>
            <p>{new Date(comment.date).toLocaleTimeString()}</p>
            <p >{comment.body}</p>
          </div> 
          </div>
        )
      })}
      </div>
                   
        
    </div>
    </div>
    </div>
  )
}