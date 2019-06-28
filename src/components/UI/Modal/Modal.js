import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => (
    <div
        className={classes.Modal}
        style={{
            transform: props.show ? 'transitionY(0)' : 'transitionY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;