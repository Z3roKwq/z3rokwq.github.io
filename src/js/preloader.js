document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';

        document.querySelector('.main').style.display = 'initial';
        document.querySelector('.container').style = `
            background-image: url("assets/images/background.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        `;
    }, 2000);
});
