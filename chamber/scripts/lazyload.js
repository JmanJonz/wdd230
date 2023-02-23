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