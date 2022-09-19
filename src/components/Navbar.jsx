import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const Navbar = () => {

    const navigate = useNavigate()

    const backToAuth = () => {
        auth.signOut()
        navigate('/')
    }

    const {auth} = useContext(Context)

    const [user] = useAuthState(auth)

    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark p-3 justify-content-between'>
            <h1 className='navbar-brand'>Realtime Chat</h1>
            <div className='d-flex justify-content-between'>
                {user ?
                    (
                        <button onClick={backToAuth} type="button" className="btn btn-outline-light">Exit</button>
                    )
                    :
                    (
                        <Link to={'/'}>
                            <button type="button" className="btn btn-outline-light mx-2">Login</button>
                        </Link>

                    )}
            </div>
        </div>
    );
};

export default Navbar;
