import React, {
  Dispatch,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import {
  markAllAsRead as markAllAsReadAction,
  markAsRead as markAsReadAction,
} from '../../store/notifications/actions.ts';
import { NotificationActionTypes } from '../../store/notifications/types.ts';

import Button from '../../atoms/Button/Button.tsx';
import NotificationList from '../../components/NotificationList/NotificationList.tsx';
import { RootState } from '../../store/store.ts';
import NotificationsCount from '../../atoms/NotificationCount/NotificationsCount.tsx';

type NotificationsTab = 'all' | 'unread';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<Props> = ({ visible, onClose }) => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  );
  const dispatch: Dispatch<NotificationActionTypes> = useDispatch();

  const [key, setKey] = useState(0)

  const [activeTab, setActiveTab] = useState<NotificationsTab>('all');

  const unreadNotifications = useMemo(() => {
    return notifications.filter((notification) => !notification.read);
  }, [notifications]);

  const handleMarkAsRead = useCallback((id: string)=> dispatch(markAsReadAction(id)),[dispatch])
  const handleMarkAllAsRead = useCallback(()=> dispatch(markAllAsReadAction()),[dispatch])

  const setAllTab = useCallback(()=> setActiveTab('all'),[])
  const setUnreadTab = useCallback(()=> setActiveTab('unread'),[])
  
  useEffect(() => {
    // changing the state to rerender the component
    setKey(k => k + 1)
  },[notifications])

  const getButtonStyles = useCallback((tab: NotificationsTab) => {
    return cn('w-auto pt-0 pb-0 font-semibold text-s rounded-3xl', {
      'border-2 border-gray-600 text-gray-600': activeTab === tab,
      'bg-gray-200 text-gray-600 hover:bg-gray-100': activeTab !== tab,
    });
  }, [activeTab]);
  
  const notificationsCount = useMemo(()=> unreadNotifications.length, [unreadNotifications.length])
  
  return visible ? (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center"
        onClick={onClose}
      ></div>
      <div
        key={key}
        className="fixed top-16 right-4 bg-white p-6 rounded-lg shadow-lg min-w-[650px]"
      >
        <>
          <div className="flex mb-6">
            <div className="ml-3 text-2xl font-semibold mr-1">
              {'Notifications'}
            </div>
            {notificationsCount>0 &&
                <NotificationsCount className="p-1 h-5 w-5 text-xs" count={notificationsCount} />}
          </div>
          <div className="flex mb-5 gap-5">
            <Button className={getButtonStyles('all')} onClick={setAllTab}>
              All Notifications
            </Button>
            <Button
              className={getButtonStyles('unread')}
              onClick={setUnreadTab}
            >
              Unread Notifications
            </Button>
            <Button className='flex' onClick={handleMarkAllAsRead}>
              <div className='bg-check-icon bg-no-repeat bg-contain p-4'/>
              <div className='text-sm font-bold text-blue-600 ml-1 mt-1 hover:text-blue-500'>
                {'Mark all as read'}
              </div>
            </Button>
          </div>
          {activeTab === 'unread' ? (
            <NotificationList
              notifications={unreadNotifications}
              markAsRead={handleMarkAsRead}
            />
          ) : (
            <NotificationList
              notifications={notifications}
              markAsRead={handleMarkAsRead}
            />
          )}
        </>
      </div>
    </>
  ) : null;
};

export default NotificationModal;
