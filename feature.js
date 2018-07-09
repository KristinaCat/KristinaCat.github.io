
var str = "<table class='side'>";

var title =
['<a href="scbdetails.htm" title="More Details"><img src="storytimefth.jpg" width="100" height="125" alt="Storytime">' + "<br>" + "Was $5.50 Now $4.25",
 '<a href="scbdetails.htm" title="More Details"><img src="dickensfth.jpg" width="100" height="125" alt="A Tale Of Two Cities">' + "<br>" + "Was $5.25 Now $4.00",
 '<a href="scbdetails.htm" title="More Details"><img src="shelfth.jpg" width="100" height="125" alt="Where The Sidewalk Ends">' + "<br>" + "Was $4.00 Now $3.25",
 '<a href="scbdetails.htm" title="More Details"><img src="monsterfth.jpg" width="100" height="125" alt="The Monster At The End Of This Book">' + "<br>" + "Was $2.25 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="nonsenseth.jpg" width="100" height="125" alt="Nonsense Alphabets/Best Loved Fables Of Aesop">' + "<br>" + "Was $3.50 Now $2.00",
 '<a href="scbdetails.htm" title="More Details"><img src="fliesfth.jpg" width="100" height="125" alt="Lord Of The Flies">' + "<br>" + "Was $4.00 Now $2.00",
 '<a href="scbdetails.htm" title="More Details"><img src="fragglefth.jpg" width="100" height="125" alt="Whats A Fraggle?">' + "<br>" + "Was $2.99 Now $1.60",
 '<a href="scbdetails.htm" title="More Details"><img src="gardenfth.jpg" width="100" height="125" alt="The Dark Garden">' + "<br>" + "Was $3.99 Now $2.50",
 '<a href="scbdetails.htm" title="More Details"><img src="rememberfth.jpg" width="100" height="125" alt="Remember Me">' + "<br>" + "Was $2.99 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="wilburfth.jpg" width="100" height="125" alt="Charlottes Web">' + "<br>" + "Was $2.59 Now $1.85",
 '<a href="scbdetails.htm" title="More Details"><img src="blumefth.jpg" width="100" height="125" alt="Its Not The End Of The World">' + "<br>" + "Was $2.25 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="ramonafth.jpg" width="100" height="125" alt="Ramona Forever">' + "<br>" + "Was $2.25 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="beverlyfth.jpg" width="100" height="125" alt="Ramona And Her Mother">' + "<br>" + "Was $2.25 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="ramonafth.jpg" width="100" height="125" alt="Ramona Quimby, Age 8">' + "<br>" + "Was $2.25 Now $1.25",
 '<a href="scbdetails.htm" title="More Details"><img src="curiousfth.jpg" width="100" height="125" alt="Curious George Flies A Kite">' + "<br>" + "Was $2.00 Now $1.00",
 '<a href="scbdetails.htm" title="More Details"><img src="poohfth.jpg" width="100" height="125" alt="How To Catch A Heffalump">' + "<br>" + "Was $1.25 Now $.55",
 '<a href="scbdetails.htm" title="More Details"><img src="cat1fth.jpg" width="100" height="125" alt="The Cat In The Hat">' + "<br>" + "Was $2.00 Now $1.00",
 '<a href="scbdetails.htm" title="More Details"><img src="catfth.jpg" width="100" height="125" alt="The Cat In The Hat Comes Back">' + "<br>" + "Was $2.00 Now $1.00",
];

for (var i = 0; i < 1; i++) 
{
   str += "<tr class='feat'><td>" + title[Math.floor(Math.random() * 18)] + "</td></tr>";
}

str += "</table>";

var elem = document.getElementById("featured");
elem.innerHTML = str;