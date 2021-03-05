$(function(){
    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width', amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%'); 
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                /* console.log("eita porra"); */
            }
        });

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left -$('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                /* console.log("eita porra"); */
            }
        });
    }        

    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color', 'transparent');
            $(this).css('background-color', 'rgb(150,150,150)');
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image', img);
        })

        $('.mini-img-wraper').eq(0).click();
    }

    /* Clicar e ir para a div contato com base no atributo goto */

    var directory = '../'

    $('[goto=contato]').click(function(){
        location.href=directory+'index.html?contato';
        return false;
    })

    checkUrl();

    function checkUrl(){
        var url = location.href.split('/');
        var curPage = url[url.length-1].split('?');

        if(curPage[1] != undefined && curPage[1] == 'contato'){
            $('html,body').animate({'scrollTop':$('#contato').offset().top});
        }
    }
});