// LET Keyword in ES6 - Main purpose is to redefine the scope concept of VAR used in ES5/JS
var msg = "";
var msg = "My name is murugan";
function showCompanyName(name) {
    var msg = "Before moving to if condition";
    if (name == "Infosys") {
        var msg = "Inside IF condition :  Employee of " + name;
    }
    console.log("showCompanyName(Infosys) :" + msg);
}
;
showCompanyName("Infosys");
function showCompanyNameUsingLet(name) {
    let lmsg = "Before If Condition";
    if (name == "Infosys") {
        let lscope = "Scope is only inside if condition";
        let lmsg = "Inside IF condition :  Employee of " + name;
        console.log("lscope " + lscope);
    }
    console.log("showCompanyNameUsingLet(Infosys) :" + lmsg);
}
;
showCompanyNameUsingLet("Infosys");
x = "Is assigned a string even without creating a proper declaration";
console.log(x);
var x = "Var varaible X is defined after the log statement which is not possible for a let variable Y";
let y = "Let type variable Y";
for (var i = 1; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 2000);
}
;
for (let j = 1; j < 10; j++) {
    setTimeout(function () { console.log(j); }, 5000);
}
;
//# sourceMappingURL=letkeyword.js.map