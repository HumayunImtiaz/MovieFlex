import React from 'react'
import Movie from './components/Movie'

function page() {
  return (
    <>    <div className='page'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/courses">Courses</a>
    </div>
   
    <Movie/>
    </>


  )
}

export default page