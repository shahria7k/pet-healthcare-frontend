import React from 'react';
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="container text-center">
                <Spinner animation="border" />
            </div>
        );
    }
    return (
        <Route {...rest} render={({ location }) => user ? children : <Redirect to={{
            pathname: '/signin',
            state: { from: location }
        }}></Redirect>}>
        </Route>
    );
};

export default PrivetRoute;