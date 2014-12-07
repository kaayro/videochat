var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        //Registrar tu número de teléfono
        
        //Grabar Video
        $(document).on('click','#captureVideo',capture.captureVideo);
        //reproducir videos grabados
        $(document).on('click','.video',fn.playVideo);
        //enviar videos
        
        //reproducir videos enviados
        
        //leer contactos
    },
    playVideo: function(){
        VideoPlayer.play($(this).attr('rel'));
    }
}
$(fn.ready);