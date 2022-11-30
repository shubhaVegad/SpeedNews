import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner=()=> {
 
    return (
      <div className='text-center' style={{ position:'relative', zIndex : '2', marginTop: '2cm' }}>
        <img className='my-5' src={loading} alt="loading" />
      </div>
    )

}
export default Spinner
