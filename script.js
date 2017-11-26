var width = 4;
// bottom border width for h1
var hero = document.getElementById("hero");
var t = setInterval(grow, 10);

function grow() {
  if(width >= 36) {
    clearInterval(t);
    var t = setInterval(shrink, 10);
    }
    else {
      width += .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };


function shrink() {
  if(width <= 1) {
    clearInterval(t);
    var t = setInterval(grow, 10);
    }
    else {
      width -= .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };
