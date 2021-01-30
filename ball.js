class Ball {
    constructor(x,y,radius){
         var op={
             isStatic:false,
             'restitution':1,
             'friction':1,
             'density':1,


         }
    this.body = Bodies.circle(x,y,radius,op);
    this.radius=radius;
    this.image = loadImage("polygon.png");

    World.add(world,this.body);
    }
    display(){
        ellipse(CENTRE);
        ellipseMode(this.body.position.x,this.body.position.y,this.radius);
    }
}