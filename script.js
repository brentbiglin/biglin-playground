  var width = 90;
  // bottom border width for h1
  var hero = document.getElementById("hero");
  var t = setInterval(breathe, 10);

function breathe() {
  if(width = 4) {
    clearInterval(t);
    }
    else {
      width -= .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };
