import { format } from 'date-fns';

export function isBridgingDay(date) {
    const weekday = format(date, 'EEE');
    return (weekday === 'Tue' || weekday === 'Thu');
}