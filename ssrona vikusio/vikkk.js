const button = document.getElementById("galleryButton");
const gallery = document.getElementById("galleryWrapper");

button.addEventListener("click", function () {

    gallery.classList.toggle("active");

    if (gallery.classList.contains("active")) {

        button.innerHTML = "ФУ ВУБІЛІ";

    } else {

        button.innerHTML = "❤️ Нажми ТУТ ❤️";

    }

});
