import moment from 'moment';

const timeOffsetFilter = (value: string) => moment(value).fromNow(true);

export default timeOffsetFilter;
