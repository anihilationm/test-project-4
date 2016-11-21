    $("#timer")
    .countdown("2017/01/01", function(event) {
        $(this).text(
            event.strftime('%D days %H:%M:%S')
        );
    });

    $(function() {
        $("#trigger_t").hover(function(){
            $('#put_trump').stop(true, true).animate({'left': '-82px'}, 600);
        }, function(){
            $('#put_trump').animate({'left': '-158px'}, 600);
        });

        $("#trigger_h").hover(function(){
            $('#put_hillary').stop(true, true).animate({'bottom': '-77px'}, 600);
        }, function(){
            $('#put_hillary').animate({'bottom': '-200px'}, 600);
        });
    });