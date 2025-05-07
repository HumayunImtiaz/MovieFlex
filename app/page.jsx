import React from 'react'
import Movie from './components/Movie'

function page() {
  return (
    <>    <div className='page' >
      <a className='hello' href="/">Home</a>
      <a className='hello' href="/about">About</a>
      <a className='hello' href="/contact">Contact</a>
      <a className='hello' href="/courses">Courses</a>
    </div>
   
    <Movie/>
    </>


  )
}

export default page