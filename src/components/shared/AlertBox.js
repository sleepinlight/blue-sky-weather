import React, {Component} from 'react';

const AlertBox = ({message, alerttype}) => (
    <div className={`alert alert-warning ${ alerttype }`} role="alert">
        <h4>{message}</h4>
    </div>
);
    
export default AlertBox;


