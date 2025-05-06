import { NextResponse } from "next/server";
// This is about api handler
// In the last we also add the POST route 
//   https:localhost:3000/api/products
const products=[
    {
        title : "Adil",
        description:"This course cover all the content of Python",
        duration:"3 months",
     
    },
    {
        title : "Humayun",
        description:"This course cover all the content of Python",
        duration:"5 months",
       
    },
    {
        title : "Sikander",
        description:"This course cover all the content of Python",
        duration:"6 months",
      
    
    }
]

export async function GET(res){
    return NextResponse.json({
        message: "This is Products api route",
        success: true,
        products,

    })
}
export async function POST(req){
    const data= await req.json()
    products.push(data);
    return NextResponse.json({
        message: "This is for POST route",
        products

    })
}