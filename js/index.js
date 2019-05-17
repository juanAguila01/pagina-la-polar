//almacenar slider en una variable
var slider= $('#slider');

//almacenar botones 

var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

var tiempoIntervalo = 3000;
var numero  = 0;


//mover la ultima imagen al primer lugar 

$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primera imagen con un margen de -100%

slider.css('margin-left', '-'+100+'%');


function moverD(){  
    slider.animate({
        marginLeft: '-'+200+'%'
    }, 700, function(){
        $('#slider section:first').insertAfter('#slider section:last')
        slider.css('margin-left', '-'+100+'%');;
    });
}
function moverI(){   
    slider.animate({
        marginLeft: 0+'%'
    }, 700, function(){
        $('#slider section:last').insertBefore('#slider section:first')
        slider.css('margin-left', '-'+100+'%');
    });
}

siguiente.on('click', function(){
    moverD();  
    numero = 1;
});
anterior.on('click', function(){
    moverI();
    numero = 1;
});
siguiente.on('mouseout', function(){
    numero = 0
});//no me salio 
anterior.on('mouseout', function(){
    numero = 0;
});

function autoplay(){
    if( numero == 1){
        tiempoIntervalo = 100000;
    }
    if( numero == 0){
        tiempoIntervalo = 3000;
    }
    
    interval = setInterval(function(){
        moverD();
    }, tiempoIntervalo);
};
autoplay();



// var frame = requestAnimationFrame;
// var fotogramas = 0;
// var segundos = 0;
// function tiempo(){
//     fotogramas += 1;
//     if(fotogramas == 60){
//         fotogramas = 0;
//         segundos += 1;
//     }
//     if(segundos == 2){
        
//         console.log('hola')
//         segundos = 0;
//     return true;
//     }
    
//     frame(tiempo);
// }



/*************************************************
 * CODIGO PARA INTENTAR QUE SOLO DE SEMORE 0.5S AL INICIO EL DELAY
 * Y QUE AL SALIR DE TODA LA BARRA DE NAVEGACION SE REINICIE ESTE 
 * TIEMPO A 0.5S NUEVAMENTE
 *************************************************/
// var li = $('.li-hover');
// var liEnlaces = $('.li-hover > a');
// var subNavegacion = $('.sub-navegacion');
// var menuDesplegableLi = $('.menu-desplegable > li');
// var menuDesplegable = $('.menu-desplegable');
// var enlaces = $('.menu-desplegable > li > a');
// document.addEventListener('mouseover', detectorevento, false);

// function detectorevento(e){
//     console.log(e.target)
//     if(e.target == li || e.target == subNavegacion || e.target == menuDesplegableLi || e.target == menuDesplegable || e.target == enlaces || e.target == liEnlaces){
//         for(var i = 0; i < li.length; i += 1){
//             li[i].addEventListener('mouseover', function(){
//                 setTimeout(function(){
//                     for(var a = 0; a < subNavegacion.length; a += 1){
//                         subNavegacion[a].style.transitionDelay = '0s';
//                     }
//                     console.log('hola')
//                 }, 500);
//             }, false)  
//         }
//     }else {
//         for(var a = 0; a < subNavegacion.length; a += 1){
//             subNavegacion[a].style.transitionDelay = '.5s';
//         }
//     }
// }





