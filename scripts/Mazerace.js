let Mazerace = {
  Start: undefined,
  map: document.getElementById("level_map"),
  circles: [],
  
    init: function() {
      for(let i = 0; i < 6; i++) {
        this.circles.push(this.createCircles());
      }
    },

    createCircles: function (x, y) {
      let circlediv = document.createElement("div")
      circlediv.className = "circles"
      let circles = {
        x_pos: x,
        y_pos: y,
        x_velocity: Math.random() * .7,
        y_velocity: Math.random() * .7,
        radius: 10,
        element: circlediv,
      }
    }
  }
  var player=document.getElementByID('player1') 

    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
  }

    
  
  
  Mazerace.init();