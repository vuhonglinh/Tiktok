import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({ src, className, fallback = images.noImage, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={_fallback || src}
            onError={handleError}
            ref={ref}
            {...props}
        />
    );
}

export default forwardRef(Image);
