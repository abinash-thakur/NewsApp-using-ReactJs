import React from 'react'
import Loading from '../loader.gif'

export default function Spinner()
{
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading} alt="laoding" style={{height:"50px"}}></img>
      </div>
    )
}
