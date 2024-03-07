function showModal(){
	modalPosts.className="show";
    mainPage.className="hide";
}
function showModalHome(){
	modalHome.className="show";
    mainPage.className="hide";
}
function showModalHomeInPost(){
	modalHome.className="show";
    modalPosts.className="hide";
}
function showMainPageInHome(){
	mainPage.className="show";
    modalHome.className="hide";
}
function showMainPageInPosts(){
	mainPage.className="show";
    modalPosts.className="hide";
}