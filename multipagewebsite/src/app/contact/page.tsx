import React from 'react'

const Contact = () => {
  return (
   <div className='box'> 
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form className='box1'>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Email Adress' required/>
            <input type="text" placeholder='Phone Number' />
            <textarea placeholder='Your Message' rows={5} required></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
   </div> 
  )
}

export default Contact