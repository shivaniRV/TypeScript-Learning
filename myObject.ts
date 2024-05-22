

const user={
    name:"shivani",
    email:"sdsfdf@gmail.com",
    isActive:true


}

 function createUser({name:string,isPaid:boolean}){

}

createUser({ name:"shivani", isPaid:true})

//anthor way to add another type which actually no giving error

function createUser1({name:string,isPaid:boolean}){

}
let newUser={name:"shivani", isPaid:true,email:"DSFD@gmail.com"}

createUser1(newUser)
//<------------------------------------------------->

function createCourse():{name:string,isPaid:number}{
    return {name:"ractJs",isPaid:88}
}


type User={
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean
    creditcardDetails ?:number
}

let myUser:User={
    _id:"12333",
    name:"shivani",
    email:"h@gmail.com",
    isActive:false,
   


}
myUser.email="h@h.com"
// myUser._id="sdsd"//error becaause readonly

type cardNumber={
    cardNumber:string

}
type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate &{
    cvv:number
}


// function createUser2(user:User){}
// createUser2({name:"",email:"",isActive:true})

export{}