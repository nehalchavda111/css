$(document).ready(function (){
    $('.menu-toggel').on('click', function (){
        $('ul').toggleClass('show');

    })
})

$(document).ready(function (){
    $('ul').on('click', function (){
        $('ul').toggleClass('show');
    })
})
