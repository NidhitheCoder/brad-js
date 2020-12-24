let winner = function(){alert("WINNER!")};
let loser = function(){alert("LOSER!")};

winner();

let a = winner;
let b = loser;
let c = loser;


a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a(); 