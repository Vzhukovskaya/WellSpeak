import React from "react";
import whalerror from './whalerror.jpg';
import './errorpage.css';

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>Oops! Something went wrong!</h1>
            <p>404</p>
            <img src={whalerror} alt="Error" />
        </div>
    );
}

export default ErrorPage;