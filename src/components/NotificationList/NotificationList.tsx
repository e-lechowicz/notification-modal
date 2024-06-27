import React from 'react';
import { Notification as NotificationType } from '../../types/models.ts';
import Notification from '../Notification/Notification.tsx';

interface Props {
  notifications: NotificationType[];
  markAsRead: (id: string) => void;
}

const NotificationList: React.FC<Props> = ({ notifications, markAsRead }) => (
    <div className='no-scrollbar overflow-y-auto max-h-[600px]'>
        {notifications?.map(notification => (
            <Notification key={notification.id} read={notification.read} {...notification} markAsRead={markAsRead}/>
        ))}
    </div>
);

export default NotificationList;
