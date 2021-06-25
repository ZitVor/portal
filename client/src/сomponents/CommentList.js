import React from 'react'

export const CommentList = ({comments}) =>{
    if(!comments.length){
        return <p className="center">Комментариев пока что нет</p>
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Комментарии</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment => {
                        return(
                            <tr>
                                <td>Автор:{comment.authoremail}</td>
                                <td>Дата:{new Date(comment.date).toLocaleTimeString()}</td>
                                <td>Текст:{comment.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}