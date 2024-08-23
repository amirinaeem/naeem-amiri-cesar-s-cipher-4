//Technical Skills Survey Project Part 2: Exercise 4

// The Secret Emblem of Caesar's Invitation

//variables of the secret Emblem;
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let locationStart = "";

// functions of the secret Emblem;

//deciphering the first clue;
if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
} else if (emblemClue2 === "Lion") {
  locationStart = "Colosseum";
} else {
  locationStart = "Villa";
}

//Use boolean logic to decipher the second clue;
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
} else if (emblemClue2 === "Grapes" || emblemClue2 === "Villa") {
  locationStart += "of Pompey";
}

// Depending on the value of emblemClue3, append a direction to the location.
switch (emblemClue3) {
  case 7:
    locationStart += "North";
    break;
  case 3:
    locationStart += "South";
    break;
  case 9:
    locationStart += "East";
    break;
  case 4:
    locationStart += "West";
    break;
}
