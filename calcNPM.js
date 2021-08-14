const readlineSync = require ('readline-sync');
var number1=readlineSync.questionInt('Please enter first number')
var number2=readlineSync.questionInt('Please enter second number')
var opteration= readlineSync.question('what opperation would you like to perform? (add,sub,mult,div)?')

//console.log("Step 1:")
function add(number1,number2){
    return number1+number2;
}
var sum= add(number1,number2);
console.log("result is: "+ sum);
//console.log("step 2:");

function mult(number1,number2){
    return number1*number2;
}
var dos =mult(number1,number2);
console.log("result is:" + dos);
//console.log("step 3:");

function div(number1,number2){
    return number1/number2;
}
var Div=div(number1,number2);
console.log("result is:" + Div);
//console.log("step 4:");

function minus(number1,number2){
    return number1-number2;
}
var Minus=minus(number1,number2);
console.log("result is:" + Minus);
//console.log("step5:");

function jsCalc(number1,number2,entOpp){
    if (entOpp==add){
        console.log('result of first number:'+number1 + 'With the second number:'+number2 + 'results in '+ Sum (number1,number2));
    }
    else if(entOpp==minus){
        console.log('result of first number:' + number1+ 'with the second number'+ number2 +'results in '+ Minus(number1,number2));
    }
    else if (entOpp==mult){
        console.log('result of first number:' + number1+ 'with the second number'+ number2 +'results in '+ dos(number1,number2));
    }
    else if (entOpp==div){
        console.log('result of first number:' + num1ber+ 'with the second number'+ number2 +'results in '+ Div(number1,num2ber));
    }

}
jsCalc(number1,number2,opteration);
