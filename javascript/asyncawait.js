//1)EG 1

//var a=10;
//console.log(a);
//async b=20;
//console.log(20);
//O/P:SyntaxError: Unexpected identifier 'b'

//2)EG 2
//We will get ouput as Promise because we have specified return keyword
async function fun1(){
    return "HELLO";
}
console.log(fun1());

fun2=async()=>{
    return "KEC";
}
console.log(fun2());


//3)EG 3
async function func1(){
    console.log("NIRAJANA");
}
func1();

func2=async()=>{
  console.log("SRI");
}
func2();


//4)EG 4
     async function f1(){
        setTimeout(()=>{
            return "HELLO";
        },1000)
        }
     console.log(f1());

     f2=async()=>{
        setTimeout(()=>{
            return "KEC";
        },1000)

    }
     console.log(f2());

     //O/P:Promise { undefined }
        //Promise { undefined }


    //5)EG 5
    async function funn1(){
        setTimeout(()=>{
            return "HELLO";
        },1000)
        
     console.log(await "HELLO");
    }

     funn2=async()=>{
        setTimeout(()=>{
            return "KEC";
        },1000)

    
     console.log(await "kec");
}

funn1();
funn2();

