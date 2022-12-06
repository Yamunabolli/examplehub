import React, { useEffect, useReducer, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { collection, doc, getdocs, deleteDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


export default function Emplist(props) {
  const [users, setUsers] = useState("")
  const [userId, setuserID] = useState("")
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
const[firstname,setFirstname]=useState("")

  const getdata = () => {
 

    axios.get("https://hubble-e45cf-default-rtdb.firebaseio.com/userdata.json")

      .then(res => {
        setUsers(res.data)
        setFirstname(res[0].firstname)
        setLastname(res[0].lastname)

        setaddress(res[0].bio)
        setemail(res[0].email)
        setPhoneno(res[0].id)
        setuserID(res[0].pkey)
        console.log(res)
      })
  }
  useEffect((e) => {
      getdata()
    },// e.preventDEfault();
 [])

 var sett = Object.values(users);
 var ids = Object.keys(users);


  console.log(sett, ids);
  for (var i = 0; i < sett.length; i++) {
    sett[i].pkey = ids[i];
  }
  //  console.log(sett);
  //  console.log(users);
  const nav = useNavigate()

  const edit = (e) => {
    console.log("E--", e);
    nav("/Nvabr/Forms", { state: { e } })

  }



  const deletehandler = (id) => {
    console.log('rowData', id);
    var a = axios.delete(`https://hubble-e45cf-default-rtdb.firebaseio.com/userdata/${id.pkey}.json`).then(res => console.log(res))
    getdata(a)
  }

  return (
    <>
 
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "12px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> FirstName</th>
              <th>Lastname</th>
              <th>Phone No</th>
              <th>email</th>
              <th>password</th>
              <th>Address</th>
              <th>city</th>
              <th>State</th>
            </tr>
          </thead>

          {sett.map((items, index) => (
            <tbody>
              <tr key={index}>
                <td>{items.firstname}</td>
                <td>{items.lastname}</td>
                <td>{items.phoneno}</td>
                <td>{items.email}</td>
                <td>{items.password}</td>
                <td>{items.address}</td>
                <td>{items.city}</td>
                <td>{items.states}</td>
                <td><Button onClick={() => { deletehandler(items) }}>delete</Button></td>

                <td>
                  <Button onClick={() => { edit(items) }}>edit</Button>
                </td>
              </tr>
            </tbody>
          )
          )}
        </Table>
      </div>
 

    </>
  )
}
