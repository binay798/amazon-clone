import React from 'react'
import classes from './Payment.module.css';
import { StateContext } from './StateProvider';
import CheckoutProduct from './CheckOutProduct';
import { Link,useHistory } from 'react-router-dom';
import {  useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from './reducer';
import { instance as axios } from './axios';
import { db } from './firebase';

function Payment() {
    const history = useHistory()
    const [state,dispatch] = React.useContext(StateContext);
    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = React.useState(null);
    const [disabled,setDisabled] = React.useState(true);
    const [succeeded,setSucceeded] = React.useState(false);
    const [processing,setProcessing] = React.useState(false);
    const [clientSecret,setClientSecret] = React.useState(true);



    React.useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getTotal(state.basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    },[state.basket])




    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({paymentIntent}) => {

            db
                .collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: state.basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null);
            setProcessing(null);
            dispatch({type: 'EMPTY_BASKET'})

            history.replace('/orders');
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className={classes.payment}>
            <div className={classes.payment__container}>
                <h1>
                    Checkout (<Link to="/checkout">{state.basket?.length} items</Link>)
                </h1>
                <div className={classes.payment__section}>
                    <div className={classes.payment__title}>
                        <h3>Delivery method</h3>
                    </div>
                    <div className={classes.payment__address}>
                        <p>{state.user?.email}</p>
                        <p>124 state</p>
                        <p>California</p>
                    </div>
                </div>

                <div className={classes.payment__section}>
                    <div className={classes.payment__title}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className={classes.payment__items}>
                        {state.basket.map(product => {
                            return (<CheckoutProduct key={product.id} productInfo={product} />)
                        })}
                    </div>
                </div>

                <div className={classes.payment__section}>
                    <div className={classes.payment__title}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className={classes.payment__details}>
                        <form action="" onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className={classes.payment__priceContainer}>
                                <CurrencyFormat
                                    renderText = {(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getTotal(state.basket)}
                                    displayType={"text"}
                                    thousandSeparater={true}
                                    prefix={"$"} />
                                <button className={classes.payment__button} disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
