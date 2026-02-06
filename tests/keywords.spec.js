const {test, expect} = require('@playwright/test');

const GooglePage = require('../pageObjects/GooglePage');
const SearchResult = require('../pageObjects/SearchResult');

test('search results contain keyword in titles', async ({ page })=>
{
  const query = test.info().project.name; 

  await page.goto("https://www.google.com/?hl=en");
  await page.locator('.gLFyf').fill(query);
  await page.locator('.gNO89b').first().click();

  console.log('Solve the CAPTCHA manually and then press Resume(F8)');
  await page.pause();
  
  const allTitles = await page.locator('h3').allTextContents();
  const titlesWeNeed = allTitles.filter(title => title.includes(query));

  titlesWeNeed.forEach(title => {
    expect(title).toContain(query);
  });
  console.log(titlesWeNeed);
  
});


test.only('search results contain keyword - page object pattern', async ({ page })=>
{
  const query = test.info().project.name; 
  const url = test.info().project.use.baseURL;

  const googlePage = new GooglePage(page);
  const searchResult = new SearchResult(page);

  await googlePage.goto(url);
  await googlePage.search(query);
  await googlePage.solveCaptcha();

  const allTitles = await searchResult.getAllTitles();

  const titlesWeNeed = allTitles.filter(title => title.includes(query));
  expect(titlesWeNeed.length, `There are 0 titles with word: "${query}"`).toBeGreaterThan(0);
  console.log(titlesWeNeed)
  
   
});