import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export const HandedOverList = ({handedovers}) =>{
    if(!handedovers.length){
        return <p className="center">Немає сданих завдань</p>
    }
    
    return(
        <div>
        <div><NavLink to ="/forum/createtheme">Створити тему</NavLink></div>
            <table>
                <thead>
                    <tr>
                        <th>Теми</th>
                    </tr>
                </thead>
                <tbody>
                    {handedovers.map(handedover => {
                        return(
                            <tr>
                                <td>{handedover.decisiveuseremail}</td>
                                <td>{handedover.text}</td>
                                <td>{handedover.task}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}