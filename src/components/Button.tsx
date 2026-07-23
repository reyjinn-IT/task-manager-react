import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
}

const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-sm hover:shadow',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
    success: 'bg-success-500 hover:bg-success-600 text-white',
    danger: 'bg-danger-500 hover:bg-danger-600 text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
};

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    fullWidth = false,
    }: ButtonProps) {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
            ${variants[variant]}
            ${sizes[size]}
            ${fullWidth ? 'w-full' : ''}
            rounded-lg font-medium transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
        `}
        >
        {children}
        </button>
    );
}