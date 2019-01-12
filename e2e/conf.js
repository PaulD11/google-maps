exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'LM-18 Logout/LM-18_Logout.js',
      'LM-12 Login/LM-12_Login.js'
  ]
};

  /*
    1. GoogleMaps - selenium-standalone start
    2. GoogleMaps - ionic serve
    3. GoogleMaps/e2e - protractor conf.js
  */