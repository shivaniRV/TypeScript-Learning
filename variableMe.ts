let greeting: string="Shivani Good Start";
let mynum=6

greeting.toUpperCase();

console.log(greeting);
//number
let userId:number=334455.8
//let say we remove number from abve like let userId=334455.8 it automatically detcets it is number but what if it is similar to js so,Ts is smart enough to detedct it is number but in certain cases we use to wrie it types as well.

//boolean
let isLoggedIn:boolean=false




// to ignore the error temporarty we can Add  export{}
// There is a simple design/compile time tool that you can use to stop your TypeScript code from accessing things it should not.
export{}

//any: which dont know what value come up in future so it consider it as any( generally it is bad way of writing it please avoid  )

//any: that you can use whwnerver you don't want a particular value to cause typeChecking Errors.

let hero;
function getHero(){
    return "thor"
}

hero =getHero()
