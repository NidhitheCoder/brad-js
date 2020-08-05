// create view object
let view = {
  dispayMessage: function(msg) {
    let msgboard = document.getElementById("messageArea");
    msgboard.innerHTML = msg;
  },
  displayHit: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// Create model object
let model = {
  borderSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }
  ],
  fire: function(guess = "16") {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      //   let locations = ship.locations;
      //   let index = locations.indexOf(guess);
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        //We got a hit
        ship.hits[index] = "hit";
        if (this.isSunk(ship)) {
          this.shipSunk++;
        }
        return true;
      }
    }
    return false;
  },
  isSunk: function(ship) {
    for (let i = 0; i < this.numShips; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.dispayMessage("Tap, tap is this things on?");

//  sample codes for testing
//  let ships = [
//      {locations : ["31","41","51"],hits : ["","",""]},
//      {locations : ["14","24","34"],hits : ["","",""]},
//      {locations : ["00","01","02"],hits : ["","","" ]}
//  ];

//  let ship2 = ships[1];
//  let locations = ship2.locations;
//  console.log("Middle Locations is : ", locations[1]);

//  let ship3 = ships[2];
//  let hits =ship3.hits;
//  if(hits[0] === "hits") {
//      console.log("Ouch, Hit on the third ship at location one.")
//  }

//  let ship1= ships[0];
//  let hits = ship1.hits;
//  hits[2] = "hits";
