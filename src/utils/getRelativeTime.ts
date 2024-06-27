import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getRelativeTime = (dateString: string) => {
    const date = dayjs(dateString);
    return date.fromNow();
}

