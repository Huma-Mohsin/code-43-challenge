// //Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.
//Solution
const productOfAllParameters=(...parameters:number[])=>{

  //syntax of reduce method:-  array.reduce(callback, initialValue)

//This line calculates the product of all numbers in the parameters array by using reduce method.

 return parameters.reduce((product,num)=>product*num,1);//It uses the reduce() method on the parameters array.

 //The callback function (product, num) => product * num multiplies each num with the product.
 //The initial value of the accumulator product is 1.
 //The final result of the reduction, which is the product of all numbers, is returned.

};//closing of main arrow function
console.log(productOfAllParameters(2,3,4));//invoke function

console.log(productOfAllParameters(12,33,14));//invoke function


console.log(productOfAllParameters(200,300,450));//invoke function
//Author-Huma Mohsin