import React, { useState , useEffect} from 'react'
export const UserInfo = ({user, deleteHandler, putHandler}) => {
    console.log(deleteHandler)
  const [parsedUser, setParsedUser] = useState(null)
  useEffect(()=> {
    if (user){
        console.log(user)
      setParsedUser(user)
    }
  }, [user])
  if (!parsedUser ) {
    return <p className="center"> Користувачів поки немає</p>
  }
  const onChange = (e, type) => {
    console.log(e)
    setParsedUser({...parsedUser, [type]: e.target.value})
   }
 

  return (
      <>
            <td><div>{parsedUser._id}</div></td>
            <td><input value={parsedUser.email} onChange={(e)=>onChange(e, 'email')}/></td>
            <td><input value={parsedUser.rate}  onChange={(e)=>onChange(e, 'rate')}/></td>
            <th><button className="btn grey lighten-1 black-text" onClick={()=>deleteHandler(parsedUser._id)}>
                Видалити
            </button></th>
            <th>
            <button className="btn grey lighten-1 black-text" onClick={()=>putHandler(parsedUser._id, parsedUser)}>Редагувати</button></th>
    </>
  )
}