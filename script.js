var width = 4;
//  border bottom width for h1

document.getElementById("hero").onclick = function grow() {
  if(width >= 28) {
      hero.style.borderBottomWidth = 4+"px";
      hero.style.borderTopWidth = 4+"px";
      continue;
    }
    else {
      width += 1;
      hero.style.borderBottomWidth = width+"px";
    }
  };
