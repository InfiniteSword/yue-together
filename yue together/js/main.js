/**
 * Created by misicdemone on 15/8/13.
 */
function sidebarShow (){
    var btn_list = document.getElementById('list');
    var dark = document.getElementById('dark');
    var sidebar = document.getElementById('sidebar');
    var no = document.getElementById('no');
    var yes = document.getElementById('yes');
    btn_list.addEventListener('click',function(){
        dark.style.width = "100%";
        dark.style.height = "100%";
        sidebar.style.marginLeft = "50%";
    });
    no.addEventListener('click',function(){
        dark.style.width = "0";
        dark.style.height = "0";
        sidebar.style.marginLeft = "100%";
    });
    yes.addEventListener('click',function(){
        dark.style.width = "0";
        dark.style.height = "0";
        sidebar.style.marginLeft = "100%";
    });
}
function dotHide (){
    var dot = document.getElementById('dot');
    var sth = document.getElementById('sth');
    sth.addEventListener('click',function(){
       dot.style.opacity = "0";
    });
}

sidebarShow();
dotHide();
