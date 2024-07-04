const faqBox = document.getElementsByClassName("faq-box")
for (i = 0; i < faqBox.length; i++) {
    faqBox[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


const swiper = new Swiper('.swiper', {

    slidesPerView: 3,
    spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});