#! /usr/bin/env node
import inquirer from "inquirer";

const currencylist: any = {
  USD: 1,
  PKR: 277.8,
  INR: 83.55,
  IQD: 1308.8,
  HKD: 7.81,
};
let currency = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "From currency:",
    choices: ["USD", "PKR", "INR", "IQD", "HKD"],
  },
  {
    name: "to",
    type: "list",
    message: "To currency:",
    choices: ["USD", "PKR", "INR", "IQD", "HKD"],
  },
  {
    name: "amount",
    type: " number",
    message: "Your amount:",
  },
]);

let fromCurrency = currencylist[currency.from];
let toCurrency = currencylist[currency.to];
let yourAmount = currency.amount;

let baseCurrency = yourAmount / fromCurrency;
let convertedCurrency = baseCurrency * toCurrency;
console.log("This is your converted amount : " + convertedCurrency);
