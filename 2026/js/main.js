const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const progressBar = document.querySelector('.progress-bar');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX - 4 + 'px';
    cursorDot.style.top = mouseY - 4 + 'px';
});

function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.4;
    outlineY += (mouseY - outlineY) * 0.4;
    
    cursorOutline.style.left = outlineX - 20 + 'px';
    cursorOutline.style.top = outlineY - 20 + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'scale(1.5)';
        cursorOutline.style.borderColor = 'var(--aqua)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'scale(1)';
        cursorOutline.style.borderColor = 'var(--green)';
    });
});

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.about-item, .project-card, .skill-btn, .stat-item, .timeline-item').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, i) => {
    shape.style.animationDelay = `${i * -5}s`;
});

// ============================================
// SKILL MODAL - Edit descriptions here
// ============================================
const skillContent = {
    go: {
        title: "Go",
        text: "Go has very rapidly become my 'go to' language for anything outside of the 'scripting' realm. It has become the lingua franca of cloud native development. Strictly typed, performant and portable. I enjoy writing solutions with Go a lot."
    },
    bash: {
        title: "Bash",
        text: "The ever present assistant for scripting needs. I rarely use it for complex requirements or even as part of a piece of software. But for every one-off execution, this is my first consideration when selecting tooling."
    },
    javascript: {
        title: "JavaScript",
        text: "When working on the web, you want to learn JavaScript. Although I have not yet gotten into Node (or Bun) that much, I write things in Vanilla JavaScript regularly for the frontend (like this page) or through Vue. It is something I'd like to dive into a little deeper since it is basically used everywhere nowadays."
    },
    php: {
        title: "PHP",
        text: "This was the first programming language I got the chance to work with and I still think it is great for any type of web based project. In a professional capacity I used it for a lot of one-off scripts and I have built some web applications with it. The latter mostly through Laravel."
    },
    htmlcss: {
        title: "HTML/CSS",
        text: "The foundation of the web. I have a good understanding of semantic HTML and modern CSS including Flexbox, Grid, and animations. I prefer writing custom CSS over using frameworks."
    },
    sql: {
        title: "SQL",
        text: "Experience with writing complex queries, joins, and subqueries. I understand database design principles and have worked with various relational database systems."
    },
    terraform: {
        title: "Terraform",
        text: "In professional working capacity I work with Terraform daily provisioning multiple layers of our infrastructure. So when embarking on an adventure setting up a multicluster K3s homelab, it made most sense to me to start declaring everything through HCL as well."
    },
    ansible: {
        title: "Ansible",
        text: "When it comes to Ansible, I'm a novice. It is a very nice piece of tech and has already been used for a long time. I use it to send instructions to my multi-node Homelab cluster running OpenSuse Leap. Every time I need something, I'll look up the documentation and attempt to fully understand it before setting it free on my setup."
    },
    helm: {
        title: "Helm",
        text: "I use Helm for managing Kubernetes applications. I've created and modified charts for deploying services in my homelab and professional environments."
    },
    kubernetes: {
        title: "Kubernetes",
        text: "Just like docker, this piece of tech changed the game. I use Kubernetes (managed by GCP) on a professional capacity and through the K3s distribution for my personal infrastructure. After a few years of working with K8s, I still don't understand all of it, but every time I learn something new, the logic makes a lot of sense. It is essential to efficient scaling."
    },
    docker: {
        title: "Docker",
        text: "When trying out Docker for the first time somewhere in 2020, a whole new world of options opened up. When working on a project, I almost always create a docker file to have some items (like the database) running to replicate the production environment for that project. Also when experimenting with new tooling, I use an Ubuntu or Alpine image to try it out before I decide to install it on my hardware directly."
    },
    linux: {
        title: "Linux",
        text: "Both for personal as professional use my OS of choice is Linux. For those with a bit of interest in what goes on 'under the hood' I am convinced that Linux is a lot more pleasant to use than the alternatives. That it is free (as in beer) and open source is very nice but would not change this for me. I have experience with the Debian based distributions as well as OpenSuse. The latter I have a preference for but the first one just seems to be more frequently used professionally. Somehow Rhel has yet avoided me."
    },
    cloud: {
        title: "Cloud Platforms",
        text: "At my place of work, I have been introduced to the magic of hosting infrastructure in the Cloud (GCP) halfway through the year 2021. This experience also made me want to experiment with my hobby projects, resulting in some items being hosted on Scaleway. Their serverless container service offering is awesome for these kinds of projects."
    },
    gcp: {
        title: "Google Cloud Platform",
        text: "Of all the larger cloud provided I worked with GCP the most. Managing cloud infrastructure and deploying applications on GKE. I also have experience with Compute Engine, Cloud Run, GKE, and various other GCP services."
    },
    postgresql: {
        title: "PostgreSQL",
        text: "My go-to relational database since the conception of the CloudNativePG project. I have experience with advanced PostgreSQL features including JSON types, window functions, and performance optimization."
    },
    mysql: {
        title: "MySQL",
        text: "I have worked extensively with MySQL in professional environments. I understand indexing, query optimization, and database design principles."
    },
    cockroachdb: {
        title: "CockroachDB",
        text: "Experimented with CockroachDB as a distributed SQL solution. I appreciate its ability to provide strong consistency across geographic regions and its free tier for testing and personal hobby projects."
    },
    neovim: {
        title: "Neovim",
        text: "My editor of choice. I've customized it extensively with Lua plugins and use it for all my development work. The combination of keyboard-driven workflow and extensibility makes it perfect for my needs."
    },
    insomnia: {
        title: "Insomnia",
        text: "Excellent API client for testing REST APIs. I use it daily for development and debugging of backend services."
    },
    ubuntu: {
        title: "Ubuntu",
        text: "In 2020 I got the opportunity to contribute to bear metal server management for a large saas application. All service where clustered over multiple machines. They had one thing in common: It runs Ubuntu. However, on my personal hardware (both desktop and server) I run varieties OpenSuse."
    },
    git: {
        title: "Git",
        text: "Essential for any modern development workflow. I'm comfortable with branching strategies, merge conflicts, and collaborative workflows using GitHub."
    },
    argocd:{
        title: "ArgoCD",
        text: "I use ArgoCD for continuous deployment in Kubernetes environments. It allows me to manage application deployments declaratively and ensures that the desired state is maintained. Recently I created <a href='https://gist.github.com/jagersd/12cfc8e478248cba78ed12fc9fc49d5f' target='_blank' rel='noopener noreferrer'> this </a> bash script in order to setup a local sandbox through using Kind, Cilium, Gitea and ArgoCD for educational or testing purposes. Feel free to use it if this sounds helpfull to you.",
    },
    gitlabci: {
        title: "GitLab-ci",
        text: "Allthough I recently work more often with github Actions, I've got more experience with gitlab's CI capabilities. I have set up pipelines for building, testing, and deploying applications in GitLab CI/CD."
    },
    githubactions: {
        title: "GitHub Actions",
        text: "Currenly Im trying to get more familiar with github actions because this seems to be more frequently used by organization served by the company I work for."
    }
};

// Modal functionality
const modal = document.getElementById('skill-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.skill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const skill = btn.dataset.skill;
        if (skillContent[skill]) {
            modalTitle.textContent = skillContent[skill].title;
            modalText.innerHTML = skillContent[skill].text;
            modal.classList.add('active');
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
