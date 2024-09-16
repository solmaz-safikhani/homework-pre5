const randomWords = require('random-words'); 

const wordsArray = randomWords({ exactly: 5 }); 
console.log(wordsArray); 

const uppercaseWords = wordsArray.map(word => word.toUpperCase()); 
console.log(uppercaseWords);
