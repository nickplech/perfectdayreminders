document.addEventListener("DOMContentLoaded", function() {
var msg = document.querySelector('.sprite'),
    pos = "left";

  msg.addEventListener('click', function(){
    switch(pos) {
      case "left":
        svg.classList.remove('doctext1');
        svg.classList.add('middle');
        pos = "middle";
        break;
      case "middle":
        svg.classList.remove('middle');
        svg.classList.add('right');
        pos = "right";
        break;
      case "right": 
        svg.classList.remove('right');
        svg.classList.add('left');
        pos = "left";
    }
  }, false);
});

 var rellax = new Rellax('.rellax');

// buttons on phone

 function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// end buttons on phone