function replace(){
    document.getElementById('search-icon').src="images/search2.png";
}
function restore(){
    document.getElementById('search-icon').src="images/search1.png";
}
function display(){
    for(var i = 0; i<4; i++){
        document.getElementsByClassName('sub-element')[i].style.display='block';
    }
}
function hide(){
    for(var i = 0; i<4; i++){
        document.getElementsByClassName('sub-element')[i].style.display='none';
    }
}