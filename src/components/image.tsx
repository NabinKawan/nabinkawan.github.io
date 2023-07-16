/*
 * The is the default image used in the app.
 */

import React from 'react';
import styled from '@emotion/styled';
import cn from 'classnames';
import noImage from '@app/assets/images/no-image';

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
    if (!src || src.length == 0) src = noImage;
    return <ImageDiv src={src} className={cn('h-full w-full object-cover', className)} {...imageProps} />;
}

export default PortImage;
