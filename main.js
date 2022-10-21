Canvas=document.getElementById("myCanvas");
var ctx=Canvas.getContext("2d")

var color="black";

var wl=2;

var lpofmx, lpofmy 

var screensize= screen.width 

var newwidth= screen.width-70

var newheight= screen.height-300

if(screensize<992){
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
}

Canvas.addEventListener("touchstart", mytouchstart)

Canvas.addEventListener("touchmove", mytouchmove)

function mytouchstart(t){
    lpofmx=t.touches[0].clientX-Canvas.offsetLeft
    lpofmy=t.touches[0].clientY-Canvas.offsetTop
}

function mytouchmove(o){
    cpx=o.touches[0].clientX-Canvas.offsetLeft
    cpy=o.touches[0].clientY-Canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= wl

    ctx.moveTo(lpofmx, lpofmy)
    ctx.lineTo(cpx,cpy)
    ctx.stroke();

    lpofmx=cpx
    lpofmy=cpy
}

function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

