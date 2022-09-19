import React from 'react';
import '../App.css'

const Loader = () => {
    return (

        <div className='container'>
            <div className='w-25 mx-auto p-3 mt-5'>
                <div className="lds-dual-ring"></div>
            </div>
        </div>
    );
};

export default Loader;