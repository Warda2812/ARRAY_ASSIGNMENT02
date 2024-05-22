/* Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following properties:
⚫ name (string): The name of the product.
⚫ price (number): The price of the product.
⚫ inventory (object): An object containing inventory details including:
⚫ stock (number): The number of products available.
⚫ color Options (string[]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.*/
var product1 = {
    name: "Nike",
    price: 2999,
    color: "black",
    inventory: {
        stock: 6,
        colorOption: ["black", "white", "blue"]
    },
};
var product2 = {
    name: "Adidas",
    price: 3000,
    color: "white",
    inventory: {
        stock: 4,
        colorOption: ["black", "white", "blue"]
    },
};
var product3 = {
    name: "Bata",
    price: 4000,
    color: "blue",
    inventory: {
        stock: 10,
        colorOption: ["black", "white", "blue"]
    },
};
var products = [
    product1,
    product2,
    product3
];
var changeColor = function (object, newColor) {
    object.color = newColor;
    if (object.color === "black") {
        var ipercent7 = object.price / 100 * 7;
        object.price += ipercent7;
    }
    else if (object.color === "white") {
        var ipercent2 = object.price / 100 * 2;
        object.price += ipercent2;
    }
    else if (object.color === "blue") {
        var dpercent6 = object.price / 100 * 6;
        object.price -= dpercent6;
    }
};
products.forEach(function (item) {
    console.log(item);
});
/* OUTPUT:
{   name: 'Nike',
    price: 2999,
    color: 'black',
    inventory: { stock: 6, colorOption: [ 'black', 'white', 'blue' ] } }
{   name: 'Adidas',
    price: 3000,
    color: 'white',
    inventory: { stock: 4, colorOption: [ 'black', 'white', 'blue' ] } }
{   name: 'Bata',
    price: 4000,
    color: 'blue',
    inventory: { stock: 10, colorOption: [ 'black', 'white', 'blue' ] } } */
changeColor(product1, "white");
changeColor(product2, "blue");
changeColor(product3, "black");
console.log("\n");
products.forEach(function (item) {
    console.log(item);
});
var students = [
    { name: "Warda Waseem", grades: [57, 76, 65, 76, 68, 56, 76] },
    { name: "Maham Fatima", grades: [85, 74, 76, 87, 98, 76, 76] },
    { name: "Owais Khan", grades: [58, 65, 98, 65, 43, 43, 43] }
];
var calculateAverageGrade = function (studentGrade) {
    var average = 0;
    studentGrade.forEach(function (val) {
        average += val;
    });
    return average / studentGrade.length;
};
for (var i = 0; i < students.length; i++) {
    var studentAverage = calculateAverageGrade(students[i].grades);
    console.log("Students name: ".concat(students[i].name));
    console.log("Students average: ".concat(Math.round(studentAverage), "\n"));
}
var employees = [
    { name: "Warda Waseem", hoursWorked: 8, hourlyRate: 500, salary: 0 },
    { name: "Maham Fatima", hoursWorked: 15, hourlyRate: 400, salary: 0 },
    { name: "Owais Khan", hoursWorked: 22, hourlyRate: 300, salary: 0 }
];
var calculateSalary = function (employeeSalary) {
    for (var _i = 0, employeeSalary_1 = employeeSalary; _i < employeeSalary_1.length; _i++) {
        var employee = employeeSalary_1[_i];
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.10;
        }
    }
};
calculateSalary(employees);
console.log(employees);
