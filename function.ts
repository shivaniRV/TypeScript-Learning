//type1:

function addTwo(num:number):number{
    return num+2

}
//tyoe2

function getUpper(val:string){
    return val.toUpperCase()
} 

//type 3
function signupUser(name:string,email:string,passWord:number){

}
//type 4
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{


}

const getHello =(s:string):string =>{
    return ""
}

const heros=["thor","spiderman","ironman"]
heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}

addTwo(6)
getUpper("shivani")
signupUser("shiva","xfg@gmail.com",123)
loginUser("sffgf","gfuhjhk")

function getValue(myVal:number){
    if(myVal > 5){
        return true
    }
    return "200 Ok"
}
export{}