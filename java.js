function submit() {
  var num = [1, 2, 3, 4, 5, 6];

  document.getElementById("div").innerHTML = `<div class='dot'> ${Math.floor(
    Math.random(Math.round(1)) * num.length + 1
  )} </div>`;
}
