(function (app) {

    var slideIndex = 1;
    var el = document.getElementById.bind(document);
    app.elements = {
        slidShow: el('slidShow'),
        galleryBtn: el('galleryBtn'),
        plusSlide: el('plusSlide'),
        minesSlide: el('minesSlide'),
        times: el('times')
    }

    app.elements.galleryBtn.addEventListener('click', openGallry);
    app.elements.plusSlide.addEventListener('click', plusSlides);
    app.elements.minesSlide.addEventListener('click', minesSlides);
    app.elements.times.addEventListener('click', closeGallery);

    showSlides(slideIndex);

    function openGallry() {
        app.elements.slidShow.style.display = 'flex';
    }

    function closeGallery() {
        app.elements.slidShow.style.display = 'none';
    }

    function plusSlides() {
        showSlides(slideIndex += 1);
    }

    function minesSlides() {
        showSlides(slideIndex -= 1);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "flex";
    }
    
}(app = {}));