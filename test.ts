import test from 'ava';
import got from "got";

test('example', async () => {
  await got('https://github.com/avajs/ava');
});
