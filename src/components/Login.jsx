import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from 'firebase/compat/app';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        navigate('/chat')
        console.log(user)
    }
    return (
        <div className='container'>
            <div className='w-25 mx-auto p-3 mt-5'>
                <button onClick={login} type="button" className="btn btn-outline-dark"
                >
                    Войти с помощью Google
                </button>
            </div>
        </div>
    );
};

export default Login;