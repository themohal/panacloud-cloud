const student1 = {
    firstName: "Farjad",
    lastName: "Ali",
    fullName: function () { return this.firstName + " " + this.lastName }
}

console.log(student1.fullName())
