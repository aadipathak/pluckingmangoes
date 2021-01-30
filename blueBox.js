class bluebox extends box{
    constructor(x,y){
    super(x,y,25,35);

    }
    dislay(){
        fill("blue");
        super.display();
    }
}