fetch("/api/technologies")
    .then( response => response.json() )
    .then( technologies => {
        const technologiesSelector = document.getElementById("technologies");

        technologies.forEach(technology => { 
            const technologyOption = document.createElement("option");
            technologyOption.innerHTML = `
                ${technology.name}
            `;
            technologyOption.value = technology.name;
            technologiesSelector.appendChild(technologyOption);
        });
    } );

fetch("/api/projects")
    .then(response => response.json())
    .then(( projects ) => {
        const projectsWrapperDiv = document.getElementById("projects-wrapper");

        projects.map(project => { 
            const projectDiv = document.createElement("div");
            projectDiv.innerHTML = `
                <div>
                    <h3>${escapeHTML(project.name)}</h3>
                    <button>
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
        });
    });

async function deleteProject(id){
    await fetch(`/api/projects/${id}`, {
        method: "DELETE"
    })
    window.location.reload();
}

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
