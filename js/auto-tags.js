$(function() {
    var alreadyFilled = false;
    var tags = ['American', 'Chinese', 'Fast Food', 'Filipino', 'Indian', 'Vegetarian'];

    function initDialog() {
        clearDialog();
        for (var i = 0; i < tags.length; i++) {
            $('.dialog-tag').append('<div>' + tags[i] + '</div>');
        }
    }
    function clearDialog() {
        $('.dialog-tag').empty();
    }
    $('.autocomplete-tag input').click(function() {
        if (!alreadyFilled) {
            $('.dialog-tag').addClass('open');
        }

    });
    $('body').on('click', '.dialog-tag > div', function() {
        $('.autocomplete-tag input').val($(this).text()).focus();
        $('.autocomplete-tag .close').addClass('visible');
        alreadyFilled = true;
    });
    $('.autocomplete-tag .close').click(function() {
        alreadyFilled = false;
        $('.dialog-tag').addClass('open');
        $('.autocomplete-tag input').val('').focus();
        $(this).removeClass('visible');
    });

    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].toLowerCase().startsWith(str)) {
                $('.dialog-tag').append('<div>' + tags[i] + '</div>');
            }
        }
    }
    $('.autocomplete-tag input').on('input', function() {
        $('.dialog-tag').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('body').click(function(e) {
        if (!$(e.target).is("input, .close")) {
            $('.dialog-tag').removeClass('open');
        }
    });
    initDialog();
});