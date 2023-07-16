import React from 'react';

export default function LoadingProjectCard() {
    return (
        <div className="product-box flex animate-pulse flex-col justify-between overflow-hidden rounded-xl bg-neutral-200 shadow transition duration-500 hover:shadow-lg dark:bg-light-dark">
            <div className="product-image h-60 w-80" />
        </div>
    );
}
