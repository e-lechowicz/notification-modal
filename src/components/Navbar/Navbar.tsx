import React from 'react';
import CountButton from '../CountButton/CountButton.tsx';

interface Props {
  notificationsCount?: number;
  notificationsButtonClick?: () => void;
}

const Navbar: React.FC<Props> = ({notificationsCount, notificationsButtonClick}) => (
    <nav className='bg-gray-300 p-3'>
        <div className='flex justify-between items-center w-full'>
            <div className='rounded-xl w-80 h-8 bg-gray-100 ms-5'/>
            <div className='flex items-center'>
                <CountButton count={notificationsCount} handleClick={notificationsButtonClick}/>
                <div className='p-3 mr-12 ml-3 bg-user-icon bg-no-repeat bg-contain'/>
            </div>
        </div>
    </nav>
);

export default Navbar;