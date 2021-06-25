import React,{useCallback, useContext, useEffect, useState} from 'react'
import { AuthContext } from './../../context/AuthContext'
import {useHistory, useParams} from 'react-router-dom'
import '../../index.css'
import {useHttp} from '../../hook/http.hook'
import {UserTaskCard} from '../../сomponents/UserTaskCard'
import {Loader} from '../../сomponents/Loader'
export const UserTask = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [taskfromusers, setTask] = useState(null)
  const taskfromusersId = useParams().id

  const getTask = useCallback(async () => {
    try {
        console.log(taskfromusersId)
      const fetched = await request(`/api/taskfromusers/${taskfromusersId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setTask(fetched)

    } catch (e) {}
  }, [token, taskfromusersId, request])

  useEffect(() => {
    getTask()
  }, [getTask])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && taskfromusers && <UserTaskCard taskfromusers={taskfromusers} /> }
    </>
  )
}