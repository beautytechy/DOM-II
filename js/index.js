const logoColor = document.querySelector('.logo-heading');
logoColor.addEventListener('mouseover', function (e) {
    logoColor.style.color = 'gold';
    logoColor.style.fontStyle = 'italic';

});

const pageColor = document.querySelector('header img');
pageColor.addEventListener('click', function (e) {
    pageColor.style.transform = 'scaleX(-1)';
});

const featuredimages = document.querySelector('.img-content img');
featuredimages.addEventListener('dblclick', function (e) {
    featuredimages.style.transform = 'scale(1.2)';
});
featuredimages.addEventListener('mouseleave', function (e) {
    featuredimages.style.transform = 'scale(1)';
});

window.addEventListener('resize', e => {
    const changeTitle = document.querySelector('.intro h2');
    changeTitle.textContent = "Welcome to the Party Bus"
});

const navLinks = document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mousemove', event => {
        item.style.color = 'blue';

    })
})

const alltext = document.querySelectorAll('p').forEach(item => {
    item.addEventListener('wheel', event => {
        item.style.fontSize = '2rem';
    })
})

const headings = document.querySelectorAll('.text-content').forEach(item => {
    item.addEventListener('wheel', event => {
        item.style.color = 'rebeccapurple';
    })
    event.stopPropagation();
})

const noContext = document.querySelector('.btn');
noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});

const darkMode = document.querySelector('body');
darkMode.addEventListener("keydown", e => {
    darkMode.style.background = 'black';

});

const darkMode2 = document.querySelector('body');
darkMode2.addEventListener("keyup", e => {
    darkMode2.style.color = 'white';


});

const navItems = document.querySelectorAll('a').forEach(item => {
    item.preventDefault();
})