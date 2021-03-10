import React from 'react';
export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.type || 'info'}`}>
            {props.children}
        </div>);
        }