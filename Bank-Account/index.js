function BankAccount(accNumber, name, type, balance,status) {
  this.AccountNumber = accNumber;
  this.BankName = name;
  this.Type = type;
  this.balance = balance;
  this.Status=status
  this.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
  };
  this.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("Insufficient Balance");
      return null;
    }
  };
  this.checkBalance = function () {
    let Balance =  this.balance;
    return Balance;
  };

  this.isActive = function () {
    return status;
  };
}

function GetTotalBalance(customerArr) {
let totalBalance=0;

customerArr.forEach(function(customer)
{
  if(customer.isActive())
  {
    totalBalance+=customer.checkBalance();
  }
    
  
})
  
  return totalBalance;
}



let customerArr=[];
function addCustomer(accNumber, name, type, balance,status){
 let customer=new BankAccount(accNumber, name, type, balance,status)
 customerArr.push(customer);
}

const customer1=addCustomer(36423754323, "Abhishek Ray", "Savings", 20000,true);

const customer2=addCustomer(34356994323, "Rayansh Ray", "Savings", 50000,false);

const customer3=addCustomer(8236953623, "Ram Shyam", "Savings", 30000,true);


console.log(customerArr[0].withdraw(5000))
console.log(customerArr[0].deposit(10000))
console.log(customerArr[0].checkBalance())
console.log(customerArr[0].isActive())

console.log(customerArr[1].withdraw(15000))
console.log(customerArr[1].deposit(10000))
console.log(customerArr[1].checkBalance())
console.log(customerArr[1].isActive())

console.log(customerArr[2].withdraw(15000))
console.log(customerArr[2].deposit(101000))
console.log(customerArr[2].checkBalance())
console.log(customerArr[2].isActive())
console.log(GetTotalBalance(customerArr));

