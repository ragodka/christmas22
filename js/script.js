function decorateTree() {
  document.querySelector(".presents").style.display = "inline";
  document.querySelector(".notoystree").style.display = "none";
  document.querySelector(".withtoystree").style.display = "block";
  document.querySelector(".santa").style.display = "none";
}
document.querySelector(".christmastree").onclick = decorateTree;
