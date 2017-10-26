(function($){

    let $home = $(home)

    $(document).ready(function(){
        $(".scrollNav").hide()
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>$home.height()-65){
                    $('.scrollNav').fadeIn();
                }
                else{
                    $('.scrollNav').fadeOut();
                }
            })
        })
    })
}(jQuery))