// Your data (replace with your own information)
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const experience = [
    { position: 'Frontend Developer', company: 'ABC Company', year: '2021 - Present' },
    { position: 'Junior Developer', company: 'XYZ Inc.', year: '2019 - 2021' }
];
const projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' }
];

// Function to display skills
function displaySkills() {
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Function to display work experience
function displayExperience() {
    const experienceList = document.getElementById('experience-list');
    experience.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = `${exp.position} at ${exp.company} (${exp.year})`;
        experienceList.appendChild(li);
    });
}

// Function to display projects
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectsList.appendChild(li);
    });
}

// Display the data
displaySkills();
displayExperience();
displayProjects();
