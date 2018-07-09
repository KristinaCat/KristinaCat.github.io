
var str = "<table>";

var title =
["Storytime",
 "A Tale Of Two Cities",
 "Where The Sidewalk Ends",
 "The Monster At The End Of This Book",
 "Nonsense Alphabets/Best Loved Fables Of Aesop",
 "Lord Of The Flies",
 "Whats A Fraggle?",
 "The Dark Garden",
 "Remember Me",
 "Charlottes Web",
 "Its Not The End Of The World",
 "Ramona Forever",
 "Ramona And Her Mother",
 "Ramona Quimby, Age 8",
 "Curious George Flies A Kite",
 "How To Catch A Heffalump",
 "The Cat In The Hat",
 "The Cat In The Hat Comes Back",
];

var cover =
['<a href="scbdetails.htm" title="More Details"><img src="storytimefth.jpg" width="100" height="125" alt="Storytime">',
 '<a href="scbdetails.htm" title="More Details"><img src="dickensfth.jpg" width="100" height="125" alt="A Tale Of Two Cities">',
 '<a href="scbdetails.htm" title="More Details"><img src="shelfth.jpg" width="100" height="125" alt="Where The Sidewalk Ends">',
 '<a href="scbdetails.htm" title="More Details"><img src="monsterfth.jpg" width="100" height="125" alt="The Monster At The End Of This Book">',
 '<a href="scbdetails.htm" title="More Details"><img src="nonsenseth.jpg" width="100" height="125" alt="Nonsense Alphabets/Best Loved Fables Of Aesop">',
 '<a href="scbdetails.htm" title="More Details"><img src="fliesfth.jpg" width="100" height="125" alt="Lord Of The Flies">',
 '<a href="scbdetails.htm" title="More Details"><img src="fragglefth.jpg" width="100" height="125" alt="Whats A Fraggle?">',
 '<a href="scbdetails.htm" title="More Details"><img src="gardenfth.jpg" width="100" height="125" alt="The Dark Garden">',
 '<a href="scbdetails.htm" title="More Details"><img src="rememberfth.jpg" width="100" height="125" alt="Remember Me">',
 '<a href="scbdetails.htm" title="More Details"><img src="wilburfth.jpg" width="100" height="125" alt="Charlottes Web">',
 '<a href="scbdetails.htm" title="More Details"><img src="blumefth.jpg" width="100" height="125" alt="Its Not The End Of The World">',
 '<a href="scbdetails.htm" title="More Details"><img src="ramonafth.jpg" width="100" height="125" alt="Ramona Forever">',
 '<a href="scbdetails.htm" title="More Details"><img src="beverlyfth.jpg" width="100" height="125" alt="Ramona And Her Mother">',
 '<a href="scbdetails.htm" title="More Details"><img src="quimbyfth.jpg" width="100" height="125" alt="Ramona Quimby, Age 8">',
 '<a href="scbdetails.htm" title="More Details"><img src="curiousfth.jpg" width="100" height="125" alt="Curious George Flies A Kite">',
 '<a href="scbdetails.htm" title="More Details"><img src="poohfth.jpg" width="100" height="125" alt="How To Catch A Heffalump">',
 '<a href="scbdetails.htm" title="More Details"><img src="cat1fth.jpg" width="100" height="125" alt="The Cat In The Hat">',
 '<a href="scbdetails.htm" title="More Details"><img src="catfth.jpg" width="100" height="125" alt="The Cat In The Hat Comes Back">',
];

var author =
["Author: Multiple - Reader's Digest Association",
 "Author: Charles Dickens",
 "Author: Shel Silverstein",
 "Author: Jon Stone",
 "Author: Edward Lear/Joseph Jacobs",
 "Author: William Golding",
 "Author: Louise Gikow",
 "Author: Margaret Buffie",
 "Author: Cheryl Lanham",
 "Author: EB White",
 "Author: Judy Blume",
 "Author: Beverly Cleary",
 "Author: Beverly Cleary",
 "Author: Beverly Cleary",
 "Author: Margret Rey",
 "Author: A.A. Milne",
 "Author: Dr. Seuss",
 "Author: Dr. Seuss",
];

