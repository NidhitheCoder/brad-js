const fillValues = () => {
  const welcome = document.getElementById("welcome");
  var url_string = window.location.href;
  var url = new URL(url_string);
  var name = url.searchParams.get("name");
  console.log(name);
  welcome.textContent = "Heyy " + name + " ,This is successfull.";
};

window.onload = fillValues;
