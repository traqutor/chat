import {
  timeOffsetFilter,
  timeDividerFilter,
  messageDetailTimeOffsetFilter,
} from './dateday';


export default {
  install(Vue: any) {
    Vue.filter('timeOffsetFilter', timeOffsetFilter);
    Vue.filter('timeDividerFilter', timeDividerFilter);
    Vue.filter('messageDetailTimeOffsetFilter', messageDetailTimeOffsetFilter);
  },
};
