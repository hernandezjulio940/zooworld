function clickCheck(){ //this function checks if the button turned green to click it 
	var button=window.divReward;
	if(button.className=="reward"){ //reward class appears when the button turns green
	window.divReward.click();refreshAfterDelay(); //it clicks and launch the function to refresh the video
	}else{
		retryAfterDelay(); //Check again
	}
}
function refreshAfterDelay(){
	setTimeout(function(){location.reload();}, 1000); //refresh the video
}
function retryAfterDelay(){
	setTimeout(function(){clickCheck(); }, 1000); //Check again
}
clickCheck(); //first Check
setTimeout(function(){location.reload();}, 180000);
