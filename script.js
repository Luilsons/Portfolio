$(document).ready(function(){
     
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        // $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // Scrolling 
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        );
    });

});

window.onload = function() {
      // Email service https://www.emailjs.com/docs/tutorial/creating-contact-form/
    emailjs.init('Mv2wpbBPAPsvxC7Zu');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        // emailjs.send("service_jy91zcb","template_fcff6rf");
        emailjs.sendForm('service_jy91zcb', 'template_fcff6rf', this)
            .then(function() {
                console.log('SUCCESS!');

            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}