var price =
["Was $5.50 Now $4.25",
 "Was $5.25 Now $4.00",
 "Was $4.00 Now $3.25",
 "Was $2.25 Now $1.25",
 "Was $3.50 Now $2.00",
 "Was $4.00 Now $2.00",
 "Was $2.99 Now $1.60",
 "Was $3.99 Now $2.50",
 "Was $2.99 Now $1.25",
 "Was $2.59 Now $1.85", 
 "Was $2.25 Now $1.25",
 "Was $2.25 Now $1.25",
 "Was $2.25 Now $1.25",
 "Was $2.25 Now $1.25",
 "Was $2.00 Now $1.00",
 "Was $1.25 Now $.55",
 "Was $2.00 Now $1.00", 
 "Was $2.00 Now $1.00", 
];

var about =
["&quotA collection of seventy stories including fables and nursery tales from authors all over the world.&quot",
 "&quotAfter eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with his daughter in England. There the lives of two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette.&quot",
 "&quotWhere the Sidewalk Ends turns forty! Celebrate with this anniversary edition that features an eye-catching commemorative red sticker. This classic poetry collection, which is both outrageously funny and profound, has been the most beloved of Shel Silverstein's poetry books for generations.&quot",
 "&quotMany adults name this book as their favorite Little Golden Book. Generations of kids have interacted with lovable, furry old Grover as he begs the reader not to turn the page for fear of a monster at the end of the book. 'Oh, I am so embarrassed,' he says on the last page for, of course, the monster is Grover himself!&quot",
 "&quotTwo books in one! The first side features 28 classic fables by Aesop. Once you are donem just flip the book over for an alphabet full of limericks and rhymes.&quot",
 "&quotWhen a plane crashes on a remote island, a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack, each of the boys attempts to establish control as the reality and brutal savagery of their situation sets in.&quot",
 "&quotStarring Jim Hensons Muppets. Learn all about the Fraggles with fun rhymes and expand your mind here at Fraggle rock.&quot",
 "&quotThea, a 16 year old suffering from traumatic amnesia, struggles to discover who she is, and who whe is not. As she tries to recover her identity, the empty places of her mind fill up with memories. But, whose memories are they?&quot",
 "&quotA new teen tearjerker in the heartwrenching Dear Diary series for young adults. Leeanne never thought she'd love working at the hospice so much, or that it would be so hard. Her new friend Gabriel isn't like other boys. He is dying. But in his final days, he has one last lesson to teach her.&quot",
 "&quotSome Pig. Humble. Radiant. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.&quot", 
 "&quotKaren Newman feels like her world is coming undone and has soured on the idea of marriage. In her diary, she gives each day a letter grade and lately, her days have not been graded higher than a C-minus.&quot",
 "&quotLife for Ramona, now a grown-up third-grader, is full of beginnings and discoveries and surprises-one very big surprise and one very small, but just as special! Through all the happiness and confusion, and some small moments of sadness, too, Ramona tries hard to be pleasant and helpful. Whether she's pleasant or pesty, brave or blunderful, she's always wonderful Ramona-forever!&quot",
 "&quotRamona wonders if growing up is all it's cracked up to be. No matter what, she'll always be her mother's little girl, right? This warm-hearted story of a mother's love for her spirited young daughter is told beautifully by Newbery Medal winning author Beverly Cleary.&quot",
 "&quotLife isn't as easy for Ramona as it used to be. Mr. Quimby's going to college, Mrs. Quimby's going to work. Now that Ramona is eight, she can go to a new school with a new teacher and ride the bus all by herself. But after school she has to stay with Grandmother Kemp and be nice to that bratty little Willa Jean.&quot",
 "&quotGeorge's adventures with bunnies, fishing poles, and a powerful kite are told in a simplified text suitable for first-graders to read themselves.&quot",
 "&quotA Winnie the Pooh adventure. Part of the Disney Wonderful World of Reading series.&quot",
 "&quotPoor Sally and her brother. It's cold and wet and they're stuck in the house with nothing to do, until a giant cat in a hat shows up, transforming the dull day into a madcap adventure and almost wrecking the place in the process! Written by Dr. Seuss in 1957.&quot",
 "&quotThe Cat in the Hat returns for more out of control fun. On a snowy day and Dick and Sally are stuck shoveling, until the Cat in the Hat arrives to liven things up.&quot",
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

var elem = document.getElementById("sale");
elem.innerHTML = str;