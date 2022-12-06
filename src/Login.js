import React, { useState, useEffect } from 'react'
import { auth, firebase } from './Firebase';
import './Email.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import { BiLockAlt } from 'react-icons/bi';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { getAuth, signInWithPhoneNumber, sendEmailVerification } from "firebase/auth";

function Emaillogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("")
  const [userId, setuserID] = useState("")
  const [lastname, setLastname] = useState("");
  const [emailst, setemailst] = useState("");
  const [address, setaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [firstname, setFirstname] = useState("")
  const [final, setfinal] = useState('');

  const nav = useNavigate()
  let auths = getAuth()


  const getdata = () => {


    axios.get("https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json")

      .then(res => {
        setUsers(res.data)
        setFirstname(res[0]?.firstname)
        setLastname(res[0]?.lastname)

        setaddress(res[0]?.bio)
        setemailst(res[0]?.emailst)
        setPhoneno(res[0]?.id)
        setuserID(res[0]?.pkey)
        console.log(res)
      })
  }
  useEffect((e) => {
    getdata()
  }, [])

  var sett = Object.values(users);

  console.log('users data', sett)
  // sett.forEach(ele =>{
  //   if( pwd && email){
  //         //navgate to opt @@ num opt meths or ele data variable 
  //   }
  //   else{

  //   }
  // })

  let emailList = [];

  for (let data in sett) {
    emailList.push(sett[data]['email'])
  }
  console.log(emailList)

  let passwordList = [];
  for (let data in sett) {
    passwordList.push(sett[data]['password'])
  }
  console.log(passwordList);

  console.log(email);
  console.log(password);
  let Phonenumberlist = [];

  for (let data in sett) {
    Phonenumberlist.push(sett[data]['phoneno'])
  }
  console.log(Phonenumberlist, "phonenosssss");

  //$INCLUDES FUNCTIONALITY

  // var passwords = passwordList.includes(`${password}`)
  // console.log(passwords);
  // var emails = emailList.includes(`${email}`)
  // console.log(emails);

  // console.log(sett[0]['password']);
  var handlesignin = (e) => {

    e.preventDefault()
    console.log(sett);
    console.log(email);
    console.log(password);
    let userLogged
    let LoggedUserData
    for (let i in sett) {
      console.log(sett[i]['email']);
      if (password == sett[i]['password'] && email == sett[i]['email']) {
        userLogged = true;
        LoggedUserData = sett[i];
        console.log(LoggedUserData);
        const options = {
          method: 'POST',
          url: `https://hubble-e45cf-default-rtdb.firebaseio.com/userdata/${sett[i]['email']}.json`,
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '5cf03ea9cemshe8d9d9bbd3abd27p10f5e5jsn4cbfd88142cd',
            'X-RapidAPI-Host': 'fapimail.p.rapidapi.com'
          },
          data: {"recipient":email,
          "sender":"from@email.com",
          "subject":"Subject of Email"
          ,"message":"123354"}
        };

        axios.request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }
  const onLinkClick = () => {
    nav("/Signup")
  }
  const resetpassword = () => {
    nav("/Resetpassword")
  }
  return (
    <>

      <div>
        <div className='img' >

          <div class="bottomleft"><h1 className='font'>Hubble - Miracle's Portal for<h1 className='font'>Enterprise Resource<h1 className='font'>Management</h1> </h1></h1>
            <h5 style={{ fontWeight: "lighter" }}>© 2022 Miracle Software Systems, Inc.</h5></div>
          <div className='center'>

            <Card id='boxPosition'>
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className='label1'>
                  <label>PASSWORD</label>
                  <InputGroup className="mb-3">

                    <Form.Control
                      className='input'
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder='Password'
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>

                </div>
                <Navbar.Text>
                  <a style={{ color: "rgb(53, 188, 250)" }} onClick={resetpassword} >Forget Password?</a>
                </Navbar.Text><br></br>
                <Navbar.Text>
                  <a style={{ color: "rgb(53, 188, 250)" }} onClick={onLinkClick}>New user</a>
                </Navbar.Text> <br></br>
                <Button className='submitButton' type="submit" onClick={handlesignin}>
                  <BiLockAlt />SignIn
                </Button>
              </Form>
              <div>
                <h5 className='h5'>
                  To access Recruitment, Admin and other roles,<br></br></h5> <h5 className='h5'>please<Nav.Link className='link' href="https://hubble-v1.miraclesoft.com/Hubble/"> click here</Nav.Link> </h5>
              </div>


            </Card>
          </div>
        </div>

      </div>



      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}

    </>
  )
}

export default Emaillogin;