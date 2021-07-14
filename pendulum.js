class Pendulum{

constructor(support,bob){
var options={
    support:support,
    bob : bob,
    length:5,
    stiffness:1

}  
this.body = Constraint.create(options);
World.add(world,this.body)

}

display(){
var A = this.body.support.position
var B = this.body.bob.position
push();
stokeWeight(10)
stroke("blue")
line(A.x,A.y,B.x,B.y)
pop();



}

}

// class Chain{

//     constructor(bodyA,bodyB){
//         var options = {
//             bodyA:bodyA,
//             bodyB:bodyB,
//             length:5,
//             stiffness:0.04
    
//         }
//         this.body = Constraint.create(options);
//         World.add(world,this.body)
//     }
//     display(){  
//         var A = this.body.bodyA.position;
//         var B = this.body.bodyB.position;
    
//         push();
//         strokeWeight(10);
//         stroke("blue")
//         line(A.x,A.y,B.x,B.y)
//         pop();
    
    
//     }