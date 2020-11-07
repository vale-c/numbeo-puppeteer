const puppeteer = require('puppeteer');

async function scrapeNumbeoData(url)  {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => {
    const rows = document.querySelectorAll('tr');
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => column.innerText);
    });
  });

  const cityData = [];
  cityData.push(result);
  console.log(cityData);

  browser.close();
}

scrapeNumbeoData('https://www.numbeo.com/cost-of-living/region_prices_by_city?itemId=27&region=150&displayCurrency=EUR'); 