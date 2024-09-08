import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl '>
        Get in Touch
        </h1>
        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='https://drive.google.com/file/d/1-B9GXHsRpf0Zg-jFcO7maNa9YIVcEkh8/view?usp=sharing' className='border-b '>{CONTACT.email}</a>
        </div>
        
    </div>
  )
}

export default Contact