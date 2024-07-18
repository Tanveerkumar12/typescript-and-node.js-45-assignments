//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


let userName="tanveer"

let lowercase=userName.toLowerCase();
let upperUpCASSE=userName.toUpperCase();
let titlecase=userName.split(' ').map(word =>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ')

console.log(upperUpCASSE);
console.log(lowercase);
console.log(titlecase);