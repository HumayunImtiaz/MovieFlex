import React from 'react'

const FetchData= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json();
    console.log("This is from server data : ",data)
    return data
}

 const page = async() => {
    const result=await FetchData()
  return (
    <div>
        {
            result.map((data)=>(
                <div key={data.id}>
                 <h3>{data.id} Name : {data.name}</h3>
                </div>
            ))
        }
    </div>
  )
}
export default page;
