import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

const Auth = () => {
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }
  return (
    <div className="m-5 d-flex justify-content-center">
        <Form onSubmit={handleLogin}>
            <Form.Group as={Row} className="mb-3" controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control  type="text" placeholder="Your Name"/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control  type="email" placeholder="Your Email"/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Your Password"/>
            </Form.Group>   
            <Button variant="primary" type="submit">Login</Button>             
        </Form>
    </div>
  )
}

export default Auth