let val = [
  { name: "john", place: "Calicut" },
  { name: "juliya", place: "Cochin" },
  { name: "juliya", place: "Cochin" },
  { name: "john", place: "Calicut" },
  { name: "helen", place: "Kannur" },
  { name: "john", place: "Wayanad" },
  { name: "juliya", place: "Cochin" },
  { name: "john", place: "Waynad" },
  { name: "helen", place: "Kannur" },
  { name: "john", place: "Calicut" },
  { name: "john", place: "Calicut" },
  { name: "Smith", place: "Kannur" },
  { name: "Sara", place: "Idukki" }
];

let result = [],
  counter;

val.map(obj => {
  let name = obj.name,
    place = obj.place;
  counter = 0;

  val.filter(obj2 =>
    obj2.name === name && obj2.place === place ? counter++ : ""
  );

  const x = result.find(
    ({ object }) => object.name === name && object.place === place
  );
  !x ? (result = [...result, { object: obj, count: counter }]) : result;
});

let tableCollection = [];
result.map(item => {
  let count = item.count;
  let countWiseItem = [];
  result.map(val => {
    if (val.count == count) {
      countWiseItem = [...countWiseItem, val.object];
      result = result.filter(item => item !== val);
    }
  });
  if (countWiseItem.length)
    tableCollection = [
      ...tableCollection,
      { count: count, table: countWiseItem }
    ];
});

tableCollection.map(item => {
  console.log("\n Table of count " + item.count);
  console.log(item.table);
});
