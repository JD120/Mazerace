let Mazerace = {
  Start: undefined,
  map: document.getElementById("level_map"),
  circles: [],
  
    init: function() {
      for(let i = 0; i < 6; i++) {
        this.circles.push(this.createCircles());
      }
    }
  
  }
  
  Mazerace.init();