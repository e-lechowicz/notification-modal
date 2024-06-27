import React, {
  Dispatch,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  markAllAsRead as markAllAsReadAction,
  markAsRead as markAsReadAction,
} from '../../store/notifications/actions.ts';
import { NotificationActionTypes } from '../../store/notifications/types.ts';
import Button from '../../atoms/Button/Button.tsx';
import NotificationList from '../../components/NotificationList/NotificationList.tsx';
import { RootState } from '../../store/store.ts';

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
    setKey(k => k+1)
  },[notifications])
  
  return visible ? (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center"
        onClick={onClose}
      ></div>
      <div key={key} className="fixed top-16 right-4 bg-white p-6 rounded-lg shadow-lg min-w-[650px]">
        <div>
          <div>
            <Button onClick={setAllTab}>All</Button>
            <Button onClick={setUnreadTab}>Unread</Button>
            <button onClick={handleMarkAllAsRead}>
              Mark all as read
            </button>
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
        </div>
      </div>
    </>
  ) : null;
};

export default NotificationModal;
