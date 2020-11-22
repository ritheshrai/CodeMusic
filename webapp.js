var bkg= document.body;

//getsong funtion
function loadXMLDoc() {
	var x = document.getElementById("searching").value;
  var xhttp = new XMLHttpRequest();
  var good=" ",god="";
  xhttp.open("GET", "https://codemusic.vercel.app/search?query="+x, true);
  xhttp.send();
  xhttp.onload = () => {
  	if(xhttp.status==200){
  		var k = JSON.parse(xhttp.response)
      if(k.Result=='false'){
      god ="<h1>No Results Found For now </h1>";}
      else
      {
for (i = 0; i < k.length; i++) 
    {
  		good ="<button type='button' class='btn btn-light full' onclick='playSong(\""+k[i].id+"\")'><div class='center'><img src='"+k[i].image+"' alt='"+k[i].title+"' width=141 height=141>"+"<h1>"+k[i].title+"</h1><p>" +k[i].description +"</p></button></div><hr>";
  	    god=god+good;
  	}
  }
  	console.log(god);
  	document.getElementById("demo").innerHTML="";
  	document.getElementById("demo").innerHTML=god;
  }
}}
function playSong(kid){
 var xhttp2 = new XMLHttpRequest();
 xhttp2.open("GET", "https://codemusic.vercel.app/song?id="+kid, true);
  xhttp2.send();
  xhttp2.onload = () => {
  	if(xhttp2.status==200){
  		var s = JSON.parse(xhttp2.response)
  		document.getElementById("player").innerHTML ="";
  		document.getElementById("player").innerHTML =`<audio id='myAudio' controls autoplay='autoplay' hidden="hidden"><source src='${s.media_url}' type='audio/mpeg'>  Your browser does not support the audio tag.</audio>`;
      document.getElementById("alb").style=`img:URL(${s.image})`;
      playss();
      bkg.style.backgroundImage = "url('"+s.imsge+"')";
    }
}
}
var x ; 
 function playss(){
 x = document.getElementById("myAudio");
   x.play();
  document.getElementById("plybtn").style.display = "none";
  document.getElementById("psbtn").style.display = "initial" ;
 }
  function pauseSong(){
    x = document.getElementById("myAudio");
   x.pause();
   document.getElementById("plybtn").style.display = "initial" ;
   document.getElementById("psbtn").style.display = "none";

   }


