// Reference to a list of all the images with data-src attribute
const imageReferenceList = document.querySelectorAll("[data-src]");

// Creating Options for the Int...Obser object
const imageOptions = {
    rootMargin: "0px 0px 5px 0px",
    threshold: 0
};

// Creating IntObs object and passing in an arrow function for what to do when intersect, and options.
// The arrow function receives two arguments from the IntObser object the first being an array of the elements being observed, and the second is a reference to the instance of the class itself so that it can be used withing the socope of the arrow callback function.
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const intersectingElement = entry.target;
            const dataSrc = intersectingElement.getAttribute("data-src");
            setTimeout(() => {
                console.log("Intersected")
                intersectingElement.setAttribute("src", dataSrc);
                intersectingElement.classList.add("loaded");
                imageObserver.unobserve(intersectingElement);
            }, 1000);
        }
    })
}, imageOptions);

// Adding elements to be observed
imageReferenceList.forEach((image) => {
    imageObserver.observe(image);
})


// imageReferenceList.forEach(image => {
//     const dataSrc = image.getAttribute("data-src");
//     image.setAttribute("src", dataSrc);
// });