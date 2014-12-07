var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        //Registrar tu número de teléfono
        
        //Grabar Video
        document.getElementById('captureVideo').addEventListener('click',capture.captureVideo,true);
        //reproducir videos grabados
        
        //enviar videos
        
        //reproducir videos enviados
        
        //leer contactos
    }
}
window.addEventListener('load',fn.ready,false);