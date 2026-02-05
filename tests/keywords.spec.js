const {test, expect} = require('@playwright/test');


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