function detectType(val:number |string){
  if(typeof val === "string"){
    val.toLowerCase()

  }
  //return val + 3

}

function provideid(id:string | null){
    if(!id){
        console.log("please provide ID ");
        return
    }
    id.toLowerCase()
}

//using type predicates

type fish ={swim:()=>void};
type bird = {fly:()=>void};

function isFinish(pet:fish|bird):pet is fish{
    return (pet as fish).swim !==undefined
}
function getFood(pet:fish | bird){
    if(isFinish(pet)){
        pet
        return "fish  food"

    }
    else{
        pet
        return "bird food"
    }
}

//descreminated Union

interface circle{
    kind:"circle",
    radius:number

}

interface square{
    kind:"squre"
    side:number
}
interface  Rectngle{
    kind:"rectangle",
    length:number,
    width:number

}
type shape=circle|square |Rectngle

function getTruShape( shape:shape){
    if(shape.kind ==="circle"){
        //return Math.PI*shape.radius**2
    }
   // return shape.side*shape.side
}


function getArea(shape:shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2
        case "squre":
            return shape.side*shape.side
        default://never suppose to run
            const _dfulttshape:never =shape
            return _dfulttshape

    }
}