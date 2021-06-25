import React, { useContext, useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { CommentInfo } from './CommentInfo'
import {useHttp} from '../hook/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Admin} from '../Admin/Admin'
export const AdminListOfComments = ({ comments }) => {

  console.log(comments)
  const [parsedComments, setParsedComments] = useState([])
  const {request} = useHttp()
  const auth = useContext(AuthContext)
  useEffect(()=> {
    if (comments){
      setParsedComments(comments)
    }
  }, [comments])
  

  if (!comments.length) {
    return <p className="center">Кооментарів поки немає</p>
  }

  const deleteHandler = async (id) => {
    try {
      const data = await request(`/api/admin/deletecomment/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedComments(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  const putHandler = async (id, user) => {
    try {
      const data = await request(`/api/admin/changecomment/${id}`, 'PUT', user, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedComments(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  return (
      <div>
      <Admin/>
      <p>Коментарі</p>
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Дата создания</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      {parsedComments && parsedComments.map((comment) => {
        return (
          <tr key={comment._id}>
            <CommentInfo comment={comment} deleteHandler={deleteHandler} putHandler={putHandler}/>
          </tr>
        )
      }) }
      </tbody>
    </table>
    </div>
  )
}