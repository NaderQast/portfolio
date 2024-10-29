import React from 'react'
import { CONTACT, Links } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl '>
        Get in Touch
        </h1>
        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='text-xl'>{CONTACT.email}</p>
            <a className='btn btn-outline btn-primary text-center my-6 ' href={Links.CV} target='_blank'>Download My CV</a>
        </div>
        
    </div>
  )
}

export default Contact