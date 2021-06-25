import React,{useContext, useEffect, useState} from 'react'
import { ThemeInfo } from './ThemeInfo'
import {useHttp} from '../hook/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Admin} from '../Admin/Admin'
export const AdminListOfThemes = ({ themes }) => {
  console.log(themes)
  const [parsedThemes, setParsedThemes] = useState([])
  const {request} = useHttp()
  const auth = useContext(AuthContext)
  useEffect(()=> {
    if (themes){
      setParsedThemes(themes)
    }
  }, [themes])
  

  if (!parsedThemes.length) {
    return <p className="center">Тем для обсуджения пока нет</p>
  }
  console.log(parsedThemes)

  const deleteHandler = async (id) => {
    try {
      const data = await request(`/api/admin/deletetheme/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedThemes(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
  const putHandler = async (id, theme) => {
    try {
      const data = await request(`/api/admin/changetheme/${id}`, 'PUT', theme, {
        Authorization: `Bearer ${auth.token}`
      })
      
      setParsedThemes(data)
      
     // history.push(`/theme/${postId}`)
    } catch (e) {}
  }
 
  return (
      <div>
      <Admin/>
      <p>Теми</p>
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Дата создания</th>
        <th>Ссылка</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      {parsedThemes && parsedThemes.map((theme) => {
        return (
          <tr key={theme._id}>
            <ThemeInfo theme={theme} deleteHandler={deleteHandler} putHandler={putHandler}/>
          </tr>
        )
      }) }
      </tbody>
    </table>
    </div>
  )
}