// let userName = "Upskill";

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));
// console.log(userName.substring(0, 4));
// console.log(userName.charAt(3));
// console.log(userName.indexOf("i"));
// console.log(userName.trim());
// // this will remove the space
// console.log(userName.length);
// console.log(userName.replace("Upskill", "new upskill"));
// console.log(userName.replaceAll("Upskil", "your name"));

// let test = "    faisal";

// console.log(test.toUpperCase());
// console.log(test.toLowerCase());
// console.log(test.repeat(2));
// console.log(test.indexOf("s"));
// console.log(test.length);
// console.log(test.trim());
// console.log(test.replace("faisal", "naveed"));

// let numb1 = 90;
// let numb2 = 40;

// if (numb1 > numb2) {
//   console.log("you number1 is more then 40!");
// } else {
//   console.log("your number1 is less then 40!");
// }

// let pass = "abc";
// let retypepass = "abc";

// if (pass === retypepass) {
//   console.log("login");
// } else {
//   console.log("plz check your passwrod again");
// }

// let salaray = 3000;
// let bonuas = 1000;

// if (salaray == bonuas) {
//   console.log("salaray is equal to bonuas");
// } else if (salaray < bonuas) {
//   console.log("your salary is less then bonuas");
// } else if (salaray > bonuas) {
//   console.log("your salary is greater then bonus");
// } else {
//   console.log("salary is not maching!");
// }

// let login = true;
// let loginin = false;

// if (login && loginin) {
//   console.log("access done");
// } else {
//   console.log("plz check your login");
// }

// pracites

// const marks = 4 + 7;
// console.log(marks);

// // const income = new Number(200);
// // console.log(income);

// const income = new Number(800);
// type = income.toString();
// console.log(type);

// let date = new Date();
// console.log(date.toDateString());

// let data = new Date();
// console.log(data.toLocaleDateString());

// const accecery_praice = 10;
// var bank_blance = 500;
// var amonunt = 100;
// amonunt = amonunt * 3;

// if (amonunt > bank_blance) {
//   console.log("I'll take the accessory!");
//   total = amonunt + accecery_praice;
// } else {
//   console.log("No,tanks");
// }

// testing username and password concept

// let userName = "Fasiall";
// let passwrod = "Fsial@12345";

// if (userName == "Fasial" && passwrod == "Fsial@12345") {
//   console.log("login successfuly");
// } else if (userName == "Fasial" && passwrod != "Fsial@12345") {
//   console.log("your password is wrong!");
// } else if (userName != "Fasial" && passwrod == "Fsial@12345") {
//   console.log("your userName is wrong!");
// } else {
//   console.log("please check your username or password!");
// }

// Array

// const family = ["edris", "bilal", "ali"];
// const newtest = ["faisl", "fayaz", "naveed"];
// newtest.push("elyas");
// console.log(newtest);

// newtest.pop();
// console.log(newtest);

// newtest.unshift("elyas");
// console.log(newtest);

// newtest.unshift();
// console.log(newtest);

// newtest.shift();
// console.log(newtest);

// newtest.sort();
// console.log(newtest);

// newtest.reverse();
// console.log(newtest);

// let join = family.concat(newtest);

// console.log(join);

// for (i = 1; i < 8; i++) {
//   console.log(`number is ${i}`);
// }

// let classes = ["front-end", "backend", "full stack"];

// for (i = 0; i < classes.length; i++) {
//   console.log(classes[i]);
// }

// let students = ["ali", "sara", "fayaz"];
// for (let i = 0; i < students.length; i++) {
//   console.log(`student name is ${students[i]}`);
// }

// let tasks = ["clean room", "check home work", "buy groceries"];

// for (let i = 0; i < tasks; i++) {
//   console.log(`tasks are : ${tasks[i]}`);
// }

// let tasksad = ["finish", "email", "update", "team meeting"];
// let compleated = [true, false, false, true];

// for (let i = 0; i < tasksad.length; i++) {
//   if (!compleated[i]) {
//     console.log(`pending tsk: "${tasksad[i]}" needs to be compleated.`);
//   } else {
//     console.log(`task "${tasksad[i]}" is already compleated.`);
//   }
// }

// let person = {
//   name: "faisal",
//   last: "malekzai",
//   classes: "front-end",
// };

// console.log(person);

// let usuers = [
//   {
//     userName: "fasial",
//     lastName: "MALEKZAI",
//     password: "12abs",
//   },

//   {
//     userName: "fayaz",
//     lastName: "safai",
//     password: "123jahfd",
//   },
// ];

