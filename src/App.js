import React,{useContext} from 'react';
import { Route,Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { StateContext } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const key = 'pk_test_51HSgUSCzgpsmAtabiBXU3eJPGNRstaJFHpCgaxMr1XCBneh8CF6VcXodaMuwO5OEGoqKwOrSDVgJBdpCzEVIM7xp00Epn0GwTQ'
const promise = loadStripe(key);

function App() {

  const [state,dispatch] = useContext(StateContext);
  if(state) {
    
  }

  React.useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {  
            //logged in
          dispatch({type:'SET_USER',user:user})
        }else {
          dispatch({type:'SET_USER',user:null})
        }
    })

    return () => {
        unsubscribe()
    }
},[])
  return (
    <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/payment" >
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/" >
              <Header />
              <Home />
          </Route>
          
        </Switch>
    </div>
  );
}

export default App;
