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
  
  Mazerace.init();