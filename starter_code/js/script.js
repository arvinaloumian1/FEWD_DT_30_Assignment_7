$(document).ready(function(){
 
	 
});

var hicon= document.getElementById("menu-icon");

hicon.onclick=function(){
	var state=$('#nav-div').css('display');
	if (state!='block') {
 			$('#nav-div').css('display','block');    
		}
	else{
		$('#nav-div').css('display','none');  
	}

}

        