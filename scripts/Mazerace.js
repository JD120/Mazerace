let Mazerace = {
  Start: undefined,
  player1: document.getElementsByClassName("player1"),
  square: [],
  
  
    init: function() {
      for(let i = 0; i < this.player1.length; i++) {
      this.player1[i].keypress = function(event) {
      }
    }
  }
  movement: function () {
  }
} 
  
  Mazerace.init();