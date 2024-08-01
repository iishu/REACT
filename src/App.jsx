 import React from 'react'
import { useState } from 'react'
import Products from './Products';
 
 function App() {
  var [a,b]= useState(99);

   return (
     <div className="w-full h-screen bg-zinc-900 text-white p-5">
      <h1>{a}</h1>
      <button onClick={()=>b(a+10)} className="px-3 py-1 bg-green-500 rounded">click</button>
      <Products age='25' data={{age:25,name:"harsh"}} />
      </div>
   )
 }
 
 export default App