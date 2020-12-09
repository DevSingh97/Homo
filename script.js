var bt = document.querySelector('#mybtn');

var mbt = document.querySelector('#mybt');

var ifr = document.querySelector('#frame');

var close = document.querySelector("#cls");

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}

bt.addEventListener('click', function(){
  ifr.style.display = "flex";
})

mbt.addEventListener('click', function(){
  ifr.style.display = "flex";
})

close.addEventListener('click', function(){
  ifr.style.display = "none";
})

