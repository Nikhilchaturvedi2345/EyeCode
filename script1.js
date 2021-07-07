var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);


let Hamberger = document.querySelector(".Hamberger");
Hamberger.addEventListener("click", function () {
  let NavList = document.getElementById("NavList");
  let Hamline = document.querySelector(".Hamline");
  if (NavList.style.top == "50px") {
    Hamline.removeAttribute("id","Canclebtn")
    NavList.style.top = "-700px";
  }
  else {
    NavList.style.top = "50px";
    Hamline.setAttribute("id","Canclebtn");

  }
})
