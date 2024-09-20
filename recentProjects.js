// Unlike in React, you cannot import JSON files as modules in vanilla JS
const allProjects = [
    {
        title: "Portfolio.io",
        description: "A full-stack web app for creating and sharing portfolios with your friends! Made using React and Django.",
        image: "/assets/img/portfolio-io.png",
        github: "https://github.com/CharlesYuan02/portfolio.io",
        demo: "https://github.com/CharlesYuan02/portfolio.io",
        date: "2024-09-09"
    },
    {
        title: "Mango10K",
        description: "A chatbot to help retail investors effectively digest company 10-Ks and 10-Qs. Made for the 2024 MongoDB GenAI Hackathon.",
        image: "/assets/img/mango10k.png",
        github: "https://github.com/CharlesYuan02/Mango10K",
        demo: "https://www.linkedin.com/posts/daniel-chen297_on-april-6th-we-created-mango10k-at-activity-7184621025626615808-aZ97/?utm_source=share&utm_medium=member_desktop",
        date: "2024-04-27"
    },
    {
        title: "Mary (Discord Bot)",
        description: "A Discord bot I made in Go. Her name is Mary.",
        image: "/assets/img/mary.png",
        github: "https://github.com/CharlesYuan02/mary-bot",
        demo: "https://discord.com/oauth2/authorize?client_id=1038557818200019025&permissions=8&scope=bot",
        date: "2022-11-12"
    }
];

// Sort projects by date in descending order
allProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

let isFirstProjectLoaded = false;

function createProjectCard(project, isCenter = false) {
    const centerClass = isCenter ? 'col s12 m8 offset-m2 l6 offset-l3' : 'col s12 m6 l4';
    return `
    <div class="${centerClass}">
        <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${project.image}" style="height: auto; width: 100%">
        </div>
        <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}</span>
            <p>${project.description}</p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small></span>
            <ul>
            <li>Project details here</li>
            </ul>
            <div class="card-action">
            <a aria-label="Visit ${project.title} website" href="${project.demo}" target="_blank" data-position="top" data-tooltip="View Online"
                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
            <a aria-label="Visit the GitHub repo for ${project.title} project" href="${project.github}" target="_blank" data-position="top" data-tooltip="View Source"
                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
            </div>
        </div>
        </div>
    </div>
    `;
}

function loadProjects() {
    const recentProjectsContainer = document.getElementById('recent-projects');
    
    if (!isFirstProjectLoaded) {
    // Load only the first project, centered
    const firstProjectHTML = createProjectCard(allProjects[0], true);
    recentProjectsContainer.innerHTML = firstProjectHTML;
    isFirstProjectLoaded = true;
    } else {
    // Load the rest of the projects
    recentProjectsContainer.innerHTML = ''; // Clear existing content
    allProjects.forEach((project, index) => {
        const projectHTML = createProjectCard(project);
        recentProjectsContainer.innerHTML += projectHTML;
    });
    
    // Hide the "Load More" button after all projects have been loaded
    document.getElementById('load-more').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProjects(); // Load the first project
    
    document.getElementById('load-more').addEventListener('click', loadProjects);
});