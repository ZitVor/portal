import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import { useAuth } from '../hook/auth.hook'
export const RateList = ({ users }) => {
  if (!users.length) {
    return <p className="center">Звданий пока нет</p>
  }
  //TODO SORTING
  return (
   
   <div>
   
    <table>
    <thead>
    <tr>
      <th>№</th>
      <th>Название</th>
      <th>Рейтинг</th>
      <th>Ссылка</th>
    </tr>
    </thead>

    <tbody>
    {users.map((user, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{user.email}</td>
         <td>{user.rate}</td>
          <td>
            Открыть
          </td>
        </tr>
      )
    }) }
    </tbody>
  </table>
  </div>
  )
}