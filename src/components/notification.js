import {Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Notification = () => {
    const notification = useSelector(state => state.ui.notification);
    // console.log(notification);
    const dispatch = useDispatch();
    const setShow = () => {
        dispatch(uiActions.showNotification({
            open: false,
        }))
    }
  return (
    <div className="mt-5">
        <Alert variant={notification?.type} onClose={setShow} dismissible>
            <p>
                {notification?.message}
            </p>
        </Alert>
    </div>
  )
}

export default Notification