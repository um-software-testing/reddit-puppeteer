const should = require('should');
const mocha = require('mocha');
const puppeteer = require('puppeteer');

const fetchPageTitle = async (page, url) => {
    await page.goto(url);
    return await page.evaluate(() => {
        return document.getElementsByTagName('title').item(0).innerHTML;
    });
};

(async () => {
    let browser = null;
    let page = null;

    // This will run before our tests to set up a browser instance
    // and page for us to use later.
    mocha.before(async function() {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    // This will run after our tests have completed and cleans up after
    // us just a bit. It isn't strictly necessary in this case, but
    // being tidy is a good habit to have.
    mocha.after(async function() {
        await browser.close();
        browser = null;
        page = null;
    });

    mocha.describe('fetchPageTitle', function() {
       mocha.it('should return "programming" for the programming subreddit', async function() {
           // Since we have to make a network request, set the timeout to
           // be quite generous to guard against false negatives caused
           // by imperfect network conditions.
           this.timeout(10000);

           // Fetch the title of a page whose title we already know, and
           // verify that it is correct. This could be seen as a test of
           // our `fetchPageTitle` function or of the Reddit web site
           // itself.
           const title = await fetchPageTitle(page, 'https://old.reddit.com/r/programming');

           // Assert that the title is what we expect it to be. We're
           // using the same assertion library we did in the
           // reddit-title-should.js example. Note, however, that we don't
           // have to catch the exception it might throw this time, that's
           // because Mocha (the test framework) catches it for us and
           // uses it to tell us which of our tests failed.
           should.equal(title, 'programming');
       });
    });
})();

