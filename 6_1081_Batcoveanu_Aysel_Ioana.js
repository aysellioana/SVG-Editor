
//desenare figuri
function setCoorDreptunghi(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, "x", Math.min(x1, x2));
    obiect.setAttributeNS(null, "y", Math.min(y1, y2));
    obiect.setAttributeNS(null, "width", Math.max(x1, x2) - Math.min(x1, x2));
    obiect.setAttributeNS(null, "height", Math.max(y1, y2) - Math.min(y1, y2));
}

function setCoorElipsa(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, "cx", (x1 + x2) / 2);
    obiect.setAttributeNS(null, "cy", (y1 + y2) / 2);
    obiect.setAttributeNS(null, "rx", (Math.max(x1, x2) - Math.min(x1, x2)) / 2);
    obiect.setAttributeNS(null, "ry", (Math.max(y1, y2) - Math.min(y1, y2)) / 2);
}

function setCoorRomb(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, "points", (x1 + x2) / 2 + ',' + Math.min(y1, y2) + ' ' + 
                            Math.max(x1, x2) + ',' + (y1 + y2) / 2 + ' ' +
                            (x1 + x2) /2 + ',' + Math.max(y1, y2) + ' ' + 
                            Math.min(x1, x2) + ',' + (y1 + y2) / 2);
}

function setCoorLinie(obiect,x1, y1, x2, y2){
    obiect.setAttributeNS(null, "x1", x1);
	obiect.setAttributeNS(null, "y1", y1);
	obiect.setAttributeNS(null, "x2", x2);
	obiect.setAttributeNS(null, "y2", y2);
}


function setCoorPolyline (obiect,x1,y1,x2,y2)
{
    obiect.setAttributeNS(null, "points", x1+","+y1+" "+
    x1+","+y2/2+" "+
    x2+","+y2/2+" "+
    x2+","+y2);
}

var MOUSE_LEFT = 0, MOUSE_RIGHT = 2, KEY_DEL = 46;
var x1 = 0, y1 = 0;
var elementSelectat = null;
var figura = "dreptunghi";

var SVGeditor = document.getElementById("SVGeditor");
var sDreptunghi = document.getElementById("sDreptunghi");
var sElipsa = document.getElementById("sElipsa");
var sRomb = document.getElementById("sRomb");
var elemente = document.getElementById("SVGelemente");
var sLinie = document.getElementById("sLinie");
var sPolyline = document.getElementById("sPolyline");
var back = document.getElementById("color-back");


function onClickdreptunghi() {
    figura = "dreptunghi"
}

function onClickelipsa() {
    figura = "elipsa"
}

function onClickromb() {
    figura = "romb"
}
function onClicklinie(){
    figura = "linie"
}
function onClickpolyline(){
    figura="polyline"
}

SVGeditor.onmousedown = function (e) {
    if (e.button == MOUSE_LEFT) {
        x1 = e.pageX - this.getBoundingClientRect().left;
        y1 = e.pageY - this.getBoundingClientRect().top;

        if(figura == "dreptunghi") {
            setCoorDreptunghi(sDreptunghi, x1, y1, x1, y1);
            sDreptunghi.style.display = "block";
        }
        if(figura == "elipsa") {
            setCoorElipsa(sElipsa, x1, y1, x1, y1);
            sElipsa.style.display = "block";
        }
        if(figura == "romb") {
            setCoorRomb(sRomb, x1, y1, x1, y1);
            sRomb.style.display = "block";
        }
        if(figura=="linie"){
            setCoorLinie(sLinie, x1,y1,x1,y1);
            sLinie.style.display="block";
        }
        if(figura=="polyline"){
            setCoorPolyline(sPolyline, x1,y1,x1,y1);
            sLinie.style.display="block";
        }
    }
}

SVGeditor.onmousemove = function (e) {
    x2 = e.pageX - this.getBoundingClientRect().left;
    y2 = e.pageY - this.getBoundingClientRect().top;
    
    if(figura == "dreptunghi") {
        setCoorDreptunghi(sDreptunghi, x1, y1, x2, y2);
    }
    if(figura == "elipsa") {
        setCoorElipsa(sElipsa, x1, y1, x2, y2);
    }
    if(figura == "romb") {
        setCoorRomb(sRomb, x1, y1, x2, y2);
    }
    if(figura=="linie"){
        setCoorLinie(sLinie, x1,y1,x2,y2);
    }
    if(figura=="polyline"){
        setCoorPolyline(sPolyline, x1,y1,x2,y2);
    }
}

SVGeditor.onmouseup = function (e) {
    if (e.button == MOUSE_LEFT) {
        x2 = e.pageX - this.getBoundingClientRect().left;
        y2 = e.pageY - this.getBoundingClientRect().top;

        sDreptunghi.style.display = "none";
        sElipsa.style.display = "none";
        sRomb.style.display = "none";
        sLinie.style.display="none";
        sPolyline.style.display="none";

        if(figura == "dreptunghi") {
            elementnou = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            setCoorDreptunghi(elementnou, x1, y1, x2, y2);
        }
        if(figura == "elipsa") {
            elementnou = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            setCoorElipsa(elementnou, x1, y1, x2, y2);
        }
        if(figura == "romb") {
            elementnou = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setCoorRomb(elementnou, x1, y1, x2, y2);
        }
        if(figura == "linie") {
            elementnou = document.createElementNS("http://www.w3.org/2000/svg", "linie");
            setCoorLinie(elementnou, x1, y1, x2, y2);
        }
        if(figura == "polyline") {
            elementnou = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            setCoorPolyline(elementnou, x1, y1, x2, y2);
        }

        elementnou.onmousedown = function (e) {
            if (e.button == MOUSE_RIGHT) {
                var elementeCopii = document.querySelectorAll("#elemente *");

                elementeCopii.forEach(el => el.classList.remove("selectat"));
                e.target.classList.add("selectat");
                elementSelectat = e.target;
            }
        }
        elemente.appendChild(elementnou);
    }
}

//undo 
var undo = document.getElementById("undo");
undo.addEventListener('click', function(elem){
    elemente.removeChild(elemente.lastElementChild);
})

SVGeditor.oncontextmenu = function () {
    return false;
}
//delete
document.onkeydown = function (e) {
    if (e.keyCode == KEY_DEL && elementSelectat)
        elementSelectat.remove();

    if (e.keyCode == 187 && elementSelectat) {
        elementSelectat.style.fill = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

//save

var salvarePNG  = document.getElementById("savePNG");
salvarePNG.addEventListener('click', function(elem){
    const imgSRC = new Image();
    const image = new Blob([salvarePNG], {type: 'image/svg+xml'});
    const ele = document.createElement("a");
    ele.download = "proiect.png";
    ele.href = window.URL.createObjectURL(image);
    ele.click();
    ele.remove();
    imgSRC.src = ele;
});

