 var s;

 var pos = 0;



function play(){
    setTimeout("go_right()",3000);
   setInterval("go_right()",3000);
 }
 
 function pause(){
	clearTimeout();
	clearInterval();
}


 function go_right(){

	if(pos > -300){
		pos = pos -40;
		galStory.style.right = pos + "%";
	}
	else if(pos == -300){
 		pos = 0;
		 galStory.style.right = pos + "%";	
	}
	
 }


 function go_left(){

 	if(pos < 0){
		pos = pos + 40;
 		gal.style.left = pos + "%";
 	}
	
 }


var s;

var pos = 0;



function play(playSpeed){
	s = setInterval("go_right()",playSpeed);
}

function pause(){
	clearInterval(s)
}



 function go_right(i){

	if(pos > -400){
		pos = pos - 100;
		gal.style.right = pos + "%";
	}
	else if(pos == -400){
		pos = 0;
		gal.style.right = pos + "%";	
	}
	
	changeTab(pos/-100)
}

function go_left(){

	if(pos < 0){
		pos = pos + 100;
		gal.style.right = pos + "%";
	}
	
		changeTab(pos/-100)
}

