import React, { useContext, useState , useEffect} from 'react'
import {Admin} from '../Admin/Admin'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hook/http.hook'
import { UserInfo } from './UserInfo'
export const AdminListOfUsers = ({ users }) => {
  console.log(users)
  const [parsedUsers, setParsedUsers] = useState([])
  const {request} = useHttp()
  const auth = useContext(AuthContext)
  useEffect(()=> {
    if (users){
      setParsedUsers(users)
    }
  }, [users])
  if (!parsedUsers.length) {
    return <p className="center"> Користувачів поки немає</p>
  }

  const deleteHandler = async (id) => {
    try {
      const data = await request(`/api/forumtheme/user/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedUsers(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  const putHandler = async (id, user) => {
    try {
      const data = await request(`/api/admin/changeuser/${id}`, 'PUT', user, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedUsers(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
 

  return (
      <div>
      <Admin/>
      <p>Користувачі</p>
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Рейтинг</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      {parsedUsers.length && parsedUsers.map((user) => {
        return (
          <tr key={user._id}>
            <UserInfo user={user} deleteHandler={deleteHandler} putHandler={putHandler}/>
          </tr>
        )
      }) }
      </tbody>
    </table>
    </div>
  )
}