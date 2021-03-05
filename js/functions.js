$(function(){

    $('.login').click(function(){
        alert("Fiquei com preguiça de fazer uma janela modal pra logar! '-'");
    })

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 5000;

    initSlider();

    function initSlider(){
        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay);
    }

    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual+=1;
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0;
        }
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
    }

    test();
    test_1();
    test_2();
    test_3();

    function test(){
        $('#item1').click(function(){
            $('.1080').addClass('show');
            $('.3090').addClass('show');
            $('.1060').addClass('show'); 
            $('.1080').removeClass('hide');
            $('.3090').removeClass('hide');
            $('.1060').removeClass('hide');   
        });
    }

    function test_1(){
        $('#item2').click(function(){
            $('.1080').addClass('hide');
            $('.3090').addClass('hide');
            $('#item2').click(function(){
                $('.1080').removeClass('hide');
                $('.3090').removeClass('hide');
                $('.1080').addClass('show');
                $('.3090').addClass('show');
                $('#item2').click(function(){
                    $('.1080').addClass('hide');
                    $('.3090').addClass('hide');
                    $('#item2').click(function(){
                        $('.1080').removeClass('hide');
                        $('.3090').removeClass('hide');
                        $('.1080').addClass('show');
                        $('.3090').addClass('show');
                        $('#item2').click(function(){
                            $('.1080').addClass('hide');
                            $('.3090').addClass('hide');
                            $('#item2').click(function(){
                                $('.1080').removeClass('hide');
                                $('.3090').removeClass('hide');
                                $('.1080').addClass('show');
                                $('.3090').addClass('show');     
                            });      
                        });     
                    });      
                });     
            });      
        });
    }

    function test_2(){
        $('#item3').click(function(){
            $('.1060').addClass('hide');
            $('.3090').addClass('hide');
            $('#item3').click(function(){
                $('.1060').removeClass('hide');
                $('.3090').removeClass('hide');
                $('.1060').addClass('show');
                $('.3090').addClass('show');
                $('#item3').click(function(){
                    $('.1060').addClass('hide');
                    $('.3090').addClass('hide');
                    $('#item3').click(function(){
                        $('.1060').removeClass('hide');
                        $('.3090').removeClass('hide');
                        $('.1060').addClass('show');
                        $('.3090').addClass('show');
                        $('#item3').click(function(){
                            $('.1060').addClass('hide');
                            $('.3090').addClass('hide');
                            $('#item3').click(function(){
                                $('.1060').removeClass('hide');
                                $('.3090').removeClass('hide');
                                $('.1060').addClass('show');
                                $('.3090').addClass('show');     
                            });      
                        });    
                    });      
                });     
            });      
        });
    }

    function test_3(){
        $('#item9').click(function(){
            $('.1060').addClass('hide');
            $('.1080').addClass('hide');
            $('#item9').click(function(){
                $('.1060').removeClass('hide');
                $('.1080').removeClass('hide');
                $('.1060').addClass('show');
                $('.1080').addClass('show');
                $('#item9').click(function(){
                    $('.1060').addClass('hide');
                    $('.1080').addClass('hide');
                    $('#item9').click(function(){
                        $('.1060').removeClass('hide');
                        $('.1080').removeClass('hide');
                        $('.1060').addClass('show');
                        $('.1080').addClass('show');
                        $('#item9').click(function(){
                            $('.1060').addClass('hide');
                            $('.1080').addClass('hide');
                            $('#item9').click(function(){
                                $('.1060').removeClass('hide');
                                $('.1080').removeClass('hide');
                                $('.1060').addClass('show');
                                $('.1080').addClass('show');     
                            });      
                        });    
                    });      
                });     
            });      
        });
    }

    var currentValue = 0;
    var isDrag = false;
    var precoMax = 20000;
    var precoAtual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0){
                mouseX = 0;
            }
            if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }
            
            $('.pointer-barra').css('left',(mouseX-13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width',currentValue+'%');

            preco_atual = (currentValue/100) * precoMax;
            preco_atual = formatarPreco(preco_atual);
            $('.preco_pesquisa').html('R$'+preco_atual);
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2);//apenas 2 numeros decimais
        preco_arr = preco_atual.split('.');//separa o numero antes e depois do ponto

        var novo_preco = formatarTotal(preco_arr);
        return novo_preco;
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].lenght)+','+preco_arr[1];
        }else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].lenght)+','+preco_arr[1];
        }
    }

    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-0-user-select","none");
        $("body").css("user-select","none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-0-user-select","auto");
        $("body").css("user-select","auto");
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

    $('nav.mobile').click(function(){
        $('nav.mobile ul').slideToggle();
    })
})