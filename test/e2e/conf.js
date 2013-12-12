exports.config = {
  // uncomment below to use an already running selenium server...
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9000',
};