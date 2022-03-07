const projects=
[
    {
        title:'comfy store',
        img:'./images/comfy-store.jpg',
        link: './comfyStore/index.html'
    },
    {
        title:'future fit',
        img:'./images/future-fit.jpg',
        link: './futureFit/index.html'
    },
    {
        title:'infinite-scroll',
        img:'./images/infinite-scroll.jpg',
        link: './infinityScroll/index.html'
    },
    {
        title:'joke teller',
        img:'./images/joke-teller.jpg',
        link: './jokeTeller/index.html'
    },
    {
        title:'light-dark mode',
        img:'./images/light-dark-mode.jpg',
        link: './lightDarkMode/index.html'
    },
    {
        title:'music player',
        img:'./images/music-player.jpg',
        link: './musicPlayer/index.html'
    },
    {
        title:'picture in picture',
        img:'./images/picture-in-picture.jpg',
        link: './pictureInPicture/index.html'
    },
    {
        title:'quote generator',
        img:'./images/quote-generator.jpg',
        link: './quoteGenerator/index.html'
    },
]
const projectsContainer = document.querySelector('.projects-container')
const date = document.querySelector('#date')
const project =projects.map((item)=>{ 
    return `<a href=${item.link} class= 'project' target='_blank'>
         <img src=${item.img} class='project-img'>
         <h3 class='project-title'>${item.title}</h3>
        </a>`
}).join('')
const projectLink= document.querySelector('.project')
projectsContainer.innerHTML= project

date.textContent= new Date().getFullYear()
