function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            posts.sort((a, b) => a.userId - b.userId);
            const postsByUser = {};
            const grid = document.getElementById("grid");
            posts.forEach((post) => {
                if (!postsByUser[post.userId]) {
                    postsByUser[post.userId] = [];
                }
                postsByUser[post.userId].push(post);
            });

            for (const userId in postsByUser) {
                const mainDiv = document.createElement("div");
                const carouselInner = document.createElement("div");
                var isFirstPost = true;
                postsByUser[userId].forEach((post) => {
                    const carouselItem = document.createElement("div");
                    const h4 = document.createElement("h4");
                    const h5 = document.createElement("h5");
                    const p = document.createElement("p");
                    h4.textContent = `User Id: ${post.userId}`;
                    h5.textContent = post.title;
                    p.textContent = post.body;
                    h4.classList.add("center");
                    h5.classList.add("center");
                    p.classList.add("justify");
                    carouselItem.appendChild(h4);
                    carouselItem.appendChild(h5);
                    carouselItem.appendChild(p);
                    carouselInner.appendChild(carouselItem);
                    carouselInner.setAttribute("class", "carousel-inner");
                    if (isFirstPost) {
                        carouselItem.classList.add("carousel-item", "active");
                        isFirstPost = false;
                    } else {
                        carouselItem.classList.add("carousel-item");
                    }
                });
                mainDiv.appendChild(carouselInner);
                mainDiv.setAttribute("id", "carouselExampleSlidesOnly");
                mainDiv.classList.add("carousel", "slide");
                mainDiv.setAttribute("data-bs-ride", "carousel");
                grid.appendChild(mainDiv);
            }
            $(".carousel").carousel();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

window.onload = fetchData;
