import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider'


export default function Bookings() {
   const[booking,setBooking]=useState([])
   const{user}=useContext(AuthContext)
   const handleDelete=(id)=>{
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = booking.filter(
                  (bookdata) => bookdata._id !== id
                );
                setBooking(remaining);
              }
            });  

   }
})
   }
   
   useEffect(()=>{
    fetch(`http://localhost:5000/bookings?name=${user.name}`)
    .then(res=>res.json())
    .then(data=>setBooking(data))
   },[])

  return (
    <div className='container'>
<table className="table">
  <tbody>
  {
    booking.map((book,index)=>{
        return(

        <tr>
      <th scope="row">{index+1}</th>
      <td>{book.name}</td>
      <td>{book.age}</td>
      <td>{book.phone}</td>
      <td>{book.gender}</td>
      <td>{book.msg}</td>
      <td>{book.date}</td>
      <td><button className='btn bg-danger text-white' onClick={()=>handleDelete(book._id)}>delete</button></td>
      <td>update</td>
    </tr>
        )
    })
  }
    
  </tbody>
</table>
    </div>
  )
}
