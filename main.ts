#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

 let myBalance = 10000; //Dollor$
 let myPin = 1234;
// 1st Step...

//print Welcome message
console.log("Welcome To My ATM-Machine Project:");

 let pinAnswer = await inquirer.prompt(
    [
       {
            name: "pin",
            message: "Enter your Pin code:",
            type: "number"
        }
    ]
);

//  12345  ===  1234 - false
 if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");}
    //console.log(`Current Account Balance is:${myBalance}`)}
// 2nd Step... (Operation)
 let operationAns = await inquirer.prompt(
    [
            {
                name: "operation",
                message: "Please Select an operation:",
                type: "list",
                choices: ["withdraw Amount", "check balance"]
            }
    ]
)
    
//  3rs Step....(Withdraw ke Andr Amount Daalna)
 if (operationAns.operation === "withdraw Amount") {
    let withdrawAns = await inquirer.prompt(
        [
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select the withdrawl Method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]
      )
      if( withdrawAns.withdrawMethod === "Fast Cash"){
        
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select Amount:",
                choices: [1000, 2000, 5000, 10000]
            }
          ])
          if(fastcashAns.fastcash > myBalance){
           console.log("Insufficient Balance");
          } 
          else{
            myBalance -= fastcashAns.fastcash;
        console.log(`${fastcashAns.fastcash} Withdraw Successfully`);
        console.log(`Your remaining balance is: ${myBalance}`);
          }
      }
     else if( withdrawAns.withdrawMethod === "Enter Amount"){

      let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the Amount to Withdraw:"
        }
      ])

      if(amountAns.amount > myBalance){
        console.log("Insufficient Balance");
    }  
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} With draw Successfully`);
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
 else if (operationAns.operation === "check balance") {

console.log(`Your Account balance is: ${myBalance}`);
 }
        
}
// else {
//     console.log("Pin is Incorrect, Try Again");
// }



