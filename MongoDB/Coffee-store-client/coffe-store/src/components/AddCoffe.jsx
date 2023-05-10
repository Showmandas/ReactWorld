import React from 'react'

function AddCoffe() {
  const handleAdd=(e)=>{
    e.preventDefault()
    const form=e.target;
    const coffeeName=form.coffeeName.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const addValues={coffeeName,quantity,supplier,taste};
    fetch('dfsfsfsfd/sfdsf',{
      method:'POST',
      headers:{
        "content-type":'application/json'
      },
      body:JSON.stringify(addValues)
    })
    

  }
  return (
    <div>
    <h2>Add Coffee</h2>
    <form className='container w-50' onSubmit={handleAdd}>
  <div className="mb-3">
    <label className="form-label">Coffee name</label>
    <input type="text" className="form-control" id="coffname" name='coffeename'/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Available quantity</label>
    <input type="text" className="form-control" id="quantity" name='quantity'/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Supplier</label>
    <input type="text" className="form-control" id="supplier" name='supplier'/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Taste</label>
    <input type="text" className="form-control" id="taste" name='taste'/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddCoffe