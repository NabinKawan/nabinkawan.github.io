import React from 'react';
import cn from 'classnames';
import { OnlyClassNameInterface } from '@app/models/interfaces';

export default function BouncingAnimation({ children, className }: React.PropsWithChildren<OnlyClassNameInterface>) {
    return <div className={cn('animate-bounce transition duration-1000', className)}>{children}</div>;
}
