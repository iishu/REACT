import React, {useState} from 'react'

function Products({age,data}) {
    const [a,b]=useState(false);
  return (
    <div className="text-yellow-100 w-full h-64 bg-zinc-800">
        {/* <h1>{age}</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2> */}
        <h4 className={`${a===false ? "text-red-400":"text-green-400"}`}>{a=== false ? "hello" :"hi"}</h4>  {/*ternary operator , it is also known as conditional rendering*/}
        <button onclick={()=>b(!a)}>change</button>
        </div>
  )
}

export default Products