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

const candidates = nextCV(data);

function nextCV() {
    const currentCandidates=candidates.next().value;
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");

    image.innerHTML=`<img src="${currentCandidates.image}">`
    
}