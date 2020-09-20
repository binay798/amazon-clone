import React from 'react'
import classes from './Orders.module.css';
import { db } from './firebase';
import { StateContext } from './StateProvider';
import Order from './Order';

function Orders() {
    const [state,dispatch] = React.useContext(StateContext);

    const [orders,setOrders] = React.useState([]);

    React.useEffect(() => {
        if(state.user) {
            db
                .collection('users')
                .doc(state.user?.uid)
                .collection("orders")
                .orderBy('created','desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => {
                        return {
                            id:doc.id,
                            data:doc.data()
                        }
                    }))
                })
        }else {
            setOrders([])
        }
        
    },[state.user])
    console.log(orders)
    return (
        <div className={classes.orders}>
            <h1>Your Orders</h1>

            <div className={classes.orders__order}>
                {orders.map(order => {
                    return (<Order order={order}  />)
                })}
            </div>
        </div>
    )
}

export default Orders
