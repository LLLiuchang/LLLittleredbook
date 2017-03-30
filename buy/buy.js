define(['text!buy/buy.html','jquery','css!buy/buy.css'],function(html,jquery){
        function add(){
            $('#s').css('display','none');
            $('#aa').html(html);
            $('.guan').on('click',function(){
                $('.choose_content').css('display','none');
            })
            $('.and').on('click',function(){
                $('.choose_content').css('display','block')
            })
            $('.color').on('click','button',function(){
                $('.color button').css('border-color','#c5c5c5')
                $(this).css('border-color','red');
            })
            $('.hao').on('click','button',function(){
                $('.hao button').css('border-color','#c5c5c5')
                $(this).css('border-color','red');
            })
             var mySwiper = new Swiper('.swiper-container', {
                loop : true,
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
         })
    }
    function get(id){
        $.get('http://localhost:3000/buy',function(res){
            // console.log(res);
            var notes = res.data;
            var asd = [];
            for(var i = 0; i<notes.length;i++){
                if(id == notes[i].id){
                    var box = getTemplate(notes[i]);
                    asd.push(box);
                }
                
            }
            asd= asd.join('');
            $('.cao').html(asd);
            // console.log(asd);    
        })
         
    }
    function getTemplate(data){
        var str = '<div class="swiper-container"><div class="swiper-wrapper tu"><div class="swiper-slide">'+
        '<img src="'+data.image+'" alt=""></div><div class="swiper-slide"><img src="'+data.image+'" alt=""></div></div><span class="swiper-pagination zz"></span></div>'+
        '<div class="jieshao"><span class="ming">'+data.title+'</span>'+
        '<p class="p1"><span class="guo">来自韩国</span><span class="pu">诗菲小铺 THE FACE SHOP</span></p>'+
        '<hr><div class="div1"><p class="qian">￥'+data.discount_price+'</p><p class="jie">此处略去1w字...</p></div></div>'
        return str;
    }

    return {
        add:add,
        get:get
    }
})