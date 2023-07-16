/**
 * This component is intended for internal use only.
 *
 * Renders the layout component.
 */

import Header from '@app/components/app/header';
import React from 'react';
import { AnimatePresence, LazyMotion, domAnimation, motion } from 'framer-motion';
import PageLoadAnimation from '@app/animations/page-load-animation';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <PageLoadAnimation>
            <div className="bg-white px-10 pb-44 font-notoSans lg:px-20 xl:px-40">
                <main className={`min-h-screen cursor-default  bg-white`}> {children}</main>
            </div>
        </PageLoadAnimation>
    );
}
