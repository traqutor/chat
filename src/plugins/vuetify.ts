import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3277E8',
        secondary: '#E2E6EA',
        accent: '#3A6999',
        info: colors.cyan.darken1,
        success: colors.grey.base,
        warning: colors.deepPurple.lighten2,
        error: colors.amber.base,
        background: '#fcffff',
      },
      dark: {
        primary: '#3d6a97',
        secondary: '#3b4758',
        accent: '#82B1FF',
        info: '#2196F3',
        success: '#4CAF50',
        error: '#FF5252',
        warning: '#FFC107',
        background: '#18222d',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
