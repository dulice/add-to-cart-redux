import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'
import { authActions } from '../store/auth'

const Header = () => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(cartActions.setShowCard());
  }

  const handleLogout = () => {
    dispatch(authActions.logout());
  }
  return (
    <div className="shadow">
        <Navbar className="nav shadow">
            <Container>
                <Navbar.Brand href="#home">Shopping</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button variant="primary" className="me-3 rounded-pill" onClick={handleCart}>{quantity} Items</Button>
                </Navbar.Text>
                <Navbar.Text>
                    <Button onClick={handleLogout} variant="primary">Log out</Button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header