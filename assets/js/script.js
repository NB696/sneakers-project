const destination = document.querySelector("#destination")

const addCompanyName = (params) => {
    console.log(params)
    const h1 = document.createElement("h1")
    h1.innerText = params
    destination.appendChild(h1)
}



fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json")
    .then(response => response.json())
    .then(data => {
        addCompanyName(data.entreprise.nomCommercial)

    })
    
    // .then(data => console.log(data))

// fetch("https://api.chucknorris.io/jokes/random?category=dev")
//     .then((response) => response.json())
//     .then(data => console.log(data))