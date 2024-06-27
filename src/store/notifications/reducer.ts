import {
  MARK_ALL_AS_READ,
  MARK_AS_READ,
  NotificationActionTypes,
  NotificationsState,
} from './types';
import { Notification, NotificationType } from '../../types/models.ts';

const initState: NotificationsState = {
  notifications: [
    {
      id: '1',
      type: NotificationType.newFeature,
      message: 'New feature!! ',
      date: '2024-06-27',
      read: false,
    },
    {
      id: '2',
      type: NotificationType.onHold,
      message: '<strong>Bob Bob</strong> put the project on hold',
      date: '2024-06-26',
      read: false,
    },
    {
      id: '3',
      type: NotificationType.onHold,
      message: 'Sb put <strong>Some Project</strong> on hold',
      date: '2024-06-24',
      read: false,
    },
    {
      id: '4',
      type: NotificationType.request,
      message:
        '<strong>Anna Kowal</strong> has requested sth for<strong>Project Y</strong>',
      date: '2024-05-27',
      read: false,
    },
    {
      id: '5',
      type: NotificationType.onHold,
      message:
        '<strong>Anna Kowal</strong> from <strong>Company X</strong> has put the project <strong>Project Z</strong> on hold',
      date: '2024-05-27',
      read: false,
    },
    {
      id: '6',
      type: NotificationType.request,
      message:
        '<strong>Jan Nowak</strong> from <strong>MindPal</strong> has requested a Mindocument for their project <strong>Minddev</strong>',
      date: '2024-05-21',
      read: false,
    },
    {
      id: '7',
      type: NotificationType.newFeature,
      message: '<strong>New Project X feature: Y</strong>',
      date: '2024-05-16',
      read: false,
    },
    {
      id: '8',
      type: NotificationType.newFeature,
      message: '<strong>New MindTool feature: AI Assistant</strong>',
      date: '2024-05-10',
      read: false,
    },
  ],
};

const loadInitialState = (): NotificationsState => {
    const storedNotifications = localStorage.getItem('notifications');
    if (storedNotifications) {
        return { notifications: JSON.parse(storedNotifications) as Notification[] };
    }
    return initState;
};

const initialState: NotificationsState = loadInitialState();

const notificationsReducer = (state = initialState, action: NotificationActionTypes): NotificationsState => {
    const allReadNotifications = state.notifications.map((n) => ({ ...n, read: true }));
    const updatedNotifications = ('payload' in action) && state.notifications.map((n) =>
        n.id === action.payload.id ? { ...n, read: true } : n
    );
    switch (action.type) {
        case MARK_AS_READ:
            localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
            return {
                ...state,
                notifications: updatedNotifications,
            };
        case MARK_ALL_AS_READ:
            localStorage.setItem('notifications', JSON.stringify(allReadNotifications));
            return {
                ...state,
                notifications: allReadNotifications,
            };
        default:
            return state;
    }
};

export default notificationsReducer;
