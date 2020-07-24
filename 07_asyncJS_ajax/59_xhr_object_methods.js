document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //  create xhr object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "59_xhr_object_methods.txt", true);

  // console.log("READYSTATE",xhr.readyState);

  // OPTIONAL - USED IN SPINNERS AND LOADERS
  xhr.onprogress = function() {
    console.log("READYSTATE", this.readyState);
  };

  xhr.onload = function() {
    console.log("READYSTATE", this.readyState);
    // console.log('haii');
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // xhr.onreadystatechange = function() {
  //     console.log("READYSTATE",this.readyState);
  // if( this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  // }
  // }

  xhr.onerror = function() {
    console.log("request error");
  };
  xhr.send();
  // HTTP status
  // 200: "OK"
  // 403: "forbidden"
  // 404: Not Found

  // READY STATE VALUES
  //  1 : request not initialized
  //  2 : server connection established
  //  3 : request received
  //  4 : processing request
  //  5 : request finished and response is ready
}
