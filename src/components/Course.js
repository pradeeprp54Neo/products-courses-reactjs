
import React, { useEffect, useState } from 'react';
import {Card, Nav, Container, Button, Form} from 'react-bootstrap'
import axios from "axios"
import Enquiry from './Enquiry';
export default function Course() {
    const [state, State] = useState([])
    const [status,Status]=useState(false)
    const[id,Id]=useState(1)
    const [name,Name]=useState()
    const [email,Email]=useState()
    const [Data,setData]=useState([])
    const [record,Record]=useState({id:"",name:name,email:email})



    const submitForm=(e) =>
    {
        e.preventDefault()
        Id(id+1)
        const newData={name:name,email:email}
        console.log("here is name"+name)
        console.log("here is email"+email)
        console.log("here is newdata"+newData)
        setData([...Data,newData])
        console.log("Here is the all data"+Data)


        // axios.post('http://localhost:4000/record', record)
        // .then(response => {setRecord({id:id,name:name,email:email})
        // console.log("here is record"+record)
        // alert("record Inserted Successfully")
        // })

    

        
    }




    useEffect(() => {
      axios.get('http://localhost:3001/posts').then(resp => {
        console.log(resp)
        console.log("Here is the COnsole"+resp.data.Course)
        State(resp.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])



    return (
        <>
        <div>
           
            <br />
            <br />
            <br />
            <ul>
                {
                    state.map((key)=>(
                        <Card style={{ width: '18rem', marginBottom: "30px", display: "flex" }}>
            <Card.Img variant="top" src={key.images} />
            <Card.Body>
              <Card.Title style={{ paddingLeft: "40%" }} variant="dark">{key.id}</Card.Title>
              <Card.Title style={{ color: "Blue", paddingLeft: "32%" }}>{key.title}</Card.Title>
              <Card.Text style={{ color: "red", paddingLeft: "10%" }}>
                {key.info}
              </Card.Text>
              <Button variant="primary" style={{ marginLeft: "30%" }} onClick={()=>Status(!status)}>Enquiry</Button>
            </Card.Body>
          </Card>
                        
                    ))
                }
            </ul>
            {
            status ? <div style={{width:"60%",marginLeft:"20%",background:"aqua" ,border:"solid black"}} onSubmit={submitForm}><Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginLeft:"5px",marginRight:"5px",marginTop:"5px",marginBottom:"5px"}}>
              <Form.Label>FirstName:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>Name(e.target.value)} />
              <Form.Text className="text-muted">
                error text
              </Form.Text>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:"5px",marginRight:"5px"}}>
              <Form.Label>Enter email</Form.Label>
              <Form.Control type="text" placeholder="Email" onChange={(e)=>Email(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginLeft:"5px",marginRight:"5px"}}>
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginLeft:"5px",marginRight:"5px"}}>
              Submit
            </Button>
          </Form></div>:null
            }
            </div>
            
        <Enquiry ar={Data}/>
       

    </>
    )
}


