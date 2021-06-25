import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export const CarriedOutList = ({carriedouts}) =>{
    if(!carriedouts.length){
        return <p className="center">Немає виконаних завдань</p>
    }
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Завдання</td>
                        <td>Відповідь</td>
                        <td>Оцінка</td>
                        <td>Перевірено</td>
                        <td>Посилання</td>
                    </tr>
                        
                </thead>
                <tbody>
                    {carriedouts.map(carriedout => {
                        return(
                            <tr>
                                <td>{carriedout.decisiveuseremail}</td>
                                
                                <td ><Link to={`/usertask/${carriedout.task}` }>Відкрити</Link></td>
                                <td>{carriedout.text}</td>
                                <td><div style={{
                                    width:"20px", height:"20px", borderRadius:"50%", backgroundColor: carriedout.estimate?"green":"red"
                                }} /></td>
                                <td><div style={{
                                    width:"20px", height:"20px", borderRadius:"50%", backgroundColor: carriedout.checked?"green":"red"
                                }} /></td>
                                <td><Link to={`/doneinfo/${carriedout._id}`}>Відкрити</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}