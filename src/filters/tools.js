import dayJs from 'dayjs';

export const formatTime = (date) => {
  return dayJs(date).format('YYYY-MM-DD HH:mm:ss');
};

