import React, { useMemo } from 'react';
import CountButton from '../CountButton/CountButton.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

interface Props {
  notificationsButtonClick?: () => void;
}

const Navbar: React.FC<Props> = ({notificationsButtonClick}) => {
    const { notifications } = useSelector(
        (state: RootState) => state.notifications,
    );
    const unreadCount = useMemo(() => {
        return notifications.filter((notification) => !notification.read).length;
    }, [notifications]);

    return(
        <nav className='bg-gray-300 p-3'>
            <div className='flex justify-between items-center w-full'>
                <a className='rounded-xl w-80 h-8 bg-gray-100 ms-5' href="/"/>
                <div className='flex items-center'>
                    <CountButton count={unreadCount} handleClick={notificationsButtonClick}/>
                    <div className='p-3 mr-12 ml-3 bg-user-icon bg-no-repeat bg-contain'/>
                </div>
            </div>
        </nav>
)};

export default Navbar;
