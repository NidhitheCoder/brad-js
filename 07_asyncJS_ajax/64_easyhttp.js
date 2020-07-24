function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  // add variable for avoid  error  is not have scope inside the function
  let self = this;
  this.http.onload = function() {
    // here get error then use arrow function it helps to allow this inside the function
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("ERROR:" + self.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP PUT request
