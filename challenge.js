// javaScript challenges of problems solving practice 24;

//fizzbuzz;
function FizzBuzz(n) {
  if (!Number.isInteger(n) || n < 1 || n >= 100) {
    console.error("Error");
    return;
  }
  for (i = 1; n < 100; i++) {
    if (n % 3 === 0) {
      return "Fizz";
    }
    if (n % 5 === 0) {
      return "Buzz";
    }
    if (n % 3 === 0 && n % 5 === 0) {
      return "FizzBuzz";
    }
    return i;
  }
}

// letter count first solution;
function getLetterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let letterCounts = {};

  for (const letter of word) {
    let letterInWord = letter.toLowerCase();
    if (!typeof word === "string" || !alphabet.includes(letterInWord)) {
      console.error("Error");
      return;
    } else if (letterCounts[letterInWord] !== undefined) {
      letterCounts[letterInWord]++;
    } else {
      letterCounts[letterInWord] = 1;
    }
  }
  return letterCounts;
}

//letter count second solution;
function CountLetterInWord(word) {
  let letterCounts = {};

  for (const letter of word) {
    let letterInWord = letter.toLowerCase();
    if (!typeof word === "string" || !letterInWord.match(/[a-z]/)) {
      console.error("Error");
      return;
    } else if (letterCounts[letterInWord] !== undefined) {
      letterCounts[letterInWord]++;
    } else {
      letterCounts[letterInWord] = 1;
    }
  }
  return letterCounts;
}

CountLetterInWord("Caesar42");
console.log(CountLetterInWord("WODKDKDddddsdfasf"));
console.log(CountLetterInWord("23993434555555555"));
