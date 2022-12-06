import React, { useState } from 'react';
import {auth ,firebase} from './Firebase';
import { useNavigate } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Phone.css'

function Phone() {
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
  const nav = useNavigate();
    // Sent OTP
    const signin = () => {
  console.log(firebase);
        if (mynumber === "" || mynumber.length <= 10) return;
  
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            console.log(result,"------");
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
               
            });
    }
    
    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
        return;
        console.log(otp);
        final.confirm(otp).then((result) => {
            nav("/Nvabr",{state:{otp}})
            // success
        })
    }
  return (

    <div className='signup'>
    <center>
    <Card style={{
                    height: "10cm", width: "10cm", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#282828",
                    opacity: "0.9"
                }}>
          <Card.Img src='https://hubble.miraclesoft.com/assets/img/miracle-logo-white.svg' style={{ height: "50px" }}></Card.Img>

        {/* <div style={{ display: !show ? "block" : "none" }}>
            <Form.Group className="mb-3" >
                            <Form.Label style={{color:"white"}}>Phoneno</Form.Label>
                            <Form.Control  value={mynumber} onChange={(e) => { 
                                setnumber(e.target.value) }}
                placeholder="phone number" />
                                <Form.Text style={{color:"whitesmoke"}}><h6>Must have country code... Ex:"+91"</h6></Form.Text>
                        </Form.Group>
            <div id="recaptcha-container"></div>
            <Button onClick={signin}>Send OTP</Button>
        </div> */}
        {/* <div style={{ display: show ? "block" : "none" }}> */}
        <Form.Group className="mb-3" >

        <Form.Label style={{color:"white"}}>OTP</Form.Label>
            <Form.Control type="text" placeholder={"Enter your OTP"}
                onChange={(e) => { setotp(e.target.value) }}></Form.Control>
            <br /><br />
            </Form.Group>

            <Button onClick={ValidateOtp}>Verify</Button>
        {/* </div> */}
    </Card>
    </center>
</div>
  )
}

export default Phone