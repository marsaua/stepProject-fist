/* What People Say About theHam */
const obj = [
    {
        name: 'Giovanna Carvalho',
        photo: './img/people say/1.png',
        profession: 'UX Designer',
        about: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        
    },
    {
        name: 'Mark Smyth',
        photo: './img/people say/2.png',
        profession: 'Web Designer',
        about: 'For the next few releases, you can go to your avatar at any time to turn the new navigation on and off. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
    },
    {
        name: 'David Green',
        photo: './img/people say/3.png',
        profession: 'Developer',
        about: 'For the next few releases, you can go to your avatar at any time to turn the new navigation on and off. Tempus ultricies luctus, quam dui laoreet sem. A designer is a person who plans the form or structure of something before it is made, by preparing drawings or plans. Non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis',
    },
    {
        name: 'Tina Marina',
        photo: './img/people say/4.png',
        profession: 'Model',
        about: 'Google Web Designer gives you the power to create beautiful and compelling videos, images, and HTML5 ads. A designer is a person who plans the form or structure of something before it is made, by preparing drawings or plans. Non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis',
    }

]

let choice = document.querySelector('.small_img_wrapper');
let smallPhoto = document.querySelectorAll('.small_foto')
let activeWrap = document.querySelector('.active_foto')
let fullName = document.querySelector('.foto_name')
let prof = document.querySelector('.foto_profession')
let bigPhoto = document.querySelector('.people_say_foto')
let profAbout = document.querySelector('.people_say_text')
let dat = document.querySelector('.about_foto')
let currentIndex = 0;


choice.addEventListener('click', (event) => {
    const photo = event.target.closest('.small_foto')
    const arrowLeft = event.target.closest('.foto_button_left')
    const arrowRight = event.target.closest('.foto_button_right')

    function changeWorker() {
        for (let item of smallPhoto) {
            item.classList.remove('active_small_foto')
        } 
        
        bigPhoto.src=obj[currentIndex].photo  
        activeWrap.classList.add('active_foto')
        profAbout.classList.add('people_say');
        dat.classList.add('about_foto')
        fullName.innerText = obj[currentIndex].name 
        prof.innerText = obj[currentIndex].profession
        profAbout.innerText = obj[currentIndex].about
    }

    if (photo) {
        currentIndex = photo.getAttribute('data-index')
        changeWorker()
        currentIndex = +photo.dataset.index 
         photo.classList.add('active_small_foto')
        
    } else if (arrowRight) {
        
        currentIndex++;
        if (currentIndex > 3) {currentIndex=0}
        console.log(currentIndex)
        
        changeWorker()
         for (let i of smallPhoto) {
            if (i.getAttribute('data-index') == currentIndex) {
             i.classList.add('active_small_foto')
         }   
        }
        
    } else if (arrowLeft) {
        currentIndex--; 
        if (currentIndex < 0) {currentIndex=3}  
        console.log(currentIndex)
        
        changeWorker() 
        for (let i of smallPhoto) {
            if (i.getAttribute('data-index') == currentIndex) {
             i.classList.add('active_small_foto')
         }   
        }
        
    }

})
activeWrap.addEventListener('animationend', removeClass);
function removeClass() {
    activeWrap.classList.remove('active_foto');
    profAbout.classList.remove('people_say');
    dat.classList.remove('about_foto')

}    
