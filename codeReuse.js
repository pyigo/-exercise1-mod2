// COMPLEX DATA TYPES - COLLECTIONS - MULTIPLE VALUES
students = ["Kamila", "Khayra", "Axelle"] //an array(aka an ordered  List) of Strings 
address = {// Create an object (Like a block of data or Dictionary//
    line1: "1750 6th st", // line1 is the key, 1750 is the value pair
    city: "Columbia city",
    state: "NJ",
    zip: "07103" //we have xreated and address object.
}

console.log(students[0]) //will print Kamila.   0 is the offset from starting from left
console.log(address.zip)
console.log(address.line1 + "\n" + address.city + "\n " + address.zip)

// ANATOMY OF A FUNCTION
// DEFINING A FUNCTION
function addTwo(a, b){ //Takes two incoming parameters
    let result = a +b; //body of the function 
    return result; //The return value. zero or one value
}
 
// CALLING or INVOKING a function
// we can reuse the word "result" because they are in different block scope
let result = addTwo(6, 7); //Passing in two arguments 6 and 7
console.log (result);