// for (const test of usuers) {
//   console.log(test.lastName);
// }

// const employees = [
//   { name: "faisal", position: "cc agent", salary: 10000 },
//   { name: "fayaz", position: "student", salary: 500 },
//   { name: "Naveed", position: "Teacher", salary: 11500 },
// ];

// for (const emp of employees) {
//   console.log(
//     `${emp.name} works as a ${emp.position}  and earns ${emp.salary}`
//   );
// }

// let photos = [
//   {
//     picture: "pic1",
//     headings: "first-heading",
//     paragraph: "first paragraph ",
//     gender: "femele",
//   },
//   {
//     picture: "pic2",
//     headings: "second-heading",
//     paragraph: "second paragraph",
//     gender: "femmale",
//   },
//   {
//     picture: "pic3",
//     headings: "3rd-heading",
//     paragraph: "3d paragraph ",
//     gender: "male",
//   },
// ];

// for (const alldives of photos) {
//   console.log(
//     `the picture of that is ${alldives.picture} and the heading number is ${alldives.headings}and the paragraph is ${alldives.paragraph} and the gender is ${alldives.gender}`
//   );
// }

// let exaple = [
//   {
//     name: "fdail",
//     lsatn: "malekzai",
//   },

//   {
//     name: "fayaz",
//     lastn: "malekzi",
//   },
// ];

// for (one of exaple) {
//   console.log(`in name clumn are ${one.name} last names are ${one.lastn}`);
// }

// Bootcamp of js

// this code fro showing the values of varialble in a table

// const userId = 1234;
// let userEmail = "upskill.linfo";
// var userPassword = 2345;
// userCity = "kabul";

// console.table([userId, userEmail, userPassword, userCity]);

// this code is for asign a vlue to a variable

// let name = "faiasl";
// console.log(name);
// let name = "naveed";
// console.log(name);

// // theis line is for boolean values
// let isstudent = true;
// console.log(`is student ${isstudent}`);

// Calculate area of a rectangle

// let width = 5;
// let height = 10;

// let area = width * height;
// console.log(`area : ${area}`);

// let age = 10;
// let isadult = age >= 18;
// console.log(`is adult: ${isadult}`);

// let counter = 2;
// counter++;
// console.log(`Counter ${counter}`);

// Use in Template Litrals

// let Product = "Laptop";
// let Price = 9999;
// let maessage = `the price of ${Product} is ${Price}`;

// console.log(maessage);

// let userName = prompt("Enter your name !");
// alert(`your Name is ${userName}`);

// Concatenate Strings

// let FirstName = "jane";
// let lastName = "akhtar";
// let fullName = `your full aname is ${FirstName} ${lastName}!`;
// console.log(fullName);

// chcking date
// let today = new Date();
// console.log(`Today is ${today}`);

// conditional statements

// let number = -5;
// if (number > 0) {
//   console.log("the number is positive!");
// } else {
//   console.log("The number is negitive !");
// }

// compare Tow Numbers

// let a = 10;
// let b = 50;

// if (a > b) {
//   console.log("a is grater then b !");
// } else {
//   console.log("b is grater then a !");
// }

// checking user role

// let role = "editor";
// if (role === "admain") {
//   console.log("you have full access!");
// } else if (role === "editor") {
//   console.log("you can just edit content!");
// } else {
//   console.log("you have limit access");
// }

// check if a string has data

// let text = "";
// if (text === "fdaf") {
//   console.log("the string is empty!");
// } else {
//   console.log("the string has contnt.");
// }

// Tell the user to give a strong password
// let passowrd = 1125;
// if (passowrd.length > 8) {
//   console.log("password is strong!");
// } else {
//   console.log("your password is veary weak !");
// }

// let pass = "1209987659";
// if (pass.length < 10) {
//   console.log("weak");
// } else {console.log("strong");}

// cheching number is if odd or even

// let number = 1;
// if (number % 2 === 0) {
//   console.log("the number is even");
// } else {
//   console.log("the number is odd!");
// }

// let wether = 3;

// if (wether >= 30) {
//   if (wether < 10) {
//     console.log("today is veray hot!");
//   } else {
//     console.log("today is verry cold!");
//   }
// } else {
//   console.log("the wether is greet today!");
// }

// let users = {
//   username: "fasial",
//   userpassword: "2354",
//   useremail: "amail@gmail.com",
// };

// console.log(users);
// console.log(users.useremail);

// users.useremail = "name@gamilom";
// console.log(users);

// Object.freeze(users);
// users.userpassword = "123456";
// console.log(users);

// let books = [
//   {
//     title: "js",
//     author: "naveed",
//     alredyread: true,
//   },

