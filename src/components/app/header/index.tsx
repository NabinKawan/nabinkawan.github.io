/**
 * The Header component represents the header section of the application layout.
 * It displays the header content.
 */

import Button from '@app/components/ui/button/button';
import React from 'react';
import cn from 'classnames';

interface IHeaderProps {
    className: string;
}

export default function Header({ className }: IHeaderProps) {
    return (
        <nav className={cn('z-50 flex h-20 w-full items-center justify-end px-8 py-3', className)}>
            <main className="w-fit"></main>
        </nav>
    );
}
