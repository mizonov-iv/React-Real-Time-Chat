import './index.scss';
import React from "react";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {

  return (
      <React.Fragment>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Login/>}/>
                  <Route path='chat' element={<Chat/>}/>
              </Route>
          </Routes>
      </React.Fragment>
  );
}

export default App;