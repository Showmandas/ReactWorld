import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

export default function Bookings() {
    const{user}=useContext(AuthContext)
    const url=`http://localhost:5000/bookings?email=${user.email}`
  return (
    <div>Bookings</div>
  )
}
