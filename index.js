// Скрипты для открытия элементов

$(function (){
    $( '#pizza' ).selectmenu({
        disabled: false
    });
    $( '#size' ).selectmenu({
        disabled: true
    });
    $( '#sauce' ).selectmenu({
        disabled: true
    });
})

const sizeOn = document.querySelector('.piz')
sizeOn.addEventListener('click', ()=>{
    $('#size').selectmenu({
        disabled: false
    });
})

const sauceOn = document.querySelector('.siz')
sauceOn.addEventListener('click', ()=>{
    $('#sauce').selectmenu({
        disabled: false
    });
})

const orderOn = document.querySelector('.soz')
orderOn.addEventListener('click', ()=>{
    $('.open').removeAttr('disabled')
})

// Скрипт для получения цены и описания

$('#order').click(function(){
    let size = $('#size option:selected').text();
    let type = $('#pizza').val()
    let price = $('#size').val()
    let sauce = $('#sauce').val()

    $('#result').html(`Ваша пицца: ${type} <br><br>Размер пиццы: ${size} <br><br> 
                    Выбранный соус: ${sauce} <br><br>Цена за всё: ${price}рублей`);
});

// Скрипт для модального окна

$(document).ready(function() {
    let overlay = $('#overlay');
    let open_modal = $('.open');
    let close = $('.modal_close, .close, #overlay');
    let modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();
        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});



