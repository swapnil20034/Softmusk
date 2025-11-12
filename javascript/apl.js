let btn = document.getElementById("btn");
async function fetching() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);

    data.forEach((item) => {
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      h1.innerHTML = `${item.name} - <span>${item.email}</span> `;
      div.appendChild(h1);
      document.body.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }

}
btn.addEventListener("click", fetching);