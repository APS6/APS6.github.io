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



// hacker effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("p").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interva = null;

document.querySelector("#x").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interva);
  
  interva = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.valu[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.valu.length){ 
      clearInterval(interva);
    }
    
    iteration += 1 / 3;
  }, 30);
}


const lette = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interv = null;

document.querySelector("#y").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interv);
    
    interv = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.val[index];
          }
        
          return lette[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.val.length){ 
        clearInterval(interv);
      }
      
      iteration += 1 / 3;
    }, 30);
  }

