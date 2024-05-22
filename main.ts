                            // ASSIGNMENT # 02 - ARRAYS
                        // WARDA WASEEM - THURSDAY 9 TO 12


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

type Product = {
    name: string;
    price: number;
    color: string;
    inventory:{
        stock: number;
        colorOption? : ["black", "white", "blue"]
        
    };
};
    let product1: Product ={
       name: "Nike",
       price: 2999,
       color: "black",
       inventory:{
        stock: 6,
       colorOption: ["black", "white", "blue"] 
     
       },
    } ; 
    let product2: Product ={
        name: "Adidas",
        price: 3000,
        color: "white",
        inventory: {
            stock: 4,
            colorOption: ["black", "white", "blue"]
        },
    };
    let product3: Product = {
        name: "Bata", 
        price: 4000,
        color: "blue",
    inventory: {
           stock: 10,
           colorOption: ["black", "white", "blue"]
    },    
};

let products: Product[] = [
    product1,
    product2,
    product3
];
let changeColor = (object: Product , newColor: string) => {
    object.color = newColor
    if(object.color === "black"){
        let ipercent7: number = object.price /100 * 7
        object.price += ipercent7
    }
    else if (object.color === "white"){
        let ipercent2: number = object.price /100 * 2
        object.price += ipercent2
    }
    else if( object.color === "blue"){
      let dpercent6: number = object.price /100 * 6
      object.price -= dpercent6
    }
}
products.forEach((item)=> {
    console.log(item);
    
})

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

products.forEach((item) => {
    console.log(item);
    
})

/* OUTPUT: 
{ name: 'Nike',
  price: 3058.98,
  color: 'white',
  inventory: { stock: 6, colorOption: [ 'black', 'white', 'blue' ] } }
{ name: 'Adidas',
  price: 2820,
  color: 'blue',
  inventory: { stock: 4, colorOption: [ 'black', 'white', 'blue' ] } }
{ name: 'Bata',
  price: 4280,
  color: 'black',
  inventory: { stock: 10, colorOption: [ 'black', 'white', 'blue' ] } } */


/* Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the following properties:
⚫ name (string): The name of the student.
⚫ grades (number[]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array, calculate the average grade for each student using the calculate AverageGrade function, and print their name and average grade.*/

type Student = {
    name : string;
    grades : number []
}

let students: Student[] =[ 
    {name: "Warda Waseem", grades: [57, 76, 65, 76, 68, 56, 76]},
    {name: "Maham Fatima", grades: [85, 74, 76, 87, 98, 76, 76]},
    {name: "Owais Khan", grades: [58, 65, 98, 65, 43, 43, 43]}
  
];

let calculateAverageGrade = (studentGrade: number[]) : number => {
    let average : number = 0;
    studentGrade.forEach((val) => {
  average +=  val
    })
    return average / studentGrade.length
}
for(let i = 0; i < students.length; i++){
let studentAverage: number = calculateAverageGrade(students[i].grades)
console.log(`Students name: ${students[i].name}`);
console.log(`Students average: ${Math.round(studentAverage)}\n`);

}

/* OUTPUT:
Students name: Warda Waseem
Students average: 68

Students name: Maham Fatima
Students average: 82

Students name: Owais Khan
Students average: 59 */


/* Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.
1. Define a type alias named Employee with the following properties:
⚫ name (string): The name of the employee.
⚫ hours Worked (number): The number of hours the employee worked.
⚫ hourly Rate (number): The hourly rate of the employee.
⚫ salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee object should include a name, hours Worked, hourly Rate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.*/ 

type Employee = {
    name: string;
    hoursWorked : number;
    hourlyRate : number;
    salary: number
}

let employees : Employee[]= [
    {name: "Warda Waseem", hoursWorked: 8, hourlyRate: 500, salary: 0},
    {name: "Maham Fatima", hoursWorked:15, hourlyRate: 400, salary: 0 },
    {name: "Owais Khan", hoursWorked: 22, hourlyRate: 300, salary: 0}

]
let calculateSalary = (employeeSalary : Employee[]) => {
   for(let employee of  employeeSalary){
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if(employee.hoursWorked >= 20){
        employee.salary *= 1.10
    }
   }
    
}
calculateSalary(employees);
console.log(employees);

/* OUTPUT:
[
  {
    name: 'Warda Waseem',
    hoursWorked: 8,
    hourlyRate: 500,
    salary: 4000
  },
  {
    name: 'Maham Fatima',
    hoursWorked: 15,
    hourlyRate: 400,
    salary: 6000
  },
  {
    name: 'Owais Khan',
    hoursWorked: 22,
    hourlyRate: 300,
    salary: 7260.000000000001
  }
] */