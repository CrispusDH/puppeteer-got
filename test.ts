import * as puppeteer from 'puppeteer';
import test from 'ava';
import got from "got";

test('example', async () => {
  const browser: puppeteer.Browser = await puppeteer.launch(
    {
      headless: false,
      defaultViewport: {
        width: 1366,
        height:766
      }
    });
  const pages = await browser.pages();
  const page = pages[0];
  await page.goto('https://github.com/avajs/ava');

  await got('https://github.com/avajs/ava');
});
