var width = 4;
//  border bottom width for h1

document.getElementById("hero").onclick = function grow() {
  if(width >= 28) {
      width = 4;
      hero.style.borderBottomWidth = width+"px";
    }
    else {
      width += 1;
      hero.style.borderBottomWidth = width+"px";
    }
  };
