import React from 'react'

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({ children, variant = "primary", ...rest }) => {
    return (
        <button className={`px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${variantStyles[variant]}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;