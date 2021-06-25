import React, { useContext, useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Admin} from '../Admin/Admin'
import { PracticeInfo } from './PracticeInfo'
import {useHttp} from '../hook/http.hook'
import {AuthContext} from '../context/AuthContext'
export const AdminListOfPractice = ({ tasks }) => {
  console.log(tasks)
  const [parsedTasks, setParsedTasks] = useState([])
  const {request} = useHttp()
  const auth = useContext(AuthContext)
  useEffect(()=> {
    if (tasks){
      setParsedTasks(tasks)
    }
  }, [tasks])
  if (!parsedTasks.length) {
    return <p className="center"> Користувачів поки немає</p>
  }

  const deleteHandler = async (id) => {
    try {
      const data = await request(`/api/admin/deletecomment/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedTasks(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  const putHandler = async (id, user) => {
    try {
      const data = await request(`/api/admin/changecomment/${id}`, 'PUT', user, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedTasks(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  return (
      <div>
      <Admin/>
      <p>Практика</p>
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Дата создания</th>
        <th>Ссылка</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      {parsedTasks && parsedTasks.map((practice) => {
        return (
          <tr key={practice._id}>
            <PracticeInfo practice={practice} deleteHandler={deleteHandler} putHandler={putHandler}/>
          </tr>
        )
      }) }
      </tbody>
    </table>
    </div>
  )
}