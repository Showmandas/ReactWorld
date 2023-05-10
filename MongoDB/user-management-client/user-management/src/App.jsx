import React from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const handleFormCreate=(e)=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const gender=form.gender.value;
    const status=form.status.value;
    const user={name,email,gender,status}
    console.log(user)
  }
  return (
    <div className='container d-flex flex-column m-auto justify-content-center align-items-center mt-5 w-50'>
    <h3 className='text-success'>Add User</h3>
     <div className='container card w-sm-100'>
     <form onSubmit={handleFormCreate}>
     <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name='name' className="form-control" id="name" placeholder='enter name'/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="email" placeholder='enter email'/>
  </div>
  <div className="form-check mb-3">
  <input className="form-check-input" type="radio" name="gender" value='Male' id="gender"/>
  <label className="form-check-label">
    Male
  </label>
</div>
  <div className="form-check mb-3">
  <input className="form-check-input" type="radio" name="gender" value='Female' id="gender"/>
  <label className="form-check-label">
    Female
  </label>
</div>
  <div className="mb-3">
    <label  className="form-label">status</label>
    <input type="text" className="form-control" id="status"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     </div>
      
    </div>
  )
}

export default App
