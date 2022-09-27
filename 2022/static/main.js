const sectionNames = ["about", "toolbox", "hobby-projects", "work-experience"];

let currentSection = "";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('pop-in');
            sectionNames.includes(entry.target.id) ? indicatorAccent(entry.target.id) : null;
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

function indicatorAccent(sectionName){
  sectionNames.forEach((section)=>{
    if (sectionName == section){
      document.getElementById("i"+section).style.color="#D08770";
    } else {
      document.getElementById("i"+section).style.color="#D8DEE9";
    }
  })
}

//font awesome icon looper
const icon = document.getElementById('intro-icon');
let iconIndex = 0;
const iconList = [
  "fa-brands fa-php", 
  "fa-brands fa-golang",
  "fa-brands fa-square-js",
  "fa-brands fa-docker",
];

const iconColors = [
  "#ECEFF4","#D08770","#81A1C1","#8FBCBB","#BF616A","#B48EAD"
]

async function loopIcons(){
  if (iconIndex == iconList.length) iconIndex = 0;

  if (icon.className){
    icon.style.opacity=0;
    await sleep(1000);
    icon.className="";
  } else {
    icon.className = iconList[iconIndex];
    icon.style.marginLeft=`${randomInt(1,30)}vw`;
    icon.style.marginTop=`${randomInt(1,10)}vh`;
    icon.style.color=iconColors[randomInt(1,iconColors.length)-1];
    icon.style.opacity=1;
    iconIndex +=1;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

setInterval(()=>{
  loopIcons()
}, 3000);

//modal controller
const modal = document.getElementById("tool-modal");
const centerWrapper = document.getElementsByClassName("center-wrapper");

let toolBtn = document.getElementById("laravel-btn");
const closeBtn = document.getElementsByClassName("close")[0];

toolBtn.onclick = () => {
  modal.style.display = "block";
  centerWrapper[0].style.filter = "blur(5px)";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  centerWrapper[0].style.filter = "blur(0)";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    centerWrapper[0].style.filter = "blur(0)";
  }
}