
// chepter 1

// alert("Error! please enter a valid password.");

// alert("welcome to js load... \n Happy Coding");

// console.log("Hello.. I can run js through my wed browser's console");



// chapter 2

// var userName = "nisarzaidi";
// var myName = "Syed Nisar Hussain Zaidi";
// var message = "Hello World";
// alert(userName);
// alert(myName);
// alert(message);

// var message = "plzza \n plzz \n plz \n pl \n p";
// alert(message)

// var email = "nisarzaidi75@gmail.com";
// alert("My email address is " + email);

// var book = "A smarter way to learn JavaScript";
// alert("I'am trying to learn from the book " + book)

// document.write("Yeh! I can write HTML contant through JavaScript");

// var store = "----------&$*$&-----------";
// alert(store)



// chapter 3

// var age = 20;
// alert("I'am " + age + " years old");

// var visitTime = 14;
// alert("You have visited this site " + visitTime + " time");

// var birthYear = 1999;
// document.write("My birth year is " + birthYear);

// var name = "John Doe";
// var prodect = "T-shirt(s)";
// var quantity = 5;
// document.write(name + " ordered " + quantity + " " + prodect + " on xyz Clothing store");



// chapter 4






// chapter 5

// var num1 = 3;
// var num2 = 5;
// var result = num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+result);

// var a;
// document.write("Value after variable declaration is "+a);
// a = 5;
// document.write("<br>Initial value : "+a++);
// document.write("<br>Value after increment is : "+a);
// var b = 7;
// var c = a+b;
// document.write("<br>Value after addition is : "+c--);
// document.write("<br>Value after decrement is : "+c);
// var d = c/3;
// document.write("<br>The remainder is : "+0);

// var tickitPrice = 600;
// var calculate = tickitPrice*5;
// document.write("Total cost to buy 5 tickits to a movie is "+calculate+" PKR");

// var getNum = +prompt("Enter a table number");
// document.write("<h3>Table of "+getNum+"</h3>");
// for(var i = 1; i <= 10; i++){
//     document.write(getNum+"x"+i+"="+getNum*i+"<br>");
// };

// var f = (c*9/5)+32;
// var c = (f-32)*5/9;
// console.log(f)

// document.write("<h1>Shopping Cart</h1>");
// var priceItem1 = 650;
// document.write("Price of item 1 is : "+priceItem1+"<br>");
// var quantityItem1 = 3;
// document.write("Quantity of item 1 is : "+quantityItem1+"<br>");
// var priceItem2 = 100;
// document.write("Price of item 2 is : "+priceItem2+"<br>");
// var quantityItem2 = 7
// document.write("Quantity of item 2 is : "+quantityItem2+"<br>");
// var shoppingCharges = 100;
// document.write("Shopping Charges is : "+shoppingCharges+"<br>"+"<br>");
// var result = priceItem1*quantityItem1+priceItem2*quantityItem2+shoppingCharges;
// document.write("Total cost of your order is : "+result);

// document.write("<h1>Mark Sheet</h1>");
// var totalMarks = +prompt("Enter total marks");
// document.write("Total Marks : "+totalMarks+"<br>");
// var studentmarks = +prompt("Enter your marks");
// document.write("Marks obtained : "+studentmarks+"<br>"+"<br>");
// var result = (studentmarks/totalMarks)*100;
// document.write("percentage : "+result+"%");

// document.write("<h1>Currency in PKR</h1>");
// var usDollor = 10;
// var soudiaRiyal = 25;
// var pakistaniUsDollorRate = 104.80;
// var pakistaniSoudiaRiyalRate = 28;
// var usDollarRasult = 104.80*10;
// var soudiaRiyalRasult = 28*25;
// var finalRasult = usDollarRasult+soudiaRiyalRasult;
// document.write("Total Currency in PKR : "+finalRasult);

// document.write("<h1>Age Calculator</h1>");
// var currentYear = 2016;
// document.write("Current Year : "+currentYear+"<br>");
// var birthYear = 1992;
// document.write("birth Year : "+birthYear+"<br>");
// var result = currentYear-birthYear;
// document.write("your age is : "+result);

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// var favouriteSnack = "Super Biscute";
// document.write("Favourite Snack : "+favouriteSnack+"<br>");
// var currentAge = 10;
// document.write("Current Age : "+currentAge+"<br>");
// var mixAge = 22;
// document.write("Estimated maximum age : "+mixAge+"<br>");
// var parDaySanck = 2;
// document.write("Amount of snacks per day : "+parDaySanck+"<br>");
// var result = (mixAge-currentAge)*parDaySanck;
// document.write("You Will Need "+result+" Super Biscute to last you until the ripe old age of "+mixAge);




// chapter 6-9

// var a = 10;
// document.write("Result<br>The value of a is :"+ a +"<br><br>");
// document.write("The value of ++a is:"+ ++a +"<br>Now the value of a is:"+a+"<br><br>");
// document.write("The value of a++ is:"+ a++ +"<br>Now the value of a is:"+a+"<br><br>");
// document.write("The value of --a is:"+ --a +"<br>Now the value of a is:"+a+"<br><br>");
// document.write("The value of a-- is:"+ a-- +"<br>Now the value of a is:"+a+"<br><br>");

