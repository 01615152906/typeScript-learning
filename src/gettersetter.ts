
// getter
// setter


class BankAccount {
public readonly userId: number;
public userName: string;
protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

 // setter use kre krte chai

//   addBalance(balance: number) {
//     this.userBalance = this.userBalance + balance;
//   }

// setter use kre krte chai

set addBalance (amount : number){
    this.userBalance = this.userBalance + amount;
    
}


  // get korbo


//   getBalance(){
//     return this.userBalance
//   }


  // getter use kore get korte chai
   get getBalance() {
    return this.userBalance;
  }

}

// class StudentBankAccount extends BankAccount {
//   test() {
//     this.userBalance;
//   }
// }



const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.userId = 222;

// mezbaBhaiAccount.addBalance (100);
// mezbaBhaiAccount.addBalance(50)




// console.log(mezbaBhaiAccount.getBalance())

mezbaBhaiAccount.addBalance = 250;
mezbaBhaiAccount.addBalance = 250;
console.log(mezbaBhaiAccount.getBalance)
console.log(mezbaBhaiAccount);