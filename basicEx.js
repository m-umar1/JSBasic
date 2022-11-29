// // // Variables : we can reassign values to variables
// // let personName = 'Umar';
// // console.log("Name is " + personName);
// // personName = 'M Umar';
// // console.log('new assigned name :' + personName);

// // //Constant: We cannot reassign value to a const
// // const interestRate = 0.2;
// // let price = 100;
// // console.log(" Price of Product: " + price + "   Interest is " + price * interestRate);
// // // if we reassingn interestRate
// // // interestRate = 0.3; // it will show error
// // console.log(" Price of Product: " + price + "   Interest is " + price * interestRate);

// // // Primetive types (we can check value by typeof())
// // // Strings, Number, boolens undefined, null
// // // Strings
// // let gender = 'Male';
// // typeof (gender);
// // // number
// // let age = 26;
// // //booleans: check conditions default value is false
// // let isApproved = true;
// // //undefined: when value is not assiged
// // let color; //here we inilized the variable by did not assigned any value
// // //null: where we need to clear any selection
// // // let selectedColor= null;
// // let selectedColor = 'red';

// // // Reference types
// // // Objects , arrays, fuctions
// // // Objects : we make a group of multiple varible we areuse for one object
// // let employeeData = {
// //     employeeName: "Name",
// //     employeeAge: 27
// // };
// // // we can use object by using . notation
// // console.log("Employee Age: " + employeeData.employeeAge);
// // // bracket []notation we will use this when propety ofobject is not confirmed
// // let select = 'employeeName';
// // employeeData[select] = 'Name';

// // // Arrays use to store data in a list
// // let colorList = ['red', 'blue', 'green'];
// // // add new color to index
// // colorList[3] = 'Orange';
// // console.log(colorList);

// // // Functions set of statement to perform a task

// // function squre(number) { //number is argumnet
// //     console.log("Squre : " + number * number)
// // }
// // // function call
// // squre(2);


// // // Max of two number
// // let x = 10, y = 6;
// // // function max(x, y) {
// // //     if (x > y)
// // //         return x;
// // //     return y;
// // // }

// // let number = max(9, 12);
// // function max(x, y) {
// //     return (x > y) ? x : y;
// // }
// // console.log(number);


// // islandscape

// // let orinetation = islandscape(1080, 720);
// // console.log(orinetation);
// // function islandscape(width, height) {
// //     return (width > height);
// // }

// // Fizzbuzz

// // const output = fizzBuzz(15);
// // console.log(output);
// // function fizzBuzz(number) {
// //     if (typeof number !== 'number')
// //         return "not a number";

// //     if ((number % 3 === 0) && (number % 5 === 0))
// //         return "FizzBuzz";

// //     if (number % 3 === 0)
// //         return "fizz";

// //     if (number % 5 === 0)
// //         return "buzz";


// //     return number;
// // }


// //  Speel limit points

// // let points = speedCheck(75);
// // console.log(points);
// // function speedCheck(speed) {
// //     const p = (speed - 70) / 5;
// //     if (p <= 0)
// //         return "Ok"
// //     if (p >= 1 && p < 12)
// //         return (p + " points");
// //     if (p >= 12)
// //         return ("Suspended");
// // }

// // even and odd number

// // let number = 10;
// // for (let i = 0; i <= number; i++) {
// //     const message = (i % 2 === 0) ? " Even " : " Odd";
// //     console.log(i + " " + message);
// // }

// // String Properties
// // const moive = {
// //     title: 'a', release: 2018, description: 'b'
// // };
// // showProperties(moive);


// // function showProperties(obj) {
// //     for (let key in obj) {
// //         if (typeof obj[key] === 'string')
// //             console.log(key, obj[key]);
// //     }
// // }


// // Multiple of 3 and 5

// // let number = 10;
// // console.log(sum(number));

// // function sum(limit) {
// //     let sum = 0;
// //     for (let i = 0; i <= limit; i++)
// //         if (i % 3 === 0 || i % 5 === 0) {
// //             sum += i;
// //         }
// //     return sum;
// // }

// // Grade calculation
// // const marks = [60, 60, 60];

// // console.log(grade(marks));
// // function grade(output) {
// //     let avg = 0;
// //     let subject = output.length;
// //     for (let key in output) {
// //         console.log(output);
// //         avg += output[key];
// //     }

// //     let avgMarks = avg / (subject);
// //     if (avgMarks <= 59 && avgMarks > 0)
// //         console.log("F Grade");
// //     if (avgMarks > 59 && avgMarks < 69)
// //         console.log("D Grade");
// //     if (avgMarks > 69 && avgMarks < 79)
// //         console.log("C Grade");
// //     if (avgMarks > 89 && avgMarks < 100)
// //         console.log("A Grade");
// // }
// //
// //Stars
// // showStars(5);
// // function showStars(row) {
// //     for (let i = 0; i <= row; i++) {
// //         for (let j = 0; j < i; j++) {
// //             console.log(" * ");
// //         }
// //     }
// // }


// // showPrime(20);
// // function showPrime(number) {
// //     for (let i = 2; i <= number; i++) {
// //         let isPrime = true;
// //         for (let j = 2; j < i; j++) {
// //             if (i % j === 0) {
// //                 isPrime = false;
// //                 break;
// //             }
// //         }
// //         if (isPrime)
// //             console.log(i);
// //     }

