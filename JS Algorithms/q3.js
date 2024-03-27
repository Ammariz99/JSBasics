function findWordIndexes(str, word) {
  const indexes = [];
  const wordLength = word.length;
  const strLength = str.length;

  for (let i = 0; i <= strLength - wordLength; i++) {
    let match = true;

    for (let j = 0; j < wordLength; j++) {
      if (str[i + j] !== word[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      indexes.push(i);
    }
  }

  return indexes;
}

const inputString = "Hello world, hello universe, hello everyone!";
const searchWord = "hello";
const wordIndexes = findWordIndexes(
  inputString.toLowerCase(),
  searchWord.toLowerCase()
);
console.log(wordIndexes);
