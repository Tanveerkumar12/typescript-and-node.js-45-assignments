"use strict";
let current_users = ["Mujahid1", "2Sam", "Mustafa3", 'Ali4', "shafqat5"];
let new_users = ['Abid1', "yaseen2", 'Mustafa3', "juneed4", "shafqat5"];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log(" Name not available ");
    }
    else {
        console.log(" Name available ");
    }
}
