import React , {useState} from 'react'

export default function About(props) {
     
  return (
     
    
    <div className={`container text-${props.mode === 'dark' ? 'white' : '#2b2b2b'}` } >
    
    <h1 className={`container my-4 text-${props.mode === 'dark' ? 'white' : '#2b2b2b'}`}>About Me</h1>
    <p>TextUtils is a simple tool designed to help you convert text to uppercase, lowercase, or easily copy it to your clipboard. It’s quick, easy, and perfect for anyone looking to save time on text transformations.</p>
   
   
    <div className="container my-5 mx-10"></div>
    <h3 className='my-5'>MySelf</h3>
    <p>I’m Nikhil Kumar Gupta, a third-year student at NIT Agartala. I created TextUtils with a passion for making everyday tasks more efficient through simple and user-friendly solutions. Enjoy transforming text with just a click!</p>

    </div>
   
  
  )
}
