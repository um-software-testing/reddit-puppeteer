# reddit-puppeteer

Very basic Puppeteer project, with example code for several test scenarios.

To run:

```shell
npm install
node <file>.js
```

Some of the scripts use Mocha, a test framework, and need to be run using
`mocha` tool. These are configured such that they will run using the
`npm test` command.

## Scripts

`reddit-screenshot.js` - takes a screenshot of a particular subreddit and
saves it as a PNG file.

`reddit-title.js` - fetches a subreddit and finds the value of the HTML
`<title>` tag, which should be the name of the subreddit.

`reddit-title-mocha.js` - fetches a subreddit and confirms that its title
is correct using the Mocha test framework.
