"use strict";
let usernames = ["admin", "Tanveer", "Ali", "Zulifqar", "Tahir"];
if (usernames.length === 0) {
    console.log(" we need to find some usernames!");
}
else {
    for (let username of usernames) {
        if (username === " admin ") {
            console.log(" Hello admin, would you like to seen a status report?");
        }
        else {
            console.log(` Hello ${username}, thank you for logging in again`);
        }
    }
}
