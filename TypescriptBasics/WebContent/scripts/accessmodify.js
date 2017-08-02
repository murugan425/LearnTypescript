class UserProfile {
    constructor(x) {
        this.x = x;
        // Normal way of implementing  getters and setters
        this.getName = () => { return this.username; };
        this.setName = (nameparam) => {
            if (nameparam.length < 0) {
                throw new Error('UserName cannot be blank.');
            }
            this.username = nameparam;
        };
        this.username = x;
    }
    ;
    // Using getters and setters directly in a different way is called Properties in Typescript
    get AGE() {
        return this.age;
    }
    ;
    set AGE(x) {
        if (this.age < 0) {
            throw new Error('Age cannot be negative value.');
        }
        this.age = x;
    }
    printUserName() { console.log(this.getName()); }
    printUserAge() { console.log(this.getName() + ' age is ' + this.AGE); }
}
// we can move the complete the userprofile class to a separate file
// and add a export command in front of it and import the same in this file.
let myUserProfile = new UserProfile('Murugan');
myUserProfile.printUserName();
myUserProfile.setName('Murugan Nagarajan');
console.log(myUserProfile.AGE);
myUserProfile.AGE = 24;
myUserProfile.printUserAge();
myUserProfile.printUserName();
//# sourceMappingURL=accessmodify.js.map