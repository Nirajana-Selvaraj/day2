//1)arrow function with arguments and a return type:

add=(a,b)=>{
    return(a+b);
}
console.log(add(150,180));


//2) Arrow function with arguments but no return type
Sum = (a1, b1) => {
    console.log("The sum of a and b is",(a1+b1)); 
};


Sum(3, 7); 


//3) Arrow function with no arguments and a return type
const greet = () => {
    return "WELCOME"; 
};
console.log(greet());



//4) Arrow function with no arguments and no return type
  msg = () => {
    console.log(5*4);
};

msg();
