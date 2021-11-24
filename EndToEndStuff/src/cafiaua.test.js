/**
 * @jest-environment puppeteer
 */
describe("Cafiaua", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/");
  });

    it('should be titled "Cafia"', async () => {
    await expect(page.title()).resolves.toMatch("Cafia");
  });

    it('should check if products added', async() =>{ 
    const button = await page.$("button") 
    await button.click() 
    await button.click() 
    await button.click()
    const amount = await page.$("span.makeStyles-amount-8") 
    if(amount){ 
      let val = await page.evaluate(el => el.textContent, amount); 
      expect(val).toEqual('3') 
    } 
  })
    it('second element title should be aaaa', async () => { 
        const thirdCoffee = await page.$('.products:nth-child(2)'); 
        const text = await page.evaluate(el => el.innerText, secondCoffee); 
        expect(text).toMatch('aaaa'); 
    }); 
    
    it('should increase', async () => { 
    await page.waitForSelector('h3.quantity'); 
    const quantity = await page.$eval('h3.quantity', (q) => q.innerHTML); 
 
    await page.waitForSelector('button.increase'); 
    const increaseButton = await page.$('button.increase'); 
 
    await increaseButton.click(); 
    const newQuantity = await page.$eval('h3.quantity', (q) => q.innerHTML); 
    expect(parseInt(newQuantity)).toBe(parseInt(quantity) + 1) 
  }); 
});
