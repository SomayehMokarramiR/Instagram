like.onclick =  function (){like_dislike()};    
var l= 0;
function like_dislike(){
  if(l == 0){
    alert(l)
     like.className = "like";  
    l=1       
  }
  else if (l==1){
    alert(l)
    l=0;
  like.className = "dislike";
}

}
// if(main.onscroll > main.innerHeight ){

// }
  