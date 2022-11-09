import moment from 'moment';

export const parseDate = (date, pattern = 'MMM DD, YYYY') => {
  return moment(date).format(pattern);
};

export default parseDate;
