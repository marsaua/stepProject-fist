//  Our Amazing Work

let gallery = [
    {
        id: 1,
        category: 'webDesign',
        img: "./img/web design/web-design1.jpg",
    },
    {
        id:2,
        category: 'wordpress',
        img: "./img/wordpress/wordpress3.jpg",
    },
    {
        id:3,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design1.jpg",
    },
    {
        id:4,
        category: 'webDesign',
        img: "./img/web design/web-design2.jpg",
    },
    {
        id:5,
        category: 'webDesign',
        img: "./img/landing page/landing-page1.jpg",
    },
    {
        id:6,
        category: 'landingPage',
        img: "./img/wordpress/wordpress4.jpg",
    },
    {
        id:7,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design10.jpg",
    },
    {
        id:8,
        category: 'webDesign',
        img: "./img/web design/web-design3.jpg",
    },
    {
        id:9,
        category: 'wordpress',
        img: "./img/wordpress/wordpress5.jpg",
    },
    {
        id:10,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design11.jpg",
    },
    {
        id:11,
        category: 'landingPage',
        img: "./img/landing page/landing-page6.jpg",
    },
    {
        id:12,
        category: 'webDesign',
        img: "./img/web design/web-design4.jpg",
    },

    {
        id:13,
        category: 'wordpress',
        img: "./img/wordpress/wordpress6.jpg"
    },
    {
        id:14,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design12.jpg"
    },
    {
        id:15,
        category: 'landingPage',
        img: "./img/landing page/landing-page5.jpg"
    },
    {
        id:16,
        category: 'wordpress',
        img: "./img/wordpress/wordpress7.jpg"
    },
    {
        id:17,
        category: 'webDesign',
        img: "./img/web design/web-design5.jpg"
    },
    {
        id:18,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design2.jpg",
    },
    {
        id:19,
        category: 'wordpress',
        img: "./img/wordpress/wordpress8.jpg"
    },
    {
        id:20,
        category: 'webDesign',
        img: "./img/web design/web-design6.jpg"
    },
    {
        id:21,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design3.jpg",
    },
    {
        id:22,
        category: 'landingPage',
        img: "./img/landing page/landing-page2.jpg",
    },
    {
        id:23,
        category: 'wordpress',
        img: "./img/wordpress/wordpress9.jpg",
    },
    {
        id:24,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design4.jpg",
    },
    {
        id:25,
        category: 'landingPage',
        img: "./img/landing page/landing-page7.jpg",
    },
    {
        id:26,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design5.jpg",
    },
    {
        id:27,
        category: 'webDesign',
        img: "./img/web design/web-design7.jpg",
    },
    {
        id:28,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design6.jpg",
    },
    {
        id:29,
        category: 'landingPage',
        img: "./img/landing page/landing-page3.jpg",
    },
    {
        id:30,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design7.jpg",
    },
    {
        id:31,
        category: 'wordpress',
        img: "./img/wordpress/wordpress1.jpg",
    },
    {
        id:32,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design8.jpg",
    },
    {
        id:33,
        category: 'landingPage',
        img: "./img/landing page/landing-page4.jpg",
    },
    {
        id:34,
        category: 'wordpress',
        img: "./img/wordpress/wordpress10.jpg",
    },
    {
        id:35,
        category: 'graphicDesign',
        img: "./img/graphic design/graphic-design9.jpg",
    },
    {
        id:36,
        category: 'wordpress',
        img: "./img/wordpress/wordpress2.jpg",
    }
]
let defoultImg = document.querySelectorAll('.amazing_img')
let menu = document.querySelector('.amazing_tab_menu')
let imgWrap = document.querySelector('.amazing_images')
let button = document.querySelector('.amazing_button')
let backSide = document.querySelector('.back_img_wrap')
let content = new Array();




function test(cardIndex, gal) {
    
     let card = document.createElement('div')
    card.classList.add('card')
    let imgCont = document.createElement('div')
    imgCont.classList.add('front_img')
    let img = document.createElement('img')
    img.src = gal[cardIndex].img
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
    backCategory.innerText = gal[cardIndex].category
    back.append(backCategory)
    
    content.push(gal[cardIndex])

    contentFilter()
}
let menuId = 'all'
function contentFilter() {
    content = content.filter((item, index, self) => {
        return index === self.findIndex(obj => obj.id === item.id);
    });    
}
function buttonDisable() {
    
        if (menuId === 'all' && gallery.length <= content.length) {
                button.classList.add('amazing_button_disable');
    }
    if (menuId !== 'all') {
                    let categoryAll = gallery.filter((item) => item.category === menuId)
            let contentCategory = content.filter((item) => item.category === menuId)
            if (categoryAll.length <= contentCategory.length) {
                button.classList.add('amazing_button_disable')
            }
    }
}
function addTwelve() {
    for (let item = 0; item < 12; item++) {
        test(item, gallery)
       } 
}  
addTwelve()   

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('amazing_tab_item')) {
            imgWrap.innerHTML = ''
        button.classList.remove('amazing_button_disable') 
            for (let i of menu.children) {
            i.classList.remove('amazing_tab_item_active')
        }
        event.target.classList.add('amazing_tab_item_active')
        menuId = event.target.id 
        content.forEach((item, index) => {
            if (event.target.id != 'all' && event.target.id === item.category) {
                test(index, gallery)  
                buttonDisable() 
                    }
            if (event.target.id === 'all') {
                buttonDisable() 
                test(index, gallery) 

                    }
                })
    }
}) 
     

let load = document.querySelector('.loadWrap')
let testButton = document.querySelector('.test_button')
testButton.addEventListener('click', () => {
        load.style.display = 'flex'
        testButton.style.display = 'none'   
    setTimeout(function () {
        if (menuId === 'all') {
            let contentIds = content.map(item => item.id);
        let galleryNew = gallery.filter((item) => !contentIds.includes(item.id));   
        let len = galleryNew.length > 12 ? 12 : galleryNew.length
        for (let item = 0; item < len; item++) {
            test(item, galleryNew)
        }
        if (content.length===gallery.length) {
                button.classList.add('amazing_button_disable');
            }
        } else {
        imgWrap.innerHTML = ''
            gallery.forEach((item, index) => {
                if (item.category === menuId) {
                    test(index, gallery)
                }  
            })
    buttonDisable()
        }
        load.style.display = 'none'
        testButton.style.display = 'block'      
    }, 500)
}) 