// var a = 2;
// document.write("a is "+a+"<br>");
// var b = 1;
// document.write("b is "+b+"<br>");
// var result = --a - --b + ++b + b--;
// document.write("Result is "+result);

// var userName = prompt("Enter a name");
// alert("greet "+userName);

// var getNum = +prompt("Enter a table number");
// if(getNum){
//     document.write("<h3>Table of "+getNum+"</h3>");
//     for(var i = 1; i <= 10; i++){
//         document.write(getNum+"x"+i+"="+getNum*i+"<br>");
//     };
// }else{
//     document.write("<h3>Table of "+5+"</h3>");    
//     for(var i = 1; i <= 10; i++){
//         document.write(5+"x"+i+"="+5*i+"<br>");
//     };
// }

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");
// var userEnglishMarks = +prompt("Enter a English Marks");
// var percentageEnglishMarks = (userEnglishMarks/100)*100;
// document.write("<table><tr><td>English</td><td>100</td>"+"<td></td>"+"<td>"+userEnglishMarks+"</td>"+"<td>"+percentageEnglishMarks+"%"+"</td>"+"</tr>");
// var userMathMarks = +prompt("Enter a Math Marks");
// var percentageMathMarks = (userMathMarks/100)*100;
// document.write("<tr><td>Math</td><td>100</td>"+"<td></td>"+"<td>"+userMathMarks+"</td>"+"<td>"+percentageMathMarks+"%"+"</td>"+"</tr>");
// var userUrduMarks = +prompt("Enter a Urdu Marks");
// var percentageUrduMarks = (userUrduMarks/100)*100;
// document.write("<tr><td>Urdu</td><td>100</td>"+"<td></td>"+"<td>"+userUrduMarks+"</td>"+"<td>"+percentageUrduMarks+"%"+"</td>"+"</tr>");
// var totalUserMarks = (userEnglishMarks+userMathMarks)+userUrduMarks;
// var totalMarkspercentage = (totalUserMarks/300)*100;
// document.write("<tr><td></td>"+"<td>300</td>"+"<td></td>"+"<td>"+totalUserMarks+"</td>"+"<td>"+totalMarkspercentage+"%"+"</td>"+"</tr>");



// chapter 9-11

// var cityName = prompt("Enter a city name");
// if(cityName.toLocaleLowerCase() == "karachi"){
//     alert("Welcome to city of light");
// };

// var gender = prompt("Enter a Gender");
// if(gender.toLowerCase() == "male"){
//     alert("Good Morning Sir!..")
// }else if(gender.toLowerCase() == "female"){
//     alert("Good Morning Ma'am!..")
    
// };

// var fuelCar = +prompt("Enter a Car fuel");
// if(fuelCar == 0.25){
//     alert("Plese refill the fuel in your car");
// };

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("not display")
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }else{
//     alert("not display")
// }

// if (c === 13){
// alert("condition 2 is true");
// }else{
//     alert("not display")
// }

// if (++c < 14){
// alert("condition 3 is true");
// }else{
//     alert("not display")
// }

// if(c === 14){
// alert("condition 4 is true");
// }else{
//     alert("not display")
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
    
// var englishMarks = +prompt("Enter a English Marks");
// var UrduMarks = +prompt("Enter a Urdu Marks");
// var mathMarks = +prompt("Enter a Math Marks");
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks : 300<br>");
// var totalUserMarks = (englishMarks+UrduMarks)+mathMarks;
// document.write("Marks Obtained : "+totalUserMarks+"<br>");
// var percentage = (totalUserMarks/300)*100;
// document.write("percentage : "+percentage+"%"+"<br>");
// if(percentage >= 80){
//     document.write("Grade : A-one"+"<br>");
//     document.write("Remarks : Excellent");
// }else if(percentage >= 70){
//     document.write("Grade : A"+"<br>");
//     document.write("Remarks : Good");
// }else if(percentage >= 60){
//     document.write("Grade : B"+"<br>");
//     document.write("Remarks : You need to improve");
// }else if(percentage < 60){
//     document.write("Grade : Fail"+"<br>")
//     document.write("Remarks : Sorry")
// };

// var secretNum1 = "1";
// var userNum = prompt("Enter a number Ranging from 1 to 10");
// if(userNum == secretNum1){
//     alert("Bingo! Correct answer");
// }else if(userNum == "+1"){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Bingo! Incorrect answer");
// };

// var number = prompt("Enter a number: ");
// if(number % 2 == 0) {
//     alert("The number is even.");
// }
// else {
//     alert("The number is odd.");
// }

// var getWeather = +prompt("Enter a weather temperature in 40 limit");
// if(getWeather >= 40){
//     alert("It is too hot outside.");
// }else if(getWeather >= 30){
//     alert("The Weather today is Normal.");
// }else if(getWeather >= 20){
//     alert("Today’s Weather is cool.");
// }else if(getWeather >= 10){
//     alert("OMG! Today’s weather is so Cool.");
// };

var firstNum = +prompt("First Number");
var oprater = prompt("Enter a Oprater");
var secondNum = +prompt("Second Number");
if(oprater == "*"){
    alert(firstNum*secondNum);
}else if(oprater == "-"){
    alert(firstNum-secondNum);
}else if(oprater == "+"){
    alert(firstNum+secondNum);
}else if(oprater == "/"){
    alert(firstNum/secondNum);
};