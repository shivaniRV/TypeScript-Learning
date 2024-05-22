let score:number | string =33
score= 44
score="55"


type User={
    name: string;
    id:number

}
type Admin={
    username:string;
    id:number
}
//unoin operwaatior allow us to change the username of admin as well as id it will not give error if we remove '|' then it must give error.

let Hitesh :User | Admin ={name:"Hitesh",id:55}
Hitesh={username:"shivani",id:23}

// function getDbId(id:number | string){
//     //making ome API Calls
//     console.log(`DB id is:${id}`)
// }
// getDbId(4)
getDbId("5")

function getDbId(id:number | string){
    //id.toLowerCase()//Error: Property 'toLowerCase' does not exist on type 'string | number'.
    if(typeof id== "string"){
    id.toLowerCase()// it not gives error  here we specify the type is string 
    }

   
}
//array

const data :number[]=[1,2,3]
const data2:string[]=["1","2","3"]
//if you want to aadd both types in array then we write it as below:
const data3:(string | number| boolean)[]=["1","2",3,true]

//literal type of assignment that once you assign not change it 

// let pi :3.14 =3.14
// pi =3.145 //gives Error

let setAllotment :"aisle"|"middle"|"window"

setAllotment="aisle"
//setAllotment="crew"//Error:Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"