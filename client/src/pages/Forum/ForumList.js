import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export const ForumList = ({themes}) =>{
    if(!themes.length){
        return <p className="center">Немає тем на форумі <NavLink to ="/forum/createtheme">Створити тему</NavLink></p>
    }
    return(
        <div>
        <div className="btn grey lighten-1 black-text" style={{marginTop:"20px"}}><NavLink to ="/forum/createtheme" style={{color:"black"}}>Створити тему</NavLink></div>
            <table>
                <thead>
                <th>Теми</th>
                    <tr>
                        
                        <td>Назва теми</td>
                        <td>Користувач</td>
                        <td>Дата</td>
                        <td>Посилання</td>
                    </tr>
                </thead>
                <tbody>
                    {themes.map(thema => {
                        return(
                            <tr>
                            <td><strong>{thema.topic}</strong></td>
                                <td>{thema.authoremail}</td>
                                <td>{new Date(thema.date).toLocaleTimeString()}</td>
                                
                                <td>
                                <Link to={`/theme/${thema._id}`}>Відкрити</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}