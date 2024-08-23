//Technical Skills Survey Project Part 2: Exercise 6 - Caesar's VIP Guest Directory

//initial object;
const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

//adding BRUTUS to the dictionary of guests
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"]
};

// updating teh CICERO's gift;
guests.CICERO.pastGifts.push("Golden Lyre");

//getting the ANTONY region;
const antonyRegion = guests.ANTONY.region;

//removing CICERO from guests list;
delete guests.CICERO;

// assigning Antony's profile to new one;
let generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
