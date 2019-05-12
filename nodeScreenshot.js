const puppeteer = require('puppeteer');

async function screenshotElement(websiteUrl, elementSelector) {
  const browser = await puppeteer.launch({args: ["--no-sandbox", "--disable-setuid-sandbox"]});
  
  const page = await browser.newPage();
  await page.goto(websiteUrl);
  await page.setViewport({ width: 800, height: 1000});

  const element =  await page.$(elementSelector);
  const bounding_box = await element.boundingBox();
  await element.screenshot({
    path: 'ele.png',
    clip: {
      x: bounding_box.x,
      y: bounding_box.y,
      width: Math.min(bounding_box.width, page.viewport().width),
      height: Math.min(bounding_box.height, page.viewport().height),
    },
  });
  
  await browser.close(); 
}

screenshotElement('https://github.com/hiteshdua1', 'ol > li:nth-child(1)');
