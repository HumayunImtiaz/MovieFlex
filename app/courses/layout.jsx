import React from 'react'
import Link from 'next/link'
function layout({children}) {
  return (
    
    <div>
        <Link href="/courses" style={{textDecoration:'none'}}>
        <h1>We Offer many Courses</h1>
        </Link>
        {children}
        
    </div>
  )
}

export default layout