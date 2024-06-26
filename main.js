#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; //Dollar
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        //=, -=, +=
        mybalance -= amountAns.amount;
        console.log("your remaining balance is:" + mybalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + mybalance);
    }
}
else {
    console.log("incorrect pin");
}
