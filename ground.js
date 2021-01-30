class ground{
    constructor(x,y,width,height){
    var option={
        isStatic:false,
    }
    this.body = Bodies(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
        rectMode(CENTRE)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        fill("red");
    }
    }