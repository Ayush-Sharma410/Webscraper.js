import puppeteer from 'puppeteer';


async function scrapeProduct(url){
    const browser=await puppeteer.launch();
    const page= await browser.newPage();
    await page.goto(url);

    const [el]=await page.$x('//*[@id="__next"]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/div[3]/div[1]/h1');
    const src =await el.getProperty('textContent');
    const srcTxt = await src.jsonValue();

    const [e13]=await page.$x('//*[@id="__next"]/div/div/div[2]/div/div[3]/div/div[2]/div/div/div[1]/div[1]/h2/span');
    const txt = await e13.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({srcTxt,rawTxt});
}
scrapeProduct("https://www.apollopharmacy.in/otc/power-gummies-jaw-dropping-skin-lemon-twist-flav-gummies-60");