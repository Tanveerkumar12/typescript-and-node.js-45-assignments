"use strict";
let userName = "tanveer";
let lowercase = userName.toLowerCase();
let upperUpCASSE = userName.toUpperCase();
let titlecase = userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(upperUpCASSE);
console.log(lowercase);
console.log(titlecase);
