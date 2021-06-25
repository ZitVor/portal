import React, {useContext, useEffect, useState,useCallback} from 'react'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from './../../context/AuthContext'
import {Loader} from '../../сomponents/Loader'
import '../../index.css'
import { Practice } from './Practice'
 
 
export const  SiteTask = () =>{
  
  return (

   <div>
       <Practice></Practice>
   </div>
  )
}