import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to, 
    href, 
    primary = false, 
    text = false,
    rounded = false,
    outline = false, 
    disabled= false,
    small = false,
    large = false,
    children, 
    className,
    leftIcon,
    rightIcon,
    onClick, 
    ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    //Remove event listened when btn is disable
    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

    if(to){
        props.to = to
        Comp = Link
    } else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',{
        [className]: className,
        primary,
        text,
        rounded,
        outline,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;