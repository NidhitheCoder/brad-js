 let scores = [60,58,69,54,60,57];
 let solution  = scores[2];
 console.log("Solution 2 produced " + solution + " bubbles");

let flavours = ["vannila","buttorscotch","lavender","chocolate","cookie dough"];
let flavourOfTheday = flavours[2];
console.log(flavourOfTheday);
flavours[2] = "Vannilla Chocolate Chip";
console.log(flavours[2]);

let scores = [
  50,
  60,
  45,
  56,
  75,
  75,
  88,
  67,
  41,
  65,
  86,
  54,
  65,
  77,
  33,
  22,
  89,
  53,
  54,
  89,
  76,
  35,
  34,
  53,
  66,
  46,
  46,
  23,
  46,
  88,
  75
];
let costs = [
  0.23,
  0.34,
  0.45,
  0.23,
  0.22,
  0.34,
  0.43,
  0.35,
  0.5,
  0.39,
  0.26,
  0.23,
  0.23,
  0.24,
  0.12,
  0.37,
  0.34,
  0.24,
  0.45,
  0.23,
  0.53,
  0.32,
  0.53,
  0.54,
  0.34,
  0.32,
  0.33,
  0.44,
  0.54,
  0.32,
  0.25
];
// let i = 0;
// while (i < scores.length) {
//   console.log("Bubble solution #" + i + " scores: " + scores[i]);
//   i= i + 1;
// }

function printAndGetHighScore(scores) {
  let highScore = 0;
  for (let i = 0; i < scores.length; i++) {
    console.log("Bubble solution #" + i + " scores : " + scores[i]);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(highScore, scores) {
  let bestSolutions = [];
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === highScore) {
      bestSolutions.push(j);
    }
  }
  return bestSolutions;
}

function GetMostCostEffectiveSolution(scores, costs, highScore) {
  let cost = 100;
  let index;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = cost[i];
      }
    }
  }
  return index;
}

let highScore = printAndGetHighScore(scores);
console.log("Bubble tests : " + scores.length);
console.log("Highest Bubble score : " + highScore);
console.log(
  "Solution with highest Score : " + getBestResults(highScore, scores)
);
let mostCostEffective = GetMostCostEffectiveSolution(scores, costs, highScore);
console.log(
  "Bubble solution #" + mostCostEffective + " is the most cost effective"
);

let hasBubbleGum = [false, false, false, true];
let products = ["cho cho chocolate", "icy mint", "cake batter", "bubbleGum"];
var i = 0;
while(i < hasBubbleGum.length) {
if(hasBubbleGum[i]) {
    console.log(products[i] + " contains Bubblegum");
}
i = i + 1;
}

for (let i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains Bubblegum");
  }
}
let answer = "ten"
for(;answer != "fourty three";) {
    console.log("for loop here :-D");
    answer = "fourty three";
}
