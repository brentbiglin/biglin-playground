var width = 4;
// bottom border width for h1
var border = document.getElementByTagName("h1");
var t = setInterval(grow, 10);

function grow() {
  if (width > 4) {
    width -= .5;
    h1.borderBottom = width+"px solid #715ACE;";
    }
    else if (width <= 0) {
      width += .5;
      h1.borderBottom = width+"px solid #715ACE;";
    }
  }
