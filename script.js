var width = 4;
// bottom border width for h1
var hero = document.getElementById("hero");
var t1 = setInterval(grow, 10);
var t2 = setInterval(shrink, 10);

function grow() {
  if(width >= 36) {
    clearInterval(t1);
    setInterval(t2);
    }
    else {
      width += .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };


function shrink() {
  if(width <= 1) {
    clearInterval(t2);
    setIntervial(t1);
    }
    else {
      width -= .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };
