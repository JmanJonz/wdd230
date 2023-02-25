// Lazy Load Images
const images = document.querySelectorAll("[data-source]");

const options = {
    threshold: 0.07
}

const imageObserver = new IntersectionObserver(LoadImages,options);

images.forEach((image) => {
    imageObserver.observe(image);
})

function LoadImages(entries, theObject){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.setAttribute("src", img.dataset.source);
            imageObserver.unobserve(img);
        }
    })
}

// Show User how many days since last visit
const lastVisitSpan = document.querySelector("#last_visit");
let daysSinceLastVisit = 5;
const now = new Date().getTime();

const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    daysSinceLastVisit = Math.floor((now-lastVisitDate.getTime()) / (1000 * 60 * 60 * 24));
} else {
    daysSinceLastVisit = 0;
}
lastVisitSpan.innerHTML = `${daysSinceLastVisit} Days`;
localStorage.setItem("lastVisit", new Date().toISOString());

