//scrollovanie

var menu = $('.menu');
var menuLinks = menu.find('a');

menuLinks.on('click',function(event){
    $('html, body').animate({ scrollTop: $(this.hash).offset().top},1000,function() {
        window.location.hash = this.hash;
    });
    event.preventDefault();

    
});

