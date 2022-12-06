import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { auth, firebase } from './Firebase';
import './Signup.css'
import Alert from 'react-bootstrap/Alert';

export default function Signup() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const [show, setShow] = useState(false);
    const [mynumber, setnumber] = useState("");
    const [final, setfinal] = useState('');
    const [show1, setshow] = useState(false);
    const [otp, setotp] = useState('');


    const nav = useNavigate();
    const signup = () => {
               if (mynumber === "" || mynumber.length <= 10) return;

            let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
            alert(verify)
            auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
                console.log(result, "------");
                setfinal(result);
                alert("code sent")
                setshow(true);
            })
                .catch((err) => {
                    alert(err);
    
                }); 
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => console.log(user))
            .then(alert("completed succesfull"))
            .catch(err => alert(err))

            .then(nav("/"))

       
            }
// Validate OTP
const ValidateOtp = () => {
    if (otp === null || final === null)
        return;
    console.log(otp);
    final.confirm(otp).then((result) => {
        nav("/Nvabr", { state: { otp } })
        // success
    })

}
    
    return (
        <>
            <div className='signup'>
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
                <Card style={{
                    height: "10cm", width: "10cm", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#282828",
                    opacity: "0.9"
                }}>
                    <Card.Img src='https://hubble.miraclesoft.com/assets/img/miracle-logo-white.svg' style={{ height: "50px" }}></Card.Img>
                    {/* <Card.Title style={{color:"white"}}><h3>New User</h3></Card.Title> */}
                    <Form autoComplete='off'>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => { setemail(e.target.value) }} />
                        </Form.Group>
                        <div style={{ display: !show1 ? "block" : "none" }}>
                            <Form.Group className="mb-3" >
                                <Form.Label style={{ color: "white" }}>Phoneno</Form.Label>
                                <Form.Control value={mynumber} onChange={(e) => {
                                    setnumber(e.target.value)
                                }}
                                    placeholder="phone number" />
                                <Form.Text style={{ color: "whitesmoke" }}><h6>Must have country code... Ex:"+91"</h6></Form.Text>
                            </Form.Group>

                        </div>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                            <br></br>
                            <Button onClick={signup}>Signup</Button>
                        </Form.Group>
                    </Form>
                    <div style={{ display: show1 ? "block" : "none" }}>
                        <Form.Group className="mb-3" >

                            <Form.Label style={{ color: "white" }}>OTP</Form.Label>
                            <Form.Control type="text" placeholder={"Enter your OTP"}
                                onChange={(e) => { setotp(e.target.value) }}></Form.Control>
                            <br /><br />
                        </Form.Group>

                        <Button onClick={ValidateOtp}>Verify</Button>
                    </div>
                </Card>

            </div>
        </>
    )
}
