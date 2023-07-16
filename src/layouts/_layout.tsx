/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import Header from '@app/components/app/header';
import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="bg-white pb-44 pl-40 font-notoSans">
            <main className={`min-h-screen cursor-default  bg-white`}> {children}</main>
        </div>
    );
}
