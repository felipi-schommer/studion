$(document).ready(() =>{
  // menu

  $('.navbar__menu-btn').on('click', function(){
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass("fa-bars");
    $(this).find('i').toggleClass("fa-times");

  });





  
  // carousel
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 1200,
        dots: $(".slider.slider_dots").length ? true : false,
        prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow:'<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };

  $('.slider').slick(slickOptions);

  const counterOptions = {
    delay: 10,
    time: 1000,
  };

  setInterval (() => {
    const numbersCollection = document.querySelectorAll (".counter__number");

    numbersCollection.forEach ((number) => {
      const currentNumber = parseInt (number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);


  $('.footer_btn-submit').on('click', () =>{
    const email = $("#email").val();
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : email,
        Subject : "Pleas add me to your newsletter",
        Body : `Olá,
        Eu gostaria de ser adicionado na newsletter do site.
        meu email é ${email}.
        
        
        Obrigado!
        `,
    }).then(
    message => alert(message)
    );
  });
});