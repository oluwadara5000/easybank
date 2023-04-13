const open = document.getElementById("open");
const close = document.getElementById("close");
const panel = document.getElementById("panel");
const panelList = document.getElementById("panel-list");
const blur = document.getElementById("blur");


close.style.display = "none";


open.addEventListener("click", function () {
  open.style.display = "none";
  close.style.display = "block";
  panel.style.height = "265px";
  panel.style.padding = "30px 0";
  panelList.style.display = "flex";
  blur.style.opacity = "0.5";
});

close.addEventListener("click", function () {
  open.style.display = "block";
  close.style.display = "none";
  panel.style.height = "0";
  panel.style.padding = "0";
  panelList.style.display = "none";
  blur.style.opacity = "0";
});

// close.addEventListener("click", function () {
//   open.style.display = "block";
//   close.style.display = "none";
//   panel.style.height = "0";
//   panel.style.padding = "0";
//   panelList.style.display = "none";
//   blur.style.opacity = "0";
// });