import React from 'react';

import Logo from "../asset/saderror.png";
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='container mt-5'>
            <h1>Awwww.... Don't Cry!!</h1>
            <h5>It's just a </h5>

            <img className="img-fluid w-25" src={Logo} alt="" />
            <h4> 
        {error.statusText || error.message}  error
      </h4>
           
        </div>
    );
};

export default ErrorPage;