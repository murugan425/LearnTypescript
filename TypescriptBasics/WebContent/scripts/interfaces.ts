interface User {
    fullname: string;
    mobile: number;
}

let printUserDetails = (user: User) => {
    console.log(user.fullname);
};

let myprofile = {fullname : 'Murugan Nagarajan', mobile : 13199301234 };
printUserDetails(myprofile);

