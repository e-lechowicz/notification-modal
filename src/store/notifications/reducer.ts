import {
  MARK_ALL_AS_READ,
  MARK_AS_READ,
  NotificationActionTypes,
  NotificationsState,
} from './types';
import { NotificationType } from '../../types/models.ts';

const initialState: NotificationsState = {
  notifications: [
    {
      id: '1',
      type: NotificationType.request,
      message: 'New request for ',
      date: 'dasd',
      read: false,
    },
    {
      id: '2',
      type: NotificationType.onHold,
      message: 'New request for <strong>Umpa Dumpa</strong>',
      date: '',
      read: false,
    },
    {
      id: '3',
      type: NotificationType.newFeature,
      message: 'New request for <strong>Umpa Dumpa</strong>',
      date: '',
      read: false,
    },
    // {
    //   id: '4',
    //   type: NotificationType.request,
    //   message: 'New request for <strong>Umpa Dumpa</strong>',
    //   date: '',
    //   read: false,
    // },
    // {
    //   id: '5',
    //   type: NotificationType.request,
    //   message: 'New request for <strong>Umpa Dumpa</strong>',
    //   date: '',
    //   read: false,
    // },
    // {
    //   id: '6',
    //   type: NotificationType.request,
    //   message: 'New request for <strong>Umpa Dumpa</strong>',
    //   date: '',
    //   read: false,
    // },
    // {
    //   id: '7',
    //   type: NotificationType.request,
    //   message: 'New request for <strong>Umpa Dumpa</strong>',
    //   date: '',
    //   read: false,
    // },
    // {
    //   id: '8',
    //   type: NotificationType.request,
    //   message: 'New request for <strong>Umpa Dumpa</strong>',
    //   date: '',
    //   read: false,
    // },
  ],
};

const notificationsReducer = (state = initialState, action: NotificationActionTypes): NotificationsState => {
    switch (action.type) {
        case MARK_AS_READ:
            if ('payload' in action && action.payload) {
                return {
                    ...state,
                    notifications: state.notifications.map((n) =>
                        n.id === action.payload.id ? { ...n, read: true } : n
                    ),
                };
            }
            return state;
        case MARK_ALL_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((n) => ({ ...n, read: true })),
            };
        default:
            return state;
    }
};

export default notificationsReducer;
