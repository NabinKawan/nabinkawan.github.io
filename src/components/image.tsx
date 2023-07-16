/*
 * The is the default image used in the app.
 */

import React from 'react';
import styled from '@emotion/styled';
import BrokenFile from '@app/assets/SVGs/broken-file.svg';
import cn from 'classnames';

export const ImageDiv = styled.img`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    object-fit: cover;
`;

interface IPortImage extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export function PortImage({ src, className, ...imageProps }: IPortImage) {
    if (!src) src = BrokenFile;
    return <ImageDiv src={src} className={cn('h-full w-full object-cover', className)} {...imageProps} />;
}

export default PortImage;
