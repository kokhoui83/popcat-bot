const puppeteer = require('puppeteer-core');

const headless = false;
const executablePath = '/opt/google/chrome/google-chrome';

(async () => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const browser = await puppeteer.launch({ headless, executablePath });
  const page = await browser.newPage();
  await page.goto('https://popcat.click', { waitUntil: 'networkidle0' });
  // page.on('console', consoleObj => console.log(consoleObj.text()));

  while (true) {
    // click the cat
    await page.click('.cat-img');
    // check the click counter
    // await page.$eval('.counter', el => { console.log(el.textContent) });
    // wait before clicking again
    await delay(5);
  }

  await browser.close();
})();