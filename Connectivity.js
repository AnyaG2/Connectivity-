class Connectivity{
constructor(bodyA, bodyB){
var option={
bodyA: bodyA,
bodyB: bodyB,
length: 20, 
stiffness: 0.03

}
this.connectivity= Matter.Constraint.create(option)
World.add(world, this.connectivity)

}
display(){
    var pointA = this.connectivity.bodyA.position 
    var pointB = this.connectivity.bodyB.position
    line(pointA.x, pointA.y, pointB.x, pointB.y)


}



}
