

 type User = {
    name: string;
    age: number;

 };


// interface : object type: array, object , function


interface IUser {
  name: string;
  age: number;
}




 type Role = {
    role: "admin" | "user";
 }
type userWithRole = User & Role ;


interface IUserWithRole extends IUser{
      role: "admin" | "user";
}


//  const user1: userWithRole = {
//     name: "Mr.x",
//     age: 100,
//     role: 'admin'
//  };
const user1: IUserWithRole = {
    name: "Mr.x",
    age: 100,
    role: 'admin'
 };

 const user2: IUser = {
  name: "Mr. Y",
  age: 102,
};


type IsAdmin = boolean;

const isAdmin: IsAdmin = false;



// function

type Add = (num1: number, num2: number) => number;


interface IAdd {
  (num1: number, num2: number): number;
}


const add : Add = (num1, num2) => num1 + num2

type Friends = string[];

// const freinds: string [] = ["A", "B", "C"];


// const add: IAdd = (num1, num2) => num1 + num2;


interface IFriends {
  [index: number]: string;
}

// const freinds: Friends= ["A", "B", "C"];

const friends: IFriends= ["A", "B", "C"];