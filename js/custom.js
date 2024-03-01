// const IntersectionObserver = require('IntersectionObserver');
// import IntersectionObserver from 'IntersectionObserver';
// const span = document.getElementById('dark-mode-span');
// const themeToggle = document.getElementById('theme-toggle');
// const storedDarkMode = localStorage.getItem('darkMode');
// const icon = document.getElementById('theme-icon');

// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
//   sessionStorage.setItem('color', document.body.classList.contains('dark') ? 'dark' : 'light');
//   sessionStorage.getItem('color') === 'dark' ? span.textContent = 'Light Mode' : span.textContent = 'Dark Mode';
//   if (sessionStorage.getItem('color') === 'dark'){
//       icon.classList.remove('bi-moon-stars');
//       icon.classList.add('bi-sun');
//   }else{
//       icon.classList.remove('bi-sun');
//       icon.classList.add('bi-moon-stars');
//   }
// })


// if (sessionStorage.getItem('color') === 'dark') {
//     icon.classList.add('bi-sun');
//     span.textContent ='Light Mode';
//     document.body.classList.add('dark');
// }else {
//     icon.classList.add('bi-moon-stars');
// }

//animation on scroll in departments entering from left
//==========================
// let animation = 'fadeInUp';
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         // console.log(animation);
//         if (entry.isIntersecting) {
//             entry.target.classList.add(animation);
//         } else {
//             entry.target.classList.remove(animation);
//         }
//     });
// });

// const departments = document.querySelectorAll('.scroll-animate');
// departments.forEach((el) => observer.observe(el));

function animateEntry(entry, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            } else {
                entry.target.classList.remove(animationClass);
            }
        });
    });
    observer.observe(entry);
}

let scrollEntries = document.querySelectorAll('.scroll-animate');

let classNames = ['pulse', 'fadeIn', 'fadeInRight', 'fadeInLeft', 'bounceIn', 'bounceInRight', 'swing', 'lightSpeedInLeft'];

scrollEntries.forEach(entry => {
    const animation = className => {
        if (entry.classList.contains(className)) {
            animateEntry(entry, className);
            entry.style.cssText = 'opacity: 1; filter: blur(0);';
        }    
    };

    classNames.forEach(className => {
        animation(className);
    });
});

let parentEntries = document.querySelectorAll('.staggered');

parentEntries.forEach((parent, index) => {
    let childEntries = parent.children;

    Array.from(childEntries).forEach((entry, i) => {
        const animation = (className, delay) => {
            if (entry.classList.contains(className)) {
                animateEntry(entry, className, delay);
                entry.style.cssText = 'opacity: 1; filter: blur(0);';
            }    
        };

        classNames.forEach((className) => {
            animation(className, i * 100 + index * 500); // staggered delay
        });
    });
});
