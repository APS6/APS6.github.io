burger = document.querySelector('.burger')
sidebar = document.querySelector('.sidebar')

burger.addEventListener('click', () => {
    sidebar.classList.toggle("active");
    burger.classList.toggle("active")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } else {
             entry.target.classList.remove('show');
         }
     });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
