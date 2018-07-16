$('.menu li').eq(0).css({
        'background': '#eb5300',
        'color':'#fff'
    });

    $('.menu li').mouseenter(function() {
        $(this).css({
            'background': '#eb5300',
            'color':'#fff'
        });

        $('.menu li').not($(this)).css({
            'background': 'transparent',
            'color':'#222'
            
        });


        idx = $(this).index('.menu li');

        $('.details').eq(idx).show();
        $('.details').not($('.details').eq(idx)).hide();
    });




$('#ul2 li ').eq(0).css({
        'border': '1px solid #fff',
        'color':'#fff'
    });

    $('#ul2 li').mouseenter(function() {
        $(this).css({
            'border': '1px solid #fff',
            'color':'#fff'
        });

        $('#ul2 li').not($(this)).css({
            'border': 'transparent',
            'color':'#fff'
            
        });


        idx = $(this).index('#ul2 li');

    });