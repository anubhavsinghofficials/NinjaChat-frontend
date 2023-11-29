import { twMerge } from 'tailwind-merge';
import React from 'react';

type TbuttonProps = {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
} & React.ComponentProps<'button'>;

const Button = React.forwardRef<HTMLButtonElement, TbuttonProps>(
  (
    { children, className, variant = 'primary', disabled = false, ...props },
    ref
  ) => {
    const themeStyles = {
      primary:
        'text-black bg-neutral-200 hover:bg-white active:bg-neutral-300 hover:shadow-neutral-300 active:shadow-black',
      secondary:
        'text-white ring-1 ring-neutral-100 hover:ring-white active:ring-neutral-300 hover:shadow-neutral-300 active:shadow-black',
    };

    return (
      <button
        {...props}
        disabled={disabled}
        ref={ref}
        className={twMerge(
          'self-end rounded-md px-6 py-1 text-lg font-semibold shadow-md',
          themeStyles[variant] || '',
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
