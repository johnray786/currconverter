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
        choices: ["USD","SAR","GBP","AED","PKR"]
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
    const final = dataValue.USD*toAmount;
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else if (cuFrom=="SAR"&&cuTo=="PKR"){
    const final = dataValue.SAR*toAmount;
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else if (cuFrom=="GBP"&&cuTo=="PKR"){
    const final = dataValue.GBP*toAmount;
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else if (cuFrom=="AED"&&cuTo=="PKR"){
    const final = dataValue.AED*toAmount;
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else if (cuFrom=="PKR"&&cuTo=="PKR"){
    const final = dataValue.PKR*toAmount;
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else if (cuFrom=="PKR"&&cuTo=="USD"){
    const final = parseFloat((toAmount/dataValue.USD).toFixed(2));
    console.log(`${cuFrom}.${toAmount} to ${cuTo} is ${cuTo}.${final}`);
}
else{console.log(`Wrong Currency Input`)};
