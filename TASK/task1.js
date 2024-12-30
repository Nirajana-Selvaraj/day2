//1)BITWISE AND(&)
var n=2998887730;
if((n&1)==0){
    console.log("even");
}
else{
  console.log("odd");
}


//2)BITWISE OR(|)
var num1=8;
if((num1|1)==num1){
    console.log("odd");

}
else{
    console.log("even");

}


//3)BITWISE XOR(^)
var num2=17;
if((num2^1)==num2+1){
    console.log("even");

}
else{
    console.log("odd");
}


//4)BITWISE  NOT
var a=8;
if((~a&1)==0){
    console.log("odd");

}
else{
    console.log("even");
}