async function fetching() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);

        data.forEach((item) => {
            let button = document.createElement("button");
            button.innerHTML = `Show Info for ${item.name}`;
            document.body.appendChild(button);
            let h1 = document.createElement("button");
            h1.innerHTML = `${item.name} - <span>${item.email}</span> `;
            div.appendChild(button);
            button.addEventListener("click", fetching);
        });

    } catch (error) {
        console.log(error);
    }
}



fetching();

