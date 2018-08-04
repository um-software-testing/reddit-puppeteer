const puppeteer = require('puppeteer');
const should = require('should');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://old.reddit.com/r/programming');

    const pageTitle = await page.evaluate(() => {
        return document.getElementsByTagName('title').item(0).innerHTML;
    });

    // Here we use an assertion, as defined in the Should.js package.
    // There are many assertion libraries in existence, but their basic
    // mode of operation is that they check that a condition is met
    // and produce an error if it is not. In this case, the assertion
    // throws an exception if its condition is not met, which we catch
    // so that we can print it as an enlightening error message.
    try {
        await should.equal(pageTitle, 'programming-oops!');
    } catch (e) {
        console.log(e);
    }

    await browser.close();
})();

