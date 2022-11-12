const btn = document.getElementById("save");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "orange";
  const name = document.getElementById("name").value;
  window.location.href =
    "http://127.0.0.1:5500/dataPassingWithhref/test.html?name=" + name +'&age=23&place=cochin';
});
