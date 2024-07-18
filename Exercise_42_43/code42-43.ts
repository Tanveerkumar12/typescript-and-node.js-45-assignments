//42.Great Magicians: Start with a copy of your program from Exercise 39.
 //Write a function called make_great() that modifies the array of magicians by adding the
 // phrase the Great to each magician’s name. Call show_magicians() to see that
  // the list has actually been modified.


// let magicians : string[] = [` Hurry potter `, ` Ron weasley `, ` Hermione Granger `]


// function make_great (magicianArry: string[]){
//     for(let i = 0; i < magicianArry.length; i++){
//         magicians[i] = ` the great ` + magicianArry[i]
//     }
// }


// function show_magicians(magician: string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     })
// }
// make_great(magicians);
// show_magicians(magicians);



// Question 43
//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array
// Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.


let magicians : string[] = [` Hurry potter `, ` Ron weasley `, ` Hermione Granger `]

function copyArry(arr:string[]){
    return[...arr]
}

function make_great (magicianArry: string[]){
    for(let i = 0; i < magicianArry.length; i++){
        magicianArry[i] = ` the great ` + magicianArry[i]
    }
}


function show_magicians(magician: string[]){
    magicians.forEach(element => {
        console.log(element);
    })
}

const copyMagicianArry = copyArry(magicians)
make_great(copyMagicianArry);

console.log(`\n\n This is my origional arry`)
show_magicians(magicians);

console.log(`\n\n This is my modefied copy of the arry;`);
show_magicians(copyMagicianArry);
