import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {Loader} from '../../сomponents/Loader'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from '../../context/AuthContext'
import {ForumList} from '../Forum/ForumList'
import '../../index.css'
export const Forum = () => {
  const [themes, setThemes] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchThemes = useCallback(async () => {
    try {
      const fetched = await request('/api/forumtheme/', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setThemes(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchThemes()
  }, [fetchThemes])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <ForumList themes={themes} />}
    </>
  )
}