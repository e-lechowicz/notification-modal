import React from 'react';
import Button from '../../atoms/Button/Button.tsx';
import NotificationsCount from '../../atoms/NotificationCount/NotificationsCount.tsx';

interface Props {
  count: number;
  handleClick: () => void;
}

const CountButton: React.FC<Props> = ({count,handleClick}) => (
    <Button className='relative bg-bell-icon bg-no-repeat bg-contain mr-5 rounded-3xl p-4 hover:bg-gray-200' onClick={handleClick}>
        {count > 0 && <NotificationsCount className='p-3 absolute -top-2 -right-2' count={count}/>}
    </Button>
);

export default CountButton;