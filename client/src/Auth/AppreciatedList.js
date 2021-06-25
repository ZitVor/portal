import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export const AppreciatedList = ({apprecieteds}) =>{
    if(!apprecieteds.length){
        return <p className="center">Немає сданих завдань</p>
    }
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Теми</th>
                    </tr>
                </thead>
                <tbody>
                    {apprecieteds.map(apprecieted => {
                        return(
                            <tr>
                                <td>{apprecieted.decisiveuseremail}</td>
                                <td>{apprecieted.text}</td>
                                <td>{apprecieted.task}</td>
                                <td>{apprecieted.task}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}