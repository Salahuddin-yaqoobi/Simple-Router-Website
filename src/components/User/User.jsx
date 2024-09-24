import React from 'react'
import { useParams } from 'react-router-dom'
//this import method give us the direct acces to the userid value present in the main file

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white text-2xl p-4 '>
      User : {userid}
    </div>
  )
}

export default User
