import { Notification } from '../../types/models.ts';
import { Action } from 'redux';

export const MARK_AS_READ = 'MARK_AS_READ';
export const MARK_ALL_AS_READ = 'MARK_ALL_AS_READ';

export interface NotificationsState {
  notifications: Notification[];
}

export interface MarkAsReadNotificationActionType extends Action {
  payload?: { id: string };
}

export type MarkAllAsReadNotificationActionType = Action

export type NotificationActionTypes = MarkAsReadNotificationActionType | MarkAllAsReadNotificationActionType;
