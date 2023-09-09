import inquirer from "inquirer";
let dataValue = {
    PKR:1,
    USD:325,
    SAR:85,
    GBP:400,
    AED:85,
}

let dataInput = await inquirer.prompt([
    {
        name: "fromCurrency",
        type:"list",
        message:"Convert From?:",
        choices: ["PKR","USD","SAR","GBP","AED"]
    },
    {
        name: "toCurrency",
        type:"list",
        message:"Convert To?:",
        choices: ["PKR","USD","SAR","GBP","AED"]
    },
    {
        name: "currencyAmount",
        type:"number",
        message:"How Much Amount Is To Be Converted?:"
        
    },
])

const cuFrom=dataInput.fromCurrency;
const cuTo=dataInput.toCurrency;
const toAmount = dataInput.currencyAmount;

if(cuFrom=="USD"&&cuTo=="PKR"){
    const final = dataValue.USD*toAmount
    console.log(`Coversion From ${cuFrom} to ${cuTo} is ${final}`);
}