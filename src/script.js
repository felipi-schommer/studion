$(document).ready(() =>{
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 1200,
        dots: false,
        prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow:'<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };

  $('.slider').slick(slickOptions);

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