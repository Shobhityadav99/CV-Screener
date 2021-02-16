const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

function cvIterator(profiles) {
    let nextIndex=0;
    return {
        next: function() {
            return nextIndex<profiles.length ? 
                {value: profiles[nextIndex++],done: false} : {done: true};
        }
    }
}
let next=document.getElementById("next");
next.addEventListener('click',nextCV);

const candidates = cvIterator(data);
nextCV();
function nextCV() {
    const currentCandidates=candidates.next().value;
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
    if(currentCandidates!=null){
    image.innerHTML=`<img src="${currentCandidates.image}">`
    profile.innerHTML=`
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidates.name}</li>
    <li class="list-group-item">Age: ${currentCandidates.age}</li>
    <li class="list-group-item">Lives in: ${currentCandidates.city}</li>
    <li class="list-group-item">Works on: ${currentCandidates.language}</li>
    <li class="list-group-item">Uses: ${currentCandidates.framework}</li>
  </ul>`}else{
      alert('End of candidate applications');
      window.location.reload();
  }
}