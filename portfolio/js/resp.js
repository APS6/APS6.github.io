burger = document.querySelector('.burger')
sidebar = document.querySelector('.sidebar')

burger.addEventListener('click', () => {
    sidebar.classList.toggle("active");
    burger.classList.toggle("active")
})