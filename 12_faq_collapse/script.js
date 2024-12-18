const toogles = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");

toogles.forEach((toogle) => {
  toogle.addEventListener("click", () => {
    deactivateOtherFaqs();
    toogle.parentNode.classList.toggle("active");
  });
});

function deactivateOtherFaqs() {
  faqs.forEach((faq) => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    }
  });
}
