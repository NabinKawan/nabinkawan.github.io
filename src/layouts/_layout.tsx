/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import Header from '@app/components/app/header';
import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-white pl-44 font-notoSans">
            <main className={`cursor-default`}> {children}</main>
        </div>
    );
}
