import { uiActions } from './ui-slice';

export const sendCartData = (cart => {
        return async(dispatch) => {
          dispatch(uiActions.showNotification({
            message: "Adding...",
            type: "warning",
            open: true,
          }));
          const sendRequest = async () => {
            const res = await fetch('https://redux-demo-b5e50-default-rtdb.firebaseio.com/items.json', { 
              method: 'PUT',
              body: JSON.stringify(cart)
            })
            await res.json();
            dispatch(uiActions.showNotification({
                message: "Added Successfully",
                type: "success",
                open: true,
            }))
          }
          try {
            sendRequest();
          } catch (e) {
            dispatch(uiActions.showNotification({
                message: "Error Occure",
                type: "danger",
                open: true,
            }))
          }
        }
      });