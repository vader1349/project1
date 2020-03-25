function replace(){
    document.getElementById('sicon').src="images/search2.png";
}
function restore(){
    document.getElementById('sicon').src="images/search1.png";
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
function prev(){
    var pics=document.getElementsByClassName('slide-pic');
    var index=0;
    for(var i=0;i<pics.length;i++){
        if(pics[i].style.display=='block'){
            index=i;
            break;
        }
    }
    pics[index].style.display='none';
    if(index==0){
        index=pics.length-1;
    }
    else{
        index=index-1;
    }
    pics[index].style.display='block';
}
function next(){
    var pics=document.getElementsByClassName('slide-pic');
    var index=0;
    for(var i=0;i<pics.length;i++){
        if(pics[i].style.display=='block'){
            index=i;
            break;
        }
    }
    pics[index].style.display='none';
    index=(index+1)%pics.length;
    pics[index].style.display='block';
}
function hideOverLay(){
    document.getElementById('overlay').style.display='none';
}
function showPic(pic){
    document.getElementById('overlay').style.display='flex';
    var addr=pic.src;
    document.getElementById('big-pic').src=addr;
}