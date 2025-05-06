"use client"
import React from 'react'
import { useState } from 'react'

const page= (props)=>{
    const { slug } = props.params;

    const [number, setnumber]=useState(0)
    function Count (){
      setnumber(number+1)
    }
    const courses=[
        {
            title : "Python Course",
            description:"This course cover all the content of Python",
            duration:"3 months",
            Project:[
                "Ecommerce Project",
                "Hospital Managment System",
                "Banking Managment System"
            ]
        },
        {
            title : "sda Course",
            description:"This course cover all the content of Python",
            duration:"5 months",
            Project:[
                "Mern Project",
                "Hospital Managment System",
                "Banking Managment System"
            ]
        },
        {
            title : "MERN Course",
            description:"This course cover all the content of Python",
            duration:"6 months",
            Project:[
                "Ecommerce Project",
                "Hospital Managment System",
                "Banking Managment System"
            ]
        },
        {
            title : "Python Course",
            description:"This course cover all the content of Python",
            duration:"4 months",
            Project:[
                "Ecommerce Project",
                "Hospital Managment System",
                "Banking Managment System"
            ]
        }
    ]
    const course= courses.filter((data)=>data.title.toLowerCase().includes(slug.toLowerCase()))

  return (
   
    <div>
          <h1>{number}</h1>
          <button onClick={Count}>Add</button>
         <h2>Wellcome to the {course[0].title}</h2>
         <ol>
            <li>Decription is {course[0].description}</li>
            <li>Duration is {course[0].duration}</li>
         </ol>
         <h1>Project Include {course[0].title}</h1>
         {
            course[0].Project.map((item)=>(
                <div key={item.id}>
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
            ))
         }
       
   </div>
  )
}

export default page