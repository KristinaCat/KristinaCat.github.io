
var str = "<table>";

var title =
["The Secret World Of Og",
 "Go Dog Go!",
 "Leo The Lop",
 "Paddington Abroad",
 "Nancys Mysterious Letter",
 "The Ghost Of Blackwood Hall",
 "The Secret In The Attic", 
];

var cover =
['<a href="scbdetails.htm" title="More Details"><img src="ogfth.jpg" width="100" height="125" alt="The Secret World Of Og">',
 '<a href="scbdetails.htm" title="More Details"><img src="godogfth.jpg" width="100" height="125" alt="Go Dog Go!">',
 '<a href="scbdetails.htm" title="More Details"><img src="leofth.jpg" width="100" height="125" alt="Leo The Lop">',
 '<a href="scbdetails.htm" title="More Details"><img src="paddingtonfth.jpg" width="100" height="125" alt="Paddington Abroad">',
 '<a href="scbdetails.htm" title="More Details"><img src="drewfth.jpg" width="100" height="125" alt="Nancys Mysterious Letter">',
 '<a href="scbdetails.htm" title="More Details"><img src="ghostfth.jpg" width="100" height="125" alt="The Ghost Of Blackwood Hall">',
 '<a href="scbdetails.htm" title="More Details"><img src="nancyfth.jpg" width="100" height="125" alt="The Secret In The Attic">',
];

var author =
["Author: Pierre Berton",
 "Author: P.D. Eastman",
 "Author: Stephen Cosgrove",
 "Author: Michael Bond",
 "Author: Carolyn Keene",
 "Author: Carolyn Keene",
 "Author: Carolyn Keene",
];

var price =
["$5.50",
 "$3.25",
 "$2.50",
 "$2.00",
 "$3.00",
 "$3.00",
 "$3.00",
];

var about =
["&quotThe series follows the five Berton children as they discover and explore a vast, mysterious world of caverns and rivers hidden beneath a trapdoor in the floor of their clubhouse. In their subterranean adventures, they befriend the little green inhabitants called Ogs, share their worldly knowledge with them, and, at the same time, gain a little wisdom themselves.&quot",
 "&quotReading goes to the dogs in this timeless book edited by Dr. Seuss. From big dogs and little dogs to red, green, and blue dogs, dogs going up and dogs going fast, who knew dogs were so busy? Go, Dog. Go! has been a favorite for over fifty years, leaving audiences of all breeds wagging their tails with delight.&quot",
 "&quotA lovable flop-eared bunny named Leo the Lop lives in the magical land of Serendipity where its residents share life lessons and memorable morals. In Leo's first adventure, he and the other bunnies learn that no matter what you look like, everyone is normal. Full-color illustrations.&quot",
 "&quotPaddington gets himself into one scrape after another on a family trip to France, including accidentally winning the Tour de France bicycle race.&quot",
 "&quotNancy receives a letter informing her that she is heir to a fortune. This story tells of her search for another Nancy Drew.&quot",
 "&quotWhen Mrs. Putney seeks Nancy's help in recovering her stolen jewelry, the search for the thieves takes the girl detective and her friends, Bess and George, to an abandoned mansion in the River Heights vicinity known as Blackwood Hall and to the colorful French Quarter of New Orleans. When the quest is hampered by the strange behavior of Mrs. Putney and two young women who are being victimized by so-called spirits, Nancy must fight these unseen perpetrators of a cruel hoax! The resourceful young sleuth wants to help, but is hindered. The ghostly spirits have warned these gullible victims to not to have anything to do with Nancy Drew!&quot",
 "&quotLittle Susan's parents have died and she's left in the care of her Grandfather, Phillip March. Having not enough finances to support her, he desperately needs the help of Nancy Drew to find some musical manuscripts hidden in his homestead/very creepy house by his late son.&quot",
];

var buy = ['<a href="scbshopping.htm" title="Add To Cart"><img src="shop.gif" alt="Add To Cart">'];

for (var i = 0; i < title.length; i++) 
{
   str += "<tr><th class='col1'>" + title[i] + "</th>";
   str += "<th>" + author[i] + "</th>";
   str += "<th>" + price[i] + "</th></tr>";
   str += "<tr><td class='col1'>" + cover[i] + "</td>";
   str += "<td>" + about[i] + "</td>";
   str += "<td>" + buy + "</td></tr>";
}



str += "</table>";

var elem = document.getElementById("new");
elem.innerHTML = str;