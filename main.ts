import inquirer from "inquirer";

const exchangeRates: Record<string, number> = {
  PKR: 1,
  USD: 1 / 325, // 1 USD = 1/325 PKR
  SAR: 1 / 85,  // 1 SAR = 1/85 PKR
  GBP: 1 / 400, // 1 GBP = 1/400 PKR
  AED: 1 / 85,  // 1 AED = 1/85 PKR 
  // these all are denominated in pkr to simplify the calculation
};

const dataInput = await inquirer.prompt([
  {
    name: "fromCurrency",
    type: "list",
    message: "Convert From?:",
    choices: ["USD", "SAR", "GBP", "AED", "PKR"],
  },
  {
    name: "toCurrency",
    type: "list",
    message: "Convert To?:",
    choices: ["PKR", "USD", "SAR", "GBP", "AED"],
  },
  {
    name: "currencyAmount",
    type: "number",
    message: "How Much Amount Is To Be Converted?:",
  },
]);

const fromCurrency = dataInput.fromCurrency;
const toCurrency = dataInput.toCurrency;
const currencyAmount = dataInput.currencyAmount;

if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
  const final = (currencyAmount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
  console.log(`${fromCurrency}.${currencyAmount} to ${toCurrency} is ${toCurrency}.${final.toFixed(2)}`);
} else {
  console.log(`Wrong Currency Input`);
}
