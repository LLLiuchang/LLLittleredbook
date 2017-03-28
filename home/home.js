define(['text!home/home.html','jquery','lazy','css!home/home.css'],function(html,jquery){
    function add(){
        $('#aa').html(html);
         var mySwiper = new Swiper('.swiper-container', {
	        autoplay: 3000,//可选选项，自动滑动
            loop : true,
            pagination : '.swiper-pagination',
            paginationType : 'fraction',
         })
    }
    function img(){
         $(function(){
            $("img").lazyload({effect: "fadeIn",});
         });
        }
    function get(){
        $.get('http://localhost:3000/home',function(res){
            console.log(res);
            var data = res.data;
            var aaa = [];
            for(var i = 0; i<data.length;i++){
                var box = getTemplate(data[i]);
                aaa.push(box);
            }
            aaa = aaa.join('');
            // console.log(aaa)
            $('.leaves').html(aaa);
        })
    }
    function getTemplate(data){
        var str = '<div class="leave"><p>'+data.name+'</p><span>笔记·'+data.privacy+'</span>'
            +'<span>粉丝·'+data.followers+'</span><div class="img">'
        for(var i = 0; i< data.images.length;i++){
            str += '<img data-original="'+data.images[i]+'" alt="">'
        }
        str += '</div><div class="user"><img data-original="'+data.user.image+'" alt=""><span>'+data.user.nickname+'</span></div></div>'
        
        return str;
    }
    return{
        add:add,
        get:get,
        img:img
    }
})