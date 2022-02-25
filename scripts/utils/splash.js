window.addEventListener("load", (e) => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    // document.getElementById('auth').style.animation = 'fadein 0.3s forwards ease-in-out';
    // document.getElementById('auth').style.display = 'block';
    document.querySelector("main").style.animation =
      "fadein 0.3s forwards ease-in-out";
    document.querySelector("main").style.display = "block";
  }, 2500);
});
