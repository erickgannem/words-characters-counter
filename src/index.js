const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ws = fs.createWriteStream('./tmp.file');

rl.question('Write a text \n', (text) => {
  const rs = fs.createReadStream('./tmp.file', 'utf8');
  let words = 0;
  let characters = 0;

  ws.write(text);
  rs.on('data', (chunk) => {
    const arrayOfWords = chunk.split(' ');
    words = arrayOfWords.length;

    for (let i = 0; i < words; i += 1) {
      characters += arrayOfWords[i].length;
    }
    console.log(`You've wrote ${words} words and ${characters} characters`);
  });
  rl.close();
});
