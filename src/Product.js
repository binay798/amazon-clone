import React from 'react'
import classes from './Product.module.css';
import StarIcon from '@material-ui/icons/Star';
import { StateContext } from './StateProvider';

function Product(props) {
    const [state,dispatch] = React.useContext(StateContext);
    if(state) {
        
    }
    const addToBasket = () => {
        dispatch({type:"ADD_TO_BASKET",value:{id:props.id,title:props.title,image:props.image,price:props.price,rating:props.rating}})
        return null;
    }

    return (
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>{props.title}</p>
                <p className={classes.product__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>

                <div className={classes.product__rating}>
                    {
                        Array(props.rating)
                            .fill()
                            .map((item,id) => {
                                return (<p key={id}><StarIcon /></p>)
                            })
                    }
                </div>
            </div>

            <img src={props.image} className={classes.product__image} alt="product"/>
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
