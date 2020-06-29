const data = [
  {
    name: "John Due",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    name: "jack",
    age: 34,
    gender: "male",
    lookingFor: "female",
    location: "London UK",
    image: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    name: "julie",
    age: 30,
    gender: "female",
    lookingFor: "male",
    location: "New York,USA",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];


const profiles = ProfileIterator(data);

//  Call first element 
nextProfile();

// nextEvent
document.getElementById("next").addEventListener("click", nextProfile);

// next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;
  
    if( currentProfile !== undefined) {
document.getElementById('profileDisplay').innerHTML = `
<ul class="list-group">
<li class="list-group-item">Name : ${currentProfile.name}</li>
<li class="list-group-item">Age : ${currentProfile.age}</li>
<li class="list-group-item">Location : ${currentProfile.location}</li>
<li class="list-group-item"> Preference : ${currentProfile.gender} Looking for ${currentProfile.lookingFor}</li>
</ul>
`;

document.getElementById('imgDisplay').innerHTML = `<img src="${currentProfile.image}" />`
    } else {

        // no more profiles
        window.location.reload() // for reloading the page again 
    }
}

// profile iterator function
function ProfileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
