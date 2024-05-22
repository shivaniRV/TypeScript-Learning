// class sgg{
//     public email:string
//     //if you want to use as private keyword simply we can write # symbol
//     name:string
//      private readonly city:string="jaipur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//         this.city=name
//     }
// }

//<============another way of writing it=======>
class sgg{

    protected _courseCount=1
    readonly city: string="jaipur"
    constructor(
        public email: string,
        public name:string 
     ){

     }

     //private methos:
     private delteToken(){
        console.log("token deleted")
     }
     //getter example

     get getAppleEmail():string{
        return`apple${this.email}`
     }
// whwenerve rhtere is maeksres as protected it will access in same class as well as in inheritad cladss
     get courseCount():number{
        return this._courseCount=4
     }
     //while setting ssetters you cannot make it void 
//setters
     set courseCount(courenum){
        if(courenum<=1)
        throw new Error("course count should be more then 1")
    this._courseCount=courenum
     }
    }


    class subUser extends sgg{
        isFamily:boolean=true
        changeCourseCount(){
            this._courseCount=4
        }

    }

//hitesh.delteToken()// Error:Property 'delteToken' is private and only accessible within class 'sgg'.
const hitesh= new sgg("h@h,com","shivni")
