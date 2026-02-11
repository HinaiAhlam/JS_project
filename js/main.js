
// let number=prompt(" enter any number");

// if ( number>=0)
//     console.log("positive");
// else if(number<0)
//     console.log("negetive");
// else console.log("pleas inter valid number ");

// if(number%2==0)console.log("even");
// else console.log("odd");





// var x = +prompt("enter number")
// var y = false;

// for (var i = 2; i < x; i += 1) {
//     if (x % i == 0) {
//        y = true
//         break
//     }

// }


// if (y == false)console.log("is prime");
// else console.log("is not prime");

// for(A=1;A<=100;A++)
//     if (A % 3 == 0 && A % 5 == 0) {
//         console.log("FizzBuzz");

//     }
//     else if (A % 3 == 0) {
//         console.log("Fizz");
//     }

//     else if (A % 5 == 0) {
//         console.log("Buzz");
//     }





//     else {
//         console.log(A)
//     }



// for( var i=1;  i<=100;  i++)
//  {
//     console.log(i);
//     }
// console.log(i);



// ____________________________________



// var randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log("Random Number is:", randomNumber);

// for (var i = 1; i <= 5; i++) {

//     var x = +prompt("Enter a number between 1 and 10:");

//     if (x > randomNumber) {
//         console.log("Too hot");
//     } 
//     else if (x < randomNumber) {
//         console.log("Too cold");
//     } 
//     else {
//         console.log("Correct! You guessed the number.");
//         break;
//     }

//     if (i === 5) {
//         console.log("Game Over! The correct number was: " + randomNumber);
//     }
// }





//-------------------------- 

// var userEmail = prompt("please Enter Email")
// var userpass = prompt("please Enter password")

// while(userEmail != "ahlam@gmail.com" || userpass!= "12345"){
//    alert("Invalid,please reEnter ");
//     break;
// }




// -----------------------------



// var correctuserEmail = "ahlam@gmail.com";
// var Correctuserpass = "12345";
// var bl7 = 0;

// while (bl7 < 3) {

//     var userEmail = prompt("please Enter Email");
//     var userpass = prompt("please Enter password");

//     if (userEmail === correctuserEmail && userpass === Correctuserpass) {
//         alert("Login successful ");
//         break;
//     } else {
//         bl7++;
//         alert("Invalid, please re-enter ");

//         if (bl7 === 3) {
//             alert("You have used all 3 chances.");
//         }
//     }
// }






// ---------------------------------



// var correctuserEmail = "ahlam@gmail.com";
// var Correctuserpass = "12345";
// var bl7 = 0;

// while (bl7 < 3) {
//     var userEmail = prompt("Please Enter Email");
//     var userpass = prompt("Please Enter Password");

//     if (userEmail === correctuserEmail && userpass === Correctuserpass) {
//         alert("Login successful ");
//         break;
//     } else {
//         bl7++;
//         alert("Invalid, please re-enter ");
//     }

//     if (bl7 === 3) {
//         alert("You have used all 3 chances. Please wait 3 seconds before trying again.");
        
//         var waitTime = 3;
//         var countdown = setInterval(function() {
//             console.log("Wait for " + waitTime + " seconds");
//             waitTime--;
//             if (waitTime < 0) {
//                 clearInterval(countdown);
//                 bl7 = 0;
//                 alert("You can try logging in again now.");
//             }
//         }, 1000..toExponential.apply);
//     }
// }




// ---------------------------------------------








// -----------------------------------------------------------------


var userEmail = prompt("enter email")
var userPassword = prompt("enter password")
var number_of_tries = 0

while (userEmail != "ahlam" || userPassword != "12345") {

    number_of_tries++

    if (number_of_tries < 3) {
        userEmail = prompt("enter email")
        userPassword = prompt("enter password")
    }
    else {
        alert("you tried too many times")
        break
    }
}

if (userEmail == "ahlam" && userPassword == "12345") {

    alert("successfully logged in")

    var number_of_questions = +prompt("please enter your number of questions")
    var operations = ["+", "-", "*", "/"]
    var score = 0

    for (var i = 1; i <= number_of_questions; i++) {

        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10) + 1

        var operation = operations[Math.floor(Math.random() * operations.length)]

        var correctAnswer

        if (operation == "+") {
            correctAnswer = num1 + num2
        }
        else if (operation == "-") {
            correctAnswer = num1 - num2
        }
        else if (operation == "*") {
            correctAnswer = num1 * num2
        }
        else {
            correctAnswer = num1 / num2
        }

        var userAnswer = +prompt(num1 + " " + operation + " " + num2 + " = ?")

        if (userAnswer == correctAnswer) {
            alert("Correct ")
            score++
        }
        else {
            alert("Wrong  correct answer is: " + correctAnswer)
        }
    }

    alert("Your score is: " + score + " out of " + number_of_questions)
}





