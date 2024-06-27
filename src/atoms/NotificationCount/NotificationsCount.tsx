import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  count: number;
}

const NotificationsCount: React.FC<Props> = ({className, count, ...otherProps }) => (
    <div className={cn('p-3 h-6 w-6 bg-red-500 text-white text-l font-bold rounded-full ' +
        'flex items-center justify-center', {[className]: className})} {...otherProps}>
        {count}
    </div>
);

export default NotificationsCount;