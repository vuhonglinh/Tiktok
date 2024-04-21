import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
