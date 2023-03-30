import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RequireNoAuth(props) {

  if(props.token != null){
   return <Navigate to="/" replace={true} />   
  } 
  return props.children;
}