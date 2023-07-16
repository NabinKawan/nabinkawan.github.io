import React from 'react';

export default function HoverScaleUpAnimation({ children }: React.PropsWithChildren) {
    return <div className="h-full w-full transition duration-500 hover:scale-110">{children}</div>;
}
