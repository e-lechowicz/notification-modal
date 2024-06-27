export enum NotificationType {
    request = 'request',
    onHold = 'onHold',
    newFeature = 'newFeature',
}

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    date: string;
    read: boolean;
}
