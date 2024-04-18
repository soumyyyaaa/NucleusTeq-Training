function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById("card");

            data.forEach((item) => {
                const div = document.createElement("div");
                const h4 = document.createElement("h4");
                const p = document.createElement("p");
                h4.textContent = item.title;
                p.textContent = item.body;
                div.appendChild(h4);
                div.appendChild(p);
                container.appendChild(div);
                div.classList.add("card1");
                h4.classList.add("center");
                p.classList.add("justify");
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

window.onload = fetchData;
