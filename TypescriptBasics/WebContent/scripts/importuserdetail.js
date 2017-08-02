"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Move the complete the userprofile class to a separate file
// by adding a export command in front of it and import the same in this file.
const userdetail_1 = require("./userdetail");
let myUserProfile = new userdetail_1.UserDetail('Murugan');
myUserProfile.printUserName();
myUserProfile.setName('Murugan Nagarajan');
console.log(myUserProfile.AGE);
myUserProfile.AGE = 24;
myUserProfile.printUserAge();
myUserProfile.printUserName();
//# sourceMappingURL=importuserdetail.js.map