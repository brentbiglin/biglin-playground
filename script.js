  var width = 4;
  // bottom border width for h1
  var hero = document.getElementById("hero");

setInterval(
function breathe() {
  if(width >= 48) {
      width -= .5;
      hero.style.borderBottomWidth = width+"px";
    }
    else if(width <= 1) {
      width += .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };, 3000)
