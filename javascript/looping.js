array=[10,20,30,[40.5,50.6],"a","kec",true]
console.log(array);

//1)for...in loop
for(var i in array){
    console.log("ELEMENT PRESENT IN INDEX",i,"is",array[i]);
}

//2)for...of loop
for(var a of array){
    console.log(a);
}