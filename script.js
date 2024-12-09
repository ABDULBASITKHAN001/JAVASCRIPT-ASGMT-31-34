console.log("HELLO WORLD");
//
console.log("")
console.log("-----------------------------------------");
console.log("QUESTION NUMBER 01:");
var date = new Date();
console.log("THIS IS DATE: " , date)


console.log("")
console.log("-------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 02:");
// Array of month names
var months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// Get the current month (0-11)
var now = new Date();
var currentMonthIndex = now.getMonth();  // Returns an index from 0 (January) to 11 (December)

// Get and log the current month in words
console.log("The current month is: " + months[currentMonthIndex]);


console.log("")
console.log("----------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 03:");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var now = new Date();
var currentDayIndex = now.getDay();

var currentDayShort = days[currentDayIndex].slice(0, 3);

console.log("Today is: " + currentDayShort);


console.log("")
console.log("-----------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 04:");
// Get the current date
var now = new Date();
var dayOfMonth = now.getDate();  

if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

console.log("")
console.log("--------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 05:");

var currentDate = new Date();
var elapsedMilliseconds = currentDate.getTime();
var elapsedMinutes = elapsedMilliseconds / 60000;  


console.log("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds);
console.log("Elapsed minutes since January 1, 1970: " + elapsedMinutes);


console.log("");
console.log("----------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 06:");
// Create a Date object for the last day of the last month of 2020 (December 31, 2020)
var laterDate = new Date(2020, 11, 31);  // Month is 0-based, so 11 represents December

// Log the created Date object
console.log("Later date: " + laterDate);


console.log("");
console.log("----------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 07:");
var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log("Current hour:", currentHour);
currentDate.setHours(currentHour + 1);
console.log("Updated Date:", currentDate);


console.log("")
console.log("--------------------------------------------------------------------")
console.log("QUESTION NUMBER 08:");
// Create a Date object for the current date and time
var currentDate = new Date();

// Set the date to 100 years ago
var hundredYearsAgo = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());

// Display the date in the console
console.log("Date 100 years ago:", hundredYearsAgo);

console.log("")
console.log("---------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 09:");
// Create a Date object for the current date and time
var currentDate = new Date();

// Set the date to 100 years ago
var hundredYearsAgo = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());

// Display the date in the console
console.log("Date 100 years ago:", hundredYearsAgo);


console.log("")
console.log("---------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 10:");
// Customer details
var customerName = "John Doe";
var currentMonth = new Date().toLocaleString('default', { month: 'long' });

// Input values
var units = 100; // Number of units
var chargesPerUnit = 5; // Charges per unit

// Calculate amounts
var netAmountPayable = units * chargesPerUnit;
var latePaymentSurcharge = netAmountPayable * 0.015; // 1.5% late payment charge
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round amounts to 2 decimal places
netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Display the bill in the console
console.log("K-Electric Bill");
console.log("Customer Name:", customerName);
console.log("Current Month:", currentMonth);
console.log("Number of units:", units);
console.log("Charges per unit:", chargesPerUnit);
console.log("Net Amount Payable (within Due Date):", netAmountPayable);
console.log("Late Payment Surcharge (1.5%):", latePaymentSurcharge);
console.log("Gross Amount Payable (after Due Date):", grossAmountPayable);


console.log("chapter 31-35 COMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")