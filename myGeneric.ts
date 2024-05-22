 const score:Array<number>=[]
 const names: Array<string>=[]

 function identityOne(val:boolean |number):boolean |number{
    return val
 }
 function identityTwo(val:any):any{
    return val
 }
 //best way to practice below syntax
 function identityThree<Type>(val:Type):Type{
    return val
 }
 identityThree("5")

//you can pass your own type in this below ths is called Generic type
 function identityFour<T>(val:T):T{
    return val
 }
 interface Bootle{
    brand:string,
    type :number

 }
//  identityFour<Bootle>({})

//GENERICS ARE DEFINED BY  <T>(datatype) the value that we are returning that are one for the value that we declared  &<T,> is also used both are same
function getSearchProducts<T>(products:T[]):T{
// do some dataBase Operations
   const myIndex = 3
   return products[myIndex]
}

const getMoreSearchProducts =<T>(products:T[]):T =>{
   const myIndex=4
   return products[myIndex]

}
interface DataBase{
   connection:string,
   username:string,
   password:string
}

function anotherFunction<T,U extends DataBase >(valOne:T,valTwo:U):object{
   return{
      valOne,
      valTwo
   }

}

//anotherFunction(3,{})

interface Quiz{
   name:string,
   type:string,

}

interface Course{
   name:string,
   author:string,
   subject:string
}

class sellable<T>{
   public cart:T[] =[]

   addToCart(products:T){
      this.cart.push(products)
   }
}
 export{}