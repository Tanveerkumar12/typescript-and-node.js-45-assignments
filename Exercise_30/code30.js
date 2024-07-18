"use strict";
//printing messages for each user who is loggin in the system
let users = ["admin", "sarmad1", "Ali2", "Aslam3", "Tahir4"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hi admin Would you like to see status report");
    }
    else {
        for (let i = 0; i < 2; i++) {
            console.log(" HI " + user[i] + " Thankyou for login ");
        }
    }
}
