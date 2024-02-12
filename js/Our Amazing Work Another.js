//  Our Amazing Work

let gallery = [
        {
        category: 'webDesign',
        img: "./img/web design/web-design1.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress3.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design1.jpg",
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design2.jpg",
    },
    {
        category: 'webDesign',
        img: "./img/landing page/landing-page1.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/wordpress/wordpress4.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design10.jpg",
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design3.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress5.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design11.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page6.jpg",
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design4.jpg",
    },

    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress6.jpg"
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design12.jpg"
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page5.jpg"
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress7.jpg"
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design5.jpg"
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design2.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress8.jpg"
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design6.jpg"
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design3.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page2.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress9.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design4.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page7.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design5.jpg",
    },
    {
        category: 'webDesign',
        img: "./img/web design/web-design7.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design6.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page3.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design7.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress1.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design8.jpg",
    },
    {
        category: 'landingPage',
        img: "./img/landing page/landing-page4.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress10.jpg",
    },
    {
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design9.jpg",
    },
    {
        category: 'wordpress',
        img: "./img/wordpress/wordpress2.jpg",
    }
]
let defoultImg = document.querySelectorAll('.amazing_img')
let menu = document.querySelector('.amazing_tab_menu')
let imgWrap = document.querySelector('.amazing_images')
let button = document.querySelector('.amazing_button')
let backSide = document.querySelector('.back_img_wrap')


function test(cardIndex) {
     let card = document.createElement('div')
    card.classList.add('card')
    let imgCont = document.createElement('div')
    imgCont.classList.add('front_img')
    let img = document.createElement('img')
    img.src = gallery[cardIndex].img
    imgWrap.append(card)
    card.append(imgCont)
    imgCont.append(img)

    let back = document.createElement('div')
    back.classList.add('back')
    card.append(back)
    let backImg = document.createElement('img')
    backImg.src = './img/icon.png'
    back.append(backImg)
    backTitle = document.createElement('h3')
    backTitle.classList.add('back_title')
    backTitle.innerText = 'creative design'
    back.append(backTitle)
    backCategory = document.createElement('p')
    backCategory.classList.add('back_category')
    backCategory.innerText = gallery[cardIndex].category
    back.append(backCategory)
}
// Add first 12 pictures in tab 'all'
function addTwelve() {
    for (let item = 0; item < 12; item++) {
test(item)
    }    
}
addTwelve()
// Add next 12 pictures with button press
let n = 0;
button.addEventListener('click', () => {
    for (let item = n + 12; item < n + 24; item++) {
        test(item)
    }
        n += 12;
    if (n > 23) { button.classList.add('amazing_button_disable') }    
}) 
// Press on filter tabs
menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('amazing_tab_item')) {
    n=0
    imgWrap.innerHTML = '';
    for (let i of menu.children) {
        i.classList.remove('amazing_tab_item_active')
    }
    event.target.classList.add('amazing_tab_item_active')
    gallery.forEach((item, index) => {
        if (event.target.id != 'all' && item.category === event.target.id) {
            button.classList.add('amazing_button_disable')
            test(index)
        }
    } )
if (event.target.id == 'all') {
            addTwelve()
            button.classList.remove('amazing_button_disable')       
        }          
    }
   
})