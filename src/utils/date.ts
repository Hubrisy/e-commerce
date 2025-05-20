export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getFormattedDate = (days: number): string => {
  if (days < 0) {
    throw new Error('Days cannot be negative');
  }

  const date = new Date();
  date.setDate(date.getDate() + days);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
