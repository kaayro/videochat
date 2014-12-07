var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        //Registrar tu número de teléfono
        
        //Grabar Video
        document.getElementById('captureVideo').addEventListener('click',capture.captureVideo,true);
        //reproducir videos grabados
        $('.video').tap(fn.playVideo);
        //enviar videos
        
        //reproducir videos enviados
        
        //leer contactos
    },
    playVideo: function(){
        alert($(this).attr('rel'));
    }
}
window.addEventListener('load',fn.ready,false);