import React from 'react';

const NavigationButton = ({ direction, handleClick, isDisabled, children }) => (
    <button
        className={direction || ""}
        title={direction ? direction.charAt(0).toUpperCase() + direction.slice(1) : ""}
        onClick={handleClick}
        disabled={isDisabled}
    >
        {children}
    </button>
);

export default NavigationButton;