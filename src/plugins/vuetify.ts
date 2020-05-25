import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00b3d9',
        secondary: '#C3E6E9',
        accent: '#3F51B5',
        error: colors.amber.base,
        info: colors.cyan.darken1,
        success: colors.grey.base,
        warning: colors.deepPurple.lighten2,
        background: '#fff',
      },
      dark: {
        primary: '#3d6a97',
        secondary: '#3b4758',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#18222d',
      },
    },
  },
});
