// Technical Skills Survey Project II - Exercise 8: Caesar's Cipher Reloaded

//global variables;
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// functions

//encrypting single character function
function encryptLetterFunc(letter) {
  let index = alphabet.indexOf(letter.toLowerCase()); //current index of letter in alphabet
  let moveIndex = (index + shiftValue) % alphabet.length; //new index of letter in alphabet
  let encryptedLetter = alphabet[moveIndex]; //encrypted letter in alphabet
  return encryptedLetter;
}

//encrypting  message function
function encryptMessageFunc(message) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    //loop over message
    encryptedMessage += encryptLetterFunc(message[i]);
    //encrypted message
  }
  return encryptedMessage;
}

//decrypting single character function
function decryptLetterFunc(encryptedLetter) {
  let index = alphabet.indexOf(encryptedLetter.toLowerCase()); //index of encrypted letter
  let decryptedLetterIndex =
    (index - shiftValue + alphabet.length) % alphabet.length;
  let decryptedLetter = alphabet[decryptedLetterIndex]; //index of decrypted letter
  return decryptedLetter; // returns decrypted letter
}

// decryptLetterFunc(encryptedLetter) this should be called on encrypted letter

// decrypting message function
function decryptMessageFunc(encryptedMessage) {
  let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    //loop over message
    decryptedMessage += decryptLetterFunc(encryptedMessage[i]); //encrypted message
  }
  return decryptedMessage;
}
