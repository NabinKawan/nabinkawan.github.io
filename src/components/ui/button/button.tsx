import React from 'react';
import cn from 'classnames';

type ShapeNames = 'rounded' | 'pill';
type ColorNames = 'primary' | 'secondary';
type VariantNames = 'ghost' | 'normal';

const shapes: Record<ShapeNames, string[]> = {
    rounded: ['rounded-md'],
    pill: ['rounded-3xl']
};

const colors: Record<ColorNames, string[]> = {
    primary: ['text-white bg-brand'],
    secondary: ['text-black', 'bg-gray-200']
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    disabled?: boolean;
    color?: ColorNames;
    variant?: VariantNames;
    shape?: ShapeNames;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ isLoading, disabled, className, onClick, children, color = 'primary', shape = 'pill', variant = 'normal' }: React.PropsWithChildren<ButtonProps>) {
    const shapeClassNames = shapes[shape];
    const colorClassNames = colors[color];
    let buttonClassNames = '';

    if (variant == 'ghost') {
        buttonClassNames = 'bg-transparent';
    }

    return (
        <button type="button" className={cn('h-fit w-fit px-6 py-2 text-xs font-medium', shapeClassNames, colorClassNames, buttonClassNames, className)}>
            {children}
        </button>
    );
}
