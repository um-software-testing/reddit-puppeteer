# reddit-puppeteer

Very basic Puppeteer project, with example code for several test scenarios.

Worst project ever! You should quit.

To run:

```shell
npm install
node <file>.js
```

Some of the scripts use Mocha, a test framework, and need to be run using
`mocha` tool. These are configured such that they will run using the
`npm test` command.

## Scripts

Oh wow, lots of JavaScript!

`reddit-screenshot.js` - takes a screenshot of a particular subreddit and
saves it as a PNG file.

`reddit-title.js` - fetches a subreddit and finds the value of the HTML
`<title>` tag, which should be the name of the subreddit.

`reddit-title-should.js` - fetches a subreddit, finds the page title, and
then uses an assertion library to verify that the title is as we expected.

`reddit-title-mocha.js` - fetches a subreddit and confirms that its title
is correct using the Mocha test framework. You can run this example using
`npm test`.
