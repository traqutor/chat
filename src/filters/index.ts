import timeOffsetFilter from './dateday';

export default {
  install(Vue: any) {
    Vue.filter('timeOffsetFilter', timeOffsetFilter);
  },
};
