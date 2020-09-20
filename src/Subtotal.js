import React from 'react'
import classes from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from './StateProvider';
import {getTotal} from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal(props) {
    const history = useHistory()
    const [state] = React.useContext(StateContext);
    
    return (
        <div className={classes.subtotal}>
            
            <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal ({state.basket.length} items) : <strong>{value}</strong>
                    </p>
                    <small className={classes.subtotal__gift}>
                        <input type="checkbox"/> <span>This order contains a gift</span>
                    </small>
                </>
            )}
            decimalScale={2}
            value={getTotal(state.basket)}
            displayType={"text"}
            thousandSeparater={true}
            prefix={"$"} />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
