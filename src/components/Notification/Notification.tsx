import React, { useCallback, useMemo } from 'react';
import Button from '../../atoms/Button/Button.tsx';
import {
  Notification as NotificationProps,
  NotificationType,
} from '../../types/models.ts';
import { getRelativeTime } from '../../utils/getRelativeTime.ts';

type NotificationTypeIconMap = {
  [key in NotificationType]: string;
};

interface Props extends NotificationProps {
    markAsRead: (id: string) => void;
}

const Notification: React.FC<Props> = ({ id, type, message, date, read = false, markAsRead }) => {
  const notificationTypeIconMap: NotificationTypeIconMap = useMemo(
    () => ({
      [NotificationType.request]: 'bg-document-icon',
      [NotificationType.onHold]: 'bg-pause-icon',
      [NotificationType.newFeature]: 'bg-fire-icon',
    }),
    [],
  );

  const relativeTime = useMemo(()=> getRelativeTime(date), [date])

  const handleClick = useCallback(()=> {
      markAsRead(id)
  },[id, markAsRead])

  return (
    <div className={`flex justify-between rounded-xl p-5 shadow-sm mb-2
        ${!read && 'bg-gray-200'}`}>
        <div className='flex items-center'>
            <div
                className={`p-8 bg-no-repeat bg-contain ${notificationTypeIconMap[type]}`}
            />
            <div className='ml-5 mr-20'>
                <div>{message}</div>
                <div className='mt-2 font-bold text-gray-500 text-sm'>{relativeTime}</div>
            </div>
        </div>
        {!read &&
            <Button className="h-3 w-3 p-2.5 mt-1 bg-blue-600" onClick={handleClick}/>
        }
    </div>
  );
};

export default Notification;
