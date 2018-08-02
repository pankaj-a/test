var assert = require('assert');

console.log(process.env.BROWSERSTACK_USERNAME);
console.log(process.env.BROWSERSTACK_USERNAME);
console.log(process.env.BROWSERSTACK_USERNAME);
console.log(process.env.BROWSERSTACK_USERNAME);
console.log(process.env.BROWSERSTACK_USERNAME);
console.log(process.env.BROWSERSTACK_ACCESS_KEY);
console.log(process.env.BROWSERSTACK_ACCESS_KEY);
console.log(process.env.BROWSERSTACK_ACCESS_KEY);
console.log(process.env.BROWSERSTACK_ACCESS_KEY);
console.log(process.env.BROWSERSTACK_ACCESS_KEY);

describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function () {
    browser
      .url('http://bs-local.com:45691/check')

    assert(browser.getSource().match(/Up and running/i));
  });
});
