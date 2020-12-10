class Umbrella {
    constructor(x,y,r) {
        var options ={
             isStatic: true,
            'restitution':0.4,
            'friction':0.5,
            'density':1.0
        }
        this.r=r

        this.body = Bodies.circle(x,y, this.r, options);
        //this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        /*imageMode(CENTER);
        image(this.image,0,0);*/
        ellipse(0,0,this.r,this.r);
        pop();

    }
}