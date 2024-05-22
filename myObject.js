"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "shivani",
    email: "sdsfdf@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "shivani", isPaid: true });
//anthor way to add another type which actually no giving error
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "shivani", isPaid: true, email: "DSFD@gmail.com" };
createUser1(newUser);
//<------------------------------------------------->
function createCourse() {
    return { name: "ractJs", isPaid: 88 };
}
var myUser = {
    _id: "12333",
    name: "shivani",
    email: "h@gmail.com",
    isActive: false,
};
myUser.email = "h@h.com";
