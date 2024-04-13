#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: chalk.green("Please select your currency?"),
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: chalk.yellow("Please select your conversion rate"),
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: chalk.magenta("Please enter the amount you wish to convert"),
    }
]);
//destructuring user input
const { from, to, amount } = answer;
//perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(chalk.white(`Your conversion from ${from} to ${to} is ${result}`));
}
else {
    console.log("Invalid conversion");
}
