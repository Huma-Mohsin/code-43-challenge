// //Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
//solution
//traditional function
function productByTraditionalfunction(value1:number,value2:number){
    return value1*value2;
}
console.log("Product By Using Traditional Function:" , productByTraditionalfunction(2,3))//invoke function
//arrow function
//syntax-----> const myFunction = (param1, param2) => {
  // function body
//};
const productByArrowFunction=(value1,value2)=>{
    return value1*value2;
}
console.log("Product By Using Arrow Function:" , productByArrowFunction(2,3));
//Author-Huma Mohsin