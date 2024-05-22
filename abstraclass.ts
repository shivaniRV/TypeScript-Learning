 abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string

    ){}
   abstract  getSepia():void
   getReelTime():number{
    return 8
   }
}

//const hc=new TakePhoto("test","test")

class instagram extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode,filter)
        }

        getSepia():void{
            console.log("sepia")
        }

}
const hc =new instagram("test","test",3)
hc.getReelTime()