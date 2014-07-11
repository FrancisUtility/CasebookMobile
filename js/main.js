$(function(){
    var anchorLink = $('a'),
        btn = $('button[data-role="link"]')

    anchorLink.on('click',function(){
        var type = $(this).attr('data-type');
        $('fieldset').hide();
        $("." + type).removeClass('hide').show();
    });
    btn.on('click',function(){
        var type = $(this).attr('data-type');
        $('fieldset').hide();
        $("." + type).removeClass('hide').show();
    });

    $('.btnlogin').on('click',function(){
        window.location = "landing.html";
    });


});
