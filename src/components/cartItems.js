import React from 'react'
import { Button, Container } from 'react-bootstrap';
import CartItem from './cartItem';
import { useSelector } from 'react-redux'

const CartItems = () => {
    const cart = useSelector(state => state.cart.items);
    let total = 0;
    cart.forEach(item => total += item.totalPrice);
  return (
    <Container>
        <h3 className="text-primary mt-5">Cart Items</h3>
        {cart.map(cartItem => (
            <CartItem key={cartItem.id} id={cartItem.id} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} totalPrice={cartItem.totalPrice} />
        ))}
        <div className="d-flex justify-content-end align-items-end">
            <div>
                <h2>Total - $ {total}</h2>
                <Button>Place Order</Button>
            </div>
        </div>
    </Container>
  )
}

export default CartItems