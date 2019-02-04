//watch and earn
 var jsi=document.createElement('script');
    jsi.type='text/javascript';
	jsi.src='https://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js';
	document.getElementsByTagName('head')[0].appendChild(jsi);
function collectView(){
var arrWAEParams = {};var adresse =window.location.href;
var content = adresse.replace('https://rya.rockyou.com/ams/dotd/server/ry_dotd_service.php?cmd=getDeal&dotdParams','').replace(/%5B/g,',').replace(/%5D/g,'').replace(/=/g,':');
	content = content.replace(/\"/g,'');
	content = content.replace(/\s/g,'');
	var re0 = /userId\:([\w-]+)/;
	var waeparam = content.match(re0);
	arrWAEParams["thirdpartyid"] = waeparam[1];
	
	var re1 = /placeguid\:([\w]+)/;
	waeparam = content.match(re1);
	arrWAEParams["placeguid"] =waeparam[1];
	var re2 = /initTimeStamp\:([\d]+)/;
	waeparam = content.match(re2);
	arrWAEParams["timestamp"] =waeparam[1];
	
	var re3 = /signature\:([\w]+)/g;
	waeparam = content.match(re3);
	arrWAEParams["signature"] =waeparam[0].replace(/signature\:/,'');
	
	var re4 = /signed_request\:([\w-.]+)/g;
	waeparam = content.match(re4);
	arrWAEParams["signed_request"] =waeparam[0].replace(/signed_request\:/,'');
	
	var re4 = /signed_request\:([\w-.]+)/g;
	waeparam = content.match(re4);
	arrWAEParams["signed_request"] =waeparam[0].replace(/signed_request\:/,'');
	
	var re5 = /parentAppId\:([\d]+)/g;
	waeparam = content.match(re5);
	arrWAEParams["parentAppId"] =waeparam[0].replace(/parentAppId\:/,'');
	
	var WAEAdKey = document.body.innerHTML;
var regex = /\"dealKey\"\:\"([\w]+)\"/g;
WAEAdKey = WAEAdKey.match(regex);
WAEAdKey = WAEAdKey[0].replace(/\"dealKey\"\:\"/,'').replace(/\"/,'');
document.body.innerHTML = 'COLLECTING....';
new Ajax.Request(
'https://rya.rockyou.com/ams/dotd/server/ry_dotd_tracking_service.php?cmd=trackTimerPercentCompleted&dealKey='+WAEAdKey+'&timerName=rewardEnable&percentCompleted=100&ryAppId=65&signed_request='+arrWAEParams["signed_request"]+'&_=1417456865962',
{
method: 'get',
asynchronous: true,
onSuccess : function(transport){
new Ajax.Request(
'https://rya.rockyou.com/ams/dotd/server/ry_dotd_service.php?cmd=reward&dotdParams%5Bplaceguid%5D='+arrWAEParams["placeguid"]+'&dotdParams%5BuserId%5D='+arrWAEParams["thirdpartyid"]+'&dotdParams%5BinitTimeStamp%5D='+arrWAEParams["timestamp"]+'&dotdParams%5Bsignature%5D='+arrWAEParams["signature"]+'&dotdParams%5BpreRewardMsg%5D=Earn Views&dealKey='+WAEAdKey+'&signed_request='+arrWAEParams["signed_request"]+'&dotdParams%5BrewardUrl%5D=https://fbeq.rockyou.com/facebook_apps/zoo/server/dotd/reward.php?parentAppId='+arrWAEParams["parentAppId"]+'%26campaign=views&ryAppId=65',
{
method: 'get',
asynchronous: true,
onSuccess : function(transport){
document.body.innerHTML = "You earned 1 View";
}
}
);
}
}
);
}
//setTimeout('collectView()',2000);
function checkLoad()
{
	if (document.body.innerHTML)
	{
		setTimeout('collectView()',2000);
	} else {
		setTimeout('checkLoad()', 500);
	}
}checkLoad();
