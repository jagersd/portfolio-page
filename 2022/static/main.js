const sectionNames = ["about", "toolbox", "hobby-projects", "work-experience"];

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
  const current = window.pageYOffset; 
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
      document.getElementById("i"+section).style.color="#1BA098";
    } else {
      document.getElementById("i"+section).style.color="#8296A4";
    }
  })
}

//font awesome icon looper
const icon = document.getElementById('intro-icon');
let iconIndex = 0;
const iconList = [
  "fa-brands fa-docker",
  "fa-brands fa-golang",
  "fa-brands fa-php", 
  "fa-brands fa-square-js",
  "fa-brands fa-vuejs",
  "fa-brands fa-laravel",
  "fa-brands fa-ubuntu",
  "fa-brands fa-gitlab",
  "fa-brands fa-git",
];

const iconColors = [
  "#ECEFF4","#DEB992","#123259","#1BA098","#701E2A","#DA92A4"
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
}, 1500);

//modal controller
const modal = document.getElementById("tool-modal");
const centerWrapper = document.getElementsByClassName("center-wrapper");

const toolBtns = document.querySelectorAll('.toolbox-btn');
const closeBtn = document.getElementsByClassName("close")[0];


toolBtns.forEach((toolBtn)=>{
  toolBtn.onclick = () => {
    changeModalContent(toolBtn.id);
    modal.style.display = "block";
    centerWrapper[0].style.filter = "blur(5px)";
  }
})

function changeModalContent(id){
  document.getElementById('modal-title').innerText=toolBoxModalContent[id].title;
  document.getElementById('modal-text').innerHTML=toolBoxModalContent[id].Content;
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

const toolBoxModalContent = {
  "laravel-btn":{
    "title":"Laravel",
    "Content":`This is the only PHP framework where I have hands-on experience with and was a great way to get into making complete application on the web. 
    Because it has all batteries included, I now know which aspects to account for when creating an application from scratch. The included ORM is simply amazing as well.`
  },
  "vue-btn":{
    "title":"Vue",
    "Content":`Because I work mostly on the backend, my experience with this is limited. However the complete "nogwat app" (see projects) was build using Vue in combination with Ionic.
    Because having a proper user experience is equally important to backend logic I decided to pick a JavaScript framework for larger projects and Vue was pretty easy and enjoyable to get into.
    Like everything else, hard to master.`
  },
  "php-btn":{
    "title":"PHP",
    "Content":`This was the first programming language I got the chance to work with and I still think it is great for any type of web based project.
In a professional capacity I used it for a lot of one-off scripts and I have built some web applications with it. The latter mostly through Laravel.`
  },
  "javascript-btn":{
    "title":"JavaScript",
    "Content":`When working on the web, you don't want to avoid learning JavaScript. Allthough I have not yet gotten into Node (or Bun) that much, I write things in Vanilla JavaScript
    regularly for the frontend (like this page) or through Vue. It is something Id like to dive into a little deeper since it is basically used everywhere now a days.`
  },
  "go-btn":{
    "title":"Go!",
    "Content":`Go has very rapidly become my 'go to' language for anything outside of the 'scripting' realm. It lets itself write as conveniently as interpreted languages but provides performance when needed. Why would I not want strict typing ever? And the fact that it easily allows for concurrent design is just a bonus to me.`
  },
  "bash-btn":{
    "title":"Bash",
    "Content":`The ever present assistant for scripting needs. I rarely use it for complex requirements or even as part of a piece of software. But for every one-off execution, this is my first consideration when selecting tooling.`
  },
  "tf-btn":{
      "title":"Terraform",
      "Content":`In professional working capacity I work with Terraform daily provishioning multiple layers or our infrastructure.
          So when embarking on an adventure setting up a multicluster K3s homelab, it made most sense to be to start declaring everything through HCL as well.`
  },
  "ansible-btn":{
    "title":"Ansible",
    "Content": `When it comes to Ansible, I'm a novice. It is a very nice piece of tech and has already been used for a long time. I use it to send instructions to my multie node Homelab cluster running OpenSuse Leap. Every time I need something, Ill look up the documentation and attempt to fully understand it before setting it free on me setup.`
  },
  "k8s-btn":{
    "title":"Kubernetes",
    "Content":`Just like docker, this piece of tech changed the game. I use Kubernetes (managed by GCP) on a professional capacity and through the K3s distrobution for my personal infrastructure. After a few years of working with K8s, I still don't understand all of it, but every time I learn something new, the logic makes a lot of sense. It is essential to efficient scaling. `
  },
  "docker-btn":{
    "title":"Docker",
    "Content":`When trying out Docker for the first time somewhere in 2020, a whole new world of options opened up.
    When working on a project, I almost always create a docker file to have some items (like the database) running to replicate the production environment for that project.
    Also when experimenting with new tooling, I use an Ubuntu or Alpine image to try it out before I decide to install it on my hardware directly for example.`
  },
  "db-btn":{
    "title":"Databasing",
    "Content":`I have most experience with MySQL but also worked with PostgreSQL through CockRoachDB and have experimented with MongoDB purely out of curiosity.
    Allthough this made my somewhat handy with SQL and datamanipulation on larger scale, I still want to learn more about optimization (indexing and such) and maintainance.`
  },
  "linux-btn":{
    "title":"Linux",
    "Content":`Both for personal as professional use my OS of choice is Linux. For those with a bit of interest in what goes on 'under the hood' I am convinced
     that Linux a lot more pleasant to use than the alternatives. That it free (as in beer) and open source is very nice but would not chance this for me.
     I have experience with the Debian based distrobutions as well as OpenSuse.`
  },
  "gcp-btn":{
    "title":"Cloud infra",
    "Content":`At my place of work, I have been introduced to the magic of hosting in infrastructure in the Cloud (GCP) half way through the year 2021.
    This experience also made me want to experiment with my hobby projects, resulting in some items being hosted on <a href="https://www.scaleway.com/en/" target="about_blank">Scaleway</a>. Their serverless container service offering is awesome for these kinds of projects.`
  },
}

const gopher = document.getElementById("gopher")
gopher.addEventListener("click", ()=>{
    const r = randomInt(50, 500);
    gopher.style.top=r+"%";
})
