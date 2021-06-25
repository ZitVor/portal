import React from 'react'
import {Link} from 'react-router-dom'

export const ForumList = ({ themes }) => {
  if (!themes.length) {
    return <p className="center">Тем для дискусій немає</p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Назва</th>
        <th>Автор</th>
        <th>Дата створення</th>
        <th>Посилання</th>
      </tr>
      </thead>

      <tbody>
      {themes.map((forumpost, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{forumpost.topic}</td>
            <td>{forumpost.authoremail}</td>
            <td>{new Date(forumpost.date).toLocaleDateString()}</td>
            <td>
              <Link to={`/detail/${forumpost._id}`}>Відкрити</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}