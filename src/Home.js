import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import LoginContext from './Contexts/LoginContext';

function Home() {
    const [profile, setProfile ] = useState(false)
    const[ name, setName ] = useState('');


    return (
        <LoginContext.Provider value={ {profile, setProfile, name, setName}}>       
            <div className="align">
            { profile === true ? <Profile /> : <Login /> }
            </div>
      </LoginContext.Provider>
    );
}

export default Home;