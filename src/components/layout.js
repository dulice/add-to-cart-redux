import React, {useEffect} from 'react'
import CartItems from './cartItems'
import Products from './data'
import Header from './header';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData } from '../store/ui-action'
import Notification from './notification'

let firstRender = true;
const Layout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {   
      if(firstRender) {
        firstRender = false;
        return;
      } 
      if(cart.changed) {
        dispatch(sendCartData(cart))
      } 
    },[cart, dispatch]);
    
  return (
    <div>
      {notification?.open && < Notification /> }
      <Header />
      <Products />
      <CartItems />
    </div>
  )
}

export default Layout