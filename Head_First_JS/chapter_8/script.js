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
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        //We got a hit
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.dispayMessage("HIT");
        if (this.isSunk(ship)) {
          view.dispayMessage("You sunk my battleship!");
          this.shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.dispayMessage("You missed.");
    return false;
  },
  isSunk: function(ship) {
    for (let i = 0; i < this.numShips; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  generateShipLocations : function () {
      let locations;
      for(let i=0;i < this.numShips ; i++) {
          do {
              locations = this.generateShip();
          } while (this.collision(locations))
          this.ships[i].locations = locations;
      }
  },
  generateShip : function() {
      let direction = Math.floor(Math.random() * 2);
      let row,col;

      if(direction === 1) {
          // generate a starting location for a horizontal ship
      } else{
          // generate a starting location for a vertical ship
      }

      let newShipLocations = [];
      for (let i = 0; i < this.shipLength;i++) {
          if(direction === 1) {
              // add location to array for new horizontal ship
          } else {
            //   add location to array for new vertical ship 
          }
      }
      return newShipLocations;
  }
};

let controller = {
  guesses: 0,
  processGuess: function(guess) {
    //more code will go here
    let location = parseGuess(guess);
    if(location) {
        this.guesses++;
        let hit = model.fire(location);
        if(hit && model.shipSunk ===  model.numShips) {
            view.dispayMessage("You sunk all my battleships, in " + this.guesses + " guesses");
        }
    }
  }
};

function parseGuess(guess) {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null || guess.length !== 2) {
    alert("Please enter a letter and a number on the board");
  } else {
    let firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar.toUpperCase());
    let column = guess[1];

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board");
    } else if (
      row < 0 ||
      row >= model.borderSize ||
      column < 0 ||
      column >= model.borderSize
    ) {
      alert("Oops, that's of the board!");
    } else {
      return row + column;
    }
    return null;
  }
}

function init() {
    let fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;
}

function handleFireButton() {
    let guessInput = document.getElementById('guessInput');
    let guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}

function handleKeyPress(e) {
    let fireButton = document.getElementById('fireButton');
    if(e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;



// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.dispayMessage("Tap, tap is this things on?");'
// model.fire("53");
// model.fire("34");
// model.fire("11");
// model.fire("66");
// model.fire("12");
// model.fire("10");

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
