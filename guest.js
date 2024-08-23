//Technical Skills Survey Project Part 2: Exercise 5 - Caesar's Party Guest List;

//global variables;

const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]; //list of guests
const spartacusIndex = ""; // index of SPARTACUS in guests
const indexToRemove = ""; // index of CASSIUS in guests
const specialGuests = ""; //special guest list
const honoredGuests = ""; //honored guest list
const otherGuests = ""; //other guest list
const sortedGuests = ""; //sorted guest list

//functions and methods ;

//adding the Brutus;
guests.unshift("BRUTUS");

//checking the added guest;
guests[0];

//adding AUGUSTUS and LUCIA;
guests.push("AUGUSTUS", "LUCIA");

//checking SPARTACUS in the list of guests;
spartacusIndex += guests.indexOf("SPARTACUS");

//removing CASSIUS from the list of guests;
indexToRemove += guests.indexOf("CASSIUS"); //first find the index;
guests.splice(indexToRemove, 1); //second remove the guest

//extracting the three guests from the list
specialGuests += guests.slice(0, 3);

//sorting the guests and keeping the honored guests at the top of lists;
honoredGuests += guests.slice(0, 1); // Extracts honored guests.
otherGuests += guests.slice(1); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
sortedGuests += honoredGuests.concat(otherGuests); // Combines both arrays.
