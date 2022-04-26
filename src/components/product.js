import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Col, Button } from 'react-bootstrap';
import { cartActions } from '../store/cart-slice';

const Product = ({ name, id, imgURL, price }) => {
    const dispatch = useDispatch();
    const handleAddToCart =() => {
        dispatch(cartActions.addToCart({
            id,
            name,
            price,
        }))
    }
  return (
        <Col xs={6} md={3} className="mt-3">
            <Card >
            <Card.Img variant="top" src={imgURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
            </Card.Body>
            </Card>
        </Col>
  )
}

export default Product