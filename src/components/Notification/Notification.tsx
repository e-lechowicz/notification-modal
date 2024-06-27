import React, { useCallback, useMemo } from 'react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

import Button from '../../atoms/Button/Button.tsx';
import {
  Notification as NotificationProps,
  NotificationType,
} from '../../types/models.ts';

import { getRelativeTime } from '../../utils/getRelativeTime.ts';

type NotificationTypeMap = Record<
  string,
  {
    className: string;
    path: string;
  }
>;
interface Props extends NotificationProps {
    markAsRead: (id: string) => void;
}

const Notification: React.FC<Props> = ({ id, type, message, date, read = false, markAsRead }) => {
    const navigate = useNavigate();

    const notificationTypeMap: NotificationTypeMap = useMemo(
    () => ({
      [NotificationType.request]: {className: 'bg-document-icon', path: `/notification/request/:${id}`},
      [NotificationType.onHold]: {className: 'bg-pause-icon', path: `/notification/on-hold/:${id}`},
      [NotificationType.newFeature]: {className: 'bg-fire-icon', path: `/notification/new-feature/:${id}`},
    }),
    [id],
  );

  const relativeTime = useMemo(()=> getRelativeTime(date), [date])

  const handleButtonClick = useCallback(()=> {
      markAsRead(id)
  },[id, markAsRead]);

  const handleNotificationClick = useCallback(()=> {
      markAsRead(id)
      navigate(notificationTypeMap[type].path)
  },[id, markAsRead]);
  
  return (
    <div className={`flex justify-between rounded-xl h-28 shadow-sm mb-2 mr-5 pr-5 hover:bg-gray-200
        ${!read && 'bg-gray-100'}`}>
        <div className='flex items-center rounded-xl pl-5 cursor-pointer w-full' onClick={handleNotificationClick}>
            <div
                className={`p-8 bg-no-repeat bg-contain ${notificationTypeMap[type].className}`}
            />
            <div className='ml-5 mr-20'>
                <div>{parse(message)}</div>
                <div className='mt-2 font-bold text-gray-500 text-sm'>{relativeTime}</div>
            </div>
        </div>
        {!read &&
            <Button className="h-3 w-3 p-2.5 mt-5 bg-blue-600" onClick={handleButtonClick}/>
        }
    </div>
  );
};

export default Notification;
