//Technical Skills Survey Project II - Exercise 7: Meeting Again with Caesar's Best Friend

// global variables;

const friend = "BRUTUS";
const shift = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let friendEncryptedName = "";

// function of encrypting the message

//Ceasar Cipher technique
for (let i = 0; i < friend.length; i++) {
  let friendLetter = friend[i].toLowerCase();
  let friendIndexInAlphabet = alphabet.indexOf(friendLetter);
  let newIndexFriend = (friendIndexInAlphabet + shift) % alphabet.length;
  friendEncryptedName += alphabet[newIndexFriend].toUpperCase();
}

//The modulus operator, %, ensures that if the sum of the current index
// and the shift value surpasses the alphabet's length, it wraps around
// to the start. Thus, after "z", we return to "a", guaranteeing continuous encryption.
