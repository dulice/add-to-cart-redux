import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { cartActions } from '../store/cart-slice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, name, price, quantity, totalPrice}) => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(cartActions.addToCart({
            id,
            name,
            price,
            quantity,
        }))
    }
    const decrement = () => {
        dispatch(cartActions.removeFromCart(id))
    }
  return (
    <div>
        <Card className="m-3">
                <Row>
                    <Col xs={5}>{name}</Col>
                    <Col xs={2}>${price}</Col>
                    <Col xs={1}>
                        <Button onClick={decrement} variant="primary">-</Button>
                    </Col>
                    <Col xs={1}>X {quantity}</Col>
                    <Col xs={1}>
                        <Button onClick={increment} variant="primary">+</Button>
                    </Col>
                    <Col xs={2}>$ {totalPrice}</Col>
                </Row>               
            </Card>
    </div>
  )
}

export default CartItem