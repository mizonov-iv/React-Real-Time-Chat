import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {BrowserRouter} from "react-router-dom";

firebase.initializeApp(
    {
        apiKey: "AIzaSyDojse7hiF5X-U3-g6bi0UXvjFk-zV-SfM",
        authDomain: "react-chat-09.firebaseapp.com",
        projectId: "react-chat-09",
        storageBucket: "react-chat-09.appspot.com",
        messagingSenderId: "527622440528",
        appId: "1:527622440528:web:adf0edac768471beb4b355"
    }
);

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Context.Provider>
);
