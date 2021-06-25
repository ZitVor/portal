import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {AdminListOfPractice} from '../Admin/AdminListOfPractice'
import '../index.css'
export const AdminPractice = () => {
  const [tasks, setTasks] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchTasks = useCallback(async () => {
    try {
      const fetched = await request('/api/admin/getpractice', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setTasks(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <AdminListOfPractice tasks={tasks} />}
    </>
  )
}