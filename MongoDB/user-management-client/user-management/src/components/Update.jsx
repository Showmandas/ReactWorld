import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Update() {
    const loadData=useLoaderData()
    console.log(loadData)
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const gender=form.gender.value;
        const status=form.status.value;
        const UpdateUser={name,email,gender,status}
        console.log(UpdateUser)
        fetch(`http://localhost:5000/users/${loadData._id}`,{
          method:'PUT',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(UpdateUser)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
          if(data.modifiedCount > 0){
            alert("User data updated successfully")
          }
        })
      }
  return (
    <div className='container d-flex flex-column m-auto justify-content-center align-items-center mt-5 w-50'>
    <h3 className='text-success'>Update User</h3>
     <div className='container card w-sm-100'>
     <form onSubmit={handleUpdate}>
     <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name='name' defaultValue={loadData?.name} className="form-control" id="name" placeholder='update name' required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email' defaultValue={loadData?.email} className="form-control" id="email" placeholder='update email' required/>
  </div>
  <div className="form-check mb-3">
  <input className="form-check-input" type="radio" defaultChecked={loadData?.gender} name="gender" value='Male' id="gender" required/>
  <label className="form-check-label">
    Male
  </label>
</div>
  <div className="form-check mb-3">
  <input className="form-check-input" type="radio" name="gender" defaultChecked={loadData?.gender} value='Female' id="gender" required/>
  <label className="form-check-label">
    Female
  </label>
</div>
  <div className="mb-3">
    <label  className="form-label">status</label>
    <input type="text" className="form-control" id="status" defaultValue={loadData?.status} name='status' placeholder='update status' required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Update data</button>
</form>
     </div>
      
    </div>
  )
}
