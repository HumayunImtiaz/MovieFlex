import { NextResponse } from "next/server";
// This is for Search params in route handler

// http://localhost:3000/api/products/search
const products=[
    {
        name: "Sikander",
        description:"This",
        duration:"3 months",
        
    },
    {
        name : "Adil Abbas",
        description:"This course cover all the content of Python",
        duration:"5 months",
       
    },
    {
        name : "Humayun Imtiaz",
        description:"This course cover all the content of Python",
        duration:"6 months",
     
    }
]


export async function GET(res){
    const searchParams = res.nextUrl.searchParams;
    const query = searchParams.get("name")
  
    // console.log("This is one",query);
    const SearchProduct= products.filter((product)=>(product.name.toLowerCase().includes(query.toLowerCase())))

  return NextResponse.json({
    message: "This is for search params in route handler",
    success: true,
    SearchProduct,
  })
}