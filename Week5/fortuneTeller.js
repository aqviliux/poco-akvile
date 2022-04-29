// Do the Fortune Teller again but this time with a object.
// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function Person(partnerName, numChildren, city, jobTitle, maxAge) {
    this.partnerName = partnerName;
    this.numChildren = numChildren;
    this.city = city;
    this.jobTitle = jobTitle;
    this.maxAge = maxAge;
}
//if you need to change arguments, you change the function in this way
function tellFortune(partnerName, numChildren, city, jobTitle, maxAge) {
    let fortune = new Person(partnerName, numChildren, city, jobTitle, maxAge);
    document.write(
        `You will be a ${fortune.jobTitle} in ${fortune.city}, and married to ${fortune.partnerName} with ${fortune.numChildren} kids. <br>`
    );
}
//if you pass just Person object you can add as many new parameters as you want.Use this one!
function tellPersonFortune(person) {
    document.write(
        `You will be a ${person.jobTitle} in ${person.city}, and married to ${person.partnerName} with ${person.numChildren} kids. <br>`
    );
}

tellFortune("Tom", 5, "Zurich", "developer");
tellFortune("John", 2, "Geneva", "translator");
tellFortune("Adam", 0, "Bern", "unemployed");
tellFortune("Kevin", 1, "Lugano", "train driver");
tellPersonFortune(new Person("Kevin", 1, "Lugano", "train driver"));
