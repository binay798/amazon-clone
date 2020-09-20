import React,{useContext} from 'react'
import classes from './Checkout.module.css';
import { StateContext } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [state] = useContext(StateContext);
    let checkOutContent = (<h2 style={{textAlign: "center",marginBottom:"40px"}}>Your Basket Is Empty</h2>);
    if(state.basket.length !== 0) {
        checkOutContent = (
            <div>
                <h2 style={{textAlign: "center",marginBottom:"40px"}}>Your Shopping Basket</h2>
            </div>
        )
    }
    return (
        <div className={classes.checkout}>
            <div className={classes.checkout__left}>
                {checkOutContent}

                {state.basket.map(product => {
                    return <CheckOutProduct key={product.id} productInfo={product} />
                })}
            </div>
            

            {state.basket.length > 0 && (
                <div className={classes.checkout__right}>
                    <Subtotal />
                
                </div>
            )}
                
        </div>
    )
}

export default Checkout
