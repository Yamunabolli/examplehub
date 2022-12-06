import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import './Resetpassword.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function ResetPassword() {

  const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const auth = getAuth();
  
    const resetEmail = async () => {
        try{
            await sendPasswordResetEmail(auth, email)
            alert('Password reset link has been sent to your email')
          }
          catch(err){
            setShow(true)
          }
    }
   
    return (
        <>

      <Alert show={show} variant="danger">
    <Alert.Heading>Error!!</Alert.Heading>
    <p>
    Something went wrong....!!!   ... Once check your password and Email address please!!!! 
    </p>
    <hr />
    <div className="d-flex justify-content-end">
      
      <Button onClick={() => setShow(false)} variant="danger">
        Close me y'all!
      </Button>
    </div>
  </Alert>
  <div className="loginbg">
         <Card style={{
                    height: "8cm", width: "10cm", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#282828",
                    opacity: "0.9"
                }}>

           <Card.Img src='https://hubble.miraclesoft.com/assets/img/miracle-logo-white.svg' style={{ height: "50px" }}></Card.Img><br></br>
<Card.Title style={{color:"white"}}>ResetPassword</Card.Title><br></br>
     <Form>
     <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{color:"white"}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>
        <Button className="resetBtn" type="button" onClick={resetEmail}>Reset password</Button>
                        </Form>
                        </Card>
      </div>
      </>
    )
  }
  
  export default ResetPassword;
  