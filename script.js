var width = 4;
// bottom border width for h1
var hero = document.getElementById("hero");
// var t = setInterval(grow, 1000);

document.getElementById("hero").onclick = function grow() {
  if(width >= 38) {
    clearInterval(t);
    // var t = setInterval(shrink, 1000);
    }
    else {
      width += .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };


function shrink() {
  if(width <= 1) {
    clearInterval(t);
    var t = setInterval(grow, 1000);
    }
    else {
      width -= .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };
