/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import React from 'react';
import PageLoadAnimation from '@app/animations/page-load-animation';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <PageLoadAnimation>
            <div className="bg-white  pb-44 font-notoSans ">
                <main className={`min-h-screen cursor-default  bg-white`}> {children}</main>
            </div>
        </PageLoadAnimation>
    );
}