// // }


// // // ex 1 showAddress
// // let address = {
// //     street: 13, city: 'lahore', zipcode: 50700
// // };

// // function showAddress(address) {
// //     for (let key in address) {
// //         console.log(key, address[key]);
// //     }
// // }
// // showAddress(address);


// // let address = {
// //     street: 13, city: 'lahore', zipcode: 50700
// // };

// // Factory Function
// // function showAddress(street, city, zipcode) {
// //     return {
// //         street,
// //         city,
// //         zipcode,
// //     };
// // }
// // let address = showAddress(13, 'Lahore', 50700);
// // console.log(address);

// // // Constructor Function
// // function ShowAddress(street, city, zipcode) {
// //     this.street = street;
// //     this.city = city;
// //     this.zipcode = zipcode;
// // }
// // let address = new ShowAddress(13, "Lahore", 50700);

// // console.log(address);

// // // BlogPost
// // let post{
// //     title = "First Post",
// //     body = "b",
// //     author = "c",
// //     views = 500,
// //     comments = [
// //         {
// //             author= 'a',
// //             body= 'b'
// //         }],
// //     isLive = true
// // };
// // console.log(post);

// // //initilized a constructor function
// // function Post(title, body, author) {
// //     this.title = title;
// //     this.body = body;
// //     this.author = author;
// //     this.view = 0;
// //     this.comments = [];
// //     this.isLive = false;
// // }
// // let newpost = new Post("a", "b", "c");
// // console.log(newpost);

// // Array
// const array = [1, 2, 3, 4];
// console.log(array);
// const arraySearch = array.find(function (arraySearch) {
//     return arraySearch === 4;
//     console.log(array);
// });
// console.log("Found " + arraySearch);

// Sortingof object

// let courses = [{ id: 1, name: 'Node.js' },
// { id: 2, name: "Javascript" }];

// let sort = courses.sort(function (a, b) {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB)
//         return -1;
//     if (nameA > nameB)
//         return 1;
//     return 0;
// });
// console.log(sort);

// exercie array from range

// const number = range(1, 4);
// console.log(number);

// function range(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++) {
//         output.push(i);
//     }
//     return output;
// }

// Array include

// const number = [1, 2, 3, 4];
// console.log(include(number, 5));

// function include(array, searchElement) {
//     for (let element of array)
//         if (searchElement === element)
//             return true;

//         else
//             return false;
// }

//  array exclude
// const number = [4, 3, 2, 1];
// const output = exclude(number, [4]);
// console.log(output);
// // console.log(number);
// function exclude(array, exclude) {
//     let output = [];
//     for (let item of array) {
//         if (!exclude.includes(item))
//             output.push(item);
//     }
//     return output;
// }


// Offset of array

// const number = [1, 2, 3, 4];
// const output = move(number, 0, 4);
// console.log(output);

// function move(array, index, moveto) {
//     let output = [...array];
//     let element = output.splice(index, 1)[0];
//     output.splice(index + moveto, 0, element);
//     return output;
// }


// const number = [1, 1, 1, 2, 3, 4];
// const count = countOccurrences(number, 1);
// console.log(count);

// function countOccurrences(array, countNumber) {
//     const output = [...array];
//     let repeated = 0;
//     // for (let item of output) {
//     //     if (item === countNumber) {
//     //         console.log(item);
//     //         repeated++;

//     //     }
//     // }


//     return (countNumber + " count " + repeated);
// }


// const number = [1, 2, 3, 4, 5];
// const max = getMax(number);
// console.log(max);

// function getMax(maxNumber) {
//     return maxNumber.reduce((a, b) =>
//         (a > b) ? a : b);
// }

// Movie Sort
// AllMoives of 2018 with rating>4
// Sort  by their rating
// in Descending order
//pick their title

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];
// const title = movies.
//     filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)
// console.log(title);


//Getter and Setter and error handling

// const person = {
//     firstName: 'Umar',
//     lastName: 'Farooq',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value) {
//         if (typeof value !== "string") {
//             throw new Error("Value is not a String.");
//         }

//         const part = value.split(' ');
//         if (part.length !== 2)
//             throw new Error("Please Enter FirstName LastName ");
//         this.firstName = part[0];
//         this.lastName = part[1];
//     }
// };
// try {
//     person.fullName = 'Osama farooq';
// } catch (e) {
//     alert(e);
// }
// console.log(person);

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag);
//         });
//     }
// }
// video.showTags();


// Function Exerice

// function sum(...args) {
//     if (args.length === 1 && Array.isArray(args[0]))
//         args = [...args[0]];
//     return args.reduce((a, b) => a + b);
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(total);

// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);

// Handle Count Occuracnce
// const number = [1, 2, 3, 4];
// try {
//     const count = countOccurance(number, 1);
//     console.log(count);
// } catch (e) {
//     console.log(e.message);
// }

// function countOccurance(array, count) {
//     if (!Array.isArray(array)) {
//         throw new Error("No array found");
//     }
//     return array.reduce((item, match) => {
//         const occur = match === count ? 1 : 0;
//         return item + occur;
//     }, 0);

// }