let clock = setInterval(clockTiming, 1000);
function clockTiming() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.querySelector("h2").innerHTML = t;
}
