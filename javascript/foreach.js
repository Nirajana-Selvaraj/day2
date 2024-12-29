
//EG 1
array=[10,20,30,"Nirajana"]
array.forEach((element,ind)=>{
    console.log("Element is",element);
    console.log("Index of the element is",ind);
})

//EG 2
obj1={
    "firstName":"Nirajana",
    "lastName":"Sri",
    "age":"20"
    }
console.log(obj1);
for(key in obj1){
     value=obj1[key]
     console.log(key,":",value)
}