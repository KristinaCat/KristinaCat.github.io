
var theTime = new Date();
var hours = theTime.getHours();
var elem = document.getElementById("hello");

if(hours >= 0 && hours < 12)
{
   elem.innerHTML = "Good Morning Georgio Fans!";
}

else if(hours >= 12 && hours < 18)
{
   elem.innerHTML = "Good Afternoon Georgio Fans!";
} 

else
{
   elem.innerHTML = "Good Evening Georgio Fans!";
}