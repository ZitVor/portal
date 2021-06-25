import React,{useCallback, useContext, useEffect, useState} from 'react'
import { AuthContext } from './../../context/AuthContext'
import {useHistory, useParams, Link} from 'react-router-dom'
import {Practice} from '../../pages/Practice/Practice'

export const ListOfUsersTask = ({taskfromusers}) =>{
    if (!taskfromusers.length) {
        return <p className="center">Звданий пока нет</p>
      }
    return(
        
        <div>
        <Practice></Practice>
            <div className="practiceFromUsers">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Назва</th>
                            <th>Автор</th>
                            <th>Дата публікації</th>
                            <th>Посилання</th>
                        </tr>
                    </thead>
                    <tbody>
                    {taskfromusers.map((taskfromuser, index)=>{
                        return(
                            <tr key={taskfromuser._id}>
                            <td>{index+1}</td>
                            <td>{taskfromuser.topic}</td>
                            <td>{taskfromuser.authoremail}</td>
                            <td>{new Date(taskfromuser.date).toLocaleTimeString()}</td>
                            <td>
                                <Link to={`/usertask/${taskfromuser._id}`}>Відкрити</Link>
                            </td>
                        </tr>
                        )
                    })
                    
                    }
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}