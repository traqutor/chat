import {
  timeOffsetFilter,
  timeDividerFilter,
} from './dateday';


export default {
  install(Vue: any) {
    Vue.filter('timeOffsetFilter', timeOffsetFilter);
    Vue.filter('timeDividerFilter', timeDividerFilter);
  },
};
