"use client"
import React, { useEffect, useState } from 'react'

function page() {
    const [api , setapi]=useState([])
    useEffect(()=>{
        try{
          const fetchData=async()=>{
            const response= await fetch('https://jsonplaceholder.typicode.com/users');
            const data= await response.json()
            setapi(data)
            console.log('This is fetch data' , data)
          }
          fetchData()
        }
        catch{
        console.log(error)
        }
      
    },[])
  return (
    <div>
        <h1>This is fetch Page </h1>
        {
            api.map((data)=>(
                <div key={data.id}>
                    <h3>{data.id} : Name :{data.name}</h3>
                </div>
            ))
        }
    </div>
  )
}


export default page