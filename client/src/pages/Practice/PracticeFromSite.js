import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../../hook/http.hook'
import {AuthContext} from '../../context/AuthContext'
import {Loader} from '../../сomponents/Loader'
import { ListOfSiteTask } from './ListOfSiteTask'

export const PracticeFromSite = () => {
  const [tasks, setTasks] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchTasks = useCallback(async () => {
    try {
      const fetched = await request('/api/taskfromsite', 'GET', null, {
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
      {!loading && <ListOfSiteTask tasks={tasks} />}
    </>
  )
}