const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://old.reddit.com/r/programming');

    const pageTitle = await page.evaluate(() => {
        return document.getElementsByTagName('title').item(0).innerHTML;
    });

    console.log('Page Title:', pageTitle);

    await browser.close();
})();

