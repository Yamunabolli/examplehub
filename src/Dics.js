import React from 'react'
import { useState } from 'react'


function Dics() {
const [data,setData]=useState(true)
const [use,setUse]=useState("")
const [user,setUser]=useState("")


function add()
{
setUse("vandhana")
}


  return (
    <div className="App">
      <h1>{use}</h1>
    <button onClick={add}>click</button>
    </div>
  );
}

export default Dics;