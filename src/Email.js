import React, { useState } from 'react'
import { auth } from './Firebase';
import './Email.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import { BiLockAlt } from 'react-icons/bi';
import Navbar from 'react-bootstrap/Navbar';


export default function Email() {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("");

  const nav = useNavigate()
  const handlesignin=(e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
  
      .then(auth=>{nav('/Nvabr')})
      
    .catch(err=>console.log(err))
   
  }
  return (
<>
<div className='img'>
  <div class="bottomleft"><h1 className='font'>Hubble - Miracle's Portal for<h1 className='font'>Enterprise Resource<h1 className='font'>Management</h1> </h1></h1>
            <h5 style={{ fontWeight: "lighter" }}>© 2022 Miracle Software Systems, Inc.</h5></div>
        <div className='center'> 
          <Card id='boxPosition'>
            <Form className='form'>
              <Card.Img className='imgCard' src='https://hubble.miraclesoft.com/assets/img/miracle-logo.svg' />

              <div className='label'>
                <label >USERNAME</label>

                <InputGroup className="mb-3">
                  <Form.Control
                    className='input'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Username'
                    type='email'
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </InputGroup>
              </div>
              <br></br>

              <div className='label1'>
                <label>PASSWORD</label>
                <InputGroup className="mb-3">

                <Form.Control
                    className='input'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Password'
                    type ="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </InputGroup>

              </div>
              <Navbar.Text>
         <a style={{    color: "rgb(53, 188, 250)"}} href="https://hubble.miraclesoft.com/forgot-password">Forget Password?</a>
          </Navbar.Text>
              {/* <Nav.Link className='link' href="https://hubble.miraclesoft.com/forgot-password">Forget Password?</Nav.Link> */}
              <br></br><br></br>
              <Button className='submitButton' type="submit" onClick={handlesignin}>
                <BiLockAlt />SignIn
              </Button>

            </Form>
            <div>
              <p className='h5'>
                To access Recruitment, Admin and other roles,please</p>
                <Nav.Link className='link' href="https://hubble-v1.miraclesoft.com/Hubble/"> click here</Nav.Link> 
            </div>
          </Card>
          </div>
        </div>
     

</>
  )
}

