const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('pop-in');
        } else {
            entry.target.classList.remove('pop-in');
        }
    })
})

const centerSections = document.querySelectorAll('.center-element');
centerSections.forEach((el) => observer.observe(el));

const navbar = document.getElementsByClassName('top-header');
const upArrow = document.getElementById('hide-when-scrolled');

window.addEventListener("scroll", () => {
  let current = window.pageYOffset; 
  if (current > 500) {
    navbar[0].style.opacity=0;
    upArrow.style.opacity=1;
  } else {
    navbar[0].style.opacity=1;
    upArrow.style.opacity=0;
  }
});