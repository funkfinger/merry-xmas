exports.config = {
  // uncomment below to use an already running selenium server...
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: '/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.37.0.jar',

  specs: [
    '**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9011',
};