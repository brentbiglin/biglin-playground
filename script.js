var width = 4;
//  border width for h1

document.getElementById("hero").onclick = function grow() {
  if(width >= 28) {
      hero.style.borderBottomWidth = 4+"px";
      hero.style.borderTopWidth = 4+"px";
    }
    else {
      width += 1;
      hero.style.borderBottomWidth = width+"px";
      hero.style.borderTopWidth = width+"px";
    }
  };
