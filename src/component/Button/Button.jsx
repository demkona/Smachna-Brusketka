import React from 'react';
import './button.module.scss';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button;