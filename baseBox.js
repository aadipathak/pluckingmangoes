class box{
    constructor(x,y,height,width){
        var op={
            isStatic:true,
            'restitution':1,
            'friction':1,
            'friction':1,
        }
        this.body = Bodies(x,y,height,width,op);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }

  display(){
 rectMode(CENTRE);
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
}