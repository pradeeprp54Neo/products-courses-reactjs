import React from 'react'

import Table from 'react-bootstrap/Table'

export default function Enquiry(props) {
    return (
        <div>
            <h1 class="App">Enquiry</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        
                        <th>user Name</th>
                        <th>Email</th>

                    </tr>
                </thead>

                {



                    props.ar.map((key)=>

                    (
                        <>
                            <tbody>
                                <tr>
                                   
                                    <td>{key.name}</td>
                                    <td>{key.email}</td>

                                </tr>
                            </tbody>
                        </>
                    )
                    )
                }

            </Table>

        </div>
    )




}