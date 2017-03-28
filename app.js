require.config({
    baseUrl:'/',
    paths:{
        router:'lib/router',
        myroute:'src/myroute',
        jquery:'lib/jquery-3.1.1',
        text:'lib/text',
        txt:'lib/setrem',
        css:'lib/css.min',
        lazy:'lib/jquery-lazyload'
    }
})

require(['myroute','jquery'],function(){
    location.hash = '#/home'
})