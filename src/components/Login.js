import React,  { useState, useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';



function Login() {
    const { profile, setProfile, name, setName } = useContext(LoginContext)
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleClick = () =>{
        setProfile(true)
    }
    return (
        <div className="form">
            <div className="form-group">
                    <input onChange={ handleChange } className="form-control" placeholder="Enter Name" />
            </div>
            <button onClick={ handleClick } className="btn custombtn  btn-block btn-secondary"> Login </button>
        </div>
    );
}

export default Login;