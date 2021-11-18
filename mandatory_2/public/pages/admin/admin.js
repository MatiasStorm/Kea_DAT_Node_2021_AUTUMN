function login(evt){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    fetch("/api/admin",{
        method: "POST",
        body: JSON.stringify({username, password}),
        redirect: "follow",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if(response.redirected){
            window.location.href = response.url;
        }
    })
}


