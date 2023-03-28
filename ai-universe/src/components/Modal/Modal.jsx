import React from 'react';

const Modal = (props) => {
const{image_link,description,integrations,features}=props.singleData

    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative max-w-5xl" htmlFor="">
  <div className="card lg:card-side bg-base-100">
  <div className="card-body">
    <h2 className="card-title">{description?description:"not found"}</h2>
    <div className='flex justify-between text-justify'>
      <div>
        <h2>Features</h2>
        {Object.values(features || {}).map(value=>(
          <p>{value.feature_name?value.feature_name:"Not found"}</p>
        ))}
      </div>
      <div>
        <h2>Integrations</h2>
        {integrations &&
          integrations.map(int=>(
            <p>{int?int:"Not found"}</p>
          ))
        }
      </div>
    </div>
    
  </div>
  <figure><img  className="w-full h-64" src={image_link && image_link[0]} alt="Album"/></figure>

</div>
  </label>
</label>
        </>
    );
};

export default Modal;