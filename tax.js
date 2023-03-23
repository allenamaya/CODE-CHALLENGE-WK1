let basicSalary = prompt ("Enter basic salary:");
let benefits = prompt ("Enter benefits:");
//payee calculations//
const taxRate = 0.3;
let payee = taxRate * basicSalary; 

//NHIF DEDUCTIONS CALCULATIONS//
 const nhifRate = 0.05;
 let nhifDeductions = nhifRate * basicSalary;


//Calculate the NSSF deductions\\
const nssfRate = 0.06;
let nssfDeduction = nssfRate * basicSalary
 
let grossSalary = parseFloat (basicSalary) + parsefloat(benefits);

let netSalary = grossSalary - payee - nhifDeductions;

console.log (`Basic salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Payee(tax): ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log (`NSSF deductions: ${nssfDeductions}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Net Salary: ${netSalary}`); 