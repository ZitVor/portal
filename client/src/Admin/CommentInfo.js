import React, { useState , useEffect} from 'react'
export const CommentInfo = ({comment, deleteHandler, putHandler}) => {
    console.log(deleteHandler)
  const [parsedComment, setParsedComment] = useState(null)
  useEffect(()=> {
    if (comment){
        console.log(comment)
      setParsedComment(comment)
    }
  }, [comment])
  if (!parsedComment ) {
    return <p className="center"> Комментарів поки немає</p>
  }
  const onChange = (e, type) => {
    console.log(e)
    setParsedComment({...parsedComment, [type]: e.target.value})
   }
 

  return (
      <>
            <td><div>{parsedComment._id}</div></td>
            <td><input value={parsedComment.body} onChange={(e)=>onChange(e, 'body')}/></td>
            <td><input value={parsedComment.date}  onChange={(e)=>onChange(e, 'date')}/></td>
            <th><button className="btn grey lighten-1 black-text" onClick={()=>deleteHandler(parsedComment._id)}>
                Видалити
            </button></th>
            <th>
            <button className="btn grey lighten-1 black-text" onClick={()=>putHandler(parsedComment._id, parsedComment)}>Редагувати</button></th>
    </>
  )
}