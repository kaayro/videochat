var storage = {
    db: function(){
        var db = window.openDatabase("chats", "1.0", "Video Chat", 2000000);
    }
};