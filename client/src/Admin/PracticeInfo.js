import React, { useState , useEffect} from 'react'
export const PracticeInfo = ({practice, deleteHandler, putHandler}) => {
    console.log(deleteHandler)
  const [parsedPractice, setParsedPractice] = useState(null)
  useEffect(()=> {
    if (practice){
        console.log(practice)
      setParsedPractice(practice)
    }
  }, [practice])
  if (!parsedPractice ) {
    return <p className="center"> Комментарів поки немає</p>
  }
  const onChange = (e, type) => {
    console.log(e)
    setParsedPractice({...parsedPractice, [type]: e.target.value})
   }
 

  return (
      <>
            <td><div>{parsedPractice._id}</div></td>
            <td><input value={parsedPractice.body} onChange={(e)=>onChange(e, 'body')}/></td>
            <td><input value={parsedPractice.date}  onChange={(e)=>onChange(e, 'date')}/></td>
            <th><button className="btn grey lighten-1 black-text" onClick={()=>deleteHandler(parsedPractice._id)}>
                Видалити
            </button></th>
            <th>
            <button className="btn grey lighten-1 black-text" onClick={()=>putHandler(parsedPractice._id, parsedPractice)}>Редагувати</button></th>
    </>
  )
}