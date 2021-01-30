class pinkbox extends box{
    constructor(x,y){
    super(x,y,25,35);

    }
    dislay(){
        fill("pink");
        super.display();
    }
}