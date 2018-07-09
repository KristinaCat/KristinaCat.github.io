
var canvasElem = document.getElementById("lines");
var ctx = canvasElem.getContext("2d");
var xCoord = 0;  
var yCoord = 16; 
while (yCoord < 110)
{
   ctx.moveTo(xCoord, yCoord);
   ctx.lineTo(500, yCoord);
   ctx.strokeStyle = "#0A5A68";
   ctx.stroke();       
   yCoord += 21;  
}
