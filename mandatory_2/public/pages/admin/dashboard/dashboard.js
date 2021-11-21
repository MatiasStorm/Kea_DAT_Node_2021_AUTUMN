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
