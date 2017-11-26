  var width = 4;
  // bottom border width for h1
  var hero = document.getElementByID("hero");
  var t = setInterval(breathe, 10);

function breathe() {
  if(width >= 90) {
    clearInterval(t);
    }
    else {
      width += .5;
      hero.style.borderBottomWidth = width+"px";
    }
  };
