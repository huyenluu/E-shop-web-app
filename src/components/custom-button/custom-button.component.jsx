import React from 'react';

import './custom-buttom.styles.scss';

const className = {
    google: 'google-sign-in',
    facebook: 'facebook-sign-in',
}

const CustomButton = ({ children, socialLogin, ...otherProps }) => (
    <button className={`${className[socialLogin]} custom-button`} {...otherProps}>
    {children}
    </button>
);

export default CustomButton;