import React, { useEffect, useReducer, useState } from 'react'
import './Adduser.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Adduser() {
    const [users,setUsers]=useState([])
  const nav = useNavigate()
  const [nmaeerr, setNameerr] = useState(false);

    const [data,setData]=useState({
      email:"",
      password:"",
      firstname:"",
      lastname:"",
      address:"",
      city:"",
      phoneno:"",
      states:"",
      pincode:""
    })


   const {password,email,city,pincode,states,address,firstname,lastname,phoneno} = data;
   const changehandler =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const getdata =()=>{
    axios.get("https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json")

    .then(res=>{
                 setUsers(res.data)
                 console.log(res)})
}
        useEffect((e)=>{  
          // e.preventDEfault();
          getdata() },[])

          console.log(users);
  var covert  = Object.keys(data).map(function(key)  
  {  
   return [Number(key), data[key]];  
 }); 
console.log(covert);


  var sett=Object.values(users);
  var ids=Object.keys(users);
  console.log(sett,ids);
//   for(var i=0; i<sett.length-1; i++){
//     sett[i].pkey = ids[i];
//  };

// console.log(arrayOfObj);
const submithandler=(e)=>{
  e.preventDefault();
  console.log(e);
  console.log(users);
  console.log(data.key,ids);
  console.log('res body',data)
  fetch('https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json', {
    method: 'POST',
    headers: { "userdata": "user/json" },
    body: JSON.stringify(data)
})
  console.log(data.data.name); 
  //  .then(auth=>{nav('/Users')})   

  }


  //       axios.put("https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json",data)
  //  .then(response => setData(response))
  // //  .then(auth=>{nav('/Users')})   

  return (
    <><div >
 <br></br><br></br>

    </div>
    <div>
    <Form onSubmit={submithandler} autoComplete="nope">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control  name="firstname" type="text" value={firstname} placeholder="name..." onChange={changehandler} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  name="lastname" type="text" value={lastname} placeholder="name..." onChange={changehandler} />
        </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control  name="email" type="email" value={email} placeholder="Email..." onChange={changehandler} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password" type="password" value={password} placeholder="Password..." onChange={changehandler} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhonenumber">
          <Form.Label>Phone No</Form.Label>
          <Form.Control  name="phoneno" type="text" value={phoneno} placeholder="Phoneno..." onChange={changehandler} />
        </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name="adress" type="text" value={adress} placeholder="Adress..." onChange={changehandler}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control as="textarea" placeholder="your address" name="address" type='text'  value={address}
        onChange={changehandler}     style={{     height: "2cm",
          width: "-webkit-fill-available" }}
 />      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  name="city" type="text" value={city} placeholder="city..." onChange={changehandler} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control  name="states" type="text" value={states} placeholder="state..." onChange={changehandler} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pincode</Form.Label>
          <Form.Control  name="pincode" type="number" value={pincode}  placeholder="pincode..." onChange={changehandler}/>
        </Form.Group>
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}
