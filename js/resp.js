// burger animation
burger = document.querySelector('.burger')
sidebar = document.querySelector('.sidebar')

burger.addEventListener('click', () => {
    sidebar.classList.toggle("active");
    burger.classList.toggle("active")
})

// scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// break website
press = document.querySelector('#press')
bonk = document.querySelector('#bonk')
boom = document.querySelector('#boom')
tex = document.querySelector('#mess')

press.addEventListener('click', () => {
    boom.classList.add("boom");
    bonk.classList.add("blady");
    tex.classList.add("show");
})

// fix website
safe = document.querySelector('#recover')
bonk = document.querySelector('#bonk')
tex = document.querySelector('#mess')
safe.addEventListener('click', () => {
    bonk.classList.remove("blady");
    tex.classList.remove("show");
    boom.classList.remove("boom");

})

// blob
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}