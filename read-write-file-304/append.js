
import fs from 'node:fs'
//div.append("Some text", p);

fs.appendFile('data.txt', '\nHello, this is appended!', (err) => {
  if (err) throw err;
  console.log('Saved!');
});
