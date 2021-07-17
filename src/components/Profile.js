import React, { useState, useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';

function Profile(props) {
    const { profile, name} = useContext(LoginContext)
    return (
        <div>
            <h3 className="display-4"> Hey { name } </h3>
            <p className="lead text-center"> You are Logged in !</p>
        </div>
    );
}

export default Profile;