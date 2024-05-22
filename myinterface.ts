interface user{
    readonly dbID:number,
    email: string,
    userId:number,
    googleId?:string
   // startTrail:()=>string
   startTrail():string
   getCupon(cuponname:string,value:number):number
}
//reopening of interface

interface user{
    githibToken:string
}
//extensds is an keyword we can use to extend with ohter interface as well
interface Admin extends user{
    role :"admin"|"ta"|"learner"

}
const sh:Admin={dbID:45,email:"w@w.cpm",userId:12,
role:"admin",
githibToken:"jkll",

startTrail:()=>{
    return "trail started"

},
getCupon:(name: "shivani10",value:23)=>{
return 10
}
}
sh.email="nc@n.com"
