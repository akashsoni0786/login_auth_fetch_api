import React from 'react'
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
  return (
    <div>
        <img alt='' style={{width:"200px"}} src='https://cdn-icons-png.flaticon.com/512/6966/6966021.png'/>
        <div >
    <p >User token : {location.state.mytoken}</p >
    </div> </div>
  )
}

export default Welcome