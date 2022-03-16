$(document).ready(function()
{
    $('.carousel').carousel({
        interval:5000
    });
    //Show Color Option Div When Click On The Gear
    $(".gear-check").click(function()
    {
        $(".color-option").fadeToggle();
    });

    //Change Theme Color Click 
    var colorLi =  $(".color-option ul li")
    colorLi
        .eq(0).css("backgroundColor","#E41817").end()
        .eq(1).css("backgroundColor","#E426D5").end()
        .eq(2).css("backgroundColor","#009AFF")

        colorLi.click(function()
        {
            $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        });

    //Caching The Scroll Top Element

    var scrollButtom = $("#scroll-top");
    $(window).scroll(function()
    {
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 700)
        {
            scrollButtom.show();
        }
        else {
            scrollButtom.hide();
        }
    });
    //Click On Buttom
    scrollButtom.click(function()
    {
        $("html,body").animate({scrollTop:0},600);
    });

});

//Loading Screen
$(window).load(function()
{
    //Hidden h1
    $(".loading-overlay .sk-chase").fadeOut(2000,function(){
        //Hidden Section  
        $(this).parent().fadeOut(2000,function(){
            //show The Scroll
            $("body").css("overflow","auto")
            //Remove Section
            $(this).remove();
        });
    });
});

/*
//Easy Code For Loading
$(window).load(function(){
    $(".loading-overlay, .loading-overlay.sk-chase").fadeOut(2000);
});
*/

