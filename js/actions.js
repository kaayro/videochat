var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        //Registrar tu número de teléfono
        
        //Grabar Video
        $(document).on('tap','#captureVideo',capture.captureVideo);
        //reproducir videos grabados
        $(document).on('tap','.video',fn.playVideo);
        //enviar videos
        
        //reproducir videos enviados
        
        //leer contactos
    },
    playVideo: function(){
        alert($(this).attr('rel'));
    }
}
$(fn.ready);