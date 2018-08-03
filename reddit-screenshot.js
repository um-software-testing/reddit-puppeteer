const puppeteer = require('puppeteer');

// Create a browser instance, navigate to the r/programming
// subreddit, then take a screenshot.
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://old.reddit.com/r/programming');
    await page.screenshot({path: 'reddit-r-programming.png'});

    await browser.close();
})();

