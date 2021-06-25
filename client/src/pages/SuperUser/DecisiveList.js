import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export const DecisiveList = ({decisions}) =>{
    if(!decisions.length){
        return <p className="center">Немає рішень на форумі</p>
    }
    return(
        <div>
        
            <table>
                <thead>
                <th>Рішення</th>
                    <tr>
                        <td>Користувач</td>
                        <td>Завдання</td>
                        <td>Посилання на рішення</td>
                        <td>Перевірено</td>
                    </tr>
                </thead>
                <tbody>
                    {decisions.map(decision => {
                        return(
                            <tr>
                                <td>{decision.decisiveuseremail}</td>
                                <td><Link to={`/usertask/${decision.task}`}>Відкрити</Link></td>
                                <td>
                                <Link to={`/superuser/estimate/${decision._id}`}>Оцінити</Link>
                                </td>
                                <td><div style={{
                                    width:"20px", height:"20px",alignItems:"center", borderRadius:"50%", backgroundColor: decision.checked?"green":"red"
                                }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}