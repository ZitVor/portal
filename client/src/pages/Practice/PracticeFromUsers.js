import React, {useContext, useEffect, useState,useCallback} from 'react'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from './../../context/AuthContext'
import {Loader} from '../../сomponents/Loader'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import '../../index.css'
import { Practice } from './Practice'
import { ListOfUsersTask } from './ListOfUsersTask'

 
export const  PracticeFromUsers = () =>{
    const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [taskfromusers, setTask] = useState(null)

  const getTask = useCallback(async () => {
    try {
      const fetched = await request(`/api/taskfromusers/`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setTask(fetched)

    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    getTask()
  }, [getTask])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && taskfromusers && <ListOfUsersTask taskfromusers={taskfromusers} /> }
    </>
  )
}