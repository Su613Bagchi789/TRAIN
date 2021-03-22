class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }
   
   show(){
        //image(this.sling1,200,20);
        
            
            var pos1 = this.chain.bodyA.position;
            var pos2 = this.chain.bodyB.position;
           
                strokeWeight(7);
                line(pos1.x , pos1.y, pos2.x , pos2.y);
               
    }
    
}