import React from 'react'
import classes from './Login.module.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => {
                alert(err.message);
            })
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => {
                alert(err.message)
            })
    }
    return (
        <div className={classes.login}>
            <Link to="/">
            <img 

                className={classes.login__logo} 
                src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png" 
                alt="amazon logo"
            />
            </Link>

            <div className={classes.login__container}>
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    <button onClick={login} className={classes.login__signInButton}>Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} type="submit" className={classes.login__createButton}>Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
