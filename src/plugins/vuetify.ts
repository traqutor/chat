import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E53935',
        secondary: '#FFCDD2',
        accent: '#3F51B5',
        error: colors.amber.base,
        info: colors.cyan.darken1,
        success: colors.grey.base,
        warning: colors.deepPurple.lighten2,
        background: colors.indigo.lighten5,
      },
      dark: {
        primary: '#1976D2',
        secondary: '#424242',
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
