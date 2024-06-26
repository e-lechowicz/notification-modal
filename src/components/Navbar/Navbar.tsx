import React from 'react';

interface Props {
  notificationsButtonClick?: () => void;
}

const Navbar: React.FC<Props> = ({notificationsButtonClick}) => (
    <nav className='bg-gray-300 p-3'>
        <div className='flex justify-between items-center w-full'>
            <div className='rounded-xl w-80 h-8 bg-gray-100 ms-5'/>
            <div className='flex items-center'>
                <button className='h-8 w-10 bg-white mr-5 rounded-3xl' onClick={notificationsButtonClick}/>
                <div className='h-7 w-10 mr-10 bg-user-icon bg-no-repeat bg-contain'/>
            </div>
        </div>
    </nav>
);

export default Navbar;