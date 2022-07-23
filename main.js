"use strict";


let username = prompt("What is your name?", "type name here");

alert(`Hi ${username}!`);


let isUser = confirm(`Are you the ${username}?`);

alert( isUser ); // true if OK is pressed