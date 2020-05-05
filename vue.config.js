// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    https: {
      key: fs.readFileSync('./certs/dev_localhost.key'),
      cert: fs.readFileSync('./certs/dev_localhost.pem'),
    },
  },
};
