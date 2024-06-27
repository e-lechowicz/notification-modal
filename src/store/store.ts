import { combineReducers } from 'redux';
import notificationsReducer from './notifications/reducer.ts';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
