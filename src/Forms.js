import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Forms() {
  const [users, setUsers] = useState([])
  const [userId, setuserID] = useState("")
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setpassword] = useState("");
  const[pincode,setpincode]=useState("")
  const[city,setcity]=useState("");
  const[states,setstates]=useState("")

  const location = useLocation()

  const getdata = () => {
    axios.get("https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json")

      .then(res => {
        setUsers(res.data)
        setfirstname(res[0].firstname)
        setlastname(res[0].lastname)
        setaddress(res[0].address)
        setemail(res[0].email)
        setPhoneno(res[0].phoneno)
        setcity(res[0].city)
        setstates(res[0].states)
        setuserID(res[0].pkey)
        setpincode(res[0].pincode)
        setstates(res[0].states)

        console.log(res)
      })
  }
  const nav = useNavigate()

  var a = Object.keys(users)
  useEffect((e) => {
    console.log("location------------", location.state.e);
    const editdata = location.state.e
    setfirstname(editdata.firstname)
    setlastname(editdata.lastname)
    setaddress(editdata.address)
    setemail(editdata.email)
    setpassword(editdata.password)
    setPhoneno(editdata.phoneno)
    setuserID(editdata.id)
setcity(editdata.city)
setstates(editdata.states)
setpincode(editdata.pincode)
    // e.preventDEfault();
    getdata()
  }, [])
  console.log(a);



  const updateuser = (e) => {
    e.preventDefault();
    let inputData = {
      "email": email,
      "password": password,
      "phoneno": phoneno,
      "address": address,
      "firstname" : firstname,
      "lastname": lastname,
      "city": city,
      "states":states,
      "pincode": pincode
    }
    console.log("Input Data --", inputData);
    console.log(location.state.e.pkey, "-------------------")
    const headers = {
      'Access-Control-Allow-Origin': '*'
    }

    axios({
      method: 'put',
      url: `https://hubble-e45cf-default-rtdb.firebaseio.com/userdata/${location.state.e.pkey}.json`,
      headers : headers,
      data:inputData
    }).then((res)=>{
      console.log("Response --", res);
    })

 nav("/Nvabr/Emplist")


  }

  return (
    <div>

      <div>
        <br></br><br></br>
        <Form onSubmit={updateuser} autoComplete="nope">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control  name="firstname" type="text" value={firstname} placeholder="name..." onChange={(e)=>{setfirstname(e.target.value)}} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  name="lastname" type="text" value={lastname} placeholder="name..." onChange={(e)=>setlastname(e.target.value)} />
        </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control  name="email" type="email" value={email} placeholder="Email..." onChange={(e)=>setemail(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password" type="password" value={password} placeholder="Password..." onChange={(e)=>setpassword(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhonenumber">
          <Form.Label>Phone No</Form.Label>
          <Form.Control  name="phoneno" type="text" value={phoneno} placeholder="Phoneno..." onChange={(e)=>setPhoneno(e.target.value)} />
        </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name="adress" type="text" value={adress} placeholder="Adress..." onChange={changehandler}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control as="textarea" placeholder="your address" name="address" type='text'  value={address}
        onChange={(e)=>{setaddress(e.target.value)}    } style={{     height: "2cm",
          width: "-webkit-fill-available" }}
 />      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  name="city" type="text" value={city} placeholder="city..." onChange={(e)=>setcity(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control  name="states" type="text" value={states} placeholder="state..." onChange={(e)=>setstates(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pincode</Form.Label>
          <Form.Control  name="pincode" type="number" value={pincode}  placeholder="pincode..." onChange={(e)=>setlastname(e.target.value)}/>
        </Form.Group>
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>



    </div>
  )
}
