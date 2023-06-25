document.addEventListener('DOMContentLoaded', injectContent());

function createListItem(
    title = null,
    subtitle = null,
    start = null,
    finish = null,
    location = null,
    description = null) {

    const itemContainer = document.createElement('div');
    itemContainer.className = 'list-group-item list-group-item-action align-items-start';

    const itemTitle = document.createElement('h5');
    itemTitle.className = 'mb-1';
    itemTitle.textContent = title;

    const itemSubtitle = document.createElement('p');
    itemSubtitle.className = 'mb-0';
    itemSubtitle.textContent = subtitle;

    const itemDates = document.createElement('p');
    itemDates.className = 'mb-0';
    itemDates.textContent = `${start}-${finish}`;

    const itemLocation = document.createElement('p');
    itemLocation.className = 'mb-1 text-secondary';
    itemLocation.textContent = location;

    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemSubtitle);
    itemContainer.appendChild(itemDates);
    itemContainer.appendChild(itemLocation);

    if (description != null) {
        const itemDescription = document.createElement('p');
        itemDescription.className = 'small text-muted';
        itemDescription.textContent = description;
        itemContainer.appendChild(itemDescription);
    }

    return itemContainer;
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

                const studyListItem = createListItem(study.degree, study.college, study.start, study.finish, study.description);

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

                const jobListItem = createListItem(job.title, job.subtitle, job.start, job.finish, job.location, job.description
                );
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

    fullName.textContent = profileData.fullname;
    mainTitle.textContent = profileData.main_title;
    urlLinkedin.href = profileData.links.url_linkedin;
    profileData.tags.forEach(element => {
        mainTags.innerHTML += '<span>#' + element + '</span> ';

    });
    myDescription.textContent = profileData.my_description;
}

// function processProjects() {
//     console.log('Procesando proyectos...');
// };