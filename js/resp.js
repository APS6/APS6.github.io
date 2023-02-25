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
hiddenElements.forEach((el)=> observer.observe(el));

