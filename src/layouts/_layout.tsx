/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="font-dmsans flex w-screen flex-col">
            <main className={`min-h-screen cursor-default bg-white pt-20 sm:pt-24`}> {children}</main>
        </div>
    );
}
