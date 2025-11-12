const searchkey="YEKyxvgvKsl4aMQs07nLQkKS-LxavO8sT8uOqAlXyAs";

document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value;
    fetchPhotos(query);
});

async function fetchPhotos(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${searchkey}`);
    const data = await response.json();
    console.log(data);
    displayPhotos(data.results);
}

function displayPhotos(photos) {
    const photoResults = document.getElementById("photoResults");
    photoResults.innerHTML = "";

    photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        img.classList.add("photo");
        photoResults.appendChild(img);
    });
}
