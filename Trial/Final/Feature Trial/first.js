console.log("Hello World")
const XLSX = require("xlsx");
const workbook = XLSX.readFile("Productdata.xlsx")
console.log(workbook)
const worksheet = workbook.Sheets["Sheet1"];

const arr1 = XLSX.utils.sheet_to_json(worksheet);
const prodata = {};

console.log(arr1)

for (const product of arr1){
    const name = product["Product Name"];
    const genre = product["Genre"];
    price = product["Price "];
    // console.log(name)
    console.log(price)

    // if (name in prodata ==false){
    //     prodata[name] = 
    // }
}
