import moment from 'moment';

export const messageDetailTimeOffsetFilter = (value: string) => moment(value)
  .format('h:mm a [ • ] DD/MM/YYYY');

export const timeOffsetFilter = (value: string) => moment(value).fromNow();

export const timeDividerFilter = (value: string) => {
  let text = '';
  const TODAY = moment().startOf('day');
  const YESTERDAY = TODAY.clone().subtract(1, 'days').startOf('day');

  if (moment(value).isSame(TODAY, 'd')) {
    text = 'Today';
  } else if (moment(value).isSame(YESTERDAY, 'd')) {
    text = 'Yesterday';
  } else {
    text = moment(value).fromNow(true);
  }
  return text;
};
