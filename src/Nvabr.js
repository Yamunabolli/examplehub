import { Button } from "react-bootstrap";
import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
export default function Nvabr() {
  const nav = useNavigate()

  const handlemplist = () => {
   
    nav("/Nvabr/Emplist")

  }
  const signout = () => {
    nav("/")
  }
  const handlemp = () => {
    nav("/Nvabr/Adduser")
  }
  const UserMenu = (
    <Image
      src={'https://www.miraclesoft.com/images/employee-profile-pics/ybolli.png'}
      alt="UserName profile image"
      roundedCircle
      style={{ width: '40px' }}
    />
  )

  return (
    <>
      <section className="sideNav">
        <div className='grid grid-cols-12'>

          <Navbar bg="light" expand="lg">
            <Container>

              <Navbar.Brand ><img id="mrclimg" src='https://hubble.miraclesoft.com/assets/miracle-logo-dark.png' ></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                  <Nav.Link href="#home"><img src='https://hubble.miraclesoft.com/assets/M.svg' style={{ height: "24px", width: "24px" }}></img></Nav.Link>
                  <Nav.Link href="#link"><img src='https://hubble.miraclesoft.com/assets/miraclemefav.ico' style={{ width: "28px" }}></img></Nav.Link>
                  <Nav.Link href="#link"><img src='https://hubble.miraclesoft.com/assets/B.svg' style={{ width: "28px" }}></img></Nav.Link>
                  <Nav.Link href="#link"><img src='https://hubble.miraclesoft.com/assets/H.svg' style={{ width: "28px" }}></img></Nav.Link>


                  <NavDropdown title={UserMenu} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={signout} >signout</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <Row>
            <Col md={4}>
              <div className=''>
                <Card style={{
                  height: "19cm",
                  display: "block",
                  width: "6.5cm", border: "none", color: "black", backgroundColor: "#575757"
                }}>
                  <Col >
                    <Button id='sidebtn' onClick={handlemp}>ADD USER</Button>

                  </Col>
                  <Col>
                    <Button id='sidebtn' onClick={handlemplist}>EMPLOYEE LIST</Button>
                  </Col>

                </Card>

              </div>

            </Col>
            <br></br>
            <Col md={6} style={{ border: "none" }}>
              <div className=''>
              </div>
              <Outlet />
            </Col>
          </Row>
        </div>



      </section>
    </>
  )
}
