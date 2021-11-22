async function saveProject(){
    const name = document.getElementById("name").value
    const category = document.getElementById("category").value
    const technologies = [];
    const options = document.getElementById("technologies").options;
    for(let i = 0; i < options.length; i++){
        if(options[i].selected){
            technologies.push({name: options[i].value });
        }
    }
    const project = {
        name,
        category,
        technologies
    };

    await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(project),
        headers: {
            "Content-Type": "application/json"
        }
    });
    window.location.reload();
}

async function putProject(id){
    const name = document.getElementById("name").value
    const category = document.getElementById("category").value
    const technologies = [];
    const options = document.getElementById("technologies").options;
    for(let i = 0; i < options.length; i++){
        if(options[i].selected){
            technologies.push({name: options[i].value });
        }
    }
    const project = {
        id,
        name,
        category,
        technologies
    };

    await fetch(`/api/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(project),
        headers: {
            "Content-Type": "application/json"
        }
    });
    window.location.reload();
}

async function deleteProject(id){
    await fetch(`/api/projects/${id}`, {
        method: "DELETE"
    })
    window.location.reload();
}

class Dashboard {
    constructor(){
        this.fetchTechnologies();
        this.fetchProjects();
        this.saveButton = document.getElementById("save-project-button");
        this.saveButton.onclick = (evt) => { saveProject(evt) };

        this.cancelButton = document.getElementById("cancel-project-button");
        this.cancelButton.onclick = (evt) => { this.clearForm(evt) }


        this.projects = [];
        this.technologies = [];
    }

    clearForm(evt){
        evt.preventDefault();
        document.getElementById("name").value = ""
        document.getElementById("category").value = ""
        const options = document.getElementById("technologies").options;
        for(let i = 0; i < options.length; i++){
            options[i].selected = false;
        }
        this.saveButton.onclick = (evt) => { saveProject(evt) };
        document.getElementById("title").innerText = "Create a new project";

    }

    fetchTechnologies() {
        fetch("/api/technologies")
            .then( response => response.json() )
            .then( technologies => {
                const technologiesSelector = document.getElementById("technologies");
                this.technologies = technologies;

                technologies.forEach(technology => { 
                    const technologyOption = document.createElement("option");
                    technologyOption.innerHTML = `
                        ${technology.name}
                    `;
                    technologyOption.value = technology.name;
                    technologiesSelector.appendChild(technologyOption);
                });
            } );
    }

    fetchProjects() {
        fetch("/api/projects")
            .then(response => response.json())
            .then(( projects ) => {
                const projectsWrapperDiv = document.getElementById("projects-wrapper");
                this.projects = projects;

                projects.map(project => { 
                    const projectDiv = document.createElement("div");
                    projectDiv.innerHTML = `
                        <div id="project-${project.id}">
                            <h3>${escapeHTML(project.name)}</h3>
                            <button id="edit-${project.id}">
                                Edit
                            </button>
                            <button onclick="deleteProject(${project.id})">
                                Delete
                            </button>
                        </div>
                        <p>Category: ${escapeHTML(project.category)}</p>
                        <p>Technologies: ${escapeHTML(project.technologies.map(t => t.name).join(", "))}</p>
                    `;
                    projectsWrapperDiv.appendChild(projectDiv);
                    document.getElementById("edit-" + project.id).onclick = evt => {this.editProject(project)};
                });
            });
    }


    editProject(project){
        document.getElementById("title").innerText = "Editing Project: " + project.id;
        document.getElementById("name").value = project.name
        document.getElementById("category").value = project.category
        const technologies = project.technologies.map(t => t.name);
        const options = document.getElementById("technologies").options;
        for(let i = 0; i < options.length; i++){
            if(technologies.includes(options[i].value)){
                options[i].selected = true;
            }
        }
        this.saveButton.onclick = () => { putProject(project.id) };
    }
}

new Dashboard();