//   {
//     title: "css",
//     author: "elyass",
//     alredyread: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];

//   const bookinfo = `${book.title} by ${book.author}`;

//   if (book.alredyread) {
//     console.log(
//       `you alredy read this book ${bookinfo}  that wrriten by ${bookinfo}`
//     );
//   } else {
//     console.log(`plz read these books ${bookinfo} write by his ${bookinfo}`);
//   }
// }

// Home Work

// let test = [
//   {
//     name: "faisal",
//     classes: "front-end",
//     time: " 4-5",
//     payment: 1000,
//   },

//   {
//     name: "fayaz",
//     classes: "graphics",
//     time: "2-3",
//     payment: 0,
//   },

//   {
//     name: "naveed",
//     classes: "CIT",
//     time: "5-6",
//     payment: 100,
//   },
// ];

// for (let i = 0; i < test.length; i++) {
//   const first = test[i];

//   let names = `${first.name}`;

//   if (first.payment > 0) {
//     console.log(` ${names} payment is done`);
//   } else {
//     console.log(` ${names} payment is due!`);
//   }
// }

// let atendens = [
//   {
//     name: "farman",
//     student: "front-end",
//     present: 75,
//   },

//   {
//     name: "faisal",
//     student: "back-end",
//     present: 65,
//   },

//   {
//     name: "raheb",
//     student: "back-end",
//     present: 75,
//   },
// ];

// for (let i = 0; i < atendens.length; i++) {
//   const exaple = atendens[i];

//   let names = `${exaple.name}`;

//   if (atendens.present > 65) {
//     console.log(`the can have exams ${names}`);
//   } else {
//     console.log(`the can not have exam ${names}`);
//   }
// }

// function first() {
//   console.log("this is working!");
// }

// first();

// function dinamec(name, number, clas) {
//   console.log(name);
//   console.log(number);
//   console.log(clas);
// }

// dinamec("faisal", "84549654", "front-end");

// function registerUser(usernaem, password, email) {
//   if (!usernaem || !password || !email) {
//     console.log("please fill all fields");
//   } else {
//     console.log("user registered successfully");
//     console.log("usename:", usernaem);
//     console.log("email", email);
//   }
// }

// registerUser(" ", "fdail@gamil.com");

// let food = 200;
// let tips = 20;
// let result = food + tips;

// console.log(result);

// function foods(food, tips) {
//   let total = food + tips;
//   console.log(total);
// }

// foods(200, 50);

// function test(courseprice, numberofseats) {
//   let totalCost = courseprice * numberofseats;
//   console.log(totalCost);
// }

// test(50, 3);

// function example(passowrd, isValid) {
//   if (isValid >= passowrd.length) {
//     console.log(`valid password: ${isValid}`);
//   } else {
//     console.log("please enter a valid password!");
//   }
// }

// example("12345678", "123456789");

// home work !

// variable section

// let username = "faisal";
// // let commpnoy = username;
// console.log(username);

// let tarekh = new Date();
// console.log(tarekh);

// statements sections

// this code show the position of employee
// let name = "faisal";
// if (name == "faisal") {
//   console.log("you are admian!");
// } else {
//   console.log("you are not employee!");
// }
// this statemnt check's the lenght of password!
// let password = "123456789";
// if (password.length < 8) {
//   console.log("please enter a strong passwod!");
// } else {
//   console.log("wellcom !");
// }
//  this statement check's the percentage of number!
// let pesentage = "75%";
// if (pesentage >= "65%") {
//   console.log("your are pass in exam!");
// } else {
//   console.log("you are faill!");
// }

// this code will check the grade
// let grade = 72;
// if (grade >= 90) {
//   console.log("your grade is :-A");
// } else if (grade >= 80) {
//   console.log("your garde is B!");
// } else if (grade >= 70) {
//   console.log("your garde is c!");
// } else {
//   console.log("you are faill!");
// }

// let number = -10;

// if (number > 0) {
//   console.log("Positive number");
// } else if (number < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// }

// switch statements section

// let name = "Ra";
// switch (name) {
//   case "saidshah":
//     console.log("he is the owner!");
//     break;

//   case "Raheb":
//     console.log("he is resepshenist!");
//     break;

//   default:
//     console.log("he is not in this course");
// }

// there was an error
// let grade = " 92";

// switch (grade) {
//   case ">=90":
//     console.log("you are in grade A!");
//     break;

//   case ">=80":
//     console.log("you are in grade B!");
//     break;

//   default:
//     console.log("you are faill in this field");
// }

// array

