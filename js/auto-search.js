$(function() {
    var alreadyFilled = false;
    var restaurants = ['Bon Chon', 'Kebab Express', 'Kenny Rodgers', 'KFC', 'McDonalds'];

    function initDialog() {
        clearDialog();
        for (var i = 0; i < restaurants.length; i++) {
            $('.dialog').append('<div>' + restaurants[i] + '</div>');
        }
    }
    function clearDialog() {
        $('.dialog').empty();
    }
    $('.autocomplete input').click(function() {
        if (!alreadyFilled) {
            $('.dialog').addClass('open');
        }

    });
    $('body').on('click', '.dialog > div', function() {
        $('.autocomplete input').val($(this).text()).focus();
        $('.autocomplete .close').addClass('visible');
        alreadyFilled = true;
    });
    $('.autocomplete .close').click(function() {
        alreadyFilled = false;
        $('.dialog').addClass('open');
        $('.autocomplete input').val('').focus();
        $(this).removeClass('visible');
    });

    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < restaurants.length; i++) {
            if (restaurants[i].toLowerCase().startsWith(str)) {
                $('.dialog').append('<div>' + restaurants[i] + '</div>');
            }
        }
    }
    $('.autocomplete input').on('input', function() {
        $('.dialog').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('body').click(function(e) {
        if (!$(e.target).is("input, .close")) {
            $('.dialog').removeClass('open');
        }
    });
    initDialog();
});