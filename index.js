const puppeteer = require('puppeteer-core');

(async () => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const browser = await puppeteer.launch({ headless: false, executablePath: '/opt/google/chrome/google-chrome' });
  const page = await browser.newPage();
  await page.goto('https://popcat.click', { waitUntil: 'networkidle0' });
  
  while (true) {
    await page.click('#app');
    await delay(37);
  }

  await browser.close();
})();