import React from 'react'
import classes from './Order.module.css';
import moment from 'moment';
import CheckOutProduct from './CheckOutProduct';
import { getTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from './StateProvider';

 function Order({order}) {
     const [state,dispatch] = React.useContext(StateContext);
     console.log(order)
     return (
         <div className={classes.order}>
             <h2>Order</h2>
             <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
             <p className={classes.order__id}>
                 <small>{order.id}</small>
             </p>

             {order.data.basket.map(item => {
                 return (<CheckOutProduct productInfo={item} key={order.id} hideBtn />)
             })}

                <CurrencyFormat
                    renderText = {(value) => (
                        <h3 className={classes.order__total}>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparater={true}
                    prefix={"$"} />
         </div>
     )
 }
 
 export default Order
 