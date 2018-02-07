function hideImage() {
    document.getElementById('puppy').style.display = 'none';
}

function showImage() {
    document.getElementById('puppy').style.display = 'inline-block';
}

function fadeImageIn() {
    $('#puppy').hide();
    $('#puppy').fadeIn(2000);
}

function fadeImageOut() {
    var x = document.getElementById("mySpeed").value;
    x = Number(x);
    console.log(x);

    $('#puppy').show();
    $('#puppy').fadeOut(x);

    document.getElementById("speedInfo").innerHTML = x;
}



function scrollToBottom() {
    var topOfDiv = $('#div-2').offset().top;
    console.log(scrollTop);
    // console.log("Top:", topOfDiv);
    $('body').animate({scrollTop: topOfDiv}, 1000);
    return false;
    /*
    scrollTop: adjusts the position of the scroll bar
    offset(): current position of the element
    top: top of the element
    */
}

function scrollToTop() {
    var topOfDiv = $('#div-1').offset().top;
    console.log("Top:", topOfDiv);
    $('body').animate({scrollTop: topOfDiv}, 1000);
    return false;
}



$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".div-3").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 2000;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.div-4').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});