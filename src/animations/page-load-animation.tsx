import { motion } from 'framer-motion';
import React from 'react';

export default function PageLoadAnimation({ children }: React.PropsWithChildren) {
    return (
        <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                ease: 'linear',
                duration: 1,
                x: { duration: 1 }
            }}
        >
            {children}
        </motion.div>
    );
}
