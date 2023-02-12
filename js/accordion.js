const faqs = document.querySelectorAll(".accordion");

faqs.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });
});