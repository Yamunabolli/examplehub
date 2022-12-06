import axios from 'axios'
import React, { useState } from 'react'

export default function Ex() {
    const [data,setData]=useState("")
var key=Object.keys(data)
axios.get(`https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json`,data)
.then(response => { 
    setData(response)
    
})
console.log(data.data);

  return (
    <h1></h1>
  )
}
