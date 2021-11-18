import React from 'react'
import { Card, Button, Navbar, Nav, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from "axios"

export default function Products() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/Products').then(resp => {
        console.log(resp)
        setPosts(resp.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])
  
  
    return (
      <>
        
        <div style={{ display: "row", marginLeft: "40%", marginTop: "20px" }}>          {
          posts.map(item =>
          (
            <Card style={{ width: '18rem', marginBottom: "30px", display: "flex" }}>
              <Card.Img variant="top" src={item.images} />
              <Card.Body>
                <Card.Title style={{ paddingLeft: "40%" }} variant="dark">{item.id}</Card.Title>
                <Card.Title style={{ color: "Blue", paddingLeft: "32%" }}>{item.pname}</Card.Title>
                <Card.Text style={{ color: "red", paddingLeft: "30%" }}>
                  Rs. {item.price} /-
                </Card.Text>
                <Button variant="primary" style={{ marginLeft: "30%" }}>purchase</Button>
              </Card.Body>
            </Card>
  
          )
          )
  
        }
  
  
        </div>
        <br />
        <br />
        <br />
  
      </>
    )
  }