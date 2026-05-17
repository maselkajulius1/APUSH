const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener("click", () => {
    if (navbar.classList.contains('expanded')) {
        navbar.classList.remove('expanded');
        navToggle.firstElementChild.setAttribute('display', 'grid');
        navToggle.lastElementChild.setAttribute('display', 'none');
    }
    else {
        navbar.classList.add('expanded');
        navToggle.firstElementChild.setAttribute('display', 'none');
        navToggle.lastElementChild.setAttribute('display', 'grid');
    };
});

const texture = document.querySelector('.bg-texture');
const image = document.querySelector('.timeline');
const blobs = document.querySelectorAll('.bg-blob');

window.addEventListener('scroll', () => {
    const y = window.scrollY;

    texture.style.transform = `translateY(${y * -0.2}px)`;
    image.style.transform = `translateY(${y * -1}px)`;
    blobs.forEach((blob, index) => {
        const speed = index === 0 ? -0.15 : -0.6;
        blob.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
});

const textToggles = document.querySelectorAll('.text-toggle');


textToggles.forEach((textToggle) => {
    textToggle.addEventListener('click', () => {
        console.log("trying");
        const content = textToggle.parentElement.parentElement;
        const event = textToggle.parentElement.parentElement.parentElement;
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            event.classList.remove('expanded');
            textToggle.firstElementChild.setAttribute('display', 'grid');
            textToggle.lastElementChild.setAttribute('display', 'none');
        }
        else {
            content.classList.add('expanded');
            event.classList.add('expanded');
            textToggle.firstElementChild.setAttribute('display', 'none');
            textToggle.lastElementChild.setAttribute('display', 'grid');
        };
    })
});