import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);
    let [userInfo, setUserInfo] = useState(null);


    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    let userRegisterState = useSelector(state => state.userRegister);

    // let userInfo = {};
    let error = false;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setUserInfo(userRegisterState.userInfo);
        error = userRegisterState.error;
        if (password !== confirmPassword)
            setPasswordsNotMatch(true);
        else
        {
            dispatch(register(name, email, password));
            setPasswordsNotMatch(false);
            props.history.push(redirect);
        }


    }

    useEffect(() => {
        if (userInfo)
            props.history.push(redirect);
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>
                        Create Account
                    </h1>
                </div>
                {
                    error && <MessageBox type="danger">{error}</MessageBox>
                }
                <div>
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email"> Email address </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password"> Email address </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm password"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}></input>
                </div>
                {   passwordsNotMatch && 
                    <div className = "danger">
                        Password and confirm password are not match
                    </div>
                }
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account
                        <Link to={`/signin/signin?redirect=${redirect}`}>   Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}