define(['text!buys/buys.html','jquery','css!buys/buys.css'],function(html,jquery){
    function add(){
        $('#s').css('display','block');
        $('#aa').html(html);
       
        
    }
    
    function get(){
        $.get('http://localhost:3000/buys',function(res){
            // console.log(res);
            var notes = res.data;
            var aaa = [];
            
            for(var i = 0; i<notes.length;i++){
                var box = getTemplate(notes[i]);
                
                    aaa.push(box);
                
            }
            aa= aaa.join('');
            $('.shop').html(aa);
            // console.log(aa)
            $('.shop').on('click','.pin',function(){
                // var a = $(this).dataClass('id');
                console.log(this);
        })
        })
         
    }
    function getTemplate(data){
        var str = '<a href="#/buy/'+data.id+'"<div class="col-xs-5 pin"><div class="img"><img src="'+data.image+'" alt=""></div>'+
            '<div class="qq"><p class="ming">'+data.title+'</p><p class="qian">￥'+data.discount_price+'</p></div></div></a>'
        return str;
    }
    

    
    
    return{
        add:add,
        get:get
    }
})