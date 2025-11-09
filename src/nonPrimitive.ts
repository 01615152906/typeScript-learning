

// array , object

// ts - tuple


let bazarList: string[] = ["eggs", "milk", "sugar"];

// bazarList.push(true);
bazarList.push("hello");


let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];


// mixedArr.push(true);
// mixedArr.push(12);
// mixedArr.push("Apple");


// let coordinates: [number, number] = [20, 30];
let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Husband", "wife"];

// let MezbaNameAndRoll : [string, number] = ["Mezba", 79]
// MezbaNameAndRoll[0] = 79

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];



// reference type : object

// const user : {
//     firstName: string;
//     middleName: string;
//     lastName: string;
// }= {
// firstName: "Mezbaul",
// middleName: "Abedin",
// lastName: "Forhan"
// }


// const user : {
//     // organization: string;
//      organization: "Programming Hero";// value => type : literal types
//     firstName: string;
//     middleName?: string; // optional type
//     lastName: string;
//     isMarried: boolean;
// }= {
//  organization: "Programming Hero",
// firstName: "Jhankar",
// // middleName: "Somthing",
// // middleName: "Somthing",
// lastName: "Mahbub",
// // isMarried: "he he ami ",
//  isMarried: true
// };

// user.organization = "Programming Hero Fire";
// console.log(user)


const user : {
    // organization: string;
   readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
}= {
 organization: "Programming Hero",
firstName: "Jhankar",
// middleName: "Somthing",
// middleName: "Somthing",
lastName: "Mahbub",
// isMarried: "he he ami ",
 isMarried: true
};

user.organization = "Programming Hero Fire";
console.log(user)