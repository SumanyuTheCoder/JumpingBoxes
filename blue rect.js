class Blue {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("yellow.jpg");

      World.add(world, this.body);
    }
    display(){
      //image(this.yellow,200,20);
     var pos =this.body.position;
     strokeWeight(3);
     stroke(247,2247,1);
     

    }
  }

