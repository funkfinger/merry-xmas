'use strict';

// below is an example of a protractor test- in order to get it working,
// you must first start up a selenium web-driver. command looks like:
// > webdriver-manager start --standalone
// then run the tests with protractor:
// > protractor test/e2e/conf.js

describe('merryXmas app', function () {

  // var ptor;

  beforeEach(function(){
    // ptor = protractor.getInstance();
  });

  describe('homepage', function() {
    it("should contain 'ho ho ho' on homepage", function(){
      browser.get("http://127.0.0.1:9000/");
      var title = browser.findElement(by.id('page_title'));
      console.log(title.getText());
      expect(title.getText()).toEqual('Ho, Ho, Hey-oooo! Carrie, Jay & Wilson\'s XMAS albums');
    });
  });

});