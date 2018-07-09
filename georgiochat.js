
var dateobj = new Date();
var today = dateobj.getDay();
var todayMsg = "";

switch (today)
{
    case 0:
        todayMsg = "5 days to go!";
        break;
    case 1:
        todayMsg = "4 more days!";
        break;
    case 2:
        todayMsg = "3 more days!";
        break;
    case 3:
        todayMsg = "Only 2 more days!";
        break;
    case 4:
        todayMsg = "Tommorrow is the day!";
        break;
    case 5:
        todayMsg = "It's Chat Friday!<br>I'm available to chat real time!";
        break;
    case 6:
        todayMsg = "6 days to go";
        break;
}

document.getElementById("chat").innerHTML = todayMsg;
