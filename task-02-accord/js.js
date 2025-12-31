
$(function(){
    var value = 0;
    var fountsize = 16;

    $("#plus").click(function(){
        value++;
        fountsize++;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  
    $("#Miuns").click(function(){
        value--;
        fountsize--;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  
    $("#reset").click(function(){
        value= 0;
        fountsize = 16;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  


});


/*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1100) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });