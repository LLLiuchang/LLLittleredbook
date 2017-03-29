define(['text!buy/buy.html','jquery','css!buy/buy.css'],function(html,jquery){
        function add(){
            $('#s').css('display','none');
            $('#aa').html(html);
            $('.and').on('click',function(){
                $('.choose_content').css('display','block')
            })
             var mySwiper = new Swiper('.swiper-container', {
                loop : true,
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
         })
    }

    return {
        add:add
    }
})