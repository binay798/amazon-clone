import React,{ useContext } from 'react'
import classes from './CheckOutProduct.module.css';
import StarIcon from '@material-ui/icons/Star';
import { StateContext } from './StateProvider';

function CheckOutProduct(props) {
    let product = {...props.productInfo};
    const [state,dispatch] = useContext(StateContext);

    const removeProduct = () => {
        const currentBasket = state.basket;
        let filteredBasket = currentBasket.filter(item => {
            return item.id !== product.id
        })
        dispatch({type:'REMOVE_FROM_BASKET',value:filteredBasket})
    }
    return (
        <div className={classes.checkoutProduct}>
            <img src={product.image} className={classes.checkoutProduct__img} alt="product"/>

            <div className={classes.checkoutProduct__info}>     
                <p className={classes.checkoutProduct__title}>{product.title}</p>

                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
                
                <div className={classes.checkoutProduct__rating}>
                    {
                        Array(product.rating)
                            .fill()
                            .map((item,id) => {
                                return (<p key={id}><StarIcon /></p>)
                            })
                    }
                </div>

                <button style={{display: props.hideBtn ? "none":"block"}} onClick={removeProduct}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
