const fillValues = () => {
  const welcome = document.getElementById("welcome");
  var url_string = window.location.href;
  var url = new URL(url_string);
  var name = url.searchParams.get("name");
  var age = url.searchParams.get('age');
  var place = url.searchParams.get("place");
  welcome.textContent = "Heyy " + name + " , you are "+age + " Years Old and your from " + place;
};

window.onload = fillValues;
