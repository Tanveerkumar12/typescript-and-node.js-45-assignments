"use strict";
//            Question 15
// let Guest_list = ["Ahmed" , "Hassan" , "Abdullah"];
//  for(let i=0; i<Guest_list.length; i++){
//     console.log(` Repected sir ` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\n thank you\n\n`);
//  }
//  let not_present : string = `Umar`;
//  let new_guest : string = `Kashif`;
//  for(let i=0; i<Guest_list.length; i++){
//     console.log(` Repected sir ` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\n thank you\n\n`);
//  }
//  console.log(`Mr. ${not_present} will not comming tomorrow dinner.`)
//      Question 16
// let Guest_list = ["Ahmed" , "Hassan" , "Abdullah"];
//  let not_present : string = `Umar`;
//  let new_guest : string = `Kashif`;
//  Guest_list[1] = new_guest;
//  for(let i=0; i<Guest_list.length; i++){
//     console.log(` Repected sir/madam ` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\n thank you\n\n`);
//  }
//  Guest_list.unshift(` shaheen `, ` saleem `, ` sana `);
//  for(let i=0; i<Guest_list.length; i++){
//     console.log(` Repected sir/madam ` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\n thank you\n\n`);
//  }
//       Question 17
let Guest_list = ["Ahmed", "Hassan", "Abdullah"];
let not_present = `Umar`;
let new_guest = `Kashif`;
Guest_list[1] = new_guest;
Guest_list.unshift(` shaheen `, ` saleem `, ` sana `);
console.log(`\n unfortunately we can not arrange big table , only two people allow.`);
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    console.log(` sorry sir/madam.${remove_guest} you are not inivited for dinner. `);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(` Repected sir/madam ` + Guest_list[i] + `,\n yes you are still invited on tomorrow dinner .\n thank you\n\n`);
}
Guest_list.splice(0, 2);
console.log(Guest_list);
