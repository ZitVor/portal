import React, { useState , useEffect} from 'react'
export const ThemeInfo = ({theme, deleteHandler, putHandler}) => {
    console.log(deleteHandler)
  const [parsedTheme, setParsedTheme] = useState(null)
  useEffect(()=> {
    if (theme){
        console.log(theme)
        setParsedTheme(theme)
    }
  }, [theme])
  if (!parsedTheme ) {
    return <p className="center"> Комментарів поки немає</p>
  }
  const onChange = (e, type) => {
    console.log(e)
    setParsedTheme({...parsedTheme, [type]: e.target.value})
   }
 

  return (
      <>
            <td><div>{parsedTheme._id}</div></td>
            <td><input value={parsedTheme.body} onChange={(e)=>onChange(e, 'body')}/></td>
            <td><input value={parsedTheme.date}  onChange={(e)=>onChange(e, 'date')}/></td>
            <th><button className="btn grey lighten-1 black-text" onClick={()=>deleteHandler(parsedTheme._id)}>
                Видалити
            </button></th>
            <th>
            <button className="btn grey lighten-1 black-text" onClick={()=>putHandler(parsedTheme._id, parsedTheme)}>Редагувати</button></th>
    </>
  )
}