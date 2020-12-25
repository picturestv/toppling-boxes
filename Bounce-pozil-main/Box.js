class Box{

constructor(){


    var option={
        restitution:0.8
    }

    this.body= Bodies.rectangle(200,100,50,50,option);
    World.add(world,this.body);



}

display(){

    var pos=this.body.position;

    rect(pos.x,pos.y,50,50);


}
}