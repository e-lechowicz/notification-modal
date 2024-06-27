import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

export type Props = HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({className, children, ...otherProps }) => (
    <button className={cn('w-auto rounded-2xl p-3', {[className]: className})} {...otherProps}>
        {children}
    </button>
);

export default Button;