const name = "john";
const age = 33;
const job = "web developer";
const city = "Miami";
let html;

// Without  template strings (es5)
 html='<ul><li>Name : '+name+'</li><li>Age : '+age+'</li><li>Job : '+job+'</li><li>City : s'+city+'</li></ul>';
 
 html = "<ul>" +
 "<li>Name : " + name + "</li>" +
 "<li>Age : " + age + "</li>" +
 "<li>Job : " + job + "</li>" +
 "<li>City : " + city + "</li" +
  "</ul>";

//  document.body.innerHTML=html;

function hello(){
    return "hello";
}

//   with templates

html =`
<ul>
<li>Name : ${name}</li>
<li>Age : ${age}</li>
<li>Job : ${job}</li>
<li>City : ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age > 30 ?'over 30':'under 30'}</li>
</ul>
`
document.body.innerHTML=html;