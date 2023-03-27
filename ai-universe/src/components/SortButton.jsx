import React from 'react';

const SortButton = (props) => {
    const{children}=props;
    return (
        <div className='my-8'>
            <button className="btn btn-error capitalize font-bold">{children}</button>
        </div>
    );
};

export default SortButton;