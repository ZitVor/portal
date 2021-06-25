import React from 'react'
import {Link} from 'react-router-dom'

export const ListOfSiteTask = ({ tasks }) => {
  if (!tasks.length) {
    return <p className="center">Звданий пока нет</p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Дата добавление</th>
        <th>Ссылка</th>
      </tr>
      </thead>

      <tbody>
      {tasks.map((taskfromsite, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{taskfromsite.topic}</td>
            <td>{new Date(taskfromsite.date).toLocaleTimeString()}</td>
            <td>
              <Link to={`/detail/${taskfromsite._id}`}>Открыть</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}