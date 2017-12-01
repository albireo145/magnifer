window.onload = function(){
    var smallbox = document.getElementById("smallbox");
    var myRange = document.getElementById("myRange");
    var bigbox = document.getElementById("bigbox");
    var bigpic = document.getElementById("bigpic");
    
    var magnifer = document.getElementById("magnifer");
    
    myRange.onchange = function(){
        magnifer.style.width = magnifer.style.height = 2 * myRange.value + "px";
        bigpic.style.transform = "scale(" + 100/myRange.value + ")"        
    }


    smallbox.onmouseover = function(){
        bigbox.style.display = "block";
        magnifer.style.display = "block";
    }

    smallbox.onmouseout = function(){
        bigbox.style.display = "none";
        magnifer.style.display = "none";
    }

    smallbox.onmousemove = function(event){
        var event = event || window.event;
        var left = event.clientX - smallbox.offsetLeft - magnifer.offsetWidth/2;
        var top = event.clientY - smallbox.offsetTop - magnifer.offsetHeight/2;

        (left < 0 ? left = 0 : left) && (left > smallbox.offsetWidth - magnifer.offsetWidth ? left = smallbox.offsetWidth - magnifer.offsetWidth : left);
        (top < 0 ? top = 0 : top) && (top > smallbox.offsetHeight - magnifer.offsetHeight ? top = smallbox.offsetHeight - magnifer.offsetHeight : top);
        // if(left > smallbox.offsetWidth - magnifer.offsetWidth) left = smallbox.offsetWidth - magnifer.offsetWidth;

        magnifer.style.top = top + "px";
        magnifer.style.left = left + "px";


        var widthPer = magnifer.offsetWidth/bigbox.offsetWidth;
        var heightPer = magnifer.offsetHeight/bigbox.offsetHeight;
        
        bigpic.style.left = -left/widthPer + "px";
        bigpic.style.top = -top/heightPer + "px";

    }
}