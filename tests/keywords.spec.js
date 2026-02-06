const {test, expect} = require('@playwright/test');
const Storage = require('../pageObjects/Storage');

test('search results contain keyword in titles', async ({ page })=>
{
  const searchTerm = test.info().project.name; 

  await page.goto("https://www.google.com/?hl=en");
  await page.locator('.gLFyf').fill(searchTerm);
  await page.locator('.gNO89b').first().click();

  console.log('Solve the CAPTCHA manually and then press Resume(F8)');
  await page.pause();
  
  const allTitles = await page.locator('h3').allTextContents();
  const titlesWeNeed = allTitles.filter(title => title.includes(searchTerm));

  titlesWeNeed.forEach(title => {
    expect(title).toContain(searchTerm);
  });
  console.log(titlesWeNeed);
  
});


test.only('PageObject', async ({ page })=>
{
  const searchTerm = test.info().project.name; 
  const url = test.info().project.use.baseURL;

  const storage = new Storage(page);

  await storage.link(url);
  await storage.search(searchTerm);
  await storage.captcha();
  const allTitles = await storage.titles();

  const titlesWeNeed = allTitles.filter(title => title.includes(searchTerm));
  expect(titlesWeNeed.length, `There are 0 titles with word: "${searchTerm}"`).toBeGreaterThan(0);
  console.log(titlesWeNeed)
  
   
});