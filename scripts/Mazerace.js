let Mazerace = {
  Start: undefined,
  map: document.getElementById("maze_race"),
  init: function () {
    for (let i = 1; i < 100; i++) {
      this.player1.push(this.createPlayer1())
    };
    this.onkeydown ();
},
CreatePlayer1: function() {
  let player1div = document.createElement("div");
  player1div.className = "player1";
  this.Container.append(player1div);
  let player1 = {
    x_pos: 26,
    y_pos: 15,
    x_velocity: 0,
    y_velocity: 0,
    radius: 5,
    color: "red",
    element: player1div
  }

  return player1;
  },
  startSimulation: function () {
    this.simulation = window.setInterval(this.animatePlayer1.bind(Mazerace), 30);
  },

  animatePlayer1: function () {
    this.onkeydown ();
  }
},
  onkeydown = function(event) { 
  console.log(event.keyCode); 
  if(this.hasBegun == true) {
   if(event.keyCode == 87) { 
    //press w 
    for(let i = 0; i < this.player1.length; i++){ 
    this.moveUp(this.player1[i]);
    } 
    }else if(event.keyCode == 65) { 
      //press a
      for(let i = 0; i < this.player1.length; i++) {
         this.moveLeft(this.player1[i]); 
         }
      } else if(event.keyCode == 68) { 
        //press d 
        for(let i = 0; i < this.player1.length; i++) 
        { this.moveRight(this.player1[i]); } } 
        else if(event.keyCode == 83) { 
          //press s 
          for(let i = e; i < this.player1.length; i++) {
             this.moveDown(this.player1[i]);
          }
        }
      }
    }
  Mazerace.init()
