class Wreck{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB = pointB
        this.wreck = Constraint.create(options);
        World.add(world, this.wreck);
    }
    attach(body){
        this.wreck.bodyA = body;
    }
    
    fly(){
        this.wreck.bodyA = null;
    }

    display(){
        if(this.wreck.bodyA){
            var pointA = this.wreck.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("Yellow");
            strokeWeight(8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}