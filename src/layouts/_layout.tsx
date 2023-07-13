/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="flex flex-col w-screen font-dmsans">
            <main className={`min-h-screen pt-20 sm:pt-24 cursor-default bg-white`}> {children}</main>
        </div>
    );
}
