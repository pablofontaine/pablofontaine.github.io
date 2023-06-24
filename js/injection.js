document.addEventListener('DOMContentLoaded', injectContent());

function createListItem(title, status, start, finish, where, description = null) {
    const GlobalListItem = document.createElement('div');
    GlobalListItem.className = 'list-group-item list-group-item-action flex-column align-items-start';

    const itemMainContainer = document.createElement('div');
    itemMainContainer.className = 'd-flex w-100 justify-content-between';

    const itemTitle = document.createElement('h6');
    itemTitle.className = 'mb-1';
    itemTitle.textContent = title;

    const itemMainInfo = document.createElement('p');
    itemMainInfo.className = 'mb-1';
    itemMainInfo.textContent = `${start}-${finish} | ${where}`;

    const itemBadgeStatus = document.createElement('span');
    itemBadgeStatus.className = 'badge';
    itemBadgeStatus.textContent = status;
    itemBadgeStatus.classList.toggle('text-bg-primary', status === 'En curso');
    itemBadgeStatus.classList.toggle('text-bg-success', status !== 'En curso');

    GlobalListItem.appendChild(itemMainContainer);
    itemMainContainer.appendChild(itemTitle);
    itemMainContainer.appendChild(itemBadgeStatus);
    GlobalListItem.appendChild(itemMainInfo);

    if (description != null) {
        const itemDescription = document.createElement('small');
        itemDescription.className = 'text-muted';
        itemDescription.textContent = description;
        GlobalListItem.appendChild(itemDescription);
    }

    return GlobalListItem;
}

function createToolOrTechnology(name, frequency_of_use = null, ability) {

    const toolOrTechnologyItem = document.createElement('div');
    toolOrTechnologyItem.className = 'list-group-item list-group-item-action flex-column align-items-start';

    const itemMainContainer = document.createElement('div');
    itemMainContainer.className = 'd-flex w-100 justify-content-between';

    const itemName = document.createElement('h6');
    itemName.className = 'mb-1';
    itemName.textContent = name;

    toolOrTechnologyItem.appendChild(itemMainContainer);
    itemMainContainer.appendChild(itemName);

    if (ability != null) {
        const itemAbility = document.createElement('small');
        itemAbility.className = 'text-muted';
        itemAbility.textContent = ability;
        toolOrTechnologyItem.appendChild(itemAbility);
    }

    return toolOrTechnologyItem;
}

function injectContent() {

    // Load profile data
    var profileData = {};
    fetch('./../db_local/main.json')
        .then(response => response.json())
        .then(data => {
            profileData.fullname = data.fullname;
            profileData.main_title = data.main_title;
            profileData.links = data.links;
            profileData.tags = data.tags;
            profileData.my_description = data.my_description;

            document.title = `${data.fullname}`;

            processProfile(profileData);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON (profileData):', error);
        });

    // Load studies data
    fetch('./../db_local/studies.json')
        .then(response => response.json())
        .then(data => {
            const divStudies = document.getElementById('list-studies');

            data.forEach(study => {

                const studyListItem = createListItem(study.degree, study.status,
                    study.start, study.finish, study.college, study.description);

                divStudies.appendChild(studyListItem);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON (studyData):', error);
        });

    // Load jobs data
    fetch('./../db_local/jobs.json')
        .then(response => response.json())
        .then(data => {
            const divStudies = document.getElementById('list-jobs');

            data.forEach(job => {

                const jobListItem = createListItem(job.degree, job.status,
                    job.start, job.finish, job.college, job.description);

                divStudies.appendChild(jobListItem);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON (jobsData):', error);
        });

    // Load tools data
    fetch('./../db_local/tools.json')
        .then(response => response.json())
        .then(data => {
            const divTools = document.getElementById('list-tools');

            data.forEach(tool => {
                const toolListItem = createToolOrTechnology(tool.title, tool.frequency_of_use,
                    tool.ability);

                divTools.appendChild(toolListItem);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON (toolsData):', error);
        });

    // Load technologies data
    fetch('./../db_local/technologies.json')
        .then(response => response.json())
        .then(data => {
            const divTechnologies = document.getElementById('list-technologies');

            data.forEach(tech => {
                const techListItem = createToolOrTechnology(tech.title, tech.frequency_of_use,
                    tech.ability);

                divTechnologies.appendChild(techListItem);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON (toolsData):', error);
        });



    // processProjects();
    console.log('¡Todo ha finalizado!');
};


function processProfile(profileData) {
    const fullName = document.getElementById('fullname');
    const mainTitle = document.getElementById('main-title');
    const urlLinkedin = document.getElementById('url-linkedin');
    const mainTags = document.getElementById('main-tags');
    const myDescription = document.getElementById('my-description');

    fullName.innerHTML = profileData.fullname;
    mainTitle.innerHTML = profileData.main_title;
    urlLinkedin.href = profileData.links.url_linkedin;
    profileData.tags.forEach(element => {
        mainTags.innerHTML += '<span>#' + element + '</span> ';

    });
    myDescription.innerHTML = profileData.my_description;
}

// function processProjects() {
//     console.log('Procesando proyectos...');
// };