import React, {useContext} from 'react';
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Loader";
import {Context} from "../index";

const Layout = () => {

    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading) {
        return <Loader/>
    }
    return (
        <React.Fragment>
            <Navbar/>
            <Outlet/>
        </React.Fragment>
    );
};

export default Layout;