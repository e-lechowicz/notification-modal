import {
  MARK_ALL_AS_READ,
  MARK_AS_READ,
  MarkAllAsReadNotificationActionType,
  MarkAsReadNotificationActionType,
} from './types';

export const markAsRead = (id: string): MarkAsReadNotificationActionType => ({
  type: MARK_AS_READ,
  payload: { id },
});

export const markAllAsRead = (): MarkAllAsReadNotificationActionType => ({
    type: MARK_ALL_AS_READ,
});

