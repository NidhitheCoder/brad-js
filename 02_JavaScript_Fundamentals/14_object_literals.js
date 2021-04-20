const person ={
    name:"joe",
    lastName:"smith",
    age:24,
    email:"joe@gmail.com",
    hobbies:["music","sports"],
    Address:{
        city:"Miami",
        place:'2nd street'
    },
    // DOB:function(){
    //     return 1995;
    // }
    DOB:function(){
        return 2020 - this.age;
    }
}

let val;
val = person;

// get a specific value
val = person.name;
val = person['lastName'];
val = person.age;
val = person.email;
val = person.hobbies;
// val=person.hobbies[1];
val = person.Address;
// val = person.Address.city;
val = person.Address['place']
val = person.DOB();

console.log(val);

const people=[
    {name:"ajith",age:26},
    {name:"julie",age:28},
    {name:"nancy",age:34}
];

for (let i=0;i < people.length;i++){
    console.log(people[i].name);
}