import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import '../index.scss'
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) {
        return <Loader/>
    }

    return (
        <div className='container'>
            <div className='mx-auto mt-1 bg-light border light border-2 rounded overflow-auto chat'>
                {messages.map(message =>
                    <div
                        className="card p-1"
                        style={{
                            margin: '10px',
                            minWidth: '20%',
                            maxWidth: '25%',
                            // height: '15vh',
                            border: user.uid === message.uid ? '1px solid grey' : '1px solid #6f42c1',
                            background: user.uid === message.uid ? '#bebccf' : '#c9c3f7',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px'
                        }}
                    >
                        <div className='d-flex justify-content-between'>
                            <img src={message.photoURL} className="img-fluid rounded w-25" alt="message"/>
                            <p className="text-muted">{message.displayName}</p>
                        </div>
                        <p className="mt-1  ">{message.text}</p>
                    </div>
                )}
            </div>

            <div className="d-flex justify-content-end w-75 mx-auto mt-1">
                <div className="input-group mb-3">
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Введите сообщение"/>
                    <button
                        onClick={sendMessage}
                        onKeyDown={e => sendMessage()}
                        className="btn btn-outline-dark"
                        type="button"
                        id="button-addon2"
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;