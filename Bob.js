class Bob{

constructor(x,y){
    var options={
        'isStatic' : false,
        'restitution':1,
        'friction':0.3,
        'density':0.8
    }
    this.body=Bodies.circle(x,y,30,options)
    World.add(world,this.body)

}

display(){
    
fill("red");
ellipse(this.body.position.x,this.body.position.y, 30,30);
// circle(0,0, 25);

}


}


// class Bob {
//     constructor(x, y) {
//       var options = {
//         isStatic : true,
//         restitution:1,
//         friction:0,
//         density:5
//       }
//       var speed = 1
//       this.body = Bodies.circle(x, y, options);
//      // this.width = width;
//       //this.height = height;
//     //    this.radius = radius;

//       World.add(world, this.body);
      
//     }
//     display(){
//       var pos =this.body.position;
//       var angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//       rotate(angle);
//       rectMode(CENTER);
//       fill("red");
//       circle(0, 0, 25);
//       pop();
//     }

//    // update(){
//       //this.display()

//     //}
//   };