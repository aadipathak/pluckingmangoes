class yellowbox extends box{
    constructor(x,y){
    super(x,y,25,35);

    }
    dislay(){
        fill("yellow");
        super.display();
    }
}