// let students = ["ali", "kamdish", "fayaz", "abdullah"];

// for (let i = 0; i < students.length; i++) {
//   const second = students[i];
//   console.log(second);
// }

// let classes = ["front-end", "back-end", "java"];

// for (let number = 0; number < classes.length; number++) {
//   let example = classes[number];
//   console.log(example);
// }

// let data1 = ["Ali", "malya", 19];
// for (let z = 0; z < data1.length; z++) {
//   var x = data1[z];
//   console.log(x);
// }

// arry push is used to add an elemmnt at the end of array

// let arry = ["first", "second", "thired", "forth"];
// console.log(arry);
// arry.push("fifth");
// console.log(arry);

// array pop is used to delete the last elemnt of an array

// let door = ["fleze", "chobe", "3d"];
// door.pop();
// console.log(door);

// array unshif is used to add an elemnt at beging of an array

// let unsheft = ["fleze", "chobe", "3d"];
// unsheft.unshift("zero");
// console.log(unsheft);

// Array shift is used to remove the first elemnt of an array

// let test = ["fleze", "chobe", "3d"];
// test.shift();
// console.log(test);

// let test = ["fdiart", "second", "thired"];

// for (i = 0; i < test.length; i++) {
//   let newt = test;
//   console.log(newt[i]);
// }

// let days = {
//   saturday: " first",
//   sanday: "second",
//   third: " mondy",
// };

// console.log(days.saturday);
// console.log(days.third);

// let friends = {
//   1: "munir",
//   2: "alias",
//   3: "naweed",
// };

// console.log(friends[1]);
// const num = 1;
// const test = [1, 2, 3, 4];
// test[2] = 6;
// console.log(test);

// function sum(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }

// sum(5, 4);

// function checkpassword(password) {
//   if (password == "Faisal") {
//     console.log("wellcom");
//   } else {
//     console.log("try again");
//   }
// }

// checkpassword("Faisal");

// asigning array in Object

// let useres = {
//   name: "faisal",
//   lastName: "malekzai",
//   grade: "A",
// };

// function test(anyobject) {
//   console.log(
//     `your usre name is :${anyobject.name}and your last name is ${anyobject.lastName} his grade is : ${anyobject.grade}`
//   );
// }

// test(useres);

// test({
//   name: "ali ",
//   lastName: "malya",
// });

// function emplist(emp_name, emp_password, emp_add) {
//   let objectemp = {
//     objname: emp_name,
//     objpass: emp_password,
//     objadd: emp_add,
//   };

//   let info = `your name is ${objectemp.objname} and your password is  ${objectemp.objpass} and your address is ${objectemp.objadd}`;
//   console.log(info);
// }

// emplist("Faisal", "Faisal@1234", "qargha");

// function enrollstudent(name, age, coursees) {
//   const student = {
//     name,
//     age,
//     coursees,
//   };

//   console.log(
//     `your name is ${student.name} and your age is ${student.age} your course ${student.coursees} is `
//   );
// }
// enrollstudent("ali", "19", "kardan");

// function assingnGrad(studentName, score) {
//   let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
//   console.log(`${} scored ${score}`);
// }

// let num = [1, 2, 3, 4, 5];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// let fruts = ["bana", "apple", "orange"];

// for (var data = 0; data < fruts.length; data++) {
//   console.log(fruts[data]);
// }

// let names = ["naveed", "elyas", "fayaz"];

// for (let z = 0; z < names.length; z++) {
//   console.log(`Hello mester :  ${names[z]}`);
// }

// let multip = [];

// for (let n = 0; n <= 0; n++) {
//   multip.unshift(2 * 5);
//   console.log(multip[n]);
// }

// cheking numbers odd and even
// let number = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] % 2 === 0) {
//     console.log(number[i]);
//   }
// }

// let oddnumb = [];
// for (i = 0; i <= 20; i += 4) {
//   oddnumb.push(i);
// }
// console.log(oddnumb);

// let test = [];

// for (i = 0; i <= 20; i += 2) {
//   test.push(i);
// }
// console.log(test);

// let names = ["faisal", "fayaz", "naveed ", "elsyas"];
// for (i = 0; i < names.length; i++) {
//   console.log(names[i].length);
// }

// let numbrs = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (i = 0; i < numbrs.length; i++) {
//   numbrs.reverse();
// }
// console.log(numbrs);

// let naems = ["faisal", "fayaz", "naveed"];

// for (let i = 0; i < naems.length; i++) {
//   console.log(naems[i]);
// }

let numb=[];

for (i = 0 ; i<5; i++){
  console.log()
}