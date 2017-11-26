var width = 4;
// bottom border width for h1
var border = document.getElementsByTagName("h1");
var t = setInterval(breathe, 10);

function breathe() {
  if (width > 4) {
    width -= .5;
    h1.borderBottom = width+"px solid #715ACE;";
    }
    else if (width <= 0) {
      width += .5;
      h1.borderBottom = width+"px solid #715ACE;";
    }
  }
