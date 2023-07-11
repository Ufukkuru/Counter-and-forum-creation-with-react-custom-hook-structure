import './Personal.css'
import React from 'react'
import useInput from './useInput'

export default function Personal() {
    const[firstName, bindFirstName, resetFirstName ] = useInput('')
    const[lastName, bindLastName, resetLastName ] = useInput('')

    const submitForm = (e)=>{
        e.preventDefault();
        alert(`Hi ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div className='margintop'>
        <form onSubmit={submitForm}>
            <div>
            <label>Name:</label>
            <input type="text" {...bindFirstName} placeholder='Enter name'/>
            </div>
            <div>
            <label>Last Name:</label>
            <input type="text"  {...bindLastName} placeholder='Enter Last Name'/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
