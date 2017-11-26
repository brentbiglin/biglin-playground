var width = 4;
// bottom border width for h1
var h1 = document.getElementsByTagName("h1");
var t = setInterval(breathe, 10);

function breathe() {
  if (width >= 4) {
    width -= .5;
    h1.borderBottomWidth = width+"px";
    }
    else if (width <= 0) {
      width += .5;
      h1.borderBottomWidth = width+"px";
    }
  }
