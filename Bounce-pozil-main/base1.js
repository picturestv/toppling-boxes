class ground{

    constructor(){
    
    
        var option={
            isStatic:true
        }
    
        this.body= Bodies.rectangle(200,350,350,50,option);
        World.add(world,this.body);
    
    
    
    }
    
    display(){
    
        var pos=this.body.position;
    
        rect(pos.x,pos.y,350,50);
    
    
    }
    }