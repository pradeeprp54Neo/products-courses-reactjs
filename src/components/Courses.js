import React from 'react'
import { Card, Button, Navbar, Nav, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Registration from './Registration';

export default function Courses() {
    
    const [posts,setPosts]=useState([])
    // const navigate=useNavigate()
    // const dispatch=useDispatch()
    const [flag,setflag]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/courses').then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

 
    return (
        <>
        {flag==1 && <Registration/>}
          
        <div style={{ display: "block", marginLeft: "40%", marginTop: "20px" }}>          {
            posts.map(res =>
                (
          <Card>
          <Card.Header>{res.id}</Card.Header>
          <Card.Body>
            <Card.Title>{res.course}</Card.Title>
            <Card.Text>
             {res.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>setflag(1)}>Enquire</Button>
          </Card.Body>
        </Card>
                ))
}
  
        </div>
        <br />
        <br />
        <br />
  
      </>
    )
}
