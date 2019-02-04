/* 
FEBRUARU 04, 2019  

Assistant by Julio Hernandez 
Version 5.0  - Just renumbering
Version 4.4c - Just a few fixes and button adjustments.
Version 4.4b - Fix for alert box in wae
Version 4.4a - Open auto watch and earn in another tab.
Version 4.4 - New auto watch and earn flyout (with videos). New chrome extension 
Version 4.3 - fixed sell from inventory. shake inventory works for shows and greenhouses but not trees (will list them but not shake). Fill greenhouses and qty and location is working again. Cleaning
Version 4.2f - Fixed Buildable Flyout so it will open after completing Buildable.Use the Buildable2 button after completing Buildable.
Version 4.2e - Fix MegaSpawn and Sending juice
Version 4.2d - Fix Adoption 
Version 4.2c - Harvest Buildable Parts now separated Rare&Ultra Rare Buttons
Version 4.2b - Fix mega spawn for mission animals.
Version 4.2a - Fix Ignore and return, new exclusives gifts.
Version 4.2 - Ignore and return, new exclusives gifts.
Version 4.1 - Manage gifts.
Version 4.0d - Auto button fixed.
Version 4.0c - Watch&earn fixed.
Version 4.0b - Try to multi redeem items in watch&earn flyout
Version 4.0a - New feeding flyout. Option to feed by groups of animals. Level up bonus in spawning tab removed.
Version 4.0 - Options page for chrome app, new flyout tab, friend list sorted by level
Version 3.5d - Removed Lucky Egg. Option to show Status box on top. Visual changes in Items Tab and Buildable and Placement Flyout. Faster Loading
Version 3.5c - Fix w&e. Auto collect one view at a time and added qty and giftable info. New Get Names function in send a gift to a list of Id's. New Flash sales in local time. 
Version 3.5b - Try to move all trophy babies. Removed multigifting and popup adds
Version 3.5a - Multigifting to same person.
Version 3.5 - Watch and earn in advanced tab.
Version 3.4f - Added accept/ignore everything without opening gift flyout in my zoo tab.
Version 3.4e - New get cash for slow pc. Ads removed.
Version 3.4d - New messages Inbox (zoo mail box).Faster Loading. Some Status infos changes. More infos in gifting center.
Version 3.4c - Placement tab : Show items on island grouped by Id and move them to storage. Added Gifts Qty filters in Items tab.
Version 3.4b - added Show zoomates id in Send a gift to a list of IDs
Version 3.4a - Buy lucky egg (in Items tab). Trainable filter button and rare gifts (giftable but not in shop or feed) button added in items tab
Version 3.4 - Show missing animals list in friends tab
Version 3.3g - Added hire help and finish mission for WLP... Click bigger pic to check/uncheck gift in gifting flyout...
Version 3.3f - Tree and buildable promo separated in two flyouts, pics on buildable flyout, send complete set of tree gifts without fbc gifts...
Version 3.3e - FBC Items button option/filter in Items tab. Cost, buy/buy for a friend directly in animal flyout without need for fbc codes
Version 3.3d - New collect cash in advanced tab. Added button of zoo page feed (next to zoo stats)
Version 3.3c - Option for Multiopen received tree gifts
Version 3.3b - Chrome changes
Version 3.3a - Show all friends Ids in Send a gift to a list of Ids; (b)Fixed buying fbc animals; removed multi upgrade of GH (fixed by RY)
Version 3.3 - Automated seasonal and gifting tree list population.
Version 3.2g - Convert username or profile url to Ids in send gift to a list of Ids flyout.
Version 3.2f - Claim text links for money or all other spawn links except roses with dan "open flyout" in my zoo tab. Reverse order option in Items tab.
Version 3.2e - Megaspawn tables; New selected buttons (accept&return,accept and ignore) with checkboxes in front of each kind of item, and checked gifts memory for the next refreshing.
Version 3.2d - New alert button (explaining new function); change in answer next quiz (user select how many of their quizzes to answer), shake all with shakey (uses juice); changes in search new items; removed quiz options in advanced tab (fixed by RY).
Version 3.2c - Search for new items.
Version 3.2b - Empty Greenhouses.
Version 3.2a - Remove Multiple Quiz Answering from My Zoo and Seasonal flyout as this was fixed by RY.
Version 3.2 - Multiply your trees with greenhouse.
Version 3.1f - Shake friends trees and greenhouses, Multiupgrade greenhouses bronze to silver and silver to gold, Buy FBC animals for any player (not only friend or zoomate), Send juice just like other items but Unlimited.
Version 3.1e - New Flyout to send a gift to a list of Players Ids in Items tab, search by name in friends tab, Fixed zoomates invite and added Invite all....
Version 3.1d - Fixed gifting flyout with Itemlist not updated, Fixed manage breeding with adamantium or Itemlist not updated and new appearance, new breedBoost function, new filter buttons in Items tab, removed "haunted house" in mega spawn (no longer working)...
Version 3.1c - Boost ALL babies with juice (no need for growth formula anymore)...
Version 3.1b - Pics of some senders in gifting flyout and possibility to show all their names in status by clicking "load friends list" button ...
Version 3.1a - New Breeding Stats flyout in Items tab, Htlm by default in format of megaspawn ...
Version 3.1 - Fixed gift by ID and MegaSpawn any Feed Animal by Id
Version 3.0f - Fixed Oak tree in spawning tab and megaspawm, added send free gift flyout in items tab
Version 3.0e - Fixed Gifting and Username issues...
Version 3.0d - Gift flyout updated to refresh less often... Should help freezing issues.  Send Random part to Each Friend no longer sends same part to all. Seasonal Animal Upgrade cost fixed. New Custom Adopt Images - not complete yet.
Version 3.0c - How many parts needed for each seasonal animal, and seasonal animal upgrade cost - hover over complete and upgrade on seasonal flyout for each animal... Time remaining!
Version 3.0b - Share Planting Tables and Welcome Baskets!
Version 3.0a - New gifts flyout in "my zoo" tab and send to all Zoomates in animal flyout....
Version 3.0 - New and improved - now hosted on dfzw.jaidnet.com and updated by new team selected by Jonah.  :)
*/

//Checking wrong installer
/*if( window.location.host.indexOf("rockyou.com")==-1){
	alert('You are using an old version of dan, please uninstall it and reinstall the new version ! ');
}*/

// configuration
var zdVersion = "5.0 Team Dan ";
//var zdAjaxCallDelay = 700; // milliseconds between each asynchrous AJAX call (e.g. feed an animal, visit a zoo)
if(!optionsUrl){
	var optionsUrl=false;
}
if(!zdDanSettings){
	var zdDanSettings= 'js/DFZWassistant.css';
}
if(!language){
	var language="en";
}
if(!zdAjaxCallDelay){
	var zdAjaxCallDelay= 700;
}
if(!isLite){
	var isLite=false;
}
if(!statusbox){
	var statusbox='bottom';
}
if(!showQty){
	var showQty=true;
}
if(!showCostData){
	var showCostData=false;
}
if(!showBreedData){
	var showBreedData=false;
}
if(!showIcons){
	var showIcons=false;
}
if(!showBanner){
	var showBanner=true;
}
if(!arrI){
	var arrI=false;
}
if(!arrIR){
	var arrIR=false;
}
if(!arrAO){
	var arrAO=false;
}
if(!arrAR){
	var arrAR=false;
}
if(!returnFreeAnimals){
	var returnFreeAnimals=true;
}
if(!returnExclusives){
	var returnExclusives=false;
}
if(!returnPromoPart){
	var returnPromoPart=false;
}
var zdZooItems = null;
var zdZooAdoptItems= null;
var idList = null;
var FBCList = null;
var zdWorkQueue = new Array();
var zdWorkQueueProcessing = false;
var zdHomePageUrl = 'https://squirrelzw.com/';
var zdUnframedUrl = zdHomePageUrl+'unframed_zoo.html';
var zdZooLoaded =0;
//var zdGroupUrl = 'http://...'; // 
//var zdGroupUrl = 'http://...'; // 
//var zdHelpUrl = 'http://...';

// libraries
var zdPrototypeUrl = zdHomePageUrl+'js/DFZWprototype.js';

// includes

var zdCssUrl = zdHomePageUrl+''+zdDanSettings;
var zdZooItemJsUrl = zdHomePageUrl+'js/zooItem.js';
//var zdWorkaroundUrl = 'http://fbeq.rockyou.com/facebook_apps/client/tracker.php';
var zdTranslationJsUrl = zdHomePageUrl+'js/DFZWassistantLanguages2.22.js';
var zdTranslationBaseJsUrl = zdHomePageUrl+'js/english_base2.21.js';
var linkrUrl = 'https://squirrelzw.com/GameLinks.htm';

// ZW JSON URLs
var zdprotocol = window.location.protocol+'//';
var zdgiftInIframeUrl = zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/giftInIframe.php?';
var zdshopInIframeUrl = ''+zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/shopInIframe.php?';
var zdzoomateInviteIframeUrl = ''+zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/zoomateInviteIframe.php?';
var zdZooStatsUrl = ''+zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/server/index.php/zooStats?';
var zdIndexPHP = 'fbeq.rockyou.com/facebook_apps/zoo/server/index.php/';
var zdFriendServiceUrl = zdprotocol+''+zdIndexPHP+'friend?';
var zdLoadZooServiceUrl = zdprotocol+''+zdIndexPHP+'loadZoo?';
var zdZooItemServiceUrl = zdprotocol+''+zdIndexPHP+'zooItem?';
var zdTreeShakingServiceUrl = zdprotocol+''+zdIndexPHP+'treeShaking?';
var zdCumulativeShakingServiceUrl = zdprotocol+''+zdIndexPHP+'cumulativeShaking?';
var zdPrizeClaimServiceUrl = zdprotocol+''+zdIndexPHP+'prizeClaim?';
var zdTrainingServiceUrl = zdprotocol+''+zdIndexPHP+'training?';
var zdLoadIslandServiceUrl = zdprotocol+''+zdIndexPHP+'loadIsland?';
var zdShopActionServiceUrl = zdprotocol+''+zdIndexPHP+'shopAction?';
var zdCreateTicketServiceUrl = zdprotocol+''+zdIndexPHP+'createTicket?';
var zdBreedingServiceUrl = zdprotocol+''+zdIndexPHP+'breed?';
var zdCumulativeTreatServiceUrl = zdprotocol+''+zdIndexPHP+'CumulativeTreat?';
var zdClaimDailyWrenchGiftUrl = zdprotocol+''+zdIndexPHP+'claimDailyWrench?';
var zdLoadInventoryServiceUrl = zdprotocol+''+zdIndexPHP+'inventory?';
var zdBuildablesServiceUrl = zdprotocol+''+zdIndexPHP+'buildables?';
var zdProjectServiceUrl = zdprotocol+''+zdIndexPHP+'project?';
var zdMissionServiceUrl = zdprotocol+''+zdIndexPHP+'mission?';
var zdSettingsServiceUrl = zdprotocol+''+zdIndexPHP+'settings?';
var zdMailServiceUrl = zdprotocol+''+zdIndexPHP+'mail?';
var zdSellbackServiceUrl = zdprotocol+''+zdIndexPHP+'zooItemSellback?';
var zdFarmingServiceUrl = zdprotocol+''+zdIndexPHP+'farming?';
var zdGiftingCenterServiceUrl = zdprotocol+''+zdIndexPHP+'giftingCenter?';
var zdWatchAndEarnUrl = zdprotocol+''+zdIndexPHP+'watchEarn?';
var zdViralUrl = zdprotocol+''+zdIndexPHP+'viral?';
var zdMissionUrl = zdprotocol+''+zdIndexPHP+'mission?';
var zdgiftUrl= zdprotocol+''+zdIndexPHP+'gift?';

// ZW items (reference)
var zdZooItemUrl = 'http://cdn.rockyou.com/apps/zoo/flash/assets/zooItem.json';
var zdZooItemZipUrl = 'http://cdn.rockyou.com/apps/zoo/flash/assets/zooItem.bin';
var zdIslands = 51;
var arrTrainingData = [];
// zdDownloadZooItem();
// http://cdn.rockyou.com/apps/zoo/flash/cache/

// get URL parameter
function gup(name){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( PageData.app.params );
	if( results == null ){
		return "";
	}else{
		return results[1];
	}
}

function gup2(name){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&\"]"+name+"=([^&#\"]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( document.body.innerHTML );
	if( results == null ){
		return "";
	}else{
		return results[1];
	}
}

function gup3(name){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = ""+name+"=([^&#\"]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( PageData.app.params );
	if( results == null ){
		return "";
	}else{
		return results[1];
	}
}

// add Javascript include
function zdAddJsLink(jsUrl){
	var jsi=document.createElement('script');
	jsi.type='text/javascript';
	jsi.src=jsUrl; // + "?salt=" + (new Date()).getDate();
	document.getElementsByTagName('head')[0].appendChild(jsi);
	return;
}

// add CSS include
function zdAddCssLink(cssUrl){
	var csi=document.createElement('link');
	csi.type='text/css';
	csi.rel='stylesheet';
	csi.href=cssUrl; // "?salt=" + (new Date()).getDate();
	document.getElementsByTagName('head')[0].appendChild(csi);
	return;
}

// capture parameters from iframe URL
var zd_fb_sig_user = PageData.player.uid;
var zd_fb_sig_user_id = PageData.player.uid;
var zdUserId = PageData.player.uid;
var zd_signed_request = signedReq;
//var zd_fb_sig_algorithm = gup3( 'fb_sig_algorithm' );
//var zd_fb_sig_issued_at = gup( 'fb_sig_issued_at' );
//var zd_fb_sig_oauth_token = gup( 'fb_sig_oauth_token' );
//var zd_fb_sig_ext_perms = gup( 'fb_sig_ext_perms' );
//var zd_fb_sig_api_key = gup( 'fb_sig_api_key' );
//var zd_fb_sig_iframe_key = gup( 'fb_sig_iframe_key' );
//var zd_fb_sig_app_id = gup( 'fb_sig_app_id' );
//var zd_fb_sig_session_key = gup( 'fb_sig_session_key' );
//var zd_fb_sig = gup( 'fb_sig' );
//var zd_fb_sig_time = gup( 'fb_sig_time' );
//var zd_fb_sig_profile_update_time = gup( 'fb_sig_profile_update_time' );
//var zd_fb_sig_base_domain = gup( 'fb_sig_base_domain' );
//var zd_fb_sig_locale = gup( 'fb_sig_locale' );
//var zd_fb_sig_country = gup( 'fb_sig_country' );
//var zd_fb_sig_ss = gup( 'fb_sig_ss' );
//var zd_fb_sig_cookie_sig = gup( 'fb_sig_cookie_sig' );
//var zd_fb_sig_expires = gup( 'fb_sig_expires' );
// var zd_fb_sig_expires = 0;
//var zd_version = gup( 'version' );
//var zd_visit_zoo_swf_gateway_channel = gup( 'visit_zoo_swf_gateway_channel' );
//var zd_fb_sig_in_new_facebook = 1;
//var zd_fb_sig_added = 1;
//var zd_fb_sig_in_iframe = 1;

// app name and ID
var zd_appname = PageData.app.name;
var zd_appurl = "zooworldclassic";
var zd_appId = 104; 
var zd_fb_sig_app_id = 148662968522174;
if(zd_appname == 'zooparent'){
	zd_appId = 74;
	zd_appurl = "playzoo";
	zd_fb_sig_app_id= 167746316127;
}else if(zd_appname == 'likeness'){
	zd_appId = 25;
	zd_appurl = "likeness";
} else if(zd_appname == 'horoscope'){
	zd_appId = 2;
	zd_appurl = "horoscopes";
} else if(zd_appname == 'birthdays'){
	zd_appId = 46;
	zd_appurl = "rybirthday";
} else if(zd_appname == 'hugme'){
	zd_appId = 9;
	zd_appurl = "doittome";
} else if(zd_appname == 'swall'){
	zd_appId = 'superwall_prod';
	zd_appurl = "superwall";
} else if(zd_appname == 'superpets'){
	zd_appId = 59;
	zd_appurl = "rysuperpets";
} else if(zd_appname == 'zootestmg'){
	zd_appId = 0; // ???
	zd_appurl = ""; // ??
}

var zdlang = {
	"languages": [
		"en", "rs", "de", "es", "id", "it", "ru", "he", "hr", "pt", "uk", "pl", "cn", "cnp", "fr"
		// , "jp"
	],
	"en": {
		"title": "Zoo World Assistant",
		// Languages
		"language": "Language",
		"en": "English",
		"rs": "Serbian",
		"de": "German",
		"es": "Spanish",
		"id": "Indonesian",
		"it": "Italian",
		"ru": "Russian",
		"he": "Hebrew",
		"hr": "Croatian",
		"pt": "Portuguese",
		"uk": "Ukranian",
		"pl": "Polish",
		"cn": "Chinese",
		"cnp": "Chinese (phonetic)",
		"fr": "French",
		
		"jp": "Japanese",
		// tabs
		"tab_about": "About",
		"tab_myzoo": "My Zoo",
		"tab_items": "Items",
		"tab_spawning": "Spawning",
		"tab_friends": "Friends",
		"tab_advanced": "Advanced",
		// footer
		"footer_status": "Status",
		"footer_friends": "Friends",
		"footer_zoo": "Zoo",
		"footer_results": "AJAX results",
		"footer_clear_log": "Clear Log",
		// About
		"about_title": "About",
		"about_body_1": "This is a tool to help with all of the clicks needed to play Zoo World. This can be considered a cheat and the results cannot be guaranteed. Use at your own risk!",
		"about_body_2": "There are two kinds of people in the world: people who can read and people who have already clicked elsewhere.",
		"about_body_3": "If you are still here then maybe you will pay attention to what I write. I had to remove these scripts because of the drama caused within the Zoo World community. Next time I may not come back. Be sensible, be discreet and don't think you won't get punished for cheating.",
		"about_body_4": "I make mistakes, things change in Zoo, things change in Facebook, and the scripts stop working. A polite note might tell me something I don't know. A hundred nags will do no good.",
		"about_body_5": "Enjoy my scripts and have fun! It is a game afterall!  :)",
		"about_body_6": "For Help, check out the Assistant's new ",
		"about_body_help": "Help Groups ",
		"about_body_7": "To share tips with other Assistant users check out ",
		"about_body_group": "The Assistant Caf&eacute;. ",
		
		
		// My Zoo
		"myzoo_feeding_title": "Feeding",
		"myzoo_feeding_feed": "Feed",
		"myzoo_feeding_collect": "Collect",
		"myzoo_feeding_day": "day",
		"myzoo_feeding_days": "days",
		"myzoo_gates_title": "Gates",
		"myzoo_gates_collect_all": "Collect XP from all gates",
		"myzoo_gates_collect_booth_15": "Collect Ticket Booth $$ every 15 min.",
		"myzoo_training_title": "Training",
		"myzoo_treasure_title": "Treasure Hunt and Visit",
		"myzoo_treasure_visit_all": "treasure hunt only",
		"myzoo_treasure_start_at": "Start at zoo",
		"myzoo_treasure_continue_from": "visit and treasure hunt",
		"myzoo_kiosk_title": "Kiosks",
		"myzoo_kiosk_collect_all": "collect all kiosks",
		"myzoo_shake_title": "Shake trees, topiaries, sculptures, mushrooms, shows, rose garden, etc",
		"myzoo_shake_shake_all": "shake all islands",
		"myzoo_upgradecollect_title": "Upgrade Collectibles",
		"myzoo_move_title": "Move all items from an island to storage",
		"myzoo_fill_title": "Fill GH from inventory",
		"myzoo_auto_title": "Auto",
		"myzoo_auto_intro": "Collect/feed all animals by group for a day ,Collect XP from all gates, collect money from booth, shake all trees, treasure hunt all friends...",
		"myzoo_lists_title": "Lists",
		"myzoo_lists_intro": "Generate have/have not list of animals...",
		"myzoo_breeding_title": "Breeding",
		"myzoo_breeding_intro": "Manage breeding",
		// Items
		"shop_title": "Items",
		"shop_intro": "This is a list of all known items within Zoo World.",
		"shop_loading": "The Big Shop of Everything is loading...",
		"shop_buy_id": "buy any item by ID",
		"shop_buy_id_intro": "(when this shop has not been updated).",
		"shop_buylots_id": "buy lots by ID",
		"shop_buylots_id_intro": "(when this shop has not been updated).",
		"shop_upgrade_id": "upgrade any animal by ID",
		"shop_upgrade_id_intro": "(when this shop has not been updated).",
		"shop_gift_id": "gift any item by ID",
		"shop_repeat_buy_id": "repeat buy any item by ID",
		"shop_repeat_buy_id_intro": "(buy 10 of a specific item by ID every 5 seconds).",
		"shop_buy_fbc_intro": "Buy for FBC",
		"shop_buy_by_wlf_item_id": "buy by wlfItemId",
		"shop_paypal_howto": "How to CANCEL your \"One Click Agreement\" between RockYou, Inc and PayPal after buying WLP or an Ultra Rare.",
		"shop_sell_id_intro": "Sell inventory item by id.",
		"shop_sell_id": "Sell item by id.",
		"shop_flyout_actions_sell_prompt": "How many to sell?",
		// Spawning
		"gifts_title": "Spawning",
		"gifts_gifts_title": "Gifts",
		"gifts_level_title": "Level up",
		"gifts_level_intro": "Type desired level",
		"gifts_daily_title": "Share Daily Gift",
		"gifts_trophy_title": "Trophy",
		"gifts_juice_title": "Juice",
		"gifts_flowerpots_title": "Flower Pots",
		"gifts_halloween_title": "Halloween",
		"gifts_halloween_ask_sewing": "Ask for sewing help",
		"gifts_fieldtrip_anything_by_id": "anything by ID",
		"gifts_treattrophy_title": "Treat Trophy",
		"gifts_buildables_title": "Buildables",
		"gifts_missions_title": "Missions",
		"gifts_missions_start": "start",
		"gifts_missions_republish": "republish",
		"gifts_missions_complete": "complete",
		"gifts_rosegarden_title": "Rose Garden",
		"gifts_rosegarden_share_upgrade": "share garden upgrade on wall",
		"gifts_rosegarden_ask_rose": "ask for roses on wall",
		"gifts_rosegarden_share_rose": "share rose on wall",
		"gifts_goldenegg_title": "Golden Egg",
		"gifts_icecream_title": "Ice Cream",
		"gifts_greenhouse_title": "Greenhouse",
		"gifts_megaspawn_title": "Mega Spawn",
		// Visiting
		"visiting_resume_intro": "(can resume at a specific zoo, if process crashes)",
		"visiting_go_outside": "Note that depending on the number of friends you have, this could take a long time! Go outside and play :)",
		"visiting_load_friends": "View and Browse your Friends List...",
		// Advanced
		"advanced_title": "Advanced",
		"advanced_intro": "If you not sure what this is, this is not for you!",
		"advanced_detailedlogging_title": "Detailed logging",
		"advanced_friends_title": "Friends",
		"advanced_zoo_title": "Zoo",
		"advanced_zoodisplay_title": "Zoo display size",
		"advanced_cookies_title": "Cookies",
		"advanced_workqueue_title": "Work Queue",
		"advanced_play_title": "Play",
		"advanced_alternateaccess_title": "Alternate access",
		"advanced_tryto_title": "Try to",
		"advanced_goldeninviter_title": "Golden inviter",
		"advanced_punkd_title": "Punk'd",
		"advanced_javacript_javacript": "Javascript",
		"advanced_javacript_evaluate": "evaluate",
		"advanced_javacript_ajaxdelay": "AJAX delay (milliseconds)",
		// generic
		"show": "show",
		"hide": "hide",
		"shop": "Shop",
		"reload": "reload",
		"island": "island",
		"islands": "islands",
		"minute": "minute",
		"minutes": "minutes",
		"hour": "hour",
		"hours": "hours",
		"day": "day",
		"days": "days",
		"once": "once",
		"repeat": "repeat",
		"to_friend": "to friend",
		"specify_user_id": "specify user ID",
		"specific_user": "specify user",
		"specify_user_id_prompt": "Specify userId:\n(figure out this ID from their profile)",
		"specify_animal_id": "specify animal ID",
		"specify_animal_id_prompt": "Specify animalId:\n(figure out this ID from the shop list)",
		"send_to_feed": "send to feed",
		"ask_on_feed": "ask on feed",
		"ask_for": "ask for",
		"share": "share",
		"share_roses": "share 'roses'",
		"post": "post",
		"share_completion": "share completion",
		"completed": "completed",
		"help": "help",
		"easy": "easy",
		"medium": "medium",
		"hard": "hard",
		"invite": "invite",
		"hatched": "hatched",
		"send_as_request": "send as request",
		"ask_as_request": "ask as request",
		"update_button": "update button",
		"button_go": "go",
		"start": "start",
		"republish": "republish",
		"complete": "complete",
		// 2010/12/08
		// generic
		"post_trade": "post trade",
		"update": "update",
		"loaded": "loaded",
		"main_zooremoved": "Zoo removed",
		"main_clicktogetback": "click to get back",
		"executing": "executing",
		"specify_item_id_prompt": "Specify itemId:\n(figure out this ID from the shop list)",
		"close": "close",
		"buy": "buy",
		"gift": "gift",
		"breed": "breed",
		"upgrade": "upgrade",
		"shareonwall": "share on wall",
		"refresh": "refresh",
		"project": "project",
		// Items
		"shop_flyout_categories": "Categories",
		"shop_flyout_rarity": "Rarity",
		"shop_flyout_breedingtime": "Breeding time",
		"shop_flyout_purchasefor": "Purchase for",
		"shop_flyout_actualdollars": "actual dollars",
		"shop_flyout_fbc": "Facebook Credits",
		"shop_flyout_wlp": "Wild Life Points",
		"shop_flyout_images_title": "Images",
		"shop_flyout_images_large": "large",
		"shop_flyout_images_small": "small",
		"shop_flyout_images_baby": "baby",
		"shop_flyout_actions_title": "Actions",
		"shop_flyout_actions_buylots_prompt": "Number of items to buy?",
		"shop_flyout_actions_buylots": "buy lots",
		"shop_flyout_actions_postadopt": "post adopt",
		"shop_flyout_actions_customadopt": "custom adopt",
		"shop_flyout_actions_thanksgivingwlpupgrade": "try to upgrade to ultra for 1 WLP",
		"shop_flyout_actions_findinzoo": "find in zoo",
		"shop_flyout_actions_upgradeforwrenches": "upgrade for wrenches",
		"shop_flyout_actions_cantbuy": "can not buy these...",
		"shop_flyout_actions_trytobuy": "Try to buy anyway?",
		"shop_flyout_actions_numitemstobuy": "Number of items to buy? (for animals, must be less than the amount to upgrade, for others a maximum of 999)",
		"shop_flyout_actions_movealltostorage": "move all to storage",
		"shop_flyout_actions_moneywarning": "WARNING: this item costs money and you may be charged without warning!",
		"shop_flyout_actions_facts": "Facts",
		"shop_flyout_actions_training": "Training",
		// advanced
		"advanced_friends_loadlist": "load list",
		"advanced_friends_deduplicatelist": "deduplicate list",
		"advanced_zoo_loadzoo": "load your Zoo",
		"advanced_zoo_loadanyzoo": "load any Zoo",
		"advanced_zoo_showzoo": "show Zoo",
		"advanced_zoo_specifyisland": "Specify island ID (0-"+(zdIslands-1)+"):",
		"advanced_zoo_loadyourisland": "load your island",
		"advanced_zoodisplay_normal": "normal",
		"advanced_zoodisplay_big": "big",
		"advanced_cookies_cookies": "cookies",
		"advanced_cookies_show": "show",
		"advanced_cookies_delete": "delete",
		"advanced_cookies_set": "set",
		"advanced_workqueue_start": "start",
		"advanced_workqueue_stop": "stop",
		"advanced_workqueue_itemsinthequeue": "items in the queue.",
		"advanced_workqueue_showsize": "show size",
		"advanced_workqueue_clear": "clear",
		"advanced_alternateaccess_unframe": "Unframe Zoo",
		"advanced_alternateaccess_workaround": "Workaround Zoo (Lite)",
		"advanced_tryto_forceadopt": "Force Adopt",
		"advanced_tryto_payday": "pay day",
		"advanced_tryto_unlock11thisland": "unlock 11th island",
		// megaspawn flyout
		"megaspawn_flyout_title": "Mega Spawn",
		"megaspawn_flyout_projects": "Projects",
		"megaspawn_flyout_multiplenotes": "Multiple notes",
		// animal list flyout
		"animallist_flyout_title": "Animal List",
		"animallist_flyout_intro": "Copy and paste this list to use",
		// breeding flyout
		"breeding_flyout_title": "Breeding List",
		"breeding_flyout_breeding": "breeding",
		"breeding_flyout_innest": "in nest",
		"breeding_flyout_nomorenests": "No more free nests, sorry!",
		"breeding_flyout_nobabies": "No babies in nests.",
		"breeding_flyout_heal": "heal",
		"breeding_flyout_feed": "feed",
		"breeding_flyout_notready": "not ready",
		"breeding_flyout_upgradeandmove": "upgrade and move",
		"breeding_flyout_move": "move",
		// custom adopt flyout
		"customadopt_flyout_title": "Custom Adopt",
		"customadopt_flyout_name": "name",
		"customadopt_flyout_image": "image",
		"customadopt_flyout_title": "title",
		"customadopt_flyout_bodytext": "body text",
		"customadopt_flyout_button": "button",
		"customadopt_flyout_postbutton": "Post Custom Adopt",
		"customadopt_flyout_editingnotadvised": "Editing the items below not advised!",
		// friend list
		"friendlist_addzoomate": "add zoo mate",
		"friendlist_visitzoo": "visit",
		"friendlist_viewprofile": "view profile",
		"friendlist_viewtmlzoo": "timeline zoo",
		"friendlist_viewtmlhug": "timeline hug me",
		"friendlist_viewtmlcla": "timeline classic",
		"friendlist_posttreasurechest": "post treasure",
		"friendlist_postmysterychest": "post mystery",
		"friendlist_posthungryanimals": "post hungry animals",
		"friendlist_sendvitamin": "send vitamin",
		"friendlist_sendgoldgreenhouse": "send gold greenhouse",
		// work queue
		"workqueue_starting": "Starting queue",
		"workqueue_remaining": "remaining",
		"workqueue_alreadystarted": "Queue already started",
		"workqueue_stopped": "Stopped queue",
		"workqueue_stopping": "Stopping queue",
		"workqueue_alreadstopped": "Queue already stopped",
		// 2010/12/09
		"animallist_flyout_generating": "Generating lists...",
		"animallist_flyout_havelist": "Animal have list",
		"animallist_flyout_havenotlist": "Animal have not list",
		"animallist_flyout_note": "Note: many of the animals you are missing may be discontinued or unreleased.",
		// status
		"status_buying_buying": "buying",
		"status_buying_bought": "bought",
		"status_buying_ofitem": "of item",
		"status_buying_upgradingitem": "upgrading item",
		"status_buying_upgradeditem": "upgraded item",
		"status_wlfitemid_specify": "Specify wlfItemId",
		"status_friendlist_loaded": "Friend list already loaded...",
		"status_friendlist_loading": "Loading your friend list...",
		"status_friendlist_found": "Found",
		"status_friendlist_friends": "friends",
		"status_zoo_notloaded": "Zoo not loaded...",
		"status_zoo_loadedforfriend": "Loading Zoo for",
		"status_feeding_waitingfor": "Waiting to feed again for",
		"status_feeding_fed": "fed",
		"status_feeding_collected": "collected",
		"status_feeding_withtreat": "with treat",
		"status_feeding_animalswithtreat": "animals with treat",
		"status_feeding_noanimalsforcumulative": "No animals for cumulative feed service",
		"status_training_training": "Training",
		"status_training_everyfiveminutes": "every five minutes...",
		"status_training_trained": "Trained",
		"status_gate_collectingxp": "Collecting XP from gate from island",
		"status_gate_collectedxp": "Collected XP from gate from island",
		"status_booth_collecting": "Collecting money from gate booth...",
		"status_booth_collected": "Collected money from gate booth...",
		"status_visiting_visited": "Hunted",
		"status_visiting_zooandcollected": "and found",
		"status_visiting_totalcollected": "Total treasure",
		"status_visiting_visiting": "Visiting",
		"status_visiting_visitedandcollected": "Visited zoo and collected",
		"status_visiting_collected": "Collected",
		"status_visiting_visitingall": "Visiting all",
		"status_visiting_ofyourfriendszoos": "of your friends Zoos...",
		"status_shaking_shakingitem": "Shaking item",
		"status_shaking_oftype": "of type",
		"status_shaking_forfriend": "for friend",
		"status_shaking_notshakingitem": "Shaking item",
		"status_shaking_shaking": "Shaking",
		"status_shaking_for": "for",
		"status_shaking_shookitems": "Shook items...",
		"status_shaking_shookitemsfailed": "Failed to shake items...",
		"status_island_loadingisland": "Loading island",
		"status_island_for": "for",
		"status_inventory_loading": "Loading inventory for",
		"status_inventory_queuing": "Queuing",
		"status_inventory_forshaking": "for shaking...",
		"status_moving_moving": "Moving",
		"status_moving_toinventory": "to inventory",
		"status_moving_toisland": "to island",
		// Items
		"shop_listempty": "List empty",
		// Spawning
		"gifts_giftingitem": "Gifting item",
		"gifts_spawning": "Spawning",
		"gifts_trophy": "trophy",
		"gifts_mission": "mission",
		//  spawn
		"spawn_flyout_gifts": "Gifts",
		"spawn_flyout_missions": "Missions",
		// generic
		"completion": "completion",
		// 2010/12/13
		"confirm_moving_tostorage": "Really move all of your",
		"confirm_moving_tostorage2": "to storage?",
		"status_moving_item": "Moving item",
		"status_moving_item2": "to storage...",
		"confirm_unlock_11thisland": "Try to unlock 11th island? (only works if you have exactly ten)",
		"status_unlock_11thisland": "Unlocking 11th island...",
		// generic
		"error": "error",
		"buy_more_for_wlp": "Buy",
		"buy_more_for_wlp_prompt": "Do you want to buy more of this item for WLP?",
		"buy_more_for_wlp_prompt_specify_amount": "Do you want to buy more of this item for WLP?\n(specify number of items to buy)",
		// upgrade collectibles
		"shop_flyout_actions_upgrade_collectible": "upgrade collectible",
		"upgrade_collectible_prompt1": "How many collectible",
		"upgrade_collectible_prompt2": "to upgrade to",
		// Seasonal
		"gifts_promo_title": "Seasonal",
		"spawn_flyout_seasonal": "Seasonal",
		"seasonal_flyout_title": "Seasonal &mdash; WLP vortex of doom",
		"seasonal_flyout_items_intro": "Items",
		"gifts_seasonal_title": "Seasonal &mdash; WLP vortex of doom"
	}
};
// DFZW Assistant Translations 2.21 2011/01/01

// Serbian translation by Alexandra Brkusanin 2010/12/14
zdlang['rs'] = {
	// generic
	"title": "Asistent za Zoo World",
	"show": "prika&#382;i",
	"hide": "sakrij",
	"shop": "Prodavnica",
	"reload": "Ucitaj ponovo",
	"language": "Jezik",
	"en": "Engleski",
	"es": "&#352;panski",
	"de": "Nema&#269;ki",
	"rs": "Srpski",
	"ru": "Ruski",
	"cn": "Kineski",
	"jp": "Japanski",
	"it": "Italijanski",
	"pt": "Portugalski",
	"fr": "Francuski",
	"id": "Indonezijski",
	"hr": "Hrvatski",
	"he": "Hebrejski",
	"pl": "Poljski",
	"uk":"Ukrajinski",
	// tabs
	"tab_about": "Dobrodo&#353;li u...",
	"tab_myzoo": "Moj Zoo",
	"tab_items": "Stavke ",
	"tab_spawning": "Postaviti na stranu",
	"tab_friends": "Prijatelji",
	"tab_advanced": "Unaprediti",
	// footer"footer_status": "Status",
	"footer_friends": "Prijatelji",
	"footer_zoo": "Zoo",
	"footer_results": "Rezultat AJAX",
	"footer_clear_log": "&#268;ist Log",
	// about
	"about_title": "O asistentu ",
	"about_body_1": "Ovo je program za pravljenje divnih trikova u Zoo World-u.Ovo se mo&#382;e smatrati kao varanje i hakovanje,pa rezultat ne mo&#382;e da bude podr&#382;an i zagarantovan. Koristite je na sopstveni rizik.",
	"about_body_2": " Postoje dve vrste ljudi na svetu: ljudi koji &#269;itaju i ljudi koji su ve&#263; kliknuli negde.",
	"about_body_3": "Ako si i dalje ovde ,onda mo&#382;da &#263;es obratiti pa&#382;nju na ono sto pi&#353;e.Morao sam da sklonim neke skriptove radi drame izazvane u Zoo World zajednici. Slede&#263;i put se mo&#382;da ne&#263;u vratiti. Budite razumani,budite diskretani i nemojte da mislite da ne&#263;ete biti ka&#382;njeni za varanje.",
	"about_body_4": " Ja pravim gre&#353;ke,stvari se menjaju u ZOO-u, stvari se menjaju na Facebook-u i skriptovi prestanu da rade. Ljubazna napomena mo&#382;da mi ka&#382;e ne&#353;to &#353;to neznam. Hiljadu prigovaranja ne&#263;e u&#269;initi dobro.",
	"about_body_5": " U&#382;ivajte u mojim skriptovima i zabavite se!Ujedno pridru&#382;ite se na&#353;oj grupi.",
	"about_body_group": "Grupa",
	// My Zoo
	"myzoo_feeding_title": "Hraniti",
	"myzoo_feeding_feed": "Hraniti",
	"myzoo_feeding_collect": "Pokupiti",
	"myzoo_feeding_day": "Dan",
	"myzoo_feeding_days": "Dani",
	"myzoo_gates_title": "Kapije",
	"myzoo_gates_collect_all": "Pokupi XP sa svih kapija",
	"myzoo_gates_collect_booth_15": "Pokupiti novac sa blagajne svakih 15 minuta",
	"myzoo_training_title": "Treniranje",
	"myzoo_treasure_title": "Lovac na blago (Potreban je skuplja&#269; blaga)",
	"myzoo_treasure_visit_all": "Zoo svih prijatelja",
	"myzoo_treasure_start_at": "Po&#269;ni od...",
	"myzoo_treasure_continue_from": "Nastavi od...",
	"myzoo_kiosk_title": "Kiosci",
	"myzoo_kiosk_collect_all": "Pokupi sa svih kioska",
	"myzoo_shake_title": " Tresti drve&#263;e, ukrasni &#382;bunovi, skulpture,pe&#269;urke,predstave, ru&#382;inu ba&#353;&#65279;tu , itd.",
	"myzoo_shake_shake_all": " Protresi sva ostrva",
	"myzoo_move_title": "Pomeri sve stvari sa ostrva u skladi&#353;te ",
	"myzoo_fill_title": " Popuniti staklene ba&#353;te iz invetara",
	"myzoo_auto_title": "Automatski ",
	"myzoo_auto_intro": "Pokupiti XP sa svih kapija, pokupiti novac sa blagajne,nahraniti sve &#382;ivotinje sa trenutnim pode&#353;avanjem, protresti svo drve&#263;e, posetiti od svih prijatelja ZOO-eve...",  
	"myzoo_lists_title": "Lista",
	"myzoo_lists_intro": "Generi&#353;ite imate/nemate listu &#382;ivotinja.",
	"myzoo_breeding_title": "Razmno&#382;avanje",
	"myzoo_breeding_intro": "Rukovodenje razmno&#382;avanja",
	// Items
	"shop_title": "Stavke",
	"shop_intro": "Ovo je spisak svih poznatih stavki u okviru ZOO WORLD-a. Iako postoji veza za kupovinu, mnoge stavke ne mogu da se kupe iz mnogo razloga (nije jos otklju&#269;ano, neobjavljeno,van prodaje, itd).<em>Imajte na umu da ako je vas nalog povezan sa Pay Pal, kao sto ste ve&#263; kupovali stavke sa pravim novcem, bice vam napla&#269;eno bez upozorenja.</em>",
	"shop_loading": "Velika prodavnica od svega trenutno se u&#269;itava...",
	"shop_buy_id": "kupi stavke putem ID",
	"shop_buy_id_intro": "(koristiti kada znate ID iako prodavnica nije a&#382;urirana).",
	"shop_upgrade_id": "nadogradite svaku &#382;ivotinju putem ID",
	"shop_upgrade_id_intro": "(koristiti kada znate ID iako prodavnica nije a&#382;urirana).",
	"shop_repeat_buy_id": "ponoviti kupovinu bilo koje stavke putem ID",
	"shop_repeat_buy_id_intro": "(da bude kori&#353;&#269;eno za kupovinu  odre&#273;ene stavke putem ID svakih 10 sekundi,korisno za one koji poklanjaju &#382;ivotinje na visokim nivoima).",
	"shop_buy_fbc_intro": "Kupuj za FBC",
	"shop_buy_by_wlf_item_id": "kupuj putem WLFstavke ID",
	"shop_paypal_howto": "Kako OTKAZATI va&#353; \"Sporazum jednim klikom\" izme&#273;u RockYou, Inc i PayPal posle kupovine WLP ili bilo koje Ultra Rare.",
	// Spawning   
	"gifts_title": "Mre&#382;enje",
	"gifts_gifts_title": "Pokloni",
	"gifts_level_title": "Nivo gore",
	"gifts_level_intro": "Otkucaj &#382;eljeni nivo",
	"gifts_daily_title": "Podeli dnevne poklone",
	"gifts_trophy_title": "Trofeji",
	"gifts_juice_title": "Sok",
	"gifts_flowerpots_title": "Cvetne saksije",
	"gifts_halloween_title": "No&#263; ve&#353;tica",
	"gifts_halloween_ask_sewing": "Pitaj za pomo&#263; u &#353;ivenju",
	"gifts_fieldtrip_title": "Izlet",
	"gifts_fieldtrip_anything_by_id": "Bilo &#353;ta putem ID",
	"gifts_treattrophy_title": "Trofej &#269;asti",
	"gifts_buildables_title": "Gra&#273;evine",
	"gifts_missions_title": "Misije",
	"gifts_missions_start": "start",
	"gifts_missions_republish": "Ponovo postavi",
	"gifts_missions_complete": "Kompletirano",
	"gifts_rosegarden_title": "Ru&#382;ina Ba&#353;ta",
	"gifts_rosegarden_share_upgrade": "Podeliti ru&#382;inu nadogradnju na zidu","gifts_rosegarden_ask_rose": "pitati na zidu za ru&#382;u",
	"gifts_rosegarden_share_rose": "podeliti ru&#382;u na zidu",
	"gifts_goldenegg_title": "Zlatno jaje",
	"gifts_icecream_title": "Sladoled",
	"gifts_greenhouse_title": "Staklena Ba&#353;ta",
	"gifts_megaspawn_title": "Mega Mre&#382;enje",
	// Visiting   
	"visiting_resume_intro": "(nastaviti na odre&#273;enom zolo&#353;kom vrtu, ako proces se sru&#353;i)",
	"visiting_go_outside": "Imajte u vidu da u zavisnosti koliko prijatelja imate,to mo&#382;e potrajati dugo! Iza&#273;ite napolje i igrajte :-)",
	"visiting_load_friends": "Ucitavanje vaÃ¯Â¿Â½e Liste prijatelja...",
	// Advanced   
	"advanced_title": "Napredna",
	"advanced_intro": "Ako niste sigurno &#353;ta je ovo, onda nije za vas!","advanced_detailedlogging_title": "Detaljno u&#269;itavanje",   
	"advanced_friends_title": "Prijatelji",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Zoo veli&#269;ina ekrana",
	"advanced_cookies_title": "Kola&#269;i&#263;i",
	"advanced_workqueue_title": "Radno mesto",
	"advanced_play_title": "Igraj",
	"advanced_alternateaccess_title": "Alternativni ulazak",
	"advanced_tryto_title": "Poku&#353;aj da",
	"advanced_goldeninviter_title": "Zlatni pozivatelj",
	"advanced_punkd_title": "Zeznut si",
	"advanced_javacript_javacript": "Javaskript",
	"advanced_javacript_evaluate": "Proceniti",
	"advanced_javacript_ajaxdelay": "AJAX ka&#353;njenje (milisekunde)", 
	// generic   
	"show": "poka&#382;i",
	"hide": "Sakrij",
	"shop": "Prodavnica",
	"reload": "u&#269;itaj ponovo",
	"island": "ostrvo",
	"islands": "ostrva",
	"minute": "minuta",
	"minutes": "minute",
	"hour": "sat",
	"hours": "sati",
	"day": "dan",
	"days": "dani",
	"once": "jednom",
	"repeat": "ponovi",
	"to_friend": "ka prijatelju",
	"specify_user_id": "odre&#273;eni korisni&#269;ki ID",
	"specific_user": "odredi korisnika",
	"specify_user_id_prompt": "Odredi korisni&#269;kiId:\n(odredi ovaj ID sa njihovih profila)",
	"specify_animal_id": "Odredi &#382;ivotinjski ID",
	"specify_animal_id_prompt": "Odredi &#382;ivotinjskiId:\n(odredi ovaj ID sa kupovne liste)",
	"send_to_feed": "po&#353;alji na zid",
	"ask_on_feed": "pitaj na zidu",
	"ask_for": "pitaj za",
	"share": "podeli",
	"share_roses": "podeli 'ru&#382;e' ",
	"post": "postaviti",
	"share_completion": "podeli zavr&#353;eno",
	"completed": "zavr&#353;eno",
	"help": "pomo&#263;",
	"easy": "lako",
	"medium": "srednje",
	"hard": "te&#353;ko",
	"invite": "pozovi",
	"hatched": "izleglo",
	"hard": "te&#353;ko",
	"send_as_request": "po&#353;alji kao zahtev",
	"ask_as_request": "pitaj kao zahtev",
	"update_button": "dugme za a&#382;uriranje",
	// end
	"button_go": "Startuj",
	"start": "Startuj",
	"republish": "Ponovo postavi",
	"complete": "Kompletirano",
	// 2010/12/08
	// generic
	"post_trade": "Postaviti razmenu",
	"update": "a&#382;urirati",
	"loaded": "u&#269;itati",
	"main_zooremoved": "Zoo uklonjen",
	"main_clicktogetback": "Klikni da se vrati&#353; natrag",
	"executing": "izvr&#353;avanje",
	"specify_item_id_prompt": "Odredi od stavkeId:\n(odredite ovaj ID kroz listu prodavnice)",
	"close": "zatvoreno",
	"buy": "kupi",
	"gift": "poklon",
	"breed": "razmno&#382;avaj",
	"upgrade": "nadograditi",
	"shareonwall": "podeliti na zidu",
	"refresh": "osve&#382;iti",
	"project": "projekat",
	// Items
	"shop_flyout_categories": "Kategorije",
	"shop_flyout_rarity": "Retkost",
	"shop_flyout_breedingtime": "Vreme razmno&#382;avanja",
	"shop_flyout_purchasefor": "Kupiti za",
	"shop_flyout_actualdollars": "pravi dolari",
	"shop_flyout_fbc": "Facebook Krediti",
	"shop_flyout_wlp": "Wild Life Poeni",
	"shop_flyout_images_title": "Slike",
	"shop_flyout_images_large": "veliko",
	"shop_flyout_images_small": "malo",
	"shop_flyout_images_baby": "beba",
	"shop_flyout_actions_title": "Akcije",
	"shop_flyout_actions_buylots_prompt": "Broj stavki za kupiti? (za &#382;ivotinje, mora da bude manje od iznosa za nadogradnju,za ostalo maksimalan iznos je 999)",
	"shop_flyout_actions_buylots": "kupi mnogo",
	"shop_flyout_actions_postadopt": "postaviti usvajanje",
	"shop_flyout_actions_customadopt": "po naru&#273;bini usvajanje",
	"shop_flyout_actions_thanksgivingwlpupgrade": "pokusaj da nadogradi&#353; ultra za 1 WLP",
	"shop_flyout_actions_findinzoo": "prona&#273;i zoo",
	"shop_flyout_actions_upgradeforwrenches": "nadogradnja za &#353;tandove",
	"shop_flyout_actions_cantbuy": "ne mo&#382;e da se kupi ovo...",
	"shop_flyout_actions_trytobuy": "Poku&#353;aj da kupi&#353; bez obzira?",
	"shop_flyout_actions_numitemstobuy": "Broj stavki za kupiti? (za &#382;ivotinje, mora da bude manje od iznosa za nadogradnju,za ostalo maksimalan iznos je 999)",
	"shop_flyout_actions_movealltostorage": "pomeriti sve u skladi&#353;te",
	"shop_flyout_actions_moneywarning": "pomeriti sve u skladi&#353;te",
	"shop_flyout_actions_facts": "&#268;injenice",
	"shop_flyout_actions_training": "Treniranje",
	// advanced
	"advanced_friends_loadlist": "U&#269;itaj listu",
	"advanced_friends_deduplicatelist": "antiduplikat lista",
	"advanced_zoo_loadzoo": "U&#269;itaj  va&#353; Zoo",
	"advanced_zoo_loadanyzoo": "U&#269;itaj bilo koji Zoo",
	"advanced_zoo_showzoo": "poka&#382;i Zoo",
	"advanced_zoo_specifyisland": "Odredi ostrvov ID (0-10):",
	"advanced_zoo_loadyourisland": "u&#269;itaj va&#353;e ostrvo",
	"advanced_zoodisplay_normal": "normalno",
	"advanced_zoodisplay_big": "velik",
	"advanced_cookies_cookies": "kola&#269;i&#263;i",
	"advanced_cookies_show": "poka&#382;i",
	"advanced_cookies_delete": "obri&#353;i",
	"advanced_cookies_set": "komplet",
	"advanced_workqueue_start": "start",
	"advanced_workqueue_stop": "stani",
	"advanced_workqueue_itemsinthequeue": "stavke u redu.",
	"advanced_workqueue_showsize": "poka&#382;i veli&#269;inu",
	"advanced_workqueue_clear": "&#269;isto",
	"advanced_alternateaccess_unframe": "Bez okvira Zoo",
	"advanced_alternateaccess_workaround": "Raditi okolo Zoo (Lagano)",
	"advanced_tryto_forceadopt": "Iznuditi Usvajanje",
	"advanced_tryto_payday": "dnevna plata",
	"advanced_tryto_unlock11thisland": "otklju&#269;ati 11-to ostrvo",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Mre&#382;enje",
	"megaspawn_flyout_projects": "Projekti",
	"megaspawn_flyout_multiplenotes": "Vi&#353;e bele&#353;ka",
	// animal list flyout
	"animallist_flyout_title": "Lista &#382;ivotinja",
	"animallist_flyout_intro": "Kopiraj i pusti ovu listu za kori&#353;&#269;enje",
	// breeding flyout
	"breeding_flyout_title": "Lista razmno&#382;avanja",
	"breeding_flyout_breeding": "razmno&#382;avanje",
	"breeding_flyout_innest": "u leglu",
	"breeding_flyout_nomorenests": "Nema vi&#353;e slobodnih legla, izvini!",
	"breeding_flyout_nobabies": "Nema beba u leglima.",
	"breeding_flyout_heal": "le&#269;iti",
	"breeding_flyout_feed": "nahraniti",
	"breeding_flyout_notready": "nije jo&#353; spremno",
	"breeding_flyout_upgradeandmove": "nadograditi i pomeriti u zoo",
	"breeding_flyout_move": "pomeriti u zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Po naru&#273;bini usvajanje",
	"customadopt_flyout_name": "ime",
	"customadopt_flyout_image": "slika",
	"customadopt_flyout_title": "naslov",
	"customadopt_flyout_bodytext": "tekst tela",
	"customadopt_flyout_button": "dugme",
	"customadopt_flyout_postbutton": "Postaviti po naru&#273;bini usvajanje",
	"customadopt_flyout_editingnotadvised": "Doraditi stavke ispod nije preporu&#269;eno!",
	// friend list
	"friendlist_addzoomate": "dodaj zoo prijatelja",
	"friendlist_visitzoo": "poseti zoo",
	"friendlist_viewprofile": "pogledaj profil",
	"friendlist_posttreasurechest": "postavi sanduk blaga",
	"friendlist_postmysterychest": "postavi zagonetno blago",
	"friendlist_posthungryanimals": "postavi gladne &#382;ivotinje",
	"friendlist_sendvitamin": "po&#353;alji vitamin",
	"friendlist_sendgoldgreenhouse": "po&#353;alji zlatnu staklenu ba&#353;tu",
	// work queue
	"workqueue_starting": "Pokretanje reda",
	"workqueue_remaining": "ostalo",
	"workqueue_alreadystarted": "red ve&#263; startovao ",
	"workqueue_stopped": "Zaustavljen red ",
	"workqueue_stopping": "Zaustavljanje reda",
	"workqueue_alreadstopped": "Red ve&#263; zaustavljen",
	// 2010/12/09
	
	"animallist_flyout_generating": "Generisanje liste...",
	"animallist_flyout_havelist": "&#381;ivotinja ima listu",
	"animallist_flyout_havenotlist": "&#381;ivotinja nema listu",
	"animallist_flyout_note": "Napomena:mnoge &#382;ivotinje koje vam nedostaju mo&#382;da su povu&#269;ene ili nisu jo&#353; objavljenje",
	// status
	"status_buying_buying": "kupovina",
	"status_buying_bought": "kupljeno",
	"status_buying_ofitem": "od stavki",
	"status_buying_upgradingitem": "nadograditi stavku",
	"status_buying_upgradeditem": "nadogra&#273;ena stavka",
	"status_wlfitemid_specify": "Navesti wlfItemId",
	"status_friendlist_loaded": "Lista prijatelja je ve&#263; u&#269;itana ...",
	"status_friendlist_loading": "U&#269;itavanje liste va&#353;ih prijatelja...",
	"status_friendlist_found": "Pronadeno",
	"status_friendlist_friends": "prijatelji",
	"status_zoo_notloaded": "Zoo nije u&#269;itan...",
	"status_zoo_loadedforfriend": "U&#269;itavanje Zoo za prijatelja",
	"status_feeding_waitingfor": "&#268;ekanje da se nahrani ponovo za ",
	"status_feeding_fed": "nahrani",
	"status_feeding_collected": "pokupljeno",
	"status_feeding_withtreat": "po&#269;astiti sa",
	"status_feeding_animalswithtreat": "po&#269;astiti &#382;ivotinje sa",
	"status_feeding_noanimalsforcumulative": "Nema &#382;ivotinje sa kumulativnog servisa za hranjenje",
	"status_training_training": "Treniranje",
	"status_training_everyfiveminutes": "svakih pet minuta...",
	"status_training_trained": "Istrenirano",
	"status_gate_collectedxp": "Pokupiti XP sa kapije sa ostrva ",
	"status_booth_collecting": "Skupljati novac sa kapijene blagajne...",
	"status_booth_collected": "Pokupljen novac sa kapijene blagajne...",
	"status_visiting_visited": "Pose&#269;eno",
	"status_visiting_zooandcollected": "zoo i pokupljeno",
	"status_visiting_gettingreward": "Dobiti nagradu od posete zoo za",
	"status_visiting_visitedandcollected": "Posetiti zoo i pokupljeno",
	"status_visiting_collected": "Pokupljeno",
	"status_visiting_visitingall": "Posetiti sve",
	"status_visiting_ofyourfriendszoos": "od va&#353;ih prijatelja Zoo-vi...",
	"status_shaking_shakingitem": "Protresti stavke",
	"status_shaking_oftype": "od tipa",
	"status_shaking_forfriend": "za prijatelja",
	"status_shaking_notshakingitem": "Protresti stavku",
	"status_shaking_shaking": "Tresti",
	"status_shaking_for": "za",
	"status_shaking_shookitems": "uzdrmati stavke...",
	"status_shaking_shookitemsfailed": "Nije uspelo da protrese stavke...",
	"status_island_loadingisland": "U&#269;itati ostrvo",
	"status_island_for": "za",
	"status_inventory_loading": "U&#269;itati inventar za ",
	"status_inventory_queuing": "&#268;ekanje",
	"status_inventory_forshaking": "za protresti...",
	"status_moving_moving": "Pomeriti",
	"status_moving_toinventory": "u inventar",
	"status_moving_toisland": "ka ostrvu",
	// Items
	"shop_listempty": "Lista prazna",
	// Spawning
	"gifts_giftingitem": "Pokloniti stavku",
	"gifts_spawning": "Mre&#382;enje",
	"gifts_trophy": "trofej",
	"gifts_mission": "misije",

	// Mega spawn
	"megaspawn_flyout_gifts": "Poklonis",
	"megaspawn_flyout_missions": "Misije",
	// generic
	"completion": "zavr&#353;etak"
};

// German translation by JGina Marie Layung, Isabel Rioja and Dominik Mayer 2010/12/14
zdlang['de'] = {
	"title": "Zoo World Assistent",
	// Languages
	"language": "Sprache",
	"en": "Englisch",
	"es": "Spanisch",
	"de": "Deutsch",
	"rs": "Serbisch",
	"fr": "Franz&#246;sisch",
	"it": "Italienisch",
	"ru": "Russisch",
	"cn": "Chinesisch",
	"jp": "Japanisch",
	"pt": "Portugisisch",
	"id": "Indonesisch",
	"pl": "Polnisch",
	"he": "Hebr&#228;isch",
	"hr": "Kroatisch",
	"uk": "Ukrainisch",
	// tabs
	"tab_about": "&#220;ber",
	"tab_myzoo": "Mein Zoo",
	"tab_items": "Shop",
	"tab_spawning": "Spawning",
	"tab_friends": "Freunde",
	"tab_advanced": "Erweitert",
	// footer
	"footer_status": "Status",
	"footer_friends": "Freunde",
	"footer_zoo": "Zoo",
	"footer_results": "AJAX Ergebnisse",
	"footer_clear_log": "Log l&#246;schen",
	// about
	"about_title": "&#220;ber",
	"about_body_1": "Dies ist ein Werkzeug, um raffinierte Tricks in Zoo World durchzuf&#252;hren. Dies kann als Betrug und als Hack angesehen werden und die Ergebnisse k&#246;nnen weder unterst&#252;tzt noch garantiert werden. Benutzung auf eigene Gefahr!",
	"about_body_2": "Es gibt zwei Arten von Menschen auf der Welt: Menschen, die lesen k&#246;nnen und Menschen, die bereits weitergeklickt haben.",
	"about_body_3": "Wenn Du noch hier bist, dann wirst du vielleicht auch aufmerksam weiterlesen, was ich zu schreiben habe. Ich musste diese Skripte auf Grund des Dramas in der Zoo World Community l&#246;schen. Das n&#228;chste Mal werde ich vielleicht nicht zur&#252;ck kommen. Sei vern&#252;nftig, sei diskret und denke nicht, dass du f&#252;r das Ã¯Â¿Â½TricksenÃ¯Â¿Â½ nicht bestraft wirst.",
	"about_body_4": "Ich mache Fehler, Dinge &#228;ndern sich im Zoo, Dinge &#228;ndern sich in Facebook und die Skripte funktionieren dann nicht mehr. Eine h&#246;fliche/nette Nachricht, dass etwas nicht mehr funktioniert, hilft mir mehr als hunderte Heulmails/Beschwerdemails.",
	"about_body_5": "Genie&#223;e meine Skripte und hab Spa&#223; damit! Bitte komm auch in unsere",
	"about_body_group": "Gruppe",
	// My Zoo
	"myzoo_feeding_title": "F&#252;tterung",
	"myzoo_feeding_feed": "F&#252;ttern",
	"myzoo_feeding_collect": "Sammeln",
	"myzoo_feeding_day": "Tag",
	"myzoo_feeding_days": "Tage",
	"myzoo_gates_title": "Tore",
	"myzoo_gates_collect_all": "XP von allen Toren sammeln",
	"myzoo_gates_collect_booth_15": "Geld vom Eingang alle 15 Minuten sammeln",
	"myzoo_training_title": "Training",
	"myzoo_treasure_title": "Schatzsuche (ben&#246;tigt Schatzsucher (Treasure Hunter))",
	"myzoo_treasure_visit_all": "Alle befreundete Zoos",
	"myzoo_treasure_start_at": "Starte bei ID:\n(Die ID vom Profil deines Freundes rausfinden. Falls da keine ID steht, klick auf Profile vergleichen, dann steht eine da.)",
	"myzoo_treasure_continue_from": "Mach weiter bei...",
	"myzoo_kiosk_title": "Kioske",
	"myzoo_kiosk_collect_all": "Sammle Geld aller Kioske",
	"myzoo_shake_title": "Sch&#252;ttel B&#228;ume, Tierb&#252;sche, Skulpturen, Pilze, Shows, Rosengarten, etc",
	"myzoo_shake_shake_all": "Sch&#252;ttel alle Inseln",
	"myzoo_move_title": "Verschiebe alles von einer Insel ins Inventar",
	"myzoo_fill_title": "F&#252;lle das Gew&#228;chshaus vom Inventar",
	"myzoo_auto_title": "Auto",
	"myzoo_auto_intro": "Sammle XP von allen Toren, sammle Geld vom Eingang, f&#252;ttere alle Tiere mit den momentanen Einstellungen, sch&#252;ttel alle B&#228;ume, besuche alle Zoos deiner Freunde...",
	"myzoo_lists_title": "Listen",
	"myzoo_lists_intro": "Generiere habe/habe nicht Liste aller Tiere...",
	"myzoo_breeding_title": "Br&#252;ten",
	"myzoo_breeding_intro": "Verwalte br&#252;tende Tiere",
	// Items(Shop)
	"shop_title": "Dan Markt",
	"shop_intro": "Dies ist eine Liste aller bekannten Items in Zoo World. Obwohl es Kauflinks gibt, k&#246;nnen viele Items aus vielerlei Gr&#252;nden nicht gekauft werden. (noch nicht freigespielt, noch unver&#246;ffentlicht, Angebot abgelaufen, etc). <em>Beachte, dass dein Konto ohne vorherige Warnung belastet wird, falls dein FB-Konto bereits mit PayPal verlinkt ist, z.B. wenn du schon mal Tiere mit echtem Geld gekauft hast.</em>",
	"shop_loading": "Der Gro&#223;e Laden f&#252;r Alles l&#228;dt...",
	"shop_buy_id": "Kaufe ein beliebiges Item per ID",
	"shop_buy_id_intro": "(Wenn du die ID kennst, aber der Laden noch nicht aktualisiert wurde).",
	"shop_upgrade_id": "K&#228;fig-Upgrade f&#252;r ein beliebiges Tier per ID",
	"shop_upgrade_id_intro": "(Wenn du die ID kennst, aber der Laden noch nicht aktualisiert wurde).",
	"shop_repeat_buy_id": "Kaufe wiederholt ein beliebiges Item per ID",
	"shop_repeat_buy_id_intro": "(Um ein bestimmtes Item alle 10 Sekunden zu kaufen. Hilfreich f&#252;r diejenigen, die highlevel Tiere verschenken. Oder sehr oft klicken um sehr schnell hohe St&#252;ckzahlen eines Items zu bekommen).",
	"shop_buy_fbc_intro": "Mit FBC (Facebook Credits) kaufen",
	"shop_buy_by_wlf_item_id": "Kaufen per wlfItemId (5-stellig)",
	"shop_paypal_howto": "Wie man seine \"1-Klick Vereinbarung\" zwischen RockYou, Inc und PayPal wiederruft, nachdem man WLP oder Ultra seltene Tiere gekauft hat.",
	// Spawning
	"gifts_title": "Spawning",
	"gifts_gifts_title": "Geschenke",
	"gifts_level_title": "Levelaufstieg",
	"gifts_level_intro": "Gew&#252;nschtes Level",
	"gifts_daily_title": "Poste t&#228;gliches Geschenk",
	"gifts_trophy_title": "Troph&#228;e",
	"gifts_juice_title": "Saft",
	"gifts_flowerpots_title": "Blument&#246;pfe",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "Bitte um N&#228;hhilfe",
	"gifts_fieldtrip_title": "Ausflug",
	"gifts_fieldtrip_anything_by_id": "Beliebiges per ID",
	"gifts_treattrophy_title": "Leckerli Troph&#228;en",
	"gifts_buildables_title": "Zusammenbaubar",
	"gifts_missions_title": "Missionen",
	"gifts_missions_start": "Starte",
	"gifts_missions_republish": "Noch mal ver&#246;ffentlichen",
	"gifts_missions_complete": "Fertig",
	"gifts_rosegarden_title": "Rosengarten",
	"gifts_rosegarden_share_upgrade": "Poste Garten Upgrade an Pinnwand",
	"gifts_rosegarden_ask_rose": "Frag nach Rosen an Pinnwand",
	"gifts_rosegarden_share_rose": "Poste Rose an Pinnwand",
	"gifts_goldenegg_title": "Goldenes Ei",
	"gifts_icecream_title": "Eiscreme",
	"gifts_greenhouse_title": "Gew&#228;chshaus",
	"gifts_megaspawn_title": "Mega Spawn",
	// Visiting
	"visiting_resume_intro": "(Bei einem bestimmten Zoo weitermachen, falls sich der Prozess aufh&#228;ngt)",
	"visiting_go_outside": "Beachte, dass das Besuchen abh&#228;ngig von der Anzahl deiner Freunde und der Leistungsf&#228;higkeit deines PCs/deiner Internetleitung seeeehr lange dauern kann. Geh raus an die frische Luft und spiel was :)",
	"visiting_load_friends": "Lade deine Freundesliste...",
	// Advanced
	"advanced_title": "Erweitert",
	"advanced_intro": "Falls du nicht wei&#223;t, was das hier ist, dann ist es nichts f&#252;r dich!",
	"advanced_detailedlogging_title": "Detaillierte Protokollierung",
	"advanced_friends_title": "Freunde",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Zoo Anzeigegr&#246;&#223;e",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Warteschlange",
	"advanced_play_title": "Spielen",
	"advanced_alternateaccess_title": "Alternativer Zugang",
	"advanced_tryto_title": "Versuche",
	"advanced_goldeninviter_title": "Goldenes Ei Einladung",
	"advanced_punkd_title": "Verarscht",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "Evaluieren",
	"advanced_javacript_ajaxdelay": "AJAX Verz&#246;gerung (Millisekunden)",
	// generic
	"show": "Anzeigen",
	"hide": "Verbergen",
	"shop": "Shop",
	"reload": "Neu laden",
	"island": "Insel",
	"islands": "Inseln",
	"minute": "Minute",
	"minutes": "Minuten",
	"hour": "Stunde",
	"hours": "Stunden",
	"day": "Tag",
	"days": "Tage",
	"once": "einmal",
	"repeat": "wiederholend",
	"to_friend": "an Freund",
	"specify_user_id": "Gib Benutzer ID an",
	"specific_user": "Besuche bestimmten Freund",
	"specify_user_id_prompt": "Gib Benutzer ID an:\n(Die ID vom Profil deines Freundes rausfinden. Falls da keine ID steht, klick auf Profile vergleichen, dann steht eine da.)",
	"specify_animal_id": "Gib Tier ID an",
	"specify_animal_id_prompt": "Gib Tier ID an:\n(Die ID aus der Liste im Shop rausfinden)",
	"send_to_feed": "An Feed schicken.",
	"ask_on_feed": "Im Feed fragen.",
	"ask_for": "Bitte um",
	"share": "Poste",
	"share_roses": "Poste 'Rosen'",
	"post": "Poste",
	"share_completion": "Poste Fertigstellung",
	"completed": "Fertige/s/r",
	"help": "Hilf",
	"easy": "Einfach",
	"medium": "Mittel",
	"hard": "Schwer",
	"invite": "Einladen",
	"hatched": "Geschl&#252;pft",
	"send_as_request": "Als Anfrage verschicken",
	"ask_as_request": "An Pinnwand darum bitten",
	"update_button": "Aktualisiere Button",
	"button_go": "Los",
	"start": "Starte",
	"republish": "Noch mal ver&#246;ffentlichen",
	"complete": "Fertig",
	// 2010/12/08
	// generic
	"post_trade": "Poste Tausch",
	"update": "&#220;bernehmen",
	"loaded": "geladen",
	"main_zooremoved": "Zoo entfernt",
	"main_clicktogetback": "Klicken um wiederherzustellen",
	"executing": "F&#252;hre aus",
	"specify_item_id_prompt": "Gib Item ID an:<br>(Die ID aus der Liste im Shop rausfinden)",
	"executing": "F&#252;hre aus",
	"close": "Schlie&#223;en",
	"buy": "Kaufen",
	"gift": "Verschenken",
	"breed": "Br&#252;ten",
	"upgrade": "Upgraden",
	"shareonwall": "Poste an Pinnwand",
	"refresh": "Aktualisieren",
	"project": "Projekt",
	// Items
	"shop_flyout_categories": "Kategorien",
	"shop_flyout_rarity": "Seltenheit",
	"shop_flyout_breedingtime": "Schl&#252;pfzeit",
	"shop_flyout_purchasefor": "Kaufe f&#252;r",
	"shop_flyout_actualdollars": "echte Dollar",
	"shop_flyout_fbc": "Facebook Kredits",
	"shop_flyout_wlp": "Wild Life Punkte",
	"shop_flyout_images_title": "Bilder",
	"shop_flyout_images_large": "Gro&#223;",
	"shop_flyout_images_small": "Klein",
	"shop_flyout_images_baby": "Baby",
	"shop_flyout_actions_title": "Aktionen",
	"shop_flyout_actions_buylots_prompt": "Anzahl zu kaufender Items? (f&#252;r Tiere muss es weniger sein, als die Zahl bis der K&#228;fig vergr&#246;&#223;ert werden muss, f&#252;r alle andere ist das Maximum 999)",
	"shop_flyout_actions_buylots": "Viele kaufen",
	"shop_flyout_actions_postadopt": "Poste Adoption",
	"shop_flyout_actions_customadopt": "Adoption anpassen",
	"shop_flyout_actions_thanksgivingwlpupgrade": "Versuche f&#252;r 1 WLP zum Ultra upzugraden",
	"shop_flyout_actions_findinzoo": "Im Zoo finden",
	"shop_flyout_actions_upgradeforwrenches": "Wrench upgraden",
	"shop_flyout_actions_cantbuy": "Kann ich nicht kaufen...",
	"shop_flyout_actions_trytobuy": "Trotzdem versuchen zu kaufen?",
	"shop_flyout_actions_numitemstobuy": "Anzahl zu kaufender Items? (f&#252;r Tiere muss es weniger sein, als die Zahl bis der K&#228;fig vergr&#246;&#223;ert werden muss, f&#252;r alle andere ist das Maximum 999)",
	"shop_flyout_actions_movealltostorage": "Alle ins Inventar verschieben",
	"shop_flyout_actions_moneywarning": "WARNUNG: dieses Item kostet echtes Geld und es k&#246;nnte bei dir ohne Warnung abgebucht werden!",
	"shop_flyout_actions_facts": "Fakten",
	"shop_flyout_actions_training": "Training",
	// advanced
	"advanced_friends_loadlist": "Lade Liste",
	"advanced_friends_deduplicatelist": "Dedupliziere Liste",
	"advanced_zoo_loadzoo": "Lade deinen Zoo",
	"advanced_zoo_loadanyzoo": "Lade beliebigen Zoo",
	"advanced_zoo_showzoo": "Zeige Zoo",
	"advanced_zoo_specifyisland": "Gib Insel ID an (0-10):",
	"advanced_zoo_loadyourisland": "Lade deine Insel",
	"advanced_zoodisplay_normal": "Normal",
	"advanced_zoodisplay_big": "Gro&#223;",
	"advanced_cookies_cookies": "Cookies",
	"advanced_cookies_show": "Anzeigen",
	"advanced_cookies_delete": "L&#246;schen",
	"advanced_cookies_set": "Setzen",
	"advanced_workqueue_start": "Start",
	"advanced_workqueue_stop": "Stop",
	"advanced_workqueue_itemsinthequeue": "Items in der Warteschlange.",
	"advanced_workqueue_showsize": "Zeige Gr&#246;&#223;e",
	"advanced_workqueue_clear": "L&#246;schen",
	"advanced_alternateaccess_unframe": "Zoo unframen",
	"advanced_alternateaccess_workaround": "Workaround Zoo (Lite Version)",
	"advanced_tryto_forceadopt": "Adoption zu erzwingen",
	"advanced_tryto_payday": "Zahltag",
	"advanced_tryto_unlock11thisland": "11te Insel frei zu schalten",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Spawn",
	"megaspawn_flyout_projects": "Projekte",
	"megaspawn_flyout_multiplenotes": "Mehrfachnotizen",
	// animal list flyout
	"animallist_flyout_title": "Liste deiner Tiere",
	"animallist_flyout_intro": "Kopiere und f&#252;ge diese Liste ein um sie zu verwenden",
	// breeding flyout
	"breeding_flyout_title": "Liste br&#252;tender Tiere",
	"breeding_flyout_breeding": "Br&#252;tet",
	"breeding_flyout_innest": "im Nest",
	"breeding_flyout_nomorenests": "Keine freien Nester mehr, sorry!",
	"breeding_flyout_nobabies": "Keine Babys in Nestern.",
	"breeding_flyout_heal": "heilen",
	"breeding_flyout_feed": "f&#252;ttern",
	"breeding_flyout_notready": "noch nicht fertig",
	"breeding_flyout_upgradeandmove": "Upgraden und in den Zoo umsiedeln",
	"breeding_flyout_move": "In den Zoo umsiedeln",
	// custom adopt flyout
	"customadopt_flyout_title": "Adoptionen anpassen",
	"customadopt_flyout_name": "Name",
	"customadopt_flyout_image": "Bild",
	"customadopt_flyout_title": "Titel",
	"customadopt_flyout_bodytext": "Text",
	"customadopt_flyout_button": "Button",
	"customadopt_flyout_postbutton": "Poste angepasste Adoption",
	"customadopt_flyout_editingnotadvised": "&#196;nderung der nachfolgenden Einstellungen nicht empfohlen!",
	// friend list
	"friendlist_addzoomate": "Als Zoofreund adden",
	"friendlist_visitzoo": "Besuche Zoo",
	"friendlist_viewprofile": "Zeige Profil",
	"friendlist_posttreasurechest": "Schatztruhe posten",
	"friendlist_postmysterychest": "&#220;berraschungskiste posten",
	"friendlist_posthungryanimals": "Poste hungrige Tiere",
	"friendlist_sendvitamin": "Sende Vitamin",
	"friendlist_sendgoldgreenhouse": "Sende goldenes Gew&#228;chshaus",
	// work queue
	"workqueue_starting": "Starte Warteschlange",
	"workqueue_remaining": "verbleibend",
	"workqueue_alreadystarted": "Warteschlange schon gestartet",
	"workqueue_stopped": "Warteschlange gestoppt",
	"workqueue_stopping": "Stoppe Warteschlange",
	"workqueue_alreadstopped": "Warteschlange bereits gestoppt",
	// 2010/12/09
	"animallist_flyout_generating": "Generiere Listen...",
	"animallist_flyout_havelist": "Haben-Liste der Tiere",
	"animallist_flyout_havenotlist": "Nichthaben-Liste der Tiere",
	"animallist_flyout_note": "Beachte: Viele der fehlenden Tiere werden wahrscheinlich nicht mehr angeboten oder sind noch nicht erschienen.",
	// status
	"status_buying_buying": "Kaufe",
	"status_buying_bought": "Kaufte",
	"status_buying_ofitem": "Mal Item",
	"status_buying_upgradingitem": "Upgrade Item",
	"status_buying_upgradeditem": "Habe upgegraded: Item",
	"status_wlfitemid_specify": "Gib wlfItemId an",
	"status_friendlist_loaded": "Freundesliste schon geladen...",
	"status_friendlist_loading": "Lade Freundesliste...",
	"status_friendlist_found": "Gefunden",
	"status_friendlist_friends": "Freunde",
	"status_zoo_notloaded": "Zoo nicht geladen...",
	"status_zoo_loadedforfriend": "Lade Zoo deines Freundes",
	"status_feeding_waitingfor": "Warte um wieder zu f&#252;ttern weitere",
	"status_feeding_fed": "F&#252;tterte",
	"status_feeding_collected": "Sammelte",
	"status_feeding_withtreat": "mit dem Leckerli",
	"status_feeding_animalswithtreat": "Tiere mit dem Leckerli",
	"status_feeding_noanimalsforcumulative": "Keine Tiere f&#252;r den kumulative F&#252;tterungsdienst.",
	"status_training_training": "Trainiere",
	"status_training_everyfiveminutes": "alle 5 Minuten...",
	"status_training_trained": "Trainierte",
	"status_gate_collectingxp": "Sammele XP vom Tor von der Insel",
	"status_gate_collectedxp": "Sammelte XP vom Tor von der Insel",
	"status_booth_collecting": "Sammle Geld vom Eingang...",
	"status_booth_collected": "Sammelte Geld vom Eingang...",
	"status_visiting_visited": "Besuchte",
	"status_visiting_zooandcollected": "Zoo und sammelte",
	"status_visiting_gettingreward": "Hole Belohnung f&#252;r das Besuchen des Zoos von",
	"status_visiting_visitedandcollected": "Besuchte Zoo und sammelte",
	"status_visiting_collected": "Sammelte",
	"status_visiting_visitingall": "Besuche alle",
	"status_visiting_ofyourfriendszoos": "Zoos deiner Freunde...",
	"status_shaking_shakingitem": "Sch&#252;ttle Item",
	"status_shaking_oftype": "des Typs",
	"status_shaking_forfriend": "f&#252;r Freund",
	"status_shaking_notshakingitem": "Sch&#252;ttle nicht Item",
	"status_shaking_shaking": "Sch&#252;ttle",
	"status_shaking_for": "f&#252;r",
	"status_shaking_shookitems": "Items gesch&#252;ttelt...",
	"status_shaking_shookitemsfailed": "Item sch&#252;tteln fehlgeschlagen...",
	"status_island_loadingisland": "Lade Insel",
	"status_island_for": "f&#252;r",
	"status_inventory_loading": "Lade Inventar f&#252;r",
	"status_inventory_queuing": "Stelle in Warteschlange",
	"status_inventory_forshaking": "f&#252;rs Sch&#252;tteln...",
	"status_moving_moving": "Verschiebe",
	"status_moving_toinventory": "ins Inventar",
	"status_moving_toisland": "auf Insel",
	// Items
	"shop_listempty": "Liste leer",
	// Spawning
	"gifts_giftingitem": "Schenke Item",
	"gifts_spawning": "Spawning",
	"gifts_trophy": "Troph&#228;e",
	"gifts_mission": "Mission",
	// Mega spawn
	"megaspawn_flyout_gifts": "Geschenke",
	"megaspawn_flyout_missions": "Missionen",
	// generic
	"completion": "Fertigstellung",
	// 2010/12/10
	"megaspawn_flyout_christmas": "Weihnachten",
	// 2010/12/13
	"confirm_moving_tostorage": "Wirklich alle",
	"confirm_moving_tostorage2": "ins Inventar verschieben?",
	"status_moving_item": "Verschiebe Item",
	"status_moving_item2": "ins Inventar...",
	"confirm_unlock_11thisland": "Versuche 11te Insel freizuschalten? (Funktioneirt nur, wenn du genau 10 Inseln hast.",
	"status_unlock_11thisland": "Schalte 11te Insel frei..."
};

// Spanish translation by Isabel Rioja and Soledad Garcia 2010/12/14
zdlang['es'] = {
	"title": "Zoo World Assistant",
	// Languages
	"en": "Ingl&#233;s",
	"es": "Espa&#241;ol",
	"de": "Alem&#225;n",
	"rs": "Serbio",
	"fr": "Franc&#233;s",
	"it": "Italiano",
	"ru": "Ruso",
	"cn": "Chino",
	"jp": "Japon&#233;s",
	"pt": "Portugu&#233;s",
	"id": "Indonesio",
	"pl": "Polaco",
	"he": "Hebreo",
	"hr": "Croata",
	"uk":"Ucraniano",
	// tabs
	"tab_about": "Sobre",
	"tab_myzoo": "Mi Zoo",
	"tab_items": "Articulos",
	"tab_spawning": "Spawning",
	"tab_friends": "Amigos",
	"tab_advanced": "avanzado",
	// footer
	"footer_status": "Status",
	"footer_friends": "Amigo",
	"footer_zoo": "Zoo",
	"footer_results": "AJAX Resultados",
	"footer_clear_log": "Borrar Log",
	// About
	"about_title": "Sobre",
	"about_body_1": "Esto es una herramienta para hacer trucos ingeniosos en Zoo World. Esto puede ser considerado hacer trampa o piratear y los resultados no pueden ser apoyados o garantizados. Evalua tu propio riesgo!",
	"about_body_2": "Hay dos tipos de personas en este mundo: personas que saben leer y personas que hacen &quot;click&quot; en cualquier sitio.",
	"about_body_3": "Si a&#250;n sigues aqu&#237; entonces es que tal vez vas a prestar atenci&#243;n a lo que escribo. Tuve que eliminar estos scripts por el drama ocurrido en la Zoo World community. La pr&#243;xima vez puede que no vuelva. S&#233; razonable, discreto y piensa que puedes ser sancionado por usar trucos.",
	"about_body_4": "Yo cometo errores, las cosas cambian en el zoo, cambian en Facebook, y estos scripts pueden dejar de funcionar. Un mensaje amable, inform&#225;ndome de algo que no funciona, me ayuda m&#225;s que miles de quejas.",
	"about_body_5": "Disfruta mis scripts y pas&#225;telo bien! Por favor, entra en nuestro grupo",
	"about_body_group": "group",
	// My Zoo
	"myzoo_feeding_title": "alimentacion",
	"myzoo_feeding_feed": "alimentar",
	"myzoo_feeding_collect": "colectar",
	"myzoo_feeding_day": "d&#237;a",
	"myzoo_feeding_days": "dias",
	"myzoo_gates_title": "puertas",
	"myzoo_gates_collect_all": "recoge XP de todas las puertas",
	"myzoo_gates_collect_booth_15": "recoge dinero de la entrada cada 15 minutos",
	"myzoo_training_title": "entrenamiento",
	"myzoo_treasure_title": "B&#250;squeda del Tesoro (requiere el cazador de tesoros)",
	"myzoo_treasure_visit_all": "zoos de todos los amigos",
	"myzoo_treasure_start_at": "comienza en zoo",
	"myzoo_treasure_continue_from": "contin&#250;a desde...",
	"myzoo_kiosk_title": "Kioscos",
	"myzoo_kiosk_collect_all": "recolecta todos los kioscos",
	"myzoo_shake_title": "sacude &#225;rboles, topiarios, esculturas, setas, shows, rose garden, etc",
	"myzoo_shake_shake_all": "sacude todas las islas",
	"myzoo_move_title": "traslada todos los art&#237;culos de una isla al almac&#233;n",
	"myzoo_fill_title": "llena Greenhouse desde el almac&#233;n",
	"myzoo_auto_title": "Auto",
	"myzoo_auto_intro": "recoge XP de todas las puertas, recoge dinero de las entradas, alimenta todos los animales con el alimento preseleccionado, sacude todos los &#225;rboles, visita los zoos de todos los amigos...",
	"myzoo_lists_title": "listas",
	"myzoo_lists_intro": "genera lista de tengo/no tengo animales...",
	"myzoo_breeding_title": "Cr&#237;a",
	"myzoo_breeding_intro": "maneja la cr&#237;a",
	// Items
	"shop_title": "Art&#237;culos",
	"shop_intro": "Esto es una lista de todos los items/art&#237;culos conocidos en Zoo World. Aunque todos tienen un link para &#8220;comprar&#8221;, muchos de ellos no se pueden comprar. Existen diferentes razones para eso ( bloqueados, nuevos , suspendidos, etc). &lt;em&gt; Nota: si tu cuenta est&#225; vinculada con Pay Pal, por haber comprado anteriormente art&#237;culos con dinero real, se cobrar&#225; sin previo aviso&lt;/em&gt;",
	"shop_loading": "El Big Shop est&#225; cargando...",
	"shop_buy_id": "compra cualquier art&#237;culo por ID",
	"shop_buy_id_intro": "(util&#237;zalo cuando conoces la ID, pero la tienda a&#250;n no est&#225; actualizada).",
	"shop_upgrade_id": "agranda la jaula de cualquier animal por ID",
	"shop_upgrade_id_intro": "(util&#237;zalo cuando conoces la ID, pero la tienda a&#250;n no est&#225; actualizada).",
	"shop_repeat_buy_id": "repetir compra de cualquier item por ID",
	"shop_repeat_buy_id_intro": "(util&#237;zalo para comprar un art&#237;culo en particular por ID cada 10 segundos, muy &#250;til para todos los que regalan animales de alto nivel).",
	"shop_buy_fbc_intro": "compra con FBC",
	"shop_buy_by_wlf_item_id": "compra con wlfItemId",
	"shop_paypal_howto": "C&#243;mo cancelar tu &quot;Acuerdo un click&quot; entre RockYou, Inc. y PayPal despu&#233;s de haber comprado WLP o Ultra Raros.",
	// Spawning
	"gifts_title": "Spawning",
	"gifts_gifts_title": "regalos",
	"gifts_level_title": "Level up",
	"gifts_level_intro": "escribe el level deseado",
	"gifts_daily_title": "comparte Daily Gift",
	"gifts_trophy_title": "trofeo",
	"gifts_juice_title": "jugo",
	"gifts_flowerpots_title": "macetas",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "pide ayuda para coser",
	"gifts_fieldtrip_title": "Field Trip",
	"gifts_fieldtrip_anything_by_id": "cualquier cosa por ID",
	"gifts_treattrophy_title": "trofeos de alimentaci&#243;n",
	"gifts_buildables_title": "Buildables",
	"gifts_missions_title": "misiones",
	"gifts_missions_start": "iniciar",
	"gifts_missions_republish": "republicar",
	"gifts_missions_complete": "completado",
	"gifts_rosegarden_title": "Rose Garden",
	"gifts_rosegarden_share_upgrade": "share garden upgrade on wall",
	"gifts_rosegarden_ask_rose": "pide rosas en el muro",
	"gifts_rosegarden_share_rose": "publica rosas en el muro",
	"gifts_goldenegg_title": "huevo dorado",
	"gifts_icecream_title": "helado",
	"gifts_greenhouse_title": "Greenhouse",
	"gifts_megaspawn_title": "Mega Spawn",
	// Visitando
	"visiting_resume_intro": "(comienza de nuevo desde un zoo especificado si se bloquea el proceso)",
	"visiting_go_outside": "dependiendo del n&#250;mero de amigos que tengas, esto puede tardar mucho tiempo. Ve a otra p&#225;gina para seguir jugando:)",
	"visiting_load_friends": "carga tu lista de amigos...",
	// Advanced
	"advanced_title": "avanzado",
	"advanced_intro": "Si no est&#225;s seguro qu&#233; es esto, esto no es para ti!",
	"advanced_detailedlogging_title": "registro detallado",
	"advanced_friends_title": "amigos",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "tama&#241;o del zoo en la pantalla",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Work Queue",
	"advanced_play_title": "Play",
	"advanced_alternateaccess_title": "alternativas de acceso",
	"advanced_tryto_title": "intenta",
	"advanced_goldeninviter_title": "Golden inviter",
	"advanced_punkd_title": "Punk'd",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "evaluar",
	"advanced_javacript_ajaxdelay": "AJAX delay (milliseconds)",
	// generic
	"show": "mostrar",
	"hide": "ocultar",
	"shop": "Shop",
	"reload": "recargar",
	"island": "isla",
	"islands": "islas",
	"minute": "minuto",
	"minutes": "minutos",
	"hour": "hora",
	"hours": "horas",
	"day": "dia",
	"days": "dias",
	"once": "una vez",
	"repeat": "repetido",
	"to_friend": "a amigos",
	"specify_user_id": "especifica ID de amigo",
	"specific_user": "especifica amigo",
	"specify_user_id_prompt": "especifica Id de amigo:\n(busca la ID en el perfil del amigo)",
	"specify_animal_id": "especifica ID del animal",
	"specify_animal_id_prompt": "especifica ID del animal:\n(busca la ID en la lista del shop)",
	"send_to_feed": "enviar al muro",
	"ask_on_feed": "preguntar en el muro",
	"ask_for": "pedir",
	"share": "comparte",
	"share_roses": "comparte 'rosas'",
	"post": "publica",
	"share_completion": "publica finalizaci&#243;n",
	"completed": "completado",
	"help": "ayuda",
	"easy": "f&#225;cil",
	"medium": "medio",
	"hard": "duro",
	"invite": "invita",
	"hatched": "romper",
	"send_as_request": "env&#237;a como petici&#243;n",
	"ask_as_request": "solicita como petici&#243;n",
	"update_button": "bot&#243;n de actualizaci&#243;n",
	"button_go": "ir",
	"start": "comenzar",
	"republish": "republicar",
	"complete": "completar",
	// 2010/12/08
	// generic
	"post_trade": "post trade",
	"update": "actualizado",
	"loaded": "cargado",
	"main_zooremoved": "Zoo eliminado",
	"main_clicktogetback": "haz click para volver",
	"executing": "ejecutar",
	"specify_item_id_prompt": "Especificar art&#237;culo por Id:\(no aparece este ID en la lista de la tienda)",
	"close": "cerrar",
	"buy": "comprar",
	"gift": "regalo",
	"breed": "raza",
	"upgrade": "actualizar",
	"shareonwall": "mostrar en el muro",
	"refresh": "refrescar",
	"project": "proyecto",
	// Items
	"shop_flyout_categories": "Categor&#237;as",
	"shop_flyout_rarity": "Raros",
	"shop_flyout_breedingtime": "Tiempo de cr&#237;a",
	"shop_flyout_purchasefor": "Compra por",
	"shop_flyout_actualdollars": "D&#243;lares",
	"shop_flyout_fbc": "Cr&#233;ditos Facebook",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "Im&#225;genes",
	"shop_flyout_images_large": "grande",
	"shop_flyout_images_small": "peque&#241;a",
	"shop_flyout_images_baby": "beb&#233;",
	"shop_flyout_actions_title": "Acciones",
	"shop_flyout_actions_buylots_prompt": "N&#250;mero de art&#237;culos a comprar ? (para los animales, la cantidad debe ser menor que lo que necesitas para actualizar , para el resto, un m&#225;ximo de 999)",
	"shop_flyout_actions_buylots": "comprar lotes",
	"shop_flyout_actions_postadopt": "postear para adoptar",
	"shop_flyout_actions_customadopt": "personalizar adopciones",
	"shop_flyout_actions_thanksgivingwlpupgrade": "intentar actualizar un ultra por 1 WLP",
	"shop_flyout_actions_findinzoo": "encu&#233;ntralo en el zoo",
	"shop_flyout_actions_upgradeforwrenches": "actualizar kioscos con las herramientas",
	"shop_flyout_actions_cantbuy": "no puedes comprar...",
	"shop_flyout_actions_trytobuy": "Intenta comprar de todas formas?",
	"shop_flyout_actions_numitemstobuy": "N&#250;mero de art&#237;culos a comprar? (para los animales, la cantidad debe ser menor que lo que necesitas para actualizar, para el resto, un m&#225;ximo de 999)",
	"shop_flyout_actions_movealltostorage": "mover todo al almac&#233;n",
	"shop_flyout_actions_moneywarning": "AVISO: este Item cuesta dinero real y es posible que se te cobre sin previo aviso!",
	"shop_flyout_actions_facts": "Hechos",
	"shop_flyout_actions_training": "Entrenamiento",
	// advanced
	"advanced_friends_loadlist": "buscar lista",
	"advanced_friends_deduplicatelist": "duplicar lista",
	"advanced_zoo_loadzoo": "cargar tu Zoo",
	"advanced_zoo_loadanyzoo": "cargar otro Zoo",
	"advanced_zoo_showzoo": "mostrar Zoo",
	"advanced_zoo_specifyisland": "Especificar isla ID (0-10):",
	"advanced_zoo_loadyourisland": "cargar tu isla",
	"advanced_zoodisplay_normal": "normal",
	"advanced_zoodisplay_big": "grande",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "mostrar",
	"advanced_cookies_delete": "borrar",
	"advanced_cookies_set": "set",
	"advanced_workqueue_start": "empezar",
	"advanced_workqueue_stop": "parar",
	"advanced_workqueue_itemsinthequeue": "art&#237;culos en cola.",
	"advanced_workqueue_showsize": "mostrar tama&#241;o",
	"advanced_workqueue_clear": "limpiar",
	"advanced_alternateaccess_unframe": "Unframe Zoo",
	"advanced_alternateaccess_workaround": "Soluci&#243;n Zoo (Lite)",
	"advanced_tryto_forceadopt": "Forzar adopci&#243;n",
	"advanced_tryto_payday": "pago diario",
	"advanced_tryto_unlock11thisland": "desbloquear isla 11th",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Spawn",
	"megaspawn_flyout_projects": "Proyectos",
	"megaspawn_flyout_multiplenotes": "Notas m&#250;ltiples",
	// animal list flyout
	"animallist_flyout_title": "Lista de animales",
	"animallist_flyout_intro": "Copia y pega la lista para usarla",
	// breeding flyout
	"breeding_flyout_title": "Lista de reproducci&#243;n",
	"breeding_flyout_breeding": "cr&#237;as",
	"breeding_flyout_innest": "en los nidos",
	"breeding_flyout_nomorenests": "Lo siento, no hay nidos libres",
	"breeding_flyout_nobabies": "No hay beb&#233;s en los nidos.",
	"breeding_flyout_heal": "curar",
	"breeding_flyout_feed": "alimentar",
	"breeding_flyout_notready": "no est&#225;n listos",
	"breeding_flyout_upgradeandmove": "actualizar y mover al zoo",
	"breeding_flyout_move": "mover al zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Adopci&#243;n Personalizada",
	"customadopt_flyout_name": "nombre",
	"customadopt_flyout_image": "imagen",
	"customadopt_flyout_title": "t&#237;tulo",
	"customadopt_flyout_bodytext": "cuerpo del texto",
	"customadopt_flyout_button": "bot&#243;n",
	"customadopt_flyout_postbutton": "Postear personalizado",
	"customadopt_flyout_editingnotadvised": "La edici&#243;n de los art&#237;culos no se recomienda",
	// friend list
	"friendlist_addzoomate": "a&#241;adir zoomates",
	"friendlist_visitzoo": "visitar tu zoo",
	"friendlist_viewprofile": "ver tu perfil",
	"friendlist_posttreasurechest": "postear cofre del tesoro",
	"friendlist_postmysterychest": "postear cajas misteriosas",
	"friendlist_posthungryanimals": "postear animales hambrientos",
	"friendlist_sendvitamin": "enviar vitaminas",
	"friendlist_sendgoldgreenhouse": "enviar invernaderos de oro",
	// work queue
	"workqueue_starting": "Empezar la acci&#243;n",
	"workqueue_remaining": "remanentes",
	"workqueue_alreadystarted": "La acci&#243;n ha comenzado",
	"workqueue_stopped": "Acci&#243;n terminada",
	"workqueue_stopping": "Accion terminando",
	"workqueue_alreadstopped": "La acci&#243;n acab&#243;",
	// 2010/12/09 *****12/10/2010 NeedsMore Translation
	"animallist_flyout_generating": "Generar listas...",
	"animallist_flyout_havelist": "Animales con listas",
	"animallist_flyout_havenotlist": "Animales sin listas",
	"animallist_flyout_note": "Nota: los animales que no encuentras pueden ser discont&#237;nuos o in&#233;ditos.",
	// status
	"status_buying_buying": "comprando",
	"status_buying_bought": "comprado",
	"status_buying_ofitem": "de art&#237;culo",
	"status_buying_upgradingitem": "actualizar art&#237;culo",
	"status_buying_upgradeditem": "art&#237;culo actualizado",
	"status_wlfitemid_specify": "Especifica wlfArt&#237;culoId",
	"status_friendlist_loaded": "Lista de amigos cargada...",
	"status_friendlist_loading": "Buscando lista de amigos...",
	"status_friendlist_found": "Encontrada",
	"status_friendlist_friends": "amigos",
	"status_zoo_notloaded": "Zoo no cargado...",
	"status_zoo_loadedforfriend": "Cargando zoo de amigo",
	"status_feeding_waitingfor": "Esperando para alimentar de nuevo",
	"status_feeding_fed": "alimentar",
	"status_feeding_collected": "recolectar",
	"status_feeding_withtreat": "tratamiento",
	"status_feeding_animalswithtreat": "animales con tratamiento",
	"status_feeding_noanimalsforcumulative": "Ning&#250;n animal esperando",
	"status_training_training": "Entrenamiento",
	"status_training_everyfiveminutes": "cada cinco minutos...",
	"status_training_trained": "Entrenado",
	"status_gate_collectedxp": "Recoger XP de la puerta",
	"status_booth_collecting": "Recogiendo dinero de la puerta...",
	"status_booth_collected": "Dinero recogido de la puerta...",
	"status_visiting_visited": "Visitado",
	"status_visiting_zooandcollected": "zoo y recogida",
	"status_visiting_gettingreward": "Conseguir recompensa por visitar el zoo",
	"status_visiting_visitedandcollected": "Zoo visitado y recogido",
	"status_visiting_collected": "Recogido",
	"status_visiting_visitingall": "Visitando a todos",
	"status_visiting_ofyourfriendszoos": "Zoos de tus amigos...",
	"status_shaking_shakingitem": "Sacudir art&#237;culos",
	"status_shaking_oftype": "tipos",
	"status_shaking_forfriend": "para amigos",
	"status_shaking_notshakingitem": "Sacudiendo art&#237;culos",
	"status_shaking_shaking": "Sacudiendo",
	"status_shaking_for": "para",
	"status_shaking_shookitems": "Sacudido...",
	"status_shaking_shookitemsfailed": "Fallo al sacudir...",
	"status_island_loadingisland": "Buscando isla",
	"status_island_for": "para",
	"status_inventory_loading": "Buscando almac&#233;n",
	"status_inventory_queuing": "En cola",
	"status_inventory_forshaking": "para sacudir...",
	"status_moving_moving": "Moviendo",
	"status_moving_toinventory": "al almac&#233;n",
	"status_moving_toisland": "a la isla",
	// Items
	"shop_listempty": "Lista vac&#237;a",
	// Spawning
	"gifts_giftingitem": "Regalar art&#237;culos",
	"gifts_spawning": "Spawning",
	"gifts_trophy": "trofeos",
	"gifts_mission": "misi&#243;n",
	// Mega spawn
	"megaspawn_flyout_gifts": "Regalos",
	"megaspawn_flyout_missions": "Misiones",
	// generic
	"completion": "conclusi&#243;n"
};

// Indonesian translation by Jolly 2010/12/09
zdlang["id"] = {
	"title": "Zoo World Assistant",
	// Languages
	"language": "Jenis Bahasa",
	"en": "Bahasa Inggris",
	"es": "Bahasa Spanyol",
	"rs": "Bahasa Serbia",
	"de": "Bahasa Jerman",
	"ru": "Bahasa Rusia",
	"cn": "Bahasa Mandarin",
	"jp": "Bahasa Jepang",
	"it": "Bahasa Italia",
	"pt": "Bahasa Portugis",
	"fr": "Bahasa Prancis",
	"id": "Bahasa Indonesia",
	// tabs
	"tab_about": "Perihal",
	"tab_myzoo": "Zoo Saya",
	"tab_items": "Jenis perincian",
	"tab_spawning": "Spawning",
	"tab_friends": "Teman",
	"tab_advanced": "Kemajuan",
	// footer
	"footer_status": "Status",
	"footer_friends": "Teman",
	"footer_zoo": "Zoo",
	"footer_results": "Hasil AJAX ",
	"footer_clear_log": "Penghapusan perintah",
	// About
	"about_title": "Perihal",
	"about_body_1": "Ini adalah aplikasi untuk  melakukan trik-trik yang bagus dalam memainkan Zoo World.Hal ini dapat dikategorikan dalam perbuatan curang, penipuan, dan hasil dari perbuatan ini akan tidak mendapatkan dukungan dan tak menjamin akibatnya. Gunakan atas dasar resiko tanggungan sendiri!",
	"about_body_2": "Ada dua macam orang di dunia: orang yang dapat membaca dan orang yang telah diklik di tempat lain.",
	"about_body_3": "Jika anda masih disini maka mungkin Anda akan memperhatikan apa yang saya tulis. Saya harus menghapus semua script karena disebabkan oleh drama  yang timbul di dalam komunitas dunia Zoo World ini. Lain kali aku tidak mungkin kembali. Berpikirlah yang sehat ,  berhati-hati, dan jangan berpikir Anda tidak akan mendapat hukuman atas kecurangan yang anda telah perbuat.",
	"about_body_4": "Saya membuat kesalahan, hal-hal perubahan Zoo, hal-hal yang berubah di Facebook, dan script berhenti bekerja. Sebuah catatan sopan mungkin mengatakan sesuatu yang saya tidak tahu. Seratus mengomeli akan tidak ada gunanya.",
	"about_body_5": "Selamat menikmati Skrips ini dan Bersenang-senanglah! Dan juga selamat bergabung",
	"about_body_group": "Group", 
	// My Zoo
	"myzoo_feeding_title": "Makanan",
	"myzoo_feeding_feed": "Memberi makan",
	"myzoo_feeding_collect": "Mengumpulkan",
	"myzoo_feeding_day": "hari",
	"myzoo_feeding_days": "harian",
	"myzoo_gates_title": "Gerbang",
	"myzoo_gates_collect_all": " Mengumpulkan XP dari semua gerbang",
	"myzoo_gates_collect_booth_15": "Mengumpulkan uang dari semua tempat setiap 15 menit",
	"myzoo_training_title": "Pelatihan",
	"myzoo_treasure_title": "Berburu harta karun (memerlukan pemburu harta karun)",
	"myzoo_treasure_visit_all": "Semua teman Zoo",
	"myzoo_treasure_start_at": "Mulai di Zoo",
	"myzoo_treasure_continue_from": "bersambung dari ...",
	"myzoo_kiosk_title": "Kios",
	"myzoo_kiosk_collect_all": "mengumpulkan dari semua kios",
	"myzoo_shake_title": "guncang perpohonan, topiaras, patung, jamur, pertunjukan, kebun rose, dll",
	"myzoo_shake_shake_all": "guncang semua pulau",
	"myzoo_move_title": "memindahkan semua jenis barang dari pulau ke tempat penyimpanan",
	"myzoo_fill_title": "Mengisi rumah kaca dari inventoris",
	"myzoo_auto_title": "Otomatis",
	"myzoo_auto_intro": "Kumpulkan XP dari semua gerbang, mengumpulkan uang dari semua stan, memberi makan semua hewan dengan pengaturan saat ini, mengguncang semua pohon, mengunjungi semua zoo teman ...",
	"myzoo_lists_title": "Daftar",
	"myzoo_lists_intro": "Merincikan ada/tidaknya daftar dari semua hewan...",
	"myzoo_breeding_title": "Pembiakan",
	"myzoo_breeding_intro": "Pengaturan Pembiakan",
	// Items
	"shop_title": "Barang",
	"shop_intro": "Ini adalah daftar semua item yang dikenal dalam dunia Zoo. Meskipun ada link membeli banyak item yang tidak dapat dibeli karena beberapa alasan, (Belum tidak terkunci,  belum dirilis, dihentikan, dll). <em>Perhatikan bahwa jika account Anda telah terhubung dengan Pay Pal, seperti Anda telah membeli item dengan uang sungguhan sebelumnya, Anda akan dikenakan biaya tanpa peringatan.</em>",
	"shop_loading": "Toko Besar semuanya sedang loading...",
	"shop_buy_id": "Membeli semua barang dengan ID",
	"shop_buy_id_intro": "(Hanya digunakan ketika Anda mengetahui ID tetapi di toko belum diperbaharui).",
	"shop_upgrade_id": "upgrade berbagai hewan dengan menggunakan ID",
	"shop_upgrade_id_intro": "(Hanya digunakan ketika Anda mengetahui ID tetapi di toko belum diperbaharui).",
	"shop_repeat_buy_id": "ulangi membeli item apapun dengan ID",
	"shop_repeat_buy_id_intro": "(yang akan digunakan untuk membeli barang tertentu dengan ID setiap sepuluh detik, berguna bagi hewan-hewan level tinggi Gifting).",
	"shop_buy_fbc_intro": "Beli untuk FBC",
	"shop_buy_by_wlf_item_id": "Beli untuk wlfItemId",
	"shop_paypal_howto": "Bagaimana BATAL Anda \"Satu Klik Perjanjian\" antara RockYou, Inc dan PayPal setelah membeli WP atau Ultra Rare.",
	// Spawning
	"gifts_title": "Spawning",
	"gifts_gifts_title": "Hadiah",
	"gifts_level_title": "Kenaikan Level",
	"gifts_level_intro": "Ketik  level yang Anda kehendaki",
	"gifts_daily_title": "Membagi Hadiah Harian",
	"gifts_trophy_title": "Trophy",
	"gifts_juice_title": "Jus",
	"gifts_flowerpots_title": "Pot Bunga",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "Minta bantuan menjahit",
	"gifts_fieldtrip_title": "Darmawisata",
	"gifts_fieldtrip_anything_by_id": "apapun dengan ID",
	"gifts_treattrophy_title": "Perlakukan Trophy",
	"gifts_buildables_title": "Buildables",
	"gifts_missions_title": "Misi",
	"gifts_missions_start": "Mulai",
	"gifts_missions_republish": "menerbitkan lagi",
	"gifts_missions_complete": "rampung",
	"gifts_rosegarden_title": "Kebun mawar",
	"gifts_rosegarden_share_upgrade": "berbagi upgrade taman di dinding anda",
	"gifts_rosegarden_ask_rose": "Minta untuk mawar di dinding anda",
	"gifts_rosegarden_share_rose": "bagi mawar di dinding anda",
	"gifts_goldenegg_title": "Telur Emas",
	"gifts_icecream_title": "Es Cream",
	"gifts_greenhouse_title": "Rumah Kaca",
	"gifts_megaspawn_title": "Mega Spawn",
	// Visiting
	"visiting_resume_intro": "(Melanjutkan di specific zoo, Jika crash saat proses)",
	"visiting_go_outside": "Perhatikan bahwa tergantung pada jumlah teman yang Anda miliki, hal ini bisa memakan waktu yang lama! Pergi keluar dan bermain :)",
	"visiting_load_friends": "Load Daftar teman Anda...",
	// Advanced
	"advanced_title": "Lanjutan",
	"advanced_intro": "Jika Anda tidak yakin apa ini, ini bukan untuk Anda!",
	"advanced_detailedlogging_title": "Detil logging",
	"advanced_friends_title": "Teman",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Ukuran layar Zoo",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Antrian Perintah",
	"advanced_play_title": "Main",
	"advanced_alternateaccess_title": "Alternatif akses",
	"advanced_tryto_title": "mencoba untuk",
	"advanced_goldeninviter_title": "Pengundang Golden ",
	"advanced_punkd_title": "Punk'd",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "Mengevaluasi",
	"advanced_javacript_ajaxdelay": "AJAX delay (milidetik)",
	// generic
	"show": "Memunculkan",
	"hide": "menyembunyikan",
	"shop": "Toko",
	"reload": "Mengisi kembali",
	"island": "Pulau",
	"islands": "semua pulau",
	"minute": "menit",
	"minutes": "menit-menitan",
	"hour": "jam",
	"hours": "berjam-jaman",
	"day": "hari",
	"days": "hari-harian",
	"once": "Sekali",
	"repeat": "ulang",
	"to_friend": "kepada teman",
	"specify_user_id": "Menentukan ID pengguna",
	"specific_user": "menentukan pengguna",
	"specify_user_id_prompt": "Tentukan userId:\n(mengetahui ID ini dari profil mereka)",
	"specify_animal_id": "Menentukan ID hewan",
	"specify_animal_id_prompt": "Tentukan hewanId:\n(mengetahui ID ini dari daftar toko)",
	"send_to_feed": "kirim to feed",
	"ask_on_feed": "minta pada feed",
	"ask_for": "meminta",
	"share": "membagikan",
	"share_roses": "membagikan 'mawar'",
	"post": "mengumumkan",
	"share_completion": "berbagi penyelesaian",
	"completed": "Selesai",
	"help": "tolong",
	"easy": "mudah",
	"medium": "sedang",
	"hard": "sulit",
	"invite": "mengundang",
	"hatched": "menetas",
	"hard": "sulit",
	"send_as_request": "kirim sebagai permintaan",
	"ask_as_request": "minta sesuai permintaan",
	"update_button": "tombol update",
	"button_go": "jalankan", 
	"start": "memulai",
	"republish": "menerbitkan lagi",
	"complete": "selesai",
	// 2010/12/08
	// generic
	"post_trade": "pos perdagangan",
	"update": "update",
	"loaded": "yang diisi",
	"main_zooremoved": "Zoo dihapus",
	"main_clicktogetback": "klik untuk kembali",
	"executing": "melaksanakan",
	"specify_item_id_prompt": "Tentukan Itemid:\n(mengetahui ID ini dari daftar toko)",
	"close": "penutup",
	"buy": "buy",
	"gift": "hadiah",
	"breed": "membiakkan",
	"upgrade": "upgrade",
	"shareonwall": "berbagi di dinding",
	"refresh": "refresh",
	"project": "projek",
	// Items
	"shop_flyout_categories": "Kategoris",
	"shop_flyout_rarity": "Kelangkaan",
	"shop_flyout_breedingtime": "Waktu pembiakan",
	"shop_flyout_purchasefor": "Pembelian untuk",
	"shop_flyout_actualdollars": "actual dolars",
	"shop_flyout_fbc": "Facebook Credits",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "Images",
	"shop_flyout_images_large": "besar",
	"shop_flyout_images_small": "kecil",
	"shop_flyout_images_baby": "bayi",
	"shop_flyout_actions_title": "Actions",
	"shop_flyout_actions_buylots_prompt": "Jumlah barang yang dibeli? (untuk hewan, harus lebih kecil dari jumlah yang upgrade, untuk yang lain maksimum 999)",
	"shop_flyout_actions_buylots": "pembelian jumlah besar",
	"shop_flyout_actions_postadopt": "posting mengadopsian",
	"shop_flyout_actions_customadopt": "kustom mengadopsi",
	"shop_flyout_actions_thanksgivingwlpupgrade": "coba upgrade ke ultra untuk 1 WLP",
	"shop_flyout_actions_findinzoo": "temukan di zoo",
	"shop_flyout_actions_upgradeforwrenches": "upgrade untuk wrenches",
	"shop_flyout_actions_cantbuy": "tidak dapat membeli...",
	"shop_flyout_actions_trytobuy": "Cobalah untuk membeli pula?",
	"shop_flyout_actions_numitemstobuy": "Jumlah item untuk membeli? (untuk hewan, harus lebih kecil dari jumlah yang upgrade, untuk yang lain maksimum 999)",
	"shop_flyout_actions_movealltostorage": "memindahkan semua ke tempat penyimpanan",
	"shop_flyout_actions_moneywarning": "memindahkan semua ke tempat penyimpanan",
	"shop_flyout_actions_facts": "Fakta",
	"shop_flyout_actions_training": "Pelatihan",  
	// advanced
	"advanced_friends_loadlist": "memuat daftar",
	"advanced_friends_deduplicatelist": "deduplicate daftar",
	"advanced_zoo_loadzoo": "load Zoo Anda",
	"advanced_zoo_loadanyzoo": "load  Zoo lain",
	"advanced_zoo_showzoo": "Munculkan Zoo",
	"advanced_zoo_specifyisland": "Tentukan pulau ID (0-10):",
	"advanced_zoo_loadyourisland": "load Pulau Anda",
	"advanced_zoodisplay_normal": "normal",
	"advanced_zoodisplay_big": "besar",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "Munculkan",
	"advanced_cookies_delete": "Hapus",
	"advanced_cookies_set": "set",
	"advanced_workqueue_start": "start",
	"advanced_workqueue_stop": "stop",
	"advanced_workqueue_itemsinthequeue": "item dalam antrian.",
	"advanced_workqueue_showsize": "Munculkan ukuran",
	"advanced_workqueue_clear": "Bersihkan",
	"advanced_alternateaccess_unframe": "Unframe Zoo",
	"advanced_alternateaccess_workaround": "Workaround Zoo (Lite)",
	"advanced_tryto_forceadopt": "Force Adopt",
	"advanced_tryto_payday": "pay day",
	"advanced_tryto_unlock11thisland": "unlock 11th island",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Spawn",
	"megaspawn_flyout_projects": "Projek",
	"megaspawn_flyout_multiplenotes": "Multiple notes",
	// animal list flyout
	"animallist_flyout_title": "Animal List",
	"animallist_flyout_intro": "Copy and paste daftar ini untuk digunakan",
	// breeding flyout
	"breeding_flyout_title": "Daftar Pembiakan",
	"breeding_flyout_breeding": "pembiakan",
	"breeding_flyout_innest": "di dalam sarang",
	"breeding_flyout_nomorenests": "Tidak ada sarang kosong, maaf!",
	"breeding_flyout_nobabies": "Tidak ada bayi di sarang.",
	"breeding_flyout_heal": "menyembuhkan",
	"breeding_flyout_feed": "makan",
	"breeding_flyout_notready": "belum siap",
	"breeding_flyout_upgradeandmove": "upgrade dan pindah ke zoo",
	"breeding_flyout_move": "pindah ke zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Custom Adopt",
	"customadopt_flyout_name": "nama",
	"customadopt_flyout_image": "gambar",
	"customadopt_flyout_title": "judul",
	"customadopt_flyout_bodytext": "teks body",
	"customadopt_flyout_button": "tombol",
	"customadopt_flyout_postbutton": "Posting custom Adopt",
	"customadopt_flyout_editingnotadvised": "Mengedit item di bawah ini tidak dianjurkan!",
	// friend list
	"friendlist_addzoomate": "menambah zoo mate",
	"friendlist_visitzoo": "mengunjungi  zoo",
	"friendlist_viewprofile": "lihat profil",
	"friendlist_posttreasurechest": "post treasure chest",
	"friendlist_postmysterychest": "post mystery chest",
	"friendlist_posthungryanimals": "posting hewan lapar",
	"friendlist_sendvitamin": "Kirim vitamin",
	"friendlist_sendgoldgreenhouse": "Kirim rumah kaca",
	// work queue
	"workqueue_starting": "Mulai antrian",
	"workqueue_remaining": "sisa porsi",
	"workqueue_alreadystarted": "Antrian sudah mulai",
	"workqueue_stopped": "Berhenti antrian",
	"workqueue_stopping": "Menghentikan antrian",
	"workqueue_alreadstopped": "Antrian sudah berhenti"
};

// Italian translation by JGina Marie Layug and Marina De Giorgio 2010/12/13 (encoded)
zdlang["it"] = {
	"title": "Zoo World Assistente",
	// Languages
	"language": "Language",
	"en": "English",
	"es": "Spanish",
	"rs": "Serbian",
	"de": "German",
	"ru": "Russian",
	"cn": "Chinese",
	"jp": "Japanese",
	"it": "Italian",
	"pt": "Portugese",
	"fr": "French",
	// tabs
	"tab_about": "Info",
	"tab_myzoo": "Il mio Zoo",
	"tab_items": "Oggetti",
	"tab_spawning": "Spawning",
	"tab_friends": "Amici",
	"tab_advanced": "Avanzate",
	// footer
	"footer_status": "Stato",
	"footer_friends": "Amici",
	"footer_zoo": "Zoo",
	"footer_results": "AJAX risultati",
	"footer_clear_log": "Cancella registro",
	// About
	"about_title": "Info",
	"about_body_1": "Questo &#232; uno strumento per fare i trucchi sofisticati in Zoo World. Pu&#242; essere considerato un imbroglio e un hack e il risultato non pu&#242; essere sostenuto o garantito. Usare a proprio rischio e pericolo!",
	"about_body_2": "Ci sono due tipi di persone al mondo: persone che possono leggere e persone che hanno gi&#224; cliccato altrove.",
	"about_body_3": "Se siete ancora qui allora forse presterete attenzione a ci&#242; che scrivo. Ho dovuto rimuovere questi script per il dramma provocato all'interno della comunit&#224; di Zoo World. La prossima volta potrei non tornare. Siate astuti, discreti e non crediate che non sarete puniti per aver imbrogliato.",
	"about_body_4": "Faccio degli errori, le cose cambiano in Zoo, le cose cambiano in Facebook, e gli script smettono di funzionare. Una nota educata potrebbe dirmi qualcosa che non so. Un centinaio di lamentele non faranno nulla di buono.",
	"about_body_5": "Godetevi i miei script e buon divertimento! Inoltre, iscrivitevi al nostro",
	"about_body_group": "gruppo",
	// My Zoo
	"myzoo_feeding_title": "Nutrimento",
	"myzoo_feeding_feed": "Nutri",
	"myzoo_feeding_collect": "Raccogli",
	"myzoo_feeding_day": "giorno",
	"myzoo_feeding_days": "giorni",
	"myzoo_gates_title": "Cancelli",
	"myzoo_gates_collect_all": "Raccogli XP da tutti i cancelli",
	"myzoo_gates_collect_booth_15": "Raccogliere i soldi dalla cabina ogni 15 minuti",
	"myzoo_training_title": "Addestramento",
	"myzoo_treasure_title": "Caccia al tesoro (richiede treasure hunter)",
	"myzoo_treasure_visit_all": "tutti gli zoo",
	"myzoo_treasure_start_at": "Inizia da zoo",
	"myzoo_treasure_continue_from": "continuare da...",
	"myzoo_kiosk_title": "Chioschi",
	"myzoo_kiosk_collect_all": "raccogliere tutti i chioschi",
	"myzoo_shake_title": "agitare alberi, topiarie, sculture, funghi, show, roseto, etc",
	"myzoo_shake_shake_all": "agitare tutte le isole",
	"myzoo_move_title": "Spostare tutto dall un isola allo storage",
	"myzoo_fill_title": "Riempire greenhouse da inventario",
	"myzoo_auto_title": "Automatico",
	"myzoo_auto_intro": "Raccogli XP da tutte i cancelli, raccogli i soldi dalla cabina, alimenta tutti gli animali con le impostazioni correnti, scuoti tutti gli alberi, visita tutti gli zoo degli amici...",
	"myzoo_lists_title": "Liste",
	"myzoo_lists_intro": "Genera ho/no ho lista di animali...",
	"myzoo_breeding_title": "breeding",
	"myzoo_breeding_intro": "Gestisci breeding",
	// Items
	"shop_title": "Cose",
	"shop_intro": "Questa &#232; una lista di tutte le cose conosciute in Zoo World. Anche se ci sono i link per comprare, molti articoli non possono essere acquistati per una serie di motivi (non ancora sbloccato, inedito, interrotto, ecc.) &lt;em&gt;NOTA se il tuo account &#232; gi&#224; collegato a Pay Pal perch&#232; hai acquistato oggetti con soldi reali,acquistando tramite assistente qualcosa che costa soldi reali ti verr&#224; addebitato senza preavviso ..&lt;/em&gt;",
	"shop_loading": "Il grande negozio di tutto sta caricando...",
	"shop_buy_id": "acquistare qualsiasi oggetto da ID",
	"shop_buy_id_intro": "(da utilizzare quando si conosce l'ID, ma questo negozio non &#232; stato aggiornato).",
	"shop_upgrade_id": "aggiornare qualsiasi animale da ID",
	"shop_upgrade_id_intro": "(utilizzare quando si conosce l'ID, ma questo negozio non &#232; stato aggiornato).",
	"shop_repeat_buy_id": "comprare cose ripetutamente da ID",
	"shop_repeat_buy_id_intro": "(utilizzare per acquistare cose specifiche via ID ogni dieci secondi, utile per regalare animali di alto livello,).",
	"shop_buy_fbc_intro": "Compra con FBC",
	"shop_buy_by_wlf_item_id": "compra da wlfItemId",
	"shop_paypal_howto": "Come cancellare il tuo \"Accordo One Click\" tra RockYou, Inc e PayPal dopo l'acquisto di WLP o un Ultra Rare.",
	// Spawning
	"gifts_title": "Spawning",
	"gifts_gifts_title": "Regali",
	"gifts_level_title": "Level up",
	"gifts_level_intro": "Scrivi livello desiderato",
	"gifts_daily_title": "Condividi dono quotidiano",
	"gifts_trophy_title": "Trofeo",
	"gifts_juice_title": "Succo",
	"gifts_flowerpots_title": "Vasi di fiori",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "Ask for sewing help",
	"gifts_fieldtrip_title": "Chiedi aiuto per cucire",
	"gifts_fieldtrip_anything_by_id": "qualsiasi cosa da ID",
	"gifts_treattrophy_title": "Trofeo treats",
	"gifts_buildables_title": "Buildables",
	"gifts_missions_title": "Missioni",
	"gifts_missions_start": "inizio",
	"gifts_missions_republish": "ripubblicare",
	"gifts_missions_complete": "completo",
	"gifts_rosegarden_title": "Giardino delle Rose",
	"gifts_rosegarden_share_upgrade": "Condividi upgrade",
	"gifts_rosegarden_ask_rose": "richiedi rose",
	"gifts_rosegarden_share_rose": "Condividi la tua rosa",
	"gifts_goldenegg_title": "Golden Egg",
	"gifts_icecream_title": "Ice Cream",
	"gifts_greenhouse_title": "Greenhouse",
	"gifts_megaspawn_title": "Mega Post",
	// Visiting
	"visiting_resume_intro": "(riprende da uno zoo specifico, se il processo si ferma)",
	"visiting_go_outside": "Si noti che a seconda del numero di amici che hai, questo potrebbe richiedere molto tempo! Vai fuori e giocare :)",
	"visiting_load_friends": "Carico la lista di amici...",
	// Advanced
	"advanced_title": "Avanzate",
	"advanced_intro": "Se non sei sicuro cosa &#232; questo allora non &#232; per te!",
	"advanced_detailedlogging_title": "Logging dettagliato",
	"advanced_friends_title": "Amici",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Dimensione del display zoo",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Coda di lavoro",
	"advanced_play_title": "Gioca",
	"advanced_alternateaccess_title": "Accessi alternativi",
	"advanced_tryto_title": "Cerca di",
	"advanced_goldeninviter_title": "Golden inviter",
	"advanced_punkd_title": "Scherzi",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "valutare",
	"advanced_javacript_ajaxdelay": "AJAX ritardo (millisecondi)",
	// generic
	"show": "mostra",
	"hide": "nascondi",
	"shop": "Negozio",
	"reload": "ricarica",
	"island": "isola",
	"islands": "isole",
	"minute": "minuto",
	"minutes": "minuti",
	"hour": "ora",
	"hours": "ore",
	"day": "giornata",
	"days": "giorni",
	"once": "una volta",
	"repeat": "ripeti",
	"to_friend": "a un amico",
	"specify_user_id": "specificare l'ID utente",
	"specific_user": "specificare l'utente",
	"specify_user_id_prompt": "Specificare l'ID utente:\n(trovare questo ID da loro profilo)",
	"specify_animal_id": "specify animal ID",
	"specify_animal_id_prompt": "specificare ID animale:\n(trovare questo ID dall'elenco negozio)",
	"send_to_feed": "pubblica",
	"ask_on_feed": "richiedi",
	"ask_for": "richiedi",
	"share": "condividi",
	"share_roses": "condividi rose",
	"post": "pubblica",
	"share_completion": "condividi il completamento",
	"completed": "completato",
	"help": "aiuto",
	"easy": "easy",
	"medium": "medium",
	"hard": "hard",
	"invite": "invita",
	"hatched": "schiuso",
	"send_as_request": "invia come richiesta",
	"ask_as_request": "chiedi come richiesta",
	"update_button": "Aggiorna pulsante",
	"button_go": "Vai",
	"start": "inizia",
	"republish": "ripubblica",
	"complete": "completo",
	// 2010/12/08
	// generic
	"post_trade": "pubblica richiesta per",
	"update": "aggiorna",
	"loaded": "caricato",
	"main_zooremoved": "Zoo rimosso",
	"main_clicktogetback": "clicca per tornare",
	"executing": "in esecuzione",
	"specify_item_id_prompt": "Specificare itemId: \ n (trovare questo ID dall'elenco negozio)",
	"close": "chiudi",
	"buy": "acquista",
	"gift": "regalo",
	"breed": "breed",
	"upgrade": "upgrade",
	"shareonwall": "Condividi",
	"refresh": "aggiorna",
	"project": "progetto",
	// Items
	"shop_flyout_categories": "Categorie",
	"shop_flyout_rarity": "Rarit&#224;",
	"shop_flyout_breedingtime": "Tempo breeding",
	"shop_flyout_purchasefor": "comprare per",
	"shop_flyout_actualdollars": "dollari reali",
	"shop_flyout_fbc": "Crediti FB",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "Immagini",
	"shop_flyout_images_large": "grande",
	"shop_flyout_images_small": "piccolo",
	"shop_flyout_images_baby": "baby",
	"shop_flyout_actions_title": "Azione",
	"shop_flyout_actions_buylots_prompt": "Numero di prodotti da acquistare? (Per gli animali, devono essere inferiori al numero richiesto per upgrade gabbia, per altri un massimo di 999)",
	"shop_flyout_actions_buylots": "acquista molti",
	"shop_flyout_actions_postadopt": "pubblica adozione",
	"shop_flyout_actions_customadopt": "adozione personalizzata",
	"shop_flyout_actions_thanksgivingwlpupgrade": "tenta l'aggiornamento a ultra con 1 WLP",
	"shop_flyout_actions_findinzoo": "trovare nello zoo",
	"shop_flyout_actions_upgradeforwrenches": "upgrade for wrenches",
	"shop_flyout_actions_cantbuy": "non posso acquistare questi...",
	"shop_flyout_actions_trytobuy": "Prova a comprare comunque?",
	"shop_flyout_actions_numitemstobuy": "Numero di prodotti da acquistare? (Per gli animali, devono essere inferiori al numero richiesto per upgrade gabbia, per altri un massimo di 999)",
	"shop_flyout_actions_movealltostorage": "Sposta tutto in storage",
	"shop_flyout_actions_moneywarning": "Sposta tutti in storage",
	"shop_flyout_actions_facts": "Fatti",
	"shop_flyout_actions_training": "Addestramento",
	// advanced
	"advanced_friends_loadlist": "Carica lista",
	"advanced_friends_deduplicatelist": "deduplica lista",
	"advanced_zoo_loadzoo": "Carica il tuo zoo",
	"advanced_zoo_loadanyzoo": "Carica qualsiasi zoo",
	"advanced_zoo_showzoo": "mostra Zoo",
	"advanced_zoo_specifyisland": "Specifica isola ID(0-10):",
	"advanced_zoo_loadyourisland": "Carica la tua isola",
	"advanced_zoodisplay_normal": "normale",
	"advanced_zoodisplay_big": "grande",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "mostra",
	"advanced_cookies_delete": "cancella",
	"advanced_cookies_set": "stabilisci",
	"advanced_workqueue_start": "inizia",
	"advanced_workqueue_stop": "ferma",
	"advanced_workqueue_itemsinthequeue": "articoli presenti nella coda.",
	"advanced_workqueue_showsize": "Mostra dimensione",
	"advanced_workqueue_clear": "sgombra",
	"advanced_alternateaccess_unframe": "Scornicia Zoo",
	"advanced_alternateaccess_workaround": "Aggira Zoo",
	"advanced_tryto_forceadopt": "Forza Adozione",
	"advanced_tryto_payday": "paga giornata",
	"advanced_tryto_unlock11thisland": "sblocca isola 11",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Spawn",
	"megaspawn_flyout_projects": "Progetti",
	"megaspawn_flyout_multiplenotes": "MultiNote",
	// animal list flyout
	"animallist_flyout_title": "Lista degli animali",
	"animallist_flyout_intro": "Copia e incolla elenco per usare",
	// breeding flyout
	"breeding_flyout_title": "Lista Breeding",
	"breeding_flyout_breeding": "Breeding",
	"breeding_flyout_innest": "nel nido",
	"breeding_flyout_nomorenests": "Nessun nido libero, mi spiace!",
	"breeding_flyout_nobabies": "Nessun piccolo nei nidi.",
	"breeding_flyout_heal": "cura",
	"breeding_flyout_feed": "nutri",
	"breeding_flyout_notready": "non ancora pronto",
	"breeding_flyout_upgradeandmove": "upgrade e sposta in zoo",
	"breeding_flyout_move": "sposta in zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Post Personalizzato",
	"customadopt_flyout_name": "nome",
	"customadopt_flyout_image": "foto",
	"customadopt_flyout_title": "titolo",
	"customadopt_flyout_bodytext": "corpo del testo",
	"customadopt_flyout_button": "pulsante",
	"customadopt_flyout_postbutton": "Pubblica post personalizzato",
	"customadopt_flyout_editingnotadvised": "Modificare le voci riportate di seguito non &#232; consigliato!",
	// friend list
	"friendlist_addzoomate": "Aggiungi zoo mate",
	"friendlist_visitzoo": "Visualizza profilo",
	"friendlist_viewprofile": "vedi profilo",
	"friendlist_posttreasurechest": "pubblica scrigno del tesoro",
	"friendlist_postmysterychest": " pubblica blu mystery gift",
	"friendlist_posthungryanimals": "pubblica animali affamati",
	"friendlist_sendvitamin": "invia vitamina",
	"friendlist_sendgoldgreenhouse": "invia gold greenhouse",
	// work queue
	"workqueue_starting": "Avvio di coda",
	"workqueue_remaining": "rimanente",
	"workqueue_alreadystarted": "Coda gi&#224; iniziata",
	"workqueue_stopped": "Coda arrestata",
	"workqueue_stopping": "Arrestando la coda",
	"workqueue_alreadstopped": "Coda gi&#224; arrestata",
	// 2010/12/09
	"animallist_flyout_generating": "Generando lista...",
	"animallist_flyout_havelist": "Lista animali ho",
	"animallist_flyout_havenotlist": "Lista animali non ho",
	"animallist_flyout_note": "Nota: molti degli animali che non hai potrebbero essere inediti o interrotti.",
	// status
	"status_buying_buying": "comprando",
	"status_buying_bought": "comprato",
	"status_buying_ofitem": "di articolo",
	"status_buying_upgradingitem": "upgrading articolo",
	"status_buying_upgradeditem": "upgraded articolo",
	"status_wlfitemid_specify": "Specifica wlfItemId",
	"status_friendlist_loaded": "Lista amici gi&#224; caricata...",
	"status_friendlist_loading": "Caricamento lista amici...",
	"status_friendlist_found": "Trovato",
	"status_friendlist_friends": "amici",
	"status_zoo_notloaded": "Zoo non caricato...",
	"status_zoo_loadedforfriend": "Caricamento zoo di amico",
	"status_feeding_waitingfor": "Aspettando di nutrire ancora per",
	"status_feeding_fed": "nutrito",
	"status_feeding_collected": "raccolto",
	"status_feeding_withtreat": "con treat",
	"status_feeding_animalswithtreat": "animali con treat",
	"status_feeding_noanimalsforcumulative": "Nessun animale per servizio di nutrizione cumulativa",
	"status_training_training": "Addestramento",
	"status_training_everyfiveminutes": "ogni cinque minuti...",
	"status_training_trained": "Addestrato",
	"status_gate_collectedxp": "Raccolto xp dal cancello dell'isola",
	"status_booth_collecting": "Raccogliendo soldi dalla cabina...",
	"status_booth_collected": "Raccolto soldi dalla cabina...",
	"status_visiting_visited": "Visitato",
	"status_visiting_zooandcollected": "zoo e raccolto",
	"status_visiting_gettingreward": "Raccogliendo premio per la visita allo zoo di",
	"status_visiting_visitedandcollected": "Zoo visitato e raccolto",
	"status_visiting_collected": "Raccolto",
	"status_visiting_visitingall": "Visitando tutti",
	"status_visiting_ofyourfriendszoos": "gli zoo dei tuoi amici...",
	"status_shaking_shakingitem": "Scuotendo oggetti",
	"status_shaking_oftype": "di tipo",
	"status_shaking_forfriend": "per amico",
	"status_shaking_notshakingitem": "Scuotendo oggetto",
	"status_shaking_shaking": "Scuotendo",
	"status_shaking_for": "per",
	"status_shaking_shookitems": "Scosso oggetti...",
	"status_shaking_shookitemsfailed": "Non &#232; riuscito a scuotere gli oggetti...",
	"status_island_loadingisland": "Caricamento isola",
	"status_island_for": "per",
	"status_inventory_loading": "Caricamento inventario per",
	"status_inventory_queuing": "Accodamento",
	"status_inventory_forshaking": "per scuotere...",
	"status_moving_moving": "Spostando",
	"status_moving_toinventory": "in inventario",
	"status_moving_toisland": "a isola",
	// Items
	"shop_listempty": "Lista vuota",
	// Spawning
	"gifts_giftingitem": "Regalando oggetto",
	"gifts_spawning": "Spawning",
	"gifts_trophy": "trofeo",
	"gifts_mission": "missione",
	// Mega spawn
	"megaspawn_flyout_gifts": "Regali",
	"megaspawn_flyout_missions": "Missioni",
	// generic
	"completion": "completamento",
	// 2010/12/10
	"megaspawn_flyout_christmas": "natale"
};

// Russian translation by Irena Tkach 2010/12/15 (encoded)
zdlang['ru'] = {
	// generic
	"title": "&#1055;&#1086;&#1084;&#1086;&#1097;&#1085;&#1080;&#1082; Zoo World",
	"show": "&#1055;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100;",
	"hide": "&#1057;&#1082;&#1088;&#1099;&#1090;&#1100;",
	"shop": "&#1052;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085;",
	"reload": "&#1055;&#1077;&#1088;&#1077;&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100;",
	"language": "&#1071;&#1079;&#1099;&#1082;&#1080;",
	"en": "&#1040;&#1085;&#1075;&#1083;&#1080;&#1081;&#1089;&#1082;&#1080;&#1081;",
	"es": "&#1048;&#1089;&#1087;&#1072;&#1085;&#1089;&#1082;&#1080;&#1081;",
	"de": "&#1053;&#1077;&#1084;&#1077;&#1094;&#1082;&#1080;&#1081;",
	"rs": "&#1057;&#1077;&#1088;&#1073;&#1089;&#1082;&#1080;&#1081;",
	"ru": "&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;",
	"cn": "&#1050;&#1080;&#1090;&#1072;&#1081;&#1089;&#1082;&#1080;&#1081;",
	"jp": "&#1071;&#1087;&#1086;&#1085;&#1089;&#1082;&#1080;&#1081;",
	"it": "&#1048;&#1090;&#1072;&#1083;&#1100;&#1103;&#1085;&#1089;&#1082;&#1080;&#1081;",
	"pt": "&#1055;&#1086;&#1088;&#1090;&#1091;&#1075;&#1072;&#1083;&#1100;&#1089;&#1082;&#1080;&#1081;",
	"fr": "&#1060;&#1088;&#1072;&#1085;&#1094;&#1091;&#1079;&#1089;&#1082;&#1080;&#1081;",
	"id": "&#1048;&#1085;&#1076;&#1086;&#1085;&#1077;&#1079;&#1080;&#1081;&#1089;&#1082;&#1080;&#1081;",
	"hr": "&#1061;&#1086;&#1088;&#1074;&#1072;&#1090;&#1089;&#1082;&#1080;&#1081;",
	"he": "&#1048;&#1074;&#1088;&#1080;&#1090;",
	"pl": "&#1055;&#1086;&#1083;&#1100;&#1089;&#1082;&#1080;&#1081;",
	"uk": "&#1059;&#1082;&#1088;&#1072;&#1080;&#1085;&#1089;&#1082;&#1080;&#1081;",
	// tabs
	"tab_about": "&#1054; &#1085;&#1072;&#1089;",
	"tab_myzoo": "&#1052;&#1086;&#1081; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"tab_items": "&#1058;&#1086;&#1074;&#1072;&#1088;&#1099;",
	"tab_spawning": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;",
	"tab_friends": "&#1044;&#1088;&#1091;&#1079;&#1100;&#1103;",
	"tab_advanced": "&#1055;&#1088;&#1086;&#1076;&#1074;&#1080;&#1085;&#1091;&#1090;&#1099;&#1084;",
	// footer
	"footer_status": "&#1057;&#1090;&#1072;&#1090;&#1091;&#1089;",
	"footer_friends": "&#1044;&#1088;&#1091;&#1079;&#1100;&#1103;",
	"footer_zoo": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"footer_results": "&#1056;&#1077;&#1079;&#1091;&#1083;&#1100;&#1090;&#1072;&#1090;&#1099; AJAX",
	"footer_clear_log": "&#1054;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1100; &#1078;&#1091;&#1088;&#1085;&#1072;&#1083; &#1088;&#1077;&#1075;&#1080;&#1089;&#1090;&#1088;&#1072;&#1094;&#1080;&#1080;",
	// About
	"about_title": "&#1054; &#1085;&#1072;&#1089;",
	"about_body_1": "&#1069;&#1090;&#1086; &#1080;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090;, &#1087;&#1086;&#1079;&#1074;&#1086;&#1083;&#1103;&#1102;&#1097;&#1080;&#1081; &#1076;&#1077;&#1083;&#1072;&#1090;&#1100; &#1082;&#1083;&#1077;&#1074;&#1099;&#1077; &#1090;&#1088;&#1102;&#1082;&#1080; &#1074; &#1080;&#1075;&#1088;&#1077; Zoo World. &#1069;&#1090;&#1086; &#1084;&#1086;&#1078;&#1085;&#1086; &#1089;&#1095;&#1080;&#1090;&#1072;&#1090;&#1100; &#1084;&#1086;&#1096;&#1077;&#1085;&#1085;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;&#1084; &#1080; &#1093;&#1072;&#1082;&#1077;&#1088;&#1089;&#1090;&#1074;&#1086;&#1084;, &#1080; &#1085;&#1080;&#1082;&#1090;&#1086; &#1085;&#1077; &#1075;&#1072;&#1088;&#1072;&#1085;&#1090;&#1080;&#1088;&#1091;&#1077;&#1090; &#1074;&#1072;&#1084; &#1088;&#1077;&#1079;&#1091;&#1083;&#1100;&#1090;&#1072;&#1090;. &#1055;&#1086;&#1083;&#1100;&#1079;&#1091;&#1081;&#1090;&#1077;&#1089;&#1100; &#1085;&#1072; &#1089;&#1074;&#1086;&#1081; &#1089;&#1090;&#1088;&#1072;&#1093; &#1080; &#1088;&#1080;&#1089;&#1082;!",
	"about_body_2": "&#1042; &#1084;&#1080;&#1088;&#1077; &#1089;&#1091;&#1097;&#1077;&#1089;&#1090;&#1074;&#1091;&#1077;&#1090; &#1076;&#1074;&#1072; &#1074;&#1080;&#1076;&#1072; &#1083;&#1102;&#1076;&#1077;&#1081;: &#1083;&#1102;&#1076;&#1080;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1091;&#1084;&#1077;&#1102;&#1090; &#1095;&#1080;&#1090;&#1072;&#1090;&#1100;, &#1080; &#1083;&#1102;&#1076;&#1080;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1091;&#1078;&#1077; &#1091;&#1089;&#1087;&#1077;&#1083;&#1080; &#1082;&#1083;&#1080;&#1082;&#1085;&#1091;&#1090;&#1100; &#1074; &#1076;&#1088;&#1091;&#1075;&#1086;&#1084; &#1084;&#1077;&#1089;&#1090;&#1077;.",
	"about_body_3": "&#1045;&#1089;&#1083;&#1080; &#1074;&#1099; &#1074;&#1089;&#1077; &#1077;&#1097;&#1077; &#1079;&#1076;&#1077;&#1089;&#1100;, &#1090;&#1086;, &#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1086;, &#1074;&#1099; &#1086;&#1073;&#1088;&#1072;&#1090;&#1080;&#1090;&#1077; &#1074;&#1085;&#1080;&#1084;&#1072;&#1085;&#1080;&#1077; &#1085;&#1072; &#1090;&#1086;, &#1095;&#1090;&#1086; &#1103; &#1087;&#1080;&#1096;&#1091;. &#1052;&#1085;&#1077; &#1091;&#1078;&#1077; &#1087;&#1088;&#1080;&#1093;&#1086;&#1076;&#1080;&#1083;&#1086;&#1089;&#1100; &#1091;&#1076;&#1072;&#1083;&#1103;&#1090;&#1100; &#1101;&#1090;&#1080; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1099; &#1080;&#1079;-&#1079;&#1072; &#1076;&#1088;&#1072;&#1084;&#1099;, &#1088;&#1072;&#1079;&#1099;&#1075;&#1088;&#1072;&#1074;&#1096;&#1077;&#1081;&#1089;&#1103; &#1074; &#1089;&#1086;&#1086;&#1073;&#1097;&#1077;&#1089;&#1090;&#1074;&#1077; Zoo World. &#1042; &#1089;&#1083;&#1077;&#1076;&#1091;&#1102;&#1097;&#1080;&#1081; &#1088;&#1072;&#1079; &#1103; &#1084;&#1086;&#1075;&#1091; &#1080; &#1085;&#1077; &#1074;&#1077;&#1088;&#1085;&#1091;&#1090;&#1100;&#1089;&#1103;. &#1041;&#1091;&#1076;&#1100;&#1090;&#1077; &#1073;&#1083;&#1072;&#1075;&#1086;&#1088;&#1072;&#1079;&#1091;&#1084;&#1085;&#1099;, &#1073;&#1091;&#1076;&#1100;&#1090;&#1077; &#1086;&#1089;&#1090;&#1086;&#1088;&#1086;&#1078;&#1085;&#1099; &#1080; &#1085;&#1077; &#1076;&#1091;&#1084;&#1072;&#1081;&#1090;&#1077;, &#1095;&#1090;&#1086; &#1074;&#1072;&#1089; &#1085;&#1077; &#1085;&#1072;&#1082;&#1072;&#1078;&#1091;&#1090; &#1079;&#1072; &#1084;&#1086;&#1096;&#1077;&#1085;&#1085;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;.",
	"about_body_4": "&#1048;&#1085;&#1086;&#1075;&#1076;&#1072; &#1103; &#1086;&#1096;&#1080;&#1073;&#1072;&#1102;&#1089;&#1100;, &#1080;&#1085;&#1086;&#1075;&#1076;&#1072; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1077; &#1080; &#1074; Facebook &#1087;&#1088;&#1086;&#1080;&#1089;&#1093;&#1086;&#1076;&#1103;&#1090; &#1087;&#1077;&#1088;&#1077;&#1084;&#1077;&#1085;&#1099;, &#1080; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1099; &#1087;&#1077;&#1088;&#1077;&#1089;&#1090;&#1072;&#1102;&#1090; &#1088;&#1072;&#1073;&#1086;&#1090;&#1072;&#1090;&#1100;. &#1042;&#1077;&#1078;&#1083;&#1080;&#1074;&#1086;&#1077; &#1079;&#1072;&#1084;&#1077;&#1095;&#1072;&#1085;&#1080;&#1077; &#1084;&#1086;&#1078;&#1077;&#1090; &#1089;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; &#1084;&#1085;&#1077; &#1095;&#1090;&#1086;-&#1090;&#1086;, &#1095;&#1077;&#1075;&#1086; &#1103; &#1085;&#1077; &#1079;&#1085;&#1072;&#1102;. &#1057;&#1086;&#1090;&#1085;&#1103; &#1087;&#1088;&#1080;&#1076;&#1080;&#1088;&#1086;&#1082; &#1085;&#1077; &#1087;&#1088;&#1080;&#1085;&#1077;&#1089;&#1077;&#1090; &#1085;&#1080;&#1082;&#1072;&#1082;&#1086;&#1081; &#1087;&#1086;&#1083;&#1100;&#1079;&#1099;.",
	"about_body_5": "&#1055;&#1086;&#1083;&#1100;&#1079;&#1091;&#1081;&#1090;&#1077;&#1089;&#1100; &#1084;&#1086;&#1080;&#1084;&#1080; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1072;&#1084;&#1080; &#1080; &#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1081;&#1090;&#1077; &#1091;&#1076;&#1086;&#1074;&#1086;&#1083;&#1100;&#1089;&#1090;&#1074;&#1080;&#1077;! &#1042;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1090;&#1072;&#1082;&#1078;&#1077; &#1087;&#1088;&#1080;&#1089;&#1086;&#1077;&#1076;&#1080;&#1085;&#1080;&#1090;&#1100;&#1089;&#1103; &#1082; &#1085;&#1072;&#1096;&#1077;&#1081;",
	"about_body_group": "&#1075;&#1088;&#1091;&#1087;&#1087;&#1077;",
	// My Zoo
	"myzoo_feeding_title": "&#1050;&#1086;&#1088;&#1084;&#1083;&#1077;&#1085;&#1080;&#1077;",
	"myzoo_feeding_feed": "&#1055;&#1086;&#1082;&#1086;&#1088;&#1084;&#1080;&#1090;&#1100;",
	"myzoo_feeding_collect": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100;",
	"myzoo_feeding_day": "&#1076;&#1077;&#1085;&#1100;",
	"myzoo_feeding_days": "&#1076;&#1085;&#1103;",
	"myzoo_gates_title": "&#1042;&#1086;&#1088;&#1086;&#1090;&#1072;",
	"myzoo_gates_collect_all": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100; XP &#1089;&#1086; &#1074;&#1089;&#1077;&#1093; &#1074;&#1086;&#1088;&#1086;&#1090;",
	"myzoo_gates_collect_booth_15": "&#1057;&#1086;&#1073;&#1080;&#1088;&#1072;&#1090;&#1100; &#1076;&#1077;&#1085;&#1100;&#1075;&#1080; &#1080;&#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1077; &#1082;&#1072;&#1078;&#1076;&#1099;&#1077; 15 &#1084;&#1080;&#1085;&#1091;&#1090;",
	"myzoo_training_title": "&#1044;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1072;",
	"myzoo_treasure_title": "&#1055;&#1086;&#1080;&#1089;&#1082; &#1089;&#1086;&#1082;&#1088;&#1086;&#1074;&#1080;&#1097; (&#1090;&#1088;&#1077;&#1073;&#1091;&#1077;&#1090;&#1089;&#1103; &#1086;&#1093;&#1086;&#1090;&#1085;&#1080;&#1094;&#1072; &#1079;&#1072; &#1089;&#1086;&#1082;&#1088;&#1086;&#1074;&#1080;&#1097;&#1072;&#1084;&#1080;)",
	"myzoo_treasure_visit_all": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1080; &#1074;&#1089;&#1077;&#1093; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;",
	"myzoo_treasure_start_at": "&#1053;&#1072;&#1095;&#1072;&#1090;&#1100; &#1089; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072;",
	"myzoo_treasure_continue_from": "&#1087;&#1088;&#1086;&#1076;&#1086;&#1083;&#1078;&#1080;&#1090;&#1100; &#1089; ...",
	"myzoo_kiosk_title": "&#1050;&#1080;&#1086;&#1089;&#1082;&#1080;",
	"myzoo_kiosk_collect_all": "&#1089;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100; &#1076;&#1077;&#1085;&#1100;&#1075;&#1080; &#1089;&#1086; &#1074;&#1089;&#1077;&#1093; &#1082;&#1080;&#1086;&#1089;&#1082;&#1086;&#1074;",
	"myzoo_shake_title": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1074;&#1089;&#1077; &#1076;&#1077;&#1088;&#1077;&#1074;&#1100;&#1103;, &#1082;&#1091;&#1089;&#1090;&#1099;, &#1089;&#1082;&#1091;&#1083;&#1100;&#1087;&#1090;&#1091;&#1088;&#1099;, &#1075;&#1088;&#1080;&#1073;&#1099;, &#1096;&#1086;&#1091;, &#1088;&#1086;&#1079;&#1086;&#1074;&#1099;&#1081; &#1089;&#1072;&#1076; &#1080; &#1090;.&#1076;.",
	"myzoo_shake_shake_all": "&#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1085;&#1072; &#1074;&#1089;&#1077;&#1093; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;&#1093;",
	"myzoo_move_title": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1077;&#1089;&#1090;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1099; &#1089; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072; &#1074; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077;",
	"myzoo_fill_title": "&#1047;&#1072;&#1087;&#1086;&#1083;&#1085;&#1080;&#1090;&#1100; &#1090;&#1077;&#1087;&#1083;&#1080;&#1094;&#1091; &#1080;&#1079; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1072;",
	"myzoo_auto_title": "&#1040;&#1074;&#1090;&#1086;&#1084;&#1072;&#1090;&#1080;&#1095;&#1077;&#1089;&#1082;&#1080;",
	"myzoo_auto_intro": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100; XP &#1089;&#1086; &#1074;&#1089;&#1077;&#1093; &#1074;&#1086;&#1088;&#1086;&#1090;, &#1089;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100; &#1076;&#1077;&#1085;&#1100;&#1075;&#1080; &#1080;&#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1077;, &#1087;&#1086;&#1082;&#1086;&#1088;&#1084;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077;&#1093; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;, &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1103; &#1090;&#1077;&#1082;&#1091;&#1097;&#1080;&#1077; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080;, &#1087;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1074;&#1089;&#1077; &#1076;&#1077;&#1088;&#1077;&#1074;&#1100;&#1103;, &#1087;&#1086;&#1089;&#1077;&#1090;&#1080;&#1090;&#1100; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1080; &#1074;&#1089;&#1077;&#1093; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;...",
	"myzoo_lists_title": "&#1057;&#1087;&#1080;&#1089;&#1082;&#1080;",
	"myzoo_lists_intro": "&#1057;&#1086;&#1079;&#1076;&#1072;&#1090;&#1100; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1080;&#1084;&#1077;&#1102;&#1097;&#1080;&#1093;&#1089;&#1103;/&#1086;&#1090;&#1089;&#1091;&#1090;&#1089;&#1090;&#1074;&#1091;&#1102;&#1097;&#1080;&#1093; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;...",
	"myzoo_breeding_title": "&#1056;&#1072;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1077;",
	"myzoo_breeding_intro": "&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1088;&#1072;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1077;&#1084;",
	// Items
	"shop_title": "&#1058;&#1086;&#1074;&#1072;&#1088;&#1099;",
	"shop_intro": "&#1069;&#1090;&#1086; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1074;&#1089;&#1077;&#1093; &#1080;&#1079;&#1074;&#1077;&#1089;&#1090;&#1085;&#1099;&#1093; &#1090;&#1086;&#1074;&#1072;&#1088;&#1086;&#1074; &#1074; &#1080;&#1075;&#1088;&#1077; Zoo World. &#1061;&#1086;&#1090;&#1103; &#1074;&#1089;&#1077; &#1086;&#1085;&#1080; &#1080;&#1084;&#1077;&#1102;&#1090; &#1089;&#1089;&#1099;&#1083;&#1082;&#1080; &#1085;&#1072; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1091;, &#1084;&#1085;&#1086;&#1075;&#1080;&#1077; &#1080;&#1079; &#1085;&#1080;&#1093; &#1085;&#1077;&#1083;&#1100;&#1079;&#1103; &#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1087;&#1086; &#1088;&#1103;&#1076;&#1091; &#1087;&#1088;&#1080;&#1095;&#1080;&#1085; (&#1077;&#1097;&#1077; &#1085;&#1077; &#1088;&#1072;&#1079;&#1073;&#1083;&#1086;&#1082;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1099;, &#1085;&#1077; &#1074;&#1099;&#1087;&#1091;&#1097;&#1077;&#1085;&#1099; &#1074; &#1089;&#1074;&#1077;&#1090;, &#1080;&#1079;&#1098;&#1103;&#1090;&#1099; &#1080;&#1079; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1080; &#1080; &#1090;.&#1087;.). <em>&#1048;&#1084;&#1077;&#1081;&#1090;&#1077; &#1074; &#1074;&#1080;&#1076;&#1091;, &#1095;&#1090;&#1086;, &#1077;&#1089;&#1083;&#1080; &#1074;&#1072;&#1096; &#1072;&#1082;&#1082;&#1072;&#1091;&#1085;&#1090; &#1091;&#1078;&#1077; &#1089;&#1074;&#1103;&#1079;&#1072;&#1085; &#1089; Pay Pal, &#1087;&#1086;&#1089;&#1082;&#1086;&#1083;&#1100;&#1082;&#1091; &#1088;&#1072;&#1085;&#1100;&#1096;&#1077; &#1074;&#1099; &#1091;&#1078;&#1077; &#1095;&#1090;&#1086;-&#1090;&#1086; &#1087;&#1086;&#1082;&#1091;&#1087;&#1072;&#1083;&#1080; &#1079;&#1072; &#1088;&#1077;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1076;&#1077;&#1085;&#1100;&#1075;&#1080;, &#1089; &#1074;&#1072;&#1089; &#1089;&#1085;&#1080;&#1084;&#1091;&#1090; &#1086;&#1087;&#1083;&#1072;&#1090;&#1091; &#1073;&#1077;&#1079; &#1087;&#1088;&#1077;&#1076;&#1091;&#1087;&#1088;&#1077;&#1078;&#1076;&#1077;&#1085;&#1080;&#1103;.</em>",
	"shop_loading": "&#1041;&#1086;&#1083;&#1100;&#1096;&#1086;&#1081; &#1052;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1042;&#1089;&#1077;&#1075;&#1086; &#1053;&#1072; &#1057;&#1074;&#1077;&#1090;&#1077; &#1079;&#1072;&#1075;&#1088;&#1091;&#1078;&#1072;&#1077;&#1090;&#1089;&#1103;...",
	"shop_buy_id": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1090;&#1086;&#1074;&#1072;&#1088; &#1087;&#1086; ID",
	"shop_buy_id_intro": "(&#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1100;, &#1082;&#1086;&#1075;&#1076;&#1072; &#1074;&#1072;&#1084; &#1080;&#1079;&#1074;&#1077;&#1089;&#1090;&#1077;&#1085; ID, &#1085;&#1086; &#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1087;&#1086;&#1082;&#1072; &#1085;&#1077; &#1086;&#1073;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;).",
	"shop_upgrade_id": "&#1091;&#1083;&#1091;&#1095;&#1096;&#1080;&#1090;&#1100; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1077; &#1087;&#1086; ID",
	"shop_upgrade_id_intro": "(&#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1100;, &#1082;&#1086;&#1075;&#1076;&#1072; &#1074;&#1072;&#1084; &#1080;&#1079;&#1074;&#1077;&#1089;&#1090;&#1077;&#1085; ID, &#1085;&#1086; &#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1087;&#1086;&#1082;&#1072; &#1085;&#1077; &#1086;&#1073;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;).",
	"shop_repeat_buy_id": "&#1087;&#1086;&#1074;&#1090;&#1086;&#1088;&#1080;&#1090;&#1100; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1091; &#1090;&#1086;&#1074;&#1072;&#1088;&#1072; &#1087;&#1086; ID",
	"shop_repeat_buy_id_intro": "(&#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1100; &#1076;&#1083;&#1103; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1080; &#1090;&#1086;&#1074;&#1072;&#1088;&#1072; &#1087;&#1086; ID &#1082;&#1072;&#1078;&#1076;&#1099;&#1077; 10 &#1089;&#1077;&#1082;&#1091;&#1085;&#1076;, &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1103; &#1087;&#1088;&#1077;&#1076;&#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1099; &#1076;&#1083;&#1103; &#1090;&#1077;&#1093;, &#1082;&#1090;&#1086; &#1087;&#1086;&#1089;&#1090;&#1086;&#1103;&#1085;&#1085;&#1086; &#1076;&#1072;&#1088;&#1080;&#1090; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093; &#1073;&#1086;&#1083;&#1077;&#1077; &#1074;&#1099;&#1089;&#1086;&#1082;&#1086;&#1075;&#1086; &#1091;&#1088;&#1086;&#1074;&#1085;&#1103;).",
	"shop_buy_fbc_intro": "&#1050;&#1091;&#1087;&#1080;&#1090;&#1100; &#1079;&#1072; FBC",
	"shop_buy_by_wlf_item_id": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1087;&#1086; wlfItemId",
	"shop_paypal_howto": "&#1050;&#1072;&#1082; &#1054;&#1058;&#1052;&#1045;&#1053;&#1048;&#1058;&#1068; &#1074;&#1072;&#1096;&#1077; \"&#1057;&#1086;&#1075;&#1083;&#1072;&#1096;&#1077;&#1085;&#1080;&#1077; &#1054;&#1076;&#1085;&#1086;&#1075;&#1086; &#1050;&#1083;&#1080;&#1082;&#1072;\" &#1084;&#1077;&#1078;&#1076;&#1091; RockYou, Inc &#1080; PayPal &#1087;&#1086;&#1089;&#1083;&#1077; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1080; WLP &#1080;&#1083;&#1080; &#1091;&#1083;&#1100;&#1090;&#1088;&#1072;-&#1088;&#1077;&#1076;&#1082;&#1086;&#1075;&#1086; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1075;&#1086;.",
	// Spawning
	"gifts_title": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;",
	"gifts_gifts_title": "&#1055;&#1086;&#1076;&#1072;&#1088;&#1082;&#1080;",
	"gifts_level_title": "&#1055;&#1077;&#1088;&#1077;&#1093;&#1086;&#1076; &#1085;&#1072; &#1073;&#1086;&#1083;&#1077;&#1077; &#1074;&#1099;&#1089;&#1086;&#1082;&#1080;&#1081; &#1091;&#1088;&#1086;&#1074;&#1077;&#1085;&#1100;",
	"gifts_level_intro": "&#1074;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1078;&#1077;&#1083;&#1072;&#1077;&#1084;&#1099;&#1081; &#1091;&#1088;&#1086;&#1074;&#1077;&#1085;&#1100;",
	"gifts_daily_title": "&#1055;&#1086;&#1076;&#1077;&#1083;&#1080;&#1090;&#1100;&#1089;&#1103; &#1077;&#1078;&#1077;&#1076;&#1085;&#1077;&#1074;&#1085;&#1099;&#1084; &#1087;&#1086;&#1076;&#1072;&#1088;&#1082;&#1086;&#1084;",
	"gifts_trophy_title": "&#1055;&#1088;&#1080;&#1079;",
	"gifts_juice_title": "&#1057;&#1086;&#1082;",
	"gifts_flowerpots_title": "&#1062;&#1074;&#1077;&#1090;&#1086;&#1095;&#1085;&#1099;&#1077; &#1075;&#1086;&#1088;&#1096;&#1082;&#1080;",
	"gifts_halloween_title": "&#1061;&#1101;&#1083;&#1083;&#1086;&#1091;&#1080;&#1085;",
	"gifts_halloween_ask_sewing": "&#1055;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1100; &#1087;&#1086;&#1084;&#1086;&#1097;&#1100; &#1087;&#1088;&#1080; &#1089;&#1096;&#1080;&#1074;&#1072;&#1085;&#1080;&#1080;",
	"gifts_fieldtrip_title": "&#1069;&#1082;&#1089;&#1082;&#1091;&#1088;&#1089;&#1080;&#1103;",
	"gifts_fieldtrip_anything_by_id": "&#1095;&#1090;&#1086;-&#1083;&#1080;&#1073;&#1086; &#1087;&#1086; ID",
	"gifts_treattrophy_title": "&#1055;&#1088;&#1080;&#1079; &#1079;&#1072; &#1091;&#1075;&#1086;&#1097;&#1077;&#1085;&#1080;&#1077;",
	"gifts_buildables_title": "&#1057;&#1090;&#1088;&#1086;&#1080;&#1090;&#1077;&#1083;&#1100;&#1089;&#1090;&#1074;&#1086;",
	"gifts_missions_title": "&#1052;&#1080;&#1089;&#1089;&#1080;&#1080;",
	"gifts_missions_start": "&#1085;&#1072;&#1095;&#1072;&#1090;&#1100;",
	"gifts_missions_republish": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1089;&#1085;&#1086;&#1074;&#1072;",
	"gifts_missions_complete": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1080;&#1077;",
	"gifts_rosegarden_title": "&#1056;&#1086;&#1079;&#1086;&#1074;&#1099;&#1081; &#1089;&#1072;&#1076;",
	"gifts_rosegarden_share_upgrade": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1080;&#1079;&#1072;&#1094;&#1080;&#1102; &#1089;&#1072;&#1076;&#1072; &#1085;&#1072; &#1089;&#1090;&#1077;&#1085;&#1077;",
	"gifts_rosegarden_ask_rose": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1100; &#1088;&#1086;&#1079;&#1099; &#1085;&#1072; &#1089;&#1090;&#1077;&#1085;&#1077;",
	"gifts_rosegarden_share_rose": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1088;&#1086;&#1079;&#1099; &#1085;&#1072; &#1089;&#1090;&#1077;&#1085;&#1077;",
	"gifts_goldenegg_title": "&#1047;&#1086;&#1083;&#1086;&#1090;&#1086;&#1077; &#1103;&#1081;&#1094;&#1086;",
	"gifts_icecream_title": "&#1052;&#1086;&#1088;&#1086;&#1078;&#1077;&#1085;&#1086;&#1077;",
	"gifts_greenhouse_title": "&#1058;&#1077;&#1087;&#1083;&#1080;&#1094;&#1072;",
	"gifts_megaspawn_title": "&#1052;&#1077;&#1075;&#1072;-&#1090;&#1080;&#1088;&#1072;&#1078;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;",
	// Visiting
	"visiting_resume_intro": "(&#1074;&#1086;&#1079;&#1086;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100; &#1089; &#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1086;&#1075;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072;, &#1077;&#1089;&#1083;&#1080; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089;&#1089; &#1087;&#1088;&#1077;&#1088;&#1074;&#1072;&#1083;&#1089;&#1103;)",
	"visiting_go_outside": "&#1048;&#1084;&#1077;&#1081;&#1090;&#1077; &#1074; &#1074;&#1080;&#1076;&#1091;, &#1095;&#1090;&#1086;, &#1074; &#1079;&#1072;&#1074;&#1080;&#1089;&#1080;&#1084;&#1086;&#1089;&#1090;&#1080; &#1086;&#1090; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1072; &#1080;&#1084;&#1077;&#1102;&#1097;&#1080;&#1093;&#1089;&#1103; &#1091; &#1074;&#1072;&#1089; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;, &#1101;&#1090;&#1086; &#1084;&#1086;&#1078;&#1077;&#1090; &#1079;&#1072;&#1085;&#1103;&#1090;&#1100; &#1076;&#1086;&#1083;&#1075;&#1086;&#1077; &#1074;&#1088;&#1077;&#1084;&#1103;! &#1052;&#1086;&#1078;&#1077;&#1090;&#1077; &#1087;&#1086;&#1082;&#1072; &#1087;&#1086;&#1081;&#1090;&#1080; &#1080; &#1087;&#1086;&#1080;&#1075;&#1088;&#1072;&#1090;&#1100; :)",
	"visiting_load_friends": "&#1047;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;...",
	// Advanced
	"advanced_title": "&#1055;&#1088;&#1086;&#1076;&#1074;&#1080;&#1085;&#1091;&#1090;&#1099;&#1084;",
	"advanced_intro": "&#1045;&#1089;&#1083;&#1080; &#1074;&#1099; &#1085;&#1077; &#1091;&#1074;&#1077;&#1088;&#1077;&#1085;&#1099;, &#1095;&#1090;&#1086; &#1101;&#1090;&#1086; &#1090;&#1072;&#1082;&#1086;&#1077;, &#1090;&#1086; &#1101;&#1090;&#1086; &#1085;&#1077; &#1076;&#1083;&#1103; &#1074;&#1072;&#1089;!",
	"advanced_detailedlogging_title": "&#1044;&#1077;&#1090;&#1072;&#1083;&#1080;&#1079;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1085;&#1072;&#1103; &#1088;&#1077;&#1075;&#1080;&#1089;&#1090;&#1088;&#1072;&#1094;&#1080;&#1103;",
	"advanced_friends_title": "&#1044;&#1088;&#1091;&#1079;&#1100;&#1103;",
	"advanced_zoo_title": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoodisplay_title": "&#1056;&#1072;&#1079;&#1084;&#1077;&#1088; &#1101;&#1082;&#1088;&#1072;&#1085;&#1072; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072;",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "&#1054;&#1095;&#1077;&#1088;&#1077;&#1076;&#1085;&#1086;&#1089;&#1090;&#1100; &#1079;&#1072;&#1076;&#1072;&#1095;",
	"advanced_play_title": "&#1048;&#1075;&#1088;&#1072;&#1090;&#1100;",
	"advanced_alternateaccess_title": "&#1040;&#1083;&#1100;&#1090;&#1077;&#1088;&#1085;&#1072;&#1090;&#1080;&#1074;&#1085;&#1099;&#1081; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087;",
	"advanced_tryto_title": "&#1055;&#1086;&#1087;&#1099;&#1090;&#1072;&#1090;&#1100;&#1089;&#1103;",
	"advanced_goldeninviter_title": "&#1047;&#1086;&#1083;&#1086;&#1090;&#1086;&#1077; &#1087;&#1088;&#1080;&#1075;&#1083;&#1072;&#1096;&#1077;&#1085;&#1080;&#1077;",
	"advanced_punkd_title": "&#1056;&#1086;&#1079;&#1099;&#1075;&#1088;&#1099;&#1096;",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "&#1079;&#1072;&#1094;&#1077;&#1085;&#1080;&#1090;&#1100;",
	"advanced_javacript_ajaxdelay": "&#1047;&#1072;&#1076;&#1077;&#1088;&#1078;&#1082;&#1072; AJAX (&#1074; &#1084;&#1080;&#1083;&#1083;&#1080;&#1089;&#1077;&#1082;&#1091;&#1085;&#1076;&#1072;&#1093;)",
	// generic
	"show": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100;",
	"hide": "&#1089;&#1082;&#1088;&#1099;&#1090;&#1100;",
	"shop": "&#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085;",
	"reload": "&#1087;&#1077;&#1088;&#1077;&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100;",
	"island": "&#1086;&#1089;&#1090;&#1088;&#1086;&#1074;",
	"islands": "&#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;",
	"minute": "&#1084;&#1080;&#1085;&#1091;&#1090;&#1072;",
	"minutes": "&#1084;&#1080;&#1085;&#1091;&#1090;&#1099;",
	"hour": "&#1095;&#1072;&#1089;",
	"hours": "&#1095;&#1072;&#1089;&#1086;&#1074;",
	"day": "&#1076;&#1077;&#1085;&#1100;",
	"days": "&#1076;&#1085;&#1080;",
	"once": "&#1086;&#1076;&#1085;&#1086;&#1082;&#1088;&#1072;&#1090;&#1085;&#1086;",
	"repeat": "&#1084;&#1085;&#1086;&#1075;&#1086;&#1082;&#1088;&#1072;&#1090;&#1085;&#1086;",
	"to_friend": "&#1076;&#1088;&#1091;&#1075;&#1091;",
	"specify_user_id": "ID &#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1086;&#1075;&#1086; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1103;",
	"specific_user": "&#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1099;&#1081; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1100;",
	"specify_user_id_prompt": "&#1059;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; userId:\n(&#1101;&#1090;&#1086;&#1090; ID &#1084;&#1086;&#1078;&#1085;&#1086; &#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1087;&#1088;&#1086;&#1092;&#1080;&#1083;&#1077; &#1101;&#1090;&#1086;&#1075;&#1086; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1103;)",
	"specify_animal_id": "&#1091;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; ID &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1075;&#1086;",
	"specify_animal_id_prompt": "&#1059;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; animalId:\n(&#1101;&#1090;&#1086;&#1090; ID &#1084;&#1086;&#1078;&#1085;&#1086; &#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1089;&#1087;&#1080;&#1089;&#1082;&#1077; &#1090;&#1086;&#1074;&#1072;&#1088;&#1086;&#1074;)",
	"send_to_feed": "&#1086;&#1090;&#1087;&#1088;&#1072;&#1074;&#1080;&#1090;&#1100; &#1074; &#1083;&#1077;&#1085;&#1090;&#1091;",
	"ask_on_feed": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1100; &#1074; &#1083;&#1077;&#1085;&#1090;&#1077;",
	"ask_for": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1100;",
	"share": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100;",
	"share_roses": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; '&#1088;&#1086;&#1079;&#1099;'",
	"post": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100;",
	"share_completion": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1080;&#1077;",
	"completed": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1080;&#1077;",
	"help": "&#1087;&#1086;&#1084;&#1086;&#1097;&#1100; &#1089;",
	"easy": "&#1083;&#1077;&#1075;&#1082;&#1080;&#1081;",
	"medium": "&#1089;&#1088;&#1077;&#1076;&#1085;&#1080;&#1081;",
	"hard": "&#1089;&#1083;&#1086;&#1078;&#1085;&#1099;&#1081;",
	"invite": "&#1087;&#1088;&#1080;&#1075;&#1083;&#1072;&#1089;&#1080;&#1090;&#1100;",
	"hatched": "&#1074;&#1099;&#1083;&#1091;&#1087;&#1080;&#1083;&#1089;&#1103;",
	"send_as_request": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1100; &#1082;&#1072;&#1082; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;",
	"ask_as_request": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1100; &#1082;&#1072;&#1082; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;",
	"update_button": "&#1082;&#1085;&#1086;&#1087;&#1082;&#1072; '&#1054;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;'",
	"button_go": "&#1074;&#1099;&#1087;&#1086;&#1083;&#1085;&#1080;&#1090;&#1100;",
	"start": "&#1085;&#1072;&#1095;&#1072;&#1090;&#1100;",
	"republish": "&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1084;&#1085;&#1086;&#1075;&#1086;&#1082;&#1088;&#1072;&#1090;&#1085;&#1086;",
	"complete": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1080;&#1077;",
	// 2010/12/08
	// generic
	"post_trade": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1086;&#1073;&#1084;&#1077;&#1085;",
	"update": "&#1086;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;",
	"loaded": "&#1079;&#1072;&#1075;&#1088;&#1091;&#1078;&#1077;&#1085;&#1086;",
	"main_zooremoved": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1089;&#1074;&#1077;&#1088;&#1085;&#1091;&#1090;",
	"main_clicktogetback": "&#1050;&#1083;&#1080;&#1082;&#1085;&#1091;&#1090;&#1100;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1088;&#1072;&#1079;&#1074;&#1077;&#1088;&#1085;&#1091;&#1090;&#1100;",
	"executing": "&#1074;&#1099;&#1087;&#1086;&#1083;&#1085;&#1103;&#1077;&#1090;&#1089;&#1103;",
	"specify_item_id_prompt": "&#1059;&#1082;&#1072;&#1078;&#1080;&#1090;&#1077; itemId:\n(&#1101;&#1090;&#1086;&#1090; ID &#1084;&#1086;&#1078;&#1085;&#1086; &#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1089;&#1087;&#1080;&#1089;&#1082;&#1077; &#1090;&#1086;&#1074;&#1072;&#1088;&#1086;&#1074;)",
	"close": "&#1079;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100;",
	"buy": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1100;",
	"gift": "&#1087;&#1086;&#1076;&#1072;&#1088;&#1080;&#1090;&#1100;",
	"breed": "&#1088;&#1072;&#1079;&#1074;&#1086;&#1076;&#1080;&#1090;&#1100;",
	"upgrade": "&#1086;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;",
	"shareonwall": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1085;&#1072; &#1089;&#1090;&#1077;&#1085;&#1077;",
	"refresh": "&#1086;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;",
	"project": "&#1055;&#1088;&#1086;&#1077;&#1082;&#1090;",
	// Items
	"shop_flyout_categories": "&#1050;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;",
	"shop_flyout_rarity": "&#1056;&#1077;&#1076;&#1082;&#1086;&#1089;&#1090;&#1100;",
	"shop_flyout_breedingtime": "&#1042;&#1088;&#1077;&#1084;&#1103; &#1088;&#1072;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1103;",
	"shop_flyout_purchasefor": "&#1050;&#1091;&#1087;&#1080;&#1090;&#1100; &#1079;&#1072;",
	"shop_flyout_actualdollars": "&#1085;&#1072;&#1089;&#1090;&#1086;&#1103;&#1097;&#1080;&#1077; &#1076;&#1086;&#1083;&#1083;&#1072;&#1088;&#1099;",
	"shop_flyout_fbc": "Facebook Credits",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "&#1048;&#1079;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1080;&#1103;",
	"shop_flyout_images_large": "&#1073;&#1086;&#1083;&#1100;&#1096;&#1086;&#1077;",
	"shop_flyout_images_small": "&#1084;&#1072;&#1083;&#1077;&#1085;&#1100;&#1082;&#1086;&#1077;",
	"shop_flyout_images_baby": "&#1076;&#1077;&#1090;&#1077;&#1085;&#1099;&#1096;",
	"shop_flyout_actions_title": "&#1044;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1103;",
	"shop_flyout_actions_buylots_prompt": "&#1050;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; &#1087;&#1086;&#1082;&#1091;&#1087;&#1072;&#1077;&#1084;&#1099;&#1093; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1086;&#1074;? (&#1076;&#1083;&#1103; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093; &#1076;&#1086;&#1083;&#1078;&#1085;&#1086; &#1073;&#1099;&#1090;&#1100; &#1084;&#1077;&#1085;&#1100;&#1096;&#1077;, &#1095;&#1077;&#1084; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;, &#1090;&#1088;&#1077;&#1073;&#1091;&#1102;&#1097;&#1077;&#1077; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1080;&#1079;&#1072;&#1094;&#1080;&#1080;, &#1076;&#1083;&#1103; &#1074;&#1089;&#1077;&#1075;&#1086; &#1086;&#1089;&#1090;&#1072;&#1083;&#1100;&#1085;&#1086;&#1075;&#1086; - &#1084;&#1072;&#1082;&#1089;&#1080;&#1084;&#1091;&#1084; 999)",
	"shop_flyout_actions_buylots": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1094;&#1077;&#1083;&#1091;&#1102; &#1087;&#1072;&#1088;&#1090;&#1080;&#1102;",
	"shop_flyout_actions_postadopt": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; \"&#1091;&#1089;&#1099;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077;\"",
	"shop_flyout_actions_customadopt": "\"&#1091;&#1089;&#1099;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;&#1091;",
	"shop_flyout_actions_thanksgivingwlpupgrade": "&#1087;&#1086;&#1087;&#1099;&#1090;&#1072;&#1090;&#1100;&#1089;&#1103; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1080;&#1079;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1076;&#1086; &#1091;&#1083;&#1100;&#1090;&#1088;&#1072;-&#1088;&#1077;&#1076;&#1082;&#1086;&#1075;&#1086; &#1079;&#1072; 1 WLP",
	"shop_flyout_actions_findinzoo": "&#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1077;",
	"shop_flyout_actions_upgradeforwrenches": "&#1086;&#1073;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100; &#1079;&#1072; &#1075;&#1072;&#1077;&#1095;&#1085;&#1099;&#1077; &#1082;&#1083;&#1102;&#1095;&#1080;",
	"shop_flyout_actions_cantbuy": "&#1085;&#1077;&#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1086; &#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1101;&#1090;&#1080;...",
	"shop_flyout_actions_trytobuy": "&#1055;&#1086;&#1087;&#1099;&#1090;&#1072;&#1090;&#1100;&#1089;&#1103; &#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077; &#1088;&#1072;&#1074;&#1085;&#1086;?",
	"shop_flyout_actions_numitemstobuy": "&#1050;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; &#1087;&#1086;&#1082;&#1091;&#1087;&#1072;&#1077;&#1084;&#1099;&#1093; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1086;&#1074;? (&#1076;&#1083;&#1103; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093; &#1076;&#1086;&#1083;&#1078;&#1085;&#1086; &#1073;&#1099;&#1090;&#1100; &#1084;&#1077;&#1085;&#1100;&#1096;&#1077;, &#1095;&#1077;&#1084; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;, &#1090;&#1088;&#1077;&#1073;&#1091;&#1102;&#1097;&#1077;&#1077; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1080;&#1079;&#1072;&#1094;&#1080;&#1080;, &#1076;&#1083;&#1103; &#1074;&#1089;&#1077;&#1075;&#1086; &#1086;&#1089;&#1090;&#1072;&#1083;&#1100;&#1085;&#1086;&#1075;&#1086; - &#1084;&#1072;&#1082;&#1089;&#1080;&#1084;&#1091;&#1084; 999)",
	"shop_flyout_actions_movealltostorage": "&#1087;&#1077;&#1088;&#1077;&#1084;&#1077;&#1089;&#1090;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077; &#1074; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077;",
	"shop_flyout_actions_moneywarning": "&#1055;&#1056;&#1045;&#1044;&#1059;&#1055;&#1056;&#1045;&#1046;&#1044;&#1045;&#1053;&#1048;&#1045;: &#1101;&#1090;&#1086;&#1090; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090; &#1089;&#1090;&#1086;&#1080;&#1090; &#1076;&#1077;&#1085;&#1077;&#1075;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1089; &#1074;&#1072;&#1089; &#1084;&#1086;&#1075;&#1091;&#1090; &#1089;&#1085;&#1103;&#1090;&#1100; &#1073;&#1077;&#1079; &#1087;&#1088;&#1077;&#1076;&#1091;&#1087;&#1088;&#1077;&#1078;&#1076;&#1077;&#1085;&#1080;&#1103;!",
	"shop_flyout_actions_facts": "&#1060;&#1072;&#1082;&#1090;&#1099;",
	"shop_flyout_actions_training": "&#1044;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1072;",
	// advanced
	"advanced_friends_loadlist": "&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082;",
	"advanced_friends_deduplicatelist": "&#1086;&#1090;&#1084;&#1077;&#1085;&#1080;&#1090;&#1100; &#1076;&#1091;&#1073;&#1083;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077; &#1089;&#1087;&#1080;&#1089;&#1082;&#1072;",
	"advanced_zoo_loadzoo": "&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100; &#1074;&#1072;&#1096; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_loadanyzoo": "&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100; &#1082;&#1072;&#1082;&#1086;&#1081;-&#1083;&#1080;&#1073;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_showzoo": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_specifyisland": "&#1059;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; ID &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072; (0-10):",
	"advanced_zoo_loadyourisland": "&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1100; &#1074;&#1072;&#1096; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;",
	"advanced_zoodisplay_normal": "&#1086;&#1073;&#1099;&#1095;&#1085;&#1099;&#1081;",
	"advanced_zoodisplay_big": "&#1073;&#1086;&#1083;&#1100;&#1096;&#1086;&#1081;",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100;",
	"advanced_cookies_delete": "&#1091;&#1076;&#1072;&#1083;&#1080;&#1090;&#1100;",
	"advanced_cookies_set": "&#1091;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;",
	"advanced_workqueue_start": "&#1085;&#1072;&#1095;&#1072;&#1090;&#1100;",
	"advanced_workqueue_stop": "&#1086;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1100;",
	"advanced_workqueue_itemsinthequeue": "&#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1099; &#1074; &#1086;&#1095;&#1077;&#1088;&#1077;&#1076;&#1080;.",
	"advanced_workqueue_showsize": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; &#1088;&#1072;&#1079;&#1084;&#1077;&#1088;",
	"advanced_workqueue_clear": "&#1086;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1100;",
	"advanced_alternateaccess_unframe": "&#1089;&#1085;&#1103;&#1090;&#1100; &#1088;&#1072;&#1084;&#1082;&#1091; &#1089; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072;",
	"advanced_alternateaccess_workaround": "&#1086;&#1073;&#1093;&#1086;&#1076;&#1085;&#1086;&#1081; &#1087;&#1091;&#1090;&#1100; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; (&#1086;&#1073;&#1083;&#1077;&#1075;&#1095;&#1077;&#1085;&#1085;&#1072;&#1103; &#1074;&#1077;&#1088;&#1089;&#1080;&#1103;)",
	"advanced_tryto_forceadopt": "&#1084;&#1072;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1085;&#1086;&#1077; \"&#1091;&#1089;&#1099;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077;\"",
	"advanced_tryto_payday": "&#1076;&#1077;&#1085;&#1100; &#1074;&#1099;&#1087;&#1083;&#1072;&#1090;",
	"advanced_tryto_unlock11thisland": "&#1088;&#1072;&#1079;&#1073;&#1083;&#1086;&#1082;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; 11-&#1081; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;",
	// megaspawn flyout
	"megaspawn_flyout_title": "&#1052;&#1077;&#1075;&#1072;-&#1090;&#1080;&#1088;&#1072;&#1078;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;",
	"megaspawn_flyout_projects": "&#1055;&#1088;&#1086;&#1077;&#1082;&#1090;&#1099;",
	"megaspawn_flyout_multiplenotes": "&#1052;&#1085;&#1086;&#1078;&#1077;&#1089;&#1090;&#1074;&#1077;&#1085;&#1085;&#1099;&#1077; &#1079;&#1072;&#1084;&#1077;&#1090;&#1082;&#1080;",
	// animal list flyout
	"animallist_flyout_title": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;",
	"animallist_flyout_intro": "&#1057;&#1082;&#1086;&#1087;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1080; &#1074;&#1089;&#1090;&#1072;&#1074;&#1080;&#1090;&#1100; &#1101;&#1090;&#1086;&#1090; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1083;&#1103; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103;",
	// breeding flyout
	"breeding_flyout_title": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1083;&#1103; &#1088;&#1072;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1103;",
	"breeding_flyout_breeding": "&#1088;&#1072;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1077;",
	"breeding_flyout_innest": "&#1074; &#1075;&#1085;&#1077;&#1079;&#1076;&#1077;",
	"breeding_flyout_nomorenests": "&#1048;&#1079;&#1074;&#1080;&#1085;&#1080;&#1090;&#1077;, &#1089;&#1074;&#1086;&#1073;&#1086;&#1076;&#1085;&#1099;&#1093; &#1075;&#1085;&#1077;&#1079;&#1076; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077; &#1085;&#1077;&#1090;!",
	"breeding_flyout_nobabies": "&#1044;&#1077;&#1090;&#1077;&#1085;&#1099;&#1096;&#1077;&#1081; &#1074; &#1075;&#1085;&#1077;&#1079;&#1076;&#1072;&#1093; &#1085;&#1077;&#1090;.",
	"breeding_flyout_heal": "&#1074;&#1099;&#1083;&#1077;&#1095;&#1080;&#1090;&#1100;",
	"breeding_flyout_feed": "&#1087;&#1086;&#1082;&#1086;&#1088;&#1084;&#1080;&#1090;&#1100;",
	"breeding_flyout_notready": "&#1087;&#1086;&#1082;&#1072; &#1085;&#1077; &#1075;&#1086;&#1090;&#1086;&#1074;",
	"breeding_flyout_upgradeandmove": "&#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1080;&#1079;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1080; &#1087;&#1077;&#1088;&#1077;&#1084;&#1077;&#1089;&#1090;&#1080;&#1090;&#1100; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"breeding_flyout_move": "&#1087;&#1077;&#1088;&#1077;&#1084;&#1077;&#1089;&#1090;&#1080;&#1090;&#1100; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	// custom adopt flyout
	"customadopt_flyout_title": "\"&#1059;&#1089;&#1099;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;&#1091;",
	"customadopt_flyout_name": "&#1080;&#1084;&#1103;",
	"customadopt_flyout_image": "&#1080;&#1079;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1080;&#1077;",
	"customadopt_flyout_title": "&#1079;&#1072;&#1075;&#1086;&#1083;&#1086;&#1074;&#1086;&#1082;",
	"customadopt_flyout_bodytext": "&#1086;&#1089;&#1085;&#1086;&#1074;&#1085;&#1086;&#1081; &#1090;&#1077;&#1082;&#1089;&#1090;",
	"customadopt_flyout_button": "&#1082;&#1085;&#1086;&#1087;&#1082;&#1072;",
	"customadopt_flyout_postbutton": "&#1054;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; \"&#1091;&#1089;&#1099;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;&#1091;",
	"customadopt_flyout_editingnotadvised": "&#1056;&#1077;&#1076;&#1072;&#1082;&#1090;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077; &#1085;&#1080;&#1078;&#1077;&#1087;&#1077;&#1088;&#1077;&#1095;&#1080;&#1089;&#1083;&#1077;&#1085;&#1085;&#1099;&#1093; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1086;&#1074; &#1085;&#1077; &#1088;&#1077;&#1082;&#1086;&#1084;&#1077;&#1085;&#1076;&#1091;&#1077;&#1090;&#1089;&#1103;!",
	// friend list
	"friendlist_addzoomate": "&#1076;&#1086;&#1073;&#1072;&#1074;&#1080;&#1090;&#1100; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1072;",
	"friendlist_visitzoo": "&#1087;&#1086;&#1089;&#1077;&#1090;&#1080;&#1090;&#1100; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"friendlist_viewprofile": "&#1087;&#1086;&#1089;&#1084;&#1086;&#1090;&#1088;&#1077;&#1090;&#1100; &#1087;&#1088;&#1086;&#1092;&#1080;&#1083;&#1100;",
	"friendlist_posttreasurechest": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1089;&#1091;&#1085;&#1076;&#1091;&#1082; &#1089; &#1089;&#1086;&#1082;&#1088;&#1086;&#1074;&#1080;&#1097;&#1072;&#1084;&#1080;",
	"friendlist_postmysterychest": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1090;&#1072;&#1080;&#1085;&#1089;&#1090;&#1074;&#1077;&#1085;&#1085;&#1099;&#1081; &#1083;&#1072;&#1088;&#1077;&#1094;",
	"friendlist_posthungryanimals": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1080;&#1082;&#1086;&#1074;&#1072;&#1090;&#1100; &#1075;&#1086;&#1083;&#1086;&#1076;&#1085;&#1099;&#1093; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;",
	"friendlist_sendvitamin": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1100; &#1074;&#1080;&#1090;&#1072;&#1084;&#1080;&#1085;",
	"friendlist_sendgoldgreenhouse": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1100; &#1079;&#1086;&#1083;&#1086;&#1090;&#1091;&#1102; &#1090;&#1077;&#1087;&#1083;&#1080;&#1094;&#1091;",
	// work queue
	"workqueue_starting": "&#1053;&#1072;&#1095;&#1072;&#1083;&#1086; &#1086;&#1095;&#1077;&#1088;&#1077;&#1076;&#1080;",
	"workqueue_remaining": "&#1086;&#1089;&#1090;&#1072;&#1077;&#1090;&#1089;&#1103;",
	"workqueue_alreadystarted": "&#1054;&#1095;&#1077;&#1088;&#1077;&#1076;&#1100; &#1091;&#1078;&#1077; &#1085;&#1072;&#1095;&#1072;&#1090;&#1072;",
	"workqueue_stopped": "&#1054;&#1095;&#1077;&#1088;&#1077;&#1076;&#1100; &#1086;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1072;",
	"workqueue_stopping": "&#1054;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1082;&#1072; &#1086;&#1095;&#1077;&#1088;&#1077;&#1076;&#1080;",
	"workqueue_alreadstopped": "&#1054;&#1095;&#1077;&#1088;&#1077;&#1076;&#1100; &#1091;&#1078;&#1077; &#1086;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1072;",
	// 2010/12/09
	"animallist_flyout_generating": "&#1057;&#1086;&#1079;&#1076;&#1072;&#1085;&#1080;&#1077; &#1089;&#1087;&#1080;&#1089;&#1082;&#1086;&#1074;...",
	"animallist_flyout_havelist": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1080;&#1084;&#1077;&#1102;&#1097;&#1080;&#1093;&#1089;&#1103; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;",
	"animallist_flyout_havenotlist": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1086;&#1090;&#1089;&#1091;&#1090;&#1089;&#1090;&#1074;&#1091;&#1102;&#1097;&#1080;&#1093; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;",
	"animallist_flyout_note": "&#1055;&#1088;&#1080;&#1084;&#1077;&#1095;&#1072;&#1085;&#1080;&#1077;: &#1084;&#1085;&#1086;&#1075;&#1080;&#1077; &#1080;&#1079; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1093; &#1074;&#1072;&#1084; &#1085;&#1077; &#1093;&#1074;&#1072;&#1090;&#1072;&#1077;&#1090;, &#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1086;, &#1080;&#1079;&#1098;&#1103;&#1090;&#1099; &#1080;&#1079; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1080; &#1080;&#1083;&#1080; &#1077;&#1097;&#1077; &#1085;&#1077; &#1074;&#1099;&#1087;&#1091;&#1097;&#1077;&#1085;&#1099; &#1074; &#1089;&#1074;&#1077;&#1090;.",
	// status
	"status_buying_buying": "&#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1072;",
	"status_buying_bought": "&#1082;&#1091;&#1087;&#1083;&#1077;&#1085;&#1086;",
	"status_buying_ofitem": "&#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"status_buying_upgradingitem": "&#1084;&#1086;&#1076;&#1080;&#1092;&#1080;&#1082;&#1072;&#1094;&#1080;&#1103; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"status_buying_upgradeditem": "&#1084;&#1086;&#1076;&#1080;&#1092;&#1080;&#1094;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;",
	"status_wlfitemid_specify": "&#1059;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100; wlfItemId",
	"status_friendlist_loaded": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081; &#1091;&#1078;&#1077; &#1079;&#1072;&#1075;&#1088;&#1091;&#1078;&#1077;&#1085;...",
	"status_friendlist_loading": "&#1047;&#1072;&#1075;&#1088;&#1091;&#1079;&#1082;&#1072; &#1089;&#1087;&#1080;&#1089;&#1082;&#1072; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;...",
	"status_friendlist_found": "&#1053;&#1072;&#1081;&#1076;&#1077;&#1085;&#1086;",
	"status_friendlist_friends": "&#1076;&#1088;&#1091;&#1079;&#1077;&#1081;",
	"status_zoo_notloaded": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1085;&#1077; &#1079;&#1072;&#1075;&#1088;&#1091;&#1078;&#1077;&#1085;...",
	"status_zoo_loadedforfriend": "&#1047;&#1072;&#1075;&#1088;&#1091;&#1079;&#1082;&#1072; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072; &#1076;&#1088;&#1091;&#1075;&#1072;",
	"status_feeding_waitingfor": "&#1054;&#1078;&#1080;&#1076;&#1072;&#1085;&#1080;&#1077; &#1089;&#1083;&#1077;&#1076;&#1091;&#1102;&#1097;&#1077;&#1075;&#1086; &#1082;&#1086;&#1088;&#1084;&#1083;&#1077;&#1085;&#1080;&#1103;",
	"status_feeding_fed": "&#1087;&#1086;&#1082;&#1086;&#1088;&#1084;&#1083;&#1077;&#1085;&#1086;",
	"status_feeding_collected": "&#1089;&#1086;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_feeding_withtreat": "&#1083;&#1072;&#1082;&#1086;&#1084;&#1089;&#1090;&#1074;&#1086;&#1084;",
	"status_feeding_animalswithtreat": "&#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093; &#1083;&#1072;&#1082;&#1086;&#1084;&#1089;&#1090;&#1074;&#1086;&#1084;",
	"status_feeding_noanimalsforcumulative": "&#1053;&#1077;&#1090; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1099;&#1093; &#1076;&#1083;&#1103; &#1082;&#1091;&#1084;&#1091;&#1083;&#1103;&#1090;&#1080;&#1074;&#1085;&#1086;&#1081; &#1089;&#1083;&#1091;&#1078;&#1073;&#1099; &#1082;&#1086;&#1088;&#1084;&#1083;&#1077;&#1085;&#1080;&#1103;",
	"status_training_training": "&#1044;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1072;",
	"status_training_everyfiveminutes": "&#1082;&#1072;&#1078;&#1076;&#1099;&#1077; &#1087;&#1103;&#1090;&#1100; &#1084;&#1080;&#1085;&#1091;&#1090;...",
	"status_training_trained": "&#1057;&#1077;&#1072;&#1085;&#1089; &#1076;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1080; &#1086;&#1082;&#1086;&#1085;&#1095;&#1077;&#1085;",
	"status_gate_collectedxp": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1085;&#1099; XP &#1089; &#1074;&#1086;&#1088;&#1086;&#1090; &#1085;&#1072; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1077;",
	"status_booth_collecting": "&#1057;&#1073;&#1086;&#1088; &#1076;&#1077;&#1085;&#1077;&#1075; &#1080;&#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1077;...",
	"status_booth_collected": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1085;&#1099; &#1076;&#1077;&#1085;&#1100;&#1075;&#1080; &#1080;&#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1077;...",
	"status_visiting_visited": "&#1055;&#1086;&#1089;&#1077;&#1097;&#1077;&#1085;",
	"status_visiting_zooandcollected": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1080; &#1089;&#1086;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_gettingreward": "&#1055;&#1086;&#1083;&#1091;&#1095;&#1077;&#1085;&#1080;&#1077; &#1074;&#1086;&#1079;&#1085;&#1072;&#1075;&#1088;&#1072;&#1078;&#1076;&#1077;&#1085;&#1080;&#1103; &#1079;&#1072; &#1087;&#1086;&#1089;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1072;",
	"status_visiting_visitedandcollected": "&#1055;&#1086;&#1089;&#1077;&#1097;&#1077;&#1085; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1080; &#1089;&#1086;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_collected": "&#1057;&#1086;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_visitingall": "&#1055;&#1086;&#1089;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077; &#1074;&#1089;&#1077;&#1093;",
	"status_visiting_ofyourfriendszoos": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1086;&#1074; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081;...",
	"status_shaking_shakingitem": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"status_shaking_oftype": "&#1090;&#1080;&#1087;&#1072;",
	"status_shaking_forfriend": "&#1091; &#1076;&#1088;&#1091;&#1075;&#1072;",
	"status_shaking_notshakingitem": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"status_shaking_shaking": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072;",
	"status_shaking_for": "&#1091;",
	"status_shaking_shookitems": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1099;...",
	"status_shaking_shookitemsfailed": "&#1053;&#1077; &#1091;&#1076;&#1072;&#1083;&#1086;&#1089;&#1100; &#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1099;...",
	"status_island_loadingisland": "&#1047;&#1072;&#1075;&#1088;&#1091;&#1079;&#1082;&#1072; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;",
	"status_island_for": "&#1076;&#1083;&#1103;",
	"status_inventory_loading": "&#1047;&#1072;&#1075;&#1088;&#1091;&#1079;&#1082;&#1072; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1072; &#1076;&#1083;&#1103;",
	"status_inventory_queuing": "&#1054;&#1088;&#1075;&#1072;&#1085;&#1080;&#1079;&#1072;&#1094;&#1080;&#1103; &#1086;&#1095;&#1077;&#1088;&#1077;&#1076;&#1085;&#1086;&#1089;&#1090;&#1080;",
	"status_inventory_forshaking": "&#1085;&#1072; &#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1091;...",
	"status_moving_moving": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077;",
	"status_moving_toinventory": "&#1074; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077;",
	"status_moving_toisland": "&#1085;&#1072; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;",
	// Items
	"shop_listempty": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1087;&#1091;&#1089;&#1090;",
	// Spawning
	"gifts_giftingitem": "&#1044;&#1072;&#1088;&#1077;&#1085;&#1080;&#1077; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"gifts_spawning": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;",
	"gifts_trophy": "&#1087;&#1088;&#1080;&#1079;",
	"gifts_mission": "&#1084;&#1080;&#1089;&#1089;&#1080;&#1103;",
	// Mega spawn
	"megaspawn_flyout_gifts": "&#1055;&#1086;&#1076;&#1072;&#1088;&#1082;&#1080;",
	"megaspawn_flyout_missions": "&#1052;&#1080;&#1089;&#1089;&#1080;&#1080;",
	// generic
	"completion": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1080;&#1077;",
	// 2010/12/10
	"megaspawn_flyout_christmas": "&#1056;&#1086;&#1078;&#1076;&#1077;&#1089;&#1090;&#1074;&#1086;",
	// 2010/12/13
	"confirm_moving_tostorage": "&#1044;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1087;&#1077;&#1088;&#1077;&#1084;&#1077;&#1089;&#1090;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077; &#1074;&#1072;&#1096;&#1080;",
	"confirm_moving_tostorage2": "&#1074; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077;?",
	"status_moving_item": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072;",
	"status_moving_item2": "&#1074; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077;...",
	"confirm_unlock_11thisland": "&#1055;&#1086;&#1087;&#1088;&#1086;&#1073;&#1086;&#1074;&#1072;&#1090;&#1100; &#1088;&#1072;&#1079;&#1073;&#1083;&#1086;&#1082;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; 11-&#1081; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;? (&#1088;&#1072;&#1073;&#1086;&#1090;&#1072;&#1077;&#1090; &#1090;&#1086;&#1083;&#1100;&#1082;&#1086; &#1077;&#1089;&#1083;&#1080; &#1091; &#1074;&#1072;&#1089; &#1077;&#1089;&#1090;&#1100; &#1088;&#1086;&#1074;&#1085;&#1086; &#1076;&#1077;&#1089;&#1103;&#1090;&#1100;)",
	"status_unlock_11thisland": "&#1056;&#1072;&#1079;&#1073;&#1083;&#1086;&#1082;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077; 11-&#1075;&#1086; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;...",
	// 2010/12/15
	"christmas_flyout_title": "&#1056;&#1086;&#1078;&#1076;&#1077;&#1089;&#1090;&#1074;&#1086; &mdash; &#1088;&#1086;&#1082;&#1086;&#1074;&#1086;&#1081; &#1074;&#1080;&#1093;&#1088;&#1100; WLP",
	"christmas_flyout_noanimalintraining": "&#1053;&#1077;&#1090; &#1085;&#1080; &#1086;&#1076;&#1085;&#1086;&#1075;&#1086; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1075;&#1086; &#1074; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089;&#1089;&#1077; &#1076;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1080;. &#1044;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1077; &#1079;&#1072; WLP?",
	"christmas_flyout_animalintraining": "&#1046;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1077; &#1074; &#1085;&#1072;&#1089;&#1090;&#1086;&#1103;&#1097;&#1077;&#1077; &#1074;&#1088;&#1077;&#1084;&#1103; &#1074; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089;&#1089;&#1077; &#1076;&#1088;&#1077;&#1089;&#1089;&#1080;&#1088;&#1086;&#1074;&#1082;&#1080;",
	"christmas_flyout_items_intro": "&#1056;&#1086;&#1078;&#1076;&#1077;&#1089;&#1090;&#1074;&#1077;&#1085;&#1089;&#1082;&#1080;&#1077; &#1090;&#1086;&#1074;&#1072;&#1088;&#1099;",
	"christmas_flyout_gointozootoclaim": "&#1055;&#1086;&#1081;&#1076;&#1080;&#1090;&#1077; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; (&#1087;&#1077;&#1088;&#1077;&#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1080;&#1090;&#1077; &#1091;&#1075;&#1086;), &#1095;&#1090;&#1086;&#1073;&#1102;&#1099; &#1087;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1074;&#1072;&#1096;&#1077; &#1078;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1077;.",
	"christmas_flyout_animalisready": "&#1046;&#1080;&#1074;&#1086;&#1090;&#1085;&#1086;&#1077; &#1075;&#1086;&#1090;&#1086;&#1074;&#1086;!",
	// generic
	"error": "&#1086;&#1096;&#1080;&#1073;&#1082;&#1072;",
	"buy_more_for_wlp": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1100; &#1077;&#1097;&#1077; &#1079;&#1072; WLP?",
	"buy_more_for_wlp_prompt": "&#1042;&#1099; &#1093;&#1086;&#1090;&#1080;&#1090;&#1077; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077;&#1077; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; &#1101;&#1090;&#1086;&#1075;&#1086; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072; &#1079;&#1072; WLP?",
	"buy_more_for_wlp_prompt_specify_amount": "&#1042;&#1099; &#1093;&#1086;&#1090;&#1080;&#1090;&#1077; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077;&#1077; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; &#1101;&#1090;&#1086;&#1075;&#1086; &#1086;&#1073;&#1098;&#1077;&#1082;&#1090;&#1072; &#1079;&#1072; WLP?\n(&#1091;&#1082;&#1072;&#1078;&#1080;&#1090;&#1077; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1086;&#1077; &#1085;&#1091;&#1078;&#1085;&#1086; &#1082;&#1091;&#1087;&#1080;&#1090;&#1100;)"
};

// Hebrew translation by Irena Tkach & Deena Rich 2010/12/15 (encoded)
zdlang['he'] = {
	// generic
	"title": "Zoo World &#1502;&#1505;&#1497;&#1497;&#1506;",
	"show": "&#1492;&#1510;&#1490;",
	"hide": "&#1492;&#1505;&#1514;&#1512;",
	"shop": "&#1495;&#1504;&#1493;&#1514;",
	"reload": "&#1512;&#1506;&#1504;&#1503;",
	"language": "&#1513;&#1508;&#1492;",
	"en": "&#1488;&#1504;&#1490;&#1500;&#1497;&#1514;",
	"es": "&#1505;&#1508;&#1512;&#1491;&#1497;&#1514;",
	"de": "&#1490;&#1512;&#1502;&#1504;&#1497;&#1514;",
	"rs": "&#1505;&#1512;&#1489;&#1497;&#1514;",
	"ru": "&#1512;&#1493;&#1505;&#1497;&#1514;",
	"cn": "&#1505;&#1497;&#1504;&#1497;&#1514;",
	"jp": "&#1497;&#1508;&#1504;&#1497;&#1514;",
	"it": "&#1488;&#1497;&#1496;&#1500;&#1511;&#1497;&#1514;",
	"pt": "&#1508;&#1493;&#1512;&#1496;&#1493;&#1490;&#1494;&#1497;&#1514;",
	"fr": "&#1510;&#1512;&#1508;&#1514;&#1497;&#1514;",
	"id": "&#1488;&#1497;&#1504;&#1491;&#1493;&#1504;&#1494;&#1497;&#1514;",
	"hr": "&#1511;&#1512;&#1493;&#1488;&#1496;&#1497;&#1514;",
	"he": "&#1506;&#1489;&#1512;&#1497;&#1514;",
	"pl": "&#1508;&#1493;&#1500;&#1504;&#1497;&#1514;",
	"uk":"&#1488;&#1493;&#1511;&#1512;&#1488;&#1497;&#1504;&#1497;&#1514;",
	// tabs
	"tab_about": "&#1502;&#1497; &#1488;&#1504;&#1495;&#1504;&#1493;",
	"tab_myzoo": "&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500;&#1497;",
	"tab_items": "&#1508;&#1512;&#1497;&#1496;&#1497;&#1501;",
	"tab_spawning": "&#1513;&#1499;&#1508;&#1493;&#1500;",
	"tab_friends": "&#1495;&#1489;&#1512;&#1497;&#1501;",
	"tab_advanced": "&#1500;&#1502;&#1514;&#1511;&#1491;&#1502;&#1497;&#1501;",
	// footer
	"footer_status": "&#1502;&#1510;&#1489;",
	"footer_friends": "&#1495;&#1489;&#1512;&#1497;&#1501;",
	"footer_zoo": "&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	"footer_results": "AJAX &#1514;&#1493;&#1510;&#1488;&#1493;&#1514;",
	"footer_clear_log": "&#1504;&#1511;&#1492; &#1492;&#1514;&#1495;&#1489;&#1512;",
	// About
	"about_title": "&#1502;&#1497; &#1488;&#1504;&#1495;&#1504;&#1493;",
	"about_body_1": "&#1494;&#1492;&#1493; &#1499;&#1500;&#1497; &#1499;&#1491;&#1497; &#1500;&#1506;&#1513;&#1493;&#1514; &#1496;&#1512;&#1497;&#1511;&#1497;&#1501; &#1502;&#1490;&#1504;&#1497;&#1489;&#1497;&#1501; &#1489;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;. &#1494;&#1492; &#1497;&#1499;&#1493;&#1500; &#1500;&#1492;&#1495;&#1513;&#1489; &#1512;&#1502;&#1488;&#1493;&#1514; &#1493;&#1508;&#1512;&#1497;&#1510;&#1492; &#1493;&#1492;&#1514;&#1493;&#1510;&#1488;&#1493;&#1514; &#1500;&#1488; &#1504;&#1514;&#1502;&#1499;&#1493;&#1514; &#1488;&#1493; &#1502;&#1493;&#1489;&#1496;&#1495;&#1493;&#1514;. &#1512;&#1488;&#1492; &#1492;&#1493;&#1494;&#1492;&#1512;&#1514;! ",
	"about_body_2": "&#1497;&#1513; &#1513;&#1504;&#1497; &#1505;&#1493;&#1490;&#1497; &#1488;&#1504;&#1513;&#1497;&#1501; &#1489;&#1506;&#1493;&#1500;&#1501;: &#1488;&#1504;&#1513;&#1497;&#1501; &#1513;&#1497;&#1493;&#1491;&#1506;&#1497;&#1501; &#1500;&#1511;&#1512;&#1493;&#1488; &#1493;&#1488;&#1504;&#1513;&#1497;&#1501; &#1513;&#1499;&#1489;&#1512; &#1500;&#1495;&#1510;&#1493; &#1506;&#1500; &#1502;&#1513;&#1492;&#1493; &#1488;&#1495;&#1512;.",
	"about_body_3": "&#1488;&#1501; &#1488;&#1514;&#1492; &#1506;&#1491;&#1497;&#1497;&#1503; &#1499;&#1488;&#1503; &#1488;&#1494; &#1488;&#1493;&#1500;&#1497; &#1514;&#1513;&#1497;&#1501; &#1500;&#1489; &#1500;&#1502;&#1492; &#1513;&#1488;&#1504;&#1497; &#1499;&#1493;&#1514;&#1489;. &#1504;&#1488;&#1500;&#1510;&#1514;&#1497; &#1500;&#1492;&#1505;&#1497;&#1512; &#1488;&#1514; &#1492;&#1505;&#1511;&#1512;&#1497;&#1508;&#1496;&#1497;&#1501; &#1492;&#1488;&#1500;&#1492; &#1489;&#1490;&#1500;&#1500; &#1492;&#1491;&#1512;&#1502;&#1492; &#1513;&#1504;&#1490;&#1512;&#1502;&#1492; &#1489;&#1511;&#1492;&#1497;&#1500;&#1514; &#1490;&#1503; &#1495;&#1497;&#1493;&#1514;. &#1497;&#1499;&#1493;&#1500; &#1500;&#1492;&#1497;&#1493;&#1514; &#1513;&#1489;&#1508;&#1506;&#1501; &#1492;&#1489;&#1488;&#1492; &#1488;&#1504;&#1497; &#1500;&#1488; &#1488;&#1495;&#1494;&#1493;&#1512;. &#1514;&#1492;&#1497;&#1492; &#1492;&#1490;&#1497;&#1493;&#1504;&#1497;, &#1514;&#1492;&#1497;&#1492; &#1491;&#1497;&#1505;&#1511;&#1512;&#1496;&#1497; &#1493;&#1488;&#1500; &#1514;&#1495;&#1513;&#1493;&#1489; &#1513;&#1500;&#1488; &#1514;&#1506;&#1504;&#1513; &#1506;&#1500; &#1512;&#1502;&#1488;&#1493;&#1514;. ",
	"about_body_4": "&#1488;&#1504;&#1497; &#1506;&#1493;&#1513;&#1492; &#1496;&#1506;&#1493;&#1497;&#1493;&#1514;, &#1491;&#1489;&#1512;&#1497;&#1501; &#1502;&#1513;&#1514;&#1504;&#1497;&#1501; &#1489;&#1490;&#1503; &#1495;&#1497;&#1493;&#1514;, &#1491;&#1489;&#1512;&#1497;&#1501; &#1502;&#1513;&#1514;&#1504;&#1497;&#1501; &#1489;&#1508;&#1497;&#1505;&#1489;&#1493;&#1511;, &#1493;&#1492;&#1505;&#1511;&#1512;&#1497;&#1508;&#1496;&#1497;&#1501; &#1513;&#1500;&#1497; &#1502;&#1508;&#1505;&#1497;&#1511;&#1497;&#1501; &#1500;&#1506;&#1489;&#1493;&#1491;. &#1492;&#1506;&#1512;&#1492; &#1502;&#1504;&#1493;&#1502;&#1505;&#1514; &#1497;&#1499;&#1493;&#1500;&#1492; &#1500;&#1505;&#1508;&#1512; &#1500;&#1497; &#1502;&#1513;&#1492;&#1493; &#1513;&#1488;&#1504;&#1497; &#1500;&#1488; &#1497;&#1493;&#1491;&#1506;. &#1502;&#1488;&#1492; &#1504;&#1491;&#1504;&#1493;&#1491;&#1497;&#1501; &#1500;&#1488; &#1497;&#1493;&#1506;&#1497;&#1500;&#1493;. ",
	"about_body_5": "&#1492;&#1513;&#1514;&#1502;&#1513; &#1489;&#1505;&#1511;&#1512;&#1497;&#1508;&#1496;&#1497;&#1501; &#1513;&#1500;&#1497; &#1493;&#1514;&#1492;&#1504;&#1492;! &#1499;&#1502;&#1493; &#1499;&#1503;, &#1489;&#1489;&#1511;&#1513;&#1492; &#1492;&#1510;&#1496;&#1512;&#1507; &#1500;&#1511;&#1489;&#1493;&#1510;&#1492; &#1513;&#1500;&#1504;&#1493;. ",
	"about_body_group": "&#1511;&#1489;&#1493;&#1510;&#1492;",
	// My Zoo
	"myzoo_feeding_title": "&#1492;&#1488;&#1499;&#1500;&#1492;",
	"myzoo_feeding_feed": "&#1492;&#1488;&#1499;&#1500;&#1492;",
	"myzoo_feeding_collect": "&#1488;&#1497;&#1505;&#1493;&#1507;",
	"myzoo_feeding_day": "&#1497;&#1493;&#1501;",
	"myzoo_feeding_days": "&#1497;&#1493;&#1502;&#1497;&#1497;&#1501;",
	"myzoo_gates_title": "&#1513;&#1506;&#1512;&#1497;&#1501;",
	"myzoo_gates_collect_all": "&#1502;&#1499;&#1500; &#1492;&#1513;&#1506;&#1512;&#1497;&#1501; XP &#1488;&#1497;&#1505;&#1493;&#1507;",
	"myzoo_gates_collect_booth_15": "&#1488;&#1497;&#1505;&#1493;&#1507; &#1499;&#1505;&#1507; &#1502;&#1492;&#1511;&#1493;&#1508;&#1492; &#1499;&#1500; 15 &#1491;&#1511;&#1493;&#1514;",
	"myzoo_training_title": "&#1488;&#1497;&#1502;&#1493;&#1503;",
	"myzoo_treasure_title": "(&#1495;&#1497;&#1508;&#1493;&#1513; &#1492;&#1488;&#1493;&#1510;&#1512; (&#1491;&#1493;&#1512;&#1513; &#1488;&#1505;&#1508;&#1503; &#1492;&#1488;&#1493;&#1510;&#1512;",
	"myzoo_treasure_visit_all": "&#1490;&#1504;&#1497; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500; &#1499;&#1500; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501;",
	"myzoo_treasure_start_at": "&#1492;&#1514;&#1495;&#1500; &#1489;&#1490;&#1503; &#1495;&#1497;&#1493;&#1514;",
	"myzoo_treasure_continue_from": "... &#1492;&#1502;&#1513;&#1498; &#1502;",
	"myzoo_kiosk_title": "&#1511;&#1497;&#1493;&#1505;&#1511;&#1497;&#1501;",
	"myzoo_kiosk_collect_all": "&#1500;&#1488;&#1505;&#1493;&#1507; &#1502;&#1499;&#1500; &#1492;&#1511;&#1497;&#1493;&#1505;&#1511;&#1497;&#1501;",
	"myzoo_shake_title": "&#1504;&#1506;&#1504;&#1506; &#1506;&#1510;&#1497;&#1501;, &#1506;&#1510;&#1497;&#1501; &#1502;&#1506;&#1493;&#1510;&#1489;&#1497;&#1501;, &#1508;&#1505;&#1500;&#1497;&#1501;, &#1508;&#1496;&#1512;&#1497;&#1493;&#1514;, &#1492;&#1493;&#1508;&#1506;&#1493;&#1514;, &#1490;&#1503; &#1493;&#1512;&#1491;&#1497;&#1501; &#1493;&#1499;&#1493;'",
	"myzoo_shake_shake_all": "&#1504;&#1506;&#1504;&#1506; &#1488;&#1514; &#1499;&#1500; &#1492;&#1488;&#1497;&#1497;&#1501;",
	"myzoo_move_title": "&#1492;&#1506;&#1489;&#1512; &#1488;&#1514; &#1499;&#1500; &#1492;&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1502;&#1488;&#1497; &#1500;&#1502;&#1495;&#1505;&#1503;",
	"myzoo_fill_title": "&#1502;&#1497;&#1500;&#1493;&#1497; &#1495;&#1502;&#1502;&#1492; &#1502;&#1492;&#1502;&#1500;&#1488;&#1497;",
	"myzoo_auto_title": "&#1488;&#1493;&#1496;&#1493;&#1502;&#1496;&#1497;",
	"myzoo_auto_intro": "&#1488;&#1505;&#1493;&#1507; &#1502;&#1499;&#1500; &#1492;&#1513;&#1506;&#1512;&#1497;&#1501;, &#1488;&#1505;&#1493;&#1507; &#1499;&#1505;&#1507; &#1502;&#1492;&#1511;&#1493;&#1508;&#1492;, &#1492;&#1488;&#1499;&#1500; &#1488;&#1514; &#1499;&#1500; &#1492;&#1495;&#1497;&#1493;&#1514; &#1489;&#1492;&#1490;&#1491;&#1512;&#1493;&#1514; &#1492;&#1511;&#1497;&#1497;&#1502;&#1493;&#1514;, &#1504;&#1506;&#1504;&#1506; &#1488;&#1514; &#1499;&#1500; &#1492;&#1506;&#1510;&#1497;&#1501;, &#1489;&#1511;&#1512; &#1489;&#1490;&#1504;&#1497; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500; &#1499;&#1500; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501;",
	"myzoo_lists_title": "&#1512;&#1513;&#1497;&#1502;&#1493;&#1514;",
	"myzoo_lists_intro": "&#1510;&#1493;&#1512; &#1512;&#1513;&#1497;&#1502;&#1514; '&#1497;&#1513;/&#1488;&#1497;&#1493; &#1513;&#1500; &#1495;&#1497;&#1493;&#1514;...",
	"myzoo_breeding_title": "&#1512;&#1489;&#1497;&#1497;&#1492;",
	"myzoo_breeding_intro": "&#1504;&#1497;&#1492;&#1493;&#1500; &#1512;&#1489;&#1497;&#1497;&#1492;",
	// Items
	"shop_title": "&#1508;&#1512;&#1497;&#1496;&#1497;&#1501;",
	"shop_intro": "&#1494;&#1492;&#1493; &#1512;&#1513;&#1497;&#1502;&#1492; &#1513;&#1500; &#1492;&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1492;&#1502;&#1493;&#1499;&#1512;&#1497;&#1501; &#1502;&#1514;&#1493;&#1498; &#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;. &#1500;&#1502;&#1512;&#1493;&#1514; &#1513;&#1497;&#1513; &#1511;&#1497;&#1513;&#1493;&#1512;&#1497; &#1512;&#1499;&#1497;&#1513;&#1492;, &#1492;&#1512;&#1489;&#1492; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1500;&#1488; &#1504;&#1497;&#1514;&#1504;&#1497;&#1501; &#1500;&#1512;&#1499;&#1497;&#1513;&#1492; &#1489;&#1490;&#1500;&#1500; &#1502;&#1505;&#1508;&#1512; &#1505;&#1497;&#1489;&#1493;&#1514; (&#1500;&#1488; &#1508;&#1493;&#1512;&#1505;&#1502;&#1493; &#1506;&#1491;&#1497;&#1497;&#1503;, &#1500;&#1488; &#1513;&#1493;&#1495;&#1512;&#1512;&#1493; &#1506;&#1491;&#1497;&#1497;&#1503;, &#1492;&#1493;&#1508;&#1505;&#1511;&#1493; &#1493;&#1499;&#1493;).<em> &#1513;&#1497;&#1501; &#1500;&#1489; &#1513;&#1488;&#1501; &#1492;&#1495;&#1513;&#1489;&#1493;&#1503; &#1513;&#1500;&#1498; &#1499;&#1489;&#1512; &#1495;&#1493;&#1489;&#1512; &#1500;&#1508;&#1497;&#1497;-&#1508;&#1500;, &#1499;&#1500;&#1493;&#1502;&#1512; &#1499;&#1489;&#1512; &#1512;&#1499;&#1513;&#1514; &#1489;&#1506;&#1489;&#1512; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1506;&#1489;&#1493;&#1512; &#1499;&#1505;&#1507; &#1488;&#1502;&#1497;&#1514;&#1497;, &#1514;&#1495;&#1493;&#1497;&#1497;&#1489; &#1500;&#1500;&#1488; &#1488;&#1494;&#1492;&#1512;&#1492; &#1502;&#1512;&#1488;&#1513;</em>",
	"shop_loading": "&#1492;&#1495;&#1504;&#1493;&#1514; &#1492;&#1490;&#1491;&#1493;&#1500;&#1492; &#1513;&#1500; &#1492;&#1499;&#1500; &#1496;&#1493;&#1506;&#1504;&#1514;...",
	"shop_buy_id": "&#1511;&#1504;&#1492; &#1499;&#1500; &#1508;&#1512;&#1497;&#1496; &#1500;&#1508;&#1497; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497;",
	"shop_buy_id_intro": "(&#1500;&#1513;&#1497;&#1502;&#1493;&#1513; &#1499;&#1488;&#1513;&#1512; &#1488;&#1514;&#1492; &#1497;&#1493;&#1491;&#1506; &#1488;&#1514; &#1502;&#1505;&#1508;&#1512; &#1492;&#1494;&#1497;&#1492;&#1493;&#1497; &#1488;&#1489;&#1500; &#1492;&#1495;&#1504;&#1493;&#1514; &#1506;&#1491;&#1497;&#1497;&#1503; &#1500;&#1488; &#1506;&#1493;&#1491;&#1499;&#1504;&#1492;).",
	"shop_upgrade_id": "&#1513;&#1491;&#1512;&#1490; &#1499;&#1500; &#1495;&#1497;&#1492; &#1500;&#1508;&#1497; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497;",
	"shop_upgrade_id_intro": "(&#1500;&#1513;&#1497;&#1502;&#1493;&#1513; &#1499;&#1488;&#1513;&#1512; &#1488;&#1514;&#1492; &#1497;&#1493;&#1491;&#1506; &#1488;&#1514; &#1502;&#1505;&#1508;&#1512; &#1492;&#1494;&#1497;&#1492;&#1493;&#1497; &#1488;&#1489;&#1500; &#1492;&#1495;&#1504;&#1493;&#1514; &#1506;&#1491;&#1497;&#1497;&#1503; &#1500;&#1488; &#1506;&#1493;&#1491;&#1499;&#1504;&#1492;).",
	"shop_repeat_buy_id": "&#1512;&#1499;&#1497;&#1513;&#1492; &#1495;&#1493;&#1494;&#1512;&#1514; &#1513;&#1500; &#1499;&#1500; &#1508;&#1512;&#1497;&#1496; &#1500;&#1508;&#1497; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497;",
	"shop_repeat_buy_id_intro": "(&#1500;&#1513;&#1497;&#1502;&#1493;&#1513; &#1500;&#1502;&#1496;&#1512;&#1514; &#1512;&#1499;&#1497;&#1513;&#1514; &#1508;&#1512;&#1497;&#1496; &#1502;&#1505;&#1493;&#1497;&#1497;&#1501; &#1506;''&#1497; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497; &#1499;&#1500; 10 &#1513;&#1504;&#1497;&#1493;&#1514;, &#1513;&#1497;&#1502;&#1493;&#1513;&#1497; &#1506;&#1489;&#1493;&#1512; &#1488;&#1497;&#1500;&#1493; &#1513;&#1504;&#1493;&#1514;&#1504;&#1497;&#1501; &#1488;&#1514; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500; &#1492;&#1512;&#1502;&#1493;&#1514; &#1492;&#1490;&#1489;&#1493;&#1492;&#1493;&#1514; &#1499;&#1502;&#1514;&#1504;&#1492;.",
	"shop_buy_fbc_intro": "FBC&#1511;&#1504;&#1492; &#1489;&#1488;&#1502;&#1510;&#1506;&#1493;&#1514; ",
	"shop_buy_by_wlf_item_id": "wlfItemId &#1511;&#1504;&#1492; &#1500;&#1508;&#1497; ",
	"shop_paypal_howto": "WLP&#1488;&#1497;&#1498; &#1500;&#1489;&#1496;&#1500; &#1488;&#1514; &#1492;&#1492;&#1505;&#1499;&#1501; &#1512;&#1499;&#1497;&#1513;&#1492; &#1489;&#1511;&#1500;&#1497;&#1511; &#1488;&#1495;&#1491; &#1489;&#1497;&#1503; &#1512;&#1493;&#1511;-&#1497;&#1493; &#1500;&#1508;&#1497;&#1497;-&#1508;&#1500; &#1488;&#1495;&#1512;&#1497; &#1512;&#1499;&#1497;&#1513;&#1514; &#1495;&#1497;&#1492; &#1504;&#1491;&#1497;&#1512;&#1492; &#1488;&#1493; ",
	// Spawning
	"gifts_title": "&#1513;&#1499;&#1508;&#1493;&#1500;",
	"gifts_gifts_title": "&#1502;&#1514;&#1504;&#1493;&#1514;",
	"gifts_level_title": "&#1506;&#1500;&#1497;&#1497;&#1514; &#1512;&#1502;&#1492;",
	"gifts_level_intro": "&#1492;&#1511;&#1500;&#1491; &#1488;&#1514; &#1492;&#1512;&#1502;&#1492; &#1492;&#1512;&#1510;&#1493;&#1497;&#1492;",
	"gifts_daily_title": "&#1508;&#1512;&#1505;&#1501; &#1502;&#1514;&#1504;&#1492; &#1497;&#1493;&#1502;&#1497;&#1514;",
	"gifts_trophy_title": "&#1508;&#1512;&#1505;",
	"gifts_juice_title": "&#1502;&#1497;&#1509;",
	"gifts_flowerpots_title": "&#1488;&#1490;&#1512;&#1496;&#1500;&#1497; &#1508;&#1512;&#1495;&#1497;&#1501;",
	"gifts_halloween_title": "&#1500;&#1497;&#1500; &#1499;&#1500; &#1492;&#1511;&#1491;&#1493;&#1513;&#1497;&#1501;",
	"gifts_halloween_ask_sewing": "&#1489;&#1511;&#1513;&#1514; &#1506;&#1494;&#1512;&#1492; &#1489;&#1514;&#1508;&#1497;&#1512;&#1492;",
	"gifts_fieldtrip_title": "&#1496;&#1497;&#1493;&#1500; &#1513;&#1491;&#1492;",
	"gifts_fieldtrip_anything_by_id": "ID&#1499;&#1500; &#1491;&#1489;&#1512; &#1500;&#1508;&#1497; ",
	"gifts_treattrophy_title": "&#1508;&#1512;&#1505; &#1502;&#1496;&#1506;&#1502;&#1497;&#1501;",
	"gifts_buildables_title": "&#1495;&#1508;&#1510;&#1497;&#1501; &#1513;&#1504;&#1497;&#1514;&#1504;&#1497;&#1501; &#1500;&#1489;&#1504;&#1497;&#1492;",
	"gifts_missions_title": "&#1502;&#1513;&#1497;&#1502;&#1493;&#1514;",
	"gifts_missions_start": "&#1492;&#1514;&#1495;&#1500;",
	"gifts_missions_republish": "&#1508;&#1512;&#1505;&#1501; &#1513;&#1493;&#1489;",
	"gifts_missions_complete": "&#1505;&#1497;&#1493;&#1501;",
	"gifts_rosegarden_title": "&#1490;&#1503; &#1493;&#1512;&#1491;&#1497;&#1501;",
	"gifts_rosegarden_share_upgrade": "&#1508;&#1512;&#1505;&#1501; &#1513;&#1491;&#1512;&#1493;&#1490; &#1490;&#1503; &#1506;&#1500; &#1492;&#1511;&#1497;&#1512;",
	"gifts_rosegarden_ask_rose": "&#1489;&#1511;&#1513; &#1493;&#1512;&#1491;&#1497;&#1501; &#1506;&#1500; &#1492;&#1511;&#1497;&#1512;",
	"gifts_rosegarden_share_rose": "&#1508;&#1512;&#1505;&#1501; &#1493;&#1512;&#1491;&#1497;&#1501; &#1506;&#1500; &#1492;&#1511;&#1497;&#1512;",
	"gifts_goldenegg_title": "&#1489;&#1497;&#1510;&#1514; &#1494;&#1492;&#1489;",
	"gifts_icecream_title": "&#1490;&#1500;&#1497;&#1491;&#1492;",
	"gifts_greenhouse_title": "&#1495;&#1502;&#1502;&#1492;",
	"gifts_megaspawn_title": "&#1513;&#1499;&#1508;&#1493;&#1500; &#1502;&#1490;&#1492;",
	// Visiting
	"visiting_resume_intro": "(&#1492;&#1502;&#1513;&#1498; &#1502;&#1490;&#1503; &#1495;&#1497;&#1493;&#1514; &#1502;&#1505;&#1493;&#1497;&#1497;&#1501; &#1488;&#1495;&#1512;&#1497; &#1513;&#1492;&#1514;&#1492;&#1500;&#1497;&#1498; &#1511;&#1493;&#1512;&#1505;...)",
	"visiting_go_outside": "&#1513;&#1497;&#1501; &#1500;&#1489; &#1499;&#1497; &#1489;&#1492;&#1514;&#1488;&#1501; &#1500;&#1502;&#1505;&#1508;&#1512; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501; &#1513;&#1497;&#1513; &#1500;&#1498;, &#1494;&#1492; &#1506;&#1500;&#1493;&#1500; &#1500;&#1506;&#1512;&#1493;&#1498; &#1494;&#1502;&#1503; &#1512;&#1489;! &#1510;&#1488; &#1492;&#1495;&#1493;&#1510;&#1492; &#1493;&#1513;&#1495;&#1511; :)",
	"visiting_load_friends": "&#1496;&#1506;&#1497;&#1504;&#1514; &#1512;&#1513;&#1497;&#1502;&#1514; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501; &#1513;&#1500;&#1498;...",
	// Advanced
	"advanced_title": "&#1500;&#1502;&#1514;&#1511;&#1491;&#1502;&#1497;&#1501;",
	"advanced_intro": "&#1488;&#1501; &#1488;&#1514;&#1492; &#1500;&#1488; &#1489;&#1496;&#1493;&#1495; &#1502;&#1492; &#1494;&#1492;, &#1488;&#1494; &#1494;&#1492; &#1500;&#1488; &#1489;&#1513;&#1489;&#1497;&#1500;&#1498;!",
	"advanced_detailedlogging_title": "&#1512;&#1497;&#1513;&#1493;&#1501; &#1502;&#1508;&#1493;&#1512;&#1496;",
	"advanced_friends_title": "&#1495;&#1489;&#1512;&#1497;&#1501;",
	"advanced_zoo_title": "&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	"advanced_zoodisplay_title": "&#1490;&#1493;&#1491;&#1500; &#1514;&#1510;&#1493;&#1490;&#1514; &#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	"advanced_cookies_title": "&#1511;&#1493;&#1511;&#1497;&#1505;",
	"advanced_workqueue_title": "&#1505;&#1491;&#1512; &#1506;&#1489;&#1493;&#1491;&#1492;",
	"advanced_play_title": "&#1513;&#1495;&#1511;",
	"advanced_alternateaccess_title": "&#1490;&#1497;&#1513;&#1492; &#1495;&#1500;&#1493;&#1508;&#1497;&#1514;",
	"advanced_tryto_title": "&#1504;&#1505;&#1492;",
	"advanced_goldeninviter_title": "&#1492;&#1494;&#1502;&#1504;&#1514; &#1494;&#1492;&#1489;",
	"advanced_punkd_title": "&#1506;&#1489;&#1491;&#1493; &#1506;&#1500;&#1497;&#1498;",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "&#1492;&#1506;&#1512;&#1499;&#1492;",
	"advanced_javacript_ajaxdelay": " (&#1488;&#1500;&#1508;&#1497;&#1493;&#1514; &#1492;&#1513;&#1504;&#1497;&#1497;&#1492;) AJAX &#1506;&#1497;&#1499;&#1493;&#1489;",
	// generic
	"show": "&#1492;&#1510;&#1490;",
	"hide": "&#1492;&#1505;&#1514;&#1512;",
	"shop": "&#1495;&#1504;&#1493;&#1514;",
	"reload": "&#1512;&#1506;&#1504;&#1503;",
	"island": "&#1488;&#1497;",
	"islands": "&#1488;&#1497;&#1497;&#1501;",
	"minute": "&#1491;&#1511;&#1492;",
	"minutes": "&#1491;&#1511;&#1493;&#1514;",
	"hour": "&#1513;&#1506;&#1492;",
	"hours": "&#1513;&#1506;&#1493;&#1514;",
	"day": "&#1497;&#1493;&#1501;",
	"days": "&#1497;&#1493;&#1502;&#1497;&#1497;&#1501;",
	"once": "&#1495;&#1491;-&#1508;&#1506;&#1502;&#1497;",
	"repeat": "&#1512;&#1489;-&#1508;&#1506;&#1502;&#1497;",
	"to_friend": "&#1500;&#1495;&#1489;&#1512;",
	"specify_user_id": "(ID) &#1510;&#1497;&#1497;&#1503; &#1488;&#1514; &#1502;&#1494;&#1492;&#1492; &#1492;&#1502;&#1513;&#1514;&#1502;&#1513;",
	"specific_user": "&#1510;&#1497;&#1497;&#1503; &#1502;&#1513;&#1514;&#1502;&#1513;",
	"specify_user_id_prompt": "&#1510;&#1497;&#1497;&#1503; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497; &#1502;&#1513;&#1514;&#1502;&#1513; &#1489;&#1512;&#1512; &#1488;&#1514; &#1494;&#1492; &#1502;&#1514;&#1493;&#1498; &#1492;&#1508;&#1512;&#1493;&#1508;&#1497;&#1500; &#1513;&#1500;&#1492;&#1501;",
	"specify_animal_id": "&#1510;&#1497;&#1497;&#1503; &#1488;&#1514; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497; &#1513;&#1500; &#1492;&#1495;&#1497;&#1492;",
	"specify_animal_id_prompt": "&#1510;&#1497;&#1497;&#1503; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497; &#1492;&#1495;&#1497;&#1492; &#1489;&#1512;&#1512; &#1494;&#1488;&#1514; &#1502;&#1514;&#1493;&#1498; &#1492;&#1512;&#1513;&#1497;&#1502;&#1492; &#1489;&#1495;&#1504;&#1493;&#1514;",
	"send_to_feed": "&#1513;&#1500;&#1495; &#1500;&#1511;&#1497;&#1512;",
	"ask_on_feed": "&#1489;&#1511;&#1513; &#1489;&#1511;&#1497;&#1512;",
	"ask_for": " &#1489;&#1511;&#1513; &#1488;&#1514;",
	"share": "&#1513;&#1514;&#1507;",
	"share_roses": "&#1513;&#1514;&#1507; '&#1493;&#1512;&#1491;&#1497;&#1501;'",
	"post": "&#1508;&#1512;&#1505;&#1501;",
	"share_completion": "&#1508;&#1512;&#1505;&#1501; &#1505;&#1497;&#1493;&#1501;",
	"completed": "&#1492;&#1493;&#1513;&#1500;&#1501;",
	"help": "&#1506;&#1494;&#1493;&#1512;",
	"easy": "&#1511;&#1500;",
	"medium": "&#1489;&#1497;&#1504;&#1493;&#1504;&#1497;",
	"hard": "&#1511;&#1513;&#1492;",
	"invite": "&#1492;&#1494;&#1502;&#1503;",
	"hatched": "&#1489;&#1511;&#1506;",
	"send_as_request": "&#1513;&#1500;&#1495; &#1499;&#1489;&#1511;&#1513;&#1492;",
	"ask_as_request": "&#1489;&#1511;&#1513; &#1499;&#1489;&#1511;&#1513;&#1492;",
	"update_button": "&#1500;&#1495;&#1510;&#1503; '&#1506;&#1491;&#1499;&#1493;&#1503;'",
	"button_go": "&#1492;&#1514;&#1495;&#1500;",
	"start": "&#1492;&#1514;&#1495;&#1500;",
	"republish": "&#1508;&#1512;&#1505;&#1501; &#1513;&#1493;&#1489;",
	"complete": "&#1505;&#1497;&#1493;&#1501;",
	// 2010/12/08
	// generic
	"post_trade": "&#1508;&#1512;&#1505;&#1501; &#1492;&#1495;&#1500;&#1508;&#1492;",
	"update": " &#1506;&#1491;&#1499;&#1503;",
	"loaded": "&#1496;&#1506;&#1493;&#1503;",
	"main_zooremoved": "&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1492;&#1493;&#1505;&#1512;",
	"main_clicktogetback": "&#1500;&#1495;&#1509; &#1499;&#1491;&#1497; &#1500;&#1492;&#1495;&#1494;&#1497;&#1512;",
	"executing": "&#1502;&#1489;&#1510;&#1506;",
	"specify_item_id_prompt": "&#1510;&#1497;&#1497;&#1503; &#1488;&#1514; &#1502;&#1505;&#1508;&#1512; &#1492;&#1508;&#1512;&#1497;&#1496; &#1489;&#1512;&#1512; &#1488;&#1514; &#1492;&#1502;&#1505;&#1508;&#1512; &#1492;&#1494;&#1497;&#1492;&#1493;&#1497; &#1502;&#1492;&#1512;&#1513;&#1497;&#1502;&#1492; &#1489;&#1495;&#1504;&#1493;&#1514;",
	"close": "&#1505;&#1490;&#1493;&#1512;",
	"buy": "&#1511;&#1504;&#1492;",
	"gift": "&#1502;&#1514;&#1504;&#1492;",
	"breed": "&#1512;&#1489;&#1497;&#1497;&#1492;",
	"upgrade": "&#1513;&#1491;&#1512;&#1493;&#1490;",
	"shareonwall": "&#1508;&#1512;&#1505;&#1501; &#1506;&#1500; &#1492;&#1511;&#1497;&#1512;",
	"refresh": "&#1512;&#1506;&#1504;&#1503;",
	"project": "&#1508;&#1512;&#1493;&#1497;&#1511;&#1496;",
	// Items
	"shop_flyout_categories": "&#1511;&#1496;&#1490;&#1493;&#1512;&#1497;&#1493;&#1514;",
	"shop_flyout_rarity": "&#1504;&#1491;&#1497;&#1512;&#1493;&#1514;",
	"shop_flyout_breedingtime": "&#1494;&#1502;&#1503; &#1512;&#1489;&#1497;&#1497;&#1492;",
	"shop_flyout_purchasefor": "&#1512;&#1499;&#1497;&#1513;&#1492; &#1506;&#1489;&#1493;&#1512;",
	"shop_flyout_actualdollars": "&#1491;&#1493;&#1500;&#1512;&#1497;&#1501; &#1488;&#1502;&#1497;&#1514;&#1497;&#1497;&#1501;",
	"shop_flyout_fbc": "Facebook Credits",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "&#1514;&#1502;&#1493;&#1504;&#1493;&#1514;",
	"shop_flyout_images_large": "&#1490;&#1491;&#1493;&#1500;",
	"shop_flyout_images_small": "&#1511;&#1496;&#1503;",
	"shop_flyout_images_baby": "&#1490;&#1493;&#1512;",
	"shop_flyout_actions_title": "&#1508;&#1506;&#1493;&#1500;&#1493;&#1514;",
	"shop_flyout_actions_buylots_prompt": "&#1502;&#1505;&#1508;&#1512; &#1492;&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1500;&#1511;&#1504;&#1493;&#1514; (&#1500;&#1495;&#1497;&#1493;&#1514;, &#1495;&#1497;&#1497;&#1489; &#1500;&#1492;&#1497;&#1493;&#1514; &#1508;&#1495;&#1493;&#1514; &#1502;&#1492;&#1505;&#1499;&#1493;&#1501; &#1500;&#1513;&#1491;&#1512;&#1493;&#1490;, &#1500;&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1488;&#1495;&#1512;&#1497;&#1501; &#1502;&#1511;&#1505;&#1497;&#1502;&#1493;&#1501; &#1513;&#1500; 999)",
	"shop_flyout_actions_buylots": "&#1511;&#1504;&#1492; &#1492;&#1502;&#1493;&#1503;",
	"shop_flyout_actions_postadopt": "&#1508;&#1512;&#1505;&#1501; &#1488;&#1497;&#1502;&#1493;&#1509;",
	"shop_flyout_actions_customadopt": "&#1488;&#1497;&#1502;&#1493;&#1509; &#1502;&#1497;&#1493;&#1495;&#1491;",
	"shop_flyout_actions_thanksgivingwlpupgrade": "WLP&#1504;&#1505;&#1492; &#1500;&#1513;&#1491;&#1512;&#1490; &#1500;&#1504;&#1491;&#1497;&#1512; &#1506;&#1489;&#1493;&#1512; 1 ",
	"shop_flyout_actions_findinzoo": "&#1500;&#1502;&#1510;&#1493;&#1488; &#1489;&#1490;&#1503; &#1495;&#1497;&#1493;&#1514;",
	"shop_flyout_actions_upgradeforwrenches": "&#1513;&#1491;&#1512;&#1493;&#1490; &#1500;&#1502;&#1508;&#1514;&#1495; &#1489;&#1512;&#1490;&#1497;&#1501;",
	"shop_flyout_actions_cantbuy": "&#1500;&#1488; &#1497;&#1499;&#1493;&#1500; &#1500;&#1511;&#1504;&#1493;&#1514; &#1499;&#1488;&#1500;&#1492;...",
	"shop_flyout_actions_trytobuy": "&#1500;&#1504;&#1505;&#1493;&#1514; &#1500;&#1511;&#1504;&#1493;&#1514; &#1489;&#1499;&#1500; &#1494;&#1488;&#1514;?",
	"shop_flyout_actions_numitemstobuy": "&#1502;&#1505;&#1508;&#1512; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1500;&#1512;&#1499;&#1497;&#1513;&#1492;? (&#1500;&#1495;&#1497;&#1493;&#1514;, &#1495;&#1497;&#1497;&#1489; &#1500;&#1492;&#1497;&#1493;&#1514; &#1508;&#1495;&#1493;&#1514; &#1502;&#1492;&#1505;&#1499;&#1493;&#1501; &#1500;&#1513;&#1491;&#1512;&#1493;&#1490;, &#1500;&#1488;&#1495;&#1512;&#1497;&#1501; &#1502;&#1511;&#1505;&#1497;&#1502;&#1493;&#1501; &#1513;&#1500; 999)",
	"shop_flyout_actions_movealltostorage": "&#1492;&#1506;&#1489;&#1512; &#1488;&#1514; &#1499;&#1500; &#1500;&#1502;&#1495;&#1505;&#1503;",
	"shop_flyout_actions_moneywarning": "&#1488;&#1494;&#1492;&#1512;&#1492;: &#1492;&#1508;&#1512;&#1497;&#1496; &#1492;&#1494;&#1492; &#1506;&#1493;&#1500;&#1492; &#1499;&#1505;&#1507; &#1493;&#1488;&#1514;&#1492; &#1506;&#1513;&#1493;&#1497; &#1500;&#1492;&#1497;&#1493;&#1514; &#1502;&#1495;&#1493;&#1497;&#1497;&#1489; &#1500;&#1500;&#1488; &#1488;&#1494;&#1492;&#1512;&#1492;!",
	"shop_flyout_actions_facts": "&#1506;&#1493;&#1489;&#1491;&#1493;&#1514;",
	"shop_flyout_actions_training": "&#1488;&#1497;&#1502;&#1493;&#1503;",
	// advanced
	"advanced_friends_loadlist": "&#1496;&#1506;&#1503; &#1488;&#1514; &#1512;&#1513;&#1497;&#1502;&#1514; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501;",
	"advanced_friends_deduplicatelist": "&#1492;&#1493;&#1512;&#1491; &#1499;&#1508;&#1500; &#1512;&#1513;&#1497;&#1502;&#1492;",
	"advanced_zoo_loadzoo": "&#1496;&#1506;&#1503; &#1488;&#1514; &#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500;&#1498;",
	"advanced_zoo_loadanyzoo": "&#1496;&#1506;&#1503; &#1490;&#1503; &#1495;&#1497;&#1493;&#1514; &#1499;&#1500;&#1513;&#1492;&#1493;&#1488;",
	"advanced_zoo_showzoo": "&#1492;&#1510;&#1490; &#1490;&#1503; &#1495;&#1497;&#1493;&#1514;",
	"advanced_zoo_specifyisland": "&#1510;&#1497;&#1497;&#1503; &#1502;&#1505;&#1508;&#1512; &#1494;&#1497;&#1492;&#1493;&#1497; &#1513;&#1500; &#1492;&#1488;&#1497; (0-10): ",
	"advanced_zoo_loadyourisland": "&#1496;&#1506;&#1503; &#1488;&#1514; &#1492;&#1488;&#1497; &#1513;&#1500;&#1498;",
	"advanced_zoodisplay_normal": "&#1512;&#1490;&#1497;&#1500;",
	"advanced_zoodisplay_big": "&#1490;&#1491;&#1493;&#1500;",
	"advanced_cookies_cookies": "&#1511;&#1493;&#1511;&#1497;&#1505;",
	"advanced_cookies_show": "&#1492;&#1510;&#1490;",
	"advanced_cookies_delete": "&#1502;&#1495;&#1511;",
	"advanced_cookies_set": "&#1492;&#1490;&#1491;&#1512;",
	"advanced_workqueue_start": "&#1492;&#1514;&#1495;&#1500;",
	"advanced_workqueue_stop": "&#1505;&#1497;&#1497;&#1501;",
	"advanced_workqueue_itemsinthequeue": "&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1489;&#1514;&#1493;&#1512;.",
	"advanced_workqueue_showsize": "&#1500;&#1492;&#1510;&#1497;&#1490; &#1490;&#1493;&#1491;&#1500;",
	"advanced_workqueue_clear": "&#1500;&#1502;&#1495;&#1493;&#1511;",
	"advanced_alternateaccess_unframe": "&#1492;&#1505;&#1512; &#1502;&#1505;&#1490;&#1512;&#1514; &#1490;&#1503; &#1495;&#1497;&#1493;&#1514;",
	"advanced_alternateaccess_workaround": "&#1490;&#1503; &#1495;&#1497;&#1493;&#1514; &#1489;&#1505;&#1490;&#1504;&#1493;&#1503; &#1500;&#1497;&#1497;&#1496;",
	"advanced_tryto_forceadopt": "&#1488;&#1497;&#1502;&#1493;&#1509; &#1502;&#1488;&#1493;&#1500;&#1509;",
	"advanced_tryto_payday": "&#1502;&#1513;&#1499;&#1493;&#1512;&#1514;",
	"advanced_tryto_unlock11thisland": "&#1500;&#1513;&#1495;&#1512;&#1512; &#1488;&#1514; &#1488;&#1497; 11",
	// megaspawn flyout
	"megaspawn_flyout_title": "&#1492;&#1499;&#1508;&#1500;&#1492; &#1502;&#1490;&#1492;",
	"megaspawn_flyout_projects": "&#1508;&#1512;&#1493;&#1497;&#1497;&#1511;&#1496;&#1497;&#1501;",
	"megaspawn_flyout_multiplenotes": "&#1492;&#1506;&#1512;&#1493;&#1514; &#1502;&#1512;&#1493;&#1489;&#1493;&#1514;",
	// animal list flyout
	"animallist_flyout_title": "&#1512;&#1513;&#1497;&#1502;&#1514; &#1495;&#1497;&#1493;&#1514;",
	"animallist_flyout_intro": "&#1492;&#1506;&#1514;&#1511; &#1493;&#1492;&#1491;&#1489;&#1511; &#1488;&#1514; &#1492;&#1512;&#1513;&#1497;&#1502;&#1492; &#1492;&#1494;&#1488;&#1514; &#1499;&#1491;&#1497; &#1500;&#1492;&#1513;&#1514;&#1502;&#1513;",
	// breeding flyout
	"breeding_flyout_title": "&#1512;&#1513;&#1497;&#1502;&#1514; &#1512;&#1489;&#1497;&#1497;&#1492;",
	"breeding_flyout_breeding": "&#1512;&#1489;&#1497;&#1497;&#1492;",
	"breeding_flyout_innest": "&#1489;&#1511;&#1503;",
	"breeding_flyout_nomorenests": "&#1488;&#1497;&#1503; &#1511;&#1504;&#1497;&#1501; &#1512;&#1497;&#1511;&#1497;&#1501;",
	"breeding_flyout_nobabies": ".&#1488;&#1497;&#1503; &#1490;&#1493;&#1512;&#1497;&#1501; &#1489;&#1511;&#1504;&#1497;&#1501;",
	"breeding_flyout_heal": "&#1512;&#1508;&#1488;",
	"breeding_flyout_feed": "&#1492;&#1488;&#1499;&#1500;",
	"breeding_flyout_notready": "&#1506;&#1491;&#1497;&#1497;&#1503; &#1500;&#1488; &#1502;&#1493;&#1499;&#1503;",
	"breeding_flyout_upgradeandmove": "&#1513;&#1491;&#1512;&#1490; &#1493;&#1492;&#1506;&#1489;&#1512; &#1500;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	"breeding_flyout_move": "&#1492;&#1506;&#1489;&#1512; &#1500;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	// custom adopt flyout
	"customadopt_flyout_title": "&#1488;&#1497;&#1502;&#1493;&#1509; &#1502;&#1497;&#1493;&#1495;&#1491;",
	"customadopt_flyout_name": "&#1513;&#1501;",
	"customadopt_flyout_image": "&#1514;&#1502;&#1493;&#1504;&#1492;",
	"customadopt_flyout_title": "&#1499;&#1493;&#1514;&#1512;&#1514;",
	"customadopt_flyout_bodytext": "&#1496;&#1511;&#1505;&#1496; &#1492;&#1490;&#1493;&#1507;",
	"customadopt_flyout_button": "&#1499;&#1508;&#1514;&#1493;&#1512;",
	"customadopt_flyout_postbutton": "&#1513;&#1500;&#1495; &#1488;&#1497;&#1502;&#1493;&#1509; &#1502;&#1497;&#1493;&#1495;&#1491;",
	"customadopt_flyout_editingnotadvised": "&#1506;&#1512;&#1497;&#1499;&#1514; &#1492;&#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1500;&#1502;&#1496;&#1492; &#1500;&#1488; &#1502;&#1493;&#1502;&#1500;&#1510;&#1514;!",
	// friend list
	"friendlist_addzoomate": "&#1492;&#1493;&#1505;&#1507; &#1495;&#1489;&#1512; &#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514;",
	"friendlist_visitzoo": "&#1489;&#1511;&#1512; &#1490;&#1503; &#1495;&#1497;&#1493;&#1514;",
	"friendlist_viewprofile": "&#1510;&#1508;&#1492; &#1489;&#1508;&#1512;&#1493;&#1508;&#1497;&#1500;",
	"friendlist_posttreasurechest": "&#1513;&#1500;&#1495; &#1514;&#1497;&#1489;&#1514; &#1488;&#1493;&#1510;&#1512;",
	"friendlist_postmysterychest": "&#1513;&#1500;&#1495; &#1488;&#1512;&#1490;&#1494; &#1502;&#1505;&#1514;&#1493;&#1512;&#1497;&#1503;",
	"friendlist_posthungryanimals": "&#1508;&#1512;&#1505;&#1501; &#1495;&#1497;&#1493;&#1514; &#1512;&#1506;&#1489;&#1493;&#1514;",
	"friendlist_sendvitamin": "&#1513;&#1500;&#1495; &#1493;&#1497;&#1496;&#1502;&#1497;&#1503;",
	"friendlist_sendgoldgreenhouse": "&#1513;&#1500;&#1495; &#1495;&#1502;&#1502;&#1514; &#1494;&#1492;&#1489;",
	// work queue
	"workqueue_starting": "&#1492;&#1495;&#1500; &#1514;&#1493;&#1512;",
	"workqueue_remaining": "&#1504;&#1513;&#1488;&#1512;",
	"workqueue_alreadystarted": "&#1492;&#1514;&#1493;&#1512; &#1499;&#1489;&#1512; &#1492;&#1514;&#1495;&#1497;&#1500;",
	"workqueue_stopped": "&#1492;&#1514;&#1493;&#1512; &#1492;&#1508;&#1505;&#1497;&#1511;",
	"workqueue_stopping": "&#1492;&#1508;&#1505;&#1511;&#1492; &#1500;&#1514;&#1493;&#1512;",
	"workqueue_alreadstopped": "&#1492;&#1514;&#1493;&#1512; &#1499;&#1489;&#1512; &#1492;&#1508;&#1505;&#1497;&#1511;",
	// 2010/12/09
	"animallist_flyout_generating": "... &#1497;&#1510;&#1497;&#1512;&#1514; &#1512;&#1513;&#1497;&#1502;&#1493;&#1514;",
	"animallist_flyout_havelist": "&#1512;&#1513;&#1497;&#1502;&#1514; &#1495;&#1497;&#1493;&#1514; &#1513;&#1497;&#1513;",
	"animallist_flyout_havenotlist": "&#1512;&#1513;&#1497;&#1502;&#1514; &#1495;&#1497;&#1493;&#1514; &#1513;&#1488;&#1497;&#1503;",
	"animallist_flyout_note": ".&#1492;&#1506;&#1512;&#1492;: &#1495;&#1497;&#1493;&#1514; &#1512;&#1489;&#1493;&#1514; &#1492;&#1495;&#1505;&#1512;&#1493;&#1514; &#1500;&#1498; &#1506;&#1513;&#1493;&#1497;&#1497;&#1501; &#1500;&#1492;&#1497;&#1493;&#1514; &#1502;&#1493;&#1508;&#1505;&#1511;&#1493;&#1514; &#1488;&#1493; &#1500;&#1488; &#1502;&#1508;&#1493;&#1512;&#1505;&#1502;&#1493;&#1514;",
	// status
	"status_buying_buying": "&#1511;&#1504;&#1497;&#1514;",
	"status_buying_bought": "&#1511;&#1504;&#1492;",
	"status_buying_ofitem": "&#1508;&#1512;&#1497;&#1496;",
	"status_buying_upgradingitem": "&#1513;&#1491;&#1512;&#1493;&#1490; &#1508;&#1512;&#1497;&#1496;",
	"status_buying_upgradeditem": "&#1508;&#1512;&#1497;&#1496; &#1502;&#1513;&#1493;&#1491;&#1512;&#1490;",
	"status_wlfitemid_specify": "wlfItemId&#1500;&#1508;&#1512;&#1496; ",
	"status_friendlist_loaded": "...&#1512;&#1513;&#1497;&#1502;&#1514; &#1495;&#1489;&#1512;&#1497;&#1501; &#1504;&#1496;&#1506;&#1504;&#1492;",
	"status_friendlist_loading": "...&#1496;&#1493;&#1506;&#1503; &#1488;&#1514; &#1512;&#1513;&#1497;&#1502;&#1514; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501; &#1513;&#1500;&#1498;",
	"status_friendlist_found": "&#1504;&#1502;&#1510;&#1488;&#1493;",
	"status_friendlist_friends": "&#1495;&#1489;&#1512;&#1497;&#1501;",
	"status_zoo_notloaded": "...&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1500;&#1488; &#1496;&#1506;&#1493;&#1503;",
	"status_zoo_loadedforfriend": "&#1496;&#1493;&#1506;&#1503; &#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500; &#1495;&#1489;&#1512;",
	"status_feeding_waitingfor": "&#1492;&#1502;&#1514;&#1504;&#1492; &#1500;&#1492;&#1488;&#1499;&#1497;&#1500; &#1513;&#1493;&#1489;",
	"status_feeding_fed": "&#1492;&#1488;&#1499;&#1497;&#1500;",
	"status_feeding_collected": "&#1488;&#1505;&#1507;",
	"status_feeding_withtreat": "&#1506;&#1501; &#1502;&#1496;&#1506;&#1502;&#1497;&#1501;",
	"status_feeding_animalswithtreat": "&#1495;&#1497;&#1493;&#1514; &#1506;&#1501; &#1502;&#1496;&#1506;&#1502;&#1497;&#1501;",
	"status_feeding_noanimalsforcumulative": "&#1488;&#1497;&#1503; &#1495;&#1497;&#1493;&#1514; &#1506;&#1489;&#1493;&#1512; &#1513;&#1497;&#1512;&#1493;&#1514; &#1492;&#1492;&#1494;&#1504;&#1492; &#1492;&#1502;&#1510;&#1496;&#1489;&#1512;&#1514;",
	"status_training_training": "&#1488;&#1497;&#1502;&#1493;&#1503;",
	"status_training_everyfiveminutes": "... &#1499;&#1500; 5 &#1491;&#1511;&#1493;&#1514;",
	"status_training_trained": "&#1502;&#1488;&#1493;&#1502;&#1503;",
	"status_gate_collectedxp": "&#1502;&#1492;&#1513;&#1506;&#1512; &#1489;&#1488;&#1497; XP &#1504;&#1488;&#1505;&#1508;&#1493;",
	"status_booth_collecting": "...&#1488;&#1497;&#1505;&#1493;&#1507; &#1499;&#1505;&#1507; &#1502;&#1492;&#1511;&#1493;&#1508;&#1492;",
	"status_booth_collected": "&#1504;&#1488;&#1505;&#1507; &#1499;&#1505;&#1507; &#1502;&#1492;&#1511;&#1493;&#1508;&#1492;",
	"status_visiting_visited": "&#1504;&#1506;&#1512;&#1498; &#1489;&#1497;&#1511;&#1493;&#1512;",
	"status_visiting_zooandcollected": "&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1493;&#1504;&#1488;&#1505;&#1507;",
	"status_visiting_gettingreward": "&#1502;&#1511;&#1489;&#1500; &#1490;&#1502;&#1493;&#1500; &#1506;&#1500; &#1489;&#1497;&#1511;&#1493;&#1512; &#1489;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1506;&#1489;&#1493;&#1512;",
	"status_visiting_visitedandcollected": "&#1489;&#1497;&#1511;&#1512; &#1489;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1493;&#1488;&#1505;&#1507;",
	"status_visiting_collected": "&#1504;&#1488;&#1505;&#1507;",
	"status_visiting_visitingall": "&#1489;&#1497;&#1511;&#1493;&#1512; &#1513;&#1500; &#1499;&#1493;&#1500;&#1501;",
	"status_visiting_ofyourfriendszoos": "...&#1490;&#1504;&#1497; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500; &#1492;&#1495;&#1489;&#1512;&#1497;&#1501; &#1513;&#1500;&#1498;",
	"status_shaking_shakingitem": "&#1504;&#1506;&#1504;&#1493;&#1506; &#1508;&#1512;&#1497;&#1496;",
	"status_shaking_oftype": "&#1513;&#1500; &#1505;&#1493;&#1490;",
	"status_shaking_forfriend": "&#1506;&#1489;&#1493;&#1512; &#1495;&#1489;&#1512;",
	"status_shaking_notshakingitem": "&#1502;&#1504;&#1506;&#1504;&#1506; &#1508;&#1512;&#1497;&#1496;",
	"status_shaking_shaking": "&#1502;&#1504;&#1506;&#1504;&#1506;",
	"status_shaking_for": "&#1506;&#1489;&#1493;&#1512;",
	"status_shaking_shookitems": "&#1504;&#1506;&#1504;&#1506; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501;...",
	"status_shaking_shookitemsfailed": "&#1504;&#1499;&#1513;&#1500; &#1489;&#1504;&#1506;&#1504;&#1493;&#1506; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501;...",
	"status_island_loadingisland": "&#1492;&#1488;&#1497; &#1496;&#1493;&#1506;&#1503;",
	"status_island_for": "&#1506;&#1489;&#1493;&#1512;",
	"status_inventory_loading": "&#1496;&#1493;&#1506;&#1503; &#1502;&#1500;&#1488;&#1497; &#1506;&#1489;&#1493;&#1512;",
	"status_inventory_queuing": "&#1502;&#1502;&#1514;&#1497;&#1503; &#1489;&#1514;&#1493;&#1512;",
	"status_inventory_forshaking": "&#1500;&#1504;&#1506;&#1504;&#1493;&#1506;...",
	"status_moving_moving": "&#1514;&#1494;&#1493;&#1494;&#1492;",
	"status_moving_toinventory": "&#1500;&#1502;&#1500;&#1488;&#1497;",
	"status_moving_toisland": "&#1500;&#1488;&#1497;",
	// Items
	"shop_listempty": "&#1512;&#1513;&#1497;&#1502;&#1492; &#1512;&#1497;&#1511;&#1492;",
	// Spawning
	"gifts_giftingitem": "&#1502;&#1514;&#1503; &#1508;&#1512;&#1497;&#1496;",
	"gifts_spawning": "&#1513;&#1499;&#1508;&#1493;&#1500;",
	"gifts_trophy": "&#1490;&#1489;&#1497;&#1506;",
	"gifts_mission": "&#1502;&#1513;&#1497;&#1502;&#1492;",
	// Mega spawn
	"megaspawn_flyout_gifts": "&#1502;&#1514;&#1504;&#1493;&#1514;",
	"megaspawn_flyout_missions": "&#1502;&#1513;&#1497;&#1502;&#1493;&#1514;",
	// generic
	"completion": "&#1505;&#1497;&#1493;&#1501;",
	// 2010/12/10
	"megaspawn_flyout_christmas": "&#1495;&#1490; &#1492;&#1502;&#1493;&#1500;&#1491;",
	// 2010/12/13
	"confirm_moving_tostorage": "&#1488;&#1513;&#1512; &#1492;&#1506;&#1489;&#1512;&#1514; &#1499;&#1500; &#1492;&#1502;&#1500;&#1488;&#1497;",
	"confirm_moving_tostorage2": "&#1513;&#1500;&#1498; &#1500;&#1502;&#1495;&#1505;&#1503;?",
	"status_moving_item": "&#1492;&#1506;&#1489;&#1512;&#1514; &#1508;&#1512;&#1497;&#1496;",
	"status_moving_item2": "&#1500;&#1502;&#1495;&#1505;&#1503;...",
	"confirm_unlock_11thisland": "&#1500;&#1504;&#1505;&#1493;&#1514; &#1500;&#1513;&#1495;&#1512;&#1512; &#1488;&#1514; &#1488;&#1497; 11? (&#1506;&#1493;&#1489;&#1491; &#1512;&#1511; &#1488;&#1501; &#1497;&#1513; &#1500;&#1498; &#1489;&#1491;&#1497;&#1493;&#1511; &#1506;&#1513;&#1512;)",
	"status_unlock_11thisland": "&#1513;&#1495;&#1512;&#1493;&#1512; &#1488;&#1497; 11",
	// 2010/12/15
	"christmas_flyout_title": "WLP&#1495;&#1490; &#1492;&#1502;&#1493;&#1500;&#1491; - &#1502;&#1506;&#1512;&#1489;&#1493;&#1500;&#1514; &#1488;&#1493;&#1489;&#1491;&#1503; ",
	"christmas_flyout_noanimalintraining": "&#1488;&#1497;&#1503; &#1495;&#1497;&#1493;&#1514; &#1489;&#1488;&#1497;&#1502;&#1493;&#1503;. ?WLP&#1500;&#1488;&#1502;&#1503; &#1488;&#1514; &#1492;&#1495;&#1497;&#1492; &#1506;&#1489;&#1493;&#1512; ",
	"christmas_flyout_animalintraining": "&#1495;&#1497;&#1492; &#1499;&#1506;&#1514; &#1489;&#1488;&#1497;&#1502;&#1493;&#1503;",
	"christmas_flyout_items_intro": "&#1508;&#1512;&#1497;&#1496;&#1497; &#1495;&#1490; &#1492;&#1502;&#1493;&#1500;&#1491;",
	"christmas_flyout_gointozootoclaim": "&#1499;&#1504;&#1505; &#1500;&#1490;&#1503; &#1492;&#1495;&#1497;&#1493;&#1514; &#1513;&#1500;&#1498; (&#1512;&#1506;&#1504;&#1503;) &#1499;&#1491;&#1497; &#1500;&#1511;&#1489;&#1500; &#1488;&#1514; &#1492;&#1495;&#1497;&#1492; &#1513;&#1500;&#1498;",
	"christmas_flyout_animalisready": "&#1492;&#1495;&#1497;&#1492; &#1502;&#1493;&#1499;&#1504;&#1492;!",
	// generic
	"error": "&#1513;&#1490;&#1497;&#1488;&#1492;",
	"buy_more_for_wlp": "?WLP&#1500;&#1511;&#1504;&#1493;&#1514; &#1506;&#1493;&#1491; &#1506;&#1489;&#1493;&#1512; ",
	"buy_more_for_wlp_prompt": "&#1492;&#1488;&#1501; &#1488;&#1514;&#1492; &#1512;&#1493;&#1510;&#1492; &#1500;&#1511;&#1504;&#1493;&#1514; &#1488;&#1514; &#1492;&#1508;&#1512;&#1497;&#1496; &#1492;&#1494;&#1492; &#1513;&#1493;&#1489;?WLP&#1506;&#1489;&#1493;&#1512; ",
	"buy_more_for_wlp_prompt_specify_amount": "(&#1510;&#1497;&#1497;&#1503; &#1502;&#1505;&#1508;&#1512; &#1508;&#1512;&#1497;&#1496;&#1497;&#1501; &#1500;&#1512;&#1499;&#1497;&#1513;&#1492;)\n ?WLP&#1492;&#1488;&#1501; &#1488;&#1514;&#1492; &#1512;&#1493;&#1510;&#1492; &#1500;&#1511;&#1504;&#1493;&#1514; &#1488;&#1514; &#1492;&#1508;&#1512;&#1497;&#1496; &#1492;&#1494;&#1492; &#1513;&#1493;&#1489; &#1506;&#1489;&#1493;&#1512; "
};

// Croatian translation by Daniela Matas & Alexandra Brkusanin
zdlang['hr'] = {
	// generic
	"title": "Asistent za Zoo World",
	"show": "prika&#382;i?",
	"hide": "sakrij",
	"shop": "Trgovina",
	"reload": "Ucitaj ponovno",
	"language": "Jezik",
	"en": "Engleski",
	"es": "&#352;panjolski",
	"de": "Njema&#269;ki",
	"rs": "Srpski",
	"ru": "Ruski",
	"cn": "Kineski",
	"jp": "Japanski",
	"it": "Talijanski",
	"pt": "Portugalski",
	"in": "Indonezijski",
	"fr": "Francuski",
	"he": "Hebrejski",
	"hr": "Hrvatski",
	"pl": "Poljski",
	"uk": "Ukrajinski",
	// tabs
	"tab_about": "Dobrodo&#353;li u...",
	"tab_myzoo": "Moj Zoo",
	"tab_items": "Stavke ",
	"tab_spawning": "Obajviti na stranicu",
	"tab_friends": "Prijatelji",
	"tab_advanced": "Napredno",
	// footer"footer_status": "Status",
	"footer_friends": "Prijatelji",
	"footer_zoo": "Zoo",
	"footer_results": "AJAX rezultati",
	"footer_clear_log": "O&#269;isti Log",
	// about
	"about_title": "O asistentu ",
	"about_body_1": "Ovo je alat za korisne trikove u igri ZOO World. Mo&#382;e se smatrati kao varanje i hakiranje, pa rezultat ne mo&#382;e biti zagarantiran i podr&#382;an. Koristite ga na vlastitu odgovornost.",
	"about_body_2": "Postoje dvije vrste ljudi na svijetu, oni koji znaju &#269;itati i oni koji su ve&#263; kliknuli na sve ostalo.",
	"about_body_3": "Ako si i dalje tu onda obratiti paÃ¯Â¿Â½nju na ovo &#353;to pi&#353;em. Jednom sam morao ukloniti ovu skriptu radi drame koje se de&#353;avala unutar zajednice korisnika ZOO World-a. Idu&#263;i put se mo&#382;da ne&#263;u ni vratiti! Budite obzirni, diskretni i nemojte misliti da ne&#263;ete biti ka&#382;njeni za varanje.",
	"about_body_4": " Radim gre&#353;ke, stvari se mijenjaju u ZOO-u, stvari se mijenjaju na Facebook-u, skripe prestanu raditi. Ljubazna napomena mi mo&#382;e re&#263;i ne&#353;to &#353;to ne znam. Tisu&#263;u prigovora ne mo&#382;e u&#269;initi ni&#353;ta dobro.",
	"about_body_5": " U&#382;ivajte u mojim skriptama i zabavite se! Ujedno pridru&#382;ite se na&#353;oj grupi.",
	"about_body_group": "Grupa",
	// My Zoo
	"myzoo_feeding_title": "Hranjenje",
	"myzoo_feeding_feed": "Nahrani",
	"myzoo_feeding_collect": "Pokupi",
	"myzoo_feeding_day": "Dan",
	"myzoo_feeding_days": "Dani",
	"myzoo_gates_title": "Kapije",
	"myzoo_gates_collect_all": "Pokupi XP sa svih kapija",
	"myzoo_gates_collect_booth_15": "Pokupi novac sa blagajne svakih 15 minuta",
	"myzoo_training_title": "Treniranje",
	"myzoo_treasure_title": "Lovac na blago (Potreban je skuplja&#269; blaga)",
	"myzoo_treasure_visit_all": "Posjeti sve prijatelje",
	"myzoo_treasure_start_at": "Po&#269;ni? od...",
	"myzoo_treasure_continue_from": "Nastavi od...",
	"myzoo_kiosk_title": "Kiosci",
	"myzoo_kiosk_collect_all": "Pokupi sa svih kioska",
	"myzoo_shake_title": "Tresi stabla, ukrasno &#382;bunje, skulpture, gljive, predstave, vrt ru&#382;a , itd.",
	"myzoo_shake_shake_all": "Protresi sve otoke",
	"myzoo_move_title": "Ukloni sve stvari sa otoka u spremnik",
	"myzoo_fill_title": " Popuni staklenike u spremniku",
	"myzoo_auto_title": "Automatski ",
	"myzoo_auto_intro": "Pokupi XP sa svih kapija, pokupi novac sa blagajne, nahrani sve &#382;ivotinje sa trenutnim postavkama, protresi sva stabla, posjeti sve prijatelje...",
	"myzoo_lists_title": "Lista",
	"myzoo_lists_intro": "Izradi listu imam/nemam svih &#382;ivotinja.",
	"myzoo_breeding_title": "Razmno&#382;avanje",
	"myzoo_breeding_intro": "Upravljanje razmno&#382;avanjem",
	// Items
	"shop_title": "Stavke",
	"shop_intro": "Ovo je spisak svih poznatih stavki unutar ZOO WORLD-a. Iako postoji veza za kupovinu, mnoge stavke se ne mogu kupiti iz mnogo razloga (nije jos otklju&#269;ano, neobjavljeno, van prodaje, itd).<em>Imajte na umu ako je vas profil povezan sa Pay Pal-om, kao da ste ve&#263; kupovali stavke sa pravim novcem, bice vam napla&#269;eno bez upozorenja.</em>",
	"shop_loading": "Velika trgovina svega trenutno se u&#269;itava? ...",
	"shop_buy_id": "kupi stavke putem ID",
	"shop_buy_id_intro": "(koristiti kada znate ID iako trgovina nije a&#382;urirana).",
	"shop_upgrade_id": "nadogradite svaku &#382;ivotinju putem ID",
	"shop_upgrade_id_intro": "(koristiti kada znate ID iako trgovina nije a&#382;urirana).",
	"shop_repeat_buy_id": "ponoviti kupnju bilo koje stavke putem ID",
	"shop_repeat_buy_id_intro": "(korisno za kupnju odre&#273;ene stavke putem ID svakih 10 sekundi, korisno za one koji poklanjaju &#382;ivotinje na visokim levelima).",
	"shop_buy_fbc_intro": "Kupi sa FBC",
	"shop_buy_by_wlf_item_id": "kupuj putem WLFstavke ID",
	"shop_paypal_howto": "Kako OTKAZATI va&#353; \"Sporazum - kupi jednim klikom\" izme&#273;u RockYou Inc i PayPal nakon kupovine WLP ili Ultra Rare zivotinje.",
	// Spawning
	"gifts_title": "Objavi na stranicu:",
	"gifts_gifts_title": "Pokloni",
	"gifts_level_title": "Novi nivo",
	"gifts_level_intro": "Ukucaj &#382;eljeni nivo",
	"gifts_daily_title": "Podijeli dnevne poklone",
	"gifts_trophy_title": "Trofeji",
	"gifts_juice_title": "Sok",
	"gifts_flowerpots_title": "Cvijetne lon&#269;anice",
	"gifts_halloween_title": "No&#263; vje&#353;tica",
	"gifts_halloween_ask_sewing": "Pitaj za pomo&#263; pri &#353;ivenja",
	"gifts_fieldtrip_title": "Izlet",
	"gifts_fieldtrip_anything_by_id": "Bilo &#353;ta putem ID",
	"gifts_treattrophy_title": "Trofej poslastice",
	"gifts_buildables_title": "Gra&#273;evine",
	"gifts_missions_title": "Misije",
	"gifts_missions_start": "Pokreni",
	"gifts_missions_republish": "Postavi ponovno",
	"gifts_missions_complete": "Kompletirano",
	"gifts_rosegarden_title": "Vrt ru&#382;a ",
	"gifts_rosegarden_share_upgrade": "Objavj nadogradnju vrt ru&#382;a na zidu", "gifts_rosegarden_ask_rose": "upitaj za ru&#382;u na zidu",
	"gifts_rosegarden_share_rose": "objavi ru&#382;u na zidu",
	"gifts_goldenegg_title": "Zlatno jaje",
	"gifts_icecream_title": "Sladoled",
	"gifts_greenhouse_title": "Staklenik",
	"gifts_megaspawn_title": "Mega objave na stranici",
	// Visiting
	"visiting_resume_intro": "(nastavi na odre&#273;enom zolo&#353;kom vrtu ako se proces sru&#353;i)",
	"visiting_go_outside": "Imajte u vidu da u zavisnosti koliko prijatelja imate,to mo&#382;e potrajati dugo! Iza&#273;ite napolje i igrajte :-)",
	"visiting_load_friends": "Ucitavanje va&#353;e liste prijatelja...",
	// Advanced
	"advanced_title": "Napredno",
	"advanced_intro": "Ako niste sigurno &#353;ta je ovo, onda ovo nije za Vas!",
	"advanced_detailedlogging_title": "Detaljno u&#269;itavanje",
	"advanced_friends_title": "Prijatelji",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Zoo veli&#269;ina ekrana",
	"advanced_cookies_title": "Kola&#269;i&#263;i",
	"advanced_workqueue_title": "Radnje na &#269;ekanju",
	"advanced_play_title": "Igraj",
	"advanced_alternateaccess_title": "Alternativni ulaz",
	"advanced_tryto_title": "Poku&#353;aj da",
	"advanced_goldeninviter_title": "Zlatna pozivnica",
	"advanced_punkd_title": "Zeznut si",
	"advanced_javacript_javacript": "Javaskript",
	"advanced_javacript_evaluate": "Izracunaj vrijednost",
	"advanced_javacript_ajaxdelay": "AJAX odgoda (milisekunde)",
	// generic
	"show": "poka&#382;i",
	"hide": "Sakrij",
	"shop": "Trgovina",
	"reload": "u&#269;itaj ponovno",
	"island": "otok",
	"islands": "otoci",
	"minute": "minuta",
	"minutes": "minute",
	"hour": "sat",
	"hours": "sati",
	"day": "dan",
	"days": "dani",
	"once": "jednom",
	"repeat": "ponovi",
	"to_friend": "ka prijatelju",
	"specify_user_id": "odre&#273;eni korisni&#269;ki ID",
	"specific_user": "odredi korisnika",
	"specify_user_id_prompt": "Odredi korisni&#269;ki Id:\n(odredi ovaj ID sa njihovih profila)",
	"specify_animal_id": "Odredi &#382;ivotinjski ID",
	"specify_animal_id_prompt": "Odredi &#382;ivotinjskiId:\n(odredi ovaj ID sa kupovne liste)",
	"send_to_feed": "objavi na zid",
	"ask_on_feed": "pitaj na zidu",
	"ask_for": "pitaj za",
	"share": "podijeli",
	"share_roses": "podijeli'ru&#382;e' ",
	"post": "postavi",
	"share_completion": "objavi zavr&#353;eno",
	"completed": "zavr&#353;eno",
	"help": "pomo&#263;",
	"easy": "lako",
	"medium": "srednje",
	"hard": "te&#353;ko",
	"invite": "pozovi",
	"hatched": "izlegnuto",
	"hard": "te&#353;ko",
	"send_as_request": "po&#353;alji kao zahtjev",
	"ask_as_request": "pitaj kao zahtjev",
	"update_button": "dugme za a&#382;uriranje",
	// end
	"button_go": "Pokreni",
	"start": "Pokreni?",
	"republish": "Ponovno obajvi",
	"complete": "Kompletirano",
	// 2010/12/08
	// generic
	"post_trade": "Objavi razmjenu",
	"update": "a&#382;urirati",
	"loaded": "u&#269;itati",
	"main_zooremoved": "Zoo uklonjen",
	"main_clicktogetback": "Klikni da se vrati&#353; natrag",
	"executing": "izvr&#353;avanje",
	"specify_item_id_prompt": "Odredi od stavkeId:\n(odredite ovaj ID kroz listu trgovine)",
	"close": "zatvori",
	"buy": "kupi",
	"gift": "pokloni",
	"breed": "razmno&#382;avaj",
	"upgrade": "nadogradi",
	"shareonwall": "objavi na zidu",
	"refresh": "osvje&#382;i?",
	"project": "projekt",
	// Items
	"shop_flyout_categories": "Kategorije",
	"shop_flyout_rarity": "Rijetkost",
	"shop_flyout_breedingtime": "Vrijeme razmno&#382;avanja",
	"shop_flyout_purchasefor": "Kupiti za",
	"shop_flyout_actualdollars": "pravi novac",
	"shop_flyout_fbc": "Facebook Krediti",
	"shop_flyout_wlp": "Wild Life Bodovi",
	"shop_flyout_images_title": "Slike",
	"shop_flyout_images_large": "veliko",
	"shop_flyout_images_small": "malo",
	"shop_flyout_images_baby": "beba",
	"shop_flyout_actions_title": "Akcije",
	"shop_flyout_actions_buylots_prompt": "Broj stavki za kupiti? (za &#382;ivotinje, mora biti manji od iznosa za nadogradnju, za sve ostalo maksimalan iznos je 999)",
	"shop_flyout_actions_buylots": "kupi mnogo",
	"shop_flyout_actions_postadopt": "postaviti usvajanje",
	"shop_flyout_actions_customadopt": "usvajanje prilagodjeno-izmjenjeno",
	"shop_flyout_actions_thanksgivingwlpupgrade": "pokusaj nadograditi ultra za 1 WLP",
	"shop_flyout_actions_findinzoo": "prona&#273;i zoo",
	"shop_flyout_actions_upgradeforwrenches": "nadogradnja za &#353;tandove",
	"shop_flyout_actions_cantbuy": "ne mo&#382;e se kupiti...",
	"shop_flyout_actions_trytobuy": "Poku&#353;aj ipak kupiti?",
	"shop_flyout_actions_numitemstobuy": "Broj stavki za kupiti? (za &#382;ivotinje, mora biti manji od iznosa za nadogradnju, za ostalo maksimalan iznos je 999)",
	"shop_flyout_actions_movealltostorage": "Ukloni sve u spremnik",
	"shop_flyout_actions_moneywarning": "upozorenje - pravi novac",
	"shop_flyout_actions_facts": "&#268;injenice",
	"shop_flyout_actions_training": "Treniranje",
	// advanced
	"advanced_friends_loadlist": "U&#269;itaj listu",
	"advanced_friends_deduplicatelist": "Uduplaj listu",
	"advanced_zoo_loadzoo": "U&#269;itati va&#353; Zoo",
	"advanced_zoo_loadanyzoo": "U&#269;itaj bilo koji Zoo",
	"advanced_zoo_showzoo": "poka&#382;i Zoo",
	"advanced_zoo_specifyisland": "Odredi ID otoka (0-10):",
	"advanced_zoo_loadyourisland": "u&#269;itati? va&#353; otok",
	"advanced_zoodisplay_normal": "normalno",
	"advanced_zoodisplay_big": "velik",
	"advanced_cookies_cookies": "kola&#269;i&#263;i",
	"advanced_cookies_show": "poka&#382;i",
	"advanced_cookies_delete": "obri&#353;i",
	"advanced_cookies_set": "komplet",
	"advanced_workqueue_start": "start",
	"advanced_workqueue_stop": "stani",
	"advanced_workqueue_itemsinthequeue": "stavke na cekanju.",
	"advanced_workqueue_showsize": "poka&#382;i veli&#269;inu",
	"advanced_workqueue_clear": "o&#269;isti",
	"advanced_alternateaccess_unframe": "Ukloni okvir ZOO-a",
	"advanced_alternateaccess_workaround": "Zaobilazna verzija Zoo-a (Lagana)",
	"advanced_tryto_forceadopt": "Prisili Usvajanje",
	"advanced_tryto_payday": "Klikni za novac",
	"advanced_tryto_unlock11thisland": "otklju&#269;ati 11-ti otok",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega objave",
	"megaspawn_flyout_projects": "Projekti",
	"megaspawn_flyout_multiplenotes": "Vi&#353;e bilje&#353;ki",
	// animal list flyout
	"animallist_flyout_title": "Lista &#382;ivotinja",
	"animallist_flyout_intro": "Kopiraj i pusti ovu listu za kori&#353;&#269;enje",
	// breeding flyout
	"breeding_flyout_title": "Lista razmno&#382;avanja",
	"breeding_flyout_breeding": "razmno&#382;avanje",
	"breeding_flyout_innest": "u leglu",
	"breeding_flyout_nomorenests": "Nema vi&#353;e slobodnih legla, oprosti!",
	"breeding_flyout_nobabies": "Nema beba u leglima.",
	"breeding_flyout_heal": "lije&#269;iti",
	"breeding_flyout_feed": "nahraniti",
	"breeding_flyout_notready": "nije jo&#353; spremno",
	"breeding_flyout_upgradeandmove": "nadogradi i premjesti u zoo",
	"breeding_flyout_move": "premjesti u zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Usvajanje po narudzbi",
	"customadopt_flyout_name": "ime",
	"customadopt_flyout_image": "slika",
	"customadopt_flyout_title": "naslov",
	"customadopt_flyout_bodytext": "tekst tijela",
	"customadopt_flyout_button": "dugme",
	"customadopt_flyout_postbutton": "Postaviti usvajanje po narudzbi",
	"customadopt_flyout_editingnotadvised": "Doraditi stavke ispod nije preporu&#269;eno!",
	// friend list
	"friendlist_addzoomate": "dodaj zoo prijatelja",
	"friendlist_visitzoo": "posjeti zoo",
	"friendlist_viewprofile": "pogledaj profil",
	"friendlist_posttreasurechest": "objavi kovceg blaga",
	"friendlist_postmysterychest": "objavi zagonetno blago",
	"friendlist_posthungryanimals": "objavi gladne &#382;ivotinje",
	"friendlist_sendvitamin": "objavi vitamin",
	"friendlist_sendgoldgreenhouse": "po&#353;alji zlatnu staklenik",
	// work queue
	"workqueue_starting": "Pokreni ponovno",
	"workqueue_remaining": "preostalo",
	"workqueue_alreadystarted": "ve&#263; pokrenuto",
	"workqueue_stopped": "Zaustavljen rad",
	"workqueue_stopping": "Zaustavlja se rad",
	"workqueue_alreadstopped": "Rad ve&#263; zaustavljen",
	// 2010/12/09
	"animallist_flyout_generating": "Generranje liste...",
	"animallist_flyout_havelist": "&#381;ivotinja koju imam",
	"animallist_flyout_havenotlist": "&#381;ivotinja koju nemam",
	"animallist_flyout_note": "Napomena: mnoge &#382;ivotinje koje vam nedostaju su mo&#382; limitirane ili nisu jo&#353; objavljene",
	// status
	"status_buying_buying": "kupovina",
	"status_buying_bought": "kupljeno",
	"status_buying_ofitem": "od stavki",
	"status_buying_upgradingitem": "nadograditi stavku",
	"status_buying_upgradeditem": "nadogra&#273;ena stavka",
	"status_wlfitemid_specify": "Navesti wlfItemId",
	"status_friendlist_loaded": "Lista prijatelja je ve&#263; u&#269;itana ...",
	"status_friendlist_loading": "U&#269;itavanje liste va&#353;ih prijatelja...",
	"status_friendlist_found": "Pronadjeno",
	"status_friendlist_friends": "prijatelji",
	"status_zoo_notloaded": "Zoo nije u&#269;itan...",
	"status_zoo_loadedforfriend": "U&#269;itavanje Zoo-a za prijatelja",
	"status_feeding_waitingfor": "&#268;ekanje da se nahrani ponovo za ",
	"status_feeding_fed": "nahrani",
	"status_feeding_collected": "pokupljeno",
	"status_feeding_withtreat": "po&#269;astiti sa",
	"status_feeding_animalswithtreat": "po&#269;astiti &#382;ivotinje sa",
	"status_feeding_noanimalsforcumulative": "Nema &#382;ivotinje sa kumulativnog servisa za hranjenje",
	"status_training_training": "Treniranje",
	"status_training_everyfiveminutes": "svakih pet minuta...",
	"status_training_trained": "Istrenirano",
	"status_gate_collectedxp": "Pokupiti XP sa kapije sa otoka ",
	"status_booth_collecting": "Sakupljati novac sa blagajne na kapiji...",
	"status_booth_collected": "Sakupljen novac sa blagajne na kapiji...",
	"status_visiting_visited": "Posje&#269;eno",
	"status_visiting_zooandcollected": "Posjecen zoo i sakupljeno",
	"status_visiting_gettingreward": "Sakuplja novac za posjetu ZOO-a za",
	"status_visiting_visitedandcollected": "Posjetio zoo i pokupio",
	"status_visiting_collected": "Pokupljeno",
	"status_visiting_visitingall": "Posetiti sve",
	"status_visiting_ofyourfriendszoos": "od va&#353;ih prijatelja Zoo-vi...",
	"status_shaking_shakingitem": "Protresti stavke",
	"status_shaking_oftype": "od tipa",
	"status_shaking_forfriend": "za prijatelja",
	"status_shaking_notshakingitem": "Protresti stavku",
	"status_shaking_shaking": "Tresti",
	"status_shaking_for": "za",
	"status_shaking_shookitems": "protresao stavke...",
	"status_shaking_shookitemsfailed": "Nije uspjelo protresti stavke...",
	"status_island_loadingisland": "U&#269;itati otok",
	"status_island_for": "za",
	"status_inventory_loading": "U&#269;itati inventar za ",
	"status_inventory_queuing": "&#268;ekanje",
	"status_inventory_forshaking": "za protresti...",
	"status_moving_moving": "Uklanjanje",
	"status_moving_toinventory": "Uklanjenje u spremnik",
	"status_moving_toisland": "na otok",
	// Items
	"shop_listempty": "Lista prazna",
	// Spawning
	"gifts_giftingitem": "Pokloniti stavku",
	"gifts_spawning": "Konstantno objavljivanje poklona",
	"gifts_trophy": "trofej",
	"gifts_mission": "misije",
	// Mega spawn
	"megaspawn_flyout_gifts": "Pokloni",
	"megaspawn_flyout_missions": "Misije",
	// generic
	"completion": "zavr&#353;etak"
};

// Portuguese translation by Anna Bento
zdlang['pt'] = {
	"title": "Assistente do Zoo World",
	// Languages
	"language": "Idioma",
	"en": "Ingl&#234;s",
	"es": "Espanhol",
	"rs": "Servio",
	"de": "Alem&#227;o",
	"ru": "Russo",
	"cn": "Chin&#234;s",
	"jp": "Japon&#234;s",
	"it": "Italiano",
	"pt": "Portugu&#234;s",
	"fr": "Franc&#234;s",
	"id": "Indonesio",
	"he": "Hebreu",
	"hr": "Croata",
	// tabs
	"tab_about": "Sobre",
	"tab_myzoo": "Meu Zoo",
	"tab_items": "Items",
	"tab_spawning": "Produ&#231;&#227;o Massiva",
	"tab_friends": "Amigos",
	"tab_advanced": "Avan&#231;adas",
	// footer
	"footer_status": "Estado",
	"footer_friends": "Amigos",
	"footer_zoo": "Zoo",
	"footer_results": "Resultados AJAX",
	"footer_clear_log": "Limpar Registo",
	// About
	"about_title": "Sobre",
	"about_body_1": "Esta ferramenta &#233; utilizada para reproduzir truques sofisticados no Zoo World. Os seus resultados podem ser considerados batota ou pirataria e n&#227;o s&#227;o apoiados nem garantidos. Utilize por sua pr&#243;pria conta e risco!",
	"about_body_2": "Existem dois tipos de pessoas neste mundo: Aquelas que sabem ler e aquelas que j&#225; clicaram noutro s&#237;tio qualquer.",
	"about_body_3": "Se ainda est&#225; aqui ent&#227;o talvez seja sinal que presta aten&#231;&#227;o ao que escrevo. Tive que remover estes scripts devido ao drama causado dentro da comunidade do Zoo World. Para a pr&#243;xima talvez n&#227;o volte. Seja sensato, discreto e n&#227;o pense que n&#227;o &#233; penalizado por fazer batota.",
	"about_body_4": "Eu cometo erros, as coisas mudam no Zoo assim como no Facebook, e os scripts deixam de funcionar. Uma nota simp&#225;tica talvez me diga algo que eu n&#227;o saiba. Cem lam&#250;rias n&#227;o v&#227;o adiantar absolutamente nada.",
	"about_body_5": "Curte os meus scripts e divirte-te! Junta-te tamb&#233;m ao nosso",
	"about_body_group": "Grupo",
	// My Zoo
	"myzoo_feeding_title": "Alimenta&#231;&#227;o",
	"myzoo_feeding_feed": "alimentar",
	"myzoo_feeding_collect": "colh&#234;r",
	"myzoo_feeding_day": "dia",
	"myzoo_feeding_days": "dias",
	"myzoo_gates_title": "Port&#245;es",
	"myzoo_gates_collect_all": "Recolher XP de todos os Port&#245;es",
	"myzoo_gates_collect_booth_15": "Recolher dinheiro da bilheteira a cada 15 minutos",
	"myzoo_training_title": "Treino",
	"myzoo_treasure_title": "Ca&#231;a ao Tesouro (requer ca&#231;ador de tesouros)",
	"myzoo_treasure_visit_all": "todos os Zoos amigos",
	"myzoo_treasure_start_at": "iniciar no Zoo",
	"myzoo_treasure_continue_from": "continuar desde...",
	"myzoo_kiosk_title": "Quiosques",
	"myzoo_kiosk_collect_all": "recolher todos os Quiosques",
	"myzoo_shake_title": "Abanar &#225;rvores, topiarias, esculturas, cogumelos, shows, rosal, etc",
	"myzoo_shake_shake_all": "abanar todas as Ilhas",
	"myzoo_move_title": "Mover todos os items de uma ilha para armaz&#233;m",
	"myzoo_fill_title": "Encher Estufas a partir do invent&#225;rio",
	"myzoo_auto_title": "Autom&#225;tico",
	"myzoo_auto_intro": "Recolher XP de todos os port&#245;es, dinheiro das bilheteiras, alimentar todos os animais com actuais configura&#231;&#245;es, abanar todas as &#225;rvores, visitar todos os zoos amigos...",
	"myzoo_lists_title": "Listas",
	"myzoo_lists_intro": "gerar lista de animais que tenho/n&#227;o tenho...",
	"myzoo_breeding_title": "Cria&#231;&#227;o",
	"myzoo_breeding_intro": "gerir cria&#231;&#227;o",
	// Items
	"shop_title": "Items",
	"shop_intro": "Isto &#233; uma Lista de todos os items no Zoo World. Apesar de existirem links para comprar, muitos items n&#227;o podem ser comprados por v&#225;rias raz&#245;es (ainda n&#227;o foram desbloqueados ou ainda n&#227;o sa&#237;ram, descontinuados, etc). <em>Aten&#231;&#227;o que se a sua conta j&#225; tiver ligada ao Pay Pal, no caso de j&#225; ter comprado algum item com dinheiro verdadeiro, ser&#225; cobrado sem aviso.</em>",
	"shop_loading": "a grande Loja est&#225; a carregar...",
	"shop_buy_id": "comprar qualquer item por ID",
	"shop_buy_id_intro": "(para ser usado quando sabe o ID mas esta Loja n&#227;o foi actualizada).",
	"shop_upgrade_id": "actualizar qualquer animal por ID",
	"shop_upgrade_id_intro": "(para ser usado quando sabe o ID mas esta Loja n&#227;o foi actualizada).",
	"shop_repeat_buy_id": "repetir compra de qualquer item por ID",
	"shop_repeat_buy_id_intro": "(usado para comprar um item espec&#237;fico por ID a cada dez segundos, &#250;til para aqueles que d&#227;o animais de n&#237;veis altos).",
	"shop_buy_fbc_intro": "Comprar com FBC",
	"shop_buy_by_wlf_item_id": "comprar por wlfItemId",
	"shop_paypal_howto": "Como CANCELAR o seu \"Acordo de um Click\" entre a RockYou, Inc e PayPal depois de ter comprado WLP ou um Ultra Raro.",
	// Spawning
	"gifts_title": "Produ&#231;&#227;o em Massa",
	"gifts_gifts_title": "Prendas",
	"gifts_level_title": "Subida de N&#237;vel",
	"gifts_level_intro": "escreve N&#237;vel desejado",
	"gifts_daily_title": "Enviar Gift do Dia",
	"gifts_trophy_title": "Trof&#233;u",
	"gifts_juice_title": "Sumo",
	"gifts_flowerpots_title": "Vasos",
	"gifts_halloween_title": "Dia das Bruxas",
	"gifts_halloween_ask_sewing": "Pedir ajuda para coser",
	"gifts_fieldtrip_title": "Passeio Campestre",
	"gifts_fieldtrip_anything_by_id": "qualquer ID",
	"gifts_treattrophy_title": "Trof&#233;u Guloseima",
	"gifts_buildables_title": "Construt&#237;veis",
	"gifts_missions_title": "Miss&#245;es",
	"gifts_missions_start": "In&#237;cio",
	"gifts_missions_republish": "re-publicar",
	"gifts_missions_complete": "completo",
	"gifts_rosegarden_title": "Rosal",
	"gifts_rosegarden_share_upgrade": "Partilhar actualiza&#231;&#227;o do rosal no mural",
	"gifts_rosegarden_ask_rose": "pedir rosa no mural",
	"gifts_rosegarden_share_rose": "partilhar rosa no mural",
	"gifts_goldenegg_title": "Ovo dourado",
	"gifts_icecream_title": "Gelado",
	"gifts_greenhouse_title": "Estufa",
	"gifts_megaspawn_title": "Produ&#231;&#227;o em Massa",
	// Visiting
	"visiting_resume_intro": "(resumir num Zoo espec&#237;fico, se o processo ca&#237;r)",
	"visiting_go_outside": "Note que, dependendo do n&#250;mero de amigos que tenha, isto pode demorar algum tempo! Saia e v&#225; brincar :)",
	"visiting_load_friends": "carregar a lista de amigos...",
	// Advanced
	"advanced_title": "Avan&#231;adas",
	"advanced_intro": "Se n&#227;o tem a certeza do que isto &#233;, ent&#227;o n&#227;o &#233; para si!",
	"advanced_detailedlogging_title": "Registo detalhado",
	"advanced_friends_title": "Amigos",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Tamanho do display do Zoo",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Fila de trabalho",
	"advanced_play_title": "Jogar",
	"advanced_alternateaccess_title": "Acesso alternativo",
	"advanced_tryto_title": "Tentar",
	"advanced_goldeninviter_title": "Convite dourado",
	"advanced_punkd_title": "Lixado",
	"advanced_javacript_javacript": "javascript",
	"advanced_javacript_evaluate": "validar",
	"advanced_javacript_ajaxdelay": "Atraso AJAX (millisegundos)",
	// generic
	"show": "Mostra",
	"hide": "Esconde",
	"shop": "loja",
	"reload": "recarrega",
	"island": "Ilha",
	"islands": "Ilhas",
	"minute": "minuto",
	"minutes": "minutos",
	"hour": "hora",
	"hours": "horas",
	"day": "dia",
	"days": "dias",
	"once": "uma vez",
	"repeat": "repetir",
	"to_friend": "para amigo",
	"specify_user_id": "amigo espec&#237;fico por ID",
	"specific_user": "amigo espec&#237;fico",
	"specify_user_id_prompt": "espec&#237;fico Idamigo:\n(descobre este ID no seu perfil)",
	"specify_animal_id": "animal epec&#237;fico por ID",
	"specify_animal_id_prompt": "espec&#237;fico animalId:\n(descobre este ID pela lista da Loja)",
	"send_to_feed": "enviar para mural",
	"ask_on_feed": "pedir no mural",
	"ask_for": "pedir",
	"share": "partilhar",
	"share_roses": "partilhar 'rosas'",
	"post": "publicar",
	"share_completion": "partilhar finaliza&#231;&#227;o",
	"completed": "completo",
	"help": "ajuda",
	"easy": "f&#225;cil",
	"medium": "m&#233;dio",
	"hard": "dif&#237;cil",
	"invite": "convidar",
	"hatched": "chocou",
	"send_as_request": "enviar como pedido",
	"ask_as_request": "perguntar como pedido",
	"update_button": "Bot&#227;o de actualiza&#231;&#227;o",
	"button_go": "vai",
	"start": "in&#237;cio",
	"republish": "re-publicar",
	"complete": "completar",
	// 2010/12/08
	// generic
	"post_trade": "publicar troca",
	"update": "actualizar",
	"loaded": "carregado",
	"main_zooremoved": "Zoo removido",
	"main_clicktogetback": "clickar para voltar",
	"executing": "a executar",
	"specify_item_id_prompt": "espec&#237;ficar itemId:\n(encontre este ID na lista da Loja)",
	"close": "fechado",
	"buy": "comprar",
	"gift": "prenda",
	"breed": "criar",
	"upgrade": "actualizar",
	"shareonwall": "partilhar no mural",
	"refresh": "refrescar",
	"project": "projecto",
	// Items
	"shop_flyout_categories": "categorias",
	"shop_flyout_rarity": "raridade",
	"shop_flyout_breedingtime": "tempo de incuba&#231;&#227;o",
	"shop_flyout_purchasefor": "comprar por",
	"shop_flyout_actualdollars": "dolares actuais",
	"shop_flyout_fbc": "cr&#233;ditos do Facebook",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "Imagens",
	"shop_flyout_images_large": "grande",
	"shop_flyout_images_small": "pequena",
	"shop_flyout_images_baby": "b&#233;b&#233;",
	"shop_flyout_actions_title": "Ac&#231;&#245;es",
	"shop_flyout_actions_buylots_prompt": "N&#250;mero de items a comprar? (para animais, deve ser menos que a quantidade a actualizar, para outros um m&#225;ximo de 999)",
	"shop_flyout_actions_buylots": "comprar muitos",
	"shop_flyout_actions_postadopt": "publicar adop&#231;&#227;o",
	"shop_flyout_actions_customadopt": "adop&#231;&#227;o personalizada",
	"shop_flyout_actions_thanksgivingwlpupgrade": "tentar actualizar para um ultra por 1 WLP",
	"shop_flyout_actions_findinzoo": "encontrar no Zoo",
	"shop_flyout_actions_upgradeforwrenches": "actualiza&#231;&#227;o para ferramentas",
	"shop_flyout_actions_cantbuy": "estes n&#227;o podes comprar...",
	"shop_flyout_actions_trytobuy": "tentar comprar de qualquer das formas?",
	"shop_flyout_actions_numitemstobuy": "n&#250;mero de items a comprar? (para animais, deve ser menos que a quantidade a actualizar, para outros um m&#225;ximo de 999)",
	"shop_flyout_actions_movealltostorage": "mover tudo para o armaz&#233;m",
	"shop_flyout_actions_moneywarning": "AVISO: este item custa dinheiro verdadeiro e podes ser cobrado sem pr&#233;-aviso!",
	"shop_flyout_actions_facts": "factos",
	"shop_flyout_actions_training": "A treinar",
	// advanced
	"advanced_friends_loadlist": "carregar lista",
	"advanced_friends_deduplicatelist": "limpar lista duplicada",
	"advanced_zoo_loadzoo": "carregar o teu zoo",
	"advanced_zoo_loadanyzoo": "carregar qualquer zoo",
	"advanced_zoo_showzoo": "mostrar Zoo",
	"advanced_zoo_specifyisland": "especificar ilha ID (0-10):",
	"advanced_zoo_loadyourisland": "carregar a tua ilha",
	"advanced_zoodisplay_normal": "normal",
	"advanced_zoodisplay_big": "grande",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "mostrar",
	"advanced_cookies_delete": "apagar",
	"advanced_cookies_set": "configurar",
	"advanced_workqueue_start": "come&#231;ar",
	"advanced_workqueue_stop": "stop",
	"advanced_workqueue_itemsinthequeue": "items em fila.",
	"advanced_workqueue_showsize": "mostra tamanho",
	"advanced_workqueue_clear": "limpar",
	"advanced_alternateaccess_unframe": "Re-estruturar Zoo",
	"advanced_alternateaccess_workaround": "Alternativa Zoo (Lite)",
	"advanced_tryto_forceadopt": "for&#231;ar adop&#231;&#227;o",
	"advanced_tryto_payday": "ordenado",
	"advanced_tryto_unlock11thisland": "desbloquear 11&#170; ilha",
	// megaspawn flyout
	"megaspawn_flyout_title": "produ&#231;&#227;o em massa",
	"megaspawn_flyout_projects": "projectos",
	"megaspawn_flyout_multiplenotes": "notas m&#250;ltiplas",
	// animal list flyout
	"animallist_flyout_title": "Lista de Animais",
	"animallist_flyout_intro": "Copia e cola esta lista para usar",
	// breeding flyout
	"breeding_flyout_title": "Lista da cria&#231;&#227;o",
	"breeding_flyout_breeding": "a criar",
	"breeding_flyout_innest": "no ninho",
	"breeding_flyout_nomorenests": "N&#227;o h&#225; mais ninhos, sorry!",
	"breeding_flyout_nobabies": "N&#227;o h&#225; b&#233;b&#233;s nos ninhos.",
	"breeding_flyout_heal": "curar",
	"breeding_flyout_feed": "alimentar",
	"breeding_flyout_notready": "ainda n&#227;o est&#227;o prontos",
	"breeding_flyout_upgradeandmove": "actualizar e mover para o zoo",
	"breeding_flyout_move": "mover para o zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Adop&#231;&#227;o Personalizada",
	"customadopt_flyout_name": "nome",
	"customadopt_flyout_image": "imagem",
	"customadopt_flyout_title": "t&#237;tulo",
	"customadopt_flyout_bodytext": "texto",
	"customadopt_flyout_button": "bot&#227;o",
	"customadopt_flyout_postbutton": "publicar adop&#231;&#227;o Personalizada",
	"customadopt_flyout_editingnotadvised": "N&#227;o &#233; aconselh&#225;vel editar os items em baixo!",
	// friend list
	"friendlist_addzoomate": "adicionar zoo mate",
	"friendlist_visitzoo": "visitar zoo",
	"friendlist_viewprofile": "ver perfil",
	"friendlist_posttreasurechest": "publicar tesouro",
	"friendlist_postmysterychest": "pubicar caixa mist&#233;rio",
	"friendlist_posthungryanimals": "publicar animais com fome",
	"friendlist_sendvitamin": "enviar vitamina",
	"friendlist_sendgoldgreenhouse": "enviar estufa de ouro",
	// work queue
	"workqueue_starting": "A in&#237;ciar tarefa",
	"workqueue_remaining": "restante",
	"workqueue_alreadystarted": "Tarefa j&#225; iniciada",
	"workqueue_stopped": "Tarefa parada",
	"workqueue_stopping": "Tarefa a parar",
	"workqueue_alreadstopped": "Tarefa j&#225; parou",
	// 2010/12/09
	"animallist_flyout_generating": "A gerar listas...",
	"animallist_flyout_havelist": "Lista de animals que tens",
	"animallist_flyout_havenotlist": "Lista de animais que n&#227;o tens",
	"animallist_flyout_note": "Nota: muitos dos animais que n&#227;o tens podem ter sido descontinuados ou n&#227;o sa&#237;ram.",
	// status
	"status_buying_buying": "a comprar",
	"status_buying_bought": "comprado",
	"status_buying_ofitem": "o item",
	"status_buying_upgradingitem": "a actualizar item",
	"status_buying_upgradeditem": "item actualizado",
	"status_wlfitemid_specify": "Espec&#237;fico wlfItemId",
	"status_friendlist_loaded": "Lista de amigos j&#225; carregada...",
	"status_friendlist_loading": "A carregar lista de amigos...",
	"status_friendlist_found": "Encontrado",
	"status_friendlist_friends": "amigos",
	"status_zoo_notloaded": "Zoo n&#227;o carregou...",
	"status_zoo_loadedforfriend": "A carregar Zoo para amigos",
	"status_feeding_waitingfor": "&#192; espera de ser alimentado novamente por",
	"status_feeding_fed": "alimentado",
	"status_feeding_collected": "colhido",
	"status_feeding_withtreat": "com guloseima",
	"status_feeding_animalswithtreat": "animais com guloseima",
	"status_feeding_noanimalsforcumulative": "N&#227;o existem animais para o servi&#231;o de alimenta&#231;&#227;o acumulada",
	"status_training_training": "A treinar",
	"status_training_everyfiveminutes": "cada cinco minutos...",
	"status_training_trained": "Treinados",
	"status_gate_collectedxp": "Recolhido XP do port&#227;o da ilha",
	"status_booth_collecting": "A recolher dinheiro do port&#227;o...",
	"status_booth_collected": "Recolhido dinheiro do port&#227;o...",
	"status_visiting_visited": "Visitado",
	"status_visiting_zooandcollected": "zoo e recolhido",
	"status_visiting_gettingreward": "A obt&#234;r recompensa por visitar Zoo de",
	"status_visiting_visitedandcollected": "Zoo visitado e recolhido",
	"status_visiting_collected": "Recolhido",
	"status_visiting_visitingall": "A visitar todos",
	"status_visiting_ofyourfriendszoos": "dos zoos dos teus amigos...",
	"status_shaking_shakingitem": "A abanar item",
	"status_shaking_oftype": "do tipo",
	"status_shaking_forfriend": "para o amigo",
	"status_shaking_notshakingitem": "A abanar item",
	"status_shaking_shaking": "A abanar",
	"status_shaking_for": "para",
	"status_shaking_shookitems": "Items abanados...",
	"status_shaking_shookitemsfailed": "Falha ao abanar items...",
	"status_island_loadingisland": "A carregar Ilha",
	"status_island_for": "para",
	"status_inventory_loading": "A carregar invent&#225;rio para",
	"status_inventory_queuing": "Em fila de espera",
	"status_inventory_forshaking": "para abanar...",
	"status_moving_moving": "A mover",
	"status_moving_toinventory": "para invent&#225;rio",
	"status_moving_toisland": "para Ilha",
	// Items
	"shop_listempty": "Lista vazia",
	// Spawning
	"gifts_giftingitem": "A oferecer item",
	"gifts_spawning": "Produ&#231;&#227;o em massa",
	"gifts_trophy": "trof&#233;u",
	"gifts_mission": "miss&#227;o",
	// Mega spawn
	"megaspawn_flyout_gifts": "Prendas",
	"megaspawn_flyout_missions": "Miss&#245;es",
	// generic
	"completion": "completo",
	// 2010/12/10
	"megaspawn_flyout_christmas": "natal"
};

// Ukrainian translation by Irena Tkach 2010/12/15 (encoded)
zdlang['uk'] = {
	// generic
	"title": "&#1055;&#1086;&#1084;&#1110;&#1095;&#1085;&#1080;&#1082; Zoo World",
	"show": "&#1055;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080;",
	"hide": "&#1057;&#1093;&#1086;&#1074;&#1072;&#1090;&#1080;",
	"shop": "&#1052;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085;",
	"reload": "&#1055;&#1077;&#1088;&#1077;&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080;",
	"language": "&#1052;&#1086;&#1074;&#1080;",
	"en": "&#1040;&#1085;&#1075;&#1083;&#1110;&#1081;&#1089;&#1100;&#1082;&#1072;",
	"es": "&#1030;&#1089;&#1087;&#1072;&#1085;&#1089;&#1100;&#1082;&#1072;",
	"de": "&#1053;&#1110;&#1084;&#1077;&#1094;&#1100;&#1082;&#1072;",
	"rs": "&#1057;&#1077;&#1088;&#1073;&#1089;&#1100;&#1082;&#1072;",
	"ru": "&#1056;&#1086;&#1089;&#1110;&#1081;&#1089;&#1100;&#1082;&#1072;",
	"cn": "&#1050;&#1080;&#1090;&#1072;&#1081;&#1089;&#1100;&#1082;&#1072;",
	"jp": "&#1071;&#1087;&#1086;&#1085;&#1089;&#1100;&#1082;&#1072;",
	"it": "&#1030;&#1090;&#1072;&#1083;&#1110;&#1081;&#1089;&#1100;&#1082;&#1072;",
	"pt": "&#1055;&#1086;&#1088;&#1090;&#1091;&#1075;&#1072;&#1083;&#1100;&#1089;&#1100;&#1082;&#1072;",
	"fr": "&#1060;&#1088;&#1072;&#1085;&#1094;&#1091;&#1079;&#1100;&#1082;&#1072;",
	"id": "&#1030;&#1085;&#1076;&#1086;&#1085;&#1077;&#1079;&#1110;&#1081;&#1089;&#1100;&#1082;&#1072;",
	"hr": "&#1061;&#1086;&#1088;&#1074;&#1072;&#1090;&#1089;&#1100;&#1082;&#1072;",
	"he": "&#1030;&#1074;&#1088;&#1080;&#1090;",
	"pl": "&#1055;&#1086;&#1083;&#1100;&#1089;&#1100;&#1082;&#1072;",
	"uk": "&#1059;&#1082;&#1088;&#1072;&#1111;&#1085;&#1089;&#1100;&#1082;&#1072;",
	// tabs
	"tab_about": "&#1055;&#1088;&#1086; &#1085;&#1072;&#1089;",
	"tab_myzoo": "&#1052;&#1110;&#1081; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"tab_items": "&#1058;&#1086;&#1074;&#1072;&#1088;&#1080;",
	"tab_spawning": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"tab_friends": "&#1044;&#1088;&#1091;&#1079;&#1110;",
	"tab_advanced": "&#1044;&#1083;&#1103; &#1087;&#1088;&#1086;&#1089;&#1091;&#1085;&#1091;&#1090;&#1080;&#1093;",
	// footer
	"footer_status": "&#1057;&#1090;&#1072;&#1090;&#1091;&#1089;",
	"footer_friends": "&#1044;&#1088;&#1091;&#1079;&#1110;",
	"footer_zoo": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"footer_results": "&#1056;&#1077;&#1079;&#1091;&#1083;&#1100;&#1090;&#1072;&#1090;&#1080; AJAX",
	"footer_clear_log": "&#1054;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1080; &#1078;&#1091;&#1088;&#1085;&#1072;&#1083; &#1088;&#1077;&#1108;&#1089;&#1090;&#1088;&#1072;&#1094;&#1110;&#1111;",
	// About
	"about_title": "&#1055;&#1088;&#1086; &#1085;&#1072;&#1089;",
	"about_body_1": "&#1062;&#1077;&#1081; &#1110;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090; &#1076;&#1086;&#1079;&#1074;&#1086;&#1083;&#1103;&#1108; &#1088;&#1086;&#1073;&#1080;&#1090;&#1080; &#1082;&#1083;&#1100;&#1086;&#1074;&#1110; &#1090;&#1088;&#1102;&#1082;&#1080; &#1091; &#1075;&#1088;&#1110; Zoo World. &#1049;&#1086;&#1075;&#1086; &#1084;&#1086;&#1078;&#1085;&#1072; &#1074;&#1074;&#1072;&#1078;&#1072;&#1090;&#1080; &#1096;&#1072;&#1093;&#1088;&#1072;&#1081;&#1089;&#1090;&#1074;&#1086;&#1084; &#1110; &#1093;&#1072;&#1082;&#1077;&#1088;&#1089;&#1090;&#1074;&#1086;&#1084;, &#1110; &#1085;&#1110;&#1093;&#1090;&#1086; &#1085;&#1077; &#1075;&#1072;&#1088;&#1072;&#1085;&#1090;&#1091;&#1108; &#1074;&#1072;&#1084; &#1088;&#1077;&#1079;&#1091;&#1083;&#1100;&#1090;&#1072;&#1090;. &#1050;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1081;&#1090;&#1077;&#1089;&#1103; &#1085;&#1072; &#1089;&#1074;&#1110;&#1081; &#1089;&#1090;&#1088;&#1072;&#1093; &#1110; &#1088;&#1080;&#1079;&#1080;&#1082;!",
	"about_body_2": "&#1059; &#1089;&#1074;&#1110;&#1090;&#1110; &#1110;&#1089;&#1085;&#1091;&#1108; &#1076;&#1074;&#1072; &#1074;&#1080;&#1076;&#1080; &#1083;&#1102;&#1076;&#1077;&#1081;: &#1083;&#1102;&#1076;&#1080;, &#1103;&#1082;&#1110; &#1074;&#1084;&#1110;&#1102;&#1090;&#1100; &#1095;&#1080;&#1090;&#1072;&#1090;&#1080;, &#1110; &#1083;&#1102;&#1076;&#1080;, &#1103;&#1082;&#1110; &#1074;&#1078;&#1077; &#1074;&#1089;&#1090;&#1080;&#1075;&#1083;&#1080; &#1082;&#1083;&#1110;&#1082;&#1085;&#1091;&#1090;&#1080; &#1074; &#1110;&#1085;&#1096;&#1086;&#1084;&#1091; &#1084;&#1110;&#1089;&#1094;&#1110;.",
	"about_body_3": "&#1071;&#1082;&#1097;&#1086; &#1074;&#1080; &#1074;&#1089;&#1077; &#1097;&#1077; &#1090;&#1091;&#1090;, &#1090;&#1086;, &#1084;&#1086;&#1078;&#1083;&#1080;&#1074;&#1086;, &#1074;&#1080; &#1079;&#1074;&#1077;&#1088;&#1085;&#1077;&#1090;&#1077; &#1091;&#1074;&#1072;&#1075;&#1091; &#1085;&#1072; &#1090;&#1077;, &#1097;&#1086; &#1103; &#1087;&#1080;&#1096;&#1091;. &#1052;&#1077;&#1085;&#1110; &#1074;&#1078;&#1077; &#1076;&#1086;&#1074;&#1086;&#1076;&#1080;&#1083;&#1086;&#1089;&#1103; &#1074;&#1080;&#1076;&#1072;&#1083;&#1103;&#1090;&#1080; &#1094;&#1110; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1080; &#1095;&#1077;&#1088;&#1077;&#1079; &#1076;&#1088;&#1072;&#1084;&#1091;, &#1097;&#1086; &#1088;&#1086;&#1079;&#1110;&#1075;&#1088;&#1072;&#1083;&#1072;&#1089;&#1103; &#1074; &#1089;&#1087;&#1110;&#1074;&#1090;&#1086;&#1074;&#1072;&#1088;&#1080;&#1089;&#1090;&#1074;&#1110; Zoo World. &#1053;&#1072;&#1089;&#1090;&#1091;&#1087;&#1085;&#1086;&#1075;&#1086; &#1088;&#1072;&#1079;&#1091; &#1103; &#1084;&#1086;&#1078;&#1091; &#1110; &#1085;&#1077; &#1087;&#1086;&#1074;&#1077;&#1088;&#1085;&#1091;&#1090;&#1080;&#1089;&#1103;. &#1041;&#1091;&#1076;&#1100;&#1090;&#1077; &#1088;&#1086;&#1079;&#1089;&#1091;&#1076;&#1083;&#1080;&#1074;&#1110;, &#1073;&#1091;&#1076;&#1100;&#1090;&#1077; &#1086;&#1073;&#1077;&#1088;&#1077;&#1078;&#1085;&#1110; &#1110; &#1085;&#1077; &#1076;&#1091;&#1084;&#1072;&#1081;&#1090;&#1077;, &#1097;&#1086; &#1074;&#1072;&#1089; &#1085;&#1077; &#1087;&#1086;&#1082;&#1072;&#1088;&#1072;&#1102;&#1090;&#1100; &#1079;&#1072; &#1096;&#1072;&#1093;&#1088;&#1072;&#1081;&#1089;&#1090;&#1074;&#1086;.",
	"about_body_4": "&#1030;&#1085;&#1086;&#1076;&#1110; &#1103; &#1087;&#1086;&#1084;&#1080;&#1083;&#1103;&#1102;&#1089;&#1103;, &#1110;&#1085;&#1086;&#1076;&#1110; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091; &#1110; &#1074; Facebook &#1074;&#1110;&#1076;&#1073;&#1091;&#1074;&#1072;&#1102;&#1090;&#1100;&#1089;&#1103; &#1079;&#1084;&#1110;&#1085;&#1080;, &#1110; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1080; &#1087;&#1077;&#1088;&#1077;&#1089;&#1090;&#1072;&#1102;&#1090;&#1100; &#1087;&#1088;&#1072;&#1094;&#1102;&#1074;&#1072;&#1090;&#1080;. &#1042;&#1074;&#1110;&#1095;&#1083;&#1080;&#1074;&#1077; &#1079;&#1072;&#1091;&#1074;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103; &#1084;&#1086;&#1078;&#1077; &#1089;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; &#1084;&#1077;&#1085;&#1110; &#1097;&#1086;&#1089;&#1100;, &#1095;&#1086;&#1075;&#1086; &#1103; &#1085;&#1077; &#1079;&#1085;&#1072;&#1102;. &#1057;&#1086;&#1090;&#1085;&#1103; &#1087;&#1088;&#1080;&#1095;&#1110;&#1087;&#1086;&#1082; &#1085;&#1077; &#1087;&#1088;&#1080;&#1085;&#1077;&#1089;&#1077; &#1085;&#1110;&#1103;&#1082;&#1086;&#1111; &#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1110;",
	"about_body_5": "&#1050;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1081;&#1090;&#1077;&#1089;&#1103; &#1084;&#1086;&#1111;&#1084;&#1080; &#1089;&#1082;&#1088;&#1080;&#1087;&#1090;&#1072;&#1084;&#1080; &#1110; &#1086;&#1090;&#1088;&#1080;&#1084;&#1091;&#1081;&#1090;&#1077; &#1079;&#1072;&#1076;&#1086;&#1074;&#1086;&#1083;&#1077;&#1085;&#1085;&#1103;! &#1042;&#1080; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1090;&#1072;&#1082;&#1086;&#1078; &#1087;&#1088;&#1080;&#1108;&#1076;&#1085;&#1072;&#1090;&#1080;&#1089;&#1103; &#1076;&#1086; &#1085;&#1072;&#1096;&#1086;&#1111;",
	"about_body_group": "&#1075;&#1088;&#1091;&#1087;&#1080;",
	// My Zoo
	"myzoo_feeding_title": "&#1043;&#1086;&#1076;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"myzoo_feeding_feed": "&#1055;&#1086;&#1075;&#1086;&#1076;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"myzoo_feeding_collect": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1090;&#1080;",
	"myzoo_feeding_day": "&#1076;&#1077;&#1085;&#1100;",
	"myzoo_feeding_days": "&#1076;&#1085;&#1110;",
	"myzoo_gates_title": "&#1042;&#1086;&#1088;&#1086;&#1090;&#1072;",
	"myzoo_gates_collect_all": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1090;&#1080; XP &#1079; &#1091;&#1089;&#1110;&#1093; &#1074;&#1086;&#1088;&#1110;&#1090;",
	"myzoo_gates_collect_booth_15": "&#1047;&#1073;&#1080;&#1088;&#1072;&#1090;&#1080; &#1075;&#1088;&#1086;&#1096;&#1110; &#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1110; &#1082;&#1086;&#1078;&#1085;&#1110; 15 &#1093;&#1074;&#1080;&#1083;&#1080;&#1085;",
	"myzoo_training_title": "&#1044;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"myzoo_treasure_title": "&#1055;&#1086;&#1096;&#1091;&#1082; &#1089;&#1082;&#1072;&#1088;&#1073;&#1110;&#1074; (&#1087;&#1086;&#1090;&#1088;&#1110;&#1073;&#1085;&#1072; &#1084;&#1080;&#1089;&#1083;&#1080;&#1074;&#1080;&#1094;&#1103; &#1079;&#1072; &#1089;&#1082;&#1072;&#1088;&#1073;&#1072;&#1084;&#1080;)",
	"myzoo_treasure_visit_all": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1080; &#1074;&#1089;&#1110;&#1093; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;",
	"myzoo_treasure_start_at": "&#1055;&#1086;&#1095;&#1072;&#1090;&#1080; &#1079; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"myzoo_treasure_continue_from": "&#1087;&#1088;&#1086;&#1076;&#1086;&#1074;&#1078;&#1080;&#1090;&#1080; &#1079; ...",
	"myzoo_kiosk_title": "&#1050;&#1110;&#1086;&#1089;&#1082;&#1080;",
	"myzoo_kiosk_collect_all": "&#1079;&#1110;&#1073;&#1088;&#1072;&#1090;&#1080; &#1075;&#1088;&#1086;&#1096;&#1110; &#1079; &#1091;&#1089;&#1110;&#1093; &#1082;&#1110;&#1086;&#1089;&#1082;&#1110;&#1074;",
	"myzoo_shake_title": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1074;&#1089;&#1110; &#1076;&#1077;&#1088;&#1077;&#1074;&#1072;, &#1082;&#1091;&#1097;&#1110;, &#1089;&#1082;&#1091;&#1083;&#1100;&#1087;&#1090;&#1091;&#1088;&#1080;, &#1075;&#1088;&#1080;&#1073;&#1080;, &#1096;&#1086;&#1091;, &#1090;&#1088;&#1086;&#1103;&#1085;&#1076;&#1086;&#1074;&#1080;&#1081; &#1089;&#1072;&#1076; &#1110; &#1090;.&#1076;.",
	"myzoo_shake_shake_all": "&#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1085;&#1072; &#1091;&#1089;&#1110;&#1093; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;&#1093;",
	"myzoo_move_title": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1110;&#1089;&#1090;&#1080;&#1090;&#1080; &#1074;&#1089;&#1110; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1080; &#1079; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1091; &#1076;&#1086; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;",
	"myzoo_fill_title": "&#1047;&#1072;&#1087;&#1086;&#1074;&#1085;&#1080;&#1090;&#1080; &#1090;&#1077;&#1087;&#1083;&#1080;&#1094;&#1102; &#1079;&#1110; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;",
	"myzoo_auto_title": "&#1040;&#1074;&#1090;&#1086;&#1084;&#1072;&#1090;&#1080;&#1095;&#1085;&#1086;",
	"myzoo_auto_intro": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1090;&#1080; XP &#1079; &#1091;&#1089;&#1110;&#1093; &#1074;&#1086;&#1088;&#1110;&#1090;, &#1079;&#1110;&#1073;&#1088;&#1072;&#1090;&#1080; &#1075;&#1088;&#1086;&#1096;&#1110; &#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1110;, &#1087;&#1086;&#1075;&#1086;&#1076;&#1091;&#1074;&#1072;&#1090;&#1080; &#1074;&#1089;&#1110;&#1093; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;, &#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1086;&#1074;&#1091;&#1102;&#1095;&#1080; &#1087;&#1086;&#1090;&#1086;&#1095;&#1085;&#1110; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080;, &#1087;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1074;&#1089;&#1110; &#1076;&#1077;&#1088;&#1077;&#1074;&#1072;, &#1074;&#1110;&#1076;&#1074;&#1110;&#1076;&#1072;&#1090;&#1080; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1080; &#1074;&#1089;&#1110;&#1093; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;...",
	"myzoo_lists_title": "&#1057;&#1087;&#1080;&#1089;&#1082;&#1080;",
	"myzoo_lists_intro": "&#1057;&#1090;&#1074;&#1086;&#1088;&#1080;&#1090;&#1080; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1085;&#1072;&#1103;&#1074;&#1085;&#1080;&#1093; / &#1074;&#1110;&#1076;&#1089;&#1091;&#1090;&#1085;&#1110;&#1093; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;...",
	"myzoo_breeding_title": "&#1056;&#1086;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1103;",
	"myzoo_breeding_intro": "&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1110;&#1085;&#1085;&#1103; &#1088;&#1086;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1103;&#1084;",
	// Items
	"shop_title": "&#1058;&#1086;&#1074;&#1072;&#1088;&#1080;",
	"shop_intro": "&#1062;&#1077; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1074;&#1089;&#1110;&#1093; &#1074;&#1110;&#1076;&#1086;&#1084;&#1080;&#1093; &#1090;&#1086;&#1074;&#1072;&#1088;&#1110;&#1074; &#1091; &#1075;&#1088;&#1110; Zoo World. &#1061;&#1086;&#1095;&#1072; &#1074;&#1089;&#1110; &#1074;&#1086;&#1085;&#1080; &#1084;&#1072;&#1102;&#1090;&#1100; &#1087;&#1086;&#1089;&#1080;&#1083;&#1072;&#1085;&#1085;&#1103; &#1085;&#1072; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1091;, &#1073;&#1072;&#1075;&#1072;&#1090;&#1086; &#1097;&#1086; &#1079; &#1085;&#1080;&#1093; &#1085;&#1077; &#1084;&#1086;&#1078;&#1085;&#1072; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1087;&#1086; &#1088;&#1103;&#1076;&#1091; &#1087;&#1088;&#1080;&#1095;&#1080;&#1085; (&#1097;&#1077; &#1085;&#1077; &#1088;&#1086;&#1079;&#1073;&#1083;&#1086;&#1082;&#1086;&#1074;&#1072;&#1085;&#1086;, &#1085;&#1077; &#1074;&#1080;&#1087;&#1091;&#1097;&#1077;&#1085;&#1110; &#1091; &#1089;&#1074;&#1110;&#1090;, &#1074;&#1080;&#1083;&#1091;&#1095;&#1077;&#1085;&#1110; &#1079; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091; &#1081; &#1090;.&#1087;.). <em> &#1052;&#1072;&#1081;&#1090;&#1077; &#1085;&#1072; &#1091;&#1074;&#1072;&#1079;&#1110;, &#1097;&#1086;, &#1103;&#1082;&#1097;&#1086; &#1074;&#1072;&#1096; &#1087;&#1088;&#1086;&#1092;&#1110;&#1083;&#1100; &#1074;&#1078;&#1077; &#1087;&#1086;&#1074;'&#1103;&#1079;&#1072;&#1085;&#1080;&#1081; &#1079; Pay Pal, &#1086;&#1089;&#1082;&#1110;&#1083;&#1100;&#1082;&#1080; &#1088;&#1072;&#1085;&#1110;&#1096;&#1077; &#1074;&#1080; &#1074;&#1078;&#1077; &#1097;&#1086;&#1089;&#1100; &#1082;&#1091;&#1087;&#1091;&#1074;&#1072;&#1083;&#1080; &#1079;&#1072; &#1088;&#1077;&#1072;&#1083;&#1100;&#1085;&#1110; &#1075;&#1088;&#1086;&#1096;&#1110;, &#1079; &#1074;&#1072;&#1089; &#1079;&#1085;&#1110;&#1084;&#1091;&#1090;&#1100; &#1086;&#1087;&#1083;&#1072;&#1090;&#1091; &#1073;&#1077;&#1079; &#1087;&#1086;&#1087;&#1077;&#1088;&#1077;&#1076;&#1078;&#1077;&#1085;&#1085;&#1103;.</em>",
	"shop_loading": "&#1042;&#1077;&#1083;&#1080;&#1082;&#1080;&#1081; &#1052;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1042;&#1089;&#1100;&#1086;&#1075;&#1086; &#1053;&#1072; &#1057;&#1074;&#1110;&#1090;&#1110; &#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1091;&#1108;&#1090;&#1100;&#1089;&#1103;...",
	"shop_buy_id": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1090;&#1086;&#1074;&#1072;&#1088; &#1087;&#1086; ID",
	"shop_buy_id_intro": "(&#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1086;&#1074;&#1091;&#1074;&#1072;&#1090;&#1080;, &#1082;&#1086;&#1083;&#1080; &#1074;&#1072;&#1084; &#1074;&#1110;&#1076;&#1086;&#1084;&#1080;&#1081; ID, &#1072;&#1083;&#1077; &#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1087;&#1086;&#1082;&#1080; &#1085;&#1077; &#1073;&#1091;&#1083;&#1086; &#1086;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1086;).",
	"shop_upgrade_id": "&#1087;&#1086;&#1083;&#1110;&#1087;&#1096;&#1080;&#1090;&#1080; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1091; &#1087;&#1086; ID",
	"shop_upgrade_id_intro": "(&#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1086;&#1074;&#1091;&#1074;&#1072;&#1090;&#1080;, &#1082;&#1086;&#1083;&#1080; &#1074;&#1072;&#1084; &#1074;&#1110;&#1076;&#1086;&#1084;&#1080;&#1081; ID, &#1072;&#1083;&#1077; &#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085; &#1087;&#1086;&#1082;&#1080; &#1085;&#1077; &#1073;&#1091;&#1083;&#1086; &#1086;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1086;).",
	"shop_repeat_buy_id": "&#1087;&#1086;&#1074;&#1090;&#1086;&#1088;&#1080;&#1090;&#1080; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1091; &#1090;&#1086;&#1074;&#1072;&#1088;&#1091; &#1087;&#1086; ID",
	"shop_repeat_buy_id_intro": "(&#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1086;&#1074;&#1091;&#1074;&#1072;&#1090;&#1080; &#1076;&#1083;&#1103; &#1082;&#1091;&#1087;&#1110;&#1074;&#1083;&#1110; &#1090;&#1086;&#1074;&#1072;&#1088;&#1091; &#1087;&#1086; ID &#1082;&#1086;&#1078;&#1085;&#1110; 10 &#1089;&#1077;&#1082;&#1091;&#1085;&#1076;; &#1092;&#1091;&#1085;&#1082;&#1094;&#1110;&#1103; &#1087;&#1088;&#1080;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1072; &#1076;&#1083;&#1103; &#1090;&#1080;&#1093;, &#1093;&#1090;&#1086; &#1087;&#1086;&#1089;&#1090;&#1110;&#1081;&#1085;&#1086; &#1076;&#1072;&#1088;&#1091;&#1108; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085; &#1073;&#1110;&#1083;&#1100;&#1096; &#1074;&#1080;&#1089;&#1086;&#1082;&#1086;&#1075;&#1086; &#1088;&#1110;&#1074;&#1085;&#1103;).",
	"shop_buy_fbc_intro": "&#1050;&#1091;&#1087;&#1080;&#1090;&#1080; &#1079;&#1072; FBC",
	"shop_buy_by_wlf_item_id": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1087;&#1086; wlfItemId",
	"shop_paypal_howto": "&#1071;&#1082; &#1057;&#1050;&#1040;&#1057;&#1059;&#1042;&#1040;&#1058;&#1048; &#1074;&#1072;&#1096;&#1091; \"&#1059;&#1075;&#1086;&#1076;&#1091; &#1054;&#1076;&#1085;&#1086;&#1075;&#1086; &#1050;&#1083;&#1110;&#1082;&#1072; \" &#1084;&#1110;&#1078; RockYou, Inc &#1090;&#1072; PayPal &#1087;&#1110;&#1089;&#1083;&#1103; &#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1080; WLP &#1072;&#1073;&#1086; &#1091;&#1083;&#1100;&#1090;&#1088;&#1072;-&#1088;&#1110;&#1076;&#1082;&#1110;&#1089;&#1085;&#1086;&#1111; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1080;.",
	// Spawning
	"gifts_title": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"gifts_gifts_title": "&#1044;&#1072;&#1088;&#1091;&#1085;&#1082;&#1080;",
	"gifts_level_title": "&#1055;&#1077;&#1088;&#1077;&#1093;&#1110;&#1076; &#1085;&#1072; &#1073;&#1110;&#1083;&#1100;&#1096; &#1074;&#1080;&#1089;&#1086;&#1082;&#1080;&#1081; &#1088;&#1110;&#1074;&#1077;&#1085;&#1100;",
	"gifts_level_intro": "&#1074;&#1074;&#1077;&#1076;&#1110;&#1090;&#1100; &#1073;&#1072;&#1078;&#1072;&#1085;&#1080;&#1081; &#1088;&#1110;&#1074;&#1077;&#1085;&#1100;",
	"gifts_daily_title": "&#1055;&#1086;&#1076;&#1110;&#1083;&#1080;&#1090;&#1080;&#1089;&#1103; &#1097;&#1086;&#1076;&#1077;&#1085;&#1085;&#1080;&#1084; &#1087;&#1086;&#1076;&#1072;&#1088;&#1091;&#1085;&#1082;&#1086;&#1084;",
	"gifts_trophy_title": "&#1055;&#1088;&#1080;&#1079;",
	"gifts_juice_title": "&#1057;&#1110;&#1082;",
	"gifts_flowerpots_title": "&#1050;&#1074;&#1110;&#1090;&#1082;&#1086;&#1074;&#1110; &#1075;&#1086;&#1088;&#1097;&#1080;&#1082;&#1080;",
	"gifts_halloween_title": "&#1061;&#1077;&#1083;&#1083;&#1086;&#1091;&#1111;&#1085;",
	"gifts_halloween_ask_sewing": "&#1055;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080; &#1076;&#1086;&#1087;&#1086;&#1084;&#1086;&#1075;&#1091; &#1087;&#1088;&#1080; &#1079;&#1096;&#1080;&#1074;&#1072;&#1085;&#1085;&#1110;",
	"gifts_fieldtrip_title": "&#1045;&#1082;&#1089;&#1082;&#1091;&#1088;&#1089;&#1110;&#1103;",
	"gifts_fieldtrip_anything_by_id": "&#1097;&#1086;-&#1085;&#1077;&#1073;&#1091;&#1076;&#1100; &#1087;&#1086; ID",
	"gifts_treattrophy_title": "&#1055;&#1088;&#1080;&#1079; &#1079;&#1072; &#1095;&#1072;&#1089;&#1090;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"gifts_buildables_title": "&#1041;&#1091;&#1076;&#1110;&#1074;&#1085;&#1080;&#1094;&#1090;&#1074;&#1086;",
	"gifts_missions_title": "&#1052;&#1110;&#1089;&#1110;&#1111;",
	"gifts_missions_start": "&#1087;&#1086;&#1095;&#1072;&#1090;&#1080;",
	"gifts_missions_republish": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1079;&#1085;&#1086;&#1074;&#1091;",
	"gifts_missions_complete": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1085;&#1103;",
	"gifts_rosegarden_title": "&#1058;&#1088;&#1086;&#1103;&#1085;&#1076;&#1086;&#1074;&#1080;&#1081; &#1089;&#1072;&#1076;",
	"gifts_rosegarden_share_upgrade": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1110;&#1079;&#1072;&#1094;&#1110;&#1102; &#1089;&#1072;&#1076;&#1091; &#1085;&#1072; &#1089;&#1090;&#1110;&#1085;&#1110;",
	"gifts_rosegarden_ask_rose": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080; &#1090;&#1088;&#1086;&#1103;&#1085;&#1076;&#1080; &#1085;&#1072; &#1089;&#1090;&#1110;&#1085;&#1110;",
	"gifts_rosegarden_share_rose": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1090;&#1088;&#1086;&#1103;&#1085;&#1076;&#1080; &#1085;&#1072; &#1089;&#1090;&#1110;&#1085;&#1110;",
	"gifts_goldenegg_title": "&#1047;&#1086;&#1083;&#1086;&#1090;&#1077; &#1103;&#1081;&#1094;&#1077;",
	"gifts_icecream_title": "&#1052;&#1086;&#1088;&#1086;&#1079;&#1080;&#1074;&#1086;",
	"gifts_greenhouse_title": "&#1058;&#1077;&#1087;&#1083;&#1080;&#1094;&#1103;",
	"gifts_megaspawn_title": "&#1052;&#1077;&#1075;&#1072;-&#1090;&#1080;&#1088;&#1072;&#1078;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	// Visiting
	"visiting_resume_intro": "(&#1074;&#1110;&#1076;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080; &#1079; &#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1086;&#1075;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;, &#1103;&#1082;&#1097;&#1086; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089; &#1087;&#1077;&#1088;&#1077;&#1088;&#1074;&#1072;&#1074;&#1089;&#1103;)",
	"visiting_go_outside": "&#1052;&#1072;&#1081;&#1090;&#1077; &#1085;&#1072; &#1091;&#1074;&#1072;&#1079;&#1110;, &#1097;&#1086;, &#1074; &#1079;&#1072;&#1083;&#1077;&#1078;&#1085;&#1086;&#1089;&#1090;&#1110; &#1074;&#1110;&#1076; &#1082;&#1110;&#1083;&#1100;&#1082;&#1086;&#1089;&#1090;&#1110; &#1085;&#1072;&#1103;&#1074;&#1085;&#1080;&#1093; &#1091; &#1074;&#1072;&#1089; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;, &#1094;&#1077; &#1084;&#1086;&#1078;&#1077; &#1079;&#1072;&#1081;&#1085;&#1103;&#1090;&#1080; &#1076;&#1086;&#1074;&#1075;&#1080;&#1081; &#1095;&#1072;&#1089;! &#1052;&#1086;&#1078;&#1077;&#1090;&#1077; &#1087;&#1086;&#1082;&#1080; &#1087;&#1110;&#1090;&#1080; &#1110; &#1087;&#1086;&#1075;&#1088;&#1072;&#1090;&#1080; :)",
	"visiting_load_friends": "&#1047;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;...",
	// Advanced
	"advanced_title": "&#1044;&#1083;&#1103; &#1087;&#1088;&#1086;&#1089;&#1091;&#1085;&#1091;&#1090;&#1080;&#1093;",
	"advanced_intro": "&#1071;&#1082;&#1097;&#1086; &#1074;&#1080; &#1085;&#1077; &#1074;&#1087;&#1077;&#1074;&#1085;&#1077;&#1085;&#1110;, &#1097;&#1086; &#1094;&#1077; &#1090;&#1072;&#1082;&#1077;, &#1090;&#1086; &#1094;&#1077; &#1085;&#1077; &#1076;&#1083;&#1103; &#1074;&#1072;&#1089;!",
	"advanced_detailedlogging_title": "&#1044;&#1077;&#1090;&#1072;&#1083;&#1110;&#1079;&#1086;&#1074;&#1072;&#1085;&#1072; &#1088;&#1077;&#1108;&#1089;&#1090;&#1088;&#1072;&#1094;&#1110;&#1103;",
	"advanced_friends_title": "&#1044;&#1088;&#1091;&#1079;&#1110;",
	"advanced_zoo_title": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoodisplay_title": "&#1056;&#1086;&#1079;&#1084;&#1110;&#1088; &#1077;&#1082;&#1088;&#1072;&#1085;&#1072; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "&#1063;&#1077;&#1088;&#1075;&#1086;&#1074;&#1110;&#1089;&#1090;&#1100; &#1079;&#1072;&#1074;&#1076;&#1072;&#1085;&#1100;",
	"advanced_play_title": "&#1043;&#1088;&#1072;&#1090;&#1080;",
	"advanced_alternateaccess_title": "&#1040;&#1083;&#1100;&#1090;&#1077;&#1088;&#1085;&#1072;&#1090;&#1080;&#1074;&#1085;&#1080;&#1081; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087;",
	"advanced_tryto_title": "&#1057;&#1087;&#1088;&#1086;&#1073;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"advanced_goldeninviter_title": "&#1047;&#1086;&#1083;&#1086;&#1090;&#1077; &#1079;&#1072;&#1087;&#1088;&#1086;&#1096;&#1077;&#1085;&#1085;&#1103;",
	"advanced_punkd_title": "&#1056;&#1086;&#1079;&#1110;&#1075;&#1088;&#1072;&#1096;",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "&#1079;&#1072;&#1094;&#1110;&#1085;&#1080;&#1090;&#1080;",
	"advanced_javacript_ajaxdelay": "&#1047;&#1072;&#1090;&#1088;&#1080;&#1084;&#1082;&#1072; AJAX (&#1074; &#1084;&#1110;&#1083;&#1110;&#1089;&#1077;&#1082;&#1091;&#1085;&#1076;&#1072;&#1093;)",
	// generic
	"show": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080;",
	"hide": "&#1089;&#1093;&#1086;&#1074;&#1072;&#1090;&#1080;",
	"shop": "&#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085;",
	"reload": "&#1087;&#1077;&#1088;&#1077;&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080;",
	"island": "&#1086;&#1089;&#1090;&#1088;&#1110;&#1074;",
	"islands": "&#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;",
	"minute": "&#1093;&#1074;&#1080;&#1083;&#1080;&#1085;&#1072;",
	"minutes": "&#1093;&#1074;&#1080;&#1083;&#1080;&#1085;&#1080;",
	"hour": "&#1075;&#1086;&#1076;&#1080;&#1085;&#1072;",
	"hours": "&#1075;&#1086;&#1076;&#1080;&#1085;",
	"day": "&#1076;&#1077;&#1085;&#1100;",
	"days": "&#1076;&#1085;&#1110;",
	"once": "&#1086;&#1076;&#1085;&#1086;&#1088;&#1072;&#1079;&#1086;&#1074;&#1086;",
	"repeat": "&#1073;&#1072;&#1075;&#1072;&#1090;&#1086;&#1088;&#1072;&#1079;&#1086;&#1074;&#1086;",
	"to_friend": "&#1076;&#1088;&#1091;&#1075;&#1086;&#1074;&#1110;",
	"specify_user_id": "ID &#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1086;&#1075;&#1086; &#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1074;&#1072;&#1095;&#1072;",
	"specific_user": "&#1082;&#1086;&#1085;&#1082;&#1088;&#1077;&#1090;&#1085;&#1080;&#1081; &#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1074;&#1072;&#1095;",
	"specify_user_id_prompt": "&#1042;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; userId:\n(&#1094;&#1077;&#1081; ID &#1084;&#1086;&#1078;&#1085;&#1072; &#1079;&#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1087;&#1088;&#1086;&#1092;&#1110;&#1083;&#1110; &#1094;&#1100;&#1086;&#1075;&#1086; &#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1091;&#1074;&#1072;&#1095;&#1072;)",
	"specify_animal_id": "&#1042;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; ID &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1080;",
	"specify_animal_id_prompt": "&#1042;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; animalId:\n(&#1094;&#1077;&#1081; ID &#1084;&#1086;&#1078;&#1085;&#1072; &#1079;&#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1089;&#1087;&#1080;&#1089;&#1082;&#1091; &#1090;&#1086;&#1074;&#1072;&#1088;&#1110;&#1074;)",
	"send_to_feed": "&#1074;&#1110;&#1076;&#1087;&#1088;&#1072;&#1074;&#1080;&#1090;&#1080; &#1076;&#1086; &#1089;&#1090;&#1088;&#1110;&#1095;&#1082;&#1080;",
	"ask_on_feed": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080; &#1091; &#1089;&#1090;&#1088;&#1110;&#1095;&#1094;&#1110;",
	"ask_for": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080;",
	"share": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"share_roses": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; '&#1090;&#1088;&#1086;&#1103;&#1085;&#1076;&#1080;'",
	"post": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"share_completion": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1085;&#1103;",
	"completed": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1085;&#1103;",
	"help": "&#1076;&#1086;&#1087;&#1086;&#1084;&#1086;&#1075;&#1072; &#1079;",
	"easy": "&#1083;&#1077;&#1075;&#1082;&#1080;&#1081;",
	"medium": "&#1089;&#1077;&#1088;&#1077;&#1076;&#1085;&#1110;&#1081;",
	"hard": "&#1089;&#1082;&#1083;&#1072;&#1076;&#1085;&#1080;&#1081;",
	"invite": "&#1079;&#1072;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080;",
	"hatched": "&#1074;&#1080;&#1083;&#1091;&#1087;&#1080;&#1074;&#1089;&#1103;",
	"send_as_request": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1080; &#1103;&#1082; &#1079;&#1072;&#1087;&#1080;&#1090;",
	"ask_as_request": "&#1087;&#1086;&#1087;&#1088;&#1086;&#1089;&#1080;&#1090;&#1080; &#1103;&#1082; &#1079;&#1072;&#1087;&#1080;&#1090;",
	"update_button": "&#1082;&#1085;&#1086;&#1087;&#1082;&#1072; '&#1054;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080;'",
	"button_go": "&#1074;&#1080;&#1082;&#1086;&#1085;&#1072;&#1090;&#1080;",
	"start": "&#1087;&#1086;&#1095;&#1072;&#1090;&#1080;",
	"republish": "&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1073;&#1072;&#1075;&#1072;&#1090;&#1086;&#1088;&#1072;&#1079;&#1086;&#1074;&#1086;",
	"complete": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1085;&#1103;",
	// 2010/12/08
	// generic
	"post_trade": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1086;&#1073;&#1084;&#1110;&#1085;",
	"update": "&#1086;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080;",
	"loaded": "&#1076;&#1086;&#1076;&#1072;&#1085;&#1086;",
	"main_zooremoved": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1079;&#1075;&#1086;&#1088;&#1085;&#1091;&#1090;&#1086;",
	"main_clicktogetback": "&#1050;&#1083;&#1110;&#1082;&#1085;&#1091;&#1090;&#1080;, &#1097;&#1086;&#1073; &#1087;&#1086;&#1074;&#1077;&#1088;&#1085;&#1091;&#1090;&#1080;",
	"executing": "&#1074;&#1080;&#1082;&#1086;&#1085;&#1091;&#1108;&#1090;&#1100;&#1089;&#1103;",
	"specify_item_id_prompt": "&#1042;&#1082;&#1072;&#1078;&#1110;&#1090;&#1100; itemId:\n(&#1094;&#1077;&#1081; ID &#1084;&#1086;&#1078;&#1085;&#1072; &#1079;&#1085;&#1072;&#1081;&#1090;&#1080; &#1091; &#1089;&#1087;&#1080;&#1089;&#1082;&#1091; &#1090;&#1086;&#1074;&#1072;&#1088;&#1110;&#1074;)",
	"close": "&#1079;&#1072;&#1082;&#1088;&#1080;&#1090;&#1080;",
	"buy": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1080;",
	"gift": "&#1087;&#1086;&#1076;&#1072;&#1088;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"breed": "&#1088;&#1086;&#1079;&#1074;&#1086;&#1076;&#1080;&#1090;&#1080;",
	"upgrade": "&#1086;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080;",
	"shareonwall": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1085;&#1072; &#1089;&#1090;&#1110;&#1085;&#1110;",
	"refresh": "&#1086;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080;",
	"project": "&#1055;&#1088;&#1086;&#1077;&#1082;&#1090;",
	// Items
	"shop_flyout_categories": "&#1050;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1110;&#1111;",
	"shop_flyout_rarity": "&#1056;&#1110;&#1076;&#1082;&#1110;&#1089;&#1090;&#1100;",
	"shop_flyout_breedingtime": "&#1063;&#1072;&#1089; &#1088;&#1086;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1103;",
	"shop_flyout_purchasefor": "&#1050;&#1091;&#1087;&#1080;&#1090;&#1080; &#1079;&#1072;",
	"shop_flyout_actualdollars": "&#1089;&#1087;&#1088;&#1072;&#1074;&#1078;&#1085;&#1110; &#1076;&#1086;&#1083;&#1072;&#1088;&#1080;",
	"shop_flyout_fbc": "Facebook Credits",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "&#1047;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103;",
	"shop_flyout_images_large": "&#1074;&#1077;&#1083;&#1080;&#1082;&#1077;",
	"shop_flyout_images_small": "&#1084;&#1072;&#1083;&#1077;&#1085;&#1100;&#1082;&#1077;",
	"shop_flyout_images_baby": "&#1076;&#1080;&#1090;&#1080;&#1085;&#1095;&#1072;",
	"shop_flyout_actions_title": "&#1044;&#1110;&#1111;",
	"shop_flyout_actions_buylots_prompt": "&#1050;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100; &#1082;&#1091;&#1087;&#1091;&#1108;&#1084;&#1080;&#1093; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1110;&#1074;? (&#1044;&#1083;&#1103; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085; &#1087;&#1086;&#1074;&#1080;&#1085;&#1085;&#1072; &#1073;&#1091;&#1090;&#1080; &#1084;&#1077;&#1085;&#1096;&#1077;, &#1085;&#1110;&#1078; &#1082;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100;, &#1097;&#1086; &#1074;&#1080;&#1084;&#1072;&#1075;&#1072;&#1108; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1110;&#1079;&#1072;&#1094;&#1110;&#1111;, &#1076;&#1083;&#1103; &#1074;&#1089;&#1100;&#1086;&#1075;&#1086; &#1110;&#1085;&#1096;&#1086;&#1075;&#1086; - &#1084;&#1072;&#1082;&#1089;&#1080;&#1084;&#1091;&#1084; 999)",
	"shop_flyout_actions_buylots": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1094;&#1110;&#1083;&#1091; &#1087;&#1072;&#1088;&#1090;&#1110;&#1102;",
	"shop_flyout_actions_postadopt": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; \"&#1091;&#1089;&#1080;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1085;&#1103;\"",
	"shop_flyout_actions_customadopt": "\"&#1091;&#1089;&#1080;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1103;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1080;&#1090;&#1091;",
	"shop_flyout_actions_thanksgivingwlpupgrade": "&#1089;&#1087;&#1088;&#1086;&#1073;&#1091;&#1074;&#1072;&#1090;&#1080; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1110;&#1079;&#1091;&#1074;&#1072;&#1090;&#1080; &#1076;&#1086; &#1091;&#1083;&#1100;&#1090;&#1088;&#1072;-&#1088;&#1110;&#1076;&#1082;&#1110;&#1089;&#1085;&#1086;&#1075;&#1086; &#1079;&#1072; 1 WLP",
	"shop_flyout_actions_findinzoo": "&#1079;&#1085;&#1072;&#1081;&#1090;&#1080; &#1074; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"shop_flyout_actions_upgradeforwrenches": "&#1086;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080; &#1079;&#1072; &#1075;&#1072;&#1081;&#1082;&#1086;&#1074;&#1110; &#1082;&#1083;&#1102;&#1095;&#1110;",
	"shop_flyout_actions_cantbuy": "&#1085;&#1077;&#1084;&#1086;&#1078;&#1083;&#1080;&#1074;&#1086; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1094;&#1110;...",
	"shop_flyout_actions_trytobuy": "&#1057;&#1087;&#1088;&#1086;&#1073;&#1091;&#1074;&#1072;&#1090;&#1080; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1074;&#1089;&#1077; &#1086;&#1076;&#1085;&#1086;?",
	"shop_flyout_actions_numitemstobuy": "&#1050;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100; &#1082;&#1091;&#1087;&#1091;&#1108;&#1084;&#1080;&#1093; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1110;&#1074;? (&#1044;&#1083;&#1103; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085; &#1087;&#1086;&#1074;&#1080;&#1085;&#1085;&#1072; &#1073;&#1091;&#1090;&#1080; &#1084;&#1077;&#1085;&#1096;&#1077;, &#1085;&#1110;&#1078; &#1082;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100;, &#1097;&#1086; &#1074;&#1080;&#1084;&#1072;&#1075;&#1072;&#1108; &#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1110;&#1079;&#1072;&#1094;&#1110;&#1111;, &#1076;&#1083;&#1103; &#1074;&#1089;&#1100;&#1086;&#1075;&#1086; &#1110;&#1085;&#1096;&#1086;&#1075;&#1086; - &#1084;&#1072;&#1082;&#1089;&#1080;&#1084;&#1091;&#1084; 999)",
	"shop_flyout_actions_movealltostorage": "&#1087;&#1077;&#1088;&#1077;&#1084;&#1110;&#1089;&#1090;&#1080;&#1090;&#1080; &#1074;&#1089;&#1077; &#1076;&#1086; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;",
	"shop_flyout_actions_moneywarning": "&#1055;&#1054;&#1055;&#1045;&#1056;&#1045;&#1044;&#1046;&#1045;&#1053;&#1053;&#1071;: &#1094;&#1077;&#1081; &#1086;&#1073;'&#1108;&#1082;&#1090; &#1082;&#1086;&#1096;&#1090;&#1091;&#1108; &#1075;&#1088;&#1086;&#1096;&#1077;&#1081;, &#1103;&#1082;&#1110; &#1079; &#1074;&#1072;&#1089; &#1084;&#1086;&#1078;&#1091;&#1090;&#1100; &#1079;&#1085;&#1103;&#1090;&#1080; &#1073;&#1077;&#1079; &#1087;&#1086;&#1087;&#1077;&#1088;&#1077;&#1076;&#1078;&#1077;&#1085;&#1085;&#1103;!",
	"shop_flyout_actions_facts": "&#1060;&#1072;&#1082;&#1090;&#1080;",
	"shop_flyout_actions_training": "&#1044;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	// advanced
	"advanced_friends_loadlist": "&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082;",
	"advanced_friends_deduplicatelist": "&#1089;&#1082;&#1072;&#1089;&#1091;&#1074;&#1072;&#1090;&#1080; &#1076;&#1091;&#1073;&#1083;&#1102;&#1074;&#1072;&#1085;&#1085;&#1103; &#1089;&#1087;&#1080;&#1089;&#1082;&#1091;",
	"advanced_zoo_loadzoo": "&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080; &#1074;&#1072;&#1096; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_loadanyzoo": "&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080; &#1103;&#1082;&#1080;&#1081;-&#1085;&#1077;&#1073;&#1091;&#1076;&#1100; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_showzoo": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"advanced_zoo_specifyisland": "&#1042;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; ID &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072; (0-10):",
	"advanced_zoo_loadyourisland": "&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1080;&#1090;&#1080; &#1074;&#1072;&#1096; &#1086;&#1089;&#1090;&#1088;&#1110;&#1074;",
	"advanced_zoodisplay_normal": "&#1079;&#1074;&#1080;&#1095;&#1072;&#1081;&#1085;&#1080;&#1081;",
	"advanced_zoodisplay_big": "&#1074;&#1077;&#1083;&#1080;&#1082;&#1080;&#1081;",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080;",
	"advanced_cookies_delete": "&#1074;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080;",
	"advanced_cookies_set": "&#1074;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080;",
	"advanced_workqueue_start": "&#1087;&#1086;&#1095;&#1072;&#1090;&#1080;",
	"advanced_workqueue_stop": "&#1079;&#1091;&#1087;&#1080;&#1085;&#1080;&#1090;&#1080;",
	"advanced_workqueue_itemsinthequeue": "&#1086;&#1073;'&#1108;&#1082;&#1090;&#1080; &#1091; &#1095;&#1077;&#1088;&#1079;&#1110;.",
	"advanced_workqueue_showsize": "&#1087;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; &#1088;&#1086;&#1079;&#1084;&#1110;&#1088;",
	"advanced_workqueue_clear": "&#1086;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1080;",
	"advanced_alternateaccess_unframe": "&#1079;&#1085;&#1103;&#1090;&#1080; &#1088;&#1072;&#1084;&#1082;&#1091; &#1079; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"advanced_alternateaccess_workaround": "&#1086;&#1073;&#1093;&#1110;&#1076;&#1085;&#1080;&#1081; &#1096;&#1083;&#1103;&#1093; &#1076;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091; (&#1087;&#1086;&#1083;&#1077;&#1075;&#1096;&#1077;&#1085;&#1072; &#1074;&#1077;&#1088;&#1089;&#1110;&#1103;)",
	"advanced_tryto_forceadopt": "&#1084;&#1072;&#1089;&#1086;&#1074;&#1072;&#1085;&#1077; \"&#1091;&#1089;&#1080;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1103;\"",
	"advanced_tryto_payday": "&#1076;&#1077;&#1085;&#1100; &#1074;&#1080;&#1087;&#1083;&#1072;&#1090;",
	"advanced_tryto_unlock11thisland": "&#1088;&#1086;&#1079;&#1073;&#1083;&#1086;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; 11-&#1081; &#1086;&#1089;&#1090;&#1088;&#1110;&#1074;",
	// megaspawn flyout
	"megaspawn_flyout_title": "&#1052;&#1077;&#1075;&#1072;-&#1090;&#1080;&#1088;&#1072;&#1078;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"megaspawn_flyout_projects": "&#1055;&#1088;&#1086;&#1077;&#1082;&#1090;&#1080;",
	"megaspawn_flyout_multiplenotes": "&#1052;&#1085;&#1086;&#1078;&#1080;&#1085;&#1085;&#1110; &#1079;&#1072;&#1084;&#1110;&#1090;&#1082;&#1080;",
	// animal list flyout
	"animallist_flyout_title": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;",
	"animallist_flyout_intro": "&#1057;&#1082;&#1086;&#1087;&#1110;&#1102;&#1074;&#1072;&#1090;&#1080; &#1110; &#1074;&#1089;&#1090;&#1072;&#1074;&#1080;&#1090;&#1080; &#1094;&#1077;&#1081; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1083;&#1103; &#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1072;&#1085;&#1085;&#1103;",
	// breeding flyout
	"breeding_flyout_title": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1083;&#1103; &#1088;&#1086;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1103;",
	"breeding_flyout_breeding": "&#1088;&#1086;&#1079;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1103;",
	"breeding_flyout_innest": "&#1091; &#1075;&#1085;&#1110;&#1079;&#1076;&#1110;",
	"breeding_flyout_nomorenests": "&#1042;&#1080;&#1073;&#1072;&#1095;&#1090;&#1077;, &#1074;&#1110;&#1083;&#1100;&#1085;&#1080;&#1093; &#1075;&#1085;&#1110;&#1079;&#1076; &#1073;&#1110;&#1083;&#1100;&#1096;&#1077; &#1085;&#1077;&#1084;&#1072;&#1108;!",
	"breeding_flyout_nobabies": "&#1044;&#1080;&#1090;&#1080;&#1085;&#1095;&#1072;&#1090; &#1074; &#1075;&#1085;&#1110;&#1079;&#1076;&#1072;&#1093; &#1085;&#1077;&#1084;&#1072;&#1108;.",
	"breeding_flyout_heal": "&#1074;&#1080;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"breeding_flyout_feed": "&#1087;&#1086;&#1075;&#1086;&#1076;&#1091;&#1074;&#1072;&#1090;&#1080;",
	"breeding_flyout_notready": "&#1087;&#1086;&#1082;&#1080; &#1085;&#1077; &#1075;&#1086;&#1090;&#1086;&#1074;&#1080;&#1081;",
	"breeding_flyout_upgradeandmove": "&#1084;&#1086;&#1076;&#1077;&#1088;&#1085;&#1110;&#1079;&#1091;&#1074;&#1072;&#1090;&#1080; &#1110; &#1087;&#1077;&#1088;&#1077;&#1084;&#1110;&#1089;&#1090;&#1080;&#1090;&#1080; &#1076;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"breeding_flyout_move": "&#1087;&#1077;&#1088;&#1077;&#1084;&#1110;&#1089;&#1090;&#1080;&#1090;&#1080; &#1076;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	// custom adopt flyout
	"customadopt_flyout_title": "\"&#1059;&#1089;&#1080;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1103;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1080;&#1090;&#1091;",
	"customadopt_flyout_name": "&#1110;&#1084;'&#1103;",
	"customadopt_flyout_image": "&#1079;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103;",
	"customadopt_flyout_title": "&#1079;&#1072;&#1075;&#1086;&#1083;&#1086;&#1074;&#1086;&#1082;",
	"customadopt_flyout_bodytext": "&#1086;&#1089;&#1085;&#1086;&#1074;&#1085;&#1080;&#1081; &#1090;&#1077;&#1082;&#1089;&#1090;",
	"customadopt_flyout_button": "&#1082;&#1085;&#1086;&#1087;&#1082;&#1072;",
	"customadopt_flyout_postbutton": "&#1054;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; \"&#1091;&#1089;&#1080;&#1085;&#1086;&#1074;&#1083;&#1077;&#1085;&#1085;&#1103;\" &#1087;&#1086; &#1079;&#1072;&#1087;&#1080;&#1090;&#1091;",
	"customadopt_flyout_editingnotadvised": "&#1056;&#1077;&#1076;&#1072;&#1075;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1085;&#1080;&#1078;&#1095;&#1077;&#1087;&#1077;&#1088;&#1077;&#1083;&#1110;&#1095;&#1077;&#1085;&#1080;&#1093; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1110;&#1074; &#1085;&#1077; &#1088;&#1077;&#1082;&#1086;&#1084;&#1077;&#1085;&#1076;&#1091;&#1108;&#1090;&#1100;&#1089;&#1103;!",
	// friend list
	"friendlist_addzoomate": "&#1076;&#1086;&#1076;&#1072;&#1090;&#1080; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1072;",
	"friendlist_visitzoo": "&#1074;&#1110;&#1076;&#1074;&#1110;&#1076;&#1072;&#1090;&#1080; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;",
	"friendlist_viewprofile": "&#1087;&#1077;&#1088;&#1077;&#1075;&#1083;&#1103;&#1085;&#1091;&#1090;&#1080; &#1087;&#1088;&#1086;&#1092;&#1080;&#1083;&#1100;",
	"friendlist_posttreasurechest": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1089;&#1082;&#1088;&#1080;&#1085;&#1102; &#1079;&#1110; &#1089;&#1082;&#1072;&#1088;&#1073;&#1072;&#1084;&#1080;",
	"friendlist_postmysterychest": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1090;&#1072;&#1108;&#1084;&#1085;&#1080;&#1095;&#1091; &#1089;&#1082;&#1088;&#1080;&#1085;&#1100;&#1082;&#1091;",
	"friendlist_posthungryanimals": "&#1086;&#1087;&#1091;&#1073;&#1083;&#1110;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; &#1075;&#1086;&#1083;&#1086;&#1076;&#1085;&#1080;&#1093; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;",
	"friendlist_sendvitamin": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1080; &#1074;&#1110;&#1090;&#1072;&#1084;&#1110;&#1085;",
	"friendlist_sendgoldgreenhouse": "&#1087;&#1086;&#1089;&#1083;&#1072;&#1090;&#1080; &#1079;&#1086;&#1083;&#1086;&#1090;&#1091; &#1090;&#1077;&#1087;&#1083;&#1080;&#1094;&#1102;",
	// work queue
	"workqueue_starting": "&#1055;&#1086;&#1095;&#1072;&#1090;&#1086;&#1082; &#1095;&#1077;&#1088;&#1075;&#1080;",
	"workqueue_remaining": "&#1079;&#1072;&#1083;&#1080;&#1096;&#1072;&#1108;&#1090;&#1100;&#1089;&#1103;",
	"workqueue_alreadystarted": "&#1063;&#1077;&#1088;&#1075;&#1091; &#1074;&#1078;&#1077; &#1088;&#1086;&#1079;&#1087;&#1086;&#1095;&#1072;&#1090;&#1086;",
	"workqueue_stopped": "&#1063;&#1077;&#1088;&#1075;&#1091; &#1079;&#1091;&#1087;&#1080;&#1085;&#1077;&#1085;&#1086;",
	"workqueue_stopping": "&#1047;&#1091;&#1087;&#1080;&#1085;&#1082;&#1072; &#1095;&#1077;&#1088;&#1075;&#1080;",
	"workqueue_alreadstopped": "&#1063;&#1077;&#1088;&#1075;&#1091; &#1074;&#1078;&#1077; &#1079;&#1091;&#1087;&#1080;&#1085;&#1077;&#1085;&#1086;",
	// 2010/12/09
	"animallist_flyout_generating": "&#1057;&#1090;&#1074;&#1086;&#1088;&#1077;&#1085;&#1085;&#1103; &#1089;&#1087;&#1080;&#1089;&#1082;&#1110;&#1074;...",
	"animallist_flyout_havelist": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1085;&#1072;&#1103;&#1074;&#1085;&#1080;&#1093; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;",
	"animallist_flyout_havenotlist": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1074;&#1110;&#1076;&#1089;&#1091;&#1090;&#1085;&#1110;&#1093; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;",
	"animallist_flyout_note": "&#1055;&#1088;&#1080;&#1084;&#1110;&#1090;&#1082;&#1072;: &#1073;&#1072;&#1075;&#1072;&#1090;&#1086; &#1093;&#1090;&#1086; &#1079; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;, &#1103;&#1082;&#1080;&#1093; &#1074;&#1072;&#1084; &#1085;&#1077; &#1074;&#1080;&#1089;&#1090;&#1072;&#1095;&#1072;&#1108;, &#1084;&#1086;&#1078;&#1083;&#1080;&#1074;&#1086;, &#1074;&#1080;&#1083;&#1091;&#1095;&#1077;&#1085;&#1086; &#1079; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091; &#1072;&#1073;&#1086; &#1097;&#1077; &#1085;&#1077; &#1074;&#1080;&#1087;&#1091;&#1097;&#1077;&#1085;&#1086; &#1074; &#1089;&#1074;&#1110;&#1090;.",
	// status
	"status_buying_buying": "&#1087;&#1086;&#1082;&#1091;&#1087;&#1082;&#1072;",
	"status_buying_bought": "&#1082;&#1091;&#1087;&#1086;&#1074;&#1072;&#1085;&#1086;",
	"status_buying_ofitem": "&#1086;&#1073;'&#1108;&#1082;&#1090;&#1072;",
	"status_buying_upgradingitem": "&#1084;&#1086;&#1076;&#1080;&#1092;&#1110;&#1082;&#1072;&#1094;&#1110;&#1103; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1091;",
	"status_buying_upgradeditem": "&#1084;&#1086;&#1076;&#1080;&#1092;&#1110;&#1082;&#1086;&#1074;&#1072;&#1085;&#1086; &#1086;&#1073;'&#1108;&#1082;&#1090;",
	"status_wlfitemid_specify": "&#1042;&#1082;&#1072;&#1079;&#1072;&#1090;&#1080; wlfItemId",
	"status_friendlist_loaded": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074; &#1074;&#1078;&#1077; &#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1080;&#1081;...",
	"status_friendlist_loading": "&#1047;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103; &#1089;&#1087;&#1080;&#1089;&#1082;&#1091; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;...",
	"status_friendlist_found": "&#1047;&#1085;&#1072;&#1081;&#1076;&#1077;&#1085;&#1086;",
	"status_friendlist_friends": "&#1076;&#1088;&#1091;&#1079;&#1110;&#1074;",
	"status_zoo_notloaded": "&#1047;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1085;&#1077; &#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1080;&#1081;...",
	"status_zoo_loadedforfriend": "&#1047;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091; &#1076;&#1088;&#1091;&#1075;&#1072;",
	"status_feeding_waitingfor": "&#1054;&#1095;&#1110;&#1082;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1085;&#1072;&#1089;&#1090;&#1091;&#1087;&#1085;&#1086;&#1075;&#1086; &#1075;&#1086;&#1076;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"status_feeding_fed": "&#1085;&#1072;&#1075;&#1086;&#1076;&#1086;&#1074;&#1072;&#1085;&#1086;",
	"status_feeding_collected": "&#1079;&#1110;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_feeding_withtreat": "&#1083;&#1072;&#1089;&#1086;&#1097;&#1072;&#1084;&#1080;",
	"status_feeding_animalswithtreat": "&#1090;&#1074;&#1072;&#1088;&#1080;&#1085; &#1083;&#1072;&#1089;&#1086;&#1097;&#1072;&#1084;&#1080;",
	"status_feeding_noanimalsforcumulative": "&#1053;&#1077;&#1084;&#1072; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085; &#1076;&#1083;&#1103; &#1082;&#1091;&#1084;&#1091;&#1083;&#1103;&#1090;&#1080;&#1074;&#1085;&#1086;&#1111; &#1089;&#1083;&#1091;&#1078;&#1073;&#1080; &#1075;&#1086;&#1076;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"status_training_training": "&#1044;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"status_training_everyfiveminutes": "&#1082;&#1086;&#1078;&#1085;&#1110; &#1087;'&#1103;&#1090;&#1100; &#1093;&#1074;&#1080;&#1083;&#1080;&#1085;...",
	"status_training_trained": "&#1057;&#1077;&#1072;&#1085;&#1089; &#1076;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1086;",
	"status_gate_collectedxp": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1085;&#1110; XP &#1079; &#1074;&#1086;&#1088;&#1110;&#1090; &#1085;&#1072; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1110;",
	"status_booth_collecting": "&#1047;&#1073;&#1110;&#1088; &#1075;&#1088;&#1086;&#1096;&#1077;&#1081; &#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;&#1110;...",
	"status_booth_collected": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1085;&#1110; &#1075;&#1088;&#1086;&#1096;&#1110; &#1079; &#1073;&#1091;&#1076;&#1082;&#1080; &#1085;&#1072; &#1074;&#1093;&#1086;&#1076;...",
	"status_visiting_visited": "&#1042;&#1110;&#1076;&#1074;&#1110;&#1076;&#1072;&#1085;&#1086;",
	"status_visiting_zooandcollected": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1090;&#1072; &#1079;&#1110;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_gettingreward": "&#1054;&#1090;&#1088;&#1080;&#1084;&#1072;&#1085;&#1085;&#1103; &#1074;&#1080;&#1085;&#1072;&#1075;&#1086;&#1088;&#1086;&#1076;&#1080; &#1079;&#1072; &#1074;&#1110;&#1076;&#1074;&#1110;&#1076;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091;",
	"status_visiting_visitedandcollected": "&#1042;&#1110;&#1076;&#1074;&#1110;&#1076;&#1072;&#1085;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082; &#1090;&#1072; &#1079;&#1110;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_collected": "&#1047;&#1110;&#1073;&#1088;&#1072;&#1085;&#1086;",
	"status_visiting_visitingall": "&#1042;&#1110;&#1076;&#1074;&#1110;&#1076;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1074;&#1089;&#1110;&#1093;",
	"status_visiting_ofyourfriendszoos": "&#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1110;&#1074; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1088;&#1091;&#1079;&#1110;&#1074;...",
	"status_shaking_shakingitem": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1072;",
	"status_shaking_oftype": "&#1090;&#1080;&#1087;&#1091;",
	"status_shaking_forfriend": "&#1091; &#1076;&#1088;&#1091;&#1075;&#1072;",
	"status_shaking_notshakingitem": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1072;",
	"status_shaking_shaking": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1072;",
	"status_shaking_for": "&#1091;",
	"status_shaking_shookitems": "&#1055;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1080;...",
	"status_shaking_shookitemsfailed": "&#1053;&#1077; &#1074;&#1076;&#1072;&#1083;&#1086;&#1089;&#1103; &#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1090;&#1080; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1080;...",
	"status_island_loadingisland": "&#1047;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1072;",
	"status_island_for": "&#1076;&#1083;&#1103;",
	"status_inventory_loading": "&#1047;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072; &#1076;&#1083;&#1103;",
	"status_inventory_queuing": "&#1054;&#1088;&#1075;&#1072;&#1085;&#1110;&#1079;&#1072;&#1094;&#1110;&#1103; &#1095;&#1077;&#1088;&#1075;&#1086;&#1074;&#1086;&#1089;&#1090;&#1110;",
	"status_inventory_forshaking": "&#1085;&#1072; &#1087;&#1088;&#1086;&#1090;&#1088;&#1103;&#1089;&#1082;&#1091;...",
	"status_moving_moving": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1110;&#1097;&#1077;&#1085;&#1085;&#1103;",
	"status_moving_toinventory": "&#1076;&#1086; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;",
	"status_moving_toisland": "&#1076;&#1086; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1091;",
	// Items
	"shop_listempty": "&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1087;&#1086;&#1088;&#1086;&#1078;&#1085;&#1110;&#1081;",
	// Spawning
	"gifts_giftingitem": "&#1044;&#1072;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1091;",
	"gifts_spawning": "&#1058;&#1080;&#1088;&#1072;&#1078;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"gifts_trophy": "&#1087;&#1088;&#1080;&#1079;",
	"gifts_mission": "&#1084;&#1110;&#1089;&#1110;&#1103;",
	// Mega spawn
	"megaspawn_flyout_gifts": "&#1055;&#1086;&#1076;&#1072;&#1088;&#1091;&#1085;&#1082;&#1080;",
	"megaspawn_flyout_missions": "&#1052;&#1110;&#1089;&#1110;&#1111;",
	// generic
	"completion": "&#1079;&#1072;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1085;&#1085;&#1103;",
	// 2010/12/10
	"megaspawn_flyout_christmas": "&#1056;&#1110;&#1079;&#1076;&#1074;&#1086;",
	// 2010/12/13
	"confirm_moving_tostorage": "&#1044;&#1110;&#1081;&#1089;&#1085;&#1086; &#1087;&#1077;&#1088;&#1077;&#1084;&#1110;&#1089;&#1090;&#1080;&#1090;&#1080; &#1074;&#1089;&#1110; &#1074;&#1072;&#1096;&#1110;",
	"confirm_moving_tostorage2": "&#1076;&#1086; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;?",
	"status_moving_item": "&#1055;&#1077;&#1088;&#1077;&#1084;&#1110;&#1097;&#1077;&#1085;&#1085;&#1103; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1091;",
	"status_moving_item2": "&#1076;&#1086; &#1089;&#1093;&#1086;&#1074;&#1080;&#1097;&#1072;...",
	"confirm_unlock_11thisland": "&#1057;&#1087;&#1088;&#1086;&#1073;&#1091;&#1081;&#1090;&#1077; &#1088;&#1086;&#1079;&#1073;&#1083;&#1086;&#1082;&#1091;&#1074;&#1072;&#1090;&#1080; 11-&#1081; &#1086;&#1089;&#1090;&#1088;&#1110;&#1074;? (&#1087;&#1088;&#1072;&#1094;&#1102;&#1108; &#1090;&#1110;&#1083;&#1100;&#1082;&#1080; &#1103;&#1082;&#1097;&#1086; &#1091; &#1074;&#1072;&#1089; &#1108; &#1088;&#1110;&#1074;&#1085;&#1086; &#1076;&#1077;&#1089;&#1103;&#1090;&#1100;)",
	"status_unlock_11thisland": "&#1056;&#1086;&#1079;&#1073;&#1083;&#1086;&#1082;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103; 11-&#1075;&#1086; &#1086;&#1089;&#1090;&#1088;&#1086;&#1074;&#1091;...",
	// 2010/12/15
	"christmas_flyout_title": "&#1056;&#1110;&#1079;&#1076;&#1074;&#1086; &mdash; &#1092;&#1072;&#1090;&#1072;&#1083;&#1100;&#1085;&#1080;&#1081; &#1074;&#1080;&#1093;&#1086;&#1088; WLP",
	"christmas_flyout_noanimalintraining": "&#1053;&#1077; &#1110;&#1089;&#1085;&#1091;&#1108; &#1078;&#1086;&#1076;&#1085;&#1086;&#1111; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1080; &#1074; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089;&#1110; &#1076;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;. &#1044;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1090;&#1080; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1091; &#1079;&#1072; WLP?",
	"christmas_flyout_animalintraining": "&#1058;&#1074;&#1072;&#1088;&#1080;&#1085;&#1072; &#1074; &#1076;&#1072;&#1085;&#1080;&#1081; &#1095;&#1072;&#1089; &#1074; &#1087;&#1088;&#1086;&#1094;&#1077;&#1089;&#1110; &#1076;&#1088;&#1077;&#1089;&#1080;&#1088;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;",
	"christmas_flyout_items_intro": "&#1056;&#1110;&#1079;&#1076;&#1074;&#1103;&#1085;&#1110; &#1090;&#1086;&#1074;&#1072;&#1088;&#1080;",
	"christmas_flyout_gointozootoclaim": "&#1055;&#1110;&#1076;&#1110;&#1090;&#1100; &#1076;&#1086; &#1079;&#1086;&#1086;&#1087;&#1072;&#1088;&#1082;&#1091; (&#1087;&#1077;&#1088;&#1077;&#1079;&#1072;&#1074;&#1072;&#1085;&#1090;&#1072;&#1078;&#1090;&#1077; &#1081;&#1086;&#1075;&#1086;), &#1097;&#1086;&#1073; &#1086;&#1090;&#1088;&#1080;&#1084;&#1072;&#1090;&#1080; &#1074;&#1072;&#1096;&#1091; &#1090;&#1074;&#1072;&#1088;&#1080;&#1085;&#1091;.",
	"christmas_flyout_animalisready": "&#1058;&#1074;&#1072;&#1088;&#1080;&#1085;&#1072; &#1075;&#1086;&#1090;&#1086;&#1074;&#1072;!",
	// generic
	"error": "&#1087;&#1086;&#1084;&#1080;&#1083;&#1082;&#1072;",
	"buy_more_for_wlp": "&#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1097;&#1077; &#1079;&#1072; WLP?",
	"buy_more_for_wlp_prompt": "&#1042;&#1080; &#1093;&#1086;&#1095;&#1077;&#1090;&#1077; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1073;&#1110;&#1083;&#1100;&#1096;&#1091; &#1082;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100; &#1094;&#1100;&#1086;&#1075;&#1086; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1091; &#1079;&#1072; WLP?",
	"buy_more_for_wlp_prompt_specify_amount": "&#1042;&#1080; &#1093;&#1086;&#1095;&#1077;&#1090;&#1077; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080; &#1073;&#1110;&#1083;&#1100;&#1096;&#1091; &#1082;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100; &#1094;&#1100;&#1086;&#1075;&#1086; &#1086;&#1073;'&#1108;&#1082;&#1090;&#1091; &#1079;&#1072; WLP?\n(&#1074;&#1082;&#1072;&#1078;&#1110;&#1090;&#1100; &#1082;&#1110;&#1083;&#1100;&#1082;&#1110;&#1089;&#1090;&#1100;, &#1103;&#1082;&#1091; &#1090;&#1088;&#1077;&#1073;&#1072; &#1082;&#1091;&#1087;&#1080;&#1090;&#1080;)"
};

// Polish translation by JGina Marie Layug 2010/12/18 (encoded)
zdlang['pl'] = {
	"title": "Pomocnica Zoo World",
	// Languages
	"language": "Language",
	"en": "Angielski",
	"es": "Hiszpa&#324;ski",
	"rs": "Serbski",
	"de": "Niemiecki",
	"ru": "Rosyjska",
	"cn": "Chi&#324;ski",
	"jp": "Japo&#324;ski",
	"it": "W&#322;oski",
	"pt": "Portugalski",
	"fr": "Francuski",
	"id": "Indonezyjski",
	"pl": "Polska",
	"he": "Hebrajski",
	"hr": "Chorwacki",
	"uk": "Ukrai&#324;ski",

	// tabs
	"tab_about": "O",
	"tab_myzoo": "M&#243;j Zoo",
	"tab_items": "Artykul",
	"tab_spawning": "Tarlo",
	"tab_friends": "Znajomi",
	"tab_advanced": "Zaawansowane",
	// footer
	"footer_status": "pozycja",
	"footer_friends": "Znajomi",
	"footer_zoo": "Zoo",
	"footer_results": "Wyniki AJAX",
	"footer_clear_log": "Wyczy&#347;&#263; Zaloguj",

	// About
	"about_title": "O",
	"about_body_1": "Jest to zaawansowane narzedzie do wykorzystania w Zoo World. Mo&#380;na to uzna&#263; za podst&#281;p, a wyniki nie mog&#261; by&#263; wspierane lub gwarantowa. U&#380;ywaj na wlasne ryzyko!",
	"about_body_2": "Istniej&#261; dwa rodzaje ludzi na &#347;wiecie: ludzie, kt&#243;rzy potrafi&#261; czyta&#263; i ludzi, kt&#243;rzy ju&#380; klikni&#281;ciu w innym miejscu.",
	"about_body_3": "Je&#347;li nadal tutaj, a nastepnie slucha&#263; tego, co m&#243;wie. Musia&#322;em usun&#261;&#263; te skrypty z powodu konflikt&#243;w wywo&#322;anych w spoleczno&#347;ci &#347;wiatowej Zoo. B&#261;d&#378; rozs&#261;dny, jest dyskretny. Mozna dosta&#263; kar&#281; za oszukiwanie. Nast&#281;pnym razem, mo&#380;e nie wr&#243;ci&#263;.",
	"about_body_4": "I pope&#322;niaj&#261; b&#322;&#281;dy i zmiany s&#261; wprowadzane w Zoo i skrypty przestana dzia&#322;a&#263;. Uprzejmy zauwa&#380;y&#263;, mo&#380;e powiedzie&#263; mi co&#347;, czego nie wiem. Sto reklamacje nie b&#281;d&#261; nic dobrego.",
	"about_body_5": "Enjoy my scripts and have fun! Also, please join ourCiesz si&#281; moje skrypty i baw si&#281; dobrze! Prosimy r&#243;wnie&#380; dol&#261;czy&#263; do naszego",
	"about_body_group": "grupa",

	// My Zoo
	"myzoo_feeding_title": "Karmienie",
	"myzoo_feeding_feed": "karmi&#263;",
	"myzoo_feeding_collect": "Gromadzi&#263;",
	"myzoo_feeding_day": "dzie&#324;",
	"myzoo_feeding_days": "dni",
	"myzoo_gates_title": "Brama",
	"myzoo_gates_collect_all": "Zbierz wszystkie brama XP",
	"myzoo_gates_collect_booth_15": "Zbierz pieni&#281;dzy z budki co 15 minut",
	"myzoo_training_title": "Szkolenia",
	"myzoo_treasure_title": "Skarb polowanie (wymaga skarb kolektor)",
	"myzoo_treasure_visit_all": "Wszyscy przyjaciele zoo",
	"myzoo_treasure_start_at": "Rozpocznij w zoo",
	"myzoo_treasure_continue_from": "Kontynuuj...",
	"myzoo_kiosk_title": "Kioski",
	"myzoo_kiosk_collect_all": "Zebra&#263; od wszystkich kioskach",
	"myzoo_shake_title": "drzew Wstrz&#261;sa&#263;, topiaries, rzezby, grzyby, pokazy, ogr&#243;d r&#243;&#378;any, etc",
	"myzoo_shake_shake_all": "Wstrz&#261;sa&#263; wszystkie wyspy",
	"myzoo_move_title": "Przesu&#324; wszystkie przedmioty z wyspy do sk&#322;adowania",
	"myzoo_fill_title": "Wypelnij cieplarni z drzewami w sk&#322;adowania",
	"myzoo_auto_title": "Automatyczne",
	"myzoo_auto_intro": "Zbierz wszystkie brama XP, Zbierz pieni&#281;dzy z budki, karmic wszystkich zwierzat z obecnymi ustawieniami, Wstrz&#261;sa&#263; wszystkich drzew, zwiedza&#263; wszystkich swoich przyjaci&#243;&#322; zoo...",
	"myzoo_lists_title": "Lista",
	"myzoo_lists_intro": "Generowanie maja/maja nie lista zwierzat...",
	"myzoo_breeding_title": "Hodowla",
	"myzoo_breeding_intro": "poradzi&#263; sobie wszystkich hodowlanych",

	// Items
	"shop_title": "Przedmioty",
	"shop_intro": "Poni&#380;ej znajduje si&#281; lista wszystkich znanych pozycji w Zoo &#347;wiata. Chocia&#380; istnieje kupi&#263; linki, wiele element&#243;w nie mo&#243;na kupi&#243; za wielu powod&#243;w. (jeszcze nie odblokowany), nie zosta&#243;y jeszcze opublikowane, nie s&#261; ju&#380; dostepne, etc). <em>Note that if your account is already linked to Pay Pal, like you have bought items with real money before, you will be charged without warning.</em>",
	"shop_loading": "The Big Shop of Everything is loading...",
	"shop_buy_id": "kupic jakiegokolwiek elementu przez ID",
	"shop_buy_id_intro": "(stosowane przy identyfikator znasz ale ten sklep nie zostal zaktualizowany).",
	"shop_upgrade_id": "upgrade jakiegokolwiek zwierz&#281;cia przez ID",
	"shop_upgrade_id_intro": "(Uzywane, gdy wiesz, ID ale ten sklep nie zostal zaktualizowany).",
	"shop_repeat_buy_id": "powtÃ¯Â¿Â½rzy&#263; kupi&#263; ka&#380;dy przedmiot",
	"shop_repeat_buy_id_intro": "(wykorzysta&#263; do zakupu konkretnego elementu przez ID co 10 sekund, przydatne dla tych, ktÃ¯Â¿Â½rzy wysylaja zwierzat wysoki poziom).",
	"shop_buy_fbc_intro": "Buy for FBC",
	"shop_buy_by_wlf_item_id": "kupi&#263;przez wlfItemId",
	"shop_paypal_howto": "Jak anulowa&#263; swoje \"One Click Umowy \" miedzy RockYou, Inc i PayPal po zakupie WLP lub Ultra Rare",

	// Spawning
	"gifts_title": "Tar&#322;o",
	"gifts_gifts_title": "Prezenty",
	"gifts_level_title": "Przejd&#378; na wy&#380;szy poziom",
	"gifts_level_intro": "Wstaw odpowiedni poziom",
	"gifts_daily_title": "Rozdawa&#263; na dob&#281; prezent",
	"gifts_trophy_title": "Trofeum",
	"gifts_juice_title": "Sok",
	"gifts_flowerpots_title": "Doniczka",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "Popro&#347; o pomoc do szycia",
	"gifts_fieldtrip_title": "Field Trip",
	"gifts_fieldtrip_anything_by_id": "anything by ID",
	"gifts_treattrophy_title": "poczestunek Trofeum",
	"gifts_buildables_title": "Buildables",
	"gifts_missions_title": "Misje",
	"gifts_missions_start": "rozpocz&#261;&#263",
	"gifts_missions_republish": "ponownie",
	"gifts_missions_complete": "kompletny",
	"gifts_rosegarden_title": "RÃ¯Â¿Â½&#380;a ogr&#243;d",
	"gifts_rosegarden_share_upgrade": "dzieli&#263; upgrade na &#347;cianie",
	"gifts_rosegarden_ask_rose": "poprosi&#263; o r&#243;z na &#347;cianie",
	"gifts_rosegarden_share_rose": "poprosi&#263; o rÃ¯Â¿Â½&#380;y na &#347;cianie",
	"gifts_goldenegg_title": "Z&#322;oty Jajko",
	"gifts_icecream_title": "Lody",
	"gifts_greenhouse_title": "Cieplarnia",
	"gifts_megaspawn_title": "Mega Spawn",

	// Visiting
	"visiting_resume_intro": "(wznowienia w okre&#347;lonym zoo, je&#347;li proces wywala)",
	"visiting_go_outside": "Nale&#380;y pamieta&#263;, &#380;e w zale&#380;no&#347;ci od liczby znajomych masz, mo&#380;e to trwa&#263; bardzo d&#322;ugo! Wyjd&#380; na zewn&#261;trz i gra&#263; :)",
	"visiting_load_friends": "Za&#322;aduj list&#281; znajomych...",

	// Advanced
	"advanced_title": "Zaawansowane",
	"advanced_intro": "Je&#347;li nie wiesz, co to jest, to nie jest dla Ciebie!",
	"advanced_detailedlogging_title": "Szczeg&#243;&#322;owe Logowanie",
	"advanced_friends_title": "Znajomi",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "Rozmiar wy&#347;wietlacza Zoo",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "Kolejka Pracy",
	"advanced_play_title": "Odtw&#243;rz",
	"advanced_alternateaccess_title": "dost&#281;pu do alternatywnego",
	"advanced_tryto_title": "Spr&#243;buj",
	"advanced_goldeninviter_title": "Z&#322;oty Zapraszaj&#261;cy",
	"advanced_punkd_title": "Wyglupia&#263; si&#281;",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "evaluate",
	"advanced_javacript_ajaxdelay": "op&#243;&#378;nienie AJAX (milisekundy)",

	// generic
	"show": "poka&#380;",
	"hide": "ukry&#263;",
	"shop": "Sklep",
	"reload": "przeladowa&#263;",
	"island": "wyspa",
	"islands": "wysp",
	"minute": "minut",
	"minutes": "minut",
	"hour": "godzin&#281;",
	"hours": "godziny",
	"day": "dzie&#324;",
	"days": "dni",
	"once": "kiedy&#347;",
	"repeat": "powtarza&#263;",
	"to_friend": "przyjaciel",
	"specify_user_id": "przypisa&#263; ID u&#380;ytkownika",
	"specific_user": "konkretnego u&#380;ytkownika",
	"specify_user_id_prompt": "Podaj login: \n (znale&#378;&#263; ID z ich profil)",
	"specify_animal_id": "okre&#347;li&#263; zwierz&#261;t ID",
	"specify_animal_id_prompt": "Okre&#347;l animalId:\n (co ta ID z listy sklepie)",
	"send_to_feed": "wysla&#263; do RSS",
	"ask_on_feed": "awypyta&#263; na RSS",
	"ask_for": "zwr&#243;ci&#243; si&#281; o",
	"share": "dzieli&#263;",
	"share_roses": "akcji 'wzros&#322;a'",
	"post": "podniesc do g&#243;ry",
	"share_completion": "dzieli&#263; z kim&#347; uko&#324;czenie",
	"completed": "zako&#324;czony",
	"help": "pomocy",
	"easy": "&#322;atwy",
	"medium": "medium",
	"hard": "trudno",
	"invite": "zaprasza&#263;",
	"hatched": "hatched",
	"send_as_request": "Wy&#347;lij jako wniosek",
	"ask_as_request": "poprosi&#263; o wniosek",
	"update_button": "przycisk Aktualizuj",
	"button_go": "przejd&#378;",
	"start": "rozpocz&#261;&#263;",
	"republish": "ponownie opublikowa&#263;",
	"complete": "kompletny",
	// 2010/12/08
	// generic
	"post_trade": "Zamie&#347;&#263; targowanie si&#281;",
	"update": "aktualizacja",
	"loaded": "za&#322;adowany",
	"main_zooremoved": "Zoo usuni&#281;te",
	"main_clicktogetback": "kliknij, aby wr&#243;ci&#263;",
	"executing": "wykonuj&#261;cego",
	"specify_item_id_prompt": "Okre&#347;l itemId:\n (get ID od sklepu lista)",
	"close": "zamknij",
	"buy": "z&#322;",
	"gift": "prezent",
	"breed": "hodowa&#263;",
	"upgrade": "awansowa&#263;",
	"shareonwall": "dzieli&#263; z kim&#347; na &#347;cianie",
	"refresh": "od&#347;wie&#380;",
	"project": "projekt",

	// Items
	"shop_flyout_categories": "Kategorie",
	"shop_flyout_rarity": "Rzadko&#347;&#263;",
	"shop_flyout_breedingtime": "Czas Hodowli",
	"shop_flyout_purchasefor": "kupi&#263;na",
	"shop_flyout_actualdollars": "rzeczywistych dolar&#243;w",
	"shop_flyout_fbc": "Facebook Credits",
	"shop_flyout_wlp": "Wildlife Punkty",
	"shop_flyout_images_title": "wyobra&#380;enie",
	"shop_flyout_images_large": "du&#380;ych",
	"shop_flyout_images_small": "ma&#322;ych",
	"shop_flyout_images_baby": "kochanie",
	"shop_flyout_actions_title": "Akcje",
	"shop_flyout_actions_buylots_prompt": "Liczba sztuk kupi&#263;? (dla zwierz&#261;t, powinna by&#263; mniejsza niz kwota kwota do aktualizacji dla innych maksimum 999)",
	"shop_flyout_actions_buylots": "kupi&#263; wiele",
	"shop_flyout_actions_postadopt": "Reklama adopcji",
	"shop_flyout_actions_customadopt": "zwyczaj przyjmowania",
	"shop_flyout_actions_thanksgivingwlpupgrade": "pr&#243;by uaktualnienia do ultra za 1 WLP",
	"shop_flyout_actions_findinzoo": "odszuka&#243; w zoo",
	"shop_flyout_actions_upgradeforwrenches": "upgrade for wrenches",
	"shop_flyout_actions_cantbuy": "nie mo&#380;na kupi&#263; te...",
	"shop_flyout_actions_trytobuy": "Staraj si&#281; kupowa&#263; tak?",
	"shop_flyout_actions_numitemstobuy": "Liczba sztuk kupi&#263;? (dla zwierz&#261;t, powinna by&#263; mniejsza niz kwota kwota do aktualizacji dla innych maksimum 999)",
	"shop_flyout_actions_movealltostorage": "przenie&#347;&#263; wszystkie rzeczy do sk&#322;adowania",
	"shop_flyout_actions_moneywarning": "UWAGA: UWAGA: pozycja koszt&#243;w prawdziwe pieni&#261;dze i moze Ci&#281; to kosztowa&#263; bez ostrze&#380;enia",
	"shop_flyout_actions_facts": "Fakty",
	"shop_flyout_actions_training": "Szkolenie",
	// advanced
	"advanced_friends_loadlist": "lista obci&#261;&#380;enia",
	"advanced_friends_deduplicatelist": "deduplicate list",
	"advanced_zoo_loadzoo": "za&#322;adowa&#263; Zoo",
	"advanced_zoo_loadanyzoo": "&#322;adowa&#263; &#380;adnych Zoo",
	"advanced_zoo_showzoo": "zaprezentowac zoo",
	"advanced_zoo_specifyisland": "Okre&#347;l wyspa ID (0-10):",
	"advanced_zoo_loadyourisland": "za&#322;adowa&#263; wyspie",
	"advanced_zoodisplay_normal": "normalny",
	"advanced_zoodisplay_big": "du&#380;y",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "poka&#380;",
	"advanced_cookies_delete": "usun&#261;&#263;",
	"advanced_cookies_set": "kla&#347;&#263;",
	"advanced_workqueue_start": "rozpocz&#261;&#263;",
	"advanced_workqueue_stop": "zatrzyma&#263;",
	"advanced_workqueue_itemsinthequeue": "pozycji w kolejce.",
	"advanced_workqueue_showsize": "zaprezentowa&#263; wielko&#347;ci",
	"advanced_workqueue_clear": "klarowac",
	"advanced_alternateaccess_unframe": "Usu&#324; ramk&#281; zoo",
	"advanced_alternateaccess_workaround": "Obej&#347;cie Zoo (Lite)",
	"advanced_tryto_forceadopt": "zmusi&#263; przyj&#281;cia",
	"advanced_tryto_payday": "placi&#263; dni",
	"advanced_tryto_unlock11thisland": "odblokowa&#263; wyspa 11",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Spawn",
	"megaspawn_flyout_projects": "Projekty",
	"megaspawn_flyout_multiplenotes": "Wiele notatek",
	// animal list flyout
	"animallist_flyout_title": "Lista zwierz&#261;t",
	"animallist_flyout_intro": "Skopiuj i wklej ten list do wykorzystania",
	// breeding flyout
	"breeding_flyout_title": "Lista rozpl&#243;d",
	"breeding_flyout_breeding": "Hodowla",
	"breeding_flyout_innest": "w gnie&#378;dzie",
	"breeding_flyout_nomorenests": "Brak wolnej gniazd, przepraszam!",
	"breeding_flyout_nobabies": "No dzieci w gniazdach.",
	"breeding_flyout_heal": "uzdrowi&#263;",
	"breeding_flyout_feed": "karmi&#263;",
	"breeding_flyout_notready": "jeszcze nie gotowe",
	"breeding_flyout_upgradeandmove": "upgrade i przenie&#347;&#263; si&#281; do zoo",
	"breeding_flyout_move": "zlokalizowa&#263; do zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Custom Przyj&#281;cie",
	"customadopt_flyout_name": "nazwa",
	"customadopt_flyout_image": "obraz",
	"customadopt_flyout_title": "ytu&#322;",
	"customadopt_flyout_bodytext": "cia&#322;a tekstu",
	"customadopt_flyout_button": "przycisk",
	"customadopt_flyout_postbutton": "Reklama Zwyczaj Przyj&#281;cie",
	"customadopt_flyout_editingnotadvised": "Edycja pozycji wyszczeg&#243;lnionych poni&#380;ej nie jest zalecane!",
	// friend list
	"friendlist_addzoomate": "Dodaj mate zoo",
	"friendlist_visitzoo": "wizyta w zoo",
	"friendlist_viewprofile": "Zobacz profil",
	"friendlist_posttreasurechest": "Reklama skarb",
	"friendlist_postmysterychest": "Reklama klatki piersiowej tajemnicy",
	"friendlist_posthungryanimals": "Reklama g&#322;odnych zwierz&#261;t",
	"friendlist_sendvitamin": "wys&#322;a&#263; witaminy",
	"friendlist_sendgoldgreenhouse": "wys&#322;a&#263; z&#322;ota cieplarni",
	// work queue
	"workqueue_starting": "Pocz&#261;tek kolejki",
	"workqueue_remaining": "pozosta&#322;y",
	"workqueue_alreadystarted": "Kolejka ju&#380; si&#281; rozpocz&#281;&#322;a",
	"workqueue_stopped": "SZatrzymano kolejki",
	"workqueue_stopping": "Zatrzymanie kolejki",
	"workqueue_alreadstopped": "Kolejka ju&#380; zatrzymany",
	// 2010/12/09
	"animallist_flyout_generating": "Tworzenie lista...",
	"animallist_flyout_havelist": "Lista zwierz&#261;t ju&#380; w posiadaniu",
	"animallist_flyout_havenotlist": "Lista zwierz&#261;t nie masz jeszcze",
	"animallist_flyout_note": "Uwaga: zwierzat &#380;e brakuje ci mog&#261; zosta&#263; zaniechane lub niepublikowane.",
	// status
	"status_buying_buying": "zakup",
	"status_buying_bought": "kupiony",
	"status_buying_ofitem": "z wyr&#243;b",
	"status_buying_upgradingitem": "modernizacji wyr&#243;b",
	"status_buying_upgradeditem": "zmodernizowanych wyr&#243;b",
	"status_wlfitemid_specify": "Okre&#347;l wlfItemId",
	"status_friendlist_loaded": "Lista znajomych ju&#380; za&#322;adowany...",
	"status_friendlist_loading": "&#321;adowanie listy znajomych...",
	"status_friendlist_found": "Znalezione",
	"status_friendlist_friends": "znajomych",
	"status_zoo_notloaded": "Zoo nie wczytuj&#261;...",
	"status_zoo_loadedforfriend": "Trwa Zoo dla znajomego",
	"status_feeding_waitingfor": "Czekam da&#263; &#380;ywno&#347;ci ponownie",
	"status_feeding_fed": "karmione",
	"status_feeding_collected": "klejnoty",
	"status_feeding_withtreat": "z przek&#261;skami",
	"status_feeding_animalswithtreat": "animals with treat",
	"status_feeding_noanimalsforcumulative": "Nr Zwierz&#281;ta pasz l&#261;cznie us&#322;ugi",
	"status_training_training": "Szkolenia",
	"status_training_everyfiveminutes": "co pi&#281;&#263; minut...",
	"status_training_trained": "Przeszkolony",
	"status_gate_collectedxp": "Zebrane XP od bramy z wyspy",
	"status_booth_collecting": "Zbieranie pieni&#281;dzy z budki bramy...",
	"status_booth_collected": "Zbieranie pieni&#281;dzy z budki bramy...",
	"status_visiting_visited": "Odwiedzone",
	"status_visiting_zooandcollected": "zoo i klejnoty",
	"status_visiting_gettingreward": "Odbieranie dar odwiedzi&#322; zoo",
	"status_visiting_visitedandcollected": "Odwiedzone zoo i klejnoty",
	"status_visiting_collected": "klejnoty",
	"status_visiting_visitingall": "Zwiedzanie wszystkich",
	"status_visiting_ofyourfriendszoos": "z Twoich znajomych Zoo...",
	"status_shaking_shakingitem": "chwia&#263; si&#281;",
	"status_shaking_oftype": "typu",
	"status_shaking_forfriend": "dla przyjaciela",
	"status_shaking_notshakingitem": "wstrz&#261;saj&#261;c artyku&#322;",
	"status_shaking_shaking": "potrz&#261;sanie",
	"status_shaking_for": "dla",
	"status_shaking_shookitems": "potrz&#261;sn&#261;&#322; artyku&#322;&#243;w...",
	"status_shaking_shookitemsfailed": "Nie uda&#322;o si&#281; wstrz&#261;sn&#261;&#263; artyku&#322;&#243;w...",
	"status_island_loadingisland": "Trwa wyspie",
	"status_island_for": "dla",
	"status_inventory_loading": "Trwa inwentaryzacji",
	"status_inventory_queuing": "Kolejkowania",
	"status_inventory_forshaking": "do wytrz&#261;sania...",
	"status_moving_moving": "Przeniesienie",
	"status_moving_toinventory": "inwentaryzacji",
	"status_moving_toisland": "na wyspie",
	// Items
	"shop_listempty": "Lista pusty",
	// Spawning
	"gifts_giftingitem": "da&#263; artyku&#322; jako prezent",
	"gifts_spawning": "Tar&#322;o",
	"gifts_trophy": "trofeum",
	"gifts_mission": "misji",
	// Mega spawn
	"megaspawn_flyout_gifts": "Prezenty",
	"megaspawn_flyout_missions": "Misje",
	// generic
	"completion": "zako&#324;czeniu",
	// 2010/12/10
	"megaspawn_flyout_christmas": "Bo&#380;e Narodzenie",
	// 2010/12/13
	"confirm_moving_tostorage": "Naprawd&#281; przenie&#347;&#263; wszystkie",
	"confirm_moving_tostorage2": "to storage?",
	"status_moving_item": "Moving item",
	"status_moving_item2": ", aby przej&#347;&#263; do sk&#322;adowania...",
	"confirm_unlock_11thisland": "Spr&#243;buj odblokowa&#263; 11th wyspie ? (dzia&#322;a tylko je&#347;li masz dokladnie dziesi&#281;&#263;)",
	"status_unlock_11thisland": "Uwolnienie 11th wyspie...",
	// 2010/12/15
	"christmas_flyout_title": "Christmas &mdash; WLP vortex of doom",
	"christmas_flyout_noanimalintraining": "&#379;adne zwierz&#281; w szkoleniach. Poci&#261;g dla zwierz&#261;t WLP?",
	"christmas_flyout_animalintraining": "Zwierz&#261;t obecnie w szkoleniach",
	"christmas_flyout_items_intro": "Bo&#380;e Narodzenie artyku&#322;y",
	"christmas_flyout_gointozootoclaim": "Wejd&#378; do zoo (prze&#322;adowanie), aby uzyska&#263; zwierz&#261;t.",
	"christmas_flyout_animalisready": "Zwierz&#261;t jest gotowy!",
	"gifts_christmas_title": "Christmas &mdash; WLP vortex of doom",
	// generic
	"error": "error",
	"buy_more_for_wlp": "kupi&#263; wi&#281;cej za WLP?",
	"buy_more_for_wlp_prompt": "Czy chcesz kupi&#263; wi&#281;cej tej pozycji do WLP?",
	"buy_more_for_wlp_prompt_specify_amount": "Czy chcesz kupi&#263; wi&#281;cej tej pozycji do WLP?\n(okre&#347;li&#263; liczb&#281; przedmiot&#243;w do kupienia)"
};

// Chinese translation by Jolly 2011/01/02 (encoded)
zdlang['cn'] = {
 
	"title": "&#21205;&#29289;&#19990;&#30028;&#21161;&#29702;",
	
	// Languages
	"language": "&#35486;&#35328;",
	"en": "&#33521;&#35486;",
	"rs": "&#22622;&#29246;&#32173;&#20126;&#35486;",
	"de": "&#24503;&#35486;",
	"es": "&#35199;&#29677;&#29273;&#35486;",
	"id": "&#21360;&#23612;&#35486;",
	"it": "&#32681;&#22823;&#21033;&#35486;",
	"ru": "&#20420;&#35486;",
	"he": "&#24076;&#20271;&#20358;&#35486;",
	"hr": "&#20811;&#32645;&#22320;&#20126;&#35486;",
	"pt": "&#33889;&#33796;&#29273;&#35486;",
	"uk": "&#28879;&#20811;&#34349;&#35486;",
	
	"pl": "&#27874;&#34349;&#35486;",
	"fr": "&#27861;&#35486;",
	"cn": "&#20013;&#25991;",
	"jp": "&#26085;&#35486;",
	
	// tabs
	"tab_about": "&#38364;&#26044;",
	"tab_myzoo": "&#25105;&#30340;&#21205;&#29289;&#22290;",
	"tab_items": "&#38917;&#30446;",
	"tab_spawning": "&#34893;&#29983;",
	"tab_friends": "&#26379;&#21451;",
	"tab_advanced": "&#36914;&#38542;",
	
	// footer
	"footer_status": "&#29376;&#27841;",
	"footer_friends": "&#26379;&#21451;",
	"footer_zoo": "&#21205;&#29289;&#22290;",
	"footer_results": "AJAX&#32080;&#26524;",
	"footer_clear_log": "&#28165;&#38500;&#26085;&#35468;",
	
	// About
	"about_title": "&#38364;&#26044;",
	"about_body_1": "&#36889;&#26159;&#19968;&#20491;&#21205;&#29289;&#19990;&#30028;&#35041;&#38754;&#26997;&#20339;&#30340;&#33457;&#25307;&#24037;&#20855;. &#20294;&#26159;&#36889;&#20491;&#24037;&#20855;&#21487;&#33021;&#34987;&#35222;&#28858;&#27450;&#39449;&#25110;&#39405;&#23458;&#34892;&#28858;, &#22240;&#27492;&#20854;&#32080;&#26524;&#26159;&#19981;&#34987;&#25903;&#25345;&#25110;&#32773;&#20445;&#35657;&#30340;, &#20320;&#35201;&#33258;&#24049;&#25215;&#25812;&#20351;&#29992;&#27492;&#24037;&#20855;&#25152;&#24341;&#36215;&#30340;&#39080;&#38570;!",
	"about_body_2": "&#22312;&#36889;&#19990;&#30028;&#19978;&#26377;&#20841;&#31278;&#20154; &#19968;&#31278;&#26159;&#26371;&#27880;&#24847;&#35712;&#20351;&#29992;&#38920;&#30693;&#30340;&#20154; &#21478;&#19968;&#31278;&#21063;&#26159;&#24050;&#32147;&#19981;&#30693;&#36947;&#40670;&#21040;&#21738;&#35041;&#21435;&#20102;&#30340;&#20154;.",
	"about_body_3": " &#22914;&#26524;&#20320;&#36996;&#22312;&#36889;&#20818;, &#35531;&#27880;&#24847;&#35712;&#25105;&#25152;&#23531;&#30340;, &#25105;&#24517;&#38920;&#24456;&#24555;&#22320;&#25226;&#36889;&#20123;&#35299;&#35498;&#31227;&#38500;, &#22240;&#28858;&#36889;&#20491;&#24037;&#20855;&#26371;&#24341;&#36215;&#21205;&#29289;&#19990;&#30028;&#31038;&#21312;&#30340;&#39479;&#20098;, &#20197;&#24460;&#25105;&#21487;&#33021;&#19981;&#26371;&#20877;&#20844;&#24067;&#20102;, &#35531;&#20351;&#29992;&#20320;&#30340;&#29702;&#26234;, &#23567;&#24515;&#21028;&#26039;, &#19981;&#35201;&#20197;&#28858;&#27450;&#39449;&#34892;&#28858;&#27704;&#36960;&#19981;&#26371;&#34987;&#25235;&#21040;&#21644;&#25074;&#32624;.",
	"about_body_4": "&#25105;&#21487;&#33021;&#26371;&#29359;&#37679;, &#21205;&#29289;&#22290;&#32147;&#24120;&#26371;&#25913;&#35722;, &#33225;&#26360;&#20063;&#19981;&#26039;&#22320;&#22312;&#25913;&#36914;, &#35299;&#35498;&#33139;&#26412;&#26377;&#26178;&#26371;&#20572;&#27490;&#36939;&#20316;, &#19968;&#20491;&#21451;&#22909;&#30340;&#20415;&#26781;&#21487;&#33021;&#26371;&#21578;&#35380;&#25105;&#19968;&#20123;&#25105;&#25152;&#19981;&#30693;&#36947;&#30340;&#20107;, &#20294;&#26159;&#25104;&#30334;&#30340;&#22062;&#21480;&#21371;&#28961;&#28639;&#26044;&#20107;.",
	"about_body_5": "&#35531;&#20139;&#21463;&#25105;&#30340;&#35299;&#35498;&#33139;&#26412;, &#31069;&#20320;&#29609;&#24471;&#24841;&#24555;, &#20063;&#35531;&#20320;&#21152;&#20837;&#25105;&#20497;&#30340;",
	"about_body_group": "&#23567;&#32068;",
	
	// My Zoo
	"myzoo_feeding_title": "&#39221;&#39135;",
	"myzoo_feeding_feed": "&#39221;",
	"myzoo_feeding_collect": "&#25910;&#38598;",
	"myzoo_feeding_day": "&#19968;&#22825;",
	"myzoo_feeding_days": "&#22909;&#24190;&#22825;",
	"myzoo_gates_title": "&#36890;&#36335;&#36914;&#21475;",
	"myzoo_gates_collect_all": "&#24478;&#25152;&#26377;&#30340;&#36890;&#36335;&#36914;&#21475;&#25910;&#38598; XP ",
	"myzoo_gates_collect_booth_15": "&#27599;&#38548;&#21313;&#20116;&#20998;&#37912;&#24478;&#25892;&#20301;&#25910;&#38598;&#37666;&#24163;",
	"myzoo_training_title": "&#35347;&#32244;",
	"myzoo_treasure_title": "&#23563;&#25214;&#23542;&#34255; (&#38656;&#35201;&#26377;&#23542;&#34255;&#25910;&#38598;&#21729;)",
	"myzoo_treasure_visit_all": "&#25152;&#26377;&#26379;&#21451;&#30340;&#21205;&#29289;&#22290;",
	"myzoo_treasure_start_at": "&#24478;&#21205;&#29289;&#22290;&#38283;&#22987;",
	"myzoo_treasure_continue_from": "&#24478;...&#32380;&#32396;",
	"myzoo_kiosk_title": "&#20141;&#23376;",
	"myzoo_kiosk_collect_all": "&#25910;&#38598;&#25152;&#26377;&#30340;&#20141;&#23376;",
	"myzoo_shake_title": "&#25622;&#21205;(&#40670;&#25802;)&#27193;&#26408;, &#27193;&#38613;, &#38613;&#22609;, &#34321;&#33735;, &#34920;&#28436;&#22580;, &#29611;&#29808;&#33457;&#22290;, &#31561;&#31561; ",
	"myzoo_shake_shake_all": "&#25622;&#21205;&#25152;&#26377;&#30340;&#23798;&#23996;",
	"myzoo_move_title": "&#24478;&#23798;&#19978;&#25226;&#25152;&#26377;&#30340;&#26481;&#35199;&#37117;&#31227;&#21040;&#20489;&#24235;",
	"myzoo_fill_title": "&#24478;&#24235;&#23384;&#21435;&#35037;&#28415;&#28331;&#23460;",
	"myzoo_auto_title": "&#33258;&#21205;",
	"myzoo_auto_intro": "&#24478;&#25152;&#26377;&#30340;&#36890;&#36335;&#36914;&#21475;&#25910;&#38598; XP &#24478;&#25892;&#20301;&#25910;&#38598;&#37666;&#24163; &#20381;&#25818;&#29694;&#34892;&#30340;&#35373;&#23450;&#39221;&#39135;&#25152;&#26377;&#30340;&#21205;&#29289; &#25622;&#21205;&#25152;&#26377;&#30340;&#27193;&#26408; &#35370;&#21839;&#25152;&#26377;&#26379;&#21451;&#30340;&#21205;&#29289;&#22290;...",
	"myzoo_lists_title": "&#25152;&#26377;&#21015;&#34920;",
	"myzoo_lists_intro": "&#29983;&#25104; &#26377;/&#27794;&#26377;&#30340; &#21205;&#29289;&#21015;&#34920;...",
	"myzoo_breeding_title": "&#32321;&#27542;",
	"myzoo_breeding_intro": "&#31649;&#29702;&#32321;&#27542;",
	
	// Items
	"shop_title": "&#25152;&#26377;&#38917;&#30446;",
	"shop_intro": "&#36889;&#26159;&#21205;&#29289;&#19990;&#30028;&#35041;&#38754;&#25152;&#26377;&#30340;&#38917;&#30446;&#30340;&#21015;&#34920; &#38614;&#28982;&#35041;&#38754;&#26377;&#36092;&#36023;&#30340;&#37832;&#25509; &#20294;&#26159;&#22240;&#28858;&#31278;&#31278;&#30340;&#29702;&#30001; &#26377;&#24456;&#22810;&#38917;&#30446;&#26159;&#28961;&#27861;&#36092;&#36023;&#30340; (&#22914; &#36996;&#26410;&#35299;&#37782;&#30340;&#38917;&#30446; &#26410;&#30332;&#34920;&#30340;&#38917;&#30446; &#19981;&#20877;&#20379;&#25033;&#30340;&#38917;&#30446; &#31561;&#31561;) </em> &#27880;&#24847;&#20107;&#38917;: &#22914;&#26524;&#20320;&#26377;&#36899;&#32080;&#20320;&#30340;Pay Pal&#24115;&#34399; &#20687;&#26159; &#20320;&#20197;&#21069;&#26377;&#20351;&#29992;Pay Pal&#36092;&#36023;&#36942;&#26481;&#35199; &#22312;&#27794;&#26377;&#38928;&#35686;&#30340;&#24773;&#27841;&#19979;&#20320;&#21487;&#33021;&#26371;&#34987;&#25910;&#36027;.</em>",
	"shop_loading": "&#22823;&#21830;&#24215;&#35041;&#38754;&#25152;&#26377;&#30340;&#26481;&#35199;&#29694;&#22312;&#27491;&#22312;&#21152;&#36617;...",
	"shop_buy_id": "&#20351;&#29992;&#20219;&#20309;&#38917;&#30446;&#30340;ID&#20358;&#36092;&#36023;&#35442;&#38917;&#26481;&#35199;",
	"shop_buy_id_intro": "(&#22914;&#26524;&#20320;&#26377;&#38917;&#30446;&#30340;ID &#20294;&#26159;&#21830;&#24215;&#35041;&#38754;&#36996;&#27794;&#26377;&#26356;&#26032;&#26178;&#20351;&#29992;).",
	"shop_upgrade_id": "&#20351;&#29992;&#29280;&#30340;ID&#20358;&#21319;&#32026;&#20219;&#20309;&#21205;&#29289; ",
	"shop_upgrade_id_intro": "(&#22914;&#26524;&#20320;&#26377;&#38917;&#30446;&#30340;ID &#20294;&#26159;&#21830;&#24215;&#35041;&#38754;&#36996;&#27794;&#26377;&#26356;&#26032;&#26178;&#20351;&#29992;).",
	"shop_repeat_buy_id": "&#20351;&#29992;ID&#20358;&#37325;&#35079;&#36092;&#36023;&#35442;&#38917;&#26481;&#35199;",
	"shop_repeat_buy_id_intro": "(&#20351;&#29992;&#26178;&#27231; &#27599;&#38548;&#21313;&#31186;&#37912; &#29992;ID&#20358;&#37325;&#35079;&#36092;&#36023;&#26576;&#19968;&#38917;&#26481;&#35199; &#27492;&#20316;&#29992;&#23565;&#36865;&#20986;&#39640;&#38542;&#21205;&#29289;&#26178;&#29305;&#21029;&#26377;&#25928;)",
	"shop_buy_fbc_intro": "&#36890;&#36942;FBC&#20358;&#36092;&#36023;",
	"shop_buy_by_wlf_item_id": "&#29992;wlfItemId&#20358;&#36092;&#36023;",
	"shop_paypal_howto": "&#22312;&#20320;&#36092;&#36023; WLP &#25110; Ultra Rare &#21205;&#29289;&#20197;&#24460; &#22914;&#20309;&#21462;&#28040;&#20320;&#22312;RockYou, Inc and PayPal &#20043;&#38291;&#30340;&#19968;&#27425;&#40670;&#25802;&#21332;&#35696;.",
	
	// Spawning
	"gifts_title": "&#34893;&#29983;",
	"gifts_gifts_title": "&#31150;&#29289;",
	"gifts_level_title": "&#21319;&#32026;",
	"gifts_level_intro": "&#25171;&#20837;&#24076;&#26395;&#30340;&#32026;&#21029;",
	"gifts_daily_title": "&#20849;&#20139;&#27599;&#22825;&#30340;&#31150;&#29289;",
	"gifts_trophy_title": "&#29518;&#26479;",
	"gifts_juice_title": "&#26524;&#27713;",
	"gifts_flowerpots_title": "&#33457;&#30406;",
	"gifts_halloween_title": "&#33836;&#32854;&#31680;",
	"gifts_halloween_ask_sewing": "&#35531;&#27714;&#24171;&#21161;&#37341;&#32218;&#27963;",
	"gifts_fieldtrip_title": "&#23526;&#22320;&#32771;&#23519;",
	"gifts_fieldtrip_anything_by_id": "&#20351;&#29992;&#20219;&#20309;&#26481;&#35199;&#30340;ID",
	"gifts_treattrophy_title": "&#39221;&#39135;&#29518;&#26479;",
	"gifts_buildables_title": "&#21487;&#20197;&#25645;&#24314;&#30340;",
	"gifts_missions_title": "&#20219;&#21209;",
	"gifts_missions_start": "&#38283;&#22987;",
	"gifts_missions_republish": "&#37325;&#26032;&#30332;&#20296;",
	"gifts_missions_complete": "&#23436;&#25104;",
	"gifts_rosegarden_title": "&#29611;&#29808;&#22290;",
	"gifts_rosegarden_share_upgrade": "&#22312;&#22615;&#40201;&#29254;&#19978;&#20849;&#20139;&#33457;&#22290;&#21319;&#32026;&#29518;&#21697;",
	"gifts_rosegarden_ask_rose": "&#22312;&#22615;&#40201;&#29254;&#19978;&#35531;&#27714;&#36865;&#29611;&#29808;&#33457;",
	"gifts_rosegarden_share_rose": "&#22312;&#22615;&#40201;&#29254;&#19978;&#20849;&#20139;&#29611;&#29808;&#33457;",
	"gifts_goldenegg_title": "&#37329;&#34507;",
	"gifts_icecream_title": "&#20912;&#28103;&#28107;",
	"gifts_greenhouse_title": "&#28331;&#23460;",
	"gifts_megaspawn_title": "&#29305;&#22823;&#34893;&#29983;",
	
	// Visiting
	"visiting_resume_intro": "(&#22914;&#26524;&#36939;&#34892;&#23849;&#28528; &#37325;&#26032;&#22312;&#25351;&#23450;&#30340;&#21205;&#29289;&#22290;&#36939;&#34892;)",
	"visiting_go_outside": "&#22914;&#26524;&#20320;&#30340;&#26379;&#21451;&#24456;&#22810; &#36889;&#23559;&#26371;&#33457;&#36027;&#30456;&#30070;&#26178;&#38291; &#20808;&#21435;&#21029;&#34389;&#36891;&#21543; :)",
	"visiting_load_friends": "&#21152;&#36617;&#26379;&#21451;&#21517;&#21934;...",
	
	// Advanced
	"advanced_title": "&#36914;&#38542;",
	"advanced_intro": "&#22914;&#26524;&#20320;&#19981;&#30906;&#23450;&#36889;&#26159;&#20160;&#40636; &#36889;&#23559;&#19981;&#36969;&#21512;&#20320;&#20351;&#29992;!",
	"advanced_detailedlogging_title": "&#35443;&#32048;&#30340;&#26085;&#35468;",
	"advanced_friends_title": "&#26379;&#21451;&#20497;",
	"advanced_zoo_title": "&#21205;&#29289;&#22290;",
	"advanced_zoodisplay_title": "&#21205;&#29289;&#22290;&#39023;&#31034;&#23610;&#23544;&#22823;&#23567;",
	"advanced_cookies_title": "&#25976;&#25818;&#21253;",
	"advanced_workqueue_title": "&#24037;&#20316;&#21015;&#38538;",
	"advanced_play_title": "&#36938;&#25138;",
	"advanced_alternateaccess_title": "&#20633;&#29992;&#36890;&#36335;",
	"advanced_tryto_title": "&#22039;&#35430;&#21435;",
	"advanced_goldeninviter_title": "&#37329;&#32026;&#30340;&#36992;&#35531;&#32773;",
	"advanced_punkd_title": "&#33510;&#24817;",
	"advanced_javacript_javacript": "java&#33139;&#26412;",
	"advanced_javacript_evaluate": "&#35413;&#20272;",
	"advanced_javacript_ajaxdelay": "AJAX&#24310;&#36978;(&#27627;&#31186;)",
	
	// generic
	"show": "&#39023;&#31034;",
	"hide": "&#38577;&#34255;",
	"shop": "&#36092;&#36023;",
	"reload": "&#37325;&#26032;&#21152;&#36617;",
	"island": "&#23798;",
	"islands": "&#23798;&#23996;&#32676;",
	"minute": "&#19968;&#20998;&#37912;",
	"minutes": "&#25976;&#20998;&#37912;",
	"hour": "&#19968;&#23567;&#26178;",
	"hours": "&#25976;&#23567;&#26178;",
	"day": "&#19968;&#22825;",
	"days": "&#22909;&#24190;&#22825;",
	"once": "&#19968;&#27425;",
	"repeat": "&#37325;&#35079;",
	"to_friend": "&#32102;&#26379;&#21451;",
	"specify_user_id": "&#25351;&#23450;&#30340;&#20351;&#29992;&#32773;ID",
	"specific_user": "&#25351;&#23450;&#30340;&#20351;&#29992;&#32773;",
	"specify_user_id_prompt": "&#25351;&#23450;&#30340;&#20351;&#29992;&#32773;id\n(&#20351;&#29992;&#20182;&#30340;&#31777;&#20171;&#20358;&#25214;&#20986;&#20182;&#30340;ID)",
	"specify_animal_id": "&#25351;&#23450;&#30340;&#21205;&#29289;ID",
	"specify_animal_id_prompt": "&#25351;&#23450;&#30340;&#21205;&#29289;id\n(&#20351;&#29992;&#21830;&#24215;&#35023;&#30340;&#21517;&#21934;&#20358;&#25214;&#20986;&#29280;&#30340;ID)",
	"send_to_feed": "&#36865;&#21435;&#39221;&#39135;",
	"ask_on_feed": "&#35531;&#27714;&#39221;&#39135;",
	"ask_for": "&#35531;&#27714;",
	"share": "&#20998;&#20139;",
	"share_roses": "&#20998;&#20139;&#29611;&#29808;&#33457;",
	"post": "&#20844;&#21578;",
	"share_completion": "&#20998;&#20139;&#25104;&#26524;",
	"completed": "&#23436;&#25104;",
	"help": "&#24171;&#21161;",
	"easy": "&#23481;&#26131;",
	"medium": "&#20013;&#31561;",
	"hard": "&#22256;&#38627;",
	"invite": "&#36992;&#35531;",
	"hatched": "&#24050;&#23413;&#21270;",
	"send_as_request": "&#20197;&#35531;&#27714;&#36865;&#20986;",
	"ask_as_request": "&#20197;&#35531;&#27714;&#32034;&#21462;",
	"update_button": "&#26356;&#26032;&#25353;&#37397;",
	"button_go": "&#21069;&#24448;",
	"start": "&#38283;&#22987;",
	"republish": "&#20877;&#30332;&#20296;",
	"complete": "&#23436;&#25104;",
	// 2010/12/08
	// generic
	"post_trade": "&#20132;&#25563;&#20844;&#21578;",
	"update": "&#26356;&#26032;",
	"loaded": "&#24050;&#21152;&#36617;",
	"main_zooremoved": "&#21205;&#29289;&#22290;&#24050;&#32147;&#31227;&#38500;",
	"main_clicktogetback": "&#40670;&#25802;&#22238;&#21435;&#21407;&#34389;",
	"executing": "&#22519;&#34892;",
	"specify_item_id_prompt": "&#25351;&#23450;&#30340;&#38917;&#30446;id\n(&#20351;&#29992;&#21830;&#24215;&#35023;&#30340;&#21517;&#21934;&#20358;&#25214;&#20986;&#23427;&#30340;ID)",
	"close": "&#38364;&#38281;",
	"buy": "&#36092;&#36023;",
	"gift": "&#31150;&#29289;",
	"breed": "&#32321;&#27542;",
	"upgrade": "&#21319;&#32026;",
	"shareonwall": "&#22312;&#22615;&#40201;&#29254;&#19978;&#20849;&#20139;",
	"refresh": "&#21047;&#26032;",
	"project": "&#24037;&#31243;&#38917;&#30446;",
	
	// Items
	"shop_flyout_categories": "&#20998;&#39006;",
	"shop_flyout_rarity": "&#31232;&#26377;",
	"shop_flyout_breedingtime": "&#32321;&#27542;&#25152;&#38656;&#26178;&#38291;",
	"shop_flyout_purchasefor": "&#21435;&#36092;&#36023;",
	"shop_flyout_actualdollars": "&#30495;&#23526;&#30340;&#37666;&#24163;",
	"shop_flyout_fbc": "&#33225;&#26360;&#31309;&#20998;",
	"shop_flyout_wlp": "&#37326;&#29983;&#21205;&#29289;&#40670;&#25976;",
	"shop_flyout_images_title": "&#22294;&#29255;",
	"shop_flyout_images_large": "&#22823;",
	"shop_flyout_images_small": "&#23567;",
	"shop_flyout_images_baby": "&#21083;&#20986;&#29983;&#30340;&#23567;&#21205;&#29289;",
	"shop_flyout_actions_title": "&#34892;&#21205;",
	"shop_flyout_actions_buylots_prompt": "&#36092;&#36023;&#26481;&#35199;&#30340;&#25976;&#37327; (&#26368;&#22810;999 &#22914;&#26524;&#26159;&#21205;&#29289; &#35201;&#27604;&#21319;&#32026;&#30340;&#25976;&#37327;&#23569;&#19968;&#20491; )",
	"shop_flyout_actions_buylots": "&#36023;&#22320;&#27573;",
	"shop_flyout_actions_postadopt": "&#38936;&#39178;&#20844;&#21578;",
	"shop_flyout_actions_customadopt": "&#35330;&#35069;&#30340;&#38936;&#39178;",
	"shop_flyout_actions_thanksgivingwlpupgrade": "&#22039;&#35430;&#20351;&#29992;&#19968;&#20491;WLP&#21435;&#21319;&#32026;&#21040;ultra",
	"shop_flyout_actions_findinzoo": "&#22312;&#21205;&#29289;&#22290;&#35041;&#38754;&#25214;&#21040;",
	"shop_flyout_actions_upgradeforwrenches": "&#26495;&#25163;&#21319;&#32026;",
	"shop_flyout_actions_cantbuy": "&#28961;&#27861;&#36092;&#36023;&#36889;&#20123;...",
	"shop_flyout_actions_trytobuy": "&#19968;&#23450;&#24819;&#36023;&#21966;?",
	"shop_flyout_actions_numitemstobuy": "&#36092;&#36023;&#26481;&#35199;&#30340;&#25976;&#37327; (&#26368;&#22810;999 &#22914;&#26524;&#26159;&#21205;&#29289; &#35201;&#27604;&#21319;&#32026;&#30340;&#25976;&#37327;&#23569;&#19968;&#20491; )",
	"shop_flyout_actions_movealltostorage": "&#25226;&#25152;&#26377;&#30340;&#26481;&#35199;&#31227;&#21040;&#20489;&#24235;",
	"shop_flyout_actions_moneywarning": "&#22196;&#37325;&#35686;&#21578;: &#36889;&#20491;&#26481;&#35199;&#26159;&#35201;&#37666;&#30340; &#20320;&#21487;&#33021;&#22312;&#28961;&#38928;&#35686;&#24773;&#27841;&#19979;&#34987;&#25910;&#36027;!",
	"shop_flyout_actions_facts": "&#20107;&#23526;",
	"shop_flyout_actions_training": "&#35347;&#32244;",
	
	// advanced
	"advanced_friends_loadlist": "&#21152;&#36617;&#21517;&#21934;",
	"advanced_friends_deduplicatelist": "&#38500;&#21435;&#37325;&#35079;&#30340;&#21517;&#21934;",
	"advanced_zoo_loadzoo": "&#21152;&#36617;&#20320;&#30340;&#21205;&#29289;&#22290;",
	"advanced_zoo_loadanyzoo": "&#21152;&#36617;&#20219;&#20309;&#21205;&#29289;&#22290;",
	"advanced_zoo_showzoo": "&#39023;&#31034;&#21205;&#29289;&#22290;",
	"advanced_zoo_specifyisland": "&#25351;&#23450;&#30340;&#23798;&#23996;ID (0-10):",
	"advanced_zoo_loadyourisland": "&#21152;&#36617;&#20320;&#30340;&#21205;&#29289;&#22290;",
	"advanced_zoodisplay_normal": "&#27491;&#24120;",
	"advanced_zoodisplay_big": "&#22823;",
	"advanced_cookies_cookies": "&#25976;&#25818;&#21253;",
	"advanced_cookies_show": "&#39023;&#31034;",
	"advanced_cookies_delete": "&#31227;&#38500;",
	"advanced_cookies_set": "&#35373;&#23450;",
	"advanced_workqueue_start": "&#38283;&#22987;",
	"advanced_workqueue_stop": "&#20572;&#27490;",
	"advanced_workqueue_itemsinthequeue": " &#21015;&#34920;&#20013;&#25152;&#26377;&#30340;&#38917;&#30446;.",
	"advanced_workqueue_showsize": "&#39023;&#31034;&#22823;&#23567;",
	"advanced_workqueue_clear": "&#28165;&#38500;",
	"advanced_alternateaccess_unframe": "&#28961;&#37002;&#30028;&#30340;&#21205;&#29289;&#22290;",
	"advanced_alternateaccess_workaround": "&#21205;&#29289;&#22290;&#32233;&#24930;&#35299;&#27770;&#26041;&#27861; (&#36629;&#20415;&#22411;)",
	"advanced_tryto_forceadopt": "&#24375;&#34892;&#38936;&#39178;",
	"advanced_tryto_payday": "&#30332;&#34218;&#26085;",
	"advanced_tryto_unlock11thisland": "&#35299;&#37782;&#31532;&#21313;&#19968;&#23798;",
	
	// megaspawn flyout
	"megaspawn_flyout_title": "&#24040;&#22411;&#34893;&#29983;",
	"megaspawn_flyout_projects": "&#24037;&#31243;&#38917;&#30446;",
	"megaspawn_flyout_multiplenotes": "&#22810;&#37325;&#21578;&#31034;",
	// animal list flyout
	"animallist_flyout_title": "&#21205;&#29289;&#21517;&#21934;",
	"animallist_flyout_intro": "&#25335;&#35997;&#21644;&#40655;&#36028;&#20197;&#20351;&#29992;&#36889;&#20491;&#21517;&#21934;",
	
	// breeding flyout
	"breeding_flyout_title": "&#32321;&#27542;&#21517;&#21934;",
	"breeding_flyout_breeding": "&#32321;&#27542;",
	"breeding_flyout_innest": "&#22312;&#32321;&#27542;&#24034;&#35041;",
	"breeding_flyout_nomorenests": "&#25265;&#27465; &#27794;&#26377;&#31354;&#39192;&#30340;&#32321;&#27542;&#24034;!",
	"breeding_flyout_nobabies": "&#27794;&#26377;&#23567;&#21205;&#29289;&#22312;&#32321;&#27542;&#24034;&#35041;.",
	"breeding_flyout_heal": "&#37291;&#27835;",
	"breeding_flyout_feed": "&#39221;&#39135;",
	"breeding_flyout_notready": "&#36996;&#27794;&#23413;&#21270;",
	"breeding_flyout_upgradeandmove": "&#21319;&#32026;&#20006;&#31227;&#21205;&#21040;&#21205;&#29289;&#22290;",
	"breeding_flyout_move": "&#31227;&#21205;&#21040;&#21205;&#29289;&#22290;",
	
	// custom adopt flyout
	"customadopt_flyout_title": "&#35330;&#35069;&#30340;&#38936;&#39178;",
	"customadopt_flyout_name": "&#21517;&#31281;",
	"customadopt_flyout_image": "&#22294;&#29255;",
	"customadopt_flyout_title": "&#27161;&#38988;",
	"customadopt_flyout_bodytext": "&#27491;&#25991;",
	"customadopt_flyout_button": "&#25353;&#37397;",
	"customadopt_flyout_postbutton": "&#20844;&#21578;&#35330;&#35069;&#30340;&#38936;&#39178;",
	"customadopt_flyout_editingnotadvised": "&#35531;&#21247;&#25913;&#27491;&#20197;&#19979;&#30340;&#38917;&#30446;!",
	
	// friend list
	"friendlist_addzoomate": "&#21152;&#20837;&#21205;&#29289;&#22290;&#21451;",
	"friendlist_visitzoo": "&#35370;&#21839;&#21205;&#29289;&#22290;",
	"friendlist_viewprofile": "&#35264;&#30475;&#31777;&#20171;",
	"friendlist_posttreasurechest": "&#20844;&#20296;&#34255;&#23542;&#31665;",
	"friendlist_postmysterychest": "&#20844;&#20296;&#31070;&#31192;&#23542;&#31665;",
	"friendlist_posthungryanimals": "&#20844;&#20296;&#39138;&#39187;&#30340;&#21205;&#29289;",
	"friendlist_sendvitamin": "&#36865;&#20986;&#32173;&#20182;&#21629;",
	"friendlist_sendgoldgreenhouse": "&#36865;&#20986;&#37329;&#32026;&#28331;&#23460;",
	
	// work queue
	"workqueue_starting": "&#38283;&#22987;&#24037;&#20316;&#21015;&#38538;",
	"workqueue_remaining": "&#30041;&#19979;&#30340;",
	"workqueue_alreadystarted": "&#24037;&#20316;&#21015;&#38538;&#24050;&#32147;&#38283;&#22987;",
	"workqueue_stopped": "&#24050;&#32147;&#20572;&#27490;&#30340;&#24037;&#20316;&#21015;&#38538;",
	"workqueue_stopping": "&#20572;&#27490;&#24037;&#20316;&#21015;&#38538;",
	"workqueue_alreadstopped": "&#24037;&#20316;&#21015;&#38538;&#24050;&#32147;&#20572;&#27490;",
	
	// 2010/12/09
	"animallist_flyout_generating": "&#29983;&#25104;&#21517;&#21934;...",
	"animallist_flyout_havelist": "&#25793;&#26377;&#30340;&#21205;&#29289;&#21517;&#21934;",
	"animallist_flyout_havenotlist": "&#27794;&#26377;&#30340;&#21205;&#29289;&#21517;&#21934;",
	"animallist_flyout_note": "&#36890;&#21578;: &#20320;&#25152;&#27794;&#26377;&#30340;&#21205;&#29289;&#26377;&#24456;&#22810;&#26159;&#20572;&#27490;&#20379;&#25033; &#25110; &#36996;&#26410;&#37323;&#20986;.",
	
	// status
	"status_buying_buying": "&#36092;&#36023;",
	"status_buying_bought": "&#36023;&#21040;",
	"status_buying_ofitem": "&#30340;&#38917;&#30446;",
	"status_buying_upgradingitem": "&#21435;&#21319;&#32026;&#38917;&#30446;",
	"status_buying_upgradeditem": "&#24050;&#21319;&#32026;&#30340;&#38917;&#30446;",
	"status_wlfitemid_specify": "&#25351;&#23450;&#30340;wlfItemId",
	"status_friendlist_loaded": "&#26379;&#21451;&#21517;&#21934;&#24050;&#32147;&#21152;&#36617;...",
	"status_friendlist_loading": "&#21152;&#36617;&#26379;&#21451;&#21517;&#21934;...",
	"status_friendlist_found": " &#25214;&#21040;",
	"status_friendlist_friends": "&#26379;&#21451;&#20497;",
	"status_zoo_notloaded": "&#21205;&#29289;&#22290;&#27794;&#26377;&#36617;&#20837;...",
	"status_zoo_loadedforfriend": "&#21152;&#36617;&#26379;&#21451;&#30340;&#21205;&#29289;&#22290;",
	"status_feeding_waitingfor": "&#31561;&#24453;&#20877;&#27425;&#39221;&#39135;",
	"status_feeding_fed": "&#24050;&#32147;&#39221;&#36942;&#39135;",
	"status_feeding_collected": "&#24050;&#32147;&#25910;&#38598;&#36942;",
	"status_feeding_withtreat": "&#20351;&#29992;&#38646;&#39135;",
	"status_feeding_animalswithtreat": "&#29992;&#38646;&#39135;&#32102;&#21205;&#29289;",
	"status_feeding_noanimalsforcumulative": "&#27794;&#26377;&#21205;&#29289;&#22312;&#20351;&#29992;&#32047;&#31309;&#39221;&#39135;&#26381;&#21209;",
	"status_training_training": "&#35347;&#32244;",
	"status_training_everyfiveminutes": "&#27599;&#20116;&#20998;&#37912;...",
	"status_training_trained": "&#24050;&#32147;&#35347;&#32244;&#36942;",
	"status_gate_collectedxp": "&#24478;&#23798;&#30340;&#22823;&#38272;&#25910;&#38598; XP",
	"status_booth_collecting": "&#24478;&#22823;&#38272;&#25910;&#36027;&#20141;&#25910;&#38598;&#37666;&#24163;...",
	"status_booth_collected": "&#24478;&#22823;&#38272;&#25910;&#36027;&#20141;&#25910;&#38598;&#21040;&#30340;&#37666;&#24163;...",
	"status_visiting_visited": "&#35370;&#21839;&#36942;&#30340;",
	"status_visiting_zooandcollected": "&#21205;&#29289;&#22290;&#21644;&#25910;&#38598;&#21040;&#30340;",
	"status_visiting_gettingreward": "&#21435;&#35370;&#21839;&#21205;&#29289;&#22290;&#20358;&#24471;&#21040;&#29518;&#36062;",
	"status_visiting_visitedandcollected": "&#35370;&#21839;&#36942;&#30340;&#21205;&#29289;&#22290;&#21644;&#25910;&#38598;&#21040;&#30340;",
	"status_visiting_collected": "&#25910;&#38598;&#21040;&#30340;",
	"status_visiting_visitingall": "&#35370;&#21839;&#25152;&#26377;&#30340;",
	"status_visiting_ofyourfriendszoos": "&#20320;&#26379;&#21451;&#30340;&#21205;&#29289;&#22290;...",
	"status_shaking_shakingitem": "&#25622;&#21205;&#38917;&#30446;",
	"status_shaking_oftype": "&#36889;&#31278;&#22411;&#24907;",
	"status_shaking_forfriend": "&#28858;&#20102;&#26379;&#21451;",
	"status_shaking_notshakingitem": "&#25622;&#21205;&#38917;&#30446;",
	"status_shaking_shaking": "&#25622;&#21205;",
	"status_shaking_for": "&#28858;&#20102;",
	"status_shaking_shookitems": "&#25622;&#21205;&#36942;&#30340;&#38917;&#30446;...",
	"status_shaking_shookitemsfailed": "&#25622;&#21205;&#38917;&#30446;&#22833;&#25943;...",
	"status_island_loadingisland": "&#21152;&#36617;&#23798;&#23996;",
	"status_island_for": "&#28858;&#20102;",
	"status_inventory_loading": "&#21152;&#36617;&#24235;&#23384;&#28858;&#20102;",
	"status_inventory_queuing": "&#21152;&#20837;&#24037;&#20316;&#21015;&#38538;",
	"status_inventory_forshaking": "&#34987;&#25622;&#21205;...",
	"status_moving_moving": "&#31227;&#21205;",
	"status_moving_toinventory": "&#21040;&#24235;&#23384;",
	"status_moving_toisland": "&#21040;&#23798;&#19978;",
	
	// Items
	"shop_listempty": "&#21517;&#21934;&#31354;&#31354;&#30340;",
	
	// Spawning
	"gifts_giftingitem": "&#36865;&#31150;&#30340;&#38917;&#30446;",
	"gifts_spawning": "&#34893;&#29983;",
	"gifts_trophy": "&#29518;&#26479;",
	"gifts_mission": "&#20219;&#21209;",
	
	// Mega spawn
	"megaspawn_flyout_gifts": "&#31150;&#29289;",
	"megaspawn_flyout_missions": "&#20219;&#21209;",
	
	// generic
	"completion": "&#23436;&#25104;",
	
	// 2010/12/10
	"megaspawn_flyout_christmas": "&#32854;&#35477;&#31680;",
	
	// 2010/12/13
	"confirm_moving_tostorage": "&#30495;&#30340;&#35201;&#31227;&#21205;&#20320;&#25152;&#26377;&#30340;",
	"confirm_moving_tostorage2": "&#21040;&#20489;&#24235;?",
	"status_moving_item": "&#31227;&#21205;&#38917;&#30446;",
	"status_moving_item2": "&#21040;&#20489;&#24235;...",
	"confirm_unlock_11thisland": "&#20320;&#35201;&#22039;&#35430;&#21435;&#35299;&#38283;&#31532;&#21313;&#19968;&#20491;&#23798;&#21966;? (&#36889;&#20491;&#21482;&#26377;&#22312;&#20320;&#24688;&#22909;&#26377;&#21313;&#20491;&#23798;&#26178;&#25165;&#26371;&#29983;&#25928;)",
	"status_unlock_11thisland": "&#27491;&#22312;&#35299;&#38283;&#31532;&#21313;&#19968;&#20491;&#23798;...",
	
	// 2010/12/15
	"christmas_flyout_title": "Christmas &mdash; WLP vortex of doom",
	"christmas_flyout_noanimalintraining": "&#27794;&#26377;&#21205;&#29289;&#22312;&#35347;&#32244;&#20013;. &#35201;&#35347;&#32244;&#21205;&#29289;&#20358;&#24471;&#21040;WLP?",
	"christmas_flyout_animalintraining": "&#21205;&#29289;&#27491;&#22312;&#35347;&#32244;&#20013;",
	"christmas_flyout_items_intro": "&#32854;&#35477;&#31680;&#30340;&#38917;&#30446;",
	"christmas_flyout_gointozootoclaim": "&#36914;&#20837;&#20320;&#30340;&#21205;&#29289;&#22290;(&#20877;&#27425;&#21152;&#36617;)&#21435;&#21462;&#24471;&#20320;&#30340;&#21205;&#29289;.",
	"christmas_flyout_animalisready": "&#21205;&#29289;&#24050;&#32147;&#28310;&#20633;&#22909;!",
	"gifts_christmas_title": "Christmas &mdash; WLP vortex of doom",
	
	// generic
	"error": "&#37679;&#35492;",
	"buy_more_for_wlp": "&#35201;&#29992;WLP&#36092;&#36023;&#26356;&#22810;&#38917;&#30446;&#21966;?",
	"buy_more_for_wlp_prompt": "&#20320;&#35201;&#29992;WLP&#36092;&#36023;&#26356;&#22810;&#36889;&#20491;&#38917;&#30446;&#21966;?",
	"buy_more_for_wlp_prompt_specify_amount": "&#20320;&#35201;&#29992;WLP&#36092;&#36023;&#26356;&#22810;&#36889;&#20491;&#38917;&#30446;&#21966;?\n(&#25351;&#35330;&#36092;&#36023;&#38917;&#30446;&#30340;&#25976;&#37327;)"
};

// Chinese phonetic translation by Jolly 2011/01/02 (encoded)
zdlang['cnp'] = { 
	"title": "Sh&#236;ji&#232; d&#242;ngw&#249; k&#275;xu&#233; zh&#249;l&#464;",
	
	// Languages
	"language": "Y&#468;y&#225;n",
	"en": "Y&#299;ngy&#468;",
	"rs": "S&#224;i&#283;rw&#233;iy&#462; y&#468;", 
	"de": "D&#233;y&#468;",
	"es": "X&#299;b&#257;ny&#225; y&#468;",
	"id": "Y&#236;n d&#249; n&#237; x&#299; y&#462; y&#468;",
	"it": "Y&#236;d&#224;l&#236; y&#468;",
	"ru": "&#232;y&#468;",
	"he": "X&#299; b&#243; l&#225;i y&#468;",
	"hr": "K&#232; lu&#243; d&#236; y&#462; y&#468;",
	"pt": "P&#250;t&#225;oy&#225; y&#468;",
	"uk": "W&#363;k&#232;l&#225;n y&#468;", 
	"pl": "B&#333;l&#225;n y&#468;",
	"fr": "F&#462;y&#468;",
	"cn": "Zh&#333;ngw&#233;n",
	"jp": "R&#236;y&#468;",
	
	// tabs
	"tab_about": "Gu&#257;ny&#250;",
	"tab_myzoo": "W&#466; de d&#242;ngw&#249;yu&#225;n",
	"tab_items": "Xi&#224;ngm&#249;",
	"tab_spawning": "Y&#462;nsh&#275;ng",
	"tab_friends": "P&#233;ngy&#466;u",
	"tab_advanced": "J&#236;n ji&#275;",
	
	// footer
	"footer_status": "Zhu&#224;ngku&#224;ng",
	"footer_friends": "P&#233;ngy&#466;u",
	"footer_zoo": "D&#242;ngw&#249;yu&#225;n",
	"footer_results": "AJAX Ji&#233;gu&#466;",
	"footer_clear_log": "Q&#299;ngch&#250; r&#236;zh&#236;",
	
	// About
	"about_title": "Gu&#257;ny&#250;",
	"about_body_1": "Zh&#232; sh&#236; y&#299;g&#232; d&#242;ngw&#249; sh&#236;ji&#232; l&#464;mi&#224;n j&#237; ji&#257; de hu&#257;zh&#257;o g&#333;ngj&#249;.D&#224;nsh&#236; zh&#232;ge g&#333;ngj&#249; k&#283;n&#233;ng b&#232;i sh&#236; w&#233;i q&#299;pi&#224;n hu&#242; h&#224;i k&#232; x&#237;ngw&#233;i,y&#299;nc&#464; q&#237; ji&#233;gu&#466; sh&#236; b&#249; b&#232;i zh&#299;ch&#237; hu&#242;zh&#283; b&#462;ozh&#232;ng de, n&#464; y&#224;o z&#236;j&#464; ch&#233;ngd&#257;n sh&#464;y&#242;ng c&#464; g&#333;ngj&#249; su&#466; y&#464;nq&#464; de f&#275;ngxi&#462;n!",
	"about_body_2": "Z&#224;i zh&#232; sh&#236;ji&#232; sh&#224;ng y&#466;u li&#462;ng zh&#466;ng r&#233;n y&#299; zh&#466;ng sh&#236; hu&#236; zh&#249;y&#236; d&#250; sh&#464;y&#242;ng x&#363;zh&#299; de r&#233;n l&#236;ng y&#299; zh&#466;ng z&#233; sh&#236; y&#464;j&#299;ng b&#249; zh&#299;d&#224;o di&#462;n d&#224;o n&#462;l&#464; q&#249; le de r&#233;n.",
	"about_body_3": "R&#250;gu&#466; n&#464; h&#225;i z&#224;i zh&#232;er, q&#464;ng zh&#249;y&#236; d&#250; w&#466; su&#466; xi&#283; de, w&#466; b&#236;x&#363; h&#283;n ku&#224;i d&#236; b&#462; zh&#232;xi&#275; ji&#283;shu&#333; y&#237; ch&#250;, y&#299;nw&#232;i zh&#232;ge g&#333;ngj&#249; hu&#236; y&#464;nq&#464; d&#242;ngw&#249; sh&#236;ji&#232; sh&#232;q&#363; de s&#257;olu&#224;n, y&#464;h&#242;u w&#466; k&#283;n&#233;ng b&#249; hu&#236; z&#224;i g&#333;ngb&#249; le, q&#464;ng sh&#464;y&#242;ng n&#464; de l&#464;zh&#236; , Xi&#462;ox&#299;n p&#224;ndu&#224;n, b&#249;y&#224;o y&#464;w&#233;i q&#299;pi&#224;n x&#237;ngw&#233;i y&#466;ngyu&#462;n b&#249; hu&#236; b&#232;i zhu&#257; d&#224;o h&#233; ch&#233;ngf&#225;.",
	"about_body_4": "W&#466; k&#283;n&#233;ng hu&#236; f&#224;n cu&#242;, d&#242;ngw&#249;yu&#225;n j&#299;ngch&#225;ng hu&#236; g&#462;ibi&#224;n, li&#462;n sh&#363; y&#283; b&#249;du&#224;n de z&#224;i g&#462;ij&#236;n, ji&#283;shu&#333; ji&#462;ob&#283;n y&#466;ush&#237; hu&#236; t&#237;ngzh&#464; y&#249;nzu&#242;, y&#299;g&#232; y&#466;uh&#462;o de bi&#224;nti&#225;o k&#283;n&#233;ng hu&#236; g&#224;osu w&#466; y&#299;xi&#275; w&#466; su&#466; b&#249; zh&#299;d&#224;o de sh&#236;, d&#224;nsh&#236; ch&#233;ng b&#462;i de l&#225;o d&#257;o qu&#232; W&#250;j&#236;y&#250;sh&#236;.",
	"about_body_5": "Q&#464;ng xi&#462;ngsh&#242;u w&#466; de ji&#283;shu&#333; ji&#462;ob&#283;n, zh&#249; n&#464; w&#225;n de y&#250;ku&#224;i, y&#283; q&#464;ng n&#464; ji&#257;r&#249; w&#466;men de",
	"about_body_group": "xi&#462;oz&#468;",
	
	// My Zoo
	"myzoo_feeding_title": "W&#232;ish&#237;",
	"myzoo_feeding_feed": "w&#232;i",
	"myzoo_feeding_collect": "sh&#333;uj&#237;",
	"myzoo_feeding_day": "Y&#299;ti&#257;n",
	"myzoo_feeding_days": "H&#462;oj&#464; ti&#257;n",
	"myzoo_gates_title": "T&#333;ngl&#249; j&#236;nk&#466;u",
	"myzoo_gates_collect_all": "C&#243;ng su&#466;y&#466;u de t&#333;ngl&#249; j&#236;nk&#466;u sh&#333;uj&#237; XP",
	"myzoo_gates_collect_booth_15": "M&#283;i g&#233; sh&#237; w&#468; f&#275;nzh&#333;ng c&#243;ng t&#257;nw&#232;i sh&#333;uj&#237; qi&#225;nb&#236;",
	"myzoo_training_title": "x&#249;nli&#224;n",
	"myzoo_treasure_title": "X&#250;nzh&#462;o b&#462;oz&#224;ng (x&#363;y&#224;o y&#466;u b&#462;oz&#224;ng sh&#333;uj&#237; yu&#225;n)",
	"myzoo_treasure_visit_all": "Su&#466;y&#466;u p&#233;ngy&#466;u de d&#242;ngw&#249;yu&#225;n",
	"myzoo_treasure_start_at": "C&#243;ng d&#242;ngw&#249;yu&#225;n k&#257;ish&#464;",
	"myzoo_treasure_continue_from": "C&#243;ng... J&#236;x&#249;",
	"myzoo_kiosk_title": "T&#237;ngzi",
	"myzoo_kiosk_collect_all": "Sh&#333;uj&#237; su&#466;y&#466;u de t&#237;ngzi",
	"myzoo_shake_title": "Y&#225;od&#242;ng (di&#462;nj&#299;) sh&#249;m&#249;, sh&#249; di&#257;o, di&#257;os&#249;, m&#243;gu, bi&#462;oy&#462;n ch&#462;ng, m&#233;igu&#299; hu&#257;yu&#225;n, d&#283;ng d&#283;ng",
	"myzoo_shake_shake_all": "Y&#225;od&#242;ng su&#466;y&#466;u de d&#462;oy&#468;",
	"myzoo_move_title": "C&#243;ng d&#462;o sh&#224;ng b&#462; su&#466;y&#466;u de d&#333;ngxi d&#363; y&#237; d&#224;o c&#257;ngk&#249;",
	"myzoo_fill_title": "C&#243;ng k&#249;c&#250;n q&#249; zhu&#257;ng m&#462;n w&#275;nsh&#236;",
	"myzoo_auto_title": "Z&#236;d&#242;ng",
	"myzoo_auto_intro": "C&#243;ng su&#466;y&#466;u de t&#333;ngl&#249; j&#236;nk&#466;u sh&#333;uj&#237; XP c&#243;ng t&#257;nw&#232;i sh&#333;uj&#237; qi&#225;nb&#236; y&#299;j&#249; xi&#224;nx&#237;ng de sh&#232; d&#236;ng w&#232;ish&#237; su&#466;y&#466;u de d&#242;ngw&#249; y&#225;od&#242;ng su&#466;y&#466;u de sh&#249;m&#249; f&#462;ngw&#232;n su&#466;y&#466;u p&#233;ngy&#466;u de d&#242;ngw&#249;yu&#225;n...",
	"myzoo_lists_title": "Su&#466;y&#466;u li&#232;bi&#462;o",
	"myzoo_lists_intro": "Sh&#275;ngch&#233;ng y&#466;u/m&#233;iy&#466;u de d&#242;ngw&#249; li&#232;bi&#462;o ...",
	"myzoo_breeding_title": "F&#225;nzh&#237;",
	"myzoo_breeding_intro": "Gu&#462;nl&#464; f&#225;nzh&#237;",
	
	// Items
	"shop_title": "su&#466;y&#466;u xi&#224;ngm&#249;",
	"shop_intro": "Zh&#232; sh&#236; d&#242;ngw&#249; sh&#236;ji&#232; l&#464;mi&#224;n su&#466;y&#466;u de xi&#224;ngm&#249; d&#236; li&#232;bi&#462;o su&#299;r&#225;n l&#464;mi&#224;n y&#466;u g&#242;um&#462;i de li&#224;nji&#275; d&#224;nsh&#236; y&#299;nw&#232;i zh&#466;ngzh&#466;ng de l&#464;y&#243;u y&#466;u h&#283;ndu&#333; xi&#224;ngm&#249; sh&#236; w&#250;f&#462; g&#242;um&#462;i de (r&#250; h&#225;i w&#232;i ji&#283; su&#466; de xi&#224;ngm&#249; w&#232;i f&#257;bi&#462;o de xi&#224;ngm&#249; b&#249; z&#224;i g&#333;ngy&#236;ng de xi&#224;ngm&#249; d&#283;ng d&#283;ng) &lt;/ Em&gt; zh&#249;y&#236; sh&#236;xi&#224;ng: R&#250;gu&#466; n&#464; y&#466;u li&#225;nji&#233; n&#464; de Pay Pal zh&#224;ngh&#224;o xi&#224;ng sh&#236; n&#464; y&#464;qi&#225;n y&#466;u sh&#464;y&#242;ng Pay Pal g&#242;um&#462;i gu&#242; d&#333;ngxi z&#224;i m&#233;iy&#466;u y&#249;j&#464;ng de q&#237;ngku&#224;ng xi&#224; n&#464; k&#283;n&#233;ng hu&#236; b&#232;i sh&#333;uf&#232;i.&lt;/em&gt;",
	"shop_loading": "D&#224; sh&#257;ngdi&#224;n l&#464;mi&#224;n su&#466;y&#466;u de d&#333;ngxi xi&#224;nz&#224;i zh&#232;ngz&#224;i ji&#257; z&#224;i...",
	"shop_buy_id": "Sh&#464;y&#242;ng r&#232;nh&#233; xi&#224;ngm&#249; d&#236; ID l&#225;i g&#242;um&#462;i g&#257;i xi&#224;ng d&#333;ngxi",
	"shop_buy_id_intro": "(R&#250;gu&#466; n&#464; y&#466;u q&#464;ng m&#249; d&#236; ID d&#224;nsh&#236; sh&#257;ngdi&#224;n l&#464;mi&#224;n h&#225;i m&#233;iy&#466;u g&#275;ngx&#299;n sh&#237; sh&#464;y&#242;ng).",
	"shop_upgrade_id": "Sh&#464;y&#242;ng t&#257; de ID l&#225;i sh&#275;ngj&#237; r&#232;nh&#233; d&#242;ngw&#249;",
	"shop_upgrade_id_intro": "(R&#250;gu&#466; n&#464; y&#466;u q&#464;ng m&#249; d&#236; ID d&#224;nsh&#236; sh&#257;ngdi&#224;n l&#464;mi&#224;n h&#225;i m&#233;iy&#466;u g&#275;ngx&#299;n sh&#237; sh&#464;y&#242;ng)",
	"shop_repeat_buy_id_intro": "(Sh&#464;y&#242;ng sh&#237;j&#299; m&#283;i g&#233; sh&#237; mi&#462;o zh&#333;ng y&#242;ng ID l&#225;i ch&#243;ngf&#249; g&#242;um&#462;i m&#466;u y&#299; xi&#224;ng d&#333;ngxi c&#464; zu&#242;y&#242;ng du&#236; s&#242;ngch&#363; g&#257;o ji&#275; d&#242;ngw&#249; sh&#237; t&#232;bi&#233; y&#466;uxi&#224;o)",
	"shop_buy_fbc_intro": "T&#333;nggu&#242; FBC l&#225;i g&#242;um&#462;i",
	"shop_buy_by_wlf_item_id": "Y&#242;ng wlfItemId l&#225;i g&#242;um&#462;i",
	"shop_paypal_howto": "Z&#224;i n&#464; g&#242;um&#462;i WLP hu&#242; Ultra Rare d&#242;ngw&#249; y&#464;h&#242;u r&#250;h&#233; q&#468;xi&#257;o n&#464; z&#224;i RockYou, Inc and PayPal zh&#299; ji&#257;n de y&#299;c&#236; di&#462;nj&#299; xi&#233;y&#236;.",
	
	// Spawning
	"gifts_title": "Y&#462;nsh&#275;ng",
	"gifts_gifts_title": "L&#464;w&#249;",
	"gifts_level_title": "Sh&#275;ngj&#237;",
	"gifts_level_intro": "D&#462; r&#249; x&#299;w&#224;ng de j&#237;bi&#233; ",
	"gifts_daily_title": "G&#242;ngxi&#462;ng m&#283;i ti&#257;n de l&#464;w&#249;",
	"gifts_trophy_title": "Ji&#462;ngb&#275;i",
	"gifts_juice_title": "Gu&#466;zh&#299;",
	"gifts_flowerpots_title": "Hu&#257; p&#233;n",
	"gifts_halloween_title": "W&#224;nsh&#232;ngji&#233;",
	"gifts_halloween_ask_sewing": "Q&#464;ngqi&#250; b&#257;ngzh&#249; zh&#275;nxi&#224;n hu&#243;",
	"gifts_fieldtrip_title": "Sh&#237;d&#236; k&#462;och&#225;",
	"gifts_fieldtrip_anything_by_id": "Sh&#464;y&#242;ng r&#232;nh&#233; d&#333;ng x&#299; de ID",
	"gifts_treattrophy_title": "W&#232;ish&#237; ji&#462;ngb&#275;i",
	"gifts_buildables_title": "K&#283;y&#464; d&#257;ji&#224;n de",
	"gifts_missions_title": "R&#232;nwu",
	"gifts_missions_start": "K&#257;ish&#464;",
	"gifts_missions_republish": "Ch&#243;ngx&#299;n f&#257;b&#249;",
	"gifts_missions_complete": "W&#225;nch&#233;ng",
	"gifts_rosegarden_title": "M&#233;igu&#299; yu&#225;n",
	"gifts_rosegarden_share_upgrade": "Z&#224;i t&#250;y&#257; qi&#225;ng sh&#224;ng g&#242;ngxi&#462;ng hu&#257;yu&#225;n sh&#275;ngj&#237; ji&#462;ngp&#464;n",
	"gifts_rosegarden_ask_rose": "Z&#224;i t&#250;y&#257; qi&#225;ng sh&#224;ng q&#464;ngqi&#250; s&#242;ng m&#233;igu&#299; hu&#257;",
	"gifts_rosegarden_share_rose": "Z&#224;i t&#250;y&#257; qi&#225;ng sh&#224;ng g&#242;ngxi&#462;ng m&#233;igu&#299; hu&#257;",
	"gifts_goldenegg_title": "J&#299;n d&#224;n",
	"gifts_icecream_title": "B&#299;ngq&#237;l&#237;n",
	"gifts_greenhouse_title": "W&#275;nsh&#236;",
	"gifts_megaspawn_title": "T&#232;d&#224; y&#462;nsh&#275;ng",
	
	// Visiting
	"visiting_resume_intro": "(R&#250;gu&#466; y&#249;nx&#237;ng b&#275;ngku&#236; ch&#243;ngx&#299;n z&#224;i zh&#464;d&#236;ng de d&#242;ngw&#249;yu&#225;n y&#249;nx&#237;ng)",
	"visiting_go_outside": "R&#250;gu&#466; n&#464; de p&#233;ngy&#466;u h&#283;ndu&#333; zh&#232; ji&#257;ng hu&#236; hu&#257;f&#232;i xi&#257;ngd&#257;ng sh&#237;ji&#257;n xi&#257;n q&#249; bi&#233;ch&#249; gu&#224;ng ba:)",
	"visiting_load_friends": "Ji&#257; z&#224;i p&#233;ngy&#466;u m&#237;ngd&#257;n...",
	
	// Advanced
	"advanced_title": "J&#236;n ji&#275;",
	"advanced_intro": "R&#250;gu&#466; n&#464; b&#249; qu&#232;d&#236;ng zh&#232; sh&#236; sh&#233;nme zh&#232; ji&#257;ng b&#249; sh&#236;h&#233; n&#464; sh&#464;y&#242;ng!",
	"advanced_detailedlogging_title": "Xi&#225;ngx&#236; de r&#236;zh&#236;",
	"advanced_friends_title": "P&#233;ngy&#466;u men",
	"advanced_zoo_title": "D&#242;ngw&#249;yu&#225;n",
	"advanced_zoodisplay_title": "D&#242;ngw&#249;yu&#225;n xi&#462;nsh&#236; ch&#464;c&#249;n d&#224;xi&#462;o",
	"advanced_cookies_title": "Sh&#249;j&#249; b&#257;o",
	"advanced_workqueue_title": "G&#333;ngzu&#242; li&#232;du&#236;",
	"advanced_play_title": "Y&#243;ux&#236;",
	"advanced_alternateaccess_title": "B&#232;iy&#242;ng t&#333;ngl&#249;",
	"advanced_tryto_title": "Ch&#225;ngsh&#236; q&#249;",
	"advanced_goldeninviter_title": "J&#299;n j&#237; de y&#257;oq&#464;ng zh&#283;",
	"advanced_punkd_title": "K&#468;n&#462;o",
	"advanced_javacript_javacript": "Java ji&#462;ob&#283;n",
	"advanced_javacript_evaluate": "P&#237;ngg&#363;",
	"advanced_javacript_ajaxdelay": "AJAX y&#225;nch&#237; (h&#225;o mi&#462;o)",
	
	// generic
	"show": "Xi&#462;nsh&#236;",
	"hide": "Y&#464;nc&#225;ng",
	"shop": "G&#242;um&#462;i",
	"reload": "Ch&#243;ngx&#299;n ji&#257; z&#224;i",
	"island": "D&#462;o",
	"islands": "D&#462;oy&#468; q&#250;n",
	"minute": "Y&#299; f&#275;nzh&#333;ng",
	"minutes": "Sh&#249; f&#275;nzh&#333;ng",
	"hour": "Y&#299; xi&#462;osh&#237;",
	"hours": "Sh&#249; xi&#462;osh&#237;",
	"day": "Y&#299;ti&#257;n",
	"days": "H&#462;oj&#464; ti&#257;n",
	"once": "Y&#299;c&#236;",
	"repeat": "Ch&#243;ngf&#249;",
	"to_friend": "G&#283;i p&#233;ngy&#466;u",
	"specify_user_id": "Zh&#464;d&#236;ng de sh&#464;y&#242;ng zh&#283; ID",
	"specific_user": "Zh&#464;d&#236;ng de sh&#464;y&#242;ng zh&#283;",
	"specify_user_id_prompt": "Zh&#464;d&#236;ng de sh&#464;y&#242;ng zh&#283; id\n(sh&#464;y&#242;ng t&#257; de ji&#462;nji&#232; l&#225;i zh&#462;o ch&#363; t&#257; de ID)",
	"specify_animal_id": "Zh&#464;d&#236;ng de d&#242;ngw&#249; ID",
	"specify_animal_id_prompt": "Zh&#464;d&#236;ng de d&#242;ngw&#249; id\n(sh&#464;y&#242;ng sh&#257;ngdi&#224;n l&#464; de m&#237;ngd&#257;n l&#225;i zh&#462;o ch&#363; t&#257; de ID)",
	"send_to_feed": "S&#242;ng q&#249; w&#232;ish&#237;",
	"ask_on_feed": "Q&#464;ngqi&#250; w&#232;ish&#237;",
	"ask_for": "Q&#464;ngqi&#250;",
	"share": "F&#275;nxi&#462;ng",
	"share_roses": "F&#275;nxi&#462;ng 'm&#233;igu&#299; hu&#257;'",
	"post": "G&#333;ngg&#224;o",
	"share_completion": "F&#275;nxi&#462;ng ch&#233;nggu&#466;",
	"completed": "W&#225;nch&#233;ng",
	"help": "B&#257;ngzh&#249;",
	"easy": "R&#243;ngy&#236;",
	"medium": "Zh&#333;ngd&#283;ng",
	"hard": "K&#249;nn&#225;n",
	"invite": "Y&#257;oq&#464;ng",
	"hatched": "Y&#464; f&#363;hu&#224;",
	"send_as_request": "Y&#464; q&#464;ngqi&#250; s&#242;ngch&#363;",
	"ask_as_request": "Y&#464; q&#464;ngqi&#250; su&#466;q&#468;",
	"update_button": "G&#275;ngx&#299;n &#224;nni&#468;",
	"button_go": "Qi&#225;nw&#462;ng",
	"start": "K&#257;ish&#464;",
	"republish": "Z&#224;i f&#257;b&#249;",
	"complete": "W&#225;nch&#233;ng",
	
	// 2010/12/08
	
	// generic
	"post_trade": "Ji&#257;ohu&#224;n g&#333;ngg&#224;o",
	"update": "G&#275;ngx&#299;n",
	"loaded": "Y&#464; ji&#257; z&#224;i",
	"main_zooremoved": "D&#242;ngw&#249;yu&#225;n y&#464;j&#299;ng y&#237; ch&#250;",
	"main_clicktogetback": "Di&#462;nj&#299; hu&#237;q&#249; yu&#225;n ch&#249;",
	"executing": "Zh&#237;x&#237;ng",
	"specify_item_id_prompt": "Zh&#464;d&#236;ng de xi&#224;ngm&#249; id\n(sh&#464;y&#242;ng sh&#257;ngdi&#224;n l&#464; de m&#237;ngd&#257;n l&#225;i zh&#462;o ch&#363; t&#257; de ID)",
	"close": "Gu&#257;nb&#236;",
	"buy": "G&#242;um&#462;i",
	"gift": "L&#464;w&#249;",
	"breed": "F&#225;nzh&#237;",
	"upgrade": "Sh&#275;ngj&#237;",
	"shareonwall": "Z&#224;i t&#250;y&#257; qi&#225;ng sh&#224;ng g&#242;ngxi&#462;ng",
	"refresh": "Shu&#257;x&#299;n",
	"project": "G&#333;ngch&#233;ng xi&#224;ngm&#249;",
	
	// Items
	"shop_flyout_categories": "F&#275;nl&#232;i",
	"shop_flyout_rarity": "X&#299;y&#466;u",
	"shop_flyout_breedingtime": "F&#225;nzh&#237; su&#466; x&#363; sh&#237;ji&#257;n",
	"shop_flyout_purchasefor": "Q&#249; g&#242;um&#462;i",
	"shop_flyout_actualdollars": "Zh&#275;nsh&#237; de qi&#225;nb&#236;",
	"shop_flyout_fbc": "Li&#462;n sh&#363; j&#299;f&#275;n",
	"shop_flyout_wlp": "Y&#283;sh&#275;ng d&#242;ngw&#249; di&#462;nsh&#249;",
	"shop_flyout_images_title": "T&#250;pi&#224;n",
	"shop_flyout_images_large": "D&#224;",
	"shop_flyout_images_small": "Xi&#462;o",
	"shop_flyout_images_baby": "G&#257;ng ch&#363;sh&#275;ng de xi&#462;o d&#242;ngw&#249;",
	"shop_flyout_actions_title": "X&#237;ngd&#242;ng",
	"shop_flyout_actions_buylots_prompt": "G&#242;um&#462;i d&#333;ng x&#299; de sh&#249;li&#224;ng (zu&#236;du&#333; 999 r&#250;gu&#466; sh&#236; d&#242;ngw&#249; y&#224;o b&#464; sh&#275;ngj&#237; de sh&#249;li&#224;ng sh&#462;o y&#299;g&#232;)",
	"shop_flyout_actions_buylots": "M&#462;i d&#236;du&#224;n",
	"shop_flyout_actions_postadopt": "L&#464;ngy&#462;ng g&#333;ngg&#224;o",
	"shop_flyout_actions_customadopt": "D&#236;ng zh&#236; de l&#464;ngy&#462;ng",
	"shop_flyout_actions_thanksgivingwlpupgrade": "Ch&#225;ngsh&#236; sh&#464;y&#242;ng y&#299;g&#232; WLP q&#249; sh&#275;ngj&#237; d&#224;o ultra",
	"shop_flyout_actions_findinzoo": "Z&#224;i d&#242;ngw&#249;yu&#225;n l&#464;mi&#224;n zh&#462;od&#224;o",
	"shop_flyout_actions_upgradeforwrenches": "B&#462;n sh&#466;u sh&#275;ngj&#237;",
	"shop_flyout_actions_cantbuy": "W&#250;f&#462; g&#242;um&#462;i zh&#232;xi&#275;...",
	"shop_flyout_actions_trytobuy": "Y&#299;d&#236;ng xi&#462;ng m&#462;i ma?",
	"shop_flyout_actions_numitemstobuy": "G&#242;um&#462;i d&#333;ng x&#299; de sh&#249;li&#224;ng (zu&#236;du&#333; 999 r&#250;gu&#466; sh&#236; d&#242;ngw&#249; y&#224;o b&#464; sh&#275;ngj&#237; de sh&#249;li&#224;ng sh&#462;o y&#299;g&#232;)",
	"shop_flyout_actions_movealltostorage": "B&#462; su&#466;y&#466;u de d&#333;ngxi y&#237; d&#224;o c&#257;ngk&#249;",
	"shop_flyout_actions_moneywarning": "Y&#225;nzh&#242;ng j&#464;ngg&#224;o: Zh&#232;ge d&#333;ngxi sh&#236; y&#224;o qi&#225;n de n&#464; k&#283;n&#233;ng z&#224;i w&#250; y&#249;j&#464;ng q&#237;ngku&#224;ng xi&#224; b&#232;i sh&#333;uf&#232;i!",
	"shop_flyout_actions_facts": "Sh&#236;sh&#237;",
	"shop_flyout_actions_training": "X&#249;nli&#224;n",
	
	// advanced
	"advanced_friends_loadlist": "Ji&#257; z&#224;i m&#237;ngd&#257;n",
	"advanced_friends_deduplicatelist": "Ch&#249;q&#250; ch&#243;ngf&#249; de m&#237;ngd&#257;n",
	"advanced_zoo_loadzoo": "Ji&#257; z&#224;i n&#464; de d&#242;ngw&#249;yu&#225;n",
	"advanced_zoo_loadanyzoo": "Ji&#257; z&#224;i r&#232;nh&#233; d&#242;ngw&#249;yu&#225;n",
	"advanced_zoo_showzoo": "Xi&#462;nsh&#236; d&#242;ngw&#249;yu&#225;n",
	"advanced_zoo_specifyisland": "Zh&#464;d&#236;ng de d&#462;oy&#468; ID (0-10):",
	"advanced_zoo_loadyourisland": "Ji&#257; z&#224;i n&#464; de d&#242;ngw&#249;yu&#225;n",
	"advanced_zoodisplay_normal": "Zh&#232;ngch&#225;ng",
	"advanced_zoodisplay_big": "D&#224;",
	"advanced_cookies_cookies": "Sh&#249;j&#249; b&#257;o",
	"advanced_cookies_show": "Xi&#462;nsh&#236;",
	"advanced_cookies_delete": "Y&#237; ch&#250;",
	"advanced_cookies_set": "Sh&#232; d&#236;ng",
	"advanced_workqueue_start": "K&#257;ish&#464;",
	"advanced_workqueue_stop": "T&#237;ngzh&#464;",
	"advanced_workqueue_itemsinthequeue": "Li&#232;bi&#462;o zh&#333;ng su&#466;y&#466;u de xi&#224;ngm&#249;.",
	"advanced_workqueue_showsize": "Xi&#462;nsh&#236; d&#224;xi&#462;o",
	"advanced_workqueue_clear": "Q&#299;ngch&#250;",
	"advanced_alternateaccess_unframe": "W&#250; bi&#257;nji&#232; de d&#242;ngw&#249;yu&#225;n",
	"advanced_alternateaccess_workaround": "D&#242;ngw&#249;yu&#225;n hu&#462;nm&#224;n ji&#283;ju&#233; f&#257;ngf&#462; (q&#299;ngbi&#224;n x&#237;ng)",
	"advanced_tryto_forceadopt": "Qi&#225;ngx&#237;ng l&#464;ngy&#462;ng",
	"advanced_tryto_payday": "F&#257; x&#299;n r&#236;",
	"advanced_tryto_unlock11thisland": "Ji&#283; su&#466; d&#236; sh&#237; y&#299; d&#462;o",
	
	// megaspawn flyout
	"megaspawn_flyout_title": "J&#249;x&#237;ng y&#462;nsh&#275;ng",
	"megaspawn_flyout_projects": "G&#333;ngch&#233;ng xi&#224;ngm&#249;",
	"megaspawn_flyout_multiplenotes": "Du&#333;ch&#243;ng g&#224;osh&#236;",
	
	// animal list flyout
	"animallist_flyout_title": "D&#242;ngw&#249; m&#237;ngd&#257;n",
	"animallist_flyout_intro": "K&#462;ob&#232;i h&#233; ni&#225;n ti&#275; y&#464; sh&#464;y&#242;ng zh&#232;ge m&#237;ngd&#257;n",
	
	// breeding flyout
	"breeding_flyout_title": "F&#225;nzh&#237; m&#237;ngd&#257;n",
	"breeding_flyout_breeding": "F&#225;nzh&#237;",
	"breeding_flyout_innest": "Z&#224;i f&#225;nzh&#237; ch&#225;o l&#464;",
	"breeding_flyout_nomorenests": "B&#224;oqi&#224;n m&#233;iy&#466;u k&#242;ngy&#250; de f&#225;nzh&#237; ch&#225;o!",
	"breeding_flyout_nobabies": "M&#233;iy&#466;u xi&#462;o d&#242;ngw&#249; z&#224;i f&#225;nzh&#237; ch&#225;o l&#464;.",
	"breeding_flyout_heal": "Y&#299;zh&#236;",
	"breeding_flyout_feed": "W&#232;ish&#237;",
	"breeding_flyout_notready": "H&#225;i m&#233;i f&#363;hu&#224;",
	"breeding_flyout_upgradeandmove": "Sh&#275;ngj&#237; b&#236;ng y&#237;d&#242;ng d&#224;o d&#242;ngw&#249;yu&#225;n",
	"breeding_flyout_move": "Y&#237;d&#242;ng d&#224;o d&#242;ngw&#249;yu&#225;n",
	
	// custom adopt flyout
	"customadopt_flyout_title": "D&#236;ng zh&#236; de l&#464;ngy&#462;ng",
	"customadopt_flyout_name": "M&#237;ngch&#275;ng",
	"customadopt_flyout_image": "T&#250;pi&#224;n",
	"customadopt_flyout_title": "Bi&#257;ot&#237;",
	"customadopt_flyout_bodytext": "Zh&#232;ngw&#233;n",
	"customadopt_flyout_button": "&#192;nni&#468;",
	"customadopt_flyout_postbutton": "G&#333;ngg&#224;o d&#236;ng zh&#236; de l&#464;ngy&#462;ng",
	"customadopt_flyout_editingnotadvised": "Q&#464;ng w&#249; g&#462;izh&#232;ng y&#464;xi&#224; de xi&#224;ngm&#249;!",
	
	// friend list
	"friendlist_addzoomate": "Ji&#257;r&#249; d&#242;ngw&#249;yu&#225;n you",
	"friendlist_visitzoo": "F&#462;ngw&#232;n d&#242;ngw&#249;yu&#225;n",
	"friendlist_viewprofile": "Gu&#257;nk&#224;n ji&#462;nji&#232;",
	"friendlist_posttreasurechest": "G&#333;ngb&#249; c&#225;ng b&#462;o xi&#257;ng",
	"friendlist_postmysterychest": "G&#333;ngb&#249; sh&#233;nm&#236; b&#462;o xi&#257;ng",
	"friendlist_posthungryanimals": "G&#333;ngb&#249; j&#299;&#232; de d&#242;ngw&#249;",
	"friendlist_sendvitamin": "S&#242;ngch&#363; w&#233;it&#257;m&#236;ng",
	"friendlist_sendgoldgreenhouse": "S&#242;ngch&#363; j&#299;n j&#237; w&#275;nsh&#236;",
	
	// work queue
	"workqueue_starting": "K&#257;ish&#464; g&#333;ngzu&#242; li&#232;du&#236;",
	"workqueue_remaining": "Li&#250; xi&#224; de",
	"workqueue_alreadystarted": "G&#333;ngzu&#242; li&#232;du&#236; y&#464;j&#299;ng k&#257;ish&#464;",
	"workqueue_stopped": "Y&#464;j&#299;ng t&#237;ngzh&#464; de g&#333;ngzu&#242; li&#232;du&#236;",
	"workqueue_stopping": "T&#237;ngzh&#464; g&#333;ngzu&#242; li&#232;du&#236;",
	"workqueue_alreadstopped": "G&#333;ngzu&#242; li&#232;du&#236; y&#464;j&#299;ng t&#237;ngzh&#464;",
	
	// 2010/12/09
	"animallist_flyout_generating": "Sh&#275;ngch&#233;ng m&#237;ngd&#257;n...",
	"animallist_flyout_havelist": "Y&#466;ngy&#466;u de d&#242;ngw&#249; m&#237;ngd&#257;n",
	"animallist_flyout_havenotlist": "M&#233;iy&#466;u de d&#242;ngw&#249; m&#237;ngd&#257;n",
	"animallist_flyout_note": "T&#333;ngg&#224;o: N&#464; su&#466; m&#233;iy&#466;u de d&#242;ngw&#249; y&#466;u h&#283;ndu&#333; sh&#236; t&#237;ngzh&#464; g&#333;ngy&#236;ng hu&#242; h&#225;i w&#232;i sh&#236; ch&#363;.",
	
	// status
	"status_buying_buying": "G&#242;um&#462;i",
	"status_buying_bought": "M&#462;i d&#224;o",
	"status_buying_ofitem": "De xi&#224;ngm&#249;",
	"status_buying_upgradingitem": "Q&#249; sh&#275;ngj&#237; xi&#224;ngm&#249;",
	"status_buying_upgradeditem": "Y&#464; sh&#275;ngj&#237; de xi&#224;ngm&#249;",
	"status_wlfitemid_specify": "Zh&#464;d&#236;ng de wlfItemId",
	"status_friendlist_loaded": "P&#233;ngy&#466;u m&#237;ngd&#257;n y&#464;j&#299;ng ji&#257; z&#224;i...",
	"status_friendlist_loading": "Ji&#257; z&#224;i p&#233;ngy&#466;u m&#237;ngd&#257;n...",
	"status_friendlist_found": "Zh&#462;od&#224;o",
	"status_friendlist_friends": "P&#233;ngy&#466;u men",
	"status_zoo_notloaded": "D&#242;ngw&#249;yu&#225;n m&#233;iy&#466;u z&#224;i r&#249;...",
	"status_zoo_loadedforfriend": "Ji&#257; z&#224;i p&#233;ngy&#466;u de d&#242;ngw&#249;yu&#225;n",
	"status_feeding_waitingfor": "D&#283;ngd&#224;i z&#224;ic&#236; w&#232;ish&#237;",
	"status_feeding_fed": "Y&#464;j&#299;ng w&#232;i gu&#242; sh&#237;",
	"status_feeding_collected": "Y&#464;j&#299;ng sh&#333;uj&#237; gu&#242;",
	"status_feeding_withtreat": "Sh&#464;y&#242;ng l&#237;ngsh&#237;",
	"status_feeding_animalswithtreat": "Y&#242;ng l&#237;ngsh&#237; g&#283;i d&#242;ngw&#249;",
	"status_feeding_noanimalsforcumulative": "M&#233;iy&#466;u d&#242;ngw&#249; z&#224;i sh&#464;y&#242;ng l&#283;ij&#299; w&#232;ish&#237; f&#250;w&#249;",
	"status_training_training": "X&#249;nli&#224;n",
	"status_training_everyfiveminutes": "M&#283;i w&#468; f&#275;nzh&#333;ng...",
	"status_training_trained": "Y&#464;j&#299;ng x&#249;nli&#224;n gu&#242;",
	"status_gate_collectedxp": "C&#243;ng d&#462;o de d&#224;m&#233;n sh&#333;uj&#237; XP",
	"status_booth_collecting": "C&#243;ng d&#224;m&#233;n sh&#333;uf&#232;i t&#237;ng sh&#333;uj&#237; qi&#225;nb&#236;...",
	"status_booth_collected": "C&#243;ng d&#224;m&#233;n sh&#333;uf&#232;i t&#237;ng sh&#333;uj&#237; d&#224;o de qi&#225;nb&#236;...",
	"status_visiting_visited": "F&#462;ngw&#232;n gu&#242; de",
	"status_visiting_zooandcollected": "D&#242;ngw&#249;yu&#225;n h&#233; sh&#333;uj&#237; d&#224;o de",
	"status_visiting_gettingreward": "Q&#249; f&#462;ngw&#232;n d&#242;ngw&#249;yu&#225;n l&#225;i d&#233;d&#224;o ji&#462;ngsh&#462;ng",
	"status_visiting_visitedandcollected": "F&#462;ngw&#232;n gu&#242; de d&#242;ngw&#249;yu&#225;n h&#233; sh&#333;uj&#237; d&#224;o de",
	"status_visiting_collected": "Sh&#333;uj&#237; d&#224;o de",
	"status_visiting_visitingall": "F&#462;ngw&#232;n su&#466;y&#466;u de",
	"status_visiting_ofyourfriendszoos": "N&#464; p&#233;ngy&#466;u de d&#242;ngw&#249;yu&#225;n...",
	"status_shaking_shakingitem": "Y&#225;od&#242;ng xi&#224;ngm&#249;m",
	"status_shaking_oftype": "Zh&#232; zh&#466;ng x&#237;ng t&#224;i",
	"status_shaking_forfriend": "W&#232;ile p&#233;ngy&#466;u",
	"status_shaking_notshakingitem": "Y&#225;od&#242;ng xi&#224;ngm&#249;",
	"status_shaking_shaking": "Y&#225;od&#242;ng",
	"status_shaking_for": "W&#232;ile",
	"status_shaking_shookitems": "Y&#225;od&#242;ng gu&#242; de xi&#224;ngm&#249;...",
	"status_shaking_shookitemsfailed": "Y&#225;od&#242;ng xi&#224;ngm&#249; sh&#299;b&#224;i...",
	"status_island_loadingisland": "Ji&#257; z&#224;i d&#462;oy&#468;",
	"status_island_for": "W&#232;ile",
	"status_inventory_loading": "Ji&#257; z&#224;i k&#249;c&#250;n w&#232;ile",
	"status_inventory_queuing": "Ji&#257;r&#249; g&#333;ngzu&#242; li&#232;du&#236;",
	"status_inventory_forshaking": "B&#232;i y&#225;od&#242;ng...",
	"status_moving_moving": "Y&#237;d&#242;ng",
	"status_moving_toinventory": "D&#224;o k&#249;c&#250;n",
	"status_moving_toisland": "D&#224;o d&#462;o sh&#224;ng",
	
	// Items
	"shop_listempty": "M&#237;ngd&#257;n k&#333;ngk&#333;ng de",
	
	// Spawning
	"gifts_giftingitem": "S&#242;ngl&#464; de xi&#224;ngm&#249;",
	"gifts_spawning": "Y&#462;nsh&#275;ng",
	"gifts_trophy": "Ji&#462;ngb&#275;i",
	"gifts_mission": "R&#232;nw&#249;",
	
	// Mega spawn
	"megaspawn_flyout_gifts": "L&#464;w&#249;",
	"megaspawn_flyout_missions": "R&#232;nw&#249;",
	
	// generic
	"completion": "W&#225;nch&#233;ng",
	
	// 2010/12/10
	"megaspawn_flyout_christmas": "Sh&#232;ngd&#224;n ji&#233;",
	
	// 2010/12/13
	"confirm_moving_tostorage": "Zh&#275;n de y&#257;o y&#237;d&#242;ng n&#464; su&#466;y&#466;u de",
	"confirm_moving_tostorage2": "D&#224;o c&#257;ngk&#249;?",
	"status_moving_item":  "Y&#237;d&#242;ng xi&#224;ngm&#249;",
	"status_moving_item2": "D&#224;o c&#257;ngk&#249;...",
	"confirm_unlock_11thisland": "N&#464; y&#224;o ch&#225;ngsh&#236; q&#249; ji&#283; k&#257;i d&#236; sh&#237; y&#299;g&#232; d&#462;o ma? (Zh&#232;ge zh&#464;y&#466;u z&#224;i n&#464; qi&#224;h&#462;o y&#466;u sh&#237; g&#232; d&#462;o sh&#237; c&#225;i hu&#236; sh&#275;ngxi&#224;o)",
	"status_unlock_11thisland": "Zh&#232;ngz&#224;i ji&#283; k&#257;i d&#236; sh&#237; y&#299;g&#232; d&#462;o...",
	
	// 2010/12/15
	"christmas_flyout_title":  "Christmas&mdash; WLP vortex of doom",
	"christmas_flyout_noanimalintraining": "M&#233;iy&#466;u d&#242;ngw&#249; z&#224;i x&#249;nli&#224;n zh&#333;ng. Y&#224;o x&#249;nli&#224;n d&#242;ngw&#249; l&#225;i d&#233;d&#224;o WLP?",
	"christmas_flyout_animalintraining": "D&#242;ngw&#249; zh&#232;ngz&#224;i x&#249;nli&#224;n zh&#333;ng",
	"christmas_flyout_items_intro": "Sh&#232;ngd&#224;n ji&#233; de xi&#224;ngm&#249;",
	"christmas_flyout_gointozootoclaim": "J&#236;nr&#249; n&#464; de d&#242;ngw&#249;yu&#225;n (z&#224;ic&#236; ji&#257; z&#224;i) q&#249; q&#468;d&#233; n&#464; de d&#242;ngw&#249;.",
	"christmas_flyout_animalisready": "D&#242;ngw&#249; y&#464;j&#299;ng zh&#468;nb&#232;i h&#462;o!",
	"gifts_christmas_title": "Christmas&mdash; WLP vortex of doom",
	
	// generic
	"error": "Cu&#242;w&#249;",
	"buy_more_for_wlp": "Y&#224;o y&#242;ng WLP g&#242;um&#462;i g&#232;ng du&#333; xi&#224;ngm&#249; ma?",
	"buy_more_for_wlp_prompt": "N&#464; y&#224;o y&#242;ng WLP g&#242;um&#462;i g&#232;ng du&#333; zh&#232;ge xi&#224;ngm&#249; ma?",
	"buy_more_for_wlp_prompt_specify_amount": "N&#464; y&#224;o y&#242;ng WLP g&#242;um&#462;i g&#232;ng du&#333; zh&#232;ge xi&#224;ngm&#249; ma?\N(zh&#464; d&#236;ngg&#242;u m&#462;i xi&#224;ngm&#249; d&#236; sh&#249;li&#224;ng)"
};

// French translation by Josee D. 2011/02/05 (encoded)
zdlang['fr'] = { 
	"title": "Assistant Zoo World",
	// Languages
	"language": "Langues",
	"en": "Anglais",
	"rs": "Serbe",
	"de": "Allemand",
	"es": "Espagnol",
	"id": "Indon&#233;sien",
	"it": "Italien",
	"ru": "Russe",
	"he": "H&#233;breu",
	"hr": "Croate",
	"pt": "Portugais",
	"uk": "Ukr&#233;nien",
	"pl": "Polonais",
	"cn": "Chinois",
	"cnp": "Chinois (phon&#233;tique)",
	"fr": "Fran&#231;ais",

	"jp": "Japonais",
	// tabs
	"tab_about": "&#192; propos",
	"tab_myzoo": "Mon Zoo",
	"tab_items": "Items",
	"tab_spawning": "Publier",
	"tab_friends": "Amis",
	"tab_advanced": "Avanc&#233;",
	// footer
	"footer_status": "Statut",
	"footer_friends": "Amis",
	"footer_zoo": "Zoo",
	"footer_results": "R&#233;sultats AJAX",
	"footer_clear_log": "Supprimer journal",
	// About
	"about_title": "&#192; propos",
	"about_body_1": "Il s'agit d'un outil convivial nous permettant de faire quelques tours de passe-passe dans Zoo World.  Les r&#233;sultats peuvent cependant &#234;tre consid&#233;r&#233;s comme du piratage ou de la tricherie, et nous n'offrons ni garantie ni support.  Utilisez cet outil &#224; vos risques et p&#233;rils!",
	"about_body_2": "Il y a deux types de personnes dans la vie:  ceux qui lisent les instructions et ceux qui cliquent sans lire ...",
	"about_body_3": "Si vous &#234;tes toujours ici, c'est que vous avez pr&#234;t&#233; attention &#224; ce qui est &#233;crit.  Nous avons d&#233;j&#224; eu &#224; retirer cet outil de la circulation &#224; cause de probl&#234;mes au sein de la communaut&#233; de Zoo world.  S'il y a un autre retrait, il est possible qu'il soit permanent.  Donc, utilisez le avec discr&#233;tion et sobri&#233;t&#233;.  Et n'oubliez pas que vous pouvez toujours &#234;tre d&#233;couverts et punis pour avoir trich&#233;!",
	"about_body_4": "Nous commettons des erreurs, le Zoo et Facebook &#233;voluent, et les scripts cessent de fonctionner.  Si cela se produisait, un mot poli m'en informant sera le bienvenu.  Mais des centaines de messages me harcelant &#224; cet effet ne seront pas bien accueillis.",
	"about_body_5": "Profitez donc de l'outil, et amusez-vous!  Et pourquoi ne pas joindre notre groupe?",
	"about_body_group": "L'Assistant Caf&#233; (groupe secret que vous ne pouvez joindre que par invitation d'un membre)",
	// My Zoo
	"myzoo_feeding_title": "Nourrir",
	"myzoo_feeding_feed": "Nourrir",
	"myzoo_feeding_collect": "R&#233;colter",
	"myzoo_feeding_day": "jour",
	"myzoo_feeding_days": "jours",
	"myzoo_gates_title": "Gu&#233;rite",
	"myzoo_gates_collect_all": "R&#233;colter XP de toutes les gu&#233;rites",
	"myzoo_gates_collect_booth_15": "R&#233;colter argent du guichet &#224; toutes les 15 minutes",
	"myzoo_training_title": "Entra&#238;ner",
	"myzoo_treasure_title": "Chasse au tr&#233;sor (n&#233;cessite le chasseur de tr&#233;sor)",
	"myzoo_treasure_visit_all": "tous les zoos des amis",
	"myzoo_treasure_start_at": "D&#233;marrer au zoo",
	"myzoo_treasure_continue_from": "continuer &#224; partir de...",
	"myzoo_kiosk_title": "Kiosques",
	"myzoo_kiosk_collect_all": "r&#233;colter l'argent de tous les kiosques",
	"myzoo_shake_title": "Secouer arbres, topiaires, sculptures, champignons, spectacles, jardin de roses, etc",
	"myzoo_shake_shake_all": "secouer toutes les iles",
	"myzoo_move_title": "D&#233;placer tous les items d'une ile &#224; l'espace de rangement",
	"myzoo_fill_title": "Remplir la serre &#224; partir de l'espace de rangement",
	"myzoo_auto_title": "Auto",
	"myzoo_auto_intro": "Percevoir XP de toutes les gu&#233;rites, percevoir l'argent des guichets, nourrir les animaux selon les param&#234;tres existant, secouer tous les arbres, visiter tous les zoos des amis...",
	"myzoo_lists_title": "Listes",
	"myzoo_lists_intro": "G&#233;n&#233;rer une liste des animaux que vous poss&#233;dez et ceux qui vous manquent...",
	"myzoo_breeding_title": "Reproduction",
	"myzoo_breeding_intro": "G&#233;rer la reproduction",
	// Items
	"shop_title": "Items",
	"shop_intro": "Il s'agit d'une liste de tous les items connus dans Zoo World. M&#234;me s'il existe des liens pour les acqu&#233;rir, certains items ne peuvent &#234;tre achet&#233;s pour diverses raisons (pas encore offerts publiquement ou jamais publi&#233;s, discontinu&#233;s, etc). &lt;em&gt;Veuillez prendre note que si votre compte Facebook est d&#233;j&#224; li&#233; &#224; un compte PayPal, c'est-&#224;-dire si vous avez d&#233;j&#224; utilis&#233; PayPal pour acheter des items, vous serez factur&#233;s sans autre forme d'avertissement!&lt;/em&gt;",
	"shop_loading": "La boutique est en chargement...",
	"shop_buy_id": "achetez n'importe quel item par ID",
	"shop_buy_id_intro": "(&#224; utiliser si vous connaissez le ID mais la boutique n'a pas &#233;t&#233; mise &#224; jour).",
	"shop_upgrade_id": "actualisez un animal par ID",
	"shop_upgrade_id_intro": "(&#224; utiliser si vous connaissez le ID mais la boutique n'a pas &#233;t&#233; mise &#224; jour).",
	"shop_repeat_buy_id": "achat r&#233;p&#233;t&#233; de n'importe quel item par ID",
	"shop_repeat_buy_id_intro": "(&#224; utiliser pour acheter un item sp&#233;cifique par ID &#224; toutes les 10 secondes, utile pour ceux qui font cadeau d'animaux de niveau sup&#233;rieur).",
	"shop_buy_fbc_intro": "Achetez pour FBC",
	"shop_buy_by_wlf_item_id": "Achetez par wlfItemId",
	"shop_paypal_howto": "Comment annuler la convention vous liant &#224; RockYou et PayPal apr&#232;s l'achat de WLP ou d'un ultra rare.",
	// Spawning
	"gifts_title": "Publier",
	"gifts_gifts_title": "Cadeaux",
	"gifts_level_title": "Changement de niveau",
	"gifts_level_intro": "Type de niveau d&#233;sir&#233;",
	"gifts_daily_title": "Partager cadeau journalier",
	"gifts_trophy_title": "Troph&#233;e",
	"gifts_juice_title": "Jus",
	"gifts_flowerpots_title": "Pots de fleurs",
	"gifts_halloween_title": "Halloween",
	"gifts_halloween_ask_sewing": "Demander aide pour coudre",
	"gifts_fieldtrip_title": "Sortie",
	"gifts_fieldtrip_anything_by_id": "n'importe quoi par ID",
	"gifts_treattrophy_title": "R&#233;compense troph&#233;e",
	"gifts_buildables_title": "Kit &#224; b&#226;tir",
	"gifts_missions_title": "Missions",
	"gifts_missions_start": "d&#233;marrer",
	"gifts_missions_republish": "republier",
	"gifts_missions_complete": "complet",
	"gifts_rosegarden_title": "Jardin de roses",
	"gifts_rosegarden_share_upgrade": "partager optimisation du jardin sur le mur",
	"gifts_rosegarden_ask_rose": "demander des roses sur le mur",
	"gifts_rosegarden_share_rose": "partager rose sur le mur",
	"gifts_goldenegg_title": "Oeuf d'Or",
	"gifts_icecream_title": "Cr&#232;me glac&#233;e",
	"gifts_greenhouse_title": "Serre",
	"gifts_megaspawn_title": "Mega Publication",
	// Visiting
	"visiting_resume_intro": "(red&#233;marrer d'un zoo sp&#233;cifique si la fonction crash)",
	"visiting_go_outside": "Prenez note que, d&#233;pendant du nombre de vos amis, cette fonction pourrait s'av&#233;rer tr&#232;s longue! Allez jouer dehors :)",
	"visiting_load_friends": "Chargement de votre liste d'amis...",
	// Advanced
	"advanced_title": "Avanc&#233;",
	"advanced_intro": "Si vous &#234;tes incertains de cette fonction, c'est qu'elle n'est pas pour vous!",
	"advanced_detailedlogging_title": "logging d&#233;taill&#233;",
	"advanced_friends_title": "Amis",
	"advanced_zoo_title": "Zoo",
	"advanced_zoodisplay_title": "affichage de la taille du Zoo",
	"advanced_cookies_title": "Cookies",
	"advanced_workqueue_title": "File d'attente",
	"advanced_play_title": "Jouer",
	"advanced_alternateaccess_title": "Acc&#232;s alternatif",
	"advanced_tryto_title": "Essayer de",
	"advanced_goldeninviter_title": "Golden inviter",
	"advanced_punkd_title": "Punk'd",
	"advanced_javacript_javacript": "Javascript",
	"advanced_javacript_evaluate": "evaluer",
	"advanced_javacript_ajaxdelay": "d&#233;lai AJAX (millisecondes)",
	// generic
	"show": "montrer",
	"hide": "cacher",
	"shop": "boutique",
	"reload": "reload",
	"island": "ile",
	"islands": "iles",
	"minute": "minute",
	"minutes": "minutes",
	"hour": "heure",
	"hours": "heures",
	"day": "jour",
	"days": "jours",
	"once": "une fois",
	"repeat": "r&#233;p&#233;ter",
	"to_friend": "&#224; un ami",
	"specify_user_id": "sp&#233;cifier ID de l'utilisateur",
	"specific_user": "sp&#233;cifier utilisateur",
	"specify_user_id_prompt": "Sp&#233;cifier ID de l'utilisateur:\n(trouvez ID de l'utilisateur sur leur profil)",
	"specify_animal_id": "sp&#233;cifiez ID de l'animal",
	"specify_animal_id_prompt": "Sp&#233;cifiez ID de l'animal:\n(trouvez ID de la liste d'achat)",
	"send_to_feed": "publiez",
	"ask_on_feed": "demandez sur le mur",
	"ask_for": "demandez",
	"share": "partagez",
	"share_roses": "partagez 'roses'",
	"post": "post",
	"share_completion": "partagez r&#233;sultat",
	"completed": "compl&#233;t&#233;",
	"help": "aide",
	"easy": "facile",
	"medium": "medium",
	"hard": "difficile",
	"invite": "invitez",
	"hatched": "pondu",
	"send_as_request": "envoyez requ&#234;te",
	"ask_as_request": "demandez requ&#234;te",
	"update_button": "bouton de mise &#224; jour",
	"button_go": "allez y",
	"start": "d&#233;marrez",
	"republish": "republier",
	"complete": "compl&#233;t&#233;",
	// 2010/12/08
	// generic
	"post_trade": "publiez &#233;change",
	"update": "mettre &#224; jour",
	"loaded": "charg&#233;",
	"main_zooremoved": "Zoo enlev&#233;",
	"main_clicktogetback": "cliquez pour ravoir",
	"executing": "ex&#233;cution",
	"specify_item_id_prompt": "Sp&#233;cifiez ID de l'item:\n(trouvez ID de la liste d'achat)",
	"close": "fermez",
	"buy": "achetez",
	"gift": "offrir",
	"breed": "reproduire",
	"upgrade": "mise &#224; niveau",
	"shareonwall": "partagez sur le mur",
	"refresh": "rafra&#238;chir",
	"project": "projet",
	// Items
	"shop_flyout_categories": "Cat&#233;gories",
	"shop_flyout_rarity": "Raret&#233;",
	"shop_flyout_breedingtime": "Dur&#233;e de reproduction",
	"shop_flyout_purchasefor": "Achetez pour",
	"shop_flyout_actualdollars": "prix actuel",
	"shop_flyout_fbc": "Cr&#233;dits Facebook",
	"shop_flyout_wlp": "Wild Life Points",
	"shop_flyout_images_title": "Images",
	"shop_flyout_images_large": "large",
	"shop_flyout_images_small": "petit",
	"shop_flyout_images_baby": "minuscule",
	"shop_flyout_actions_title": "Actions",
	"shop_flyout_actions_buylots_prompt": "Nombre d'items &#224; acheter? (pour animaux, doit &#234;tre inf&#233;rieur au montant &#224; actualiser, pour le reste, un maximum de 999)",
	"shop_flyout_actions_buylots": "achetez lots",
	"shop_flyout_actions_postadopt": "publiez adoption",
	"shop_flyout_actions_customadopt": "adoption modifi&#233;e",
	"shop_flyout_actions_thanksgivingwlpupgrade": "essayez d'optimiser &#224; ultra pour 1 WLP",
	"shop_flyout_actions_findinzoo": "trouvez dans le zoo",
	"shop_flyout_actions_upgradeforwrenches": "optimisation for cl&#233; (outil)",
	"shop_flyout_actions_cantbuy": "vous ne pouvez acheter ceci...",
	"shop_flyout_actions_trytobuy": "Essayer d'acheter quand m&#234;me?",
	"shop_flyout_actions_numitemstobuy": "Nombre d'items &#224; acheter? (pour animaux, doit &#234;tre inf&#233;rieur au montant &#224; actualiser, pour le reste, un maximum de 999)",
	"shop_flyout_actions_movealltostorage": "envoyez tout dans l'espace de rangement",
	"shop_flyout_actions_moneywarning": "ATTENTION: cet item co&#251;te de l'argent et pourrait vous &#234;tre factur&#233; sans autre forme d'avis!",
	"shop_flyout_actions_facts": "Faits",
	"shop_flyout_actions_training": "Entra&#238;nement",
	// advanced
	"advanced_friends_loadlist": "chargez liste",
	"advanced_friends_deduplicatelist": "supprimer doublon de la liste",
	"advanced_zoo_loadzoo": "Chargez votre Zoo",
	"advanced_zoo_loadanyzoo": "Chargez n'importe quel Zoo",
	"advanced_zoo_showzoo": "Voir Zoo",
	"advanced_zoo_specifyisland": "Specifier ID de l'ile (0-10):",
	"advanced_zoo_loadyourisland": "Chargez votre ile",
	"advanced_zoodisplay_normal": "normal",
	"advanced_zoodisplay_big": "grand",
	"advanced_cookies_cookies": "cookies",
	"advanced_cookies_show": "Voir",
	"advanced_cookies_delete": "supprimer",
	"advanced_cookies_set": "g&#233;n&#233;rer",
	"advanced_workqueue_start": "d&#233;marrer",
	"advanced_workqueue_stop": "arr&#234;ter",
	"advanced_workqueue_itemsinthequeue": "items dans la File d'attente.",
	"advanced_workqueue_showsize": "Voir taille",
	"advanced_workqueue_clear": "supprimer",
	"advanced_alternateaccess_unframe": "Zoo hors frame",
	"advanced_alternateaccess_workaround": "Contournement Zoo (L&#233;ger)",
	"advanced_tryto_forceadopt": "Forcer Adoption",
	"advanced_tryto_payday": "Jour de paie",
	"advanced_tryto_unlock11thisland": "d&#233;verrouiller ile # 11",
	// megaspawn flyout
	"megaspawn_flyout_title": "Mega Publication",
	"megaspawn_flyout_projects": "Projets",
	"megaspawn_flyout_multiplenotes": "Multiple notes",
	// animal list flyout
	"animallist_flyout_title": "Liste d'animaux",
	"animallist_flyout_intro": "copiez-coller cette liste pour utilisation",
	// breeding flyout
	"breeding_flyout_title": "Liste des animaux pour la reproduction",
	"breeding_flyout_breeding": "reproduire",
	"breeding_flyout_innest": "dans le nid",
	"breeding_flyout_nomorenests": "D&#233;sol&#233;, aucun nid de disponible!",
	"breeding_flyout_nobabies": "Aucun b&#233;b&#233; dans les nids.",
	"breeding_flyout_heal": "gu&#233;rir",
	"breeding_flyout_feed": "nourrir",
	"breeding_flyout_notready": "pas encore pr&#234;t",
	"breeding_flyout_upgradeandmove": "actualisez et d&#233;placer vers le zoo",
	"breeding_flyout_move": "d&#233;placez vers le zoo",
	// custom adopt flyout
	"customadopt_flyout_title": "Adoption personnalis&#233;e",
	"customadopt_flyout_name": "nom",
	"customadopt_flyout_image": "image",
	"customadopt_flyout_title": "titre",
	"customadopt_flyout_bodytext": "corps du texte",
	"customadopt_flyout_button": "bouton",
	"customadopt_flyout_postbutton": "Publiez adoption personnalis&#233;e",
	"customadopt_flyout_editingnotadvised": "&#201;dition des items ci-dessous d&#233;conseill&#233;e!",
	// friend list
	"friendlist_addzoomate": "ajouter zoo mate",
	"friendlist_visitzoo": "visiter zoo",
	"friendlist_viewprofile": "voir profil",
	"friendlist_posttreasurechest": "publier coffre au tr&#233;sor",
	"friendlist_postmysterychest": "publier coffre myst&#232;re",
	"friendlist_posthungryanimals": "publier animaux &#224; nourrir",
	"friendlist_sendvitamin": "envoyer vitamine",
	"friendlist_sendgoldgreenhouse": "envoyer serre de niveau or",
	// work queue
	"workqueue_starting": "D&#233;marrer File d'attente",
	"workqueue_remaining": "ce qui reste",
	"workqueue_alreadystarted": "File d'attente d&#233;j&#224; d&#233;marr&#233;e",
	"workqueue_stopped": "File d'attente arr&#234;t&#233;e",
	"workqueue_stopping": "Arr&#234;t de la file d'attente",
	"workqueue_alreadstopped": "File d'attente d&#233;j&#224; arr&#234;t&#233;e",
	// 2010/12/09
	"animallist_flyout_generating": "G&#233;n&#233;rer listes...",
	"animallist_flyout_havelist": "Liste d'animaux en votre possession",
	"animallist_flyout_havenotlist": "Liste d'animaux manquant",
	"animallist_flyout_note": "Note: plusieurs des animaux que vous ne poss&#233;dez pas peuvent n'avoir jamais &#233;t&#233; publi&#233;s ou sont discontinu&#233;s.",
	// status
	"status_buying_buying": "acheter",
	"status_buying_bought": "achet&#233;",
	"status_buying_ofitem": "item",
	"status_buying_upgradingitem": "mise &#224; jour d'item",
	"status_buying_upgradeditem": "item mis &#224; jour",
	"status_wlfitemid_specify": "Sp&#233;cifiez wlfItemId",
	"status_friendlist_loaded": "Liste d'amis d&#233;j&#224; charg&#233;e...",
	"status_friendlist_loading": "Chargement de votre liste d'amis...",
	"status_friendlist_found": "Trouv&#233;",
	"status_friendlist_friends": "amis",
	"status_zoo_notloaded": "Zoo non charg&#233;...",
	"status_zoo_loadedforfriend": "Chargement du zoo d'un ami",
	"status_feeding_waitingfor": "Dans l'attente de nourrir encore pour",
	"status_feeding_fed": "nourri",
	"status_feeding_collected": "r&#233;colt&#233;",
	"status_feeding_withtreat": "avec g&#226;terie",
	"status_feeding_animalswithtreat": "animaux avec g&#226;terie",
	"status_feeding_noanimalsforcumulative": "Aucun animal pour le service d'auto-nourrir",
	"status_training_training": "Entra&#238;ner",
	"status_training_everyfiveminutes": "toutes les cinq minutes...",
	"status_training_trained": "Entra&#238;n&#233;",
	"status_gate_collectedxp": "Percevoir XP de la gu&#233;rite de l'ile",
	"status_booth_collecting": "Percevoir argent du portail...",
	"status_booth_collected": "Percevoir argent de la gu&#233;rite...",
	"status_visiting_visited": "Visit&#233;",
	"status_visiting_zooandcollected": "zoo et per&#231;u",
	"status_visiting_gettingreward": "Recevoir r&#233;compense pour avoir visit&#233; zoo de",
	"status_visiting_visitedandcollected": "Visit&#233; zoo and per&#231;u",
	"status_visiting_collected": "Per&#231;u",
	"status_visiting_visitingall": "Visite tous",
	"status_visiting_ofyourfriendszoos": "du zoo de vos amis...",
	"status_shaking_shakingitem": "Secouer item",
	"status_shaking_oftype": "de type",
	"status_shaking_forfriend": "pour ami",
	"status_shaking_notshakingitem": "Secouer item",
	"status_shaking_shaking": "Secouer",
	"status_shaking_for": "pour",
	"status_shaking_shookitems": "Items secou&#233;s...",
	"status_shaking_shookitemsfailed": "&#201;chec - secouer items...",
	"status_island_loadingisland": "Charger ile",
	"status_island_for": "pour",
	"status_inventory_loading": "Chargement de l'inventaire pour",
	"status_inventory_queuing": "mettre en file d'attente",
	"status_inventory_forshaking": "pour secouer...",
	"status_moving_moving": "D&#233;placer",
	"status_moving_toinventory": "&#224; l'inventaire",
	"status_moving_toisland": "&#224; l'ile",
	// Items
	"shop_listempty": "Liste vide",
	// Spawning
	"gifts_giftingitem": "Offrir tem",
	"gifts_spawning": "Publier",
	"gifts_trophy": "troph&#233;e",
	"gifts_mission": "mission",
	// Mega spawn
	"megaspawn_flyout_gifts": "Cadeaux",
	"megaspawn_flyout_missions": "Missions",
	// generic
	"completion": "termin&#233;",
	// 2010/12/10
	"megaspawn_flyout_christmas": "No&#234;l",
	// 2010/12/13
	"confirm_moving_tostorage": "Vraiment d&#233;placer tous vos",
	"confirm_moving_tostorage2": "dans votre espace de rangement?",
	"status_moving_item": "D&#233;pla&#231;ons items",
	"status_moving_item2": "dans l'espace de rangement...",
	"confirm_unlock_11thisland": "Essayer de d&#233;verrouiller la 11e &#238;le? (fonctionne uniquement si vous poss&#233;dez exactement 10 &#238;les)",
	"status_unlock_11thisland": "D&#233;verrouillage de la 11e &#238;le...",
	// 2010/12/15
	"christmas_flyout_title": "No&#234;l &mdash; WLP vortex of doom",
	"christmas_flyout_noanimalintraining": "Aucun animal en entra&#238;nement. Entra&#238;ner animal pour WLP?",
	"christmas_flyout_animalintraining": "Animal en entra&#238;nement",
	"christmas_flyout_items_intro": "Items de No&#234;l",
	"christmas_flyout_gointozootoclaim": "Allez dans votre zoo (rechargez la page) pour obtenir votre animal.",
	"christmas_flyout_animalisready": "Animal est pr&#234;t!",
	"gifts_christmas_title": "No&#234;l &mdash; WLP vortex of doom",
	// generic
	"error": "erreur",
	"buy_more_for_wlp": "achetez plus avec des WLP?",
	"buy_more_for_wlp_prompt": "Voulez-vous acheter plus de cet item avec des WLP?",
	"buy_more_for_wlp_prompt_specify_amount": "Voulez-vous acheter plus de cet items avec des WLP?\n(sp&#233;cifiez le nombre d'items &#224; acheter)",
	// upgrade collectibles
	"shop_flyout_actions_upgrade_collectible": "mise &#224; niveau des objets &#224; collectionner",
	"upgrade_collectible_prompt1": "Combien d'objets &#224; collectionner",
	"upgrade_collectible_prompt2": "mise &#224; niveau &#224;",
	// 2011/01/26
	"valentine_flyout_title": "Saint-Valentin &mdash; WLP vortex of doom",
	"valentine_flyout_items_intro": "Items de No&#234;l",
	"valentine_flyout_noanimalintraining": "Aucun animal en entra&#238;nement.  Entra&#238;ner animal avec des WLP?",
	"valentine_flyout_animalintraining": "Animal pr&#233;sentement en entra&#238;nement",
	"valentine_flyout_gointozootoclaim": "Allez dans votre zoo (rechargez la page) pour obtenir votre animal.",
	"valentine_flyout_animalisready": "Animal est pr&#234;t!",
	"gifts_valentine_title": "Saint-Valentin &mdash; WLP vortex of doom"
};


var zdui = {
	isLite: false,
	language: language,
	getLabel: function( label){
		if(zdlang[zdui.language][label]){
			return zdlang[zdui.language][label];
		} else if(zdlang["en"][label]){
			return zdlang["en"][label];
		}else{
			// for debug/dev
			return zdlang["en"][label]+ " [missing "+zdui.language+"/"+label+"] ";
		}
	},
	_addHead: function(){
		// load languages
		//zdAddJsLink( zdTranslationJsUrl );
		// load prototype
		zdAddJsLink( zdPrototypeUrl );
		// load CSS
		zdAddCssLink( zdCssUrl );
		// load zoo item list
		zdAddJsLink( zdZooItemJsUrl );
	},
	_addElements: function(){
		// create UI
		var zdBox = document.createElement("div");
		zdBox.setAttribute('id','zdBox');
		// zdBox.setAttribute('style','clear:both; margin:5px; border:2px #000 solid; padding:5px; background: #FEC; position: absolute; z-index: 1000; top: 0px; left: 0px; max-width: 410px; opacity: .90;');
		document.getElementsByTagName("body")[0].appendChild(zdBox);
		//new status
		var zdNewStatus = document.createElement("div");
		zdNewStatus.setAttribute('id','zdNewStatus');
		document.getElementsByTagName("body")[0].appendChild(zdNewStatus);
		// create shop preview
		var zdShopPreview = document.createElement("div");
		zdShopPreview.setAttribute('id','zdShopPreview');
		zdShopPreview.setAttribute('style','display: none;');
		document.getElementsByTagName("body")[0].appendChild(zdShopPreview);
		return zdBox;
	},
	_addBoxHeader: function(){
		var strHtml = "";
		strHtml +=	
			'<h2><a href="'+zdHomePageUrl+'">Dan Fab</a> '+zdui.getLabel("title")+' ';
		if(zdui.isLite){
			strHtml += ' <em>Lite</em> ';
		}
		strHtml +=
			'v'+zdVersion+' <span id="zdShowDan">[<a href="javascript:togglezdA();">'+zdui.getLabel("show")+'</a>]</span></h2>';
		strHtml +=
			'<div id="zdBody" style="display: none;">';
	//		'<div id="zdBody" style="display: block;">';
			
		
			strHtml +=
				'<span> ' +
				'Zoo: <span id="zdShowZoo"> <a href="javascript:zdToggleZoo();">'+zdui.getLabel("hide")+'</a></span> / <a href="javascript:zdRefreshZoo();">refresh</a> &nbsp;&nbsp;'+
			' '+zdui.getLabel("shop")+': <span id="zdShowShop"><a href="javascript:zdToggleShop();">'+zdui.getLabel("show")+'</a></span> / <a href="javascript:frames[\'shopIframe\'].location.reload();">'+zdui.getLabel("reload")+'</a>&nbsp;&nbsp;Mails: <a href="javascript:openMessageFlyout();">Inbox</a><span id="zdMessageCount"></span>&nbsp;&nbsp;Items List: <span id="zdShowButtonItems"> <a href="javascript:zdToggleItemsList();">'+zdui.getLabel("hide")+'</a></span><br>'; 
			strHtml +=' <input type="button" id="button68" value="Zoo Stats" onClick="zdZooAllStatsAjax();setTimeout(zdZooStats, 8000);">';
			//strHtml +=' <input type="button" id="button68" value="Zoo Page" onClick="zdZooPageRSS();">'
			
			strHtml += '</span>';
		
		strHtml +='<span id="zdOptions">';
			strHtml +=' <input type="button" id="button68" value="Options" onClick="zdToggleOptions();">';
			strHtml += '</span>';
			
			// new Array( 'gifts', 'placement', 'feed', 'shop', 'debug', 'old', 'visit', 'intro' );
			strHtml +='<div id="zdTabs">' +
			'<a id="introTabLink" class="selected" href="javascript:zdShowTab('+"'"+'intro'+"'"+');">'+zdui.getLabel("tab_about")+'</a> ' +
			'<a id="feedTabLink" class="" href="javascript:zdShowTab('+"'"+'feed'+"'"+');">'+zdui.getLabel("tab_myzoo")+'</a> ' +
			'<a id="shopTabLink" class="" href="javascript:zdShowTab('+"'"+'shop'+"'"+');">'+zdui.getLabel("tab_items")+'</a> ' +
			'<a id="giftsTabLink" class="" href="javascript:zdShowTab('+"'"+'gifts'+"');"+'">'+zdui.getLabel("tab_spawning")+'</a> ' +
			'<a id="visitTabLink" class="" href="javascript:zdShowTab('+"'"+'visit'+"'"+');">'+zdui.getLabel("tab_friends")+'</a> ' +
			'<a id="placeTabLink" class="" ';
			if(zdui.isLite){
				strHtml +='style="display: none;"';
			}
			strHtml +='href="javascript:zdShowTab('+"'"+'place'+"');"+'">Placement</a> ' +
			'<a id="debugTabLink" class="" href="javascript:zdShowTab('+"'"+'debug'+"');"+'">'+zdui.getLabel("tab_advanced")+'</a> ' +
			'<a id="oldTabLink" class="" style="display: none;" href="javascript:zdShowTab('+"'"+'old'+"'"+');">Not Working</a> ' +
			'</div>' +
			'<div id="zdMainDisplay">';
		return strHtml;
	},
	_addBoxFooter: function(){
		var strHtml = "";
		strHtml += 
			'<b>&nbsp;&nbsp;&nbsp;<a href="javascript:togglezdS();">Infos</a> &nbsp;&nbsp;&nbsp;</b>' +
			'<div id="zdNewStatusBody" style="display: none;min-width: 310px;">' +

			'<form method="get" action="">' +
			'<span style="float: right;">Switch :<a href="javascript:checkPosStatus();"  >Position</a> / <a href="javascript:UpStatus();"  >View</a></span>&nbsp;&nbsp;&nbsp;'+zdui.getLabel("footer_status")+':<br/>' +
			'<textarea name="zdStatus" id="zdStatus" style="height:100px"></textarea>' +
			'<div id="debugFields" style="display: none;">' +
			''+zdui.getLabel("footer_friends")+':<br/>' +
			'<textarea name="zdFriends" id="zdFriends"></textarea>' +
			''+zdui.getLabel("footer_zoo")+':<br/>' +
			'<textarea name="zdZoo" id="zdZoo"></textarea>' +
			''+zdui.getLabel("footer_results")+':<br/>' +
			'<textarea name="zdResult" id="zdResult"></textarea>' +
			'</div>' +
			'<input type="reset" value="'+zdui.getLabel("footer_clear_log")+'">' +
			'<input type="button" onclick="javascript:zdClearLogOnInterval(5);" value="Clear Every 5 min"><input type="button" id="debugButton" onclick="javascript:zdShowDebugFields();" value="Show Details"></form>' +
			'' +
			'' +
			'</div>';
		return strHtml;
	},
	_addBoxIntro: function(){
		var strHtml = 
			'<div id="introTab" style="display: block;">' +
			//'<a href="javascript:showCurrentSalesPopup();" style="background-color:yellow;color:red;font-size:14px;border:2px solid #000;">&nbsp;Flash Sales!&nbsp;</a></p>' +
			'<span id="AdoptDiv" ></span><h2>'+zdui.getLabel("about_title")+':</h2>' +
			'<p style="font-weight: bold; color: #F00; text-align: left;">'+zdui.getLabel("title")+' ';
		if(zdui.isLite){
			strHtml += ' <em>Lite</em> ';
		}
		strHtml +=
			'v'+zdVersion+'...</p>' + 
			'<p style="font-weight: bold; color: #F00; text-align: left;">'+zdui.getLabel("about_body_1")+'</p>' + 
			'<p style="font-weight: bold; color: #F00; text-align: left;">Your UserId: '+zdUserId+'</p>' + 
			//'<p style="text-align: left; clear: both;">'+PageData.player.name+' - '+zdui.getLabel("about_body_2")+'</p>' +
			//'<p style="text-align: left;">'+zdui.getLabel("about_body_3")+'</p>' +
			//'<p style="text-align: left;">'+zdui.getLabel("about_body_4")+'</p>' +
			'<p style="text-align: center;"><a href="javascript:Magic8Ball();"><img alt="" src="'+zdHomePageUrl+'img/empty.gif" width="450" height="450" title="click for answer" /></a><br/>'+
			'<h3>Ask a question and click the picture for your answer!</h3></p>'+
			//'<p style="text-align: left;">'+zdui.getLabel("about_body_5")+'</p>' +
			//'<p style="text-align: left;">'+zdui.getLabel("about_body_6")+' '+zdui.getLabel("about_body_help")+': <a href="'+zdHelpUrl+' "target="_blank">...</a> or <a href="'+zdGroupUrl+'"target="_blank">....</a></p>' +
			// '<p style="text-align: left;">'+zdui.getLabel("about_body_7")+'<a href="'+zdGroupUrl+'">'+zdui.getLabel("about_body_group")+'</a></p>' +
			// '<p style="text-align: left;">Translation files: <a href="'+zdTranslationBaseJsUrl+'" target="_blank">English base</a> / <a href="'+zdTranslationJsUrl+'" target="_blank">language files</a>.</p>' +
			'<p style="text-align: left;">To <b>Refresh Script</b> Open <a href="'+zdHomePageUrl+'js/DFZWassistantMain1.0.js" target="_blank">THIS PAGE</a>, refresh it, then reload Zoo.<br>' +
			'To <b>Refresh Items List</b> Open <a href="'+zdZooItemJsUrl+'" target="_blank">THIS PAGE</a>, refresh it, then reload Zoo.<br>' +
			'<p style="text-align: left;">To <b>Zoo1 Blog</b> Open <a href="https://www.facebook.com/Zoo-World-162104552518/?fref=ts///" target="_blank"> Zoo1Blog</a>.</p>' + 
			//'<p style="text-align: left;">To <b>See This Weeks Flash Sale</b> Click <a href="'+zdHomePageUrl+'img/Sales.png" target="_blank">Flash Sale</a><br>' +
			//'<p style="text-align: left;">To <b>Refresh </b><a href="'+zdZooItemJsUrl+'?action=purge'+Math.floor(Math.random()*1000)+'" onclick="location.reload()" target="_blank">Items List</a> or <a href="'+zdHomePageUrl+'js/DFZWassistantMain1.0.js?action=purge'+Math.floor(Math.random()*1000)+'" onclick="location.reload()" target="_blank">Script</a></p>' +
			'</div>';
		return strHtml;
	},
	_addBoxFeed: function(){
		var strHtml = 
			'<div id="feedTab" style="display: none;">' +
			'<h2>'+zdui.getLabel("myzoo_feeding_title")+':</h2>&nbsp;<input type="button" id="button4" onClick="zdNewFeedFlyout();" value="'+zdui.getLabel("button_go")+'" />' +
			'<h3>'+zdui.getLabel("myzoo_gates_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<input type="button" id="button5" onClick="zdVisitAllGates();" value="'+zdui.getLabel("myzoo_gates_collect_all")+'" />' +
			'&nbsp;<input type="button" id="button6" onClick="zdScheduleGateBooth(15*60);" value="'+zdui.getLabel("myzoo_gates_collect_booth_15")+'" />' +
			'&nbsp;<input type="button" id="button7" onClick="zdUpgradeGate();" value="Buy extra harvest of gate" />' +
			'</div>' +
			'</form>' +
			'<h3>Training:</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<select name="zdTrainAnimal" id="zdTrainAnimal">'+
			'<option value="9999">ALL</option>'+
			'<option value="25">Bald Eagle</option>'+
			'<option value="27">Dolphin</option>'+
			'<option value="53">Orca</option>'+
			'<option value="58">California Sea Lion</option>'+
			'<option value="113">Swift</option>'+
			'<option value="155">Peregine Falcon</option>'+
			'<option value="1222">Martial Eagle</option>'+
			'<option value="1220">Gyrafalcon</option>'+
			'<option value="1221">Purple Needletail Swift</option>'+
			'<option value="1374">Circus Elephant</option>'+
			'<option value="0">ById...</option>'+
			'</select>' +
			'&nbsp;<select name="zdTrainMode" id="zdTrainMode"><option value="0">'+zdui.getLabel("once")+'</option><option value="1" selected="selected">'+zdui.getLabel("repeat")+'</option></select>' +
			'&nbsp;<input type="button" id="button8" onClick="zdNewTrainAnimal();" value="'+zdui.getLabel("button_go")+'" />' +
			'&nbsp;<input type="button" id="button65" onClick="zdLoadTrainingData();" value="Load Training Data" />' +
			'</div>' +
			'</form>' +
			
			'<h3>'+zdui.getLabel("myzoo_treasure_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<input type="button" id="button9" onClick="zdVisitAllZoosNew(0,0);" value="'+zdui.getLabel("myzoo_treasure_visit_all")+'" />' +
			'&nbsp;<input type="button" id="button10" onClick="var startAt = parseInt(prompt(\''+zdui.getLabel("myzoo_treasure_start_at")+':\', \'0\'));zdVisitAllZoosNew(startAt,1);" value="'+zdui.getLabel("myzoo_treasure_continue_from")+'" />' +
			'</div>' +
			'</form>' +

			'<h3>'+zdui.getLabel("myzoo_kiosk_title")+':&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quiz:</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<input type="button" id="button11" onClick="zdAllKiosksCollect();" value="'+zdui.getLabel("myzoo_kiosk_collect_all")+'" />' +
//			'&nbsp;<input type="button" id="button12" onClick="var intNumTimes = parseInt(prompt(\'Answer how many times?\', \'1\'));zdQuiz(intNumTimes);" value="answer next quiz" />' +
			' &nbsp;<input type="button" id="button12" onClick="zdMultiQuiz();" value="answer next quiz" />' +
			'</div>' +
			'</form>' +
			
			'<h3>'+zdui.getLabel("myzoo_shake_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<select name="zdShakeIsland" id="zdShakeIsland">';
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value="zdLoadAndShakeMyIsland('+i+',false);">'+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml += '</select>' +
			'&nbsp;<input type="button" id="button13" onClick="zdEvalFromList(\'zdShakeIsland\');" value="'+zdui.getLabel("button_go")+'" />' +
			' &nbsp; <input type="button" id="button14" onClick="zdLoadAndShakeMyIslands(false);" value="'+zdui.getLabel("myzoo_shake_shake_all")+'" />' +
			//' &nbsp; <input type="button" id="button102" onClick="zdShakeyMyIslands();" value="Shake all (with Shakey)" />' +
			' &nbsp; <input type="button" id="button15" onClick="zdLoadAndShakeMyInventory(false);" value="shake inventory" />' +
			// ' &nbsp; <input type="button" id="button1" onClick="zdLoadAndShakeMyIslands(true);" value="all trees as WLP" />' +
			'</div>' +
			'</form>' +
			'<h3>'+zdui.getLabel("myzoo_upgradecollect_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<input type="button" id="button16" onClick="zdUpgradeTopiaries();" value="topiaries" />' +
			'<input type="button" id="button17" onClick="zdUpgradeSculptures();" value="sculptures" />' +
			'<input type="button" id="button18" onClick="zdUpgradeFloweringTrees();" value="flowering trees" />' +
			'<input type="button" id="button19" onClick="zdUpgradeLushTrees();" value="lush trees" />' +
			'<input type="button" id="button20" onClick="zdUpgradeMushrooms();" value="mushrooms" />' +
			'</div>' +
			'</form>' +
			
			'<h3>'+zdui.getLabel("myzoo_fill_title")+':&nbsp;&nbsp;&nbsp;&nbsp;RemoveGHTrees:</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<select name="zdFillGreenhouseIsland" id="zdFillGreenhouseIsland">' ;
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value="zdFillGreenHousesOnIsland('+i+',0);">'+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml +='</select>' +
			'&nbsp;<input type="button" id="button21" onClick="zdEvalFromList(\'zdFillGreenhouseIsland\');" value="'+zdui.getLabel("button_go")+'"/>'+
			
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
			'<select name="zdEmptyGreenhouseIsland" id="zdEmptyGreenhouseIsland">' ;
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value="zdRemoveGHTreesOnIsland('+i+',0);">'+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml +='</select>' +
			'&nbsp;<input type="button" id="button110" onClick="zdEvalFromList(\'zdEmptyGreenhouseIsland\');" value="'+zdui.getLabel("button_go")+'"/>'+
			
			// '<br/><input type="button" id="button1" onClick="zdFillGreenHousesOnAllIslands(0);" value="all greenhouses on all islands" />' +
			'</div>' +
			'</form>' +
			
			/*
			'<h3>Try for extra trees (need an empty greenhouse and at least 1 tree):</h3>' + 
			'<form method="get" action="#">' +
			'<div>' +
			'<select name="zdFillGreenhouseIslandExtra" id="zdFillGreenhouseIslandExtra">' ;
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value="zdFillGreenHousesOnIsland('+i+',0,1);">'+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml +='</select>' +
			'&nbsp;<input type="button" id="button101" onClick="zdEvalFromList(\'zdFillGreenhouseIslandExtra\');" value="'+zdui.getLabel("button_go")+'" />' +
			// '<br/><input type="button" id="button1" onClick="zdFillGreenHousesOnAllIslands(0);" value="all greenhouses on all islands" />' +
			'</div>' +
			'</form>' +
			*/
			'<h3>'+zdui.getLabel("myzoo_auto_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<p>' + 
			'<input type="button" id="button22" onClick="zdAuto();" value="'+zdui.getLabel("button_go")+'" style="float: right;" />' +
			zdui.getLabel("myzoo_auto_intro") +
			'</p>' +
			'</form>' +
			
			'<h3>Gifts:</h3>' ; 
			if(arrAR.length!=0 || arrAO.length!=0  || arrI.length!=0 ){
				strHtml +='<input type="button" id="button23" onclick="zdLoadManageGifts();" value="Manage Gift Actions" style="float: left;"> Use the manage gifts list from dan options<input type="checkbox" id="giftsStatusOptions" />(gifts status)<br><br>';
			}
			strHtml +='<form method="get" action="#">' +
			'<div id="zdGiftsActions" style="display:block"><input type="button" id="button23" onclick="zdChangeGiftsButtons();" value="Everything Gift Actions" style="float: left;"> <input type="button" id="button23" onclick="zdLoadGiftingCenterFlyout();" value="Show all your gifts" style="float: right;"></div><br>' +
			'<p>' + 
			'<div>';
			strHtml +='Return : <input type="radio" name="returnGiftsSelector" id="returnFreeAnimals"';
			if(returnFreeAnimals==true){
				strHtml +='checked';
			}
			strHtml +='>Free Animals / <input type="radio" name="returnGiftsSelector" id="returnExclusives"';
			if(returnExclusives==true){
				strHtml +='checked';
			}
			strHtml +='>Exclusives / <input type="radio" name="returnGiftsSelector" id="returnPromoPart" ';
			if(returnPromoPart==true){
				strHtml +='checked';
			}
			strHtml +='> Promo Part<br>'+
			'To claim game links try our new script based off RapidLinkr: <a href='+linkrUrl+' >Game Links</a> / To claim text links with Dan: <a href=javascript:zdCollectMoneyLinksFlyout(); >Open Flyout</a></div>'+
			''+
			'</p>' +
			'</form>' +
			
		/*	'<h3>'+zdui.getLabel("myzoo_lists_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<p>' +
			'<input type="button" id="button1" onClick="zdanimalList.generate();" value="'+zdui.getLabel("button_go")+'" style="float: right;" />' +
			zdui.getLabel("myzoo_lists_intro") +
			'</p>' +
			'</form>' +
	*/
			'<h3>'+zdui.getLabel("myzoo_breeding_title")+':</h3>' + 
			'<form method="get" action="#">' +
			'<p>' +
			'<input type="button" id="button24" onClick="zdbreed.init();" value="'+zdui.getLabel("button_go")+'" style="float: right;" />' +
			zdui.getLabel("myzoo_breeding_intro") +
			'</p>' +
			'</form>' +
			
			'</div>';
		return strHtml;
	},
	_addBoxShop: function(){
		var strHtml = 
			'<div id="shopTab" style="display: none;">' +
			'<div id="switch" style="display: block;"><input type="button" id="shopTabB" onClick="zdSwitchST(\'shopTab\');" value="Actions" /></div><div id="shopTab1" style="display: block;"><b><a href="javascript:zdGetItemQty(1);zdLogStatus(\'Loading islands and inventory for Qty and Loc!\');" title="click to update qty and loc">(Reload Qty and Loc)</a> / <a href="javascript:zdGetGiftIds(1);" title="click to update gift data">(Reload Gift Data)</a> / <a href="javascript:zdbreed.init(1);">(Reload Breed Data)</a></b>' + 
			'<form name="myform" action="" method="post">'+
			'<b>Show the following in Items:</b><br>'+
			'<input type="checkbox" name="list" value="1"';
			if(showQty=='true' || showQty==true){
				strHtml +=' checked="checked"';
			}
			strHtml +='>Qty/Loc'+
			'<input type="checkbox" name="list" value="2"';
			if(showCostData=='true' || showCostData==true){
				strHtml +=' checked="checked"';
			}
			strHtml +='>CostData'+
			'<input type="checkbox" name="list" value="3"';
			if(showBreedData=='true' || showBreedData==true){
				strHtml +=' checked="checked"';
			}
			strHtml +='>BreedData'+
			'<input type="checkbox" name="list" value="4"';
			if(showIcons=='true' || showIcons==true){
				strHtml +=' checked="checked"';
			}
			strHtml +='>Graphical Icons'+
//			'<input type="button" name="CheckAll" value="Check All" onClick="checkAll(document.myform.list)">'+
//			'<input type="button" name="UnCheckAll" value="Uncheck All" onClick="uncheckAll(document.myform.list)">'+
			'&nbsp;&nbsp;<input type="button" id="button67" name="UpdateItems" value="go" onClick="CheckList();zdShowItemList();">'+
			'<br>'+
			'</form>'+
			'<p style="text-align: left;">'+zdui.getLabel("shop_intro")+'</p>' +
			'<form method="get" action="javascript:zdShowItemList();">' +
			'<div>' +
			'&nbsp;<input type="text" id="zdSearchCriteria" name="zdSearchCriteria" value="" style="width: 200px;" /> ' +
			'&nbsp;<input type="button" id="button25" onClick="zdShowItemList();" value="filter" />&nbsp;<input type="button" id="button25a" onClick="zdChangeOrder();" value="Reverse order"  style="float: right;"/><br>' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'adoptable\');" value="adopt" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'trainable\');" value="trainable" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'shop\');" value="shop" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'free\');" value="free gift" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'limited\');" value="limited gift" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'raregift\');" value="rare gift" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'giftQty+\');" value="giftQty+" />' +
			'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'giftQty-\');" value="giftQty-" />' +
			//'&nbsp;<input type="button" id="button26" onClick="zdShowItemList(\'FBC\');" value="FBC" /><br>' +
			'Breed Data: <a href="javascript:zdbreed.init(1);">RELOAD</a><br>'+
			'Breed Time: <a href="javascript:zdShowItemList(\'2hr\');">2hr</a> / <a href="javascript:zdShowItemList(\'4hr\');">4hr</a> / <a href="javascript:zdShowItemList(\'6hr\');">6hr</a> / '+
			'<a href="javascript:zdShowItemList(\'7.5hr\');">7.5hr</a> / <a href="javascript:zdShowItemList(\'8hr\');">8hr</a> / <a href="javascript:zdShowItemList(\'12hr\');">12hr</a> / <a href="javascript:zdShowItemList(\'16hr\');">16hr</a> / '+
			'<a href="javascript:zdShowItemList(\'20hr\');">20hr</a> / <a href="javascript:zdShowItemList(\'23hr\');">23hr</a> / <a href="javascript:zdShowItemList(\'24hr\');">24hr</a> / <a href="javascript:zdShowItemList(\'36hr\');">36hr</a> / '+
			'<a href="javascript:zdShowItemList(\'48hr\');">48hr</a> / <a href="javascript:zdShowItemList(\'72hr\');">72hr</a> / <a href="javascript:zdShowItemList(\'96hr\');">96hr</a> / <a href="javascript:zdShowItemList(\'120hr\');">120hr</a> / <a href="javascript:zdBreedStatsFlyout();">Breeding Stats</a>'+
			'</div>' +
			'</form>' +
			'<p id="zdItemListPH" style="text-align: left;"><a href="javascript:zdShowItemList();">'+zdui.getLabel("shop_loading")+'</a></p>' +
			'</div><div id="shopTab2" style="display: none;"><ul>' ;
			if(!zdui.isLite){
				strHtml +='<li><a href="javascript:zdShowNewItems();">Search for new items</a> / <a href="javascript:zdShowNewItems(1);">Search for all items</a></li>' +
				'<li><a href="javascript:zdSellItemPrompt();">'+zdui.getLabel("shop_sell_id")+'</a> '+zdui.getLabel("shop_sell_id_intro")+'</li>' + 
				'<li><a href="javascript:zdBuyItemPrompt();">'+zdui.getLabel("shop_buy_id")+'</a> '+zdui.getLabel("shop_buy_id_intro")+'</li>' ;
			}
			strHtml +='<li><a href="javascript:zdBuyLotsPrompt();">'+zdui.getLabel("shop_buylots_id")+'</a> '+zdui.getLabel("shop_buylots_id_intro")+'</li>';
			if(!zdui.isLite){
				strHtml +='<li><a href="javascript:zdMassBuy();">buy all cash animals</a> (buy ALL available non-ultra animals in item list - $$$)</li>' + 
				'<li><a href="javascript:zdMassBuyRare();">buy all rare animals</a> (buy ALL available rare animals in item list - $$$)</li>' + 
				'<li><a href="javascript:zdUpgradePrompt();">'+zdui.getLabel("shop_upgrade_id")+'</a> '+zdui.getLabel("shop_upgrade_id_intro")+'</li>';
			}
			strHtml +='<li><a href="javascript:zdGiftItemPrompt();">'+zdui.getLabel("shop_gift_id")+'</a></li>' + 
			'<li><a href="javascript:zdSendFreeGiftFlyout();">send free gift to all zoomates/friends</a> / <a href="javascript:zdSendGiftToListOfIdsFlyout();">Send a gift to a list of IDs </a></li>' +
			'<li><a href="javascript:zdanimalList.generate();">generate have/have not list</a></li>' + 
		//	'<li><a href="javascript:zdBuyLuckyEgg();">Buy Lucky Egg</a> / <a href="javascript:zdBuyLotsLuckyEgg();">Buy Lots of Lucky Eggs</a> (costs 15 WLP each)</li>' +
		//	'<li><a href="javascript:zdScheduleBuyItemPrompt();">'+zdui.getLabel("shop_repeat_buy_id")+'</a> '+zdui.getLabel("shop_repeat_buy_id_intro")+'</li>' + 
			'</ul>' + 
			'<p>' + 
			//zdui.getLabel("shop_buy_fbc_intro")+': ' +
			//'&nbsp;<input type="button" id="button27" onClick="zdBuyFbcItemByWlfItemIdPrompt();" value="'+zdui.getLabel("shop_buy_by_wlf_item_id")+'" />' +
			//'&nbsp;<input type="button" id="button100" onClick="zdBuyForFriendFbcItemByWlfItemIdPrompt();" value="Buy for a friend" />' +
			'</p>' +
			//'<p style="text-align: left;">WARNING : If animal or FBC are lost, you cannot try to get a refund.</p>' +
			'<p>' + 
			'<h3>'+zdui.getLabel("myzoo_move_title")+':</h3>' +
			'<form method="get" action="#">' +
			'<select name="zdIslandId" id="zdIslandId">';
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value='+i+'>'+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml += '</select>' +
			'&nbsp;<select name="zdLimited" id="zdLimited">' +
			'<option value=0>everything</option>' +
			'<option value=1>all but animals</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button28" onClick="zdClearIsland();" value="'+zdui.getLabel("button_go")+'" />' +
			'</form>' +
			'</p>';	
			//'<p style="text-align: left;"><a href="http://www.facebook.com/note.php?note_id=396878476877" target="_new">'+zdui.getLabel("shop_paypal_howto")+'</a></p>' +
			strHtml +='</div></div>';
		return strHtml;
	},
	_addBoxGifts: function(){
		var strHtml = 
			'<div id="giftsTab" style="display: none;">' +
			'<h2>'+zdui.getLabel("gifts_title")+':</h2>';
		if(!zdui.isLite){
			strHtml += '<form method="get" action="#">' +
			'<p>'+zdui.getLabel("gifts_gifts_title")+': ' +
			'<select name="zdSpawnGifts" id="zdSpawnGifts">' +
			'<option value="zdSpawnTrophy();">Oak</option>' +
			'<option value="share25OaksTrophy();">25 Oaks</option>' +
			'<option value="mysteryGiftFound(300);">Mystery Gift</option>' +
			'<option value="zdCustomiseMysteryGift();">Custom Mystery Gift</option>' +
			'<option value="zdShareWelcomeBasket()();">Welcome Basket</option>' +
			'<option value="zdRepeatMysteryGift();">Mystery Gift ('+zdui.getLabel("repeat")+')</option>' +
			'<option value="zdPostTreasureToFriend();">Treasure Chest ('+zdui.getLabel("to_friend")+')</option>' +
			'<option value="zdPostMysteryChestToFriend();">Mystery Chest ('+zdui.getLabel("to_friend")+')</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button29" onClick="zdEvalFromList(\'zdSpawnGifts\');" value="'+zdui.getLabel("button_go")+'" /></p>' +
/*			'<p>'+zdui.getLabel("gifts_level_title")+': ' +
			'<input id="zdTypeDesiredLevel" name="zdTypeDesiredLevel" value="'+zdui.getLabel("gifts_level_intro")+'" onFocus="var desiredLevel = document.getElementById(\'zdTypeDesiredLevel\');if(desiredLevel.value==\''+zdui.getLabel("gifts_level_intro")+'\') desiredLevel.value= \'\';">' +
			'&nbsp;<input type="button" id="button30" onClick="zdSpawnLevel();" value="'+zdui.getLabel("button_go")+'" /></p>' +
*/
			'<p>'+zdui.getLabel("gifts_daily_title")+': ' +
			'<input type="button" id="button31" onClick="dailyGift.dailyGiftShareItem();" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>' +
			'<p>'+zdui.getLabel("gifts_trophy_title")+': ' +
			'<select name="zdSpawnTrophyName" id="zdSpawnTrophyName">' +
			'<option value="VIP">VIP</option>' +
			'<option value="BabysitterBabysitter</option>' +
			'<option value="Most Popular">Most Popular</option>' +
			'<option value="Shaker">Shaker</option>' +
			'<option value="Tourist">Tourist</option>' +
			'<option value="Animal Rescuer">Animal Rescuer</option>' +
			'<option value="Golden Receiver">Golden Receiver</option>' +
			'<option value="Hired Help">Hired Help</option>' +
			'<option value="Adopter">Adopter</option>' +
			'<option value="Golden Gifter">Golden Gifter</option>' +
			'<option value="Big Saver">Big Saver</option>' +
			'<option value="The Stork">The Stork</option>' +
			'<option value="Recruiter">Recruiter</option>' +
			'</select>' +
			'&nbsp;<select name="zdSpawnTrophyLevel" id="zdSpawnTrophyLevel">' +
			'<option value="Bronze">Bronze</option>' +
			'<option value="Silver">Silver</option>' +
			'<option value="Gold">Gold</option>' +
			'<option value="Platinum">Platinum</option>' +
			'<option value="Adamantium">Adamantium</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button32" onClick="zdSpawnTrophy();" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>' +
			'<p>'+zdui.getLabel("gifts_juice_title")+': ' +
			'<select name="zdSpawnJuice" id="zdSpawnJuice">' +
			'<option value="showJuiceViral(\'send-feed\')">'+zdui.getLabel("send_to_feed")+'</option>' +
			'<option value="showJuiceViral(\'ask-feed\');">'+zdui.getLabel("ask_on_feed")+'</option>' +
			'<option value="showJuiceViral(\'send-request\');">'+zdui.getLabel("send_as_request")+'</option>' +
			'<option value="showJuiceViral(\'ask-request\');">'+zdui.getLabel("ask_as_request")+'</option>' +
			'<option value="updateJuiceViralButtonManager();">'+zdui.getLabel("update_button")+'</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button33" onClick="zdEvalFromList(\'zdSpawnJuice\');" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>' +
			'<p>'+zdui.getLabel("gifts_treattrophy_title")+': ' +
			'<select name="zdSpawnTreatTrophyName" id="zdSpawnTreatTrophyName">' +
			'<option value="1">Apple</option>' +
			'<option value="2">Orange</option>' +
			'<option value="3">Grapes</option>' +
			'<option value="4">Strawberry</option>' +
			'<option value="5">Chocolate Kiss</option>' +
			'<option value="6">Mint Pop</option>' +
			'<option value="7">CupCake</option>' +
			'<option value="8">Ice Cream</option>' +
			'</select>' +
			'&nbsp;<select name="zdSpawnTreatTrophyLevel" id="zdSpawnTreatTrophyLevel">' +
			'<option value="1">Bronze</option>' +
			'<option value="2">Silver</option>' +
			'<option value="3">Gold</option>' +
			'<option value="4">Platinum</option>' +
			'<option value="5">Adamantium</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button34" onClick="zdSpawnTreatTrophy();" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>' +
			'<p>'+zdui.getLabel("gifts_buildables_title")+': ' +
			'<select name="zdSpawnBuildables" id="zdSpawnBuildables">' +
		/*	'<optgroup label="Cornucopia">' +
			'<option value="postForBuildablePart(0,\'Cornucopia\');">'+zdui.getLabel("completed")+' Cornucopia</option>' +
			'<option value="postForBuildablePart(885,\'Cornucopia\');">Autumn Leaf</option>' +
			'<option value="postForBuildablePart(886,\'Cornucopia\');">Basket</option>' +
			'<option value="postForBuildablePart(887,\'Cornucopia\');">Grapes</option>' +
			'<option value="postForBuildablePart(888,\'Cornucopia\');">Pear</option>' +
			'<option value="postForBuildablePart(889,\'Cornucopia\');">Pumpkin</option>' +
			'</optgroup">' +
		*/
			'<optgroup label="Greenhouse">' +
			'<option value="zdSharePlantingTable();">Share Table</option>' +
			'<option value="askForBuildables({itemName:\'Glass Pillar\',img:\'559.gif\'});">Ask For Glass Pillar</option>' +
			'<option value="askForBuildables({itemName:\'Planting Pot\',img:\'560.gif\'});">Ask For Planting Pot</option>' +
			'<option value="askForBuildables({itemName:\'Glass Panel\',img:\'562.gif\'});">Ask For Glass Panel</option>' +
			//'<option value="zdGreenHouseUpgradeSilvermulti()">Try multi upgrade to silver</option>' +
			//'<option value="zdGreenHouseUpgradeGoldmulti()">Try multi upgrade to gold</option>' +
			'</optgroup">' +
			'</select>' +
			'&nbsp;<input type="button" id="button35" onClick="zdEvalFromList(\'zdSpawnBuildables\');" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>';
		}
			strHtml += '<p><a href="javascript:missionDialogMgr.gotoMissionTab();">'+zdui.getLabel("gifts_missions_title")+': </a>' +
			'<select name="zdSpawnMissionAnimal" id="zdSpawnMissionAnimal">' +
			'<optgroup label="'+zdui.getLabel("easy")+'">' +
			'<option value="124">Student Tetra</option>' +
			'<option value="116">Lucky Cat</option>' +
			'<option value="52">Irish Snake</option>' +
			'<option value="42">LoveBirds</option>' +
			'<option value="41">Reindeer</option>' +
			'<option value="28">Helpless Turkey</option>' +
			'<option value="3">Mountain Goat</option>' +
			'<option value="2">Humpback Whale</option>' +
			'<option value="1">Teacup Pig</option>' +
			'</optgroup">' +
			'<optgroup label="'+zdui.getLabel("medium")+'">' +
			'<option value="4">Great White Shark</option>' +
			'<option value="5">Spectacled Bear</option>' +
			'<option value="6">South China Tiger</option>' +
			'</optgroup">' +
			/*
			'<optgroup label="Hard?">' +
			'<option value="7">Golden Lion Tamarin?</option>' +
			'<option value="8">Livingstons Chichlid?</option>' +
			'</optgroup">' +
			*/
			'</select>' +
			'&nbsp;<select name="zdSpawnMissionAction" id="zdSpawnMissionAction">' +
			'<option value="startMission">'+zdui.getLabel("start")+'</option>' +
			'<option value="republishMission">'+zdui.getLabel("republish")+'</option>' +
			'<option value="publishEndOfMission">'+zdui.getLabel("complete")+'</option>' +
			'<option value="continueMissionWLP">hire help 1wlp</option>' +
			'<option value="finishMissionWlp">finish with wlp</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button36" onClick="zdSpawnMission();" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>';
		if(!zdui.isLite){
			strHtml += '<p>'+zdui.getLabel("gifts_rosegarden_title")+': ' +
			'<select name="zdSpawnRoses" id="zdSpawnRoses">' +
			'<option value="RoseGarden.shareUpgrade();">'+zdui.getLabel("gifts_rosegarden_share_upgrade")+'</option>' +
			'<option value="RoseGarden.askForGifts();">'+zdui.getLabel("gifts_rosegarden_ask_rose")+'</option>' +
			'<optgroup label="'+zdui.getLabel("gifts_rosegarden_share_rose")+'">' +
			'<option value="RoseGarden.shareHarvest(563);">Blue</option>' +
			'<option value="RoseGarden.shareHarvest(564);">Red</option>' +
			'<option value="RoseGarden.shareHarvest(565);">Yellow</option>' +
			'<option value="RoseGarden.shareHarvest(566);">White</option>' +
			'<option value="RoseGarden.shareHarvest(567);">Green</option>' +
			'<option value="RoseGarden.shareHarvest(568);">Lavender</option>' +
			'<option value="RoseGarden.shareHarvest(569);">Orange</option>' +
			'<option value="RoseGarden.shareHarvest(570);">Pink</option>' +
			'<option value="RoseGarden.shareHarvest(571);">Glitter</option>' +
			'</optgroup">' +
			'</select>' +
			'&nbsp;<input type="button" id="button37" onClick="zdEvalFromList(\'zdSpawnRoses\');" value="'+zdui.getLabel("button_go")+'" />' +
			'</p>' +
		//	'<p>'+zdui.getLabel("gifts_goldenegg_title")+': ' +
		//	'<select name="zdSpawnGoldenEgg" id="zdSpawnGoldenEgg">' +
		//	'<optgroup label="'+zdui.getLabel("hatched")+'">' +
		//	'<option value="shareGoldenEggHatched(1412);">Golden Rabbit</option>' +
		//	'<option value="shareGoldenEggHatched(1413);">Golden Moose</option>' +
		//	'<option value="shareGoldenEggHatched(1451);">Golden Goat</option>' +
		//	'<option value="shareGoldenEggHatched(1452);">Golden Goose</option>' +
		//	'<option value="shareGoldenEggHatched(301);">Post Oak</option>' +
		//	'<option value="share25Oaks();">Post 25 Oaks</option>' +
		//	'<option value="zdSpawnGoldenEggTradeById();">By itemId</option>' +
		//	'<option value="showGoldenEggInviter();">'+zdui.getLabel("invite")+'?</option>' +
		//	'</optgroup">' +
		//	'</select>' +
		//	'&nbsp;<input type="button" id="button38" onClick="zdEvalFromList(\'zdSpawnGoldenEgg\');" value="'+zdui.getLabel("button_go")+'" />' +
		//	'</p>' +
			'<p>'+zdui.getLabel("gifts_megaspawn_title")+': <input type="button" id="button39" onClick="zdMegaSpawnPreview();" value="'+zdui.getLabel("button_go")+'" /></p>';
		}
			strHtml += '<p>Adoptable Animals: <input type="button" id="button40" onClick="zdAdoptFlyout();" value="'+zdui.getLabel("button_go")+'" />&nbsp;<input type="button" id="button41" onClick="promptFeedGiftDialog();" value="Force Adopt" /></p>' +
			'<p>'+zdui.getLabel("gifts_promo_title")+': <input type="button" id="button42" onClick="zdSeasonal.showSeasonalStatus();" value="tree" /><input type="button" id="button42" onClick="zdSeasonal.showSeasonalBuildableStatus();" value="buildable" /><input type="button" id="button42" onClick="zdSeasonal.showSeasonalBuildableStatus2();" value="buildable2" /></p>' +
			
			'</form>' +
			'</div>';
		return strHtml;
	},
	_addBoxVisit: function(){
		var strHtml = 
			'<div id="visitTab" style="display: none;">' +
			'<h2>Game Feeds:</h2>' +
			'<p style="text-align: left;">See Game posts for ZooWorld!</p>' + 
			'<ul>' +
		//	'<li><a href="http://www.facebook.com/?sk=app_167746316127" target="_blank">Zoo World Game Feed</a></li>' +
			'<li><a href="https://www.facebook.com/games/activity" target="_blank"><font color="red" size="1" face="Tahoma">YOUR GAMES ACTIVITY</font></a></li>' +
		//	'<li><a href="http://www.facebook.com/?sk=app_148662968522174" target="_blank">Zoo Classic Game Feed</a></li>' +
			'</ul>' +
			'<h2>'+zdui.getLabel("myzoo_treasure_title")+':</h2>' + 
			'<p style="text-align: left;">'+zdui.getLabel("visiting_go_outside")+'</p>' +
			'<ul>' + 
			'<li><a href="javascript:zdVisitAllZoosNew(0,0);">'+zdui.getLabel("myzoo_treasure_visit_all")+'</a></li>' +
			'<li><a href="javascript:var startAt = parseInt(prompt(\''+zdui.getLabel("myzoo_treasure_start_at")+':\', \'0\'));zdVisitAllZoosNew(startAt,1);">'+zdui.getLabel("myzoo_treasure_continue_from")+'</a> '+zdui.getLabel("visiting_resume_intro")+'</li>' +
			'<li><a href="javascript:var userId = prompt(\''+zdui.getLabel("specify_user_id_prompt")+'\', \'0\');zdVisitZoo(userId,1);">'+zdui.getLabel("specific_user")+'</a></li>' +
			'</ul>' + 
			'<h2>Friends and ZooMates:</h2>' +
			'<p style="text-align: left;">Browse your Friends, send them various gifts, generate lists, etc...</p>' +
			'<ul>' +  
			'<li><a href="javascript:zdFriendList();">Generate List of NON-ZooMates and ZooMates</a></li>' +
			'<li><a href="javascript:zdSortedFriendList();">Generate Sorted List of Friends</a> / <a href="javascript:zdSortedFriendListByLevel();">by level</a></li>' +
			'<li><a href="javascript:zdShowFriendList();">'+zdui.getLabel("visiting_load_friends")+'</a></li>' +
			'</ul>' + '<p><tr><td>Search a friend by name or Id: </td>  ' +
			'<td><input type="text" value="" name="zdFriendsCriteria" id="zdFriendsCriteria" /> </td>' +
			' <input type="button" id="button58" value="Search" onClick="zdShowFriendList2();" /></p> ' +
			'<p id="zdFriendListPH" style="text-align: left;"></p>' +
			'</div>';
		return strHtml;
	},
	_addBoxPlace: function(){
		var strHtml = 
			'<div id="placeTab" style="display: none;">' ;
			if(!(zdui.isLite) ){
			strHtml += '<div id="switch" style="display: block;"><input type="button" id="placeB" onClick="zdSwitchST(\'place\');" value="Actions" /></div>' +
			'<div id="place1" style="display: block;"><h2>Placement : (PLEASE READ CAREFULLY)</h2>' +
			'<p style="text-align: left;">UPDATE: Animals will now be moved to specified coordinates without loading inventory.  This means they can be placed with locked inventory, and will also be moved to the specified coords even if they are already placed.  Please note that this will allow you to place an item ANYWHERE.'+
			'Please USE CAUTION!</p>' +
			'<p style="text-align: left;">Animals will be placed at the coordinates specified.  Other items will be placed in an array as defined by the optional array parameters STARTING at the coordinates specified.'+
			'</p>' + 
			'<img alt="" src="'+zdHomePageUrl+'img/zoomap.png" />'+
			'<a href="'+zdHomePageUrl+'img/placement_coords.jpg" target="_blank"><img alt="" src="'+zdHomePageUrl+'img/placement_coords.jpg" title="click for fullsize" width="225" /></a></div>'+
			'<div id="place2" style="display: none;"><h3>Place Item From Inventory: </h3>' +
			'ItemId:<input id="zdPlaceItemId" name="zdPlaceItemId" value="Enter ItemId" onFocus="var placeItemId = document.getElementById(\'zdPlaceItemId\');if(placeItemId.value==\'Enter ItemId\') placeItemId.value= \'\';">&nbsp;Get from Item List<br>' +
			'Island:<input id="zdPlaceIslandNum" name="zdPlaceIslandNum" value="Enter Island Number" onFocus="var placeIslandNum = document.getElementById(\'zdPlaceIslandNum\');if(placeIslandNum.value==\'Enter Island Number\') placeIslandNum.value= \'\';">&nbsp;1-'+zdIslands+'<br>' +
			'X Start Coord:<input id="zdPlaceX" name="zdPlaceX" value="Enter X Coord" onFocus="var placeX = document.getElementById(\'zdPlaceX\');if(placeX.value==\'Enter X Coord\') placeX.value= \'\';">&nbsp;:&nbsp;Try values of 5-48 (map dependent)<br>' +
			'Y Start Coord:<input id="zdPlaceY" name="zdPlaceY" value="Enter Y Coord" onFocus="var placeY = document.getElementById(\'zdPlaceY\');if(placeY.value==\'Enter Y Coord\') placeY.value= \'\';">&nbsp;:&nbsp;Try values of 5-48 (map dependent)<br>' +
			'<h3>Optional parameters for placing items in an array: </h3>' +
			'X Length:<input id="zdPlaceXl" name="zdPlaceXl" value="1" onFocus="var placeXl = document.getElementById(\'zdPlaceXl\');">&nbsp;:&nbsp;How many in X when defining an Array<br>' +
			'Y Length:<input id="zdPlaceYl" name="zdPlaceYl" value="1" onFocus="var placeYl = document.getElementById(\'zdPlaceYl\');">&nbsp;:&nbsp;How many in Y when defining an Array<br>' +
			'X Spacing:<input id="zdPlaceXs" name="zdPlaceXs" value="1" onFocus="var placeXs = document.getElementById(\'zdPlaceXs\');">&nbsp;:&nbsp;X spacing when defining an Array<br>' +
			'Y Spacing:<input id="zdPlaceYs" name="zdPlaceYs" value="1" onFocus="var placeYs = document.getElementById(\'zdPlaceYs\');">&nbsp;:&nbsp;Y spacing when defining an Array<br>' +
			'&nbsp;<input type="button" id="button43" onClick="zdAutoPlaceItem();" value="'+zdui.getLabel("button_go")+'" />' +
			'&nbsp;<input type="button" id="button44" onClick="zdGetItemCoords();" value="Get Current Coords" />' +
			'&nbsp;<input type="button" id="button45" onClick="zdExportIsland.generate();" value="Export Island" />' +
			'&nbsp;<input type="button" id="button45" onClick="zdExportIsland2.generate();" value="Show Island" />' +
			'&nbsp;<input type="button" id="button45" onClick="zdShowStorageToSell.generate();" value="Show Storage" /></p>' +
			'<p>' + 
			'<h3>Move Island:</h3>' +
			'Move all animals and items to another island keeping the same locations.<br>'+
			'For best results, clear the destination/to island before moving.'+
			'<form method="get" action="#">' +
			'<select name="zdFromislandId" id="zdFromislandId">';
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value='+i+'>from '+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml += '</select>' +
			'&nbsp;<select name="zdToislandId" id="zdToislandId">';
			for(i=0;i<zdIslands;i++){
				strHtml += '<option value='+i+'>to '+zdui.getLabel("island")+' '+(i+1)+'</option>';
			}
			strHtml += '<option value=9998>to inventory</option>' +
			'</select>' +
			'&nbsp;<input type="button" id="button46" onClick="zdMoveIsland();" value="'+zdui.getLabel("button_go")+'" />' +
			'</form>' +
			'</p>' +
			'<h3>Move Above Item To Inventory: </h3>' +
			'All will be moved, no matter what island they are on...<br>' +			
			'<input type="button" id="button47" onClick="zdMoveAllItemToStorage();" value="Move to Inventory" /></p>' +
			'<br>'+
			'<p><input type="button" id="button48" value="refresh zoo" onClick="zdRefreshZoo();" /></p>'+
			'</div>' ;
			}
			strHtml +='</div>';
		return strHtml;
	},
	_addBoxDebug: function(){
		var strHtml = 
			'<div id="debugTab" style="display: none;">' +
			'<h2>'+zdui.getLabel("advanced_title")+':</h2>' + 
			'<p style="text-align: left;">'+zdui.getLabel("advanced_intro")+'</p>' +
			'<ul>'; 
			//'<li>'+zdui.getLabel("advanced_detailedlogging_title")+': <a href="javascript:zdShowDebugFields();">'+zdui.getLabel("show")+'</a> / <a href="javascript:zdHideDebugFields();">'+zdui.getLabel("hide")+'</a> / <a href="javascript:zdClearLogOnInterval(5);">clear every 5 min</a></li>'+ 
			strHtml += '<li>'+zdui.getLabel("advanced_cookies_title")+': <a href="javascript:zdShowCookies();">'+zdui.getLabel("advanced_cookies_show")+'</a> / <a href="javascript:zdDeleteCookies();">'+zdui.getLabel("advanced_cookies_delete")+'</a> / <a href="javascript:zdDeleteCookiesOnInterval(5);">'+zdui.getLabel("advanced_cookies_delete")+' (every 5 minutes)</a>';
	//		'/ <a href="javascript:zdSetZWCookies();">'+zdui.getLabel("advanced_cookies_set")+'</a></li>'+
			strHtml += '<li>'+zdui.getLabel("advanced_zoo_title")+': <a href="javascript:zdLoadZooService(zdUserId);">'+zdui.getLabel("advanced_zoo_loadzoo")+'</a> / ' +
			'<a href="javascript:var userId = prompt('+"'"+zdui.getLabel("specify_user_id_prompt")+"'"+', '+"'"+'0'+"'"+');zdLoadZooService(userId);">'+zdui.getLabel("advanced_zoo_loadanyzoo")+'</a> / ' + 
			'<a href="javascript:zdShowZoo();">'+zdui.getLabel("advanced_zoo_showzoo")+'</a> / '+
			'<a href="javascript:var islandId = prompt('+"'"+zdui.getLabel("advanced_zoo_specifyisland")+"'"+', '+"'"+'0'+"'"+');zdLoadIsland(islandId, zdUserId, zdUserId);">'+zdui.getLabel("advanced_zoo_loadyourisland")+'</a> </li> ' ; // islandId, zooOwnerId, userId
			if(!zdui.isLite){
				strHtml += '<li>'+zdui.getLabel("advanced_friends_title")+': <a href="javascript:zdAjaxFriendService();">'+zdui.getLabel("advanced_friends_loadlist")+'</a> / '+
				'<a href="javascript:zdDeduplicateFriends();">'+zdui.getLabel("advanced_friends_deduplicatelist")+'</a> / '+
				'<a href="javascript:zdNewShakeAllFriends();">Shake All (take a long time)</a></li> ';
//				'<li>'+zdui.getLabel("advanced_zoodisplay_title")+': <a href="javascript:zdShowZooNormal();">'+zdui.getLabel("advanced_zoodisplay_normal")+'</a> / <a href="javascript:zdShowZooMax();">'+zdui.getLabel("advanced_zoodisplay_big")+'</a>' +
//				'</li>' +
				strHtml += '<li>'+zdui.getLabel("advanced_workqueue_title")+': <a href="javascript:zdWorkQueueStart();">'+zdui.getLabel("advanced_workqueue_start")+'</a> / <a href="javascript:zdWorkQueueStop();">'+zdui.getLabel("advanced_workqueue_stop")+'</a> / <a href="javascript:zdLogStatus(zdWorkQueueSize() + \' '+zdui.getLabel("advanced_workqueue_itemsinthequeue")+'\');">'+zdui.getLabel("advanced_workqueue_showsize")+'</a>  / <a href="javascript:zdClearWorkQueue();">'+zdui.getLabel("advanced_workqueue_clear")+'</a></li>';
			}
//			'<li>'+zdui.getLabel("advanced_play_title")+': <a href="javascript:zdPlayBringIt();">BringIt</a></li>' +
//			'<li>'+zdui.getLabel("advanced_alternateaccess_title")+': <a href="javascript:zdUnframeZoo();">'+zdui.getLabel("advanced_alternateaccess_unframe")+'</a> / <a href="javascript:zdWorkaroundZoo();">'+zdui.getLabel("advanced_alternateaccess_workaround")+'</a></li>' +
//			'<li>'+zdui.getLabel("advanced_tryto_title")+': <a href="javascript:var intAmount = parseInt(prompt(\'Iterate how many times?\', \'100\'));zdQuizCash( intAmount );">Get Quiz Cash</a> / <a href="javascript:zdQuizCashCont();">Get Quiz Cash Continuously</a></li>' +
			strHtml += '<li>'+zdui.getLabel("advanced_tryto_title")+': <a href="javascript:zdGetIdTreasureService();">Get Cash</a> / <a href="javascript:zdGetIdTreasureService2();">Get Cash for slow pc</a> </li>';
//			'<li>'+zdui.getLabel("advanced_goldeninviter_title")+': <a href="javascript:zdGoldenInviter( 1 );">Rabbit/Goat</a> / <a href="javascript:zdGoldenInviter( 2 );">Moose/Goose</a> / <a href="javascript:zdGoldenInviter( 3 );">Timberwolf/Bamboo Lemur</a></li>' +
			if(!zdui.isLite){
				strHtml += '<li>'+zdui.getLabel("advanced_punkd_title")+': <a href="javascript:zdHeartAttack();">Heart Attack</a> / <a href="javascript:zdLetItSnow();">Let It Snow</a> / <a href="javascript:Jumper.enabled=true;">Jumper</a></li>';
				//strHtml += '<li>Repeat Shaking: <a href="javascript:zdLoadAndReshakeWlp();">ReShake WLP Trees</a> / <a href="javascript:var islandNum = parseInt(prompt(\'Reshake which island? (1-'+zdIslands+')\', \'\'));zdReShakey( islandNum-1,500 );">ReShakey (uses juice)</a> / <a href="javascript:zdStopShaking();">STOP</a></li>';
			}
			strHtml += '<li>Watch and Earn: <a href="javascript:getWAEParams();">Items</a> / <a href="javascript:newwaeFlyout();">Views</a></li>' ;
			if(!zdui.isLite){
				strHtml += '<li>PEEK A BOO...</li>' ;
				strHtml += '<li><a href="javascript:zdWebCam();">Smile - You\'re on Candid Camera!  :)</a></li>' ;
			}
			strHtml += '<li>Alternate Collection (uses juice): <a href="javascript:zdCupidMultiCollect();">Cupid</a> / <a href="javascript:var islandNum = parseInt(prompt(\'Shake which island? (1-'+zdIslands+')\', \'\'));zdSuperShakey( islandNum-1 );">Shakey</a></li>';
			strHtml += '</ul>' + 
			'<form method="get" action="">' +
			zdui.getLabel("advanced_javacript_javacript")+': <a onClick="eval(document.getElementById(\'zdJavascript\').value);">'+zdui.getLabel("advanced_javacript_evaluate")+'</a><br/>' +
			'<textarea name="zdJavascript" id="zdJavascript" style="width: 400px; height: 100px; display: block; font-size: 1em;"></textarea>' +
			'</form>' +
			'<form method="get" action="">' +
			zdui.getLabel("advanced_javacript_ajaxdelay")+': <a onClick="zdSetAjaxDelay(document.getElementById(\'zdAjaxDelay\').value);">' + zdui.getLabel("update")+'</a><br/>' +
			'<input type="text" name="zdAjaxDelay" id="zdAjaxDelay" style="width: 400px; font-size: 1em;" value="'+zdAjaxCallDelay+'" onBlur="zdSetAjaxDelay(document.getElementById(\'zdAjaxDelay\').value);"/>' +
			'</form>' +
			'</div>' +
			'<div id="oldTab" style="display: none;">' +
			'<h2 style="color: #F00;">No longer working:</h2><ul>'+
			'<li>Easter: <a href="javascript:viralSpecialEventGift(0);">green</a> / <a href="javascript:viralSpecialEventGift(1);">request</a> / <a href="javascript:viralSpecialEventGift(2);">share</a> / <a href="javascript:zdRepeatGreenEgg();">continuously</a></li>'+
			'<li>St. Patricks Day: <a href="javascript:viralStPatricksDay();">launch</a></li>'+
			'<li>Flowershop: <a href="javascript:showShopIframe(false, 0, 0);">show</a> / <a href="javascript:zdShowFlowersInShop();">show flowers</a> (do in order)</li>' + 
			'<li>Mothers Day: <a href="javascript:viralMothersDay(1);">Ask for Pacifier</a> / <a href="javascript:viralMothersDay(2);">Post Bottle</a> &mdash; only 3 requests per day!</li>' +
			// '<li><a href="javascript:bulkLimitedAnimalGrab();">Bulk grab limited animals (200 time 2 = 400 more of each!)</a>.</li>' + // stop as it now costs money!
			// '<li>Gate upgrade: <a href="javascript:zdDesiredGate();">imaginary gate upgrade</a></li>'+
			// '<li>Post bee: <a href="javascript:zdPostBee();">post</a></li>'+
			'<li>NOT WORKING FOR ME: Top up: <a href="javascript:zdUpdateZooCash(1000000000000, 1000000);">cash and WLP</a></li>'+
			// '<li>Shaker: <a href="javascript:zdShakeZoo(zd_fb_sig_user);">shake my islands</a></li>'+
			// '<li>Bulk buy item: <a href="javascript:var itemId = prompt('+"'"+'Specify item ID:'+"'"+', '+"'"+'1275'+"'"+');bulkBuyItem(itemId);">buy/upgrade</a> (keep on buying 2 of an item, then upgrading every five seconds until you run out of money)</li>'+
			'<li>NOT WORKING FOR ME: 4th July: <a href="javascript:July4.askForGifts();">ask for gifts</a> / <a href="javascript:July4.shareSparkler();">share sparkler</a> / share animal trade: <a href="javascript:July4.shareTrade(1336);">Maine Lobster</a>, <a href="javascript:July4.shareTrade(1337);">Patriotic Butterfly</a>, <a href="javascript:July4.shareTrade(1338);">White Peafowl</a>, <a href="javascript:July4.shareTrade(1339);">Bluebird</a></li>' +
			'<li>NOT WORKING FOR ME: Father\'s Day: <a href="javascript:fathersDayShareItem();">share animal of the day</a></li>'+
			'<li>NOT WORKING FOR ME: 4th July gift: <a href="javascript:zdGiftItem(573);">red firework</a>, <a href="javascript:zdGiftItem(574);">white firework</a>, <a href="javascript:zdGiftItem(575);">blue firework</a> (<a href="javascript:zdPostForBuildablePart(631, \'Theater\');" title="ask for speakers">&nbsp;</a>)</li>' +
			'<li>NOT WORKING FOR ME: <a href="javascript:zdScheduleFeedAllAnimalsSpecial();">Schedule Super Size feeding</a>!!! (collect 2 day treats every ten minutes...)</li>' + 
			'</ul>' + 
			'</div>';
		return strHtml;
	},
	initialise: function(){
	if(isLite){
		zdui.isLite=isLite;
	}
	zdBox = document.getElementById('zdBox');
	if(!zdBox) {
		zdui._addHead();
		zdBox = zdui._addElements();
	} 
	// Build UI HTML
	var strHtml = zdui._addBoxHeader()
		+ zdui._addBoxIntro()
		+ zdui._addBoxFeed()
		+ zdui._addBoxShop()
		+ zdui._addBoxGifts()
		+ zdui._addBoxVisit()
		+ zdui._addBoxPlace()
		+ zdui._addBoxDebug();
		//+ zdui._addBoxFooter();
	var strHtmlstatus = zdui._addBoxFooter();
	zdBox.innerHTML = strHtml;
	zdNewStatus.innerHTML = strHtmlstatus;
	// replace item list placeholder with box
	document.getElementById('zdBody').innerHTML=document.getElementById('zdBody').innerHTML+'<div id="zdOldStatus" style="display: none;"></div>';
	if(statusbox && statusbox=='top'){
		UpStatus()
	}else{
		checkPosStatus();var zdNewStatusBody=document.getElementById('zdNewStatusBody')
		zdNewStatusBody.style.display = "block";
	}
	var frmStatus = document.getElementById('zdStatus');
	frmStatus.value = '';
	zdLogStatus(''+zdVersion+' loading...');
	//zdLogStatus('Using '+zdprotocol+'');
	zdRandomGreeting();
	return;
	}
};

// initialise
javascript:(function(){
/*
	document.getElementById("northLeaderboard").setAttribute('id','breakingnews');document.getElementById("breakingnews").setAttribute('style','height:auto');
	if(showBanner=='true' || showBanner==true){
	zdTempBanner();
	}
	//document.getElementById("northLeaderboard").parentNode.removeChild(document.getElementById("northLeaderboard"));
	if(document.getElementById("southLeaderboard")){
	document.getElementById("southLeaderboard").parentNode.removeChild(document.getElementById("southLeaderboard"));}
	showInterstitialAd=function (){};
*/
	document.getElementById("ryAdContainer").parentNode.removeChild(document.getElementById("ryAdContainer"));
	document.getElementById("preloaderContainer").parentNode.removeChild(document.getElementById("preloaderContainer"));
	zdui.initialise();
	setTimeout('zdbreed.init(1);',1000);
	setTimeout('zdMessageCounter();',20000);
	setTimeout('zdLoadZooService(zdUserId);',1500);
	setTimeout('CheckList();',1000);
	//setTimeout('zdGetGiftfbsig();',1000);
	setTimeout('zdGetItemQty();',3000);
	setTimeout('zdGetGiftIds();',1000);
	setTimeout('zdGetShopIds();',8000);
	setTimeout('zdGetPriceIds();',18000);
	//setTimeout('loadAllImg();',22000);
	setTimeout('zdCheckLoad();',10000);
	//setTimeout('zdTempBanner();',24000);
	// window.setInterval('zdZooStatsAjax();', (1000*60*5) ); // send stats every 5 mins
	// window.setTimeout('zdHeartAttack();', 60*60*zdAjaxCallDelay);
	// window.setTimeout('Jumper.enabled=true;', (1000*60*5) );
	// window.setTimeout('zdLetItSnow();', 1000*60);
	return;
})();
function zdShowBreakingNews(){
	document.getElementById("breakingnews").innerHTML='<marquee  style="font-family:Book Antiqua; color: #f52424" scrolldelay="200"  id="BreakingNews" loop="3"><div ><img src="'+zdHomePageUrl+'img/BreakingNews.png"/></div></marquee>';
}

function zdTempBanner(){
	if(zdZooAdoptItems){
		var lastAdoptId=zdZooAdoptItems.dateorder[zdZooAdoptItems.dateorder.length-1];
		document.getElementById('breakingnews').innerHTML='<marquee style="font-family:Book Antiqua; color: #f52424;font-size:xx-large;" scrolldelay="200" id="BreakingNews" loop="3">A new Adopt Animal is here! The '+zdGetAnimalForId(lastAdoptId)["name"]+' <img alt="" src="http://cdnrockyou-a.akamaihd.net/apps/zoo/item/LargeImg/'+lastAdoptId+'.gif" onClick="javascript:zdSpawnAdoption('+lastAdoptId+');" width="40" title="click" /></marquee>';
	}else{if(showBanner=='true' || showBanner==true){setTimeout('zdTempBanner()',zdAjaxCallDelay*3);}}
}

var zdStopCheckLoad=0;

function zdCheckLoad(){
	if(zdStopCheckLoad<20){
		if(!arrBreedData["success"]){
			zdStopCheckLoad++;//zdLogStatus('NO1');
			setTimeout('zdCheckLoad();',1000);
		}else if(!arrBreedData["success"]){
			zdStopCheckLoad++;//zdLogStatus('NO2');
			setTimeout('zdCheckLoad();',1000);	
		}else if(!zdZooResponseData["success"]){
			zdStopCheckLoad++;//zdLogStatus('NO3');
			setTimeout('zdCheckLoad();',1000);
		}else if(arrItemQty[0]!=(zdIslands+1)){
			zdStopCheckLoad++;//zdLogStatus('NO4');
			setTimeout('zdCheckLoad();',1000);
		}else if(zdZooLoaded==0){
			zdStopCheckLoad++;//zdLogStatus('NO5');
			setTimeout('zdCheckLoad();',1000);
		}else if(arrGiftIds.length<20){
			zdStopCheckLoad++;//zdLogStatus('NO6');
			setTimeout('zdCheckLoad();',1000);
		}else{
			//zdLogStatus('YES2');
			zdLogStatus(''+zdVersion+' ' + zdui.getLabel("loaded")+'!');//zdNewAdoptButton();
		}
	}else{ 
		//zdLogStatus('YES');
		zdLogStatus(''+zdVersion+' ' + zdui.getLabel("loaded")+'!');//zdNewAdoptButton();
	}
}
/*
 * Miscellaneous utilities
 */
// show/hide assistant
function togglezdA(){
	zdBody = document.getElementById('zdBody');
	zdPreview = document.getElementsByClassName('zdShopPreview'); zdFlyoutTabs = document.getElementById('flyoutTabs');
	zdOldStatus = document.getElementById('zdOldStatus');
	if(zdBody.style.display == "none"){
		zdBody.style.display="block";
		if(zdOldStatus.style.display=="none"){
			zdNewStatusBody.style.display="block";
		}
		for(var i=0;i<zdPreview.length;i++){
			if(zdPreview[i].innerHTML){
				zdPreview[i].style.display="block";
			}
		}
		document.getElementById('zdShowDan').innerHTML='[<a href="javascript:togglezdA();">'+zdui.getLabel("hide")+'</a>]';
		if(zdFlyoutTabs) zdFlyoutTabs.style.display="block";
	}else{
		zdBody.style.display="none";
		zdHideShopPreview();
		if(zdOldStatus.style.display=="none"){
			zdNewStatusBody.style.display="none";
		}
		for(var i=0;i<zdPreview.length;i++){
			if(zdPreview[i].innerHTML){ 
				zdPreview[i].style.display="none";
			}
		}
		document.getElementById('zdShowDan').innerHTML='[<a href="javascript:togglezdA();">'+zdui.getLabel("show")+'</a>]';
		if(zdFlyoutTabs) zdFlyoutTabs.style.display="none";
	}
	return;
}
//status
function togglezdS(){
	zdNewStatusBody = document.getElementById('zdNewStatusBody');
	var zdStatus=document.getElementById('zdStatus');
	if(zdNewStatusBody.style.display == "none"){
		zdNewStatusBody.style.minWidth="310px";
		zdStatus.setAttribute('style','width:97%;');
		zdNewStatusBody.style.display="block";
	}else{
		zdNewStatusBody.style.width="auto";
		zdNewStatusBody.style.display="none";
	}
	return;
}

function checkPosStatus(){
	var zdNewStatus= document.getElementById('zdNewStatus');
	var zdNewStatusBody= document.getElementById('zdNewStatusBody');
	var zdOldStatus= document.getElementById('zdOldStatus');
	var zdStatusText=document.getElementById('zdStatus').value;
	if(zdNewStatus.innerHTML ==''){togglezdS();
		zdNewStatus.innerHTML = zdOldStatus.innerHTML;
		zdNewStatus.setAttribute('style','display: block;');
		zdNewStatusBody.setAttribute('style','min-width:310px;');
		zdOldStatus.innerHTML = '';
		zdOldStatus.setAttribute('style','display: none;');
		document.getElementById('zdStatus').value=zdStatusText;togglezdS();
	}else{togglezdS();
		zdOldStatus.innerHTML = zdNewStatus.innerHTML;
		zdOldStatus.setAttribute('style','display: block;');
		zdNewStatus.innerHTML = '';
		zdNewStatus.setAttribute('style','display: none;');
		document.getElementById('zdStatus').value=zdStatusText;togglezdS();
	}
}

function UpStatus(){
	zdNewStatus = document.getElementById('zdNewStatus');
	if(zdNewStatus.style.zIndex == "1400"){
		zdNewStatus.style.zIndex="1335";
	}else{
		zdNewStatus.style.zIndex="1400";
	}
	return;
}

// log 
function zdLogStatus(theStatus) {
	var showFullLog = true;
	var frmStatus = document.getElementById('zdStatus');
	var tss = '';
	var ts = new Date();
	if(ts.getHours() < 10) {
		tss+='0';
	}
	tss+=ts.getHours()+':';
	if(ts.getMinutes() < 10) {
		tss+='0';
	}
	tss+=ts.getMinutes()+':';
	if(ts.getSeconds() < 10) {
		tss+='0';
	}
	tss+=ts.getSeconds()+':';
	if(showFullLog){
		frmStatus.value = tss+" "+theStatus+"\n"+frmStatus.value; // prepend log
	}else{
		frmStatus.value = tss+" "+theStatus+"\n";
	}
}

function zdClearLogStatus(){
	var frmStatus = document.getElementById('zdStatus');
	frmStatus.value = '';
}

function zdClearLogOnInterval( intMinutes){
	// intMinutes = 15;
	zdLogStatus("Will clear log every "+intMinutes+" minutes...");
	window.setInterval('zdClearLogStatus();', intMinutes*60000);
}

function waitsec(msecs) {
	var start=new Date().getTime(); var cur=start;
	while(cur - start < msecs){cur=new Date().getTime();}
}
// Manipulate AJAX response
function zdSetResponse(theResult) {
	var frmResult = document.getElementById('zdResult');
	if(true){ // disable showing response result
		frmResult.value = theResult;
	}
	return;
}

function zdGetResponse(){
	var frmResult = document.getElementById('zdResult');
	return frmResult.value;
}
// show/hide zoo movie
var zdFlashContainerContent = null;

function zdToggleZoo(){ 
	// show/hide flash!
	if(zdFlashContainerContent == null){
		document.getElementById('zdShowZoo').innerHTML='<a href="javascript:zdToggleZoo();">'+zdui.getLabel("show")+'</a>';
		zdHideZoo();
	}else{
		document.getElementById('zdShowZoo').innerHTML='<a href="javascript:zdToggleZoo();"> '+zdui.getLabel("hide")+'</a>';
		zdShowZoo();
	}
	return;
}

function zdToggleShop(){ 
	// show/hide shop!
	if(document.getElementById('shopIframe').style.display=='block'){
		document.getElementById('zdShowShop').innerHTML='<a href="javascript:zdToggleShop();">'+zdui.getLabel("show")+'</a>';
		hideShopIframe();
	}else{
		document.getElementById('zdShowShop').innerHTML='<a href="javascript:zdToggleShop();"> '+zdui.getLabel("hide")+'</a>';
		showShopIframe(false, 0, 0);
	}
	return;
}

function zdToggleItemsList(){ 
// show/hide Items list in Items tab!
	if(document.getElementById('zdItemList')){
		document.getElementById('zdShowButtonItems').innerHTML='<a href="javascript:zdToggleItemsList();">'+zdui.getLabel("hide")+'</a>';
		document.getElementById("zdItemList").parentNode.removeChild(document.getElementById("zdItemList"));
	}else{
		document.getElementById('zdShowButtonItems').innerHTML='<a href="javascript:zdToggleItemsList();">'+zdui.getLabel("show")+'</a>';
		zdShowItemList();
	}
	return;
}

function zdToggleOptions(){
// show/hide options!
	if(document.getElementById('zdOptions').innerHTML==' <input type="button" id="button68" value="Options" onclick="zdToggleOptions();">'){
		var strHtml =	' <input type="button" id="button68" value="X" onClick="zdToggleOptions();">';
		strHtml +=	zdui.getLabel("language")+':  <select name="zdSelectLanguage" id="zdSelectLanguage" onblur="zdSelectedLanguage();">';
		for (l=0;l<zdlang["languages"].length;l++) {
			// strHtml += ' / <a href="javascript:zdui.language=\''+zdlang["languages"][l]+'\';zdui.initialise();">'+zdlang[zdui.language][zdlang["languages"][l]]+'</a>';
			if(zdlang["languages"][l] == zdui.language){
				strHtml += ' <option value="'+zdlang["languages"][l]+'" selected="selected">'+zdui.getLabel(zdlang["languages"][l])+'</option>';
			}else{
				strHtml += ' <option value="'+zdlang["languages"][l]+'">'+zdui.getLabel(zdlang["languages"][l])+'</option>';
			}
			if(zdlang[zdui.language][zdlang["languages"][l]]){ // translation actually exists
			}
		}
		strHtml +='</select>';
		strHtml +=' <input type="button" id="button1" value="'+zdui.getLabel("button_go")+'" onClick="zdSelectedLanguage();">';
		strHtml +='&nbsp;&nbsp;';
		strHtml +='Font: <a href="javascript:zdChangeFont(-1);">Smaller</a> / <a href="javascript:zdChangeFont(1);">Larger</a><br>';
		strHtml +='Theme: <select name="zdSelectTheme" id="zdSelectTheme">' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/reset.css\');">Original</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/right.css\');">Right</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/plaid.css\');">Plaid</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/cloud.css\');">Clouds</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/rainbow.css\');">Rainbow</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/rainbow2.css\');">Rainbow2</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/pink.css\');">Pink</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/orange.css\');">Orange</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/green.css\');">Green</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/blue.css\');">Blue</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/purple.css\');">Purple</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/red.css\');">Red</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/colorchange.css\');">Changing</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/spiderweb.css\');">Spiderweb</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/spooky.css\');">Spooky</option>' +
		'<option value="zdAddCssLink(\''+zdHomePageUrl+'js/ghost.css\');">Ghost</option>' +
		'</select>';
		strHtml +=	' <input type="button" id="button66" value="'+zdui.getLabel("button_go")+'" onClick="zdEvalFromList(\'zdSelectTheme\');">';
		if(optionsUrl){
			strHtml +=' <input type="button" id="button66" value="Settings" onClick="zdShowOptionsPage();">';
		}
		document.getElementById('zdOptions').innerHTML=strHtml;
	}else{
		document.getElementById('zdOptions').innerHTML=' <input type="button" id="button68" value="Options" onClick="zdToggleOptions();">';
	}
	return;
}

function zdShowOptionsPage(){
	zdFlyout('<iframe style="height:600px" src="'+optionsUrl+'"></iframe>','Options');
}

function zdHideZoo(){ 
	var zdSwf = document.getElementById('flashContainer');
	if(zdFlashContainerContent == null){
		zdFlashContainerContent = zdSwf.innerHTML;
		zdSwf.innerHTML = '<p>' + zdui.getLabel("main_zooremoved")+' - <a href="javascript:zdToggleZoo();">' + zdui.getLabel("main_clicktogetback")+'</a>.</p>';
	}
	return;
}

function zdRefreshZoo(){ 
	zdHideZoo();
	waitsec(500);
	zdShowZoo();
	return;
}

function zdShowZoo(){ 
	var zdSwf = document.getElementById('flashContainer');
	if(zdFlashContainerContent != null){
		zdSwf.innerHTML = zdFlashContainerContent;
		zdFlashContainerContent = null;
	}
	return;
}

function zdShowZooNormal(){ 
	zdCenterFlash();
	document.getElementById('flashContent').setAttribute('width','760');
	document.getElementById('flashContent').setAttribute('height','620');
	return;
}

function zdShowZooMax(){ 
	zdCenterFlash();
	document.getElementById('flashContent').setAttribute('width','100%');
	document.getElementById('flashContent').setAttribute('height','930');
	return;
}

function zdShowZooMin(){ 
	zdCenterFlash();
	document.getElementById('flashContent').setAttribute('width','380');
	document.getElementById('flashContent').setAttribute('height','310');
	return;
}

function zdCenterFlash(){
	document.getElementById('flashContainer').childNodes.item(1).setAttribute('style','');;
	document.getElementById('zooVideoAd').setAttribute('width','1');
	document.getElementById('zooVideoAd').setAttribute('height','1');
	document.getElementById('zooVideoAd').setAttribute('style','');
	return;
} 

function zdSelectedLanguage(){
	var objElement = document.getElementById("zdSelectLanguage");
	zdui.language=objElement.options[objElement.selectedIndex].value;
	zdui.initialise();
}

var curFont = 11;

function zdChangeFont(step){
	curFont = curFont+step;
	zdLogStatus('Font size = '+curFont+'px');
	document.getElementById('zdBody').style.fontSize = curFont + 'px';
	document.getElementById('zdShopPreview').style.fontSize = curFont + 'px';
	for(b=0;b<500;b++){
		if(document.getElementById('button'+b)){
			document.getElementById('button'+b).style.fontSize = curFont + 'px';
		}
	}
}

// show zd tabs
function zdShowTab(tabName){ 
	var tabNames = new Array( 'gifts', 'place', 'feed', 'shop', 'debug', 'old', 'visit', 'intro' );
	for(t=0;t<tabNames.length;t++){
		var zdTab = document.getElementById(tabNames[t]+'Tab');
		var zdTabLink = document.getElementById(tabNames[t]+'TabLink');
		if(tabName == tabNames[t]){
			zdTab.setAttribute('style','display:block;');
			zdTabLink.setAttribute('class','selected');
		}else{
			zdTab.setAttribute('style','display:none;');
			zdTabLink.setAttribute('class','');
		}
	}
	return;
}

//switch small tab
function zdSwitchST(STab){
	var zdSTab1=STab + '1';
	var zdSTab2=STab + '2';
	var zdSTabB=STab + 'B';
	if(document.getElementById(zdSTab1).style.display == "none"){
		document.getElementById(zdSTab1).setAttribute('style','display:block;');
		document.getElementById(zdSTab2).setAttribute('style','display:none;');
		if(STab=='shopTab'){
			document.getElementById(zdSTabB).value="Actions";
		}else if(STab=='place'){
			document.getElementById(zdSTabB).value="Actions";
		}else{
			document.getElementById(zdSTabB).value=">>>";
		}
	}else{
		document.getElementById(zdSTab2).setAttribute('style','display:block;');
		document.getElementById(zdSTab1).setAttribute('style','display:none;');
		if(STab=='shopTab'){
			document.getElementById(zdSTabB).value="List";
		}else if(STab=='place'){
			document.getElementById(zdSTabB).value="Infos";
		}else{
			document.getElementById(zdSTabB).value="<<<";
		}
	}
}

function zdSwitchSF(SFlyout,flyout){
	for(i=1;i<4;i++){
		var newflyout = flyout+i;
		if(SFlyout!=i && document.getElementById(newflyout)){
			document.getElementById(newflyout).setAttribute('style','display:none;');
		} else if(SFlyout==i){
			document.getElementById(newflyout).setAttribute('style','display:block;');
		}
	}
}

function zdShowDebugFields(){
	var debugFields = document.getElementById('debugFields');
	var debugButton = document.getElementById('debugButton');
	if(debugFields.style.display == "none"){
		debugButton.value="Hide Details";
		debugFields.style.display="block";
	}else{
		debugButton.value="Show Details";
		debugFields.style.display="none";
	}
	return;
}

function zdShowFullScreenZoo(){
	zdShowZoo();
	var arrParams = document.getElementsByTagName("param");
	for(p=0;p<arrParams.length;p++){
		if(arrParams[p].name.indexOf("allowFullScreen")>-1){
			arrParams[p].value='true';
		}
	}
	var zdMovie = document.getElementById('flashContent');
	// set to full screen
	// try and send AS command for full screen
	// swfobject.getObjectById("flashContent").Stage.displayState="fullScreen";
	// swfobject.getObjectById("flashContent").Stage.displayState.FULL_SCREEN;
	// swfobject.getObjectById("flashContent").StageDisplayState.FULL_SCREEN;
	return;
}

function zdClearWorkQueue(){
	zdWorkQueue = new Array();
	return;
}

function zdWorkQueuePush( strNewItem){
	zdWorkQueue.push( strNewItem );
	return;
}

function zdWorkQueuePop(){
	return zdWorkQueue.pop();
}

function zdWorkQueueShift(){
	return zdWorkQueue.shift();
}

function zdWorkQueueSize(){
	return zdWorkQueue.length;
}

function zdWorkQueueStart(){
	if(!zdWorkQueueProcessing){
		zdWorkQueueProcessing = true;
		zdLogStatus(zdui.getLabel("workqueue_starting") + ': ' + zdWorkQueueSize() + ' ' + zdui.getLabel("workqueue_remaining"));
		setTimeout('zdWorkQueueProcess();', zdAjaxCallDelay); // do next work queue item in a bit 
	}else{
		zdLogStatus("Queue already started: " + zdWorkQueueSize() + ' ' + zdui.getLabel("workqueue_remaining"));
	}
	return;
}

function zdWorkQueueProcess(){
	// should only be called by zdWorkQueueStart and this function
	if((zdWorkQueueSize()>0) && zdWorkQueueProcessing){
		var currentItem = zdWorkQueueShift();
		// zdLogStatus("Processing: " + currentItem + ", " + zdWorkQueueSize() + " remaining");
		eval(currentItem);
		setTimeout('zdWorkQueueProcess();', zdAjaxCallDelay); // do next work queue item in a bit 
	}else{
		zdLogStatus(zdui.getLabel("workqueue_stopped") + ': ' + zdWorkQueueSize() + ' ' + zdui.getLabel("workqueue_remaining"));
		zdWorkQueueProcessing = false;
	}
	return;
}

function zdWorkQueueStop(){
	if(zdWorkQueueProcessing){
		zdLogStatus(zdui.getLabel("workqueue_stopping") + ': ' + zdWorkQueueSize() + ' ' + zdui.getLabel("workqueue_remaining"));
		zdWorkQueueProcessing = false;
	}else{
		zdLogStatus(zdui.getLabel("workqueue_alreadstopped"));
	}
	return;
}

function zdEvalFromList(strElementId) {
	var objElement = document.getElementById(strElementId);
	zdLogStatus(zdui.getLabel("executing") + ": " + objElement.options[objElement.selectedIndex].value + "");
	eval(objElement.options[objElement.selectedIndex].value);
	return;
}

function zdEvalFromAllList(strElementId) {
	var objElement = document.getElementById(strElementId);
	for (o=0;o<objElement.length;o++) {
		if(objElement[o].selected || objElement[o].checked) {
			zdLogStatus(zdui.getLabel("executing") + ": " + objElement[o].value + "");
			eval(objElement[o].value);
		}
	}
	return;
}

/* based on code from http://techpatterns.com/downloads/javascript_cookies.php */
// show cookies 
function zdShowCookies(){
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var arrCookies = document.cookie.split( ';' );
	var strOutput = '';
	for (c=0;c<arrCookies.length;c++) {
		// now we'll split apart each name=value pair
		var arrThisCookie = arrCookies[c].split('=');
		// and trim left/right whitespace while we're at it
		arrThisCookie[0] = arrThisCookie[0].replace(/^\s+|\s+$/g, '');
		// we need to handle case where cookie has no value but exists (no = sign, that is):
		strOutput += "\n"
		if(arrThisCookie.length > 1){
			arrThisCookie[1] = unescape( arrThisCookie[1].replace(/^\s+|\s+$/g, '') );
			strOutput += arrThisCookie[0] + '=' + arrThisCookie[1];
		}else{
			strOutput += arrThisCookie[0] + '=';
		}
	}
	zdLogStatus(zdui.getLabel("advanced_cookies_cookies") + ":" + strOutput);
}
/*
only the first 2 parameters are required, the cookie name, the cookie
value. Cookie time is in milliseconds, so the below expires will make the 
number you pass in the Set_Cookie function call the number of days the cookie
lasts, if you want it to be hours or minutes, just get rid of 24 and 60.

Generally you don't need to worry about domain, path or secure for most applications
so unless you need that, leave those parameters blank in the function call.
*/
/*
function zdSetCookie( name, value, expires, path, domain, secure){
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	// if the expires variable is set, make the correct expires time, the
	// current script below will set it for x number of days, to make it
	// for hours, delete * 24, for minutes, delete * 60 * 24
	if(expires){
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name + "=" +escape( value ) +
		( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) + 
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
	zdLogStatus("Set cookie: " + name);
}
*/
// this deletes the cookie when called
function zdDeleteCookie( name, path, domain){
	document.cookie = name + "=" +
		( ( path ) ? ";path=" + path : "") +
		( ( domain ) ? ";domain=" + domain : "" ) +
		";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	// zdLogStatus("Deleted cookie: " + name);
}

// find and delete all cookies in the rockyou domain
function zdDeleteCookies(){
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var isDeleteCookies = true;
	if(isDeleteCookies){
		var arrCookies = document.cookie.split( ';' );
		for (c=0;c<arrCookies.length;c++) {
			// now we'll split apart each name=value pair
			var arrThisCookie = arrCookies[c].split('=');
			// and trim left/right whitespace while we're at it
			arrThisCookie[0] = arrThisCookie[0].replace(/^\s+|\s+$/g, '');
			zdDeleteCookie(arrThisCookie[0],'/','rockyou.com');
			zdDeleteCookie(arrThisCookie[0],'/','fbeq.rockyou.com');
		}
		zdLogStatus("Deleted all cookies");
	}else{
		zdLogStatus("Not deleting cookies.");
	}
}

function zdDeleteCookiesOnInterval( intMinutes){
	// intMinutes = 5;
	zdLogStatus("Will delete cookies every "+intMinutes+" minutes...");
	window.setInterval('zdDeleteCookies();', intMinutes*60000);
	return false;
}
/*
function zdSetZWCookies(){
	// name, value, expires, path, domain, secure
	// in domain .rockyou.com
	zdSetCookie('lang', 'en', '', '/', '.rockyou.com', '');
	zdSetCookie('lastlogin', zd_fb_sig_profile_update_time, '', '/', 'rockyou.com', '');
	zdSetCookie('fb_id', zd_fb_sig_user, '', '/', '.rockyou.com', '');
	// zdSetCookie(zd_fb_sig_api_key, '4a41f51bc0c3ac734de81bad16edd33b', '', '/', 'rockyou.com', '');
	zdSetCookie('fbsetting_'+zd_fb_sig_api_key, '{"connectState":1,"oneLineStorySetting":3,"shortStorySetting":3,"inFacebook":true}', '', '/', 'rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_user', zd_fb_sig_user, '', '/', 'rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_session_key', zd_fb_sig_session_key, '', '/', 'rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_expires', '0', '', '/', 'rockyou.com', '');
	zdSetCookie('base_domain_'+zd_fb_sig_api_key, zd_fb_sig_base_domain, '', '/', 'rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_ss', '', '', '/', 'rockyou.com', '');
	// in domain fbeq.rockyou.com
	zdSetCookie(zd_fb_sig_api_key+'_expires', '0', '', '/', 'fbeq.rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_session_key', zd_fb_sig_session_key, '', '/', 'fbeq.rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_user', zd_fb_sig_user, '', '/', 'fbeq.rockyou.com', '');
	zdSetCookie('fbsetting_'+zd_fb_sig_api_key, '{"connectState":1,"oneLineStorySetting":3,"shortStorySetting":3,"inFacebook":true}', '', '/', 'fbeq.rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key, '4a41f51bc0c3ac734de81bad16edd33b', '', '/', 'fbeq.rockyou.com', '');
	zdSetCookie(zd_fb_sig_api_key+'_expires', '0', '', '/', 'fbeq.rockyou.com', '');
	// zdSetCookie('_upd8', '.', '', '/', 'rockyou.com', '');
}
*/

function zdSetAjaxDelay( newDelay){
	// set delay between AJAX calls
	var updatedDelay = parseInt(newDelay);
	if(isNaN(updatedDelay)){
		zdAjaxCallDelay = 700;
		zdLogStatus("AJAX Delay set to " + zdAjaxCallDelay +"ms.");
	} else if(updatedDelay >= 0){ //min zero
		if(updatedDelay > 60000){
			zdAjaxCallDelay = 60000; // maximum one minute
			zdLogStatus("AJAX Delay set to " + zdAjaxCallDelay +"ms.");
		}else{
			zdAjaxCallDelay = updatedDelay;
			zdLogStatus("AJAX Delay set to " + zdAjaxCallDelay +"ms.");
		}
	}else{
		zdAjaxCallDelay = 700;
		zdLogStatus("AJAX Delay set to " + zdAjaxCallDelay +"ms.");
	}
	document.getElementById('zdAjaxDelay').value = zdAjaxCallDelay;
}

function zdGetAnimalForId(itemId) {
	try {
		return zdZooItems[itemId];
	} catch (x) {
		// problem with zooItem being undefined
		return new Array();
	}
}

function zdGetGenericParameters(){
	return {
		// generic
		'signed_request':zd_signed_request,
		'fb_sig_user':zd_fb_sig_user,
		//'fb_sig_country':zd_fb_sig_country,
		//'fb_sig_locale':zd_fb_sig_locale,
		//'iframeLoad': iframeLoaded,
		//'fb_sig_app_id':zd_fb_sig_app_id,
		//'fb_sig_time':zd_fb_sig_time,
		//'fb_sig':zd_fb_sig,
		'appname':zd_appname,
		'parentAppId':zd_appId
	};
}

function isArray(obj) {
	return (obj.constructor.toString().indexOf("Array") != -1);
}

function zdDownloadZooItem(){
	var folder=document.body.innerHTML;
	var path=folder.indexOf('zooItem'); path='http://cdn.rockyou.com/apps/zoo/flash/cache/'+folder.substr(path+12,2)+'/'+folder.substr(path+12,32)+'.bin';
	window.open(path);
}

/*
 * buy items
 */
// buy item via prompt
function zdBuyItemPrompt(){
	var itemId = (prompt(zdui.getLabel("specify_item_id_prompt"), ""));
	zdBuyItem(itemId, 1);
}

// buy lots via prompt
function zdBuyLotsPrompt(){
	var itemId = (prompt(zdui.getLabel("specify_item_id_prompt"), ""));
	zdBuyLotsItem(itemId);
}

//buy lots - specific number
function zdBuyLotsItem(itemId) {
	var numberToBuy = (prompt(zdui.getLabel("shop_flyout_actions_buylots_prompt"), "10"));
	var buyThisTime = 0;
	var itemsLeft = numberToBuy;
	while (itemsLeft > 0){
		buyThisTime = itemsLeft;
		if(itemsLeft > 10){
			buyThisTime = 10;
		}else{
			buyThisTime = itemsLeft;
		}
		zdWorkQueuePush('zdBuyItem('+itemId+', '+buyThisTime+');');
		itemsLeft = itemsLeft - buyThisTime;
	}
	zdWorkQueueStart();
}

// upgrade item via prompt
function zdUpgradePrompt(){
	var itemId = (prompt(zdui.getLabel("specify_animal_id_prompt"), ""));
	zdBuyItem(itemId, 0);
}

// buy item (set quantity to 0 to upgrade)
function zdBuyItem(itemId, itemQuantity) {
	if(itemQuantity > 0){
		zdLogStatus(zdui.getLabel("status_buying_buying")+' '+itemQuantity+' '+zdui.getLabel("status_buying_ofitem")+' '+itemId+'...');
	}else{
		zdLogStatus(zdui.getLabel("status_buying_upgradingitem")+' '+itemId+'...');
	}
	return zdBuyItemAjax(itemId, itemQuantity);
}

// buy FBC item by itemId
function zdBuyFbcItem(itemId) {
	if(zdZooItems['fbcList'][itemId] != null){
		var order_info = "item:"+zdZooItems['fbcList'][itemId]["wlfItemId"]+",currencyCode:USD,parentPage:newzoo_iframe,userId:"+zd_fb_sig_user+",notFirstTime:1,qty:1";
		doFBCPayment(order_info);
	}
	return;
}

// buy FBC item by wlfItemId
function zdBuyFbcItemByWlfItemId(wlfItemId) {
	var order_info = {item:wlfItemId,currencyCode:"USD",parentPage:"shopInIframe",userId:zd_fb_sig_user,notFirstTime:"1",qty:"1"};
	doFBCPayment(order_info);
	return;
}

// buy FBC item by wlfItemId prompt
function zdBuyFbcItemByWlfItemIdPrompt(){
	var wlfItemId = (prompt(zdui.getLabel("status_wlfitemid_specify")+":", ""));
	zdBuyFbcItemByWlfItemId(wlfItemId);
}

// buy FBC for friend item by wlfItemId
function zdBuyForFriendFbcItemByWlfItemId(wlfItemId,receiverId) {
	if(wlfItemId && receiverId){
		var order_info = {item:wlfItemId,currencyCode:"USD",parentPage:"shopInIframe",userId:zd_fb_sig_user,notFirstTime:"1",qty:"1",receiver:receiverId};
		doFBCPayment(order_info);
		return;
	}
}

// buy FBC item for friend by wlfItemId prompt
function zdBuyForFriendFbcItemByWlfItemIdPrompt(wlfItemId) {
	if(!wlfItemId){
		var wlfItemId = (prompt(zdui.getLabel("status_wlfitemid_specify")+":", ""));
	}
	var receiverId = (prompt("Friend Id:", ""));
	zdBuyForFriendFbcItemByWlfItemId(wlfItemId,receiverId);
}

// buy item via AJAX
function zdBuyItemAjax(itemId, itemQuantity) {
	// build querystring
	var arrParameters = zdGetGenericParameters();
	arrParameters["action"] = 'buy';
	arrParameters["typeid"] = itemId;
	arrParameters["qty"] = itemQuantity;
	new Ajax.Request(
		zdShopActionServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				if(itemQuantity > 0){
					zdLogStatus(zdui.getLabel("status_buying_bought")+' '+itemQuantity+' '+zdui.getLabel("status_buying_ofitem")+' '+itemId+'...');
				}else{
					zdLogStatus(zdui.getLabel("status_buying_upgradeditem")+' '+itemId+'...');
				}
				zdSetResponse(transport.responseText);
				return;
			}
		}
	);
	return;
}

// build up zoo mini item list
var order = 0;
function zdChangeOrder(){
	if(order==1){
		order=0;
	}else{
		order=1;
	}
	zdShowItemList();
}

function zdNewBuildItemList(strSearchCriteria) {
	var strHtml = '';
	// var strSearchCriteria = '';
	if(strSearchCriteria == null){
		var strSearchCriteria = document.getElementById('zdSearchCriteria').value.toLowerCase();
	}
	if((strSearchCriteria=='ultrarare')||(strSearchCriteria=='ultra') ){
		strSearchCriteria = 'ultraRare';
	}
	if(zdZooItems['success']){
		strHtml += '<div id="zdItemList">';
		var start;
		var stop;
		var op;
		var inc;
		var operators = {
			'<': function(a, b) { return a < b },
			'>': function(a, b) { return a > b },
		};
		if(order==1){
			start = 20000;
			stop = 0;
			op = '>';
			inc = -1;
		}else{
			start = 1;
			stop = 20000;
			op = '<';
			inc = 1;
		}
		for(i=start;operators[op](i,stop);i+=inc){
			if(zdZooItems[i] != null){
				if(strSearchCriteria == ''){
					strHtml += zdNewBuildItem( i );
				} else if((strSearchCriteria == 'adoptable') || (strSearchCriteria == 'feed')){
				if(zdZooAdoptItems[i]) {
					strHtml += zdNewBuildItem( i );
					}
				} else if(strSearchCriteria == 'FBC' || strSearchCriteria == 'fbc'){
					if(FBCList[i]) {
						strHtml += zdNewBuildItem( i );
					}
				}else if(strSearchCriteria == 'giftQty+'){
					for(m=0;m<arrGiftIds.length;m++){
						if(arrGiftIds[m]==i && arrItemQty[i]>=document.getElementById('zdSearchCriteria').value){
						strHtml += zdNewBuildItem( i );
						break;
						}
					}
				}else if(strSearchCriteria == 'giftQty-'){
					for(m=0;m<arrGiftIds.length;m++){
						if(arrGiftIds[m]==i && arrItemQty[i]<=document.getElementById('zdSearchCriteria').value){
						strHtml += zdNewBuildItem( i );
						break;
						}
					}
				}else if(strSearchCriteria == 'startBy'){
					if(zdZooItems[i]['name'].indexOf(document.getElementById('zdSearchCriteria').value.toLowerCase())==0 || zdZooItems[i]['name'].indexOf(document.getElementById('zdSearchCriteria').value.toUpperCase())==0){
						strHtml += zdNewBuildItem( i );	
					}
				} else if((strSearchCriteria == 'limited') || (strSearchCriteria == 'limitedgift')){
					for(m=0;m<arrLimitedGift2.length;m++){
						if(arrLimitedGift2[m]==i) {
							strHtml += zdNewBuildItem( i );
							break;
						}
					}
				}else if(strSearchCriteria == 'raregift'){
					for(m=0;m<arrGiftIds.length;m++){
						if(arrGiftIds[m]==i && !arrShopIds.has(i) && !zdZooAdoptItems[i] && zdZooItems[i]['rarity']) {
							strHtml += zdNewBuildItem( i );
							break;
						}
					}
				}else if(strSearchCriteria == 'trainable') {
					if(trainingList[i] != null ){
						strHtml += zdNewBuildItem( i );
					}
				}else if(strSearchCriteria == 'free'){
					for(m=0;m<arrFreeGift2.length;m++){
						if(arrFreeGift2[m]==i) {
							strHtml += zdNewBuildItem( i );
						break;
						}
					}
				}else if(strSearchCriteria == 'shop'){
					for(m=0;m<arrShopIds.length;m++){
						if(arrShopIds[m]==i && !zdZooAdoptItems[i] && (arrPriceIds[(arrPriceIds.indexOf('"'+i+'"')+ 4)] != '"zcash"') && (zdZooItems[i]['width']!=='')) {
							strHtml += zdNewBuildItem( i );
							break;
						}
					}
				}else if(
					(zdZooItems[i]['name'].toLowerCase().indexOf( strSearchCriteria ) > -1)
					|| (zdZooItems[i]['rarity'] == strSearchCriteria)
					|| ('qty='+arrItemQty[i] == strSearchCriteria)
					|| ( (zdZooItems[i]['gestation']/12)+'hr'== strSearchCriteria )
					|| (Number(strSearchCriteria)==i)
				) {
					strHtml += zdNewBuildItem( i );
				}
			}
		}//if(zdZooLoaded==1){setTimeout('loadAllImg();',100);}
		strHtml += '</div>';
	}else{
		strHtml += zdui.getLabel("shop_listempty") + ' ' + zdZooItems;
		strHtml += '/ ' + zdZooItems.length;
	}
	return strHtml;
}

// build mini item
function zdNewBuildItem( itemId){
	var strHtml = '';
	// zdLogStatus('Building shop item '+itemId+'...');
	strHtml += '<div class="zdShopItemMini"';
	strHtml += ' onClick="zdShowShopPreview('+itemId+');">';
	if(arrItemOptions[4]){
		if( !zdZooAdoptItems[itemId] && arrShopIds.has(itemId) && arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 4)] != '"zcash"' ){
			strHtml += '<img alt="" src="'+zdHomePageUrl+'img/shopiconsmall.png" title="buyable"/>&nbsp;&nbsp;';
		}
	}
	if(arrItemOptions[1]){
		if(zdZooItems[itemId]['rarity']) {
			strHtml += 'Qty: ';
			if(arrItemQty[itemId] != null){
				strHtml += arrItemQty[itemId];
			}else{
				strHtml += '0';
			}
		}
	}
	if(arrItemOptions[4]){
		if( arrGiftIds.has(itemId) ){
			strHtml += '&nbsp;&nbsp;<img alt="" src="'+zdHomePageUrl+'img/gifticonsmall.png" title="giftable" />';
		}
	}
	if(arrItemOptions[4]){
		if( FBCList[itemId] ){
			strHtml += '&nbsp;&nbsp;<img alt="" src="'+zdHomePageUrl+'img/fbcredits_icon.png" title="fbc" />&nbsp;'+FBCList[itemId]["cost"]+'';
		}
	}
	strHtml +='<br>';
	//strHtml += '<span id=img'+itemId+'><a href="javascript:loadImg('+itemId+');">Loading... </a><br/></span>';
	//strHtml += '<img class="lazy" src="blank.gif" data_attribute="' + zdGetNewImgPath( itemId, 'smallImg' ) + '" width="30" height="30"/>';
	strHtml += '<div class="imgContainer" ><img class="lazy-loading" id="' + zdGetNewImgPath( itemId, 'smallImg' ) + '" width="50" height="50" /></div>';
	if(zdZooAdoptItems[itemId] && !(zdui.isLite)){ // can't post adopt from lite version
		strHtml += '<a href="javascript:zdSpawnAdoption('+itemId+');">#'+itemId+' '+zdZooItems[itemId]['name']+'</a>';
	}else{
		strHtml += '#' + itemId + ' ' + zdZooItems[itemId]['name'];
	}
	strHtml += '</div>';
	return strHtml;
}

function loadImg(itemId){
	document.getElementById('img'+itemId+'').innerHTML = '<img src="' + zdGetNewImgPath( itemId, 'smallImg' ) + '" width="50" /><br/>';
}

function loadAllImg(){
	for (i=0;i<20000;i++){
		if(zdZooItems[i] && document.getElementById('img'+i+'')) {
			loadImg(i);
		}
	}
}

function zdShowItemList(strSearchCriteria) { 
	var divItemList = document.getElementById('zdItemListPH');
	divItemList.innerHTML = zdNewBuildItemList(strSearchCriteria); lazyLoading();
	return;
}

function zdShowItemListIfReady(){ 
	if(zdZooItems != null){
		zdShowItemList();
	}else{
		setTimeout('zdShowItemListIfReady();',zdAjaxCallDelay); // wait another delay and try again
	}
	return;
}

// repeat buying a specific item via prompt
function zdScheduleBuyItemPrompt(){
	var itemId = (prompt(zdui.getLabel("specify_item_id_prompt"), ""));
	zdScheduleBuyItem(itemId,5);
}

// repeat buying a specific item
function zdScheduleBuyItem(itemId,theSeconds) {
	// buy one of the specified animals every "theSeconds" seconds
	window.setInterval('zdBuyItem('+itemId+', 10)', 1000*theSeconds); // run every "theSeconds" seconds
	zdBuyItem(itemId,10); // run for the first time
}

// buy item via prompt
function buyAnimalPrompt(){ // deprecated
	var animalId = (prompt("Specify itemId:", ""));
	buyAnimal(animalId, 1);
}

// get images path for shop // deprecated
function zdGetImgPath( strCategories){
	var strPath = "http://cdn.rockyou.com/apps/zoo/";
	if(strCategories){
		if(strCategories.indexOf('animal') > -1){
			strPath += 'animals/';
		} else if(strCategories.indexOf('rosegarden') > -1){
			strPath += 'rosegarden/';
		// not sure where trophies should go
		} else if(strCategories.indexOf('trophy') > -1){
			strPath += 'trophies/';
		} else if(strCategories.indexOf('july4') > -1){
			strPath += 'july4/';
		} else if(strCategories.indexOf('fieldtrip') > -1){
			strPath += 'fieldtrip/';
		}else{
			strPath += 'shop/';
		}
	}
	return strPath;
}

// get images path for shop
function zdGetNewImgPath( itemId, imgType){
	var strPath = "https://cdnrockyou-a.akamaihd.net/apps/zoo/";
	if(itemId){
		strPath += 'item/'+imgType+'/'+itemId+'.gif';
	}
	return strPath;
}

// get images path for baby
function zdGetBabyPath( itemId){
	var strPath = '';
	if(zdZooItems['success']){
		if(zdZooItems[itemId] != null){
			if((zdZooItems[itemId]['gestation'] != null) && (zdZooItems[itemId]['largeImg'] != null)){
				var rExp = /\.gif/gi;
				strPath = 'http://cdn.rockyou.com/apps/zoo/animals/babies/'+zdZooItems[itemId]['largeImg'].replace(rExp, '_baby.gif');
				var rExp = /150/gi;
				strPath = strPath.replace(rExp, '130');
			} else if((zdZooItems[itemId]['gestation'] != null) && (zdZooItems[itemId]['largeImg'] == null)){
				strPath = 'http://cdn.rockyou.com/apps/zoo/item/babyLargeImg/'+itemId+'.gif'; // /babyImg/ for small
			}
		}
	}
	return strPath;
}

// set shop preview image
function zdShowShopPreviewImage(strFilePath) {
	var zdShopPreviewImage = document.getElementById('zdShopPreviewImage');
	zdShopPreviewImage.innerHTML = '<img src="'+ strFilePath +'" alt=""/>';
	return;
}

// show shop preview
function zdShowShopPreview(itemId) {
	if(zdZooItems['success']){
		if(zdZooItems[itemId] != null){
			var strHtml = '';
			// title
			strHtml += '<h2>&nbsp;#' + itemId + ' ' + zdZooItems[itemId]['name'] + '</h2>';
			strHtml += '<div id="zdShopPreviewBody">';
			strHtml += '<div id="zdShopPreviewImage" style="">';
			strHtml += '<img src="';
			strHtml += zdGetNewImgPath( itemId, 'largeImg' );
			strHtml += '" alt=""/>';
			strHtml += '</div>';
			strHtml += '<div style="">'; // margin-left: 160px; text-align: left;
			strHtml += '<p>';
			if(arrItemOptions[1]){
				strHtml += '<b>Total Owned: </b>';
			if(arrItemQty[itemId] != null){
				strHtml += arrItemQty[itemId]+'';
			}else{
				strHtml += '0';
			}
			strHtml += '</p>';
			}
			if(FBCList[itemId]){
				strHtml += '<b>FBC Cost: </b>';
				strHtml += FBCList[itemId]["cost"]+'';
				strHtml += ' <img alt="" src="'+zdHomePageUrl+'img/fbcredits_icon.png" title="FBC"/>';
				strHtml += '</p>';
			}
			if(arrItemOptions[2]){
				strHtml += '<p>';
				if( !zdZooAdoptItems[itemId] && arrShopIds.has(itemId) && arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 4)] != '"zcash"' ){
					strHtml += '<b>Buy For: </b>';
					strHtml += arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 4)];
					if(arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 2)] == '"zcash"'){
						strHtml += ' <img alt="" src="'+zdHomePageUrl+'img/img-money.png" title="Zoo cash"/>';
					}else if((arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 2)] == '"fbc"') || (arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 2)] == '"usd"')){
						strHtml += ' <img alt="" src="'+zdHomePageUrl+'img/fbcredits_icon.png" title="FBC"/>';
					}else if(arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 2)] == '"wlp"') {
						strHtml += ' <img alt="" src="'+zdHomePageUrl+'img/img-coin.png" title="WLP"/>';
					}
					strHtml += '</p>';
				}
				strHtml += '<p>';
				if(arrItemPriceSell[itemId] != undefined){
					strHtml += '<b>Sell For: </b>';
					strHtml += arrItemPriceSell[itemId];
					strHtml += ' <img alt="" src="'+zdHomePageUrl+'img/img-money.png" title="Zoo cash"/>';
					strHtml += '</p>';
				}
			}
			if(zdZooItems[itemId]['rarity']){
				if(arrItemOptions[1]){
					if(arrItemLoc[itemId] != null){
						strHtml += '<p>';
						strHtml += '<b>Location: </b>';
						strHtml += arrItemLoc[itemId];
						strHtml += '</p>';
					}
				}
				strHtml += '<p><b>' + zdui.getLabel("shop_flyout_rarity") + '</b>: '+zdZooItems[itemId]['rarity']+'</p>';
				if(zdZooItems[itemId]['gestation'] != null){
					strHtml += '<p><b>' + zdui.getLabel("shop_flyout_breedingtime") + '</b>: ';
					if(zdZooItems[itemId]['gestation'] > (24*12)){
						strHtml += (zdZooItems[itemId]['gestation']/24/12)+' ' + zdui.getLabel("days") + '';
					}else{
						strHtml += (zdZooItems[itemId]['gestation']/12)+' ' + zdui.getLabel("hours") + '';
					}
					strHtml += '</p>';
					strHtml += '<p>';
					if(arrItemOptions[3]){
						if(arrBreedData["success"]){
							for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
								if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]==itemId) {
									var zdbred = arrBreedData["return_data"]["availableBreedableAnimals"][b]["bredCount"];
									break;
								}
							}
							//			MasteryValues=[48,96,144,288,576,864,1152,1440];
							var itemGest = zdZooItems[itemId]['gestation'];					
							for(g=0;g<2000;g++){
								if(arrBreedData["return_data"]["masteryValues"][g]){
									if(itemGest<=g){
										itemGest=g;
										break;
									}
								}
							}
							for(m=0;m<101;m++){
								if(arrBreedData["return_data"]["masteryValues"][itemGest][m]){
									if(m>zdbred){ 
										var mastdiff = m-zdbred;
										strHtml += '<b>Status: </b>'+zdbred+'/'+m+'('+arrBreedData["return_data"]["masteryValues"][itemGest][m]['rankName']+')';
										break;
									}
								}
							}
						}else{
							strHtml += '<b>Breed Data Not Loaded</b>';
						}
					}
					strHtml += '</p>';
				}
			}
			strHtml += '</div>';
			strHtml += '<div style="clear: both;">';
			// image list
			strHtml += '<p><b>' + zdui.getLabel("shop_flyout_images_title") + '</b>: ';
			strHtml += '<a href="javascript:zdShowShopPreviewImage(\'' + zdGetNewImgPath( itemId, 'largeImg' ) + '\');">' + zdui.getLabel("shop_flyout_images_large") + '</a> ';
			strHtml += '/ <a href="javascript:zdShowShopPreviewImage(\'' + zdGetNewImgPath( itemId, 'smallImg' ) + '\');">' + zdui.getLabel("shop_flyout_images_small") + '</a> ';
			if(zdZooItems[itemId]['rarity']){
				if(zdZooItems[itemId]['gestation'] != null){
					strHtml += '/ <a href="javascript:zdShowShopPreviewImage(\'' + zdGetBabyPath(itemId) + '\');">' + zdui.getLabel("shop_flyout_images_baby") + '</a> ';
				}
			}
			strHtml += '</p>';
			//action pics
			if(arrItemOptions[4]){
				if( !zdZooAdoptItems[itemId] && arrShopIds.has(itemId) && (arrPriceIds[(arrPriceIds.indexOf('"'+itemId+'"')+ 4)] != '"zcash"') ){
					strHtml += '<a href="javascript:zdBuyItem('+itemId+', 1);"><img alt="" src="'+zdHomePageUrl+'img/shopicon.png" width="32" title="Buy"/> </a>';
					strHtml += ' '+'<a href="javascript:zdBuyLotsItem('+itemId+');"><img alt="" src="'+zdHomePageUrl+'img/shoplotsicon.png" width="32" title="Buy lots"/> </a>';
				}
				if( arrGiftIds.has(itemId) ){
					strHtml += '<a href="javascript:zdGiftItem('+itemId+');"><img alt="" src="'+zdHomePageUrl+'img/gifticon.png" width="32"  title="Click to send"/> </a>';
					strHtml += '<a href="javascript:zdSendGiftToAllFriends('+itemId+');"><img alt="" src="'+zdHomePageUrl+'img/giftallicon.png" width="32"  title="Click to send to all friends"/> </a>';
				}
				if(arrBreedData["success"]){
					for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
						if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]===itemId && arrBreedData["return_data"]["availableBreedableAnimals"][b]["points"]==null){
							strHtml += '<a href="javascript:zdbreed.addBreeding('+itemId+',0);"><img alt="" src="'+zdHomePageUrl+'img/breediconcash.png" width="38" title="Breed (costs zoocash)"/> </a><a href="javascript:zdbreed.addBreeding('+itemId+',2);"><img alt="" src="'+zdHomePageUrl+'img/breedboosticoncash.png"  title="BreedBoost (costs zoocash + 50 juice)"/> </a>';
							break;
						}
						if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]===itemId && arrBreedData["return_data"]["availableBreedableAnimals"][b]["points"]!=null){
							strHtml += '<a href="javascript:zdbreed.addBreeding('+itemId+',0);"><img alt="" src="'+zdHomePageUrl+'img/breediconwlp.png" width="38" title="Breed (costs WLP)"/> </a><a href="javascript:zdbreed.addBreeding('+itemId+',2);"><img alt="" src="'+zdHomePageUrl+'img/breedboosticonwlp.png"  title="BreedBoost (costs WLP + 50 juice)"/> </a>';
							break;
						}
					}
				}
				strHtml += '<a href="javascript:zdMoveAllItemToStorage('+itemId+');"><img alt="" src="'+zdHomePageUrl+'img/storage.png" width="32" title="Move all to storage"/> </a>';
				strHtml += '<a href="javascript:zdSellItemPrompt('+itemId+');"><img alt="" src="'+zdHomePageUrl+'img/sellicon.png" width="30" title="Sell from storage"/> </a>';
				strHtml += '<a href="'+zdprotocol+'apps.facebook.com/'+zd_appurl+'/zoo/home.php?showTrainingForAnimalId='+itemId+'" target="_top"><img alt="" src="'+zdHomePageUrl+'img/find.png" width="20" title="Find in zoo"/> </a>';
				strHtml += '</p>';
			}
			// actions
			if(FBCList[itemId]){
				//strHtml += '<span style="font-weight: bold; color: #F00;"> WARNING : If animal or FBC are lost, you cannot try to get a refund.</span>';
			}
			strHtml += '<p><b>' + zdui.getLabel("shop_flyout_actions_title") + '</b>: ';
			if(zdZooItems[itemId]['rarity']){
				if(!FBCList[itemId]){
					strHtml += '<a href="javascript:zdBuyItem('+itemId+', 1);">' + zdui.getLabel("buy") + '</a> / ';
					strHtml += '<a href="javascript:zdBuyItem('+itemId+', 0);">' + zdui.getLabel("upgrade") + '</a> / ';
					strHtml += '<a href="javascript:zdBuyLotsItem('+itemId+');">' + zdui.getLabel("shop_flyout_actions_buylots") + '</a> / ';
				}
				if(FBCList[itemId]){
					//strHtml += '<a style="font-weight: bold; color: #F00;" href="javascript:zdBuyFbcItemByWlfItemId('+FBCList[itemId]["code"]+');">buy for FBC</a> / ';
					//strHtml += '<a style="font-weight: bold; color: #F00;" href="javascript:zdBuyForFriendFbcItemByWlfItemIdPrompt('+FBCList[itemId]["code"]+');">buy for a friend</a> / ';
				}
				if(zdZooAdoptItems[itemId] && !(zdui.isLite)){ // can't post adopt from lite version
					strHtml += '<a href="javascript:zdSpawnAdoption('+itemId+');">' + zdui.getLabel("shop_flyout_actions_postadopt") + '</a> / ';
					strHtml += '<a href="javascript:zdCustomiseAdopt('+itemId+');">' + zdui.getLabel("shop_flyout_actions_customadopt") + '</a> / ';
				}
				if(/^(?:851|853|870|872|874|876|878|880|882)$/.test(''+itemId)){ // upgrade halloween animal
					strHtml += '<a href="javascript:zdUpgradeThanksGivingAnimalFor1WLP('+itemId+');">' + zdui.getLabel("shop_flyout_actions_thanksgivingwlpupgrade") + '</a> / ';
				}
		//		if( arrGiftIds.has(itemId) ){
					strHtml += '<a href="javascript:zdGiftItem('+itemId+');">' + zdui.getLabel("gift") + '</a> / ';
					strHtml += '<a href="javascript:zdSendGift('+itemId+');">gift to friendID</a> / ';
					strHtml += '<a href="javascript:zdSendGiftToAllFriends('+itemId+');">gift to ALL Friends</a> / ';
					strHtml += '<a href="javascript:zdSendGiftToAllZoomates('+itemId+');">gift to ALL Zoomates</a> / ';
		//		}
				if(zdZooItems[itemId]['gestation'] != null){
					strHtml += '<a href="javascript:zdbreed.addBreeding('+itemId+',0);">' + zdui.getLabel("breed") + '</a> / <a href="javascript:zdbreed.addBreeding('+itemId+',2);">' + zdui.getLabel("breed") + 'Boost (uses 50 juice)</a> / ';
				}
				strHtml += '<a href="'+zdprotocol+'apps.facebook.com/'+zd_appurl+'/zoo/home.php?showTrainingForAnimalId='+itemId+'" target="_top">' + zdui.getLabel("shop_flyout_actions_findinzoo") + '</a> / ';
			}else{
				strHtml += '<a href="javascript:zdBuyItem('+itemId+', 1);">' + zdui.getLabel("buy") + '</a> / ';
				strHtml += '<a href="javascript:zdBuyLotsItem('+itemId+');">' + zdui.getLabel("shop_flyout_actions_buylots") + '</a> / ';
		//		if( arrGiftIds.has(itemId) ){
				strHtml += '<a href="javascript:zdGiftItem('+itemId+');">' + zdui.getLabel("gift") + '</a> / ';
					strHtml += '<a href="javascript:zdSendGift('+itemId+');">gift to friendID</a> / ';
					strHtml += '<a href="javascript:zdSendGiftToAllFriends('+itemId+');">gift to ALL Friends</a> / ';
					strHtml += '<a href="javascript:zdSendGiftToAllZoomates('+itemId+');">gift to ALL Zoomates</a> / ';
		//		}
			}
			strHtml += '<a href="javascript:zdMoveAllItemToStorage('+itemId+');">' + zdui.getLabel("shop_flyout_actions_movealltostorage") + '</a> / ';
			strHtml += '</p>';
			if(zdZooItems[itemId]['rarity']){
				// facts
				if(zdZooItems[itemId]['fact'] != null){
					strHtml += '<p><b>' + zdui.getLabel("shop_flyout_actions_facts") + '</b>:<ul>';
					strHtml += '<li>'+zdZooItems[itemId]['fact'][0]+'</li>';
					if(zdZooItems[itemId]['fact'][1]!=zdZooItems[itemId]['fact'][0]){
						strHtml += '<li>'+zdZooItems[itemId]['fact'][1]+'</li/>';
					}
					if(zdZooItems[itemId]['fact'][2]!=zdZooItems[itemId]['fact'][0] && zdZooItems[itemId]['fact'][1]!=zdZooItems[itemId]['fact'][2]){
						strHtml += '<li>'+zdZooItems[itemId]['fact'][2]+'</li>';
					}
					strHtml += '</ul></p>';
				}
				// training
				if(trainingList[itemId] != null){
					strHtml += '<p><b>' + zdui.getLabel("shop_flyout_actions_training") + '</b>:<ol>';
					for(t=0;t<trainingList[itemId]['training'].length;t++) {
						strHtml += '<li><a href="javascript:zdShowShopPreviewImage(\'' + 'http://cdnrockyou-a.akamaihd.net/apps/zoo/animals/' + trainingList[itemId]['training'][t]['largeImg'] + '\');">'+trainingList[itemId]['training'][t]['name']+'</a></li>';
					}
					strHtml += '</ol></p>';
				}
			}
			strHtml += '</div>';
			strHtml += '<div style="clear: both;">&nbsp;</div>';
			strHtml += '</div>';
			zdFlyout(strHtml,'#'+itemId);
		}
	}
	// otherwise nothing to show
	return;
}

function zdUpdateZooCash(intDollars, intWLP) {
	frames["shopIframe"].updateZooCash(intDollars, intWLP);
}

var zdOpenFlyout=[];
// hide shop preview
function zdHideShopPreview(id) {
	var zdShopPreview = document.getElementById(id);
	if(zdShopPreview) {
		zdShopPreview.remove();
	}
	return;
}

function zdFlyout(strHtml,id){
strHtml = '<div style="float: right;">[<span class="button23" onclick="zdHideShopPreview(\''+id+'\');zdOpenFlyout.splice(zdOpenFlyout.indexOf(\''+id+'\'),1);updateFlyoutTabs(\''+id+'\');">' + zdui.getLabel("close") + ']</span></div>'+strHtml;
		// lower existing
	if(zdOpenFlyout.length>0){
		for (var i=0;i<zdOpenFlyout.length;i++){
			document.getElementById(zdOpenFlyout[i]).setAttribute("style", 'z-index:1337;' );
		}
	}
	var zdShopPreview = document.getElementById(id);
	if(!zdShopPreview){
		// add this to existing
		zdOpenFlyout.push(id);updateFlyoutTabs();
		var zdShopPreview = document.createElement("div");
		// create shop preview
		zdShopPreview.setAttribute('id',id);
		zdShopPreview.setAttribute('onclick', 'selectShopPreview(this.id);');
		zdShopPreview.setAttribute('class','zdShopPreview')
		zdShopPreview.setAttribute('style','display:none;z-index:1340;');
		document.getElementsByTagName("body")[0].appendChild(zdShopPreview);
	}
	zdShopPreview.setAttribute('style','display: block;z-index:1343;');
	zdShopPreview.innerHTML = strHtml;
	// raise this
	
	return zdShopPreview;
}

function selectShopPreview(flyoutId){
	var zdShopPreview=document.getElementById(flyoutId);
	// lower existing
	if(zdOpenFlyout.length>0){
		for (var i=0;i<zdOpenFlyout.length;i++){
			document.getElementById(zdOpenFlyout[i]).setAttribute("style", 'z-index:1337' );
		}
	}
	// raise this
	zdShopPreview.setAttribute("style", 'z-index:1343' );
	zdShopPreview.setAttribute("display", 'block' );
}

function updateFlyoutTabs(flyoutId){
	var FlyoutTabs=document.getElementById('flyoutTabs');
	if(!FlyoutTabs){
		//create flyout tabs
		var FlyoutTabs = document.createElement("div");
		FlyoutTabs.id= 'flyoutTabs';
		document.getElementsByTagName("body")[0].appendChild(FlyoutTabs);
		FlyoutTabs.style.display='block';
	}
	FlyoutTabs.innerHTML = '&nbsp;&nbsp;<div style="float: right;"><input type="button"  class="button23" onclick="zdCloseAllFlyout()" value="Close All"/></div><br><br>';
	if(zdOpenFlyout.length>0){
		for (var i=0;i<zdOpenFlyout.length;i++){
			if(zdOpenFlyout[i].indexOf('#')!=-1){
				var icon=zdOpenFlyout[i].replace('#',"");
			}else{
				var icon=false;
			}
			if(icon){
				var iconImg= '<img   width="30" height="30" src="https://cdnrockyou-a.akamaihd.net/apps/zoo/item/smallImg/'+icon+'.gif" title="'+zdZooItems[icon]['name']+'">';
			}else{
				var iconImg= zdOpenFlyout[i];
			}
			// add buttons to raise windows
			if(flyoutId!=zdOpenFlyout[i]){
				FlyoutTabs.innerHTML += '<div style="float: right;width:95%;height:auto;" class="zdShopItemMini">  <div style="float: right;" ><input type="button"  class="button23" onclick="zdHideShopPreview(\''+zdOpenFlyout[i]+'\');zdOpenFlyout.splice(zdOpenFlyout.indexOf(\''+zdOpenFlyout[i]+'\'),1);updateFlyoutTabs(\''+zdOpenFlyout[i]+'\');" value="X"/></div><div style="float: right;width:65%;height:auto;" class="zdShopItemMini" onclick="selectShopPreview(\''+zdOpenFlyout[i]+'\')">'+iconImg+'</div></div><br><br>';
			}else{
				FlyoutTabs.innerHTML += '<div style="float: right;width:95%;height:auto;" class="zdShopItemMini">  <div style="float: right;" ><input type="button"  class="button23" onclick="zdHideShopPreview(\''+zdOpenFlyout[i]+'\');zdOpenFlyout.splice(zdOpenFlyout.indexOf(\''+zdOpenFlyout[i]+'\'),1);updateFlyoutTabs(\''+zdOpenFlyout[i]+'\');" value="X"/></div><div style="float: right;width:65%;height:auto;" class="zdShopItemMini" onclick="selectShopPreview(\''+zdOpenFlyout[i]+'\')">'+zdOpenFlyout[i]+'</div></div><br><br>';
			}
		}
	}else{FlyoutTabs.remove();}
}

function zdCloseAllFlyout(){
var FlyoutTabs=document.getElementById('flyoutTabs');
	if(zdOpenFlyout.length>0){
		for (var i=0;i<zdOpenFlyout.length;i++){
			zdHideShopPreview(zdOpenFlyout[i]);
		}
	}FlyoutTabs.remove();zdOpenFlyout=[];
	return
}

/*
 * gift items
 */
// gift item via prompt
function zdGiftItemPrompt(){
	var itemId = (prompt(zdui.getLabel("specify_item_id_prompt"), ""));
	zdGiftItem(itemId);
}
// gift item
/*
function zdGetGiftfbsig(){
	var arrParameters = zdGetGenericParameters();
	arrParameters["service"] = 'dsplygiftservice';
	new Ajax.Request(
				zdgiftInIframeUrl,
	{
		method: 'post',
				asynchronous: true,
		parameters: arrParameters,
		onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = transport.responseText;
				var pattern0 = /fb_sig=(\w+)/;
				var sig = content.match(pattern0);
				zd_fb_sig = sig[1];
				return;
				}
			}
		);
}
*/
function zdGiftItem(itemId) {
	zdLogStatus(zdui.getLabel("gifts_giftingitem") + ' '+itemId+'...');
	var strUrl = ''+zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/';
/*	if((itemId >= 515) && (itemId <= 519)){
		strUrl += 'zooPromotionInviteIframe.php?zooOwnerId='+zd_fb_sig_user;
		strUrl += '&type='+itemId+'&viralType=send-request&appname='+zd_appname+'&version='+zd_version;
		strUrl += '&visit_zoo_swf_gateway_channel='+zd_visit_zoo_swf_gateway_channel+'&achievement_header_mode=1&inTutorial=&owner_name='+PageData.player.name;
		strUrl += '&fb_sig_in_iframe=1&fb_sig_iframe_key='+zd_fb_sig_iframe_key+'&fb_sig_base_domain='+zd_fb_sig_base_domain;
		strUrl += '&fb_sig_locale='+zd_fb_sig_locale+'&fb_sig_in_new_facebook=1';
		strUrl += '&fb_sig_time='+zd_fb_sig_time+'&fb_sig_added=1&fb_sig_profile_update_time='+zd_fb_sig_profile_update_time;
		strUrl += '&fb_sig_expires='+zd_fb_sig_expires+'&fb_sig_user='+zd_fb_sig_user+'&fb_sig_session_key='+zd_fb_sig_session_key;
		strUrl += '&fb_sig_ss='+zd_fb_sig_ss+'&fb_sig_cookie_sig='+zd_fb_sig_cookie_sig+'&fb_sig_ext_perms='+zd_fb_sig_ext_perms;
		strUrl += '&fb_sig_country='+zd_fb_sig_country+'&fb_sig_api_key='+zd_fb_sig_api_key+'&fb_sig_app_id='+zd_fb_sig_app_id+'&fb_sig='+zd_fb_sig+'';
	}else{
*/		
		strUrl += 'giftInIframe.php?service=dsplygiftinvite&giftId='+itemId;
		strUrl += '&appname='+zd_appname+'&appId='+zd_appId+'&signed_request='+zd_signed_request;

//	}
	window.open( strUrl, '_blank' );
	return;
}

function zdSendJuice(friendId) {
	new Ajax.Request(
		zdViralUrl+'appname='+zd_appname+'&zooOwnerId='+zd_fb_sig_user+'&type=515&viralType=send-request&signed_request='+zd_signed_request+'&to[]='+friendId+'',
		{
			method: 'get',
			asynchronous: true,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				var content =transport.responseText;
				zdLogStatus('Juice sent to '+friendId+'');
			}
		}
	);
}

var arrExclusives=[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,376,377,378,379,380,381,382,383,384,385,386];

function zdSendGift(giftId,friendId,giftCount){
	if(giftId==null){
		giftId = (prompt("Enter Gift Id", 1));
	}
	if(friendId==null){
		friendId = (prompt("Enter Friend User Id", 1));
	}
	if((giftId >= 515) && (giftId <= 519)){
		zdSendJuice(friendId);
	}else if(arrExclusives.has(giftId) || (zdSeasonal.arrSeasonalItemsId && (zdSeasonal.arrSeasonalItemsId.length==0 || zdSeasonal.arrSeasonalItemsId[zdSeasonal.arrSeasonalItemsId.length-2]==giftId || zdSeasonal.arrSeasonalItemsId[zdSeasonal.arrSeasonalItemsId.length-1]==giftId))){
		zdReturnGift(0,giftId,friendId,1)
	}else{
		if(friendId != zd_fb_sig_user){
			var arrParameters = zdGetGenericParameters();
			arrParameters["service"] = "dsplygiftinvitesent";
			arrParameters["to[]"] = friendId;
			arrParameters["giftId"] = giftId;
			new Ajax.Request(
				zdgiftUrl,
				{
					method: 'post',
					asynchronous: true,
					parameters: arrParameters,
					onSuccess : function(transport){
						zdSetResponse(transport.responseText);
						var content = transport.responseText;
						if(content.toString().length>0 && content.match(/\"success\":true/)){
							if(giftCount){
								zdLogStatus('('+giftCount+')Sent '+giftId+' to '+friendId);
							}else{
								zdLogStatus('Sent '+giftId+' to '+friendId);
							}
						}else{
							zdLogStatus('Cannot send '+giftId+' to '+friendId+'. Retry later.');
						}
					}
				}
			);
		}
	}
}

function zdSendGiftToAllFriends(giftId){
	var warning = confirm('Are you sure you want to send to ALL friends?\nThis could deplete all but one of this item!\nProceed?');
	if(warning==true){
		var giftCount = 0;
		var arrFriends = [];
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		var arrRawFriendList = eval('('+strFriends+')');
		zdLogStatus('Sending '+zdGetAnimalForId(giftId)["name"]+' to ' + arrRawFriendList['return_data'].length + ' of your friends...');
		for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
			if(arrRawFriendList["return_data"][f]["uid"] != zd_fb_sig_user){
				giftCount++;
				zdWorkQueuePush('zdSendGift('+giftId+','+arrRawFriendList["return_data"][f]["uid"]+','+giftCount+')');
			}
		}
	zdWorkQueueStart();
	}
}

function zdSendGiftToAllZoomates(giftId){
	var warning = confirm('Are you sure you want to send to ALL zoomates?\nThis could deplete all but one of this item!\nProceed?');
	if(warning==true){
	var giftCount = 0;
	var arrFriends = [];
	var strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	var arrRawFriendList = eval('('+strFriends+')');
	zdLogStatus('Sending '+zdGetAnimalForId(giftId)["name"]+' to ' + arrRawFriendList['return_data'].length + ' of your friends...');
	for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
		if(arrRawFriendList["return_data"][f]["is_zoomate"] == true && arrRawFriendList["return_data"][f]["uid"] != zd_fb_sig_user){
		giftCount++;
		zdWorkQueuePush('zdSendGift('+giftId+','+arrRawFriendList["return_data"][f]["uid"]+','+giftCount+')');
		}
	}
	zdWorkQueueStart();
	}
}
/*
 * Gifts
 */
function zdRepeatMysteryGift(){
	setInterval('mysteryGiftFound(300);',5000);
	return;
}
// ' + zdui.getLabel("specify_user_id_prompt") + '

function zdPostTreasureToFriend(){
	var userId = prompt(zdui.getLabel("specify_user_id_prompt"), zd_fb_sig_user);
	postTreasureToFriend(userId);
	return;
}

function zdPostMysteryChestToFriend(){
	var userId = prompt(zdui.getLabel("specify_user_id_prompt"), zd_fb_sig_user);
	postMysteryChestToFriend(userId);
	return;
}

function zdPostMysteryChestToFriend(){
	var userId = prompt(zdui.getLabel("specify_user_id_prompt"), zd_fb_sig_user);
	postMysteryChestToFriend(userId);
	return;
}

function zdSpawnFieldTripTradeById(){
	var animalId = prompt(zdui.getLabel("specify_animal_id_prompt"));
	FieldTrip.shareUpgradeItem(animalId);
	return;
}

function zdSpawnGoldenEggTradeById(){
	var animalId = prompt(zdui.getLabel("specify_animal_id_prompt"), 301);
	shareGoldenEggHatched(animalId);
	return;
}

function share25Oaks(){
	for(i=0;i<25;i++){
		zdWorkQueuePush('shareGoldenEggHatched(301);');
	}
	zdWorkQueueStart();
}

function zdSpawnIceCreamTradeById(){
	var animalId = prompt(zdui.getLabel("specify_animal_id_prompt"));
	IceCream.shareTrade(animalId);
	return;
}

function zdRepeatGreenEgg(){
	setInterval('viralSpecialEventGift(0);',5000);
	return;
}

function zdGenerateTimestamp(){
	var theDate = new Date();
	theTs = theDate.getUTCFullYear()*365*24*60*60 + (theDate.getUTCMonth()+1)*30*24*60*60 + theDate.getUTCDate()*24*60*60 + theDate.getUTCHours()*60*60 + theDate.getUTCMinutes()*60 + theDate.getUTCSeconds();
	alert( theTs );
	// return theTs;
}

function zdSpawnTrophy(){
	var objTrophyName = document.getElementById('zdSpawnTrophyName');
	var objTrophLevel = document.getElementById('zdSpawnTrophyLevel');
	zdLogStatus(zdui.getLabel("gifts_spawning") + " " + objTrophLevel.options[objTrophLevel.selectedIndex].value + " " + zdui.getLabel("gifts_trophy") + ": " + objTrophyName.options[objTrophyName.selectedIndex].value + "");
	shareTrophySuccess(
		objTrophyName.options[objTrophyName.selectedIndex].value, 
		objTrophLevel.options[objTrophLevel.selectedIndex].value
	);
	return;
}

function zdSpawnTreatTrophy(){
	var objTrophyName = document.getElementById('zdSpawnTreatTrophyName');
	var objTrophLevel = document.getElementById('zdSpawnTreatTrophyLevel');
	zdLogStatus(zdui.getLabel("gifts_spawning") + " " + objTrophLevel.options[objTrophLevel.selectedIndex].text + " " + zdui.getLabel("gifts_trophy") + ": " + objTrophyName.options[objTrophyName.selectedIndex].text + "");
	treatTrophy.shareItem(
		objTrophyName.options[objTrophyName.selectedIndex].value, 
		objTrophLevel.options[objTrophLevel.selectedIndex].value
	);
	return;
}

function share25OaksTrophy(){
	for(i=0;i<25;i++){
		zdWorkQueuePush('zdSpawnTrophy()');
	}
	zdWorkQueueStart();
}

function zdSpawnMission(){
	var objMissionAnimal = document.getElementById('zdSpawnMissionAnimal');
	var objMissionAction = document.getElementById('zdSpawnMissionAction');
	if(objMissionAction.options[objMissionAction.selectedIndex].value=='continueMissionWLP'){
		zdLogStatus('Hire help');
		hireHelpMission(objMissionAnimal.options[objMissionAnimal.selectedIndex].value);
	}else if(objMissionAction.options[objMissionAction.selectedIndex].value=='finishMissionWlp'){
		finishMissionWlp();
	}else{
		zdLogStatus(zdui.getLabel("gifts_spawning") + " " + objMissionAnimal.options[objMissionAnimal.selectedIndex].value + " " + zdui.getLabel("gifts_mission") + ": " + objMissionAction.options[objMissionAction.selectedIndex].value + "");
		eval('missionDialogMgr.' + objMissionAction.options[objMissionAction.selectedIndex].value + '(' + objMissionAnimal.options[objMissionAnimal.selectedIndex].value + ');');
	}
		return;
}

function hireHelpMission(missionId){
	RY.service({
		url: zdMissionUrl,
		data: {
			parentAppId : PageData.app.id,
			userId: PageData.player.uid,
			cmd: "continue_mission_wlp",
			mission_id : missionId
		},
		success: function(data){
			data = data.return_data;
			if(data.getwlpdialog){
				showGetMoreWLP();
				return;
			}
			updateWithMissionData(data);
			updatePageContent();
			parent.reloadZooStatsRequired = true;
			//check if any dialogs need to be displayed
			missionDialogMgr.showDialogs(data);
			document.getElementById('update_mission_message').style.display = "none";
		},
	});
}

function finishMissionWlp(){
	zdLogStatus('Checking mission data...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		'http://fbeq.rockyou.com/facebook_apps/zoo/missionInIframe.php?firstLoad=1&appname='+zd_appname+'&signed_request='+zd_signed_request
		,
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var data = transport.responseText;
				var x = data.indexOf("var currentMissionData =");
				var y = data.indexOf("var masteryData");
				var currentData = data.slice(x+24,y-17);currentData = eval( '('+currentData+')') ;
				zdLogStatus(currentData["targetObjectName"]+' :'+currentData["participantCount"]+'/'+currentData["requiredParticipants"]);
				var neededLeft = (currentData["requiredParticipants"] - currentData["participantCount"]);
				var missionId = currentData["id"];
				if(neededLeft>0){
					if(confirm('Are you sure you want to finish your mission for '+neededLeft+' WLP?')){
						for (i=0;i<neededLeft;i++){
							hireHelpMission(missionId);
						}
					}
				}
				return; 
			}
		}
	);
}

function zdSpawnLevel(){
	var desiredLevel = document.getElementById('zdTypeDesiredLevel').value;
	if(desiredLevel !=null) {
		shareExperienceLevelUp(desiredLevel);
	}
	return;
}

function zdSpawnFlowers(){
	var objFlowerWhere = document.getElementById('zdSpawnFlowerTo');
	var intFlowerWhere = 0;
	if(parseInt( objFlowerWhere.value ) > 0){
		intFlowerWhere = parseInt( objFlowerWhere.value );
	}
	var objFlowerWhat = document.getElementById('zdSpawnFlowerType');
	postTreeGiftTY(zd_fb_sig_user,
		intFlowerWhere, 
		objFlowerWhat.options[objFlowerWhat.selectedIndex].value
	);
	return;
}

/*
 * Announcements
 */
function zdDesiredLevel(){
	// deprecated
	desiredLevel = (prompt("Announce your new imaginary level.", "Type desired level:"));
	if(desiredLevel!=null) {
		shareExperienceLevelUp(desiredLevel);
	}
	return;
}

function zdDesiredGate(){ // not working
	desiredGate = (prompt("Announce your imaginary gate upgrade.", "Type desired level:"));
	if(desiredGate!=null) {
		islandGateUpgraded(1, desiredGate);
	}
	return;
}

function zdCustomPrompt(storyTitle, storyBody, imageUrl, actionUrl, buttonText) {
	/*
	var imageUrl = "http:\/\/cdn.rockyou.com\/apps\/zoo\/feed\/levelup2.gif";
	var storyTitle = PageData.player.name + " just reached Level " + level + " in Zoo!";
	var actionUrl = "http:\/\/apps.facebook.com\/playzoo\/zoo\/home.php?user_referrID="+zd_fb_sig_user+"&referType=5&claimTypeId=2051&claimUserId="+zd_fb_sig_user+"&claimTime=1277154895&&claimHash=fd30e4b7b48459a1626c8c393e615e94&_ryfbe=fb-zoo-feed-levelUp-click";
	var storyBody = PageData.player.name + " is moving up in Zoo and wants to celebrate with you! " + PageData.player.name + " is sharing a Zoo Bonus with friends!";
	var buttonText = "Claim bonus";
	*/
	RY.track({name:"fb-zoo-feed-levelUp-prompt"});
	var attachment = {"name": storyTitle, "href":actionUrl, "description":storyBody,
					"media":[{"type":"image","src":imageUrl,"href":actionUrl}]};
	var action_links = [{"text":buttonText, "href":actionUrl}];
	FBPUBLISH.promptUser(attachment, action_links, null, function(published) {
		if(published){
			RY.track({name: "fb-zoo-feed-levelUp-story-publish"});
		}else{
			RY.track({name: "fb-zoo-feed-levelUp-skip-publish"});
		}
	});
}

function zdCustomiseMysteryGift(){
			var strHtml = '';
			// title
			strHtml += '<h2>Customise Mystery Gift</h2>';
			strHtml += '<div id="zdShopPreviewBody">';
			strHtml += '<form method="GET" action="#" id="zdCustomiseGiftForm" name="zdCustomiseGiftForm"> ';
			strHtml += '<img src="http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif" alt="" id="CAFitemImageDisplay" width="75" height="75" />';
			strHtml += '</div>';
			strHtml += '<table border="0"> ' + "\n";
			strHtml += '<tr><td>Image Url</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemImage" name="imageUrl" value="http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif" style="width: 240px;" onBlur="getElementById(\'CAFitemImageDisplay\').src = getElementById(\'CAFitemImage\').value;"/>';
			strHtml += '</td></tr> ' + "\n" ;
			strHtml += '<tr><td>Story Title</td> ' ;
			strHtml += '<td><textarea id="CMGstoryTitle" name="storyTitle" style="width: 240px;">'+PageData.player.name+' has a mystery gift to share with friends!</textarea></td></tr> ' + "\n" ;
			strHtml += '<tr><td>Story Body</td> ' ;
			strHtml += '<td><textarea id="CMGstoryBody" name="storyBody" style="width: 240px; height: 75px;">'+PageData.player.name+' found a mystery gift box during a treasure hunt!  There could be a valuable rare item in this gift box!</textarea></td></tr> ' + "\n" ;
			strHtml += '<tr><td>Button Text</td> ' ;
			strHtml += '<td><input type="text" id="CMGbuttonText" name="buttonText" value="Claim the Mystery Gift!" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>&nbsp;</td> ' ;
			strHtml += '<td><input type="button" id="button49" value="Post Custom Mystery Gift" onClick="zdUpdateMysteryGiftLink();"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td style="width: 100px;">&nbsp;</td> ' ;
			strHtml += '<td><p style="display: block; clear:both; border:0px #000 solid; padding:5px; background: #FEC; text-align: center; font-weight: bold;"><span id="zdCMGLink" onClick="#"></span></p></td> ' + "\n" ;
			strHtml += '</table> ' ;
			strHtml += '</form>';
			zdFlyout(strHtml,'Mystery Gift');
	return;
}

// update customised mysterygift link
function zdUpdateMysteryGiftLink(){
	var zdCMGLink = document.getElementById('zdCMGLink');
	if(zdCMGLink) {
		var zdCustomiseGiftForm = document.getElementById('zdCustomiseGiftForm');
		zdCustomMysteryGift(
			document.getElementById('CMGstoryTitle').value // storyTitle
			,document.getElementById('CMGstoryBody').value // storyBody
			,document.getElementById('CAFitemImage').value // imageUrl
			,document.getElementById('CMGbuttonText').value // buttonText
		);
		zdCMGLink.setAttribute('onClick',strzdCMGLink);
	}
	return;
}

function zdCustomMysteryGift(storyTitle, storyBody, imageUrl, buttonText) {
	var dataUrl = "ajax_mysteryGift.php";
	RY.service({
		url: dataUrl,
		data: {
			"userId": PageData.player.uid,
			"parentAppId": PageData.app.id
		},
		success: function(d) {
			var actionUrl = d.actionUrl;
			var userName = PageData.player.name;
			if(buttonText == undefined ) 
				storyBody  = userName + " found a mystery gift box during a treasure hunt!  There could be a valuable rare item in this gift box!";
			if(buttonText == undefined ) 
				storyTitle = userName + " has a mystery gift to share with friends!";
			if(buttonText == undefined )
				buttonText = "Claim the Mystery Gift!";
			if(imageUrl == undefined )
				imageUrl = "http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif";
			var action_links = [{"text":buttonText, "href":actionUrl}];
			var attachment = {"name": storyTitle, "href":actionUrl, "description":storyBody,
							"media":[
									{"type":"image","src":imageUrl,"href":actionUrl}
							]};
			FBPUBLISH.promptUser(attachment, action_links, null,
				function(published) {
					// we don't need to track
					if(published) {
						zdLogStatus( "Wall post published." );
					}else{
						zdLogStatus( "Wall post not published." );
					}
				}
			);
		}
	});
}

/*
 * Friends list AJAX
 */
function zdSetFriends(theFriends) {
	var frmFriends = document.getElementById('zdFriends');
	frmFriends.value = theFriends;
	return;
}

function zdGetFriends(){
	var frmFriends = document.getElementById('zdFriends');
	return frmFriends.value;
}

function zdAjaxFriendService(){
	if(zdGetFriends().length > 0){
		zdLogStatus(zdui.getLabel("status_friendlist_loaded"));
		return;
	}
	zdLogStatus(zdui.getLabel("status_friendlist_loading"));
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdFriendServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetFriends(transport.responseText);
				zdZooFriends = eval( '('+zdGetFriends()+')' );				
				zdLogStatus(zdui.getLabel("status_friendlist_found")+' '+zdZooFriends['return_data'].length+' '+zdui.getLabel("status_friendlist_friends")+'...');
				return;
			}
		}
	);
	return;
}

function zdShowFriends(friendList) {
	// deprecated
	zdZooFriends = eval('( '+friendList+')');
	var strFriendList = "Friends:\n";
	for(f=0;f<zdZooFriends['return_data'].length;f++){
		strFriendList += zdZooFriends['return_data'][f]['uid']+' - '+zdZooFriends['return_data'][f]['name']+"\n";
	}
	zdLogStatus('Found '+zdZooFriends['return_data'].length+' friends...');
	zdLoadZooService(zdZooFriends['return_data'][4]['uid']);
	return;
}

function zdDeduplicateFriends(){
	// TO BE TRANSLATED
	zdZooFriends = eval( '('+zdGetFriends()+')' );
	var strFriendList = "\n";
	var arrFoundFriends = new Array();
	var uniqueFriends = 0;
	for(f=0;f<zdZooFriends['return_data'].length;f++){
		var currentUid = ""+zdZooFriends['return_data'][f]['uid'];
		if(arrFoundFriends[currentUid] != null){
			arrFoundFriends[currentUid] = arrFoundFriends[currentUid] + 1;
		}else{
			strFriendList += '{"uid":"' + currentUid + '"},' + "\n";
			arrFoundFriends[currentUid] = 1;
			uniqueFriends++;
		}
		if((f%100)==0) {
			zdLogStatus('Found '+uniqueFriends+' unique friends of '+f+' processed...');
		}
	}
	zdSetResponse(strFriendList+"\n");
	zdLogStatus('Found '+uniqueFriends+' unique friends of '+zdZooFriends['return_data'].length+'...');
	// zdLoadZooService(zdZooFriends['return_data'][4]['uid']);
	return;
}

/*
 * Zoo AJAX
 */
function zdSetZoo(theZoo) {
	var frmZoo = document.getElementById('zdZoo');
	frmZoo.value = theZoo;
	return;
}

function zdGetZoo(){
	var frmZoo = document.getElementById('zdZoo');
	if(frmZoo.value.length < 10){
		zdLogStatus(zdui.getLabel("status_zoo_notloaded"));
	}
	return frmZoo.value;
}

var zdZooResponseData=[];

function zdLoadZooService(friendId) {
	zdLogStatus(zdui.getLabel("status_zoo_loadedforfriend")+' '+friendId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = friendId;
	new Ajax.Request(
		zdLoadZooServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetZoo(transport.responseText);
				zdZooResponseData = eval( '('+transport.responseText+')' );
				//Update actual num islands
				if( (friendId==zdUserId) && (zdIslands!=zdZooResponseData["return_data"]["islands"].length-1) ){
					zdIslands = zdZooResponseData["return_data"]["islands"].length-1;  //remove entry 0 which is inventory
					if(document.getElementById('zdBody').style.display == "none"){
						zdui.initialise();  //rebuild menus
					}else{
						zdui.initialise();
						document.getElementById('zdBody').style.display="block";
					}
						//zdLogStatus('Updating menus for '+zdIslands+' islands');
				}
				//Training Data
				for(i=0;i<20000;i++){
					if(zdZooResponseData["return_data"]["trainingList"][i]){
						arrTrainingData[i] = zdZooResponseData["return_data"]["trainingList"][i]["trainingLevel"];
					}
				}
				if(parseInt(zdZooResponseData["return_data"]["visitZooBonus"]) > 0){
					zdLogStatus('Visited '+friendId+' and collected $'+zdZooResponseData["return_data"]["visitZooBonus"]+'...');
				}
				// Populate Seasonal
				if(zdZooResponseData["return_data"]["projects"]["seasonal"]){
					zdSeasonal.missionProjId= zdZooResponseData['return_data']['projects']['seasonal']['id'];
					zdSeasonal.arrSeasonalItems=[];
					zdSeasonal.arrSeasonalAnimals=[];
					zdSeasonal.arrSeasonalAskFor=[];
					zdSeasonal.arrSeasonalItemsId=[];
					var items=(zdZooResponseData['return_data']['projects']['seasonal']['items']);
					for(key in items){
						if(items[key]['part']){
							zdSeasonal.arrSeasonalItems.push(key);
							zdSeasonal.arrSeasonalItemsId.push(items[key]['id']);
							var askFor='askFor'+(key.toLowerCase()).replace(/[\s-\']+/g,'');
							zdSeasonal.arrSeasonalAskFor.push(askFor);
						}else if(items[key]['animal']){
						zdSeasonal.arrSeasonalAnimals.push(key);
						}
					}
				}
				if(zdZooResponseData["return_data"]["projects"]["seasonalBuildable"]){
					if(zdZooResponseData["return_data"]["projects"]["seasonalBuildable"]["id"]){
						zdSeasonal.buildableProjId=zdZooResponseData["return_data"]["projects"]["seasonalBuildable"]["id"];
					}
					zdSeasonal.arrBuildableItems=[];
					var build=(zdZooResponseData['return_data']['projects']['seasonalBuildable']['materials']);
					for(k=0;k<zdSeasonal.arrSeasonalAnimals.length;k++){ 
						for(key in build){
							if( build[key]["name"].toLowerCase().replace(/\'/,"")==items[zdSeasonal.arrSeasonalAnimals[k]]["materialName"].toLowerCase().replace(/\'/,"") ){
								zdSeasonal.arrBuildableItems.push(key);
							}
						}
					}
				}
			}
		}
	); 
}

/*
 * Auto Zoo
 */
function zdAuto(){
	zdNewFeedAllAnimals(0);
	return;
}
		// lush tree: 300-307
		// flowering tree: 308-315
		// topiary: 316-324
		// sculpture: 325-333
		// mushroom: 373-379
function zdUpgradeTopiaries( intTypeId){
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdWorkQueuePush('zdCollectibles._upgradeAllCollectibleAjax(316,10,8);'); //(Giraffe) Item start,initquant, number of upgradables in group
	zdWorkQueueStart();
}

function zdUpgradeSculptures(){
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdWorkQueuePush('zdCollectibles._upgradeAllCollectibleAjax(325,10,8);'); //(Frog)
	zdWorkQueueStart();
}

function zdUpgradeFloweringTrees(){
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdWorkQueuePush('zdCollectibles._upgradeAllCollectibleAjax(308,10,7);'); //(Pear)
	zdWorkQueueStart();
}

function zdUpgradeLushTrees(){
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdWorkQueuePush('zdCollectibles._upgradeAllCollectibleAjax(300,10,7);'); //(Oak)
	zdWorkQueueStart();
}

function zdUpgradeMushrooms( intTypeId){
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdWorkQueuePush('zdCollectibles._upgradeAllCollectibleAjax(373,10,6);'); //(Red)
	zdWorkQueueStart();
}
 
 /*
 * Animal feeding
 */
var zdFeedAnimalXP = 0;
var zdFeedAnimalZooData = null;

// feed all animals
function zdNewFeedAllAnimals(auto) {
	// initialise
	if(auto==0 || auto==1){
		var intFeedType = auto;
		var intFeedTreat = 7;
		var intFeedMode = 0;
		var intHerdCollect = 0;
		var boolCumulativeMode = true;
	}else{
		var objFeedType = document.getElementById('zdFeedType');
		var objFeedTreat = document.getElementById('zdFeedTreat');
		var objFeedMode = document.getElementById('zdFeedMode');
		var objHerdCollect = document.getElementById('zdHerdCollect');
		var intFeedType = objFeedType.options[objFeedType.selectedIndex].value;
		var intFeedTreat = objFeedTreat.options[objFeedTreat.selectedIndex].value;
		var intFeedMode = objFeedMode.options[objFeedMode.selectedIndex].value;
		var intHerdCollect = objHerdCollect.options[objHerdCollect.selectedIndex].value;
		var boolCumulativeMode = true;
	}
	// load zoo
	zdDeleteCookies();
	var zooData = zdGetZoo();
	if(zooData.length < 10){
		zdLoadZooService(zd_fb_sig_user);
		zooData = zdGetZoo();
	}
	var zdFeedAnimalZooData = eval( '('+zooData+')' );
	// add animals to the work queue
	zdLogStatus('Queuing up ' + zdFeedAnimalZooData['return_data']['treats']['animals'].length + ' animals to feed.');
	if(boolCumulativeMode){
		var strAnimalArray = '[';
		for (a=0;a<zdFeedAnimalZooData['return_data']['treats']['animals'].length;a++) {
			strAnimalArray += zdFeedAnimalZooData['return_data']['treats']['animals'][a]['typeid'];
			if((a+1) == zdFeedAnimalZooData['return_data']['treats']['animals'].length) {
				strAnimalArray += ']';
				if(auto==0 || auto==1){
					zdWorkQueuePush('zdCumulativeFeedAnimalService( ' + strAnimalArray + ', ' + intFeedType + ', ' + intFeedTreat + ', ' + intHerdCollect + ', ' + auto + ' );' );
				}else{
					zdWorkQueuePush('zdCumulativeFeedAnimalService( ' + strAnimalArray + ', ' + intFeedType + ', ' + intFeedTreat + ', ' + intHerdCollect + ' );' );
//					zdCumulativeFeedAnimalService( strAnimalArray, intFeedType, intFeedTreat );
				}
				strAnimalArray = '[';
			}else if(a<zdFeedAnimalZooData['return_data']['treats']['animals'].length){
				strAnimalArray += ',';
			}
		}
	}else{
		for (a=0;a<zdFeedAnimalZooData['return_data']['treats']['animals'].length;a++) {
			zdWorkQueuePush('zdFeedAnimalService( '
				+ zdFeedAnimalZooData['return_data']['treats']['animals'][a]['typeid']+','
				+ intFeedType + ', ' + intFeedTreat + ' );' 
			);
		}
	}
	// set up repeat
	if(intFeedMode > 0){
		var arrMinuteDelays = new Array(5,25.2,60,4*60,12*60,18*60,24*60,2*24*60);
		var intMinuteDelay = arrMinuteDelays[intFeedTreat-1];
		zdLogStatus(zdui.getLabel("status_feeding_waitingfor") + ' '+intMinuteDelay+' ' + zdui.getLabel("minutes") + '...');
		window.setTimeout('zdNewFeedAllAnimals();', (1000*60*intMinuteDelay) ); // run every five minutes and ten seconds
	}
	// start iterating
	zdWorkQueueStart();
}

function zdHerdBonus( intHerdCollect){
	var zooData = zdGetZoo();
	if(zooData.length < 10){
		zdLoadZooService(zd_fb_sig_user);
		zooData = zdGetZoo();
	}
	var zdFeedAnimalZooData = eval( '('+zooData+')' );
	var numHerds = 0;
	var strAnimalArray = '[';
	for (a=0;a<zdFeedAnimalZooData['return_data']['treats']['animals'].length;a++) {
		var herd = zdFeedAnimalZooData['return_data']['treats']['animals'][a]['spewed_hearts'];
		if((a+1) == zdFeedAnimalZooData['return_data']['treats']['animals'].length) {
			strAnimalArray += ']';
			zdWorkQueuePush('zdHerdBonusService( '+strAnimalArray+' );' );
			if(intHerdCollect>0) {
				zdWorkQueuePush('zdOldHerdBonusService( '+strAnimalArray+', '+intHerdCollect+' );' );
			}
		} else if((a<zdFeedAnimalZooData['return_data']['treats']['animals'].length) && (herd>0)){
				strAnimalArray += zdFeedAnimalZooData['return_data']['treats']['animals'][a]['typeid'];
				strAnimalArray += ',';
				numHerds++;
		}
	}
	zdLogStatus('You have '+numHerds+' herds');
	zdWorkQueueStart();
}

// feed animal service
function zdFeedAnimalService( animalId, oneClickCollectId, treatId){ // PrizeClaimService
	// zdDeleteCookies();
	var arrParameters = zdGetGenericParameters();
	arrParameters["animal"] = animalId;
	arrParameters["animalId"] = animalId;
	arrParameters["treatId"] = treatId;
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	arrParameters["oneClickCollect"] = oneClickCollectId;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				if(oneClickCollectId == 1){ // show if just collect or feed also
					zdLogStatus(zdui.getLabel("status_feeding_fed")+' '+zdGetAnimalForId(animalId)['name']+' #'+animalId+' '+zdui.getLabel("status_feeding_withtreat")+' '+treatId+'...');
				}else{
					zdLogStatus(zdui.getLabel("status_feeding_collected")+' '+zdGetAnimalForId(animalId)['name']+' #'+animalId+' '+zdui.getLabel("status_feeding_withtreat")+' '+treatId+'...');
				}
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

// cumulative feed animal service
function zdCumulativeFeedAnimalService( arrAnimalIds, oneClickCollectId, treatId, intHerdCollect,auto){
	var objFeedByGroup = document.getElementById('zdFeedByGroup');
	if(objFeedByGroup){
		var intFeedByGroup = objFeedByGroup.options[objFeedByGroup.selectedIndex].value;
	}else{var intFeedByGroup = 1000;}
	if(intFeedByGroup==0){
		var intGroup=arrAnimalIds.length;
	}else{
		var intGroup=intFeedByGroup;
	}
	var numberOfSpecies=0;
	// zdDeleteCookies();
// Set Treat Options
	var arrParameters = zdGetGenericParameters();
	arrParameters['zooOwnerId'] = zd_fb_sig_user;
	arrParameters['oneClickCollect'] = oneClickCollectId;
	arrParameters['globalTreat'] = treatId;
	arrParameters['treatId'] = treatId;
	new Ajax.Request(zdSettingsServiceUrl, 
		{
			method: 'post', 
			asynchronous: true, 
			parameters: arrParameters, 
			onSuccess : function(transport){
			}
		}
	);
//Feed
	var arrParameters = zdGetGenericParameters();
	if(arrAnimalIds.length > 0){
		var strItems = '[';
		for(var i=0;i<intGroup;i++) {
			if(arrAnimalIds[i]) {
				if(i > 0){
					strItems += ',';
				}
				numberOfSpecies++;
				strItems += '{"zooOwnerId":"'+zd_fb_sig_user+'",';
				strItems += '"spewingState":true,';
				strItems += '"animalId":'+arrAnimalIds[i]+',';
				strItems += '"animal":"'+arrAnimalIds[i]+'",';
				strItems += '"treatId":'+treatId+',';
				strItems += '"ignoreOneClick":0}';
			}
		}
		arrAnimalIds.splice(0, numberOfSpecies);
		strItems += ']';
		arrParameters["items"] = strItems;
		arrParameters["bonuses"] = '{"'+zdSeasonal.missionProjId+'":10}';
		arrParameters["zooOwnerId"] = zd_fb_sig_user;
		// zdLogStatus('About to cumulative feed (' + arrParameters["items"] + ')...');
		new Ajax.Request(
			zdCumulativeTreatServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					if(oneClickCollectId == 1){ // show if just collect or feed also
						zdLogStatus(zdui.getLabel("status_feeding_fed")+' '+numberOfSpecies+' '+zdui.getLabel("status_feeding_animalswithtreat")+' '+treatId+'...');
					}else{
						zdLogStatus(zdui.getLabel("status_feeding_collected")+' '+numberOfSpecies+' '+zdui.getLabel("status_feeding_animalswithtreat")+' '+treatId+'...');
					}
					zdSetResponse(transport.responseText);
					if(arrAnimalIds.length > 0){
						zdCumulativeFeedAnimalService( arrAnimalIds, oneClickCollectId, treatId, intHerdCollect,auto )
					}else{
						if(auto==0){zdNewFeedAllAnimals(1);zdHerdBonus(intHerdCollect);
						}else if(auto==1){
							zdVisitAllGates();
							zdScheduleGateBooth(15*60);
							zdLoadAndShakeMyIslands(false);
							zdLoadAndShakeMyInventory(false);
							zdAllKiosksCollect();
							zdVisitAllZoosNew(0,0);
						}else{zdHerdBonus(intHerdCollect);}
					}
					return;
				}
			}
		); 
	}else{
		zdLogStatus(zdui.getLabel("status_feeding_noanimalsforcumulative")+' ' + arrAnimalIds + '...');
	}
}

function zdHerdBonusService( arrAnimalIds){ // PrizeClaimService
	var arrParameters = zdGetGenericParameters();
	if(arrAnimalIds.length > 0){
		var strItems = '{';
		for(var i=0;i<arrAnimalIds.length;i++) {
			if(i > 0){
				strItems += ',';
			}
			strItems += '"'+arrAnimalIds[i]+'":';
			strItems += '{"newSpewHearts":6,"oldSpewHearts":0}';
		}
		strItems += '}';
		arrParameters["spewedList"] = strItems;
		for(h=0;h<6;h++) {
			new Ajax.Request(
				zdPrizeClaimServiceUrl, 
				{
					method: 'post',
					asynchronous: true,
					parameters: arrParameters,
					onSuccess : function(transport){
						zdLogStatus('Collected Herd Bonus...');
						zdSetResponse(transport.responseText);
						return;
					}
				}
			);
		} 
	}else{
		zdLogStatus('No Herd Bonus...');
	}
}

function zdOldHerdBonusService( arrAnimalIds, intHerdCollect){ // PrizeClaimService
	zdLogStatus('Trying to collect Super-Herd Bonus...');
	var numCollected=0;
	var arrParameters = zdGetGenericParameters();
	if(arrAnimalIds.length > 0){
		var strItems = '{';
		for(var i=0;i<arrAnimalIds.length;i++) {
			if(i > 0){
				strItems += ',';
			}
			strItems += '"'+arrAnimalIds[i]+'":';
			strItems += '{"newSpewHearts":0,"oldSpewHearts":6}';
		}
		strItems += '}';
		arrParameters["spewedList"] = strItems;
		for(h=0;h<intHerdCollect;h++) {
			new Ajax.Request(
				zdPrizeClaimServiceUrl, 
				{
					method: 'post',
					asynchronous: true,
					parameters: arrParameters,
					onSuccess : function(transport){
						zdSetResponse(transport.responseText);
						var zdResult = eval( '('+transport.responseText+')' );
						numCollected++;
						if(zdResult["return_data"]["spew"]){
							zdCollectedJuice +=zdResult["return_data"]["spew"]["juiceBonus"];
							zdCollectedMoney +=zdResult["return_data"]["spew"]["cashBonus"];
						}
						if(document.getElementById('juiceCollected') && document.getElementById('moneyCollected')){
							document.getElementById('juiceCollected').innerHTML=zdCollectedJuice;
							document.getElementById('moneyCollected').innerHTML=zdCollectedMoney;
						}
						zdLogStatus('Collected Herd Bonus ('+numCollected+')...');
						return;
					}
				}
			);
		} 
	}else{
		zdLogStatus('No Herd Bonus...');
	}
}

var zdCollectedJuice = 0;
var zdCollectedMoney = 0;

function zdNewFeedFlyout(){
	var strHtml = '';
	strHtml += '<h2>&nbspFeed & collect</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdShopPreviewBody" style=" width: 300px;height: 500px; overflow: scroll; ">';
	strHtml += '';
	strHtml += '<h2>'+zdui.getLabel("myzoo_feeding_title")+':</h2>' + 
		'<form method="get" action="#">' +
		'<div>' +
		'<select name="zdFeedType" id="zdFeedType"><option value="0">'+zdui.getLabel("myzoo_feeding_collect")+'</option><option value="1" selected="selected">'+zdui.getLabel("myzoo_feeding_feed")+'</option></select>' +
		'&nbsp;<select name="zdFeedTreat" id="zdFeedTreat"> <option value="1">Apple (5 '+zdui.getLabel("minutes")+')</option> <option value="2">Orange (30 '+zdui.getLabel("minutes")+')</option> <option value="3">Grapes (1 '+zdui.getLabel("hour")+')</option> <option value="4">Strawberry (4 '+zdui.getLabel("hours")+')</option> <option value="5">Candy (12 '+zdui.getLabel("hours")+')</option> <option value="6">Lollipop (18 '+zdui.getLabel("hours")+')</option> <option value="7" selected="selected">Cupcake (1 '+zdui.getLabel("day")+')</option> <option value="8">Ice Cream (2 '+zdui.getLabel("days")+')</option></select>' +
		'&nbsp;<select name="zdFeedMode" id="zdFeedMode"><option value="0" selected="selected">'+zdui.getLabel("once")+'</option><option value="1" >'+zdui.getLabel("repeat")+'</option></select>' +
		'&nbsp;<select name="zdHerdCollect" id="zdHerdCollect"><option value="0" selected="selected">Herdbonus x6</option><option value="100" >super x100</option><option value="250" >super x250</option><option value="500" >super x500</option><option value="750" >super x750</option><option value="1000" >super x1000</option></select>' +
		'&nbsp;<select name="zdFeedByGroup" id="zdFeedByGroup"><option value="0" >All</option><option value="100" >100</option><option value="250" >250</option><option value="500" >500</option><option value="750" >750</option><option value="1000" selected="selected" >1000</option><option value="1500" >1500</option></select>' +
		'&nbsp;<input type="button" id="button4" onClick="zdNewFeedAllAnimals();" value="'+zdui.getLabel("button_go")+'" />' +
		'</div>' +
		'</form><p>' ;
	strHtml += '<h2>Juice collected : <span id="juiceCollected">0</span><br></h2>';
	strHtml += '<h2>Money collected : <span id="moneyCollected">0</span></h2>';
	strHtml += '</div>';
	zdFlyout(strHtml,'Feed');
}

/*
 * Animal training
 */
function zdNewTrainAnimal(){
	var objTrainAnimal = document.getElementById('zdTrainAnimal');
	var objTrainMode = document.getElementById('zdTrainMode');
	var intSelectedAnimal = objTrainAnimal.options[objTrainAnimal.selectedIndex].value;
	if(intSelectedAnimal == 9999){ //train All
		var arrTrain = [25,27,53,58,113,155,1222,1220,1221,1374];
		for(t=0;t<arrTrain.length;t++){
			if(objTrainMode.options[objTrainMode.selectedIndex].value > 0){
				setInterval('zdTrainingService('+arrTrain[t]+');', ((1000*60*5)+(10*1000)) );
			}
			zdTrainingService(arrTrain[t]);
		}
	}else{
		if(intSelectedAnimal == 0){
			// get animal if none selected
			intSelectedAnimal = prompt(zdui.getLabel("specify_animal_id_prompt"));
		}
		if(objTrainMode.options[objTrainMode.selectedIndex].value > 0){
			// set up repeat
			zdLogStatus(zdui.getLabel("status_training_training")+' '+zdGetAnimalForId(intSelectedAnimal)['name']+' #'+intSelectedAnimal+' '+zdui.getLabel("status_training_everyfiveminutes"));
			window.setInterval('zdTrainingService('+intSelectedAnimal+');', ((1000*60*5)+(10*1000)) ); // run every five minutes and ten seconds
		}
	zdTrainingService(intSelectedAnimal); // run once
	}
}

function zdTrainAll(){
	var objTrainMode = document.getElementById('zdTrainMode');
	var arrTrain = [25,27,53,58,113,155,1222,1220,1221,1374];
	for(t=0;t<arrTrain.length;t++){
		if(objTrainMode.options[objTrainMode.selectedIndex].value > 0){
			setInterval('zdTrainingService('+arrTrain[t]+');', ((1000*60*5)+(10*1000)) );
		}
		zdTrainingService(arrTrain[t]);
	}
}

function zdLoadTrainingData(){
	if(zdZooItems){
		zdLoadZooService(zdUserId);
		zdTrainAnimal.options.length=0;
		var o = document.createElement("option");
		o.value = 9999;
		o.text = 'ALL';
		zdTrainAnimal.appendChild(o);
		for(i=0;i<20000;i++){
			if(arrTrainingData[i]){
				var o = document.createElement("option");
				o.value = i;
				o.text = zdZooItems[i]["name"]+' - '+arrTrainingData[i]+'/6';
				zdTrainAnimal.appendChild(o);
			}
		}
		var o = document.createElement("option");
		o.value = 0;
		o.text = 'ById...';
		zdTrainAnimal.appendChild(o);
	}
}

function zdTrainingService( animalId){
	zdLogStatus(zdui.getLabel("status_training_training")+' '+zdGetAnimalForId(animalId)['name']+' #'+animalId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["event"] = 'train';
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	arrParameters["animalId"] = animalId;
	new Ajax.Request(
		zdTrainingServiceUrl, 
		{
			method: 'post',
						asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus(zdui.getLabel("status_training_trained")+' '+zdGetAnimalForId(animalId)['name']+' #'+animalId+'...');
				return;
			}
		}
	); 
}

/*
 * Gates
 */
function zdScheduleGateBooth(intSeconds) {
	window.setInterval('zdGateBoothService();', (1000*intSeconds) ); // run every intSeconds seconds
	zdGateBoothService(); // run for the first time
}

function zdGateXpService( islandId){
//	zdLogStatus(zdui.getLabel("status_gate_collectingxp")+' '+(islandId+1)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["withered"] = 1;
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	arrParameters["gateIsland"] = islandId;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus(zdui.getLabel("status_gate_collectedxp")+' '+(islandId+1)+'...');
				return;
			}
		}
	); 
}

function zdGateUpgradeService( islandId){
	zdLogStatus('Buying harvest for gate '+(islandId+1)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["flow"] = 2;
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	arrParameters["gateIsland"] = islandId;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Harvested gate '+(islandId+1)+' for 3WLP...');
				return;
			}
		}
	); 
}

function zdGateBoothService(){
	zdLogStatus(zdui.getLabel("status_booth_collecting"));
	var arrParameters = zdGetGenericParameters();
	arrParameters["withered"] = 1;
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	arrParameters["booth"] = 0;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus(zdui.getLabel("status_booth_collected")+' '+islandId+'...');
				return;
			}
		}
	); 
}

function zdVisitAllGates(){
	for(var g=0;g<zdIslands;g++) {
		zdWorkQueuePush('zdGateXpService('+g+')');
	}
	zdWorkQueueStart();
	return;
}

function zdUpgradeGate(){
	if(zdAjaxCallDelay < 5000){
		zdSetAjaxDelay( 5000 );
	}
	var islandId = (prompt('Which island (1-'+zdIslands+')?', '1'));
	var intAmount = (prompt('Harvest how many times?', '1'));
	for(var g=0;g<intAmount;g++) {
		zdWorkQueuePush('zdGateUpgradeService('+(islandId-1)+')');
	}
	zdWorkQueueStart();
	return;
}

/*
 * Visit all friend's zoos
 */
var zdVisitZooIterator = 0;
var zdVisitZooCash = 0;
var zdArrVisitZooFriendList = null;

function zdVisitZoo( zooOwnerId, intZooNumber){
	zdLoadZooService(zooOwnerId);
	zdVisitZooTreasureService(zooOwnerId, intZooNumber);
	return;
}

function zdVisitZooTreasureService( zooOwnerId, intZooNumber){ // PrizeClaimService
//	zdLogStatus('Preparing to visit '+intZooNumber+' zoos...');
	var arrParameters = zdGetGenericParameters();
//	arrParameters["treasureHunter"] = 1;
	arrParameters["scavengerHunt"] = 1;
	arrParameters["zooOwnerId"] = zooOwnerId;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
						asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdPrizeResponseData = eval( '('+transport.responseText+')' );
				if(parseInt(zdPrizeResponseData["return_data"]["treasureHunt"]) > 0){
					zdLogStatus(zdui.getLabel("status_visiting_visited")+' '+zooOwnerId+' '+zdui.getLabel("status_visiting_zooandcollected")+' $'+zdPrizeResponseData["return_data"]["treasureHunt"]+'...');
					zdVisitZooCash += parseInt(zdPrizeResponseData["return_data"]["treasureHunt"]);
				}
				zdLogStatus(zdui.getLabel("status_visiting_totalcollected")+'('+intZooNumber+'): $'+zdVisitZooCash+'...');
				return;
			}
		}
	); 
}

function zdVisitAllZoosNew(intStartFrom,mode) { //mode: 0=treasure hunt only 1=visit and hunt
	if(!intStartFrom){
		intStartFrom = 0;
	}
	zdArrVisitZooFriendList = null;
	zdVisitZooIterator = 0;
	zdVisitZooCash = 0;
	if(zdArrVisitZooFriendList == null){
		// get friend list
		strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrVisitZooFriendList = eval( '('+strFriends+')' );
	}
	zdLogStatus(zdui.getLabel("status_visiting_visitingall")+' ' + zdArrVisitZooFriendList['return_data'].length + ' '+zdui.getLabel("status_visiting_ofyourfriendszoos"));
	for(var f=intStartFrom;f<zdArrVisitZooFriendList['return_data'].length;f++) {
		if(mode==0){
			zdVisitZooTreasureService(zdArrVisitZooFriendList['return_data'][f]['uid'],(f+1));
		}else{
		zdWorkQueuePush('zdVisitZoo('+zdArrVisitZooFriendList['return_data'][f]['uid']+','+(f+1)+')');
		}
	}
	zdWorkQueueStart();
	return;
}

function zdVisitListOfIds(){
		var friendId = (document.getElementById("zdSendGiftListId").value).split(",");
		zdLogStatus('Found '+friendId.length+' friendId(s)...');
		for(f=0;f<friendId.length;f++){
			if(isNaN(friendId[f])){
				var toFriendId = friendId[f].replace(/http(s)\:\/\/www.facebook.com\/profile.php\?id\=/g,"").replace(/http(s)\:\/\/www.facebook.com\//g,"");
				$.ajax({
					url: zdprotocol+'graph.facebook.com/'+toFriendId+'?fields=id',
					dataType: 'json',
					async: false,
					success: function(response) {
					toFriendId =response.id;
					}
				});
			}else{
				var toFriendId = friendId[f];
			}
		zdWorkQueuePush('zdVisitZoo('+toFriendId+','+(f+1)+')');
		}
		zdWorkQueueStart();
		return;
}

var zdArrFriendList = null;

function zdShowFriendList(){
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		var divItemList = document.getElementById('zdFriendListPH');
		divItemList.innerHTML = zdBuildFriendList(zdArrFriendList);
	}waitsec(500);lazyLoading();
	return;
}

function zdShowFriendList2(){
var strSearchCriteria = document.getElementById('zdFriendsCriteria').value.toLowerCase();
zdLogStatus('Searching ' +strSearchCriteria);
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 50){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList['success']){
		var i=-1;
		var zdArrFriendList2 = [];
		zdArrFriendList2['return_data'] =[];
		zdArrFriendList2['success'] =true;
		for(f=0;f<zdArrFriendList['return_data'].length;f++){
			if(zdArrFriendList['return_data'][f] != null && isNaN(strSearchCriteria)) {
				if(zdArrFriendList['return_data'][f]['name'].toLowerCase().indexOf( strSearchCriteria ) > -1){
				i++;
					zdArrFriendList2['return_data'][i]=zdArrFriendList['return_data'][f];
				}
			}else{
				if(zdArrFriendList['return_data'][f]['uid']== strSearchCriteria ){
				i++;
					zdArrFriendList2['return_data'][i]=zdArrFriendList['return_data'][f];
				}
			}
		}
	}
	if(zdArrFriendList != null){
		var divItemList = document.getElementById('zdFriendListPH');
		divItemList.innerHTML = zdBuildFriendList(zdArrFriendList2);
	}waitsec(500);lazyLoading();
	return;
}

function zdBuildFriendList(zdArrFriendList) {
	var strHtml = '';
	if(zdArrFriendList['success']){
		strHtml += '<div id="zdFriendList" style="height: 300px; width: 400px; overflow: scroll; background-color: #FFF;">';
		for(f=0;f<zdArrFriendList['return_data'].length;f++){
			if(zdArrFriendList['return_data'][f] != null) {
			strHtml += '<div style="clear: both; margin: 1px; border: 2px solid #999; padding: 2px; height: 70px;';
				if(zdArrFriendList['return_data'][f]['is_zoomate']){
					if(zdArrFriendList['return_data'][f]['sex'] == 'male'){
						strHtml += ' background-color: #EEF;';
					}else{
						strHtml += ' background-color: #FEE;';
					}
				}else{
					if(zdArrFriendList['return_data'][f]['sex'] == 'male'){
						strHtml += ' background-color: #AAC;';
					}else{
						strHtml += ' background-color: #CAA;';
					}
				}
				strHtml += '"><span style="float:right"><img class="lazy-loading" id="' + zdArrFriendList['return_data'][f]['pic_square'];
				strHtml += '" /><br>';
				
				if(zdArrFriendList['return_data'][f]["flevel"]){
					strHtml += '<span style="float:right">lvl '+zdArrFriendList['return_data'][f]["flevel"]+'</span>';
				}
				strHtml += '</span>';
				if(zdArrFriendList['return_data'][f]['is_zoomate']){
					strHtml += 'ZooMate: ';
				}
				if(zdArrFriendList['return_data'][f]['is_nonzoofriend']){
					strHtml += 'Recruit: ';
				}
				strHtml += zdArrFriendList['return_data'][f]['name'] + ' (Id: '+zdArrFriendList['return_data'][f]['uid']+')<br/>';
//				strHtml += '<a href="http://apps.facebook.com/'+zd_appurl+'/zoo/home.php?zooOwnerId='+zdArrFriendList['return_data'][f]['uid']+'" target="_blank">'+zdui.getLabel("friendlist_visitzoo")+'</a> / ';
//				strHtml += '<a href="javascript:zdFindInZoo('+zdArrFriendList['return_data'][f]['uid']+');">find animal</a> / ';
				strHtml += '<a href="http://www.facebook.com/profile.php?id='+zdArrFriendList['return_data'][f]['uid']+'" target="_blank">'+zdui.getLabel("friendlist_viewprofile")+'</a> / ';
				strHtml += '<a href="javascript:openMessageFlyout('+zdArrFriendList['return_data'][f]['uid']+');">message</a> / ';
				//strHtml += '<a href="http://www.facebook.com/profile.php?id='+zdArrFriendList['return_data'][f]['uid']+'&sk=app_playzoo" target="_blank">'+zdui.getLabel("friendlist_viewtmlzoo")+'</a> / ';
//				strHtml += '<a href="http://www.facebook.com/profile.php?id='+zdArrFriendList['return_data'][f]['uid']+'&sk=app_doittome" target="_blank">'+zdui.getLabel("friendlist_viewtmlhug")+'</a> / ';
				//strHtml += '<a href="http://www.facebook.com/profile.php?id='+zdArrFriendList['return_data'][f]['uid']+'&sk=app_zooworldclassic" target="_blank">'+zdui.getLabel("friendlist_viewtmlcla")+'</a> / ';
				if(!zdui.isLite){
					strHtml += '<a href="javascript:postTreasureToFriend('+zdArrFriendList['return_data'][f]['uid']+');">'+zdui.getLabel("friendlist_posttreasurechest")+'</a> / ';
					strHtml += '<a href="javascript:postMysteryChestToFriend('+zdArrFriendList['return_data'][f]['uid']+');">'+zdui.getLabel("friendlist_postmysterychest")+'</a> / ';
					strHtml += '<a href="javascript:zdSpawnVitaminService('+zdArrFriendList['return_data'][f]['uid']+');">'+zdui.getLabel("friendlist_sendvitamin")+'</a> / ';
					strHtml += '<a href="javascript:zdSendGift(null,'+zdArrFriendList['return_data'][f]['uid']+');">send gift</a> / ';
					strHtml += '<a href="javascript:zdSeasonal.addFriend('+zdArrFriendList['return_data'][f]['uid']+');">add to tree gift list</a>  / ';
//					strHtml += '<a href="javascript:zdLoadAndShakeAllFriends('+zdArrFriendList['return_data'][f]['uid']+');">shake trees</a> / ';
					strHtml += '<a href="javascript:zdLoadAndCheckIslands('+zdArrFriendList['return_data'][f]['uid']+');">missing list</a> ';
				}
				strHtml += '</div>';
			}
		}
		strHtml += '</div>';
	}else{
		strHtml += 'List empty ' + zdArrFriendList['return_data'];
		strHtml += '/ ' + zdArrFriendList['return_data'].length;
	}
	return strHtml;
}
//-------------------------------------
// show zoomate/non-zoomate lists

function zdFriendList(){
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Friends with Zoos</h2>';
		strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
		if(zdArrFriendList['success']){
			//Non-ZooMates 
			var numNonZM = 0;
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null) {
					if(!zdArrFriendList['return_data'][f]['is_nonzoofriend']) {	
						if(!zdArrFriendList['return_data'][f]['is_zoomate']){
							numNonZM++;
						}
					}
				}
			}
			strHtml += '<p><b>Non-Zoomates ('+numNonZM+')</b>'
			+ ' - <a href="javascript:zdZoomateInviteToAll();">Invite All</a><br>';
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null) {
					if(!zdArrFriendList['return_data'][f]['is_nonzoofriend']) {	
						if(!zdArrFriendList['return_data'][f]['is_zoomate']){
							strHtml += zdArrFriendList['return_data'][f]['name'] 
								+ ' - '+zdArrFriendList['return_data'][f]['uid']
								+ ' - <a href="javascript:zdZoomateInvite('+zdArrFriendList['return_data'][f]['uid']+');">Invite</a>';
							strHtml += '<br>';
						}
					}
				}
			}
			strHtml += '</p><br>';
			zdLogStatus('Found '+numNonZM+' Non-ZooMates');
			//ZooMates
			var numZM = 0;
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null) {
					if(zdArrFriendList['return_data'][f]['is_zoomate']){
						numZM++;
					}
				}
			}
			strHtml += '<p><b>Zoomates ('+numZM+')</b><br>';
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null) {
					if(zdArrFriendList['return_data'][f]['is_zoomate']){
						strHtml += zdArrFriendList['return_data'][f]['name'] 
							+ ' - '+zdArrFriendList['return_data'][f]['uid']
							+ '<br>';
					}
				}
			}
			strHtml += '</p>';
			zdLogStatus('Found '+numZM+' ZooMates');
		}
			strHtml += '</div>';
		zdFlyout(strHtml,'Friend List');
	}
}

function zdSortedFriendListByLevel(){
	var arrSortedFriends = [];
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Sorted Friends</h2>';
		strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
		if(zdArrFriendList['success']){
			var num = 0;
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null && zdArrFriendList['return_data'][f]["flevel"]) {
					level=zdArrFriendList['return_data'][f]["flevel"];
					if(arrSortedFriends[level]==undefined){
						zdLogStatus(arrSortedFriends[level]);
						arrSortedFriends[level]=[];
					}
					arrSortedFriends[level].push(zdArrFriendList['return_data'][f]['name']);
					num++;
				}
			}
			strHtml += '<p>';
			for(l in arrSortedFriends){
				for(f=0;f<arrSortedFriends[l].length;f++){
					if(arrSortedFriends[l][f]!=undefined){
						strHtml += arrSortedFriends[l][f]+', Level '+l;
						strHtml += '<br>';
					}
				}
			}
			strHtml += '</p><br>';
			zdLogStatus('Found '+num+' Friends');
		}
		strHtml += '</div>';
		zdFlyout(strHtml,'Friends by level');
	}
}
//-------------------------------------
 
/*
 * Zoo Shaking AJAX (unfinished)
 */
var zdShakeZooData = null;
var zdShakeZooLock = false;
var zdShakeZooShaken = 0;
var zdShakeZooValue = 0;
var zdShakeZooIslandId = 0;

function zdShakeZoo(zooOwnerId) {
	// deprecated
	if(zdShakeZooLock){
		// waiting and calling self
		zdLogStatus('Waiting to shake zoo '+zooOwnerId+' as it is still locked...');
		setTimeout('zdShakeZoo('+zooOwnerId+');',zdAjaxCallDelay*3); // visit next in half a second * 3, if not done with list
	}else{
		// get zoo
		var zooData = zdGetZoo();
		if(zooData.length < 10){
			zdLoadZooService(zooOwnerId);
			zooData = zdGetZoo();
		}
		zdShakeZooData = eval( '('+zooData+')' );
		zdLogStatus('Got '+(zdShakeZooData["return_data"]["islands"].length-1)+' islands...');
		zdShakeZooLock = true;
		zdShakeZooShaken = 0;
		zdShakeZooValue = 0;
		zdShakeZooIslandId = 0;
		zdShakeIslands(zooOwnerId, zdShakeZooIslandId);
	}
	return;
}

var zdShakeIslandData = null;
var zdShakeZooIslandLock = false;

function zdShakeIslands(zooOwnerId, islandId) {
	// deprecated
	if(zdShakeZooIslandLock){
		// waiting and calling self
		zdLogStatus('Waiting to shake island '+(islandId+1)+' for '+zooOwnerId+' as it is still locked...');
		setTimeout('zdShakeIslands('+zooOwnerId+', '+islandId+');',zdAjaxCallDelay*3); // try to next island in half a second * 3, if not done with list
	}else{
		if((islandId < 10) && (zdShakeZooData["return_data"]["islands"][islandId] != null)){
			// get island
			zdShakeZooIslandLock = true;
			// load island data
			zdLogStatus('Starting to shake island '+(islandId+1)+' for '+zooOwnerId+'...');
			zdShakeIslandData = null;
			zdLoadIsland(islandId, zooOwnerId, zd_fb_sig_user);
			zdTransformIsland( zdGetResponse() );
			zdShakeIslandData = eval( '('+zdGetResponse()+')' );
			// start iterating
			zdShakeIslandDataPos = 0;
			zdShakeIslandItems(); 
			// shake next island
			zdShakeIslands(zooOwnerId, islandId+1);
		}else{
			zdLogStatus('Done shaking islands for '+zooOwnerId+'...');
			zdShakeZooIslandId = 0;
			zdShakeZooLock = 0;
		}
	}
	return;
}

var zdShakeIslandDataPos = 0;

function zdShakeIslandItems(zooOwnerId) {
	// deprecated
	setTimeout('zdShakeIslandItems('+zooOwnerId+');',zdAjaxCallDelay); // try to next item in half a second
	zdLogStatus('Processing island items '+zdShakeIslandDataPos+' out of '+zdShakeIslandData["return_data"][zdShakeIslandDataPos].length); 
	if(zdShakeIslandDataPos < zdShakeIslandData["return_data"].length){
		// shake the item
		var objectId = 0;
		var typeId = 0;
		zdLogStatus('Island position '+zdShakeIslandDataPos+'...');
		while( (zdShakeIslandDataPos < zdShakeIslandData["return_data"].length) && (objectId == 0)){
			if(zdShakeIslandData["return_data"][zdShakeIslandDataPos].length == 3){
				typeId = zdShakeIslandData["return_data"][zdShakeIslandDataPos][0];
				objectId = zdShakeIslandData["return_data"][zdShakeIslandDataPos][1];
			}
			zdShakeIslandDataPos++;
		}
		zdTreeShakerService(zooOwnerId, objectId, typeId, zd_fb_sig_user);
		// wait for the next one
		zdShakeIslandDataPos++;
		setTimeout('zdShakeIslandItems('+zooOwnerId+');',zdAjaxCallDelay); // try to next item in half a second
	}else{
		// we're done with this island on items
		zdShakeIslandDataPos = 0;
		zdShakeZooIslandLock = false;
		zdLogStatus('Island complete...');
	}
	return;
}

function zdTreeShakerService( zooOwnerId, objectId, typeId, userId){
	if(objectId > 0){
		zdLogStatus(zdui.getLabel("status_shaking_shakingitem")+' '+objectId+' '+zdui.getLabel("status_shaking_oftype")+' '+typeId+' '+zdui.getLabel("status_shaking_forfriend")+' '+zooOwnerId+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zooOwnerId;
		arrParameters["typeId"] = typeId;
		arrParameters["objectId"] = objectId;
		new Ajax.Request(
			zdTreeShakingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					return;
				}
			}
		); 
	}else{
		zdLogStatus(zdui.getLabel("status_shaking_notshakingitem")+' '+objectId+' '+zdui.getLabel("status_shaking_oftype")+' '+typeId+' '+zdui.getLabel("status_shaking_forfriend")+' '+zooOwnerId+'...');
	}
}

function zdLoadIsland(islandId, zooOwnerId, userId) {
	islandId = islandId-0;
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+' '+zdui.getLabel("status_island_for")+' '+zooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdTransformIsland( strIsland){
	// make the island data into a regular array - easier to work with
	var strNewIsland = strIsland.replace(/,0/g,"");
	strNewIsland = strNewIsland.replace(/\"return_data\"\:\{/g,'"return_data":[');
	strNewIsland = strNewIsland.replace(/\},\"error_code\"/g,'],"error_code"');
	strNewIsland = strNewIsland.replace(/\{\"\-?\d+\"\:/g,"");
	strNewIsland = strNewIsland.replace(/\"\-?\d+\"\:/g,"");
	strNewIsland = strNewIsland.replace(/\"\"\:\{/g,"");
	strNewIsland = strNewIsland.replace(/\"\"\:/g,"");
	strNewIsland = strNewIsland.replace(/\]\}/g,"]");
	zdSetResponse(strNewIsland);
	return strNewIsland;
}

function zdFormatCoords( strIsland){
	// make the island data into a regular array - easier to work with
	var strNewIsland = strIsland.replace(/,0/g,"");
	strNewIsland = strNewIsland.replace(/\"return_data\"\:\{/g,'"return_data":[');
	strNewIsland = strNewIsland.replace(/\},\"error_code\"/g,'],"error_code"');
	strNewIsland = strNewIsland.replace(/\{\"\-?(\d+)\"\:/g,"[$1");
	strNewIsland = strNewIsland.replace(/\"\-?(\d+)\"\:/g,"$1");
	strNewIsland = strNewIsland.replace(/\"\"\:\{/g,"");
	strNewIsland = strNewIsland.replace(/\"\"\:/g,"");
	strNewIsland = strNewIsland.replace(/\]\}/g,"]]");
	zdSetResponse(strNewIsland);
	return strNewIsland;
}

function zdMoveIsland(fromislandId,toislandId) {
	if(fromislandId==null){
		var fromislandId = parseInt(document.getElementById('zdFromislandId').value);
	}
	if(toislandId==null){
		var toislandId = parseInt(document.getElementById('zdToislandId').value);
	}
	zdLoadZooService(zd_fb_sig_user);
	zooData = zdGetZoo();
	var zdZooData = eval( '('+zooData+')' );
	zdmapId = zdZooData["return_data"]["islands"][(fromislandId+1)]["mapId"];
	zdLogStatus(zdmapId);
	zdMoveMap(zdmapId,toislandId);
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(fromislandId+1)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zd_fb_sig_user;
	arrParameters["islandId"] = fromislandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strIslandData = zdFormatCoords( zdGetResponse() );				
				var zdIslandData = eval( '('+transport.responseText+')' );
				for(yd=-200;yd<=200;yd++){
					if(zdIslandData["return_data"][yd] ){
						for(xd=-200;xd<=200;xd++){
							if(zdIslandData["return_data"][yd][xd] ){
								itemId=zdIslandData["return_data"][yd][xd][0];
								if(zdZooItems[itemId] != null){
									if(zdZooItems[itemId]['rarity'] ){
										objectId=itemId;
									}else{
										objectId=zdIslandData["return_data"][yd][xd][1];
									}
									x=xd+7;
									y=yd+8;
									//	zdLogStatus(itemId+','+objectId+','+x+','+y);
									zdWorkQueuePush('zdMoveZooItem('+x+','+y+','+itemId+','+objectId+','+(toislandId+1)+');');
								}else{
									var warning = confirm(itemId+' not in the item list - cannot be moved!\nProceed?');
									zdLogStatus(itemId+' not in the item list - cannot be moved!');
									if(warning==false){
										zdLogStatus('Cleaning up...');
										zdMoveMap(zdmapId,fromislandId);
										zdLogStatus('Exiting Move Island...');
										xd=200;
										yd=200;
										zdWorkQueueClear();
									}
								}
							}
						}
					}
				}
				zdWorkQueueStart();
			}
		}
	);
}

function zdLoadAndShakeMyIslands(boolWLP) {
	for(i=0;i<zdIslands;i++){
		zdWorkQueuePush( 'zdLoadAndShakeMyIsland('+i+','+boolWLP+');' );
	}
	zdWorkQueuePush( 'zdLoadAndShakeMyInventory('+boolWLP+');' );
	zdWorkQueueStart();
	return;
}

function zdLoadAndShakeMyIsland(islandId,boolWLP) {
	return zdLoadAndShakeIsland(islandId,zd_fb_sig_user,boolWLP);
}

var arrShakeable = [213,214,216,217,218,219,240,242,243,244,255,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,340,366,373,374,375,376,377,378,379,380,381,382,383,384,385,386,412,420,421,423,424,474,475,478,501,504,505,506,555,556,557,558,604,708,709,739,847,848,890,891,892,990,1725,1726,1727,2311,9941,10024,10765,10862,10967,11065,11127,11222,11317,11389,11411,11512,11597,11623,11640,11775,11787,11841,11870,11916,12011,12213,12242,12255,12325,12341,12383,12584,12593,12601,12685,12701,12728,12788,12808,12898,12927,12949,12995,13017,13045,13080,13102,13114,13132,13192,13208,13223,13256,13287,13311,13329,13354,13372,13403,13435,13449,13470,13502,13522,13545,13573,13603,13626,13644,13665,13687,13719,13744,13765,13787,13827,13831,13866,13902,13923,13934,13953,13979,14014,14023,14044,14072,14108,14129,14136,14170,14188,14220,14235,14264,14280,14323,14328,14344,14372,14423,14430,14437,14460,14491,14533,14546,14564,14588,14631,14641,14653,14687,14726,14738,14744,14784,14794,14827,14849,14865,14892,14926,14942,14955,14989,15033,15035,15050,15079,15121,15133,15154,15170,15198,15237,15252,15268,15289,15303,15341,15353,15383,15397,15446,15458,15489,15504,15536,15557,15572,15593,15637,15647,15667,15698,15739,15748,15756,15781,15828,15851,15853,15881,15925,15939,15953,15973,15997,16043,16050,16070,16099,16132,16156,16168,16175,16230,16244,16265,16271,16325,16344,16361,16370,16431,16445,16449,16465,16489,16544,16570,16571,16606,16657,16659,16679,16686,16756,16772,16800,16849,16871,16877,16889,16955,16969,16972,16990];

function zdLoadAndShakeIsland(islandId,zooOwnerId,boolWLP) {
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+' '+zdui.getLabel("status_island_for")+' '+zooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strTransformed = zdTransformIsland( zdGetResponse() );
				var zdShakeItemData = eval( '('+strTransformed+')' );
				zdLogStatus('Have '+zdShakeItemData["return_data"].length+' items on island...');
				var forceWLP = boolWLP;
				var strItems = '[';
				var intSeqNum = 0;
				for(i=0;i<zdShakeItemData["return_data"].length;i++){
					if(zdShakeItemData["return_data"][i].length >= 3){
						if(zdZooItems[zdShakeItemData["return_data"][i][0]] != null){
						// item is a show or rose garden
							if(
								(zdShakeItemData["return_data"][i][0] == 391) // Birds of Prey Show
								|| (zdShakeItemData["return_data"][i][0] == 405) // Killer Whale Show
								|| (zdShakeItemData["return_data"][i][0] == 572) // Rose Garden
							) { 
								zdWorkQueuePush( 'zdShowCollect( '+zdShakeItemData["return_data"][i][0]+', '+zdShakeItemData["return_data"][i][1]+' );' );
							// item is a greenhouse
							} else if(
								(zdShakeItemData["return_data"][i][0] == 556) // Bronze greenhouse
								|| (zdShakeItemData["return_data"][i][0] == 557) // Silver greenhouse
								|| (zdShakeItemData["return_data"][i][0] == 558) // Gold greenhouse
							) { 
								zdWorkQueuePush( 'zdShakeGreenHouse( '+zdShakeItemData["return_data"][i][0]+', '+zdShakeItemData["return_data"][i][1]+', '+islandId+' );' );
							// item is a tree/mushroom/flower/topiary/sculpture
							}else{
								if( arrShakeable.has(zdShakeItemData["return_data"][i][0]) ){
									if(intSeqNum>0) {
									strItems += ',';
									}
									intSeqNum++;
									strItems += '['+zdShakeItemData["return_data"][i][0]+',"'+zdShakeItemData["return_data"][i][1]+'",false,'+intSeqNum+']';
								}
							}
						}
					}
				}
				strItems += ']';
				// zdLogStatus('Shake list '+strItems+'...');
				zdWorkQueuePush( 'zdCummulativeShaker(\''+strItems+'\','+zooOwnerId+');' );
				// zdCummulativeShaker(strItems,zooOwnerId);
				zdWorkQueueStart();
				return;
			}
		}
	); 
}

function zdNewShakeAllFriends(){
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		zdClearLogOnInterval(1);
		for(f=0;f<zdArrFriendList['return_data'].length;f++){
			if(!zdArrFriendList['return_data'][f]['is_nonzoofriend']){
				zdWorkQueuePush( 'zdLoadAndShakeAllFriends2('+zdArrFriendList['return_data'][f]['uid']+');');
			}
		}zdSetAjaxDelay(10000);zdWorkQueueStart();
	}
}

function zdLoadAndShakeAllFriends(zooOwnerId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	new Ajax.Request(
		zdLoadZooServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrZooFriendData = eval( '('+transport.responseText+')' );
				var zdMaxIslands = (arrZooFriendData["return_data"]["itemList"]["islandId"] + 1);
				for(f=0;f<zdMaxIslands;f++){  //for 24 Islands
					zdWorkQueuePush( 'zdLoadAndShakeFriends('+f+','+zooOwnerId+');');
				}
			}
		}
	);
zdWorkQueueStart();
}

function zdLoadAndShakeFriends(islandId,zooOwnerId) {
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+' '+zdui.getLabel("status_island_for")+' '+zooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strTransformed = zdTransformIsland( zdGetResponse() );
				var zdShakeItemData = eval( '('+strTransformed+')' );
				//zdLogStatus(''+zdShakeItemData["return_data"].length+' items on friend island...');
				var strItems = '[';
				var intSeqNum = 0;
				for(i=0;i<zdShakeItemData["return_data"].length;i++){
					if(zdShakeItemData["return_data"][i].length >= 3){
						if(zdZooItems[zdShakeItemData["return_data"][i][0]] != null){
						// item is a greenhouse
							if(
								(zdShakeItemData["return_data"][i][0] == 556) // Bronze greenhouse
								|| (zdShakeItemData["return_data"][i][0] == 557) // Silver greenhouse
								|| (zdShakeItemData["return_data"][i][0] == 558) // Gold greenhouse
							) { 
								zdWorkQueuePush( 'zdShakeFriendsGreenHouse( '+zdShakeItemData["return_data"][i][0]+', '+zdShakeItemData["return_data"][i][1]+', '+islandId+','+zooOwnerId+' );' );
							// item is a tree/mushroom/flower/topiary/sculpture
							}else{
								if( arrShakeable.has(zdShakeItemData["return_data"][i][0]) ){
									if(intSeqNum>0) {
										strItems += ',';
									}
									intSeqNum++;
									strItems += '['+zdShakeItemData["return_data"][i][0]+',"'+zdShakeItemData["return_data"][i][1]+'",false,'+intSeqNum+']';
								}
							}
						}
					}
				}
				strItems += ']';
				// zdLogStatus('Shake list '+strItems+'...');
				zdWorkQueuePush( 'zdCummulativeFriendShaker(\''+strItems+'\','+zooOwnerId+');' );
				// zdCummulativeShaker(strItems,zooOwnerId);
				zdWorkQueueStart();
				return;
			}
		}
	); 
}

function zdShakeFriendsGreenHouse(containerTypeId,containerId,islandId,zooOwnerId) {
	// TO BE TRANSLATED
	zdLogStatus('Shaking '+zdGetAnimalForId(containerTypeId)['name']+' #'+containerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["userId"] = zd_fb_sig_user;
	arrParameters["friendid"] = zooOwnerId;
	arrParameters["islandId"] = islandId;
	arrParameters["containerTypeId"] = containerTypeId;
	arrParameters["containerId"] = containerId;
	arrParameters["type"] = "shake";
	arrParameters["zooOwnerId"] = zooOwnerId;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Shaken '+zdGetAnimalForId(containerTypeId)['name']+' #'+containerId+'...');
				return;
			}
		}
	); 
}

function zdCummulativeFriendShaker(strItems,zooOwnerId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["zooOwnerId"] = zooOwnerId;
//	arrParameters["numMaizeRewarded"] = 10; // collect maize if we can
	arrParameters["items"] = strItems;
	if(strItems != "\[\]" ){
		zdLogStatus(zdui.getLabel("status_shaking_shaking")+'...');
		new Ajax.Request(
			zdCumulativeShakingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var content = transport.responseText;
					var pattern1 = /cashEarned\"\:\d+/;
					var zdResultShook = content.match(pattern1);
					var pattern2 = /\d+/;
					var zdResultShook2 = zdResultShook[0].match(pattern2);
					zdLogStatus(''+zdui.getLabel("status_shaking_shookitems")+'$'+zdResultShook2+' earned');
					zdShakeResults=eval( '('+transport.responseText+')' );
					
					return;
				},
				onFailure : function(transport){
					zdSetResponse(transport.responseText);
					zdLogStatus(zdui.getLabel("status_shaking_shookitemsfailed"));
					return;
				}
			}
		); 
	}
}

function zdLoadAndShakeAllFriends2(zooOwnerId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	new Ajax.Request(
		zdLoadZooServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrZooFriendData = eval( '('+transport.responseText+')' );
				var zdMaxIslands = (arrZooFriendData["return_data"]["itemList"]["islandId"] + 1);
				for(f=0;f<zdMaxIslands;f++){  //for 24 Islands
 					zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(f+1)+' '+zdui.getLabel("status_island_for")+' '+zooOwnerId+'...');
					var arrParameters = zdGetGenericParameters();
					arrParameters["friendId"] = zooOwnerId;
					arrParameters["islandId"] = f;
					new Ajax.Request(
						zdLoadIslandServiceUrl, 
						{
							method: 'post',
							asynchronous: true,
							parameters: arrParameters,
							onSuccess : function(transport){
								zdSetResponse(transport.responseText);
								var strTransformed = zdTransformIsland( zdGetResponse() );
								var zdShakeItemData = eval( '('+strTransformed+')' );
								//zdLogStatus(''+zdShakeItemData["return_data"].length+' items on friend island...');
								var strItems = '[';
								var intSeqNum = 0;
								for(i=0;i<zdShakeItemData["return_data"].length;i++){
									if(zdShakeItemData["return_data"][i].length >= 3){
										if(zdZooItems[zdShakeItemData["return_data"][i][0]] != null){
											// item is a greenhouse
											if(
												(zdShakeItemData["return_data"][i][0] == 556) // Bronze greenhouse
												|| (zdShakeItemData["return_data"][i][0] == 557) // Silver greenhouse
												|| (zdShakeItemData["return_data"][i][0] == 558) // Gold greenhouse
											) { 
												zdShakeFriendsGreenHouse(zdShakeItemData["return_data"][i][0],zdShakeItemData["return_data"][i][1],f,zooOwnerId);
												// item is a tree/mushroom/flower/topiary/sculpture
											}else{
												if( arrShakeable.has(zdShakeItemData["return_data"][i][0]) ){
													if(intSeqNum>0) {
														strItems += ',';
													}
													intSeqNum++;
													strItems += '['+zdShakeItemData["return_data"][i][0]+',"'+zdShakeItemData["return_data"][i][1]+'",false,'+intSeqNum+']';
												}
											}
										}
									}
								}
								strItems += ']';
								// zdLogStatus('Shake list '+strItems+'...');
								zdCummulativeFriendShaker(strItems,zooOwnerId);
								// zdCummulativeShaker(strItems,zooOwnerId);
								return;
							}
						}
					); 
				}
			}
		}
	);
}

function zdLoadAndShakeMyInventory(boolWLP) {
	zdLogStatus(zdui.getLabel("status_inventory_loading")+' '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdLoadInventoryServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				// zdLogStatus('Making into an array...');
				var arrInventoryData = eval( '('+transport.responseText+')' );
				var intMaxItemsInList = 500;
				var arrCummulativeLists = new Array();
				var strCurrentList = '[';
				var intNumCurrentItems = 0;
				var t = 0;
				// zdLogStatus('Initialized and about to iterate...');
				// iterate through inventory/item list
				for(i in arrInventoryData["return_data"]){
					var itemId=i;
					// zdLogStatus('Looping #'+i+'...');
					// item exists in item list and inventory
					if(itemId != undefined){ 
						// item is a show or rose garden
						if(
							(i == 391) // Birds of Prey Show
							|| (i == 405) // Killer Whale Show
							|| (i == 572) // Rose Garden
						) { 
							for(j=1;j<arrInventoryData["return_data"][i].length;j++){
								zdWorkQueuePush( 'zdShowCollect( '+i+', '+arrInventoryData["return_data"][i][j][0]+' );' );
							}
							// item is a shakeable tree/mushroom/flower/topiary/sculpture
						} else if((i == 556) // Bronze 
							|| (i == 557) // Silver 
							|| (i == 558) // Gold 
						){
							for(j=1;j<arrInventoryData["return_data"][i].length;j++){
								zdWorkQueuePush( 'zdShakeGreenHouse( '+i+', '+arrInventoryData["return_data"][i][j][0]+',0 );' );
							}
						}else if(arrShakeable.has(Number(itemId))){
							var count=0;
							for(j=1;j<arrInventoryData["return_data"][i].length;j++){
								count++;
							}zdLogStatus('You have '+count+' #'+i+' not shakeable in inventory...');
						}else{
								//zdLogStatus(i+' is not a shakeable tree...');
						}
					} 
				}
				if(intNumCurrentItems > 0){
					// any remaining items
					strCurrentList += ']';
					zdLogStatus(zdui.getLabel("status_inventory_queuing")+' '+intNumCurrentItems+' '+zdui.getLabel("status_inventory_forshaking"));
					// zdLogStatus(zdui.getLabel("status_inventory_queuing")+' '+strCurrentList+' '+zdui.getLabel("status_inventory_forshaking"));
					zdWorkQueuePush( 'zdCummulativeShaker(\''+strCurrentList+'\','+zd_fb_sig_user+');' );
				}
				zdWorkQueueStart();
				return;
			}
		}
	);
}

function zdCummulativeShaker(strItems,zooOwnerId) {
	zdLogStatus(zdui.getLabel("status_shaking_shaking")+' ('+strItems+') '+zdui.getLabel("status_shaking_for")+' '+zooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["zooOwnerId"] = zooOwnerId;
//	arrParameters["numMaizeRewarded"] = 10; // collect maize if we can
	arrParameters["items"] = strItems;
	new Ajax.Request(
		zdCumulativeShakingServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus(zdui.getLabel("status_shaking_shookitems"));
				zdShakeResults=eval( '('+transport.responseText+')' );
				zdLogStatus('WLP = '+zdShakeResults["return_data"]["wildlifePoint"]);
				return;
			},
			onFailure : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus(zdui.getLabel("status_shaking_shookitemsfailed"));
				return;
			}
		}
	); 
}

function zdMoveMap( typeId, islandId) {
	zdLogStatus(zdui.getLabel("status_moving_moving")+' '+zdGetAnimalForId(typeId)['name']+' '+zdui.getLabel("status_moving_toisland")+' '+(islandId+1)+'.');
	var arrParameters = zdGetGenericParameters();
	arrParameters["item_mode"] = "modify";
	arrParameters["typeId"] = typeId;
	arrParameters["islandIdx"] = islandId;
	arrParameters["userId"] = zdUserId;
	new Ajax.Request(
		zdZooItemServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdMoveZooItem(x, y, typeId, objectId, islandObjId) {
	if(islandObjId == 9999){
		zdLogStatus(zdui.getLabel("status_moving_moving")+' '+zdGetAnimalForId(typeId)['name']+' ('+objectId+') '+zdui.getLabel("status_moving_toinventory")+'.');
	}else{
		zdLogStatus(zdui.getLabel("status_moving_moving")+' '+zdGetAnimalForId(typeId)['name']+' ('+objectId+') '+zdui.getLabel("status_moving_toisland")+' '+(islandObjId)+'.');
	}
	var arrParameters = zdGetGenericParameters();
	arrParameters["item_mode"] = "modify";
	arrParameters["x"] = x;
	arrParameters["y"] = y;
	arrParameters["typeId"] = typeId;
	arrParameters["objectId"] = objectId;
	arrParameters["islandObjId"] = islandObjId;
	arrParameters["userId"] = zdUserId;
	new Ajax.Request(
		zdZooItemServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdShakeZooOld(zooOwnerId) {
	zooData = zdGetZoo();
	if(zooOwnerId!=zdUserId) {
		var numTrees = 0, numTreeValue = 0;
		if(zooData.length < 10){
			zdLogStatus('Zoo not loaded...');
			return;
		}
		zdZooData = eval( '('+zooData+')' );
		for(i=0;i<zdZooData['return_data']['itemList'].length;i++) {
			if(zdZooData['return_data']['itemList'][i]['name'].indexOf('tree') > -1){
				numTrees++;
				numTreeValue += zdZooData['return_data']['itemList'][i]['cash'];
				zdTreeShakerService(zooOwnerId, zdZooData['return_data']['itemList'][i]['objectId'], zdZooData['return_data']['itemList'][i]['typeid'], zdUserId );
				zdLogStatus( "Shaken " + numTrees + " trees of " + zdZooData['return_data']['itemList'].length + ' in ' + zdZooData['return_data']['zooOwnerName']+"'s Zoo." );
			} 
		}
		zdLogStatus( "Shaken " + numTrees + " trees on " + zdZooData['return_data']['zooOwnerName']+"'s Zoo. (estimated value " + numTreeValue + ")" );
	}else{
		zdLogStatus( "Not shaking own Zoo." );
	}
	return;
}

function zdShakeAllZoosOld(){
	zdLogStatus('Shaking trees in all Zoos...');
	strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	zdZooFriends = eval( '('+strFriends+')' );
	for(f=0;f<zdZooFriends['return_data'].length;f++){
		zdLoadZooService(zdZooFriends['return_data'][f]['uid']);
		zdShakeZoo(zdZooFriends['return_data'][f]['uid']);
	}
	return;
}

function zdMysteryGiftFound(){
	giftID = 0;
	var dataUrl = "ajax_mysteryGift.php";
	RY.service({
		url: dataUrl,
		data: {
			"userId": PageData.player.uid,
			"parentAppId": PageData.app.id
		},
		success: function(d) {
			var actionUrl  = d.actionUrl;
			var userName   = PageData.player.name;
			var storyBody  = userName + " found a mystery gift box during a treasure hunt!  There could be a valuable rare item in this gift box!";
			var storyTitle = userName + " has a mystery gift to share with friends!";
			// this is the list of images that can be shown under 'see more'
			var imgUrlArray = [
				"http://cdn.rockyou.com/apps/zoo/shop/75_oakTree.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_redOakTree.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_StoneSculpture_Frog.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_StoneSculpture_Monkey.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_heartTree.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_birdBath.gif",
				"http://cdn.rockyou.com/apps/zoo/shop/75_bigCampfire.gif"
			];
			shuffle(imgUrlArray);
			var action_links = [{"text":"Claim the Mystery Gift!", "href":actionUrl}];
			var attachment = {"name": storyTitle, "href":actionUrl, "description":storyBody,
				"media":[
					{"type":"image","src":"http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif","href":actionUrl},   // gift box picture always there
					{"type":"image","src":imgUrlArray[0],"href":actionUrl},// 4 possible prizes
					{"type":"image","src":imgUrlArray[1],"href":actionUrl},
					{"type":"image","src":imgUrlArray[2],"href":actionUrl},
					{"type":"image","src":imgUrlArray[3],"href":actionUrl}
				]
			};
			// populate form
			/*
			FBPUBLISH.promptUser(attachment, action_links, null, function(published) {
				var pName = null;
				if(published) {
					RY.track({name: "fb-zoo-feed-mysterygift-story-publish", value: pName});
				}else{
					RY.track({name: "fb-zoo-feed-mysterygift-skip-publish", value: pName});
				}
			}
			);
			*/
		}
	});
}

function zdMysteryGiftPublish(){
	var actionText = "Claim the Mystery Gift!";
	var actionUrl = 'http://apps.facebook.com/'+zd_appurl+'/zoo/home.php?user_referrID=100000677379568&referType=5&claimTypeId=2300&claimUserId=100000677379568&claimTime=1282801841&&claimHash=58c5e6cfb7c1cb08a609ac4cee7dcde1&_ryfbe=fb-zoo-feed-mysterygift-click&ref=nf';
	var storyTitle = 'Daniel has a mice story gift to share with friends!';
	var storyBody = 'Daniel found a mice story gift box during a treasure hunt! There could be a valuable rare item in this gift box!';
	var imageUrl = "http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif";
	var action_links = [{"text":actionText, "href":actionUrl}];
	var attachment = {"name": storyTitle, "href":actionUrl, "description":storyBody,
		"media":[
			{"type":"image","src":imageUrl,"href":actionUrl},   // gift box picture always there
			{"type":"image","src":imgUrlArray[0],"href":actionUrl},// 4 possible prizes
			{"type":"image","src":imgUrlArray[1],"href":actionUrl},
			{"type":"image","src":imgUrlArray[2],"href":actionUrl},
			{"type":"image","src":imgUrlArray[3],"href":actionUrl}
		]
	};
	FBPUBLISH.promptUser(attachment, action_links, null,
		function(published) {
			// we don't need to track :)
			if(published) {
				zdLogStatus( "Wall post published." );
			}else{
				zdLogStatus( "Wall post not published." );
			}
		}
	);
	return;
}

function zdRockYouWallPostPublish( actionUrl, actionText, storyTitle, storyBody, imageUrl){
	var action_links = [{
		"text":actionText, 
		"href":actionUrl
	}];
	var attachment = {
		"name":storyTitle,
		"href":actionUrl, 
		"description":storyBody,
		"media":[
			{"type":"image","src":imageUrl,"href":actionUrl}
		]
	};
	FBPUBLISH.promptUser(
		attachment,
		action_links,
		null,
		function(published) {
			// we don't need to track :)
			if(published) {
				zdLogStatus( "Wall post published." );
				// RY.track({name: "fb-zoo-feed-mysterygift-story-publish", value: pName});
			}else{
				zdLogStatus( "Wall post not published." );
				// RY.track({name: "fb-zoo-feed-mysterygift-skip-publish", value: pName});
			}
		}
	);
	return;
}
/*
function zdPlayBringIt(){
	var strUrl = 'http://webapp.bringit.com/webapp/?host=zooworld&game=zooblitz&playerId=' + zd_fb_sig_user +
	'&ry_sig_agent=' + escape(navigator.userAgent) + 
	'&ry_sig_exp='+zd_fb_sig_expires+'&ry_sig_ip=127.0.0.1' + 
	'&ry_sig_partner=29&ry_sig_uid=' + zd_fb_sig_user + 
	'&ry_sig=' + zd_fb_sig;
	window.open( strUrl+'#zd_bringit', '_blank' );
	return;
}
*/
/*
function zdUnframeZoo(){
	var arrParameters = zdGetGenericParameters();
	var zdNewZooiframeUrl = (location.href);
		new Ajax.Request(
		zdNewZooiframeUrl, 
		{
			method: 'post',
						asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
						zdSetResponse(transport.responseText);
						var strUrl = zdUnframedUrl+'?url=' + escape(location.href);
						strUrl += '&fb_sig_in_iframe=1&fb_sig_base_domain='+zd_fb_sig_base_domain;
						strUrl += '&fb_sig_locale='+zd_fb_sig_locale+'&fb_sig_in_new_facebook=1';
						strUrl += '&fb_sig_time='+zd_fb_sig_time+'&fb_sig_added=1';
						strUrl += '&fb_sig_profile_update_time='+zd_fb_sig_profile_update_time+'&fb_sig_expires='+zd_fb_sig_expires;
						strUrl += '&fb_sig_user='+zd_fb_sig_user+'&fb_sig_session_key='+zd_fb_sig_session_key;
						strUrl += '&fb_sig_ss='+zd_fb_sig_ss+'&fb_sig_cookie_sig='+zd_fb_sig_cookie_sig;
						strUrl += '&fb_sig_ext_perms='+zd_fb_sig_ext_perms;
						strUrl += '&fb_sig_country='+zd_fb_sig_country+'&fb_sig_api_key='+zd_fb_sig_api_key+'&fb_sig_app_id='+zd_fb_sig_app_id+'&fb_sig='+zd_fb_sig+'';
						window.open( strUrl+'#zd_unframed', '_top' );
			}
				}
	);
}
*/
/*
function zdWorkaroundZoo(){
	var strSearch = (location.search).replace("?","");
	var strUrl = zdWorkaroundUrl+'?outerframe=%2Ffacebook_apps%2Fzooparent%2Fzoo%2Fhome.php%3Ffb_force_mode%3Dfbml&dev=0&CXNID=1000017.0NXC&' + strSearch;
	window.open( strUrl+'#zd_workaround', '_top' );
	return;
}
*/
function zdDummyTrack(parameter) {
	// Wah! Thanks for playing.
	return;
}

function zdSpawnAdoption( itemId){
var adoptName=zdGetAnimalForId(itemId)['name'];
	if(zdZooAdoptItems[itemId]){
		zdShowGiftFeedFBDialog(  //
			itemId, // animalId,
			adoptName, // animalName,
			zdGetNewImgPath( itemId, 'smallImg' ), // animalImg,
			zdZooAdoptItems[itemId][0], // s,
			zdGetAdoptStoryTitle(zdZooAdoptItems[itemId][2],adoptName), // story_title,
			zdGetAdoptStoryBody(zdZooAdoptItems[itemId][2],adoptName), // story_body,
			zdGetAdoptActionTitle(zdZooAdoptItems[itemId][2],zdZooAdoptItems[itemId][1]), // action_title,
			zdZooAdoptItems[itemId][2], // itemQ1,
			zdGetAdoptEventType(zdZooAdoptItems[itemId][2]), // event type,
			zdZooAdoptItems[itemId][3], // itemQ2,
			zdGetAnimalForId(itemId)['key'], // item short name,
			0, // itemQ3,
			'feedDlgPrompt' // source 
		);
	}
	return;
}

// adapted Rock You adoption functions
function zdShowGiftFeedFBDialogCommon(animalId, animalName, animalImg, s, story_title, story_body, action_title, story_id, event_type, level, animal_key, ignoreTxt,elemId, trackingInfo, claimsParameter) {
	var ignoreTagGlbl="";
	var ignoreTag = "";
	if(ignoreTxt == 1){
		ignoreTag = "-ignoreanimal";
		ignoreTagGlbl = "-ignoreanimal";
	}
	elemId=elemId || "feedDlgPrompt";
	var firstStage=elemId=="feedDlgPrompt";
	var storyUrl = "http://apps.facebook.com/"+zd_appurl+"/zoo/home.php?user_referrID="+zd_fb_sig_user+"&feedParentApp="+zd_appname+"&referType=5&giftingUserName="+escape(PageData.player.name)+"&giftingUser="+zd_fb_sig_user+"&_ryfbe=fb-zoo-feed-gift-click&_ryfbeval=payinguser";
	if(event_type == "") {
		event_type = "unknown";
	}
	storyUrl = storyUrl.replace("fb-zoo-feed-gift-click", trackingInfo);
	storyUrl = storyUrl + "&giftedAnimalId=" + animalId + "&s=" + s + "&storyId=" + story_id + "&level=" + level + claimsParameter;
	story_title = story_title.replace(new RegExp("USER", "gi"), PageData.player.first_name); //
	story_title = story_title.replace(new RegExp("PRONOUN", "gi"), PageData.player.pronoun); //
	story_title = story_title.replace(new RegExp("STORYURL", "gi"), animalName );
	story_body = story_body.replace(new RegExp("USER", "gi"), PageData.player.first_name); //
	var actionUrl = storyUrl;
	var attachment = {"name": story_title, "href":actionUrl, "description":story_body,
		"media":[{"type":"image","src":animalImg,"href":actionUrl}]};
	var action_links = [{"text":action_title, "href":actionUrl}];
	FBPUBLISH.promptUser(attachment, action_links, null, zdDummyTrack); //
}

function zdShowGiftFeedFBDialog(
	animalId, animalName, animalImg, s, story_title, story_body,
	action_title, story_id, event_type, level, animal_key, ignoreTxt
	) {
	var feedRescueTag;
	var feedRescueTag3;
	var rescueStage = "stage-1"; //
//	var rescueStage = "subsequent"; //
	var firstTimeRescuePop = true;
	var feedGiftedAnimal;
	var trackingCode = "fb-zoo-feed-gift-feed-dialog-prompt";
	feedRescueTag3 = "fb-zoo-feed-rescue-stage-"+level+"-";
	trackingCode = "fb-zoo-feed-rescue-"+level+"-dialog-prompt";
	feedRescueTag = "fb-zoo-feed-rescue-"+level+"-";
	RY.ajax({
		url: zdViralUrl,
		data: {
			"appname":PageData.app.name,
			"userId": zd_fb_sig_user, //
			"rescueStage": rescueStage,
			"level": level,
			"animalKey": animal_key,
			"storyId": story_id,
			"animalId": animalId,
			"viralType":"rescuefeed",
			"raviTracking": "payinguser"
		},
		success: function(data) {
			var claimsParameters=data.return_data.claimParameters;
			zdShowGiftFeedFBDialogCommon(animalId, animalName, animalImg, s, story_title, story_body, action_title, story_id, event_type,
			level, animal_key, ignoreTxt,"feedDlgPrompt","fb-zoo-feed-rescue-stage-"+level+"-click",claimsParameters);
		}
	});
} 

function zdGetAdoptEventType(event){
	if(event==0){
		eventType='lostanimal';
	}else if(event==1){
		eventType='oilspill';
	}else if(event==2){
		eventType='poachers';
	}else if(event==3){
		eventType='separated';
	}else if(event==4){
		eventType='escaped';
	}else if(event==5){
		eventType='brokenwing';
}
return eventType;
}

function zdGetAdoptActionTitle(event,shortName){
	if(event==0){
		storyTitle='Adopt the '+shortName;
	}else if(event==1){
		storyTitle='Adopt '+shortName;
	}else if(event==2){
		storyTitle='Adopt '+shortName;
	}else if(event==3){
		storyTitle='Adopt '+shortName;
	}else if(event==4){
		storyTitle='Find The '+shortName;
	}else if(event==5){
		storyTitle='Heal the '+shortName;
	}
return storyTitle;
}

function zdGetAdoptStoryBody(event,adoptName){
	if(event==0){
		storyBody='USER needs your help rescuing the poor '+adoptName+'. Would you like to help USER adopt this '+adoptName+'?';
	}else if(event==1){
		storyBody='This '+adoptName+' is drenched in oil, and it will not survive without your help. Would you like to help clean the '+adoptName+'?';
	}else if(event==2){
		storyBody='This '+adoptName+' was almost captured to be sold in the underground market. Help the '+adoptName+' find its way back home.';
	}else if(event==3){
		storyBody='This '+adoptName+' was separated from its mother during an earthquake and will not survive without its mother\'s protection. Help the '+adoptName+' find its mother quickly!';
	}else if(event==4){
		storyBody='A frightened '+adoptName+' escaped from those who are trying to help. Help capture the '+adoptName+' so that it will be released to the wild soon!';
	}else if(event==5){
		storyBody='This '+adoptName+' was caught in a terrible tornado and broke its wing! Help the '+adoptName+' heal its wing so that it can fly again!';
	}
return storyBody;
}

function zdGetAdoptStoryTitle(event,adoptName){
	if(event==0){
		storyTitle='Find a home for this '+adoptName+'!';
	}else if(event==1){
		storyTitle='Clean dirty oil on this '+adoptName+'!';
	}else if(event==2){
		storyTitle='Protect this '+adoptName+' from Poachers!';
	}else if(event==3){
		storyTitle='Help this '+adoptName+' find its mother!';
	}else if(event==4){
		storyTitle='Rescue this '+adoptName+'!';
	}else if(event==5){
		storyTitle='Fix the broken wing of this '+adoptName+'!';
	}
return storyTitle;
}

var zdMegaSpawnProject = {
	// TO BE TRANSLATED
	spawnBuildablesForTeaCupRide: function(){
		// spawn enough items Tea Cup Ride
		var itemId = 697;
		zdMegaSpawn._publishSpawnText( "Spawning items for a " + zdZooItems[itemId]['name'] + " (#" + itemId + ")\n" );
		zdMegaSpawn.spawnBuildableFeedUrl(698,'TeaCupRide'); // ten Tea Pot
		zdMegaSpawn.spawnBuildableFeedUrl(699,'TeaCupRide'); // ten Blue Tea Cup
		zdMegaSpawn.spawnBuildableFeedUrl(700,'TeaCupRide'); // ten blue crayons
		zdMegaSpawn.spawnBuildableFeedUrl(701,'TeaCupRide'); // ten Green Tea Cup
		zdMegaSpawn.spawnBuildableFeedUrl(702,'TeaCupRide'); // ten Red Tea Cup
		zdMegaSpawn._publishSpawnText( "\n" );
		zdWorkQueueStart();
	},
	spawnBuildablesForRodeo: function(){
		// spawn enough items Rodeo
		var itemId = 668;
		zdMegaSpawn._publishSpawnText( "Spawning items for a " + zdZooItems[itemId]['name'] + " (#" + itemId + ")\n" );
		zdMegaSpawn.spawnBuildableFeedUrl(662,'TeaCupRide'); // ten Cowboy Hat
		zdMegaSpawn.spawnBuildableFeedUrl(663,'TeaCupRide'); // ten Cowgirl Boots
		zdMegaSpawn.spawnBuildableFeedUrl(664,'TeaCupRide'); // ten Fence
		zdMegaSpawn.spawnBuildableFeedUrl(665,'TeaCupRide'); // ten Gate
		zdMegaSpawn.spawnBuildableFeedUrl(666,'TeaCupRide'); // ten Lasso
		zdMegaSpawn._publishSpawnText( "\n" );
		zdWorkQueueStart();
	}
};

var zdMegaSpawn = {
	// TO BE TRANSLATED
	// variables
	intSpawnNumber: 0,
	strSpawnedUrls: "",
	// public methods
	spawnMulti: function(strText) {
		// spawn multiple URLs
		var objElement = document.getElementById('zdMegaMultiSpawnList');
		var zdMegaMultiSpawnFunction = objElement.options[objElement.selectedIndex].value;
		var zdMegaMultiSpawnDescription = objElement.options[objElement.selectedIndex].text;
		var zdMegaMultiSpawnAmount = parseInt(document.getElementById('zdMegaMultiSpawnAmount').value);
		if((zdMegaMultiSpawnAmount <= 10000) && (zdMegaMultiSpawnAmount >= 1)){
			// we are good
		}else{
			zdMegaMultiSpawnAmount = 20;
		}
		// set parsed value back to form
		document.getElementById('zdMegaMultiSpawnAmount').value = zdMegaMultiSpawnAmount; 
		//get starting number
		zdMegaSpawn.intSpawnNumber = (document.getElementById('zdSpawnNumber').value)-1;
		if(zdMegaSpawn.intSpawnNumber >= 0){
			// we are good
		}else{
			zdMegaSpawn.intSpawnNumber = 0;
		}
		// set parsed value back to form
		document.getElementById('zdSpawnNumber').value = (zdMegaSpawn.intSpawnNumber)+1; 
		// get spawning
		zdMegaSpawn._publishSpawnText( "Spawning " + zdMegaMultiSpawnAmount + ": " + zdMegaMultiSpawnDescription + "\n" );
		for(s=0;s<zdMegaMultiSpawnAmount;s++) {
			zdWorkQueuePush(zdMegaMultiSpawnFunction);
		}
		zdWorkQueueStart();
		zdMegaSpawn.spawnFeedId = 0;
		return;
	},
	spawnSeasonalUpgradeAnimalUrl: function(animalId) {
		// spawn URL animal upgrade item
		var strUrl = "server/index.php/project?";
		var data = {
			"appname":PageData.app.name,
			'projectName': 'seasonal',
			'action': 'shareUpgradeItem',
			'projectid': zdSeasonal.missionProjId,
			'animalId':animalId,
			//'iframeLoad':iframeLoaded,
			'signed_request':zd_signed_request,
			'parentAppId':zd_appId
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	spawnTableUrl: function(){
		// spawn URL table
		var strUrl = zdBuildablesServiceUrl;
		var data = {
			"appname":PageData.app.name,
			'appname':zd_appname,
			'parentAppId':zd_appId,
			'type': 'claimQuery',
			'owner_name': PageData.player.name,
			'userId': zdUserId,
			'zooOwnerId':zdUserId,
		};
		zdMegaSpawn._spawnTableUrl(data,strUrl);
	},
	// Christmas 2010
	spawnChristmasCookieUrl: function(){ 
		// spawn URL Gingerbread cookie (christmas)
		var strUrl = "server/ProjectService.php";
		var data = {
			"appname":PageData.app.name,
			'projectName': 'christmas',
			'action': 'shareItem',
			'projectid': 10,
			'order': 'second'
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	spawnChristmasUpgradeAnimalUrl: function(animalId) {
		// spawn URL animal upgrade item (christmas)
		var strUrl = "server/ProjectService.php";
		var data = {
			"appname":PageData.app.name,
			'projectName': 'christmas',
			'action': 'shareUpgradeItem',
			'projectid': 10,
			'animalId':animalId
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	spawnSantaGiftUrl: function(itemId) {
		// spawn URL share Santas gift item (christmas)
		var strUrl = "server/ProjectService.php";
		var data = {
			"appname":PageData.app.name,
			'projectName': 'christmas',
			'action': 'shareItem',
			'projectid': 10,
			'itemId':itemId
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	// Mystery gifts
	spawnMysteryGiftUrl: function(){
		// spawn URL for a Mystery Gifts
		var strUrl = zdViralUrl;
		var data = {
			"appname":PageData.app.name,
			"userId": zd_fb_sig_user,
			"viralType":"mysterygift",
			"parentAppId": zd_appId
		};
		zdMegaSpawn._spawnGiftUrl(data,strUrl);
	},
	spawnMysteryGiftUrls: function(numberToSpawn) {
		// deprecated
		// spawn URLs for a number of Mystery Gifts
		intSpawnNumber = 0;
		zdMegaSpawn._publishSpawnText( "Spawning " + numberToSpawn + " Mystery Gifts\n" );
		for(s=0;s<numberToSpawn;s++) {
			zdWorkQueuePush('zdMegaSpawn.spawnMysteryGiftUrl();');
		}
		zdWorkQueueStart();
		return;
	},
		// Treasure Chests
	spawnTreasureChestUrl: function(){
		// spawn URL for Treasure Chests
		var strUrl = zdViralUrl;
		var data = {
			"appname":PageData.app.name,
			"viralType":"treasurehunt",
			"zooOwnerId": zd_fb_sig_user,
			"parentAppId": zd_appId,
			"targetUid": zd_fb_sig_user,
			"parentAppUrl": "http://apps.facebook.com/"+zd_appurl+"/",
			"createClaim": 1
		};
		zdMegaSpawn._spawnFeedUrl(data,strUrl);
	},
	
			// Feed Animal/Topiaries
	spawnFeedId: 0,
	spawnAnimalUrl: function(itemId) {
		// spawn URL for Topiaries
		if(!itemId){
			var itemId = prompt('Enter ItemId:',zdZooAdoptItems.dateorder[zdZooAdoptItems.dateorder.length-1]);
		}
		if(zdZooAdoptItems[itemId]){
			zdMegaSpawn.spawnFeedId = itemId;
			var strUrl = zdViralUrl;
			var data = {
			"appname":PageData.app.name,
			"userId": zd_fb_sig_user,
			"rescueStage": "stage-1",
			"level": zdZooAdoptItems[itemId][3],
			"animalKey": zdGetAnimalForId(itemId)['key'],
			"storyId": zdGetAdoptEventType(zdZooAdoptItems[itemId][2]),
			"animalId": itemId,
			"viralType":"rescuefeed",
			"raviTracking": "payinguser"
			};
			zdMegaSpawn._spawnAdoptUrl(itemId,data,strUrl);
		}else{
			alert('Item is not Adoptable!');
		}
	},
			// Golden Egg Hatched
	spawnGoldenEggUrl: function(){
		var strUrl = "server/FBStreamPublishService.php" ;
		var data = {
			'feedId': 6,
			'feedItemId': 300
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	// Roses
	spawnRoseUrl: function(itemId) {
		// spawn URL for a "rose"
		var strUrl = "server/index.php/project?";
		var data = {
			'projectName': 'roseGarden',
			'action': 'shareHarvestItem',
			'projectid': 1,
			'parentAppId': zd_appId,
			'giftid':itemId
		};
		zdMegaSpawn._spawnProjectUrl(data,strUrl);
	},
	spawnRoseUrls: function(itemId, numberToSpawn) {
		// deprecated
		// spawn URLs for a number of "roses"
		intSpawnNumber = 0;
		zdMegaSpawn._publishSpawnText( "Spawning " + numberToSpawn + " 'roses' of item " + zdZooItems[itemId]['name'] + " (#" + itemId + ")\n" );
		for(s=0;s<numberToSpawn;s++) {
			zdWorkQueuePush('zdMegaSpawn.spawnRoseUrl('+itemId+');');
		}
	},
	// Missions
	spawnMissionCompletionUrl: function(missionId) {
		var strUrl = zdMissionUrl;
		var objData = {
			parentAppId : zd_appId,
			userId: zd_fb_sig_user,
			mission_id: missionId,
			cmd: "publish_end_of_mission"
		};
		zdMegaSpawn._spawnProjectUrl(objData, strUrl);
	},
	// juice
	spawnJuiceFeedUrl: function(){ // only one a day
		var strUrl = zdViralUrl;
		var strViralType = "send-feed";
		var objData = {
			"appname": zd_appname,
			"zooOwnerId": zd_fb_sig_user,
			"viralType": strViralType
		};
		zdMegaSpawn._spawnProjectUrl(objData, strUrl);
	},
//oak
	spawnOakUrl: function(intTypeId, strClassName) { 
		var strUrl = zdViralUrl;
		var objData = {
			"parentAppId": zd_appId,
			"appname": zd_appname,
			"userId": zd_fb_sig_user,
			"viralType": "trophyfeed"
		};
		var strPage = "answerGenericGiftRequest.php";
		if(intTypeId==0) {
			strPage = "home.php";
		}
		zdMegaSpawn._spawnOakUrl(objData, strUrl, strPage);
	},
	// buildable
	spawnBuildableFeedUrl: function(intTypeId, strClassName) { 
		var strUrl = "ajax/getBuildableMaterialContent.php?className=" + strClassName + "&typeId="+intTypeId+"&userName=" + PageData.player.name + "&" + PageData.app.params;
		var objData = {
			"parentAppId": zd_appId,
			"userId": zd_fb_sig_user
		};
		var strPage = "answerGenericGiftRequest.php";
		if(intTypeId==0) {
			strPage = "home.php";
		}
		zdMegaSpawn._spawnBuildableUrl(objData, strUrl, strPage);
	},
	// level up // hard coded to the page
	// private methods
	_publishSpawnedUrl: function(strUrl) {
		// publish a spawned URL
		zdMegaSpawn.intSpawnNumber++;
		document.getElementById('zdSpawnNumber').value = zdMegaSpawn.intSpawnNumber+1; 
		var objElement = document.getElementById('zdMegaMultiSpawnList');
		var zdMegaMultiSpawnDescription = objElement.options[objElement.selectedIndex].text;
		var zdMegaSpawnNote = document.getElementById('zdMegaSpawnNote');
		var objSpawnFormat = document.getElementById('zdMegaSpawnFormat');
		var zdSpawnFormat = objSpawnFormat.options[objSpawnFormat.selectedIndex].value;
		if(zdSpawnFormat==1){
			zdMegaSpawnNote.value += '<a href="' + strUrl + '">'+zdMegaSpawn.intSpawnNumber+' - '+strUrl+'</a><br>\n\n';
		}else if(zdSpawnFormat==0){
			if(zdMegaMultiSpawnDescription == 'Feed Animal(Topiary after 8hr)') {
				zdMegaSpawnNote.value += '<a href="' + strUrl + '">'+zdMegaSpawn.intSpawnNumber+' - '+zdZooItems[zdMegaSpawn.spawnFeedId]['name']+' (Topiary after 8hr)</a><br>\n\n';
			}else{
				zdMegaSpawnNote.value += '<a href="' + strUrl + '">'+zdMegaSpawn.intSpawnNumber+' - '+zdMegaMultiSpawnDescription+'</a><br>\n\n';
			}
		}else{
			zdMegaSpawnNote.value += zdMegaSpawn.intSpawnNumber + '. ' + strUrl + "\n\n";
		}
		// zdMegaSpawn.strSpawnedUrls += intSpawnNumber + '. ' + strUrl + "\n\n";
	},
	_publishSpawnText: function(strText) {
		// publish a spawned URL
		var zdMegaSpawnNote = document.getElementById('zdMegaSpawnNote');
		zdMegaSpawnNote.value += strText; // + "\n\n";
	},
	_publishSpawnedUrls: function(){
		// publish a spawned URL
		alert(zdMegaSpawn.strSpawnedUrls);
	},
	_spawnProjectUrl: function(objData,strUrl) {
		// generic URL spawn operation
		RY.service({
			url: strUrl,
			data: objData,
			success: function(d) { 
				d = d.return_data; 
				if(typeof d.projects != "undefined") {
					d = d.projects[objData.projectName];
				}
				zdMegaSpawn._publishSpawnedUrl( d.action_links[0]['href'] );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
	// For Treasure Chests	
		_spawnFeedUrl: function(objData,strUrl) {
		// generic URL spawn operation
		RY.service({
			url: strUrl,
			data: objData,
			success: function(d) { 
				zdMegaSpawn._publishSpawnedUrl( d.return_data.claimUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
	_spawnGiftUrl: function(objData,strUrl) {
		// generic URL spawn operation
		RY.service({
			url: strUrl,
			data: objData,
			success: function(d) { 
				zdMegaSpawn._publishSpawnedUrl( d.return_data.actionUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
		_spawnAdoptUrl: function(itemId, objData, strUrl) {
		// generic URL spawn operation
		RY.ajax({
			url: strUrl,
			data: objData,
			success: function(d) { 
				var strActionUrl = PageData.app.url + "zoo/home.php?giftedAnimalId="+itemId+"&s="+zdZooAdoptItems[itemId][0]+"&storyId="+zdZooAdoptItems[itemId][2]+"&level="+zdZooAdoptItems[itemId][3]+"" + d.return_data.claimParameters + "";
				zdMegaSpawn._publishSpawnedUrl( strActionUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
	_spawnTableUrl: function(data, strUrl) {
		// generic URL spawn operation
		RY.ajax({
			url: strUrl,
			data: data,
			success: function(d) { 
				var strActionUrl = PageData.app.url + "zoo/home.php?user_referrID=" + PageData.player.uid + "&referType=5"+ d.return_data.claimQuery + "&ref=nf";
				zdMegaSpawn._publishSpawnedUrl( strActionUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
	_spawnOakUrl: function(objData, strUrl, strPage) {
		// generic URL spawn operation
		RY.ajax({
			url: strUrl,
			data: objData,
			success: function(d) { 
				// var strPage = "answerGenericGiftRequest.php";
				var strActionUrl =d.return_data.actionUrl ;
				zdMegaSpawn._publishSpawnedUrl( strActionUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	},
	_spawnBuildableUrl: function(objData, strUrl, strPage) {
		// generic URL spawn operation
		RY.ajax({
			url: strUrl,
			data: objData,
			success: function(d) { 
				// var strPage = "answerGenericGiftRequest.php";
				var strActionUrl =d.actionUrl + "&_ryfbe=fb-zoo-fairytaleCastle-feed-click&user_referID=" + PageData.player.uid + "&referType=5";
				zdMegaSpawn._publishSpawnedUrl( strActionUrl );
			},
			error: function(d) {
				zdMegaSpawn._publishSpawnedUrl( 'ERROR: could not spawn URL.' );
			}
		});
	}
};

// show Mega Spawn pop out
function zdMegaSpawnPreview(){
	var strHtml = '';
	strHtml += '<h2>&nbsp;' + zdui.getLabel("megaspawn_flyout_title") + '</h2>';

	strHtml += '<div id="zdShopPreviewBody">';
	strHtml += '<div>'; 
	strHtml += '<form method="get" action="#">'; 
/* Projects
	strHtml += '<p>' + zdui.getLabel("megaspawn_flyout_projects") + ':<br />'; 
	strHtml += '<select name="zdMegaSpawnList" id="zdMegaSpawnList" style="width: 180px;">' +
	'<optgroup label="Field Trip">' +
	'<option value="zdMegaSpawnProject.spawnCrayonsForCardinal();">Cardinal (Roses)</option>' +
	'<option value="zdMegaSpawnProject.spawnCrayonsForRainbowParrotFish();">Rainbow Parrot Fish (Roses)</option>' +
	'<option value="zdMegaSpawnProject.spawnCrayonsForScarabBeetle();">Scarab Beetle (Roses)</option>' +
	'</optgroup">' +
	'<optgroup label="Buildable">' +
	'<option value="zdMegaSpawnProject.spawnBuildablesForTeaCupRide();">Tea Cup Ride</option>' +
	'<option value="zdMegaSpawnProject.spawnBuildablesForRodeo();">Rodeo</option>' +
	'</optgroup">' +
	'</select>' + 
	'&nbsp;<input type="button" id="button1" onClick="zdEvalFromList(\'zdMegaSpawnList\');" value="'+zdui.getLabel("button_go")+'" />';
	strHtml += '</p>';
*/	
	strHtml += '<p>' + zdui.getLabel("megaspawn_flyout_multiplenotes") + ':<br />'; 
	strHtml += '<select name="zdMegaMultiSpawnList" id="zdMegaMultiSpawnList" style="width: 180px;">' +
	'<optgroup label="' + zdui.getLabel("megaspawn_flyout_seasonal") + '">' +
	'<option value="zdMegaSpawn.spawnSeasonalUpgradeAnimalUrl(\''+zdSeasonal.arrSeasonalAnimals[0]+'\');">' + zdui.getLabel("upgrade") + ': '+zdSeasonal.arrSeasonalItems[zdSeasonal.arrSeasonalItems.length-2]+'</option>' +
	'</optgroup">' +
	'<optgroup label="Roses">' +
	'<option value="zdMegaSpawn.spawnRoseUrl(563);">Blue</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(564);">Red</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(565);">Yellow</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(566);">White</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(567);">Green</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(568);">Lavender</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(569);">Orange</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(570);">Pink</option>' +
	'<option value="zdMegaSpawn.spawnRoseUrl(571);">Glitter</option>' +
	'</optgroup">' +
	'<optgroup label="' + zdui.getLabel("megaspawn_flyout_gifts") + '">' +
	'<option value="zdMegaSpawn.spawnMysteryGiftUrl();">Mystery Gifts</option>' +
	'<option value="zdMegaSpawn.spawnTreasureChestUrl();">Treasure Chests</option>' +
	'<option value="zdMegaSpawn.spawnTableUrl();">Table</option>' +
	'<option value="zdMegaSpawn.spawnAnimalUrl(zdMegaSpawn.spawnFeedId);">Feed Animal(Topiary after 8hr)</option>' +
//	'<option value="zdMegaSpawn.spawnGoldenEggUrl();">GoldenEgg Hatched(Oak)</option>' +
	'<option value="zdMegaSpawn.spawnOakUrl(0,\'Oak\');">Oak</option>' +
	'</optgroup">' +
	'<optgroup label="' + zdui.getLabel("megaspawn_flyout_missions") + '">' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(1);">Teacup Pig (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(2);">Humpback Whale (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(3);">Mountain Goat (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(4);">Great White Shark (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(5);">Spectacled Bear (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(6);">South China Tiger (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(28);">Helpless Turkey (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(41);">Reindeer (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(42);">Lovebirds (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(52);">Irish Snake (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(116);">Lucky Cat (' + zdui.getLabel("completed") + ')</option>' +
	'<option value="zdMegaSpawn.spawnMissionCompletionUrl(124);">Student Tetra (' + zdui.getLabel("completed") + ')</option>' +
	'</optgroup">' +
	'<optgroup label="Vitamins">' +
	'<option value="zdSpawnVitaminService(0,1);">Vitamins</option>' +
	'</optgroup">' +
	'<optgroup label="Buildable ' + zdui.getLabel("completion") + '">' +
//	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'Cornucopia\');">Cornucopia (Oak)</option>' +
//	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'HauntedHouse\');">Haunted House</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'TeaCupRide\');">Tea Cup Ride</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'Rodeo\');">Rodeo</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'Theater\');">Theater</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'ChocolateFactory\');">Chocolate Factory</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'Playground\');">Playground</option>' +
	'<option value="zdMegaSpawn.spawnBuildableFeedUrl(0,\'FairytaleCastle\');">Fairytale Castle</option>' +
	'</optgroup">' +
	'</select>' +
	'&nbsp;<input type="text" name="zdMegaMultiSpawnAmount" id="zdMegaMultiSpawnAmount" value="20" style="width: 40px;" />' +
	'&nbsp;<input type="button" id="button50" onClick="zdMegaSpawn.spawnMulti();" value="'+zdui.getLabel("button_go")+'" />';
	strHtml += '</p>'; 
	strHtml += '<p>Format As:<br />'; 
	strHtml += '<select name="zdMegaSpawnFormat" id="zdMegaSpawnFormat" style="width: 125px;">' +
	'<option value="2">Text</option>' +
	'<option value="1">RapidLinkr-Html</option>' +
	'<option value="0">Html</option>' +
	'</optgroup">' +
	'</select>';
	strHtml += '&nbsp;&nbsp;&nbsp;&nbsp;Starting Number: <input type="text" name="zdSpawnNumber" id="zdSpawnNumber" value="1" style="width: 40px;" />';
	strHtml += '</p>'; 
	strHtml += '<textarea name="zdMegaSpawnNote" id="zdMegaSpawnNote" style="width: 280px; height: 300px; display: block; font-size: 1.0em;"></textarea>';
	strHtml += '</form>'; 
	strHtml += '<p><input type="button" id="button51" value="Reset Numbering" onClick="zdMegaSpawn.intSpawnNumber=0;document.getElementById(\'zdSpawnNumber\').value = (zdMegaSpawn.intSpawnNumber)+1; " /></p>';
	strHtml += '</div">';
	strHtml += '</div>';
	
	zdFlyout(strHtml,'Mega Spawn');
	return;
}

// spawn vitamin
function zdSpawnVitaminService( toZooOwnerId, isUrlOnly){ // CreateTicketService
	// TO BE TRANSLATED
	zdLogStatus('Generating vitamin for '+toZooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["receivingUserID"] = ''+toZooOwnerId;
	new Ajax.Request(
		zdCreateTicketServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdTicketResponseData = eval( '('+transport.responseText+')' );
				if(!isUrlOnly){
					showVitaminStream(zdTicketResponseData["return_data"]);
				}else{
					zdMegaSpawn._publishSpawnedUrl(zdTicketResponseData["return_data"]["URL"]);
				}
				return;
			}
		}
	); 
}

// show have/have not list
var zdanimalList  = {
	generate: function(){
		// generate 
		zdLogStatus(zdui.getLabel("animallist_flyout_generating"));
		// load zoo
		zdanimalList._popOutResults();
		zdanimalList._iterateLists();
	},
	_popOutResults: function(){
		// pop out results tab
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;' + zdui.getLabel("animallist_flyout_title") + '</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">'; // margin-left: 160px; text-align: left;
		strHtml += '<p>' + zdui.getLabel("animallist_flyout_intro") + '.</p>';
		strHtml += '<form method="get" action="#">'; 
		strHtml += '<textarea name="zdAnimalListNote" id="zdAnimalListNote" style="width: 290px; height: 320px; display: block; font-size: 1em;"></textarea>';
		strHtml += '</form>';
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Animal List');
	},
	_iterateLists: function(){
		var zdAnimalListNote = document.getElementById('zdAnimalListNote');
		// have list
		var strList = '';
		var numItems = 0;
		for (a=1;a<20000;a++) {
			if( arrItemQty[a]!=0){
				if(zdZooItems[a]){
					if(zdZooItems[a]['rarity']){
						numItems++;
						strList += '#'+ a + ' - ' +zdZooItems[a]['name']+ ' Qty: '+arrItemQty[a]+ '\n';
					}
				}
			}
		}
		zdAnimalListNote.value = zdui.getLabel("animallist_flyout_havelist") + " ("+numItems+"):\n\n" + strList;
		// have not list
		strList = '';
		numItems = 0;
		for(i=1;i<20000;i++){
			if(zdZooItems[i]){
				if(arrItemQty[i]==0){
					if(zdZooItems[i]['rarity']){
						numItems++;
						strList += '#' +i+ ' - ' + zdZooItems[i]['name']+ ' (' + zdZooItems[i]['rarity']+ ')\n';
					}
				}
			}
		}
		zdAnimalListNote.value += "\n" + zdui.getLabel("animallist_flyout_havenotlist") + " ("+numItems+"):\n\n" + strList;
		zdAnimalListNote.value += "\n\n" + zdui.getLabel("animallist_flyout_note");
	}
}

function zdMysteryGiftRewardAmount( intAmount){ //  
	var arrParameters = zdGetGenericParameters();
	arrParameters["mysteryGiftRewardAmount"] = ''+intAmount;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				// TO BE TRANSLATED
				zdLogStatus('Pay day! Z$ '+intAmount+'!');
				return;
			}
		}
	);
}

var arrBreedData=[];
var zdbreed = { // zdbreed.addBreeding(1494);
	// variables
	busyNests: [],
	trophyNests: [],
	wlpEarned: 0,
	addBreeding: function( intAnimalId,boolApplyBoost){
		var arrNestList = [1,2,3,4,5,6,7,8,100,101,102,103];
		var intNestPosition = 0;
		if(zdbreed.busyNests[0]==0){
	//		zdLogStatus(zdbreed.busyNests.length-1+' nests in use...');
			for(var n=0;n<arrNestList.length;n++) {
				if(zdbreed.busyNests[arrNestList[n]]){
					// skip
				}else{
					intNestPosition = arrNestList[n];
					n = arrNestList.length;
				//	zdbreed.busyNests[intNestPosition] = 1;
				}
			}
			if(intNestPosition!=0){
				zdbreed.startBreeding( intNestPosition, intAnimalId, 1, boolApplyBoost );
			}else{
				zdLogStatus(zdui.getLabel("breeding_flyout_nomorenests"));
			}
		}else{
			zdbreed.init(1); //initialize silent
			setTimeout('zdbreed.addBreeding('+intAnimalId+','+boolApplyBoost+');',1000);
			zdLogStatus('Checking which nests are in use...');
		}
	},
	startBreeding: function( intNestPosition, intAnimalId, boolPostWhenHungry, boolApplyBoost){
		// Normal nest are 1-8, Breeding Specialist Ones - 100-103
//		zdLogStatus( zdui.getLabel("breeding_flyout_breeding") + ' '+zdGetAnimalForId(intAnimalId)['name']+" #" + intAnimalId + " " + zdui.getLabel("breeding_flyout_innest") + " " + intNestPosition);
		boolPostWhenHungry = 1;
		var boolUseTracker = 0;
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'startBreeding';
		arrParameters["nestPosition"] = intNestPosition;
		arrParameters["animalId"] = intAnimalId;
		arrParameters["allowPostWhenBabyNeedFood"] = boolPostWhenHungry;
		arrParameters["applyBoost"] = boolApplyBoost;
		arrParameters["useTracker"] = boolUseTracker;
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					var breedresponse = eval( '('+transport.responseText+')' );
					if(breedresponse["error"]==1){
						zdLogStatus('ERROR: '+breedresponse["errorMessage"]);
					}else{
						zdbreed.busyNests[intNestPosition] = 1;
						zdLogStatus( zdui.getLabel("breeding_flyout_breeding") + ' '+zdGetAnimalForId(intAnimalId)['name']+" #" + intAnimalId + " " + zdui.getLabel("breeding_flyout_innest") + " " + intNestPosition);
					}
					return;
				}
			}
		);
	},
	upgradeCage: function( intNestPosition, intBreedStartTime, intAnimalId){
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'upgradeCage';
		arrParameters["breedStartTime"] = intBreedStartTime;
		arrParameters["animalId"] = intAnimalId;
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					zdbreed.init();
					if(transport.success){wlpEarned+=transport.return_data.reward;zdLogStatus('total:'+wlpEarned+'wlps');}
					return;
				}
			}
		);
	},
	multiupgradeCage: function( intNestPosition, intBreedStartTime, intAnimalId){
		for(i=0;i<6;i++){
			zdbreed.upgradeCage( intNestPosition, intBreedStartTime, intAnimalId );
		}
	},
	checkIfUpgradeNeeded: function(){
		if(zdbreed.trophyNests.length>0){
			if(arrBreedData["return_data"]["currentBabies"][zdbreed.trophyNests[0]]["isCageUpgradeRequired"]){
				var arrParameters = zdGetGenericParameters();
				arrParameters["action"] = 'upgradeCage';
				arrParameters["typeid"] = arrBreedData["return_data"]["currentBabies"][zdbreed.trophyNests[0]]["id"];
				new Ajax.Request(
					zdShopActionServiceUrl, 
					{
						method: 'post',
						asynchronous: true,
						parameters: arrParameters,
						onSuccess : function(transport){
							zdbreed.multiAll();
							zdSetResponse(transport.responseText);
							return;
						}
					}
				);
			}else{zdbreed.multiAll();}
		}
	},
	multiAll: function(){
		if(zdbreed.trophyNests.length>0){
			for(b=0;b<zdbreed.trophyNests.length;b++){
				zdbreed.moveAnimal(arrBreedData["return_data"]["currentBabies"][zdbreed.trophyNests[b]]["position"], arrBreedData["return_data"]["currentBabies"][zdbreed.trophyNests[b]]["breedStartTime"], arrBreedData["return_data"]["currentBabies"][zdbreed.trophyNests[b]]["id"],b);
			}
		}
	},
	multimoveAnimal: function( intNestPosition, intBreedStartTime, intAnimalId){
		for(i=0;i<6;i++){
			zdbreed.moveAnimal( intNestPosition, intBreedStartTime, intAnimalId );
		}
	},
	moveAnimal: function( intNestPosition, intBreedStartTime, intAnimalId , numberOfTry) {
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'moveAnimal';
		arrParameters["breedStartTime"] = intBreedStartTime;
		arrParameters["animalId"] = intAnimalId;
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					if((!numberOfTry) || (numberOfTry==(zdbreed.trophyNests.length-1))){
						zdbreed.init();
					}
					return;
				}
			}
		);
	},
	feedBaby: function( intNestPosition, intBreedStartTime, intAnimalId){
	//	zdbreed.visitHospital( intNestPosition, intBreedStartTime, intAnimalId ); //for stuck babies
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'feedBaby';
		arrParameters["breedStartTime"] = intBreedStartTime;
		arrParameters["animalId"] = intAnimalId;
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					zdbreed.init();
					return;
				}
			}
		);
	},
	visitHospital: function( intNestPosition, intBreedStartTime, intAnimalId){
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'visitHospital';
		arrParameters["breedStartTime"] = intBreedStartTime;
		arrParameters["animalId"] = intAnimalId;
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					zdbreed.init();
					return;
				}
			}
		);
	},
	init: function(silent) {
		var arrParameters = zdGetGenericParameters();
		arrParameters["service"] = 'init';
		new Ajax.Request(
			zdBreedingServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					zdbreed._popOutResults(transport.responseText,silent);
					return;
				}
			}
		);
	},
	_popOutResults: function(strBreedingList,silent) {
		// pop out results tab
		arrBreedData = eval( '('+strBreedingList+')' );
		var intEpoch = arrBreedData["return_data"]["serverTime"]; // Math.round(new Date().getTime()/1000.0);
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;' + zdui.getLabel("breeding_flyout_title") + '</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">'; 
		
		if(arrBreedData["success"]){
			if(arrBreedData["return_data"]["currentBabies"]["error"]){
				strHtml += '<p>' + zdui.getLabel("breeding_flyout_nobabies") + '</p>';
			}else{
				strHtml += '<b>Multi-move only shows up for trophy animals now...<br>';
				strHtml += 'Animal - Total bred / Total needed to next trophy</b><br>';
				
				zdbreed.busyNests = [];
				zdbreed.trophyNests = [];
				for(b=0;b<arrBreedData["return_data"]["currentBabies"].length;b++) {
					strHtml += '<div style="clear: both; margin: 1px; border: 2px solid #999; padding: 2px; height: 40px;';
					strHtml += '<a id="breedingNest'+arrBreedData["return_data"]["currentBabies"][b]["position"]+'"/>';
					var intGest = parseInt(arrBreedData["return_data"]["currentBabies"][b]["gestationTime"]);
					var intBreedStart = parseInt(arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]);
					var intBoost = parseInt(arrBreedData["return_data"]["currentBabies"][b]["growthOn"]);
					var intSickTime = intGest + ((intGest - intBreedStart) * 0.75);
					zdbreed.busyNests[arrBreedData["return_data"]["currentBabies"][b]["position"]] = 1 ;
					strHtml += '<div style="width: 39px;">';
					strHtml += '<img alt="" src="'+zdHomePageUrl+'img/nest'+arrBreedData["return_data"]["currentBabies"][b]["position"]+'.png" width="39" ';
					strHtml += '" style="float: left;"/>';
						strHtml += '</div>';
					strHtml += '<div style="float: left;width: 168px;">';
					if(zdGetAnimalForId(arrBreedData["return_data"]["currentBabies"][b]["id"])==undefined){ //id not in item list
						strHtml += 'Item #' +arrBreedData["return_data"]["currentBabies"][b]["id"]+ '-<br>';
		//			zdLogStatus(+arrBreedData["return_data"]["currentBabies"][b]["id"]+' not in item list...');
					}else{
						strHtml += zdGetAnimalForId(arrBreedData["return_data"]["currentBabies"][b]["id"])['name'] + ' -<br> ';
					}
					for(i=0;i<arrBreedData["return_data"]["availableBreedableAnimals"].length;i++){
						if(arrBreedData["return_data"]["availableBreedableAnimals"][i]["id"] == arrBreedData["return_data"]["currentBabies"][b]["id"]){
							var zdbred = arrBreedData["return_data"]["availableBreedableAnimals"][i]["bredCount"];
		//					zdLogStatus('Bred '+zdbred);
						}
					}
		//			var arrMastery=[48,96,144,288,576,864,1152,1440];
					if(intBoost==0){
						var itemGest = ((arrBreedData["return_data"]["currentBabies"][b]["gestationTime"] - arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"])/300);
					}else{
						var itemGest = ((arrBreedData["return_data"]["currentBabies"][b]["gestationTime"] - arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"])/225);
					}
					for(m=0;m<101;m++){
						if(0 < itemGest && itemGest <= 48){ var g = 48;}else if(48 < itemGest && itemGest <= 96){ var g = 96;}else if(96 < itemGest && itemGest <= 144){ var g = 144;}else if(144 < itemGest && itemGest <= 288){ var g = 288;}else if(288 < itemGest && itemGest <= 576){ var g = 576;}else if(576 < itemGest && itemGest <= 864){ var g = 864;}else if(864 < itemGest && itemGest <= 1152){ var g = 1152;}else if(1152 < itemGest && itemGest <= 2000){ var g = 1440;}
						if(arrBreedData["return_data"]["masteryValues"][g][m]){
							if(m>zdbred){ 
								var mastdiff = m-zdbred;
								var trophy = arrBreedData["return_data"]["masteryValues"][g][m]['rankName'];
								var reward = arrBreedData["return_data"]["masteryValues"][g][m]['reward'];
								break;
							}
						}
					}
					if(mastdiff!=0 && mastdiff && m != 101){
	//					zdLogStatus('Diff '+mastdiff);
						strHtml += zdbred+'/'+m+' ('+trophy+','+reward+' wlp)';
					}
					strHtml += '</div>';
					zdbreed.busyNests[arrBreedData["return_data"]["currentBabies"][b]["position"]] = 1 ;
					strHtml += '<div style="float: left;width: 78px;">';
					if(intBoost == 0 && intEpoch < arrBreedData["return_data"]["currentBabies"][b]["gestationTime"]) {
						strHtml += '<a href="javascript:zdBoostJuice('+arrBreedData["return_data"]["currentBabies"][b]["id"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+');"><img alt="" src="'+zdHomePageUrl+'img/241.gif" width="39" ';
						strHtml += '" style="float: right;"/></a>';
					}
					//if(false){
					if((intEpoch > intSickTime) && (arrBreedData["return_data"]["currentBabies"][b]["hospitalTime"] == 0)){
						// in hospital
						strHtml += '<a href="javascript:zdbreed.visitHospital('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/healbaby.PNG" width="39" ';
					strHtml += '" style="float: right;"/></a>';
					} else if((intEpoch > arrBreedData["return_data"]["currentBabies"][b]["gestationTime"]) && (arrBreedData["return_data"]["currentBabies"][b]["feedTime"] == 0)){
						// not fed and gestation time past
						strHtml += '<a href="javascript:zdbreed.feedBaby('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/feedbaby.PNG" width="39" ';
						strHtml += '" style="float: right;"/></a>';
					} else if(arrBreedData["return_data"]["currentBabies"][b]["feedTime"] == 0){
						// not fed and gestation time not yet past
						var intPercentageDone = Math.round( 100 - (arrBreedData["return_data"]["currentBabies"][b]["gestationTime"]-intEpoch)/(arrBreedData["return_data"]["currentBabies"][b]["gestationTime"]-arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"])*100 );
						strHtml += zdui.getLabel("breeding_flyout_notready") + ' ('+intPercentageDone+'%)<br>'; // ? - <a href="javascript:zdbreed.upgradeCage('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');">upgrade</a>';
					} else if(arrBreedData["return_data"]["currentBabies"][b]["isCageUpgradeRequired"]){
						// cage upgrade required
						strHtml += '<a href="javascript:zdbreed.upgradeCage('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/upgrademovebaby.PNG" width="39" ';
						strHtml += '" style="float: right;"/></a>';
						if(mastdiff==1){
							strHtml += '<a href="javascript:zdbreed.multiupgradeCage('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/upgrademultimovebaby.png" width="39" ';
							strHtml += '" style="float: right;"/></a>';
							zdbreed.trophyNests.push(b);//zdLogStatus(b);
						}
					}else{
						// ready to move
						strHtml += '<a href="javascript:zdbreed.moveAnimal('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/movebaby.PNG" width="39" ';
						strHtml += '" style="float: right;"/></a>';
						if(mastdiff==1){
							strHtml += '<a href="javascript:zdbreed.multimoveAnimal('+arrBreedData["return_data"]["currentBabies"][b]["position"]+','+arrBreedData["return_data"]["currentBabies"][b]["breedStartTime"]+','+arrBreedData["return_data"]["currentBabies"][b]["id"]+');"><img alt="" src="'+zdHomePageUrl+'img/multimovebaby.png" width="39" ';
							strHtml += '" style="float: right;"/></a>';
							zdbreed.trophyNests.push(b);//zdLogStatus(b);
						}
					}
					strHtml += '</div>';
					strHtml += '</div>';
				}
			}
		}else{
			strHtml += '<p><b>Error:</b> ' + arrBreedData["error_message"] + '</p>';
		}
		zdbreed.busyNests[0] = 0;
		if(zdbreed.trophyNests.length>0){
			strHtml += '<p><a href="javascript:zdbreed.checkIfUpgradeNeeded();">Try to move all trophy babies</a></p>';
		}
		strHtml += '<p><a href="javascript:zdbreed.init();">' + zdui.getLabel("refresh") + '</a></p>';
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		if(silent!=1){
			zdFlyout(strHtml,'Manage Breeding');
			//zdLogStatus(JSON.stringify(zdbreed.trophyNests));
		}
	}
};

function zdBoostJuice (intAnimalId,intBreedStart){
	var arrParameters = zdGetGenericParameters();
	arrParameters["boostType"] = 2;
	arrParameters["animalId"] = intAnimalId;
	arrParameters["breedStartTime"] = intBreedStart;
	arrParameters["service"] = 'applyBoost';
	new Ajax.Request(
		zdBreedingServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdbreed.init();
				return;
			}
		}
	);
}

function zdGreenHouseUpgradeBronze(){
	zdGreenHouseUpgrade( zd_fb_sig_user, 555 );
}

function zdGreenHouseUpgradeSilver(){
	zdGreenHouseUpgrade( zd_fb_sig_user, 556 );
}

function zdGreenHouseUpgradeGold(){
	zdGreenHouseUpgrade( zd_fb_sig_user, 557 );
}
/*
function zdGreenHouseUpgradeSilvermulti(){
	setInterval('zdGreenHouseUpgradeSilver();',10);
}
function zdGreenHouseUpgradeGoldmulti(){
	setInterval('zdGreenHouseUpgradeGold();',10);
}
*/
function zdGreenHouseUpgrade( intZooOwnerId, itemId){
	// TO BE TRANSLATED
	zdLogStatus('Upgrading greenhouse to '+zdGetAnimalForId((itemId+1))["name"]+'...');
	var arrParameters = zdGetGenericParameters();
	var strUrl = 'http://fbeq.rockyou.com/facebook_apps/zoo/server/ajax_greenhouse.php?action=instantUpgrade&ownerId='+intZooOwnerId+'&ghType='+itemId+'&parentApp=' + zd_appId;
	new Ajax.Request(
		strUrl, 
		{
			method: 'post',
			asynchronous: true,
			// parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				// var zdPrizeResponseData = eval( '('+transport.responseText+')' );
				return;
			}
		}
	); 
}

function zdZooStatsAjax(param) {
	// TO BE TRANSLATED
	//zdLogStatus('Generating Zoo Stats...');
	var arrParameters = zdGetGenericParameters();
	arrParameters['activeFlag'] = "true"; 
	var strUrl = zdZooStatsUrl+'?fps=2&avgfps=2&zd=1&qmode=l&checkBreed=1&oauth_consumer_key=facebook.com&oauth_signature=1&vip&version=100';
	new Ajax.Request(
		strUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdStatData = eval( '('+transport.responseText+')' );
				zdLogStatus('Cash = $'+zdStatData["return_data"][param]);
				return;
			}
		}
	); 
}

/*
postTreeGiftTY(XXXXXXXXXX,0,'0ad5c2c47fdad71bb1de2d3f4cf79a42') // Daffodils
postTreeGiftTY(XXXXXXXXXX,0,'972cc5b97e436537382b4dae5cb832c4') // SunFlower
postTreeGiftTY(XXXXXXXXXX,0,'084e1cf467fbe26cee0897166f0805d0') // Tulip
postTreeGiftTY(sender,receiver,Itemkey);
shaker results:
{"success":true,"return_data":{"objectIds":[],"reward":0,"balance":"47386548517","wildlifePoint":"13905264",
"treeGiftData":{"#treesshaken":44,"itemId":382,"itemKey":"36321a396948f68e9a4826208dcaf227","treeGiftReceiverId":"661882461","treeGiftReceiverName":"'AJoann","treeShakerId":"100002241846757","treeGiftZooOwner":"100002241846757","treeGiftAutopostOn":null},"cashEarned":0,"pointsEarned":11,"gift":{"objectId":0,"typeid":380},"totalTrees":11

*/

function zdWrenchKioskCollect( kioskId){
	// 220, 223, 225, 492, 10713, 11107
	// 230, 248, 252, 265, 392, 10568
	// TO BE TRANSLATED
	zdLogStatus('Collecting Wrench Kiosk '+zdGetAnimalForId(kioskId)['name']+' #'+kioskId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters['wrenchKiosk'] = kioskId;
	arrParameters['zooOwnerId'] = zd_fb_sig_user;
	arrParameters['withered'] = 1;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdRosegardenCollect(){
	zdLogStatus('Collecting Rose Garden - feature deprecated (not working)...');
	/*
	zdLogStatus('Collecting Rose Garden...');
	var arrParameters = zdGetGenericParameters();
	arrParameters['showProject'] = 43644397317;
	arrParameters['zooOwnerId'] = zd_fb_sig_user;
	arrParameters['withered'] = 0;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	);
	*/
	return;
}

function zdShowCollect( itemId, showKiosk){
	// TO BE TRANSLATED
	zdLogStatus('Collecting Show '+zdGetAnimalForId(itemId)['name']+' #'+showKiosk+'...');
	var arrParameters = zdGetGenericParameters();
	if(itemId == 572){
		arrParameters['showProject'] = showKiosk;
		arrParameters['withered'] = 0;
	}else{
		arrParameters['showKiosk'] = showKiosk;
		arrParameters['withered'] = 1;
	}
	arrParameters['zooOwnerId'] = zd_fb_sig_user;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdDailyWrenchCollect(){
	// TO BE TRANSLATED
	zdLogStatus('Collecting Wrench...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdClaimDailyWrenchGiftUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				return;
			}
		}
	); 
}

function zdAllKiosksCollect(){
	zdWorkQueuePush('zdDailyWrenchCollect();');
	// zdWorkQueuePush('zdRosegardenCollect();'); // deprecated
	// kiosks
	zdWorkQueuePush('zdWrenchKioskCollect(220);');
	zdWorkQueuePush('zdWrenchKioskCollect(223);');
	zdWorkQueuePush('zdWrenchKioskCollect(225);');
	zdWorkQueuePush('zdWrenchKioskCollect(492);');
	zdWorkQueuePush('zdWrenchKioskCollect(10713);');
	zdWorkQueuePush('zdWrenchKioskCollect(11107);');
	// kiosks second batch
	zdWorkQueuePush('zdWrenchKioskCollect(230);');
	zdWorkQueuePush('zdWrenchKioskCollect(248);');
	zdWorkQueuePush('zdWrenchKioskCollect(252);');
	zdWorkQueuePush('zdWrenchKioskCollect(265);');
	zdWorkQueuePush('zdWrenchKioskCollect(392);');
	zdWorkQueuePush('zdWrenchKioskCollect(10568);');
	// start iterating
	zdWorkQueueStart();
	return;
}

function zdUnlock11thIsland(){
	if(confirm(zdui.getLabel("confirm_unlock_11thisland"))){
		zdLogStatus(zdui.getLabel("status_unlock_11thisland"));
		var arrParameters = zdGetGenericParameters();
		arrParameters["mode"] = "buyisland";
		arrParameters["islandCost"] = "0";
		arrParameters["typeId"] = "1016";
		arrParameters["islandToUnlock"] = "11";
		new Ajax.Request(
			zdZooItemServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					return;
				}
			}
		); 
	}
	return;
}

function zdGetItemCoords(itemId,islandId) {
	var itemId = document.getElementById('zdPlaceItemId').value;
	var islandNum = parseInt(document.getElementById('zdPlaceIslandNum').value);
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandNum)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zd_fb_sig_user;
	arrParameters["islandId"] = islandNum-1;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strIslandData = zdFormatCoords( zdGetResponse() );
				var zdIslandData = eval( '('+transport.responseText+')' );
				for(yd=-200;yd<=200;yd++){
					if(zdIslandData["return_data"][yd] ){
						for(xd=-200;xd<=200;xd++){
							if(zdIslandData["return_data"][yd][xd] ){
								if(zdIslandData["return_data"][yd][xd][0]==itemId){
									if(zdZooItems[itemId]['rarity'] ){
										objectId=itemId;
									}else{
										objectId=zdIslandData["return_data"][yd][xd][1];
									}
									x=xd+7;
									y=yd+8;
									document.getElementById('zdPlaceX').value=x;
									document.getElementById('zdPlaceY').value=y;
									zdLogStatus(itemId+','+objectId+','+x+','+y+','+islandNum);
								}
							}
						}
					}
				}
				zdLogStatus('ItemId,ObjectId,X,Y,IslandNum');
			}
		}
	);
}

//-------------------------------------
// Export Island Items to list
var zdExportIsland  = {
	generate: function(){
		// generate 
		zdLogStatus('Exporting island...');
		zdExportIsland._popOutResults();
		zdExportIsland._iterateLists();
	},
	_popOutResults: function(){
		// pop out results tab
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Island Items</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">';
		strHtml += '<form method="get" action="#">'; 
		strHtml += '<textarea name="zdExportIslandList" id="zdExportIslandList" style="width: 290px; height: 320px; display: block; font-size: 1em;"></textarea>';
		strHtml += '</form>'; 
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Island');
	},
	_iterateLists: function(){
		var islandId = document.getElementById('zdPlaceIslandNum').value-1;
		zdLoadZooService(zdUserId);
		zooData = zdGetZoo();
		var zdZooData = eval( '('+zooData+')' );
		zdmapId = zdZooData["return_data"]["islands"][(islandId+1)]["mapId"];
		zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zd_fb_sig_user;
		arrParameters["islandId"] = islandId;
		new Ajax.Request(
			zdLoadIslandServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var strIslandData = zdFormatCoords( zdGetResponse() );
					var zdIslandData = eval( '('+transport.responseText+')' );
					if(zdIslandData != null){
						var zdExportIslandList = document.getElementById('zdExportIslandList');
					}
					//Items List
					var strList = '';
					var numItems = 0;
					if(zdIslandData['success']){
						for(yd=-200;yd<=200;yd++){
							if(zdIslandData["return_data"][yd] ){
								for(xd=-200;xd<=200;xd++){
									if(zdIslandData["return_data"][yd][xd] ){
										itemId=zdIslandData["return_data"][yd][xd][0];
										if(zdZooItems[itemId] != null){
											if(zdZooItems[itemId]['rarity'] ){
												objectId=itemId;
											}else{
												objectId=zdIslandData["return_data"][yd][xd][1];
											}
											x=xd+7;
											y=yd+8;
											numItems++;
											strList += itemId+', '+objectId+', '+x+', '+y+', '+(islandId+1)
											+ "\n";
										}else{
											alert('You have items not in the items list - Data may not be correct!');
											zdLogStatus('You have items not in the items list - please try again when item list has been updated!');
										}
									}
								}
							}
						}
					}else{
						strList += 'List empty ' + zdZooData['return_data'];
						strList += '/ ' + zdZooData['return_data'].length;
					}
					zdExportIslandList.value += "\nIsland "+(islandId+1)+" - ("+numItems+") Items:\n\nitemId, objectId, x, y, islandNum\n\nMap "+zdmapId+"\n" + strList;
					zdLogStatus('Found '+numItems+' items on island '+(islandId+1)+'...');
					//Items Move List
					var strList = '';
					var numItems = 0;
					if(zdIslandData['success']){
						for(yd=-200;yd<=200;yd++){
							if(zdIslandData["return_data"][yd] ){
								for(xd=-200;xd<=200;xd++){
									if(zdIslandData["return_data"][yd][xd] ){
										itemId=zdIslandData["return_data"][yd][xd][0];
										if(zdZooItems[itemId]['rarity'] ){
											objectId=itemId;
										}else{
											objectId=zdIslandData["return_data"][yd][xd][1];
										}
										x=xd+7;
										y=yd+8;
										numItems++;
										strList += 'zdMoveZooItem('+x+','+y+','+itemId+','+objectId+','+(islandId+1)+');\n';
									}
								}
							}
						}
					}else{
						strList += 'List empty ' + zdZooData['return_data'];
						strList += '/ ' + zdZooData['return_data'].length;
					}
					zdExportIslandList.value += "\nUse the following to restore this island (must have all the same items with matching ObjectIds)\n\nzdMoveMap("+zdmapId+","+islandId+");\n" + strList;
				}
			}
		);
	}
}
//-------------------------------------
// Export Island Items to Images
var zdExportIsland2  = {
	generate: function(){
		// generate 
		zdLogStatus('Exporting island...');
		zdExportIsland2._popOutResults();
		zdExportIsland2._iterateLists();
	},
	_popOutResults: function(){
		// pop out results tab
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Island Items</h2>';
		strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
		strHtml += '<div id="zdExportIslandListMove">';
		strHtml += 'here is your new area ';
		strHtml += '</div>';
		strHtml += '<div style="">';
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Island');
	},
	_iterateLists: function(){
		var islandId = document.getElementById('zdPlaceIslandNum').value-1;
		zdLoadZooService(zdUserId);
		zooData = zdGetZoo();
		var zdZooData = eval( '('+zooData+')' );
		zdmapId = zdZooData["return_data"]["islands"][(islandId+1)]["mapId"];
		zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zd_fb_sig_user;
		arrParameters["islandId"] = islandId;
		new Ajax.Request(
			zdLoadIslandServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var strIslandData = zdFormatCoords( zdGetResponse() );
					var zdIslandData = eval( '('+transport.responseText+')' );
					if(zdIslandData != null){
					}
					//Items List
					var strList = '';
					var strListMove = 'Click a pic to move the item to storage <br>';
					var zdItemListMoveId = [];
					var zdItemListMoveIdQty = [];
					var zdItemListMoveIdOject = [];
					var numItems = 0;
					if(zdIslandData['success']){
						for(yd=-200;yd<=200;yd++){
							if(zdIslandData["return_data"][yd] ){
								for(xd=-200;xd<=200;xd++){
									if(zdIslandData["return_data"][yd][xd] ){
									itemId=zdIslandData["return_data"][yd][xd][0];
										if(zdZooItems[itemId] != null){
											if(zdZooItems[itemId]['rarity'] ){
												objectId=itemId;
											}else{
												objectId=zdIslandData["return_data"][yd][xd][1];
											}
											x=xd+7;
											y=yd+8;
											numItems++;
											if(zdItemListMoveId.indexOf(itemId)==-1){
												zdItemListMoveId.push(itemId);
												zdItemListMoveIdQty[itemId]=1;
												zdItemListMoveIdOject[itemId]=[];
												zdItemListMoveIdOject[itemId][zdItemListMoveIdQty[itemId]-1]=objectId;
											}else{
												zdItemListMoveIdQty[itemId] = zdItemListMoveIdQty[itemId]+1;
												zdItemListMoveIdOject[itemId][zdItemListMoveIdQty[itemId]-1]=objectId;
											}	
										}else{
											alert('You have items not in the items list - Data may not be correct!');
											zdLogStatus('You have items not in the items list - please try again when item list has been updated!');
										}
									}
								}
							}
						}
						strListMove += '<div>';
						for (p=0;p<zdItemListMoveId.length;p++){
							if(zdZooItems[zdItemListMoveId[p]]['rarity'] ){
								strListMove += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 15%;height: 60px;";><img src="' + zdGetNewImgPath( zdItemListMoveId[p], 'smallImg' ) + '" width="40" height="40" style="float: left;" onClick="zdMoveZooItem(1,1,'+zdItemListMoveId[p]+','+zdItemListMoveId[p]+',9999);zdExportIsland2._iterateLists();" title="Click to move to storage" /><br /><br /><br />x '+arrItemQty[zdItemListMoveId[p]] +'</div> ';
							}else{
								strListMove += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 15%;height: 60px;";><img src="' + zdGetNewImgPath( zdItemListMoveId[p], 'smallImg' ) + '" width="40" height="40" style="float: left;" onClick="';
								for (o=0;o<zdItemListMoveIdOject[zdItemListMoveId[p]].length;o++){
									strListMove += 'zdMoveZooItem(1,1,'+zdItemListMoveId[p]+','+zdItemListMoveIdOject[zdItemListMoveId[p]][o]+',9999);';
								}
								strListMove += 'zdExportIsland2._iterateLists();" title="Click to move to storage" /><br /><br /><br />x '+zdItemListMoveIdQty[zdItemListMoveId[p]] +'</div> ';
							}
						}
						strListMove += '</div>'
					}else{
						strList += 'List empty ' + zdZooData['return_data'];
						strList += '/ ' + zdZooData['return_data'].length;
					}
					zdLogStatus('Found '+numItems+' items on island '+(islandId+1)+'...');
					zdExportIslandListMove.innerHTML = strListMove;
				}
			}
		);
	}
};
//-------------------------------------
// Export Storage Items to Images
var zdShowStorageToSell  = {
	generate: function(){
		// generate 
		zdLogStatus('Exporting Storage...');
		zdShowStorageToSell._popOutResults();
		zdShowStorageToSell._iterateLists();
	},
	_popOutResults: function(){
		// pop out results tab
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Storage Items</h2>';
		strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
		strHtml += '<div id="zdExportIslandListMove">';
		strHtml += 'here is your Storage ';
		strHtml += '</div>';
		strHtml += '<div style="">';
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Storage');
	},
	_iterateLists: function(){
		zdLoadZooService(zdUserId);
		zooData = zdGetZoo();
		var zdZooData = eval( '('+zooData+')' );
		zdLogStatus('Loading Storage...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zd_fb_sig_user;
		//Items List
		var strListMove= '';
		var strListMove = 'Click a pic to sell <br>';
		var zdItemListMoveId = [];
		var zdItemListMoveIdQty = [];
		var numItems = 0;
		new Ajax.Request(
			zdLoadInventoryServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var arrInventoryData = eval( '('+transport.responseText+')' );
					if(arrInventoryData != null){
						if(arrInventoryData['success']){
							for(i in arrInventoryData["return_data"]){
								if(zdZooItems[i] != null){
									if(zdZooItems[i]['rarity'] ){
										zdItemListMoveId.push(i);
										zdItemListMoveIdQty[i]=arrInventoryData["return_data"][i][1][0];
									}else{//non-animal
										zdItemListMoveId.push(i);
										zdItemListMoveIdQty[i]=arrInventoryData["return_data"][i].length-1;
									}
									numItems++;
								}else{
									alert('You have items not in the items list - Data may not be correct!');
									zdLogStatus('You have items not in the items list - please try again when item list has been updated!');
								}
							}
						}
					}
					strListMove += '<div>';
					for (p=0;p<zdItemListMoveId.length;p++){
						strListMove += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 15%;height: 60px;";><img src="' + zdGetNewImgPath( zdItemListMoveId[p], 'smallImg' ) + '" width="40" height="40" style="float: left;" onClick="zdSellItemPrompt('+zdItemListMoveId[p]+');zdShowStorageToSell._iterateLists();" title="Click to sell" /><br /><br /><br />x '+arrItemQty[zdItemListMoveId[p]] +'</div> ';
					}
					strListMove += '</div>'
					zdLogStatus('Found '+numItems+' items on Storage...');
					zdExportIslandListMove.innerHTML = strListMove;
				}
			}
		);
	}
}
//-------------------------------------

function zdAutoPlaceItem(){
	var itemId = document.getElementById('zdPlaceItemId').value;
	var islandNum = parseInt(document.getElementById('zdPlaceIslandNum').value);
	var x = parseInt(document.getElementById('zdPlaceX').value); //start x
	var y = parseInt(document.getElementById('zdPlaceY').value); //start y
	var xl = parseInt(document.getElementById('zdPlaceXl').value); //how many in x
	var yl = parseInt(document.getElementById('zdPlaceYl').value); //how many in y
	var xs = parseInt(document.getElementById('zdPlaceXs').value); //x spacing
	var ys = parseInt(document.getElementById('zdPlaceYs').value); //y spacing
	if(zdZooItems[itemId]['rarity']){
		zdMoveZooItem(x,y,itemId,itemId,islandNum);
	}else{
		zdLogStatus('Loading inventory for '+zd_fb_sig_user+'...');
		var arrParameters = zdGetGenericParameters();
		new Ajax.Request(
			zdLoadInventoryServiceUrl, 
			{
				method: 'post',
				asynchronous: false,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					zdLogStatus('Making into an array...');
					var arrInventoryData = eval( '('+transport.responseText+')' );
					zdLogStatus('Looking for '+itemId+'...');
					var startX=x;
					var startY=y;
					if(arrInventoryData["return_data"][itemId] && arrInventoryData["return_data"][itemId].length>1){ 
						for(t=1;t<arrInventoryData["return_data"][itemId].length;t++){
						// iterate through inventory/item list
							if(y<startY+(yl*ys)){
								if(arrInventoryData["return_data"][itemId][t][0]){
									zdLogStatus('Found '+itemId+'...#'+arrInventoryData["return_data"][itemId][t][0]);
									zdWorkQueuePush( 'zdMoveZooItem('+x+','+y+','+itemId+','+arrInventoryData["return_data"][itemId][t][0]+','+islandNum+');' );
									x=x+xs;
									if(x>=(startX+(xl*xs))){
										y=y+ys;
										x=startX;
									} 
								}
							} 
						}
					}
					zdLogStatus('Starting to place...');
					zdWorkQueueStart();
					return;
				}
			}
		); 
	} 
}

function zdMoveAllItemToStorage(itemId) {
	// TO BE TRANSLATED
	if(confirm("Are you SURE you want to move all items to storage?\nNote: this can not be undone." )){
		if(itemId==null){
		var itemId = document.getElementById('zdPlaceItemId').value;
		}
		for(islandId=0;islandId<zdIslands;islandId++){
		zdLogStatus('Loading island '+(islandId+1)+' for '+zd_fb_sig_user+'...');
			var arrParameters = zdGetGenericParameters();
			arrParameters["friendId"] = zd_fb_sig_user;
			arrParameters["islandId"] = islandId;
			new Ajax.Request(
				zdLoadIslandServiceUrl, 
				{
					method: 'post',
					asynchronous: true,
					parameters: arrParameters,
					onSuccess : function(transport){
						zdSetResponse(transport.responseText);
						var strTransformed = zdTransformIsland( zdGetResponse() );
						var zdMoveItemData = eval( '('+strTransformed+')' );
						for(i=0;i<zdMoveItemData["return_data"].length;i++){
							var typeId = zdMoveItemData["return_data"][i][0];
							var objectId = 0;
							if(typeId == itemId){
								if(zdMoveItemData["return_data"][i][1] > 10000000){
									objectId = zdMoveItemData["return_data"][i][1]; // unique objects like tree, kiosk, etc
								}else{
									objectId = typeId; // animal
								}
								if(objectId != 0) {
									//zdWorkQueuePush( 'zdMoveZooItem(1, 1, '+typeId+', '+objectId+', 9999)' );
									zdMoveZooItem(1, 1, typeId, objectId, 9999);
								}
							}
						}
					}
				}
			);
		}
	}
}
/*
function zdGoldenInviter( goldenId){
	var iframeUrl = "zooPromotionInviteIframe.php?zooOwnerId=" + zd_fb_sig_user +
		"&goldenEgg=" + goldenId +
		"&type=9001&appname=" + zd_appname + "&version=" + zd_version + "&visit_zoo_swf_gateway_channel=" + zd_visit_zoo_swf_gateway_channel + "&achievement_header_mode=2" +
		"&inTutorial=&owner_name=" + PageData.player.name + 
		"&fb_sig_in_iframe=" + zd_fb_sig_in_iframe + "&fb_sig_base_domain=" + zd_fb_sig_base_domain + "&fb_sig_locale=" + zd_fb_sig_locale + 
		"&fb_sig_in_new_facebook=" + zd_fb_sig_in_new_facebook + "&fb_sig_time=" + zd_fb_sig_time + "&fb_sig_added=" + zd_fb_sig_added + 
		"&fb_sig_profile_update_time=" + zd_fb_sig_profile_update_time + "&fb_sig_expires=" + zd_fb_sig_expires +  
		"&fb_sig_user=" + zd_fb_sig_user + "&fb_sig_session_key=" + zd_fb_sig_session_key + 
		"&fb_sig_ss=" + zd_fb_sig_ss + "&fb_sig_cookie_sig=" + zd_fb_sig_cookie_sig + 
		"&fb_sig_api_key=" + zd_fb_sig_api_key + "&fb_sig_app_id=" + zd_fb_sig_app_id + 
		"&fb_sig=" + zd_fb_sig + "&fb_sig_ext_perms=" + fb_sig_ext_perms + 
		"&fb_sig_country=" + zd_fb_sig_country;
	window.open( iframeUrl+'#zd'+goldenId, '_blank' );
	// showInviter(iframeUrl);
	return;
}
*/
/* punking */
// heart attack
function zdHeartAttack(){
	zdLogStatus('Starting Heart Attack...');
	var questionParameters = {
		header: "HEADER_SORRY_PAL",
		image:  "http://cdn.rockyou.com/apps/zoo/item/largeImg/1501.gif",
		subtitle: "We have detected unusual activity in this account.",
		bodyText: "It seems that you might have been getting some stuff you shouldn't... Is this true? Have you been naughty? Dan Fab is giving you two options, your choice:",
		question: "Send a gift or ask for mercy?",
		hasCloseBox: true,
		buttons : ["BUTTON_SHARE", "BUTTON_HELP"],
		button_actions : [zdPunkMysteryGift, zdPunkLevel]
	}
	var d1 = new zooDialog();
	d1.show = d1.zooQuestionDialog(questionParameters);
}

function zdShowTutorial(){
	jQuery('#postTutorialDialog').show();
}

function zdPunkMysteryGift(){
	var userName = PageData.player.name;		
	zdCustomMysteryGift(
		userName + " has a mysterious gift to share with friends!",
		userName + " found a mysterious gift box during a treasure hunt!  There could be a valuable rare item in this gift box!",
		"http://cdn.rockyou.com/apps/zoo/feed/gifts/giftbox-130.gif",
		"Claim the Mysterious Gift!");
	return;
}

function zdPunkLevel(){
	shareExperienceLevelUp("PUNKED");
}

// let it snow
function zdLetItSnow(){
	zdLogStatus('Let it snow!');
	var numFlakes = 100;
	zdPaintFlake( numFlakes );
	setTimeout('zdUnPaintFlake('+numFlakes+');',1000);
}

function zdPaintFlake( numFlakes){
	var boxSize = 830;
	var minFlakeSize = 15;
	var maxFlakeSize = 30;
	var flakeLeft = Math.floor(Math.random()*(boxSize+1))-50;
	var flakeTop = Math.floor(Math.random()*(boxSize+1))-50;
	var flakeSize = Math.floor(Math.random()*(maxFlakeSize-minFlakeSize+1))+minFlakeSize;
	var flakeColours = new Array('#FFF', '#EEF', '#EFF', '#EFE', '#FFE', '#FEE', '#FEF', '#FFF', '#EEE', '#FFF');
	var flakeColour = flakeColours[Math.floor(Math.random()*(flakeColours.length))];
	objSnowFlake = document.createElement("div");
	objSnowFlake.setAttribute('id','zdSnowFlake'+numFlakes);
	objSnowFlake.setAttribute('style','position: absolute; left: '+flakeLeft+'px; top: '+flakeTop+'px; color: '+flakeColour+'; font-size: '+flakeSize+'em; font-family: sans-serif; z-index: 3000; opacity: .95;');
	if((numFlakes % 50) == 0){
		objSnowFlake.innerHTML = 'let it snow!';
	}else{
		objSnowFlake.innerHTML = '*';
	}
	document.getElementsByTagName("body")[0].appendChild(objSnowFlake);
	if(numFlakes > 1 )
		setTimeout('zdPaintFlake('+(numFlakes-1)+');',75);
}

function zdUnPaintFlake( numFlakes){
	var objSnowFlake = document.getElementById('zdSnowFlake'+numFlakes);
	if(objSnowFlake != null){
		objSnowFlake.setAttribute('style','display: none;');
		document.getElementsByTagName("body")[0].removeChild(objSnowFlake);
		if(numFlakes > 1 )
			setTimeout('zdUnPaintFlake('+(numFlakes-1)+');',10);
	}else{
		setTimeout('zdUnPaintFlake('+numFlakes+');',5000);
	}
}
// jumper
var Jumper = {
	enabled: false,
	timesJumped: 0,
	maxJumps: 10,
	jump: function(){
		if(Jumper.enabled){
			if(Jumper.timesJumped < Jumper.maxJumps){
				Jumper.timesJumped++;
				var zdBody = document.getElementById('zdBox');
				var newX = Math.floor(400*Math.random());
				var newY = Math.floor(600*Math.random());
				zdBody.setAttribute('style','text-align:left; display: block; left: '+newX+'px; top: '+newY+'px;');
				window.setTimeout("var zdBody = document.getElementById('zdBox');zdBody.setAttribute('style','text-align:left; display: block; left: 0px; top: 0px;');", 2*zdAjaxCallDelay); 
			}
		}
	}
};

function zdClearIsland(){
	// TO BE TRANSLATED
	var objIslandId = document.getElementById('zdIslandId');
	var objLimited = document.getElementById('zdLimited');
	var islandId = parseInt(objIslandId.options[objIslandId.selectedIndex].value);
	var limited = parseInt(objLimited.options[objLimited.selectedIndex].value);
	if(confirm("Are you SURE you want to move all items from this island to storage?\nNote: this can not be undone." )){
		zdLogStatus('Loading island '+(islandId+1)+' for '+zd_fb_sig_user+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zd_fb_sig_user;
		arrParameters["islandId"] = islandId;
		new Ajax.Request(
			zdLoadIslandServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var strTransformed = zdTransformIsland( zdGetResponse() );
					var zdMoveItemData = eval( '('+strTransformed+')' );
					zdLogStatus('Have '+zdMoveItemData["return_data"].length+' items on island...');
					if(limited == 0) {
						zdLogStatus('Moving all '+zdMoveItemData["return_data"].length+' items from '+(islandId+1)+'...');
					}else{
						zdLogStatus('Moving all but animals from '+(islandId+1)+'...');
					}
					for(i=0;i<zdMoveItemData["return_data"].length;i++){
						var typeId = zdMoveItemData["return_data"][i][0];
						var objectId = 0;
						if(zdMoveItemData["return_data"][i][1] > 10000000){
							objectId = zdMoveItemData["return_data"][i][1]; // unique objects like tree, kiosk, etc
						} else if(limited == 1){
							objectId = 0;
						}else{
							objectId = typeId; // animal
						}
						if(objectId != 0) {
						zdWorkQueuePush( 'zdMoveZooItem(1, 1, '+typeId+', '+objectId+', 9999)' );
						}
					}
					zdWorkQueueStart();
					return;
				}
			}
		);
	}
}

function zdFillGreenHousesOnAllIslands(preferredTreeId) {
	for(i=0;i<zdIslands;i++){
		zdWorkQueuePush( 'zdFillGreenHousesOnIsland('+i+','+preferredTreeId+');' );
	}
	zdWorkQueueStart();
	return;
}

function zdFillGreenHousesOnIsland(islandId, preferredTreeId) {
	if(preferredTreeId==0) {
	preferredTreeId = (prompt("Enter Tree Id", 214));
	}else{
		preferredTreeId = preferredTreeId;
	}
	zdDeleteCookies();
	zdLoadZooService(zdUserId);
	zdLogStatus('Loading island '+(islandId+1)+' for '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zd_fb_sig_user;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strTransformed = zdTransformIsland( zdGetResponse() );
				var zdMoveItemData = eval( '('+strTransformed+')' );
				for(i=0;i<zdMoveItemData["return_data"].length;i++){
					if((zdMoveItemData["return_data"][i][0] >= 556) && (zdMoveItemData["return_data"][i][0] <= 558)){
						// only green houses
						var strToQueue = 'zdGetGreenHouseTreeCount('+zdMoveItemData["return_data"][i][0]+', '+zdMoveItemData["return_data"][i][1]+', '+preferredTreeId+')';
						zdWorkQueuePush( strToQueue );
						// zdLogStatus('Added: '+strToQueue+' ');
					}
				}
				// zdLogStatus('Queue is now '+zdWorkQueueSize()+'...');
				zdWorkQueueStart();
				return;
			}
		}
	);
}

function zdGetGreenHouseTreeCount(ghItemId, ghObjectId, preferredTreeId) {
//	zdWorkQueueStop();
	var arrParameters = zdGetGenericParameters();
	arrParameters["category"] = "greenhouse";
	arrParameters["page"] = 1;
	arrParameters["containerTypeId"] = ghItemId;
	arrParameters["containerId"] = ghObjectId;
	arrParameters["type"] = "getGHInfo_built";
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdGHCountResponseData = eval( '('+transport.responseText+')' );
				var intTreeCount = zdGHCountResponseData["return_data"]["treeCount"];
				var intCapacity = zdGHCountResponseData["return_data"]["capacity"];
//				zdLogStatus('Capacity '+intCapacity+' ...');
//				zdLogStatus('Treecount '+intTreeCount+' ...');
				var treesNeeded = intCapacity - intTreeCount;
//				zdLogStatus('Needs '+treesNeeded+' ...');
				zdLogStatus('Greenhouse '+ghObjectId+' needs '+treesNeeded+' trees...');
				if(treesNeeded > 0){
	//				zdWorkQueuePush( 'zdLoadGreenHouseFromInventory('+ghItemId+', '+ghObjectId+', '+preferredTreeId+', '+treesNeeded+');' );
					zdLoadGreenHouseFromInventory(ghItemId, ghObjectId, preferredTreeId, treesNeeded);
//					waitsec(treesNeeded*1000);
				}
			}
		}
	);
}

function zdLoadGreenHouseItem(ghItemId, ghObjectId, treeId, treeObjId) {
	// zdLogStatus('Adding '+zdGetAnimalForId(treeId)['name']+' to the '+zdGetAnimalForId(ghItemId)['name']+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["action"] = "inventory";
	arrParameters["containerTypeId"] = ghItemId;
	arrParameters["containerId"] = ghObjectId;
	arrParameters["typeId"] = treeId;
	arrParameters["objectId"] = treeObjId;
	arrParameters["type"] = "placeInside";
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdLoadResponseData = eval( '('+transport.responseText+')' );
				if(zdLoadResponseData["return_data"]["full"]) {
					zdLogStatus('Greenhouse is full...');
					zdClearWorkQueue();
				}else{
					zdLogStatus('Added '+zdGetAnimalForId(treeId)['name']+' to the '+zdGetAnimalForId(ghItemId)['name']+' ('+ghObjectId+')...');
					return;
				}
			},
			onFailure : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Failed add '+zdGetAnimalForId(treeId)['name']+' to the '+zdGetAnimalForId(ghItemId)['name']+'...');
				return;
			}
		}
	); 
}

function zdLoadGreenHouseFromInventory (ghItemId, ghObjectId, preferredTreeId, treesNeeded) {
	zdLogStatus('Loading inventory for '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdLoadInventoryServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Making into an array...');
				var arrInventoryData = eval( '('+transport.responseText+')' );
				zdLogStatus('Initialized and about to iterate...');
				var t = 1;
				var n = treesNeeded;
				zdLogStatus('Looking for '+n+' of tree '+preferredTreeId+'...');
				while ((t<arrInventoryData["return_data"][preferredTreeId].length) && (n>0) && (arrInventoryData["return_data"][preferredTreeId].length>2)){
					// iterate through inventory/item list
					if(arrInventoryData["return_data"][preferredTreeId][t][0]){
						zdLogStatus('Found tree '+preferredTreeId+'...');
						zdWorkQueuePush( 'zdLoadGreenHouseItem('+ghItemId+', '+ghObjectId+', '+preferredTreeId+', '+arrInventoryData["return_data"][preferredTreeId][t][0]+');' );
						n--;
					}
					t++; 
				}
				zdLogStatus('Starting to move trees...');
				zdWorkQueueStart();
				return;
			}
		}
	); 
}

function zdRepeatFill(ghItemId, ghObjectId, preferredTreeId) {
zdLoadGreenHouseFromInventory (ghItemId, ghObjectId, preferredTreeId, 3);
	setTimeout('zdRepeatMove('+ghItemId+', '+ghObjectId+', '+preferredTreeId+');',6000);
}

function zdRepeatMove(ghItemId, ghObjectId, preferredTreeId) {
	for(i=0;i<6;i++){
		var arrParameters = zdGetGenericParameters();
		arrParameters["containerTypeId"] = ghItemId;
		arrParameters["containerId"] = ghObjectId;
		arrParameters["typeId"] = preferredTreeId;
		arrParameters["type"] = "moveOut";
		arrParameters["zooOwnerId"] = zd_fb_sig_user;
		new Ajax.Request(
			zdBuildablesServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var zdLoadResponseData = eval( '('+transport.responseText+')' );
					if(zdLoadResponseData["return_data"]["success"]==true)  {
						zdLogStatus('moved');
						zdClearWorkQueue();
					}else{
						zdLogStatus('not moved');
						return;
					}
				},
			}
		); 
	}
	setTimeout('zdRepeatFill('+ghItemId+', '+ghObjectId+', '+preferredTreeId+')',5000);
}

function zdShakeGreenHouse(containerTypeId, containerId, islandId) {
	// TO BE TRANSLATED
	zdLogStatus('Shaking '+zdGetAnimalForId(containerTypeId)['name']+' #'+containerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["islandId"] = islandId;
	arrParameters["containerTypeId"] = containerTypeId;
	arrParameters["containerId"] = containerId;
	arrParameters["type"] = "shake";
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Shaken '+zdGetAnimalForId(containerTypeId)['name']+' #'+containerId+'...');
				return;
			}
		}
	); 
}

function zdAdoptFlyout(sortOrder) {
	var strHtml = '';
	strHtml += '<h2>Post Adoptable Animals:</h2>';
	strHtml += '<div style="text-align: left;"><a href="javascript:zdAdoptAll();">Post ALL</a></div>';
	strHtml += '<div style="text-align: left;">Order by: <a href="javascript:zdAdoptFlyout(\'id\');">id</a> / <a href="javascript:zdAdoptFlyout(\'revid\');">reverse id</a> / <a href="javascript:zdAdoptFlyout(\'date\');">date</a> / <a href="javascript:zdAdoptFlyout(\'revdate\');">reverse date</a></div>';
	strHtml += '<div id="zdItemList" style="height: 650px; width: 300px; overflow: scroll; ">';
	if(sortOrder=='id') {
		for(i=1;i<20000;i++){
			if(zdZooAdoptItems[i] != null){
				strHtml += '<div class="zdAdoptItem">';
				strHtml += '<a href="javascript:zdSpawnAdoption('+i+');"';
				strHtml += '><img src="' + zdGetNewImgPath( i, 'smallImg' ) + '" height="50" width="50" />';
				strHtml += '</div>';
			}
		}
	}else if(sortOrder=='revid') {
		for(i=20000;i>0;i--){
			if(zdZooAdoptItems[i] != null){
				strHtml += '<div class="zdAdoptItem">';
				strHtml += '<a href="javascript:zdSpawnAdoption('+i+');"';
				strHtml += '><img src="' + zdGetNewImgPath( i, 'smallImg' ) + '" height="50" width="50" />';
				strHtml += '</div>';
			}
		}
	}else if(sortOrder=='name') {
		var arrIdByName = zdZooAdoptItems["alphaorder"];
		for(l=0;l<arrIdByName.length;l++){
			strHtml += '<div class="zdAdoptItem">';
			strHtml += '<a href="javascript:zdSpawnAdoption('+(arrIdByName[l])+');"';
			strHtml += '><img src="' + zdGetNewImgPath( arrIdByName[l], 'smallImg' ) + '" height="50" width="50" />';
			strHtml += '</div>';
		}
	}else if(sortOrder=='date') {
		var arrIdByDate = zdZooAdoptItems["dateorder"];
		for(l=0;l<arrIdByDate.length;l++){
			strHtml += '<div class="zdAdoptItem">';
			strHtml += '<a href="javascript:zdSpawnAdoption('+(arrIdByDate[l])+');"';
			strHtml += '><img src="' + zdGetNewImgPath( arrIdByDate[l], 'smallImg' ) + '" height="50" width="50" />';
			strHtml += '</div>';
		}
	}else {
		var arrIdByDate = zdZooAdoptItems["dateorder"];
		for(l=(arrIdByDate.length-1);l>=0;l--){
			strHtml += '<div class="zdAdoptItem">';
			strHtml += '<a href="javascript:zdSpawnAdoption('+(arrIdByDate[l])+');"';
			strHtml += '><img src="' + zdGetNewImgPath( arrIdByDate[l], 'smallImg' ) + '" height="50" width="50" />';
			strHtml += '</div>';
		}
	}
	strHtml += '</div>';
	zdFlyout(strHtml,'Adopt');
	return;
}

function zdAdoptAll(){
	for(i=1;i<20000;i++){
		if(zdZooAdoptItems[i] != null){
			zdWorkQueuePush('zdSpawnAdoption('+i+');');
		}
	}
	zdWorkQueueStart();
}

function zdBuildAdopt( itemId){
	var strHtml = '';
	// zdLogStatus('Building shop item '+itemId+'...');
	strHtml += '<div class="zdShopItemMini"';
	strHtml += ' onClick="zdShowShopPreview('+itemId+');"';
	strHtml += '><img src="' + zdGetNewImgPath( itemId, 'smallImg' ) + '" /><br/>';
	strHtml += '#' + itemId + ' ' + zdZooItems[itemId]['name'];
	strHtml += '</div>';
	return strHtml;
}

function zdSetCustomiseAdoptImage( imageUrl){
	document.getElementById('CAFitemImage').value = imageUrl;
	document.getElementById('CAFitemImageDisplay').src = document.getElementById('CAFitemImage').value;
	return;
}

// customise adoption - raise window
function zdCustomiseAdopt( itemId){
var adoptName=zdGetAnimalForId(itemId)['name'];
	if(zdZooItems['success']){
		if(zdZooItems[itemId] != null){
			var strHtml = '';
			// title
			strHtml += '<h2>' + zdui.getLabel("customadopt_flyout_title") + ': ' + adoptName + ' ('+itemId+')</h2>';
			strHtml += '<div id="zdShopPreviewBody">';
			strHtml += '<form method="GET" action="#" id="zdAdoptCustomiseForm" name="zdAdoptCustomiseForm"> ';
			strHtml += '<img src="';
			strHtml += zdGetNewImgPath( itemId, 'smallImg' );
			strHtml += '" alt="" id="CAFitemImageDisplay" width="75" height="75" />';
			strHtml += '</div>';
			strHtml += '<table border="0"> ' + "\n";
			strHtml += '<tr><td>' + zdui.getLabel("customadopt_flyout_name") + '</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemName" name="itemName" value="'+adoptName+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>' + zdui.getLabel("customadopt_flyout_image") + '</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemImage" name="itemImage" value="'+zdGetNewImgPath( itemId, 'largeImg' )+'" style="width: 240px;" onBlur="getElementById(\'CAFitemImageDisplay\').src = getElementById(\'CAFitemImage\').value;"/>';
			// show image selection
			strHtml +=	'Custom Img: <select name="zdAdoptTheme" id="zdAdoptTheme" onchange="zdEvalFromList(\'zdAdoptTheme\');">';
			strHtml += '<option value="zdSetCustomiseAdoptImage(\''+ zdGetNewImgPath( itemId, 'largeImg' ) +'\');">default</option>';
			strHtml += '<option value="zdSetCustomiseAdoptImage(\''+ zdGetNewImgPath( itemId, 'smallImg' )+'\');">' + zdui.getLabel("shop_flyout_images_small") + '</option>';
			if(zdZooItems[itemId]['gestation'] != null){
				strHtml += '<option value="zdSetCustomiseAdoptImage(\''+ zdGetBabyPath( itemId )+'\');">' + zdui.getLabel("shop_flyout_images_baby") + '</option>';
			}
			for(t=0;t<zdZooAdoptItems["themes"]["list"].length;t++) {
				strHtml += '<option value="zdSetCustomiseAdoptImage(\'https://squirrelzw.com/img/adoptimg/'+ zdZooAdoptItems["themes"]["list"][t]+'/'+ itemId +'.jpg\');">'+zdZooAdoptItems["themes"]["list"][t]+'</option>';
			}
			'</select>';
			// end image selection
			strHtml += '</td></tr> ' + "\n" ;
			strHtml += '<tr><td>' + zdui.getLabel("customadopt_flyout_title") + '</td> ' ;
			strHtml += '<td><textarea id="CAFitemTitle" name="itemTitle" style="width: 240px;">'+zdGetAdoptStoryTitle(zdZooAdoptItems[itemId][2],adoptName)+'</textarea></td></tr> ' + "\n" ;
			strHtml += '<tr><td>' + zdui.getLabel("customadopt_flyout_bodytext") + '</td> ' ;
			strHtml += '<td><textarea id="CAFitemText" name="itemText" style="width: 240px;">'+zdGetAdoptStoryBody(zdZooAdoptItems[itemId][2],adoptName)+'</textarea></td></tr> ' + "\n" ;
			strHtml += '<tr><td>' + zdui.getLabel("customadopt_flyout_button") + '</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemButton" name="itemButton" value="'+zdGetAdoptActionTitle(zdZooAdoptItems[itemId][2],zdZooAdoptItems[itemId][1])+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>&nbsp;</td> ' ;
			strHtml += '<td><input type="button" id="button52" value="' + zdui.getLabel("customadopt_flyout_postbutton") + '" onClick="zdUpdateCustomisedLink();"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td style="width: 100px;">&nbsp;</td> ' ;
			strHtml += '<td><p style="display: block; clear:both; border:2px #000 solid; padding:5px; background: #FEC; text-align: center; font-weight: bold;"><span id="zdCustomAdoptLink" onClick="#">' + zdui.getLabel("customadopt_flyout_editingnotadvised") + '</span></p></td> ' + "\n" ;
			strHtml += '<tr><td>item ID</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemId" name="itemId" value="'+itemId+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>unique hash</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemHash" name="itemHash" value="'+zdZooAdoptItems[itemId][0]+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>Story Id</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemQ1" name="itemQ1" value="'+zdZooAdoptItems[itemId][2]+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>event type</td> ' ;
			strHtml += '<td><input type="text" id="CAFeventType" name="eventType" value="'+zdGetAdoptEventType(zdZooAdoptItems[itemId][2])+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>Level</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemQ2" name="itemQ2" value="'+zdZooAdoptItems[itemId][3]+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>short name</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemShort" name="itemShort" value="'+zdGetAnimalForId(itemId)['key']+'" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>???</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemQ3" name="itemQ3" value="0" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '<tr><td>source</td> ' ;
			strHtml += '<td><input type="text" id="CAFitemSource" name="itemSource" value="feedDlgPrompt" style="width: 240px;"/></td></tr> ' + "\n" ;
			strHtml += '</table> ' ;
			strHtml += '</form>';
			zdFlyout(strHtml,'Custom Adopt');
		}
	}
	return;
}

// update customised adoption link
function zdUpdateCustomisedLink(){
	var zdCustomAdoptLink = document.getElementById('zdCustomAdoptLink');
	if(zdCustomAdoptLink) {
		var zdAdoptCustomiseForm = document.getElementById('zdAdoptCustomiseForm');
		// itemId,itemName,itemImage,itemHash,itemTitle,itemText,itemButton,itemQ1,eventType,itemQ2,itemShort,itemQ3,itemSource
		zdShowGiftFeedFBDialog(
			document.getElementById('CAFitemId').value // itemId
			,document.getElementById('CAFitemName').value // itemName
			,document.getElementById('CAFitemImage').value // itemImage
			,document.getElementById('CAFitemHash').value // itemHash
			,document.getElementById('CAFitemTitle').value // itemTitle
			,document.getElementById('CAFitemText').value // itemText
			,document.getElementById('CAFitemButton').value // itemButton
			,document.getElementById('CAFitemQ1').value // itemQ1
			,document.getElementById('CAFeventType').value // eventType
			,document.getElementById('CAFitemQ2').value // itemQ2
			,document.getElementById('CAFitemShort').value // itemShort
			,document.getElementById('CAFitemQ3').value // itemQ3
			,document.getElementById('CAFitemSource').value // itemSource
		);
		zdCustomAdoptLink.setAttribute('onClick',strCustomAdoptLink);
	}
	return;
}

// Collectible upgrade
var zdCollectibles = {
	// variables
	intItemRatio: 3,
	intMaxUpgrade: 10,
	// functions
	upgradeCollectiblePrompt: function ( intTypeId){
		var intQuantityOfOrginal = parseInt(prompt('How many collectible '+zdGetAnimalForId(intTypeId)['name']+' to upgrade to '+zdGetAnimalForId(intTypeId+1)['name']+'?', 3));
		if(intQuantityOfOrginal >=3){
			zdCollectibles.upgradeCollectible( intTypeId, intQuantityOfOrginal );
		}
		return;
	},
	upgradeCollectible: function ( intTypeId, intQuantityOfOrginal){
		var numItemsToUpgrade = intQuantityOfOrginal;
		while ( numItemsToUpgrade >= zdCollectibles.intItemRatio){
			if(numItemsToUpgrade >= (zdCollectibles.intItemRatio * zdCollectibles.intMaxUpgrade)){
				zdWorkQueuePush('zdCollectibles._upgradeCollectibleAjax( '+intTypeId+', '+zdCollectibles.intMaxUpgrade+' );');
				numItemsToUpgrade = numItemsToUpgrade - (zdCollectibles.intItemRatio * zdCollectibles.intMaxUpgrade);
			}else{
				zdWorkQueuePush('zdCollectibles._upgradeCollectibleAjax( '+intTypeId+', '+Math.floor(numItemsToUpgrade/zdCollectibles.intItemRatio) +' );');
				numItemsToUpgrade = numItemsToUpgrade - (zdCollectibles.intItemRatio * Math.floor(numItemsToUpgrade/zdCollectibles.intItemRatio));
			}
			// zdLogStatus('Items left '+numItemsToUpgrade+'...');
		}
		// zdLogStatus('Upgrading '+(intQuantityOfOrginal-numItemsToUpgrade)+', leaving '+numItemsToUpgrade+' of '+zdGetAnimalForId(intTypeId)['name']+'...');
		zdWorkQueueStart();
		return;
	},
	// Upgrade all in a group
	_upgradeAllCollectibleAjax: function ( intTypeId, intQuantity, numInGroup){
		if(numInGroup > 0){
			if(intQuantity > 0){
				var arrParameters = zdGetGenericParameters();
				arrParameters["action"] = "upgradeToItem";
				arrParameters["typeid"] = intTypeId;
				arrParameters["qty"] = intQuantity;
				new Ajax.Request(
					zdShopActionServiceUrl,
					{
						method: 'post',
						asynchronous: true,
						parameters: arrParameters,
						onSuccess: function(transport) {
							zdSetResponse(transport.responseText);
							var zdUpgradeResponseData = eval( '('+transport.responseText+')' );
							if(zdUpgradeResponseData["return_data"]["success"])  {
								zdLogStatus('Upgraded '+(zdCollectibles.intItemRatio*intQuantity)+' '+zdGetAnimalForId(intTypeId)['name']+' #'+intTypeId+' to '+(intQuantity)+' '+zdGetAnimalForId(intTypeId+1)['name']+' #'+(intTypeId+1)+'...');
								zdCollectibles._upgradeAllCollectibleAjax( intTypeId, intQuantity, numInGroup );
							}else{
								zdCollectibles._upgradeAllCollectibleAjax( intTypeId, (intQuantity-3), numInGroup );
							}
						}
					}
				);
			}else{
				zdLogStatus('Finished upgrading '+zdGetAnimalForId(intTypeId)['name']+'...');
				zdCollectibles._upgradeAllCollectibleAjax( intTypeId+1, 10, (numInGroup-1) );	
			}
		}else{
		zdLogStatus('Finished upgrading collectible group...');
			return ;
		}
	},
	_upgradeCollectibleAjax: function ( intTypeId, intQuantity){
		// lush tree: 300-307
		// flowering tree: 308-315
		// topiary: 316-324
		// sculpture: 325-333
		// mushroom: 373-379
		// flowerpot: 380-386
		zdDeleteCookies();
		if(intQuantity > 10){
			intQuantity = 10;
		}
		// zdLogStatus('Upgrading item '+zdGetAnimalForId(intTypeId)['name']+' #'+intTypeId+' '+intQuantity+' times...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "upgradeToItem";
		arrParameters["typeid"] = intTypeId;
		arrParameters["qty"] = intQuantity;
		new Ajax.Request(
			zdShopActionServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdSetResponse(transport.responseText);
					zdLogStatus('Upgraded '+(zdCollectibles.intItemRatio*intQuantity)+' '+zdGetAnimalForId(intTypeId)['name']+' #'+intTypeId+' to '+(intQuantity)+' '+zdGetAnimalForId(intTypeId+1)['name']+' #'+(intTypeId+1)+'...');
				}
			}
		);
	}
}

// Seasonal promotion
var intseasonalEnd;var intseasonalTreeEnd;
var zdSeasonal = {
	// variables
	arrGifts: [],
	arrFriends: [],
	arrSeasonalList: [],
	arrFilteredSeasonalList: [],
	//arrAnimalIds: [9775,9776,9777,9778,9779,9780,9781,9782,9783], //tree animals
	arrSeasonalAskFor: [],
	arrSeasonalItems: [],
	arrSeasonalAnimals: [],
	arrSeasonalUpgradedAnimals: [],
	arrBuildableItems: [],
	//treeProjId: 40,
	missionProjId: 0,
	buildableProjId: 0,
	// UI
	_popOutResultsBuildable: function(strStatus) {
		// pop out results tab
		zdSeasonal.arrSeasonalList = eval( '('+strStatus+')' );
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]){
		zdSeasonal.arrSeasonalItems=[];
			zdSeasonal.arrSeasonalAnimals=[];
			zdSeasonal.arrSeasonalAskFor=[];
			var items=(zdSeasonal.arrSeasonalList['return_data']['projects']['seasonal']['items']);
			for(key in items){
				if(items[key]['part']){
					zdSeasonal.arrSeasonalItems.push(key);
					var askFor='askFor'+(key.toLowerCase()).replace(/[\s-\']+/g,'');
					zdSeasonal.arrSeasonalAskFor.push(askFor);
				}else if(items[key]['animal']){
					zdSeasonal.arrSeasonalAnimals.push(key);
				}else if(items[key]['upgradeAnimal']){
					zdSeasonal.arrSeasonalUpgradedAnimals.push(key);
				}
			}
		}
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]){
			zdSeasonal.arrBuildableItems=[];
			var build=(zdSeasonal.arrSeasonalList['return_data']['projects']['seasonalBuildable']['materials']);
			for(k=0;k<zdSeasonal.arrSeasonalAnimals.length;k++){ 
				for(key in build){
					if( build[key]["name"].toLowerCase().replace(/\'/,"")==items[zdSeasonal.arrSeasonalAnimals[k]]["materialName"].toLowerCase().replace(/\'/,"") ){
						zdSeasonal.arrBuildableItems.push(key);
						}
				}
			}
		}
		zdLogStatus( 'Creating Seasonal flyout' );
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;' + zdui.getLabel("seasonal_flyout_title") + '</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">'; 
		strHtml += '<span style="font-weight: bold; color: #F00;">MANY OF THESE ACTIVITIES COST WLP!</span>';
	// list of seasonal items
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]){
			intseasonalEnd = setInterval("zdSeasonal.seasonalEnd();",1000);
			strHtml += '<h3>Time Remaining:<input type="button" style="float:right;" id="button64" value="' + zdui.getLabel("refresh") + '" onClick="zdSeasonal.showSeasonalBuildableStatus();" /><br>';
			strHtml += '<b id="seasonalEnd">'+intseasonalEnd;
			strHtml += '</b></h3>';
			strHtml += '<div class="zdShopItemMini" onclick="zdSwitchSF(1,\'buildable\');" style="width:29%;height:70px;text-align: center;border-radius: 2em;"><img width="40" height="40" src="'+zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[0]]["id"], 'smallImg' )+'"><br><b>Parts</b></div><div class="zdShopItemMini" onclick="zdSwitchSF(2,\'buildable\');" style="width:29%;height:70px;text-align: center;border-radius: 2em;"><img width="40" height="40" src="'+zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[0]]["id"], 'smallImg' )+'"><br><b>Animals</b></div><div class="zdShopItemMini" onclick="zdSwitchSF(3,\'buildable\');" style="width:29%;height:70px;text-align: center;border-radius: 2em;"><img width="40" height="40" src="';
			if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["completed"]!=1){
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["typeId"], 'smallImg' );
			}else{
				strHtml += zdGetNewImgPath( zdSeasonal.arrBuildableItems[0], 'smallImg' );
			}
			strHtml += ' "><br><b>Buildable</b></div> ';
			strHtml += '<div id="buildable1">';
			strHtml += '<p><b>Items:</b> Ask / Collect Every 5min / Buy For WLP / Send to ALL</p>';
			//strHtml += '<ul>';
//			strHtml += '<li><a href="javascript:zdSeasonal.scheduleCollectAllSeasonalItems();">Collect All</a> / <a href="javascript:zdQuizCash(100);">Collect '+zdSeasonal.arrSeasonalItems[zdSeasonal.arrSeasonalItems.length-2]+' (Quiz)</a></li>';
			strHtml += '<li><a href="javascript:zdSeasonal.scheduleCollectAllSeasonalItems();">Collect All</a> / <a href="javascript:zdMultiQuiz();">Collect '+zdSeasonal.arrSeasonalItems[zdSeasonal.arrSeasonalItems.length-2]+' (Quiz)</a></li>';
			strHtml += '<li><a href="javascript:zdSeasonal.sendRndPartAllZoomates();">Send Random Part to Each Zoomate</a> / <a href="javascript:zdSeasonal.sendRndPartAll();">Send Random Part to Each Friend</a></li>';
			//strHtml += '</ul>';
			for(i=0;i<zdSeasonal.arrSeasonalItems.length;i++){
				if(i==zdSeasonal.arrSeasonalItems.length-2){
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a> / <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].shareUpgrade(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Share</a><br>';
				}else if(i==zdSeasonal.arrSeasonalItems.length-1){
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a><br>';
				}else{
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a><br>';
				}
			}
			//Animals
			strHtml +='</div><div id="buildable2" style="display:none;"><p><b>Animals: </b>(Qty - QtyUltra)</p>';
			//strHtml +='<ul>';
			for(a=0;a<zdSeasonal.arrSeasonalAnimals.length;a++){
				strHtml += ' <div style="height: 36px;display:block"><img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["id"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml += ' <img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalUpgradedAnimals[a]]["id"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml +=''+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["name"]+'('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["amountOwned"]+'-'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalUpgradedAnimals[a]]["amountOwned"]+'):<br><a href="javascript:zdSeasonal.getMissionAnimal(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');" title="Requires '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["partCost"][zdSeasonal.arrSeasonalItems[0]]+' of each part">Complete</a> / <a href="javascript:var intAmount = parseInt(prompt(\'How Many\', \'1\'));setIntervalX(function(){zdSeasonal.getMissionAnimal2(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');}, 900, intAmount);"  title="Requires '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["partCost"][zdSeasonal.arrSeasonalItems[0]]+' of each part">Repeat</a> / <a href="javascript:zdSeasonal.upgradeForWlp('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["id"]+');" title="Cost: '+(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["upgradeCost"])*2+'WLP">Upgrade</a> / <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].shareUpgrade(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');">Share</a></div>';
			}
				//strHtml += '</ul>';
		}else{
			strHtml += '<p><h3>No Currrent Seasonal Animal Promotion</h3></p>';
		}
		//Buildable
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]){
			strHtml += '</div><div id="buildable3" style="display:none;"><p><b>Buildable:</b></p>';
			//strHtml += '<ul>';
			if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["completed"]==1){
				strHtml += '<div>Buildable Level: COMPLETE!';
			}else if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["level"]==(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["lastLevel"]-1)){
				strHtml += ' <div style="height: 36px;display:block"><img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["typeId"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml += ' Buildable Level: ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["level"] + ' / '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["lastLevel"]+'  <br> <a href="javascript:zdSeasonal.multiLevelup('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["typeId"]+');">Multi-Upgrade</a>';
			}else{
				strHtml += ' <div style="height: 36px;display:block"><img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["typeId"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml += ' Buildable Level: ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["level"] + ' / '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["lastLevel"]+' <br> <a href="javascript:zdSeasonal.buildableLevelup('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["typeId"]+');zdSeasonal.showSeasonalBuildableStatus();">Upgrade</a>';
			}
			if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]){
				strHtml += ' / <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].shareMaterial();">Share '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["materials"][zdSeasonal.arrBuildableItems[0]]["name"]+'</a></div>';			
				if(zdSeasonal.buildableProjId!=0){
					for(b=0;b<zdSeasonal.arrBuildableItems.length;b++){
						strHtml += ' <div style="height: 21px;display:block"><img src="';
						strHtml += zdGetNewImgPath( zdSeasonal.arrBuildableItems[b], 'smallImg' );
						strHtml += '" alt="" align="left" width="20" height="20" /> ';
						strHtml += ''+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["materials"][zdSeasonal.arrBuildableItems[b]]["name"]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["materials"][zdSeasonal.arrBuildableItems[b]]["count"] + ' / '+ zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]["materials"][zdSeasonal.arrBuildableItems[b]]["needs"] +' &mdash; <a href="javascript:for(i=0;i<=5;i++)zdSeasonal.materialHarvest('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[b]]["id"]+');">Rare</a>;<a href="javascript:for(i=0;i<=5;i++)zdSeasonal.materialHarvest('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[b]]["upgradeAnimalId"]+');">Ultra</a></div>';
					}
//					strHtml += '<p><input type="button" id="button53" value="Harvest All Materials" onClick="zdSeasonal.harvestAllMaterials();" /> ';
				}
				strHtml += '</p></div>';
			}
			//strHtml += '</ul>';
		}else{
			strHtml += '<p><h3>No Current Seasonal Buildable...</h3></p>';
		}
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Buildable');
		return;
	},
	_popOutResultsBuildable2: function(strStatus) {
		// pop out results tab
		zdSeasonal.arrSeasonalList = eval( '('+strStatus+')' );
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]){
			zdSeasonal.arrSeasonalItems=[];
			zdSeasonal.arrSeasonalAnimals=[];
			zdSeasonal.arrSeasonalAskFor=[];
			var items=(zdSeasonal.arrSeasonalList['return_data']['projects']['seasonal']['items']);
			for(key in items){
				if(items[key]['part']){
					zdSeasonal.arrSeasonalItems.push(key);
					var askFor='askFor'+(key.toLowerCase()).replace(/[\s-\']+/g,'');
					zdSeasonal.arrSeasonalAskFor.push(askFor);
				}else if(items[key]['animal']){
					zdSeasonal.arrSeasonalAnimals.push(key);
				}else if(items[key]['upgradeAnimal']){
					zdSeasonal.arrSeasonalUpgradedAnimals.push(key);
				}
			}
		}
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonalBuildable"]){
			zdSeasonal.arrBuildableItems=[];
			var build=(zdSeasonal.arrSeasonalList['return_data']['projects']['seasonalBuildable']['materials']);
			for(k=0;k<zdSeasonal.arrSeasonalAnimals.length;k++){ 
				for(key in build){
					if( build[key]["name"].toLowerCase().replace(/\'/,"")==items[zdSeasonal.arrSeasonalAnimals[k]]["materialName"].toLowerCase().replace(/\'/,"") ){
						zdSeasonal.arrBuildableItems.push(key);
					}
				}
			}
		}
		zdLogStatus( 'Creating Seasonal flyout' );
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;' + zdui.getLabel("seasonal_flyout_title") + '</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">'; 
		strHtml += '<span style="font-weight: bold; color: #F00;">MANY OF THESE ACTIVITIES COST WLP!</span>';
	// list of seasonal items
		if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]){
			intseasonalEnd = setInterval("zdSeasonal.seasonalEnd();",1000);
			strHtml += '<h3>Time Remaining:<input type="button" style="float:right;" id="button64" value="' + zdui.getLabel("refresh") + '" onClick="zdSeasonal.showSeasonalBuildableStatus2();" /><br>';
			strHtml += '<b id="seasonalEnd">'+intseasonalEnd;
			strHtml += '</b></h3>';
			strHtml += '<div class="zdShopItemMini" onclick="zdSwitchSF(1,\'buildable\');" style="width:29%;height:70px;text-align: center;border-radius: 2em;"><img width="40" height="40" src="'+zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[0]]["id"], 'smallImg' )+'"><br><b>Parts</b></div><div class="zdShopItemMini" onclick="zdSwitchSF(2,\'buildable\');" style="width:29%;height:70px;text-align: center;border-radius: 2em;"><img width="40" height="40" src="'+zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[0]]["id"], 'smallImg' )+'"><br><b>Animals</b></div><br><br><br><br><br><br> ';
			strHtml += '<div id="buildable1">';
			strHtml += '<p><b>Items:</b> Ask / Collect Every 5min / Buy For WLP / Send to ALL</p>';
			//strHtml += '<ul>';
//			strHtml += '<li><a href="javascript:zdSeasonal.scheduleCollectAllSeasonalItems();">Collect All</a> / <a href="javascript:zdQuizCash(100);">Collect '+zdSeasonal.arrSeasonalItems[zdSeasonal.arrSeasonalItems.length-2]+' (Quiz)</a></li>';
			strHtml += '<li><a href="javascript:zdSeasonal.scheduleCollectAllSeasonalItems();">Collect All</a> / <a href="javascript:zdMultiQuiz();">Collect '+zdSeasonal.arrSeasonalItems[zdSeasonal.arrSeasonalItems.length-2]+' (Quiz)</a></li>';
			strHtml += '<li><a href="javascript:zdSeasonal.sendRndPartAllZoomates();">Send Random Part to Each Zoomate</a> / <a href="javascript:zdSeasonal.sendRndPartAll();">Send Random Part to Each Friend</a></li>';
			//strHtml += '</ul>';
			for(i=0;i<zdSeasonal.arrSeasonalItems.length;i++){
				if(i==zdSeasonal.arrSeasonalItems.length-2){
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a> / <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].shareUpgrade(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Share</a><br>';
				}else if(i==zdSeasonal.arrSeasonalItems.length-1){
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a><br>';
				}else{
					strHtml += ' <img src="';
					strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"], 'smallImg' );
					strHtml += '" alt=""  width="15" height="15" /> ';
					strHtml += ''+zdSeasonal.arrSeasonalItems[i]+': ' + zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"] + ' &mdash; <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].'+zdSeasonal.arrSeasonalAskFor[i]+'();">Ask</a> / <a href="javascript:zdSeasonal.scheduleCollectSeasonalItem(\''+zdSeasonal.arrSeasonalItems[i]+'\');">Collect</a> / <a href="javascript:var intAmount = parseInt(prompt(\''+zdui.getLabel("buy_more_for_wlp_prompt_specify_amount") +'\', \'1\'));zdSeasonal.buyItems( intAmount, \''+zdSeasonal.arrSeasonalItems[i]+'\' );">'+zdui.getLabel("buy_more_for_wlp") +'</a> / <a href="javascript:zdSendGiftToAllFriends('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["id"]+');">Send</a><br>';
				}
			}
			//Animals
			strHtml +='</div><div id="buildable2" style="display:none;"><p><b>Animals: </b>(Qty - QtyUltra)</p>';
			//strHtml +='<ul>';
			for(a=0;a<zdSeasonal.arrSeasonalAnimals.length;a++){
				strHtml += ' <div style="height: 36px;display:block"><img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["id"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml += ' <img src="';
				strHtml += zdGetNewImgPath( zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalUpgradedAnimals[a]]["id"], 'smallImg' );
				strHtml += '" alt="" align="left" width="35" height="35" /> ';
				strHtml +=''+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["name"]+'('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["amountOwned"]+'-'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalUpgradedAnimals[a]]["amountOwned"]+'):<br><a href="javascript:zdSeasonal.getMissionAnimal(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');" title="Requires '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["partCost"][zdSeasonal.arrSeasonalItems[0]]+' of each part">Complete</a> / <a href="javascript:var intAmount = parseInt(prompt(\'How Many\', \'1\'));setIntervalX(function(){zdSeasonal.getMissionAnimal2(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');}, 900, intAmount);"  title="Requires '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["partCost"][zdSeasonal.arrSeasonalItems[0]]+' of each part">Repeat</a> / <a href="javascript:zdSeasonal.upgradeForWlp('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["id"]+');" title="Cost: '+(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[a]]["upgradeCost"])*2+'WLP">Upgrade</a> / <a href="javascript:seasonal['+zdSeasonal.missionProjId+'].shareUpgrade(\''+zdSeasonal.arrSeasonalAnimals[a]+'\');">Share</a></div>';
			}
			//strHtml += '</ul>';
		}else{
			strHtml += '<p><h3>No Currrent Seasonal Animal Promotion</h3></p>';
		}
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Buildable');
		return;
	},
		_popOutResults: function(strStatus) {
			// pop out results tab
			zdSeasonal.arrSeasonalList = eval( '('+strStatus+')' );
			zdLogStatus( 'Creating Seasonal flyout' );
			if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]){
				for (c=0;c<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;c++){
					var id = zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["id"];
					zdSeasonal.arrFilteredSeasonalList[id]= []; 
					zdSeasonal.arrFilteredSeasonalList[id]["name"]= []; 
					zdSeasonal.arrFilteredSeasonalList[id]["name"].push(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["name"]);
					zdSeasonal.arrFilteredSeasonalList[id]["value"]= []; 
					zdSeasonal.arrFilteredSeasonalList[id]["value"].push(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["cost"]["value"]);
					zdSeasonal.arrFilteredSeasonalList[id]["type"]= []; 
					zdSeasonal.arrFilteredSeasonalList[id]["type"].push(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["cost"]["type"]);
				}
			}
			var strHtml = '';
			// title
			strHtml += '<h2>&nbsp;' + zdui.getLabel("seasonal_flyout_title") + '</h2>';
			strHtml += '<div id="zdShopPreviewBody">';
			strHtml += '<div style="">'; 
			strHtml += '<p style="font-weight: bold; color: #F00;">MANY OF THESE ACTIVITIES COST WLP!</p>';
			// Tree Gifting
			if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]){
				if(zdSeasonal.arrGifts.length > 0){
				var intClosedGifts = 0;
				var intOpenGifts = 0;
				var intFBCGifts = 0;
				var intWLPGifts = 0;
				var strGiftsHtml = '<p> WLP Gifts</p>';
				strGiftsHtml += '<div style="height: 200px; overflow: scroll;">';
				for(g=0;g<zdSeasonal.arrGifts.length;g++) {
					if(zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["type"] !='fbcredits'){
						intWLPGifts++
						strGiftsHtml += '<div style="height: auto;display:block">';
						if(zdSeasonal.arrGifts[g]["is_open"]){
							intOpenGifts++;
							strGiftsHtml += ' <em>'+zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["name"]+' #'+zdSeasonal.arrGifts[g]["typeid"]+' from <a href="javascript:zdShowName('+zdSeasonal.arrGifts[g]["sender_id"]+');" title="Click to show name in Status">'+zdSeasonal.arrGifts[g]["sender_id"]+'</a></em>';
						}else{
							intClosedGifts++;
							strGiftsHtml += ' <img src="';
							strGiftsHtml += zdGetNewImgPath( zdSeasonal.arrGifts[g]["typeid"], 'smallImg' );
							strGiftsHtml += '" alt="" align="left" width="30" height="30" /> ';
							strGiftsHtml += '<a href="javascript:zdSeasonal.openGift('+zdSeasonal.arrGifts[g]["giftid"]+');" title="'+zdSeasonal.arrGifts[g]["giftid"]+'">open</a> <a href="javascript:zdSeasonal.multiOpenGift('+zdSeasonal.arrGifts[g]["giftid"]+');" title="'+zdSeasonal.arrGifts[g]["giftid"]+'">multiOpen</a>';
							for(c=0;c<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;c++) {
								if(zdSeasonal.arrGifts[g]["typeid"] == zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["id"]) {
									if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["cost"]["type"] == "fbcredits"){
										strGiftsHtml += ' <b style="font-weight: bold; color: #F00;">FBC</b> ';
										break;
									}
								}
							}
							strGiftsHtml += ' '+zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["name"]+' #'+zdSeasonal.arrGifts[g]["typeid"]+' from <a href="javascript:zdShowName('+zdSeasonal.arrGifts[g]["sender_id"]+');" title="Click to show name in Status">'+zdSeasonal.arrGifts[g]["sender_id"]+'</a>' ;
						}
						if(zdSeasonal.arrGifts[g]["message"] != ""){
							strGiftsHtml += '<br />Message: &quot;'+zdSeasonal.arrGifts[g]["message"]+'&quot;';
						}
						strGiftsHtml += "</div>";
					}
				}
				strGiftsHtml += "</div>";
				//fbc
				strGiftsHtml += '<p> FBC Gifts</p>';
				strGiftsHtml += '<div style="height: 150px; overflow: scroll;">';
				for(g=0;g<zdSeasonal.arrGifts.length;g++) {
					if(zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["type"] =='fbcredits'){
						intFBCGifts++;
						strGiftsHtml += '<div style="height: auto;display:block">';
						if(zdSeasonal.arrGifts[g]["is_open"]){
							intOpenGifts++;
							strGiftsHtml += ' <em>'+zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["name"]+' #'+zdSeasonal.arrGifts[g]["typeid"]+' from <a href="javascript:zdShowName('+zdSeasonal.arrGifts[g]["sender_id"]+');" title="Click to show name in Status">'+zdSeasonal.arrGifts[g]["sender_id"]+'</a></em>';
						}else{
							intClosedGifts++;
							strGiftsHtml += ' <img src="';
							strGiftsHtml += zdGetNewImgPath( zdSeasonal.arrGifts[g]["typeid"], 'smallImg' );
							strGiftsHtml += '" alt="" align="left" width="30" height="30" /> ';
							strGiftsHtml += '<a href="javascript:zdSeasonal.openGift('+zdSeasonal.arrGifts[g]["giftid"]+');" title="'+zdSeasonal.arrGifts[g]["giftid"]+'">open</a> <a href="javascript:zdSeasonal.multiOpenGift('+zdSeasonal.arrGifts[g]["giftid"]+');" title="'+zdSeasonal.arrGifts[g]["giftid"]+'">multiOpen</a>';
							for(c=0;c<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;c++) {
								if(zdSeasonal.arrGifts[g]["typeid"] == zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["id"]) {
									if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][c]["cost"]["type"] == "fbcredits"){
										strGiftsHtml += ' <b style="font-weight: bold; color: #F00;">FBC</b> ';
										break;
									}
								}
							}
							strGiftsHtml += ' '+zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["name"]+' #'+zdSeasonal.arrGifts[g]["typeid"]+' from <a href="javascript:zdShowName('+zdSeasonal.arrGifts[g]["sender_id"]+');" title="Click to show name in Status">'+zdSeasonal.arrGifts[g]["sender_id"]+'</a>';
						}
						if(zdSeasonal.arrGifts[g]["message"] != ""){
							strGiftsHtml += '<br />Message: &quot;'+zdSeasonal.arrGifts[g]["message"]+'&quot;';
						}
						strGiftsHtml += "</div>";
					}
				}
				strGiftsHtml += "</div>";
				strGiftsHtml = "<p><b>You have "+intClosedGifts+" new gifts and "+intOpenGifts+" open gifts <br>Total "+zdSeasonal.arrGifts.length+" Gifts = "+intWLPGifts+" WLP Gifts  +  "+intFBCGifts+" FBC Gifts </b></p>" + strGiftsHtml;
				strHtml += strGiftsHtml;
			}
			strHtml += '<form name="gifts" method="get" action="#">';
			strHtml += '<h3>Send gifts: <span style="font-weight: bold; color: #F00;">(COST WLP!!!)</span>&emsp;<b id="treecnt">'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftsSent"]+'</b> / '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftSendLimit"]+'</h3>';
			strHtml += '<p>animal: <select name="zdSeasonalGiftAnimalId" id="zdSeasonalGiftAnimalId">';
			for(g=0;g<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;g++) {
				strHtml += '<option value="'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["id"]+'"';
				if(g == 0){
					strHtml += ' selected="selected"';
				}
				strHtml += '>'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["name"]+" #"+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["id"]+' ('+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"]["value"]+''+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"]["type"]+')</option>';
			}
			strHtml += '</select> ';
			strHtml += '<br />ribbon: <select name="zdSeasonalGiftRibbon" id="zdSeasonalGiftRibbon">';
			strHtml += '<option value="1">free</option>';
			strHtml += '<option value="2">free</option>';
			strHtml += '<option value="3">1 WLP</option>';
			strHtml += '<option value="4">2 WLP</option>';
			strHtml += '</select> ';
			strHtml += 'box: <select name="zdSeasonalGiftBox" id="zdSeasonalGiftBox">';
			strHtml += '<option value="1">free</option>';
			strHtml += '<option value="2">free</option>';
			strHtml += '<option value="3">1 WLP</option>';
			strHtml += '<option value="4">2 WLP</option>';
			strHtml += '</select> ';
			strHtml += '<br />message: <input type="text" value="'+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["messages"]["defaultPersonalMessage"]+'" name="zdSeasonalGiftMessage" id="zdSeasonalGiftMessage" /> ';
			strHtml += '</form>';
			strHtml += '<form name="receiver" action="" method="post">';
			strHtml += '<input type="radio" name="group1" value="0" checked>to friendId(s): <input type="text" value="" name="zdSeasonalGiftFriendId" id="zdSeasonalGiftFriendId" /> <br>';
			strHtml += '<input type="radio" name="group1" value="1" >to all zoomates<br>';
			strHtml += '<input type="radio" name="group1" value="2" >to all friends<br>';
			strHtml += '</form>';
			strHtml += ' <input type="button" id="button54" value="browse friends" onClick="zdShowFriendList();zdShowTab(\'visit\');" />  <input type="button" id="button57" value="publishGift" onClick="zdSeasonal.publishGiftToFriend();" /> ';
			strHtml += ' <br /><input type="button" id="button55" value="send" onClick="zdSeasonal.sendGiftTo();" /> ';
			var setCosts =0;
			for(g=0;g<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;g++) {
				var cost = zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"];
				setCosts = setCosts + cost;
			}
			if(isNaN(setCosts)){
				strHtml += ' <input type="button" id="button56" value="send complete set " onClick="zdSeasonal.sendSetTo();" /> ';
			}else{
				strHtml += ' <input type="button" id="button56" value="send complete set ('+setCosts+'wlp)" onClick="zdSeasonal.sendSetTo();" /> ';
			}
			//strHtml += ' <input type="button" id="button57" value="publishGift" onClick="zdSeasonal.publishGiftToFriend();" /> ';
			//strHtml += '</p>';
			//strHtml += ' <p><input type="button" id="button58" value="all friends" onClick="zdSeasonal.sendGiftToAllFriends();" /> ';
			//strHtml += ' <input type="button" id="button59" value="all zoo mates" onClick="zdSeasonal.sendGiftToAllZooMates();" /> ';
			//strHtml += ' <input type="button" id="button60" value="set to all zoomates" onClick="zdSeasonal.sendSetToAllZoomates();" /> ';
			//strHtml += ' <input type="button" id="button61" value="set to all friends" onClick="zdSeasonal.sendSetToAllFriends();" /> ';
			//strHtml += '</p>';
			strHtml += '<p><input type="button" id="button62" value="list gifts" onClick="zdSeasonal.listGifts(false);" />';
			strHtml += ' <input type="button" id="button63" value="open all gifts" onClick="zdSeasonal.listGifts(true);" /></p>';
			intseasonalTreeEnd = setInterval("zdSeasonal.seasonalTreeEnd();",1000);
			strHtml += '<p><h3>Time Remaining:<br>';
			strHtml += '<b id="seasonalTreeEnd">'+intseasonalTreeEnd+'</b><br>';
		}else{
			strHtml += '<p><h3>No Current Gifting Tree...</h3></p>';
		}
// end Tree gifting
		strHtml += '</div>';
		strHtml += '<div style="clear: both;">&nbsp;</div>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Tree');
		return;
	},
//END GUI

	seasonalEnd: function(){
		if(document.getElementById("seasonalEnd")){
			document.getElementById("seasonalEnd").innerHTML = timeTill(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["dates"]["endTime"]);
		}else{window.clearInterval(intseasonalEnd)}
	},
	seasonalTreeEnd: function(){
		if(document.getElementById("seasonalTreeEnd")){
			document.getElementById("seasonalTreeEnd").innerHTML = timeTill(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["dates"]["endDate"]);
		}else{window.clearInterval(intseasonalTreeEnd)}
	},
	buyItems: function( intAmount, strItemName){
		// buy intAmount items
		zdLogStatus('Buying '+intAmount+' '+strItemName+'...');
		for(c=0;c<intAmount;c++) {
			zdWorkQueuePush( 'zdSeasonal.buyItem(\''+strItemName+'\');' );
		}
		zdWorkQueueStart();
	},
	addFriend: function(friendId){ //add friend to tree gift list
		arrfriendId = document.getElementById("zdSeasonalGiftFriendId").value.split(",");
		for(f=0;f<arrfriendId.length;f++){
			if(arrfriendId[f]!= parseInt(arrfriendId[f])){
				arrfriendId.splice(f,1);
			}
		}
		arrfriendId.push(friendId);
		document.getElementById('zdSeasonalGiftFriendId').value=arrfriendId;
		zdLogStatus('Added '+friendId+' to tree gift list');
		zdLogStatus('Tree gift list now contains '+arrfriendId.length+' friends...');
	},
	// send gifts
	sendGiftTo: function (){
		if(document.receiver.group1[0].checked){
			zdSeasonal.sendGiftToFriend();
		}else if(document.receiver.group1[1].checked){
			zdSeasonal.sendGiftToAllZooMates();
		}else if(document.receiver.group1[2].checked){
			zdSeasonal.sendGiftToAllFriends();
		}
	},
	sendSetTo: function (){
		if(document.receiver.group1[0].checked){
			zdSeasonal.sendSetToFriend();
		}else if(document.receiver.group1[1].checked){
			zdSeasonal.sendSetToAllZoomates();
		}else if(document.receiver.group1[2].checked){
			zdSeasonal.sendSetToAllFriends();
		}
	},
	sendGiftToFriend: function (){
		var friendId = (document.getElementById("zdSeasonalGiftFriendId").value).split(",");
		var giftId = parseInt(document.getElementById("zdSeasonalGiftAnimalId").options[document.getElementById("zdSeasonalGiftAnimalId").selectedIndex].value);
		var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
		var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
		var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
		zdLogStatus('Found '+friendId.length+' friendId(s)...');
		for(f=0;f<friendId.length;f++){
			zdWorkQueuePush('zdSeasonal.sendGift('+friendId[f]+', '+giftId+', "'+strMessage+'", '+paperId+', '+ribbonId+');');
		}
		zdWorkQueueStart();
		return;
	},
	publishGiftToFriend: function (){
		var friendId = parseInt(document.getElementById("zdSeasonalGiftFriendId").value);
		var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
		var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
		giftingpromo.publishGiftSentNotif(friendId, paperId, ribbonId );
		return;
	},
	sendSetToFriend: function (){
		var friendId = (document.getElementById("zdSeasonalGiftFriendId").value).split(",");
		var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
		var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
		var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
		zdLogStatus('Found '+friendId.length+' friendId(s)...');
		for(f=0;f<friendId.length;f++){
			for(g=0;g<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;g++) {
				if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"]["type"] != "fbcredits"){
					zdWorkQueuePush('zdSeasonal.sendGift('+friendId[f]+','+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["id"]+',"'+strMessage+'",'+paperId+','+ribbonId+')');
				}
			}
		}
		zdWorkQueueStart();
		return;
	},
	sendSetToAllFriends: function (){
		if(confirm('Are you sure you want to send all these gifts? It could cost hundreds or thousands of WLP?!!')){
			var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
			var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
			var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
			// load friend list, send to all
			var arrFriends = new Array();
			// get friend list
			var strFriends = zdGetFriends();
			if(strFriends.length < 10){
				zdAjaxFriendService();
				strFriends = zdGetFriends();
			}
			var arrRawFriendList = eval( '('+strFriends+')' );
			for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
				arrFriends.push( arrRawFriendList['return_data'][f]['uid'] );
			}
			for(g=0;g<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;g++) {
				if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"]["type"] != "fbcredits"){
					zdLogStatus('Sending '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["name"]+' to ' + arrRawFriendList['return_data'].length + ' of your friends...');
					zdSeasonal._sendGiftToFriends( arrFriends, zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["id"], strMessage, paperId, ribbonId );
				}
			}
		}
		return;
	},
	sendGiftToAllFriends: function (){
		if(confirm('Are you sure you want to send all these gifts? It could cost hundreds or thousands of WLP?!!')){
			var giftId = parseInt(document.getElementById("zdSeasonalGiftAnimalId").options[document.getElementById("zdSeasonalGiftAnimalId").selectedIndex].value);
			var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
			var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
			var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
			// load friend list, send to all
			var arrFriends = new Array();
			// get friend list
			var strFriends = zdGetFriends();
			if(strFriends.length < 10){
				zdAjaxFriendService();
				strFriends = zdGetFriends();
			}
			var arrRawFriendList = eval( '('+strFriends+')' );
			zdLogStatus('Sending '+zdSeasonal.arrFilteredSeasonalList[giftId]["name"]+' to ' + arrRawFriendList['return_data'].length + ' of your friends...');
			for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
				arrFriends.push( arrRawFriendList['return_data'][f]['uid'] );
			}
			zdSeasonal._sendGiftToFriends( arrFriends, giftId, strMessage, paperId, ribbonId );
		}
		return;
	},

	sendSetToAllZoomates: function (){
		if(confirm('Are you sure you want to send all these gifts? It could cost hundreds or thousands of WLP?!!')){
			var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
			var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
			var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
			// load friend list, send to all
			var arrFriends = new Array();
			// get friend list
			var strFriends = zdGetFriends();
			if(strFriends.length < 10){
				zdAjaxFriendService();
				strFriends = zdGetFriends();
			}
			var arrRawFriendList = eval( '('+strFriends+')' );
			for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
				if(arrRawFriendList['return_data'][f]["is_zoomate"]){	
					arrFriends.push( arrRawFriendList['return_data'][f]['uid'] );
				}
			}
			for(g=0;g<zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"].length;g++) {
				if(zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["cost"]["type"] != "fbcredits"){
					zdLogStatus('Sending '+zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["name"]+' to ' + arrRawFriendList['return_data'].length + ' of your friends...');
					zdSeasonal._sendGiftToFriends( arrFriends, zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["giftableItems"][g]["id"], strMessage, paperId, ribbonId );
				}
			}
		}
		return;
	},

	sendGiftToAllZooMates: function (){
		if(confirm('Are you sure you want to send all these gifts? It could cost hundreds or thousands of WLP?!!')){
			var giftId = parseInt(document.getElementById("zdSeasonalGiftAnimalId").options[document.getElementById("zdSeasonalGiftAnimalId").selectedIndex].value);
			var strMessage = document.getElementById("zdSeasonalGiftMessage").value;
			var paperId = parseInt(document.getElementById("zdSeasonalGiftBox").options[document.getElementById("zdSeasonalGiftBox").selectedIndex].value);
			var ribbonId = parseInt(document.getElementById("zdSeasonalGiftRibbon").options[document.getElementById("zdSeasonalGiftRibbon").selectedIndex].value);
			// load friend list, send to all
			var arrFriends = new Array();
			// get friend list
			var strFriends = zdGetFriends();
			if(strFriends.length < 10){
				zdAjaxFriendService();
				strFriends = zdGetFriends();
			}
			var arrRawFriendList = eval( '('+strFriends+')' );
			for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
				if(arrRawFriendList['return_data'][f]["is_zoomate"]){
					arrFriends.push( arrRawFriendList['return_data'][f]['uid'] );
				}
			}
			zdLogStatus('Sending '+zdSeasonal.arrFilteredSeasonalList[giftId]["name"]+' to ' + arrFriends.length + ' of your zoo mates...');
			zdSeasonal._sendGiftToFriends( arrFriends, giftId, strMessage, paperId, ribbonId );
		}
		return;
	},
	_sendGiftToFriends: function ( arrFriends, giftId, strMessage, paperId, ribbonId){
		zdLogStatus('Sending gift '+giftId+' to '+arrFriends.length+' with paper '+paperId+', ribbon '+ribbonId+' and message "'+strMessage+'"...');
		if(isArray(arrFriends)){
			// zdDeleteCookies();
			zdLogStatus('Sending gifts to '+arrFriends.length+' friends...');
			for(f=0;f<arrFriends.length;f++) {
				zdWorkQueuePush('zdSeasonal.sendGift('+parseInt(arrFriends[f])+','+parseInt(giftId)+',"'+strMessage+'",'+parseInt(paperId)+','+parseInt(ribbonId)+')');
			}
			zdWorkQueueStart();
		}else{ 
			zdLogStatus('Friend not defined '+arrFriends+'...');
		}
		return;
	},
	
	sendRndPartAll: function(){
		var giftCount = 0;
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		var arrRawFriendList = eval( '('+strFriends+')' );
		for(f=0;f<arrRawFriendList['return_data'].length;f++) {
			giftCount++;
			var r = Math.floor(Math.random()*3);
			var rndGiftId = zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[r]]["id"];
			zdWorkQueuePush('zdSendGift('+rndGiftId+','+arrRawFriendList["return_data"][f]["uid"]+','+giftCount+')');
		}
		zdWorkQueueStart();
	},
	
	sendRndPartAllZoomates: function(){
		var giftCount = 0;
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		var arrRawFriendList = eval( '('+strFriends+')' );
		for(f=0;f<arrRawFriendList['return_data'].length;f++) {
			if(arrRawFriendList["return_data"][f]["is_zoomate"] == true && arrRawFriendList["return_data"][f]["uid"] != zd_fb_sig_user){
				giftCount++;
				var r = Math.floor(Math.random()*3);
				var rndGiftId = zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[r]]["id"];
				zdWorkQueuePush('zdSendGift('+rndGiftId+','+arrRawFriendList["return_data"][f]["uid"]+','+giftCount+')');
			}
		}
		zdWorkQueueStart();
	},
	
	scheduleCollectSeasonalItem: function( itemKey){
		window.setInterval('zdSeasonal.multiCollectSeasonalItem(\''+itemKey+'\');', (1005*60*5)); // run every 5 min plus some for safety
		zdSeasonal.multiCollectSeasonalItem( itemKey ); // run for the first time
	},
	multiCollectSeasonalItem: function( itemKey){
		zdLogStatus('Collecting '+itemKey+'...');
		zdSeasonal.collectSeasonalItem(itemKey);
		zdSeasonal.collectSeasonalItem(itemKey);
		zdSeasonal.collectSeasonalItem(itemKey);
		zdSeasonal.collectSeasonalItem(itemKey);
		zdSeasonal.collectSeasonalItem(itemKey);
		zdSeasonal.collectSeasonalItem(itemKey);
	},
	scheduleCollectAllSeasonalItems: function(){
		zdSeasonal.collectAllSeasonalItems(); // run for the first time
		window.setInterval('zdSeasonal.collectAllSeasonalItems();', (1028*60*5)); // run every 5 min 7.5 sec for safety
	},

	collectAllSeasonalItems: function(){
		zdLoadZooService(zdUserId); 
		var projData=zdGetZoo();
		zdSeasonal.arrSeasonalList = eval( '('+projData+')' );
		zdLogStatus('Determining what is needed...');
		for(ao=0;ao<10000;ao++){
			for(i=0;i<zdSeasonal.arrSeasonalItems.length;i++){
				if((zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalItems[i]]["amountOwned"])==ao){
				zdSeasonal.multiCollectSeasonalItem(zdSeasonal.arrSeasonalItems[i]);
				return;
				}
			}
		}
	},
	
	// AJAX requests
	collectSeasonalItem: function( itemKey){
		// collect island item
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "collect";
		arrParameters["itemKey"] = itemKey;
		arrParameters["projectid"] = zdSeasonal.missionProjId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdSetResponse(transport.responseText);
					return;
				}
			}
		);
	},
	buyItem: function( strItemName){
		// buy item for WLP
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "purchaseItem";
		arrParameters["projectid"] = zdSeasonal.missionProjId;
		arrParameters["itemId"] = strItemName;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdSetResponse(transport.responseText);
					zdLogStatus('Bought '+strItemName+'...');
					return;
				}
			}
		);
	},
	
	showSeasonalStatus: function(){
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zdUserId;
		new Ajax.Request(
			zdLoadZooServiceUrl, 
			{
				method: 'post',
				asynchronous: false,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetZoo(transport.responseText);
					zdSeasonal._popOutResults(transport.responseText); 
				}
			}
		); 
	},
	showSeasonalBuildableStatus: function(){
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zdUserId;
		new Ajax.Request(
			zdLoadZooServiceUrl, 
			{
				method: 'post',
				asynchronous: false,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetZoo(transport.responseText);
					zdSeasonal._popOutResultsBuildable(transport.responseText); 
				}
			}
		); 
	},
	showSeasonalBuildableStatus2: function(){
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zdUserId;
		new Ajax.Request(
			zdLoadZooServiceUrl, 
			{
				method: 'post',
				asynchronous: false,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetZoo(transport.responseText);
					zdSeasonal._popOutResultsBuildable2(transport.responseText); 
				}
			}
		); 
	},
	harvestAllMaterials: function(){
		var harv = parseInt(prompt("Harvest how many times?",1));
		var projData = zdGetZoo();
		if(projData.length < 10){
		zdLoadZooService(zd_fb_sig_user);
			projData = zdGetZoo();
		}
		zdSeasonal.arrSeasonalList = eval( '('+projData+')' );
		for(h=0;h<harv;h++){
			for(i=0;i<zdSeasonal.arrSeasonalAnimals.length;i++){
				zdSeasonal.materialHarvest(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[i]]["id"]);
				zdSeasonal.materialHarvest(zdSeasonal.arrSeasonalList["return_data"]["projects"]["seasonal"]["items"][zdSeasonal.arrSeasonalAnimals[i]]["upgradeAnimalId"]);
			}
		}
	},
	materialHarvest: function( itemId){
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "materialHarvest";
		arrParameters["projectid"] = zdSeasonal.buildableProjId;
		arrParameters["animalId"] = itemId;
		arrParameters["materialState"] = "true";
		arrParameters["userId"] = zdUserId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport)
				{
					zdSetResponse(transport.responseText);
					zdLogStatus('Harvested '+itemId+'...');
					return;
				}
			}
		);
	},
	multiLevelup: function(itemId) {
		for(i=0;i<=6;i++){
			zdSeasonal.buildableLevelup(itemId);
		}
		zdSeasonal.showSeasonalBuildableStatus();
	},
	buildableLevelup: function( itemId){
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "buildableLevelup";
		arrParameters["projectid"] = zdSeasonal.buildableProjId;
		arrParameters["typeid"] = itemId;
		arrParameters["userId"] = zdUserId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport)
				{
					zdSetResponse(transport.responseText);
					zdLogStatus('Upgraded '+itemId+'...');
					return;
				}
			}
		);
	},
	getMissionAnimal: function(animalKey) {
			zdSeasonal.buyItem(animalKey);
			setTimeout('zdLoadZooService(zd_fb_sig_user);',1500);
			setTimeout('zdSeasonal.updateLastChanceStage();',3000);
			setTimeout('zdLogStatus("All Done - Refreshing!");',4000);
			setTimeout('zdRefreshZoo();',800);
	},
	getMissionAnimal2: function(animalKey) {
		zdSeasonal.buyItem(animalKey);
		setTimeout('zdLoadZooService(UserId);',1500);
		setTimeout('zdSeasonal.updateLastChanceStage();',3000);
		setTimeout('zdSeasonal.awardLastChanceStage();',3500);
		setTimeout('zdLogStatus("All Done - Refreshing!");',4000);
		setTimeout('zdRefreshZoo();',800);
		setTimeout('zdSeasonal.showSeasonalBuildableStatus();',8000);
	},
	getMultiAnimal: function(){
		zdLogStatus('Trying for multiple animals!');
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
		zdSeasonal.awardLastChanceStage();
	},
	updateLastChanceStage: function(){
		// complete mission
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "updateLastChanceStage";
		arrParameters["projectid"] = zdSeasonal.missionProjId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: false,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					return;
				}
			}
		);
	},
	awardLastChanceStage: function(){
		// get the animal
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "awardAnimalInLastChance";
		arrParameters["projectid"] = zdSeasonal.missionProjId;
		arrParameters["upgradeAnimal"]= "false";
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					return;
				}
			}
		);
	},
	upgradeForWlp: function( itemId){
		// complete mission
		var arrParameters = zdGetGenericParameters();
		arrParameters["action"] = "upgrade";
		arrParameters["projectid"] = zdSeasonal.missionProjId;
		arrParameters["upgradeItems"] = itemId;
//		arrParameters["upgradeWLFPrice"] = 20;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					zdLogStatus('Upgraded '+itemId+'...');
					return;
				}
			}
		);
	},
	sendGift: function ( zooOwnerId, giftId, strMessage, paperId, ribbonId){
		//	zdLogStatus('Sending '+zdGetAnimalForId(giftId)['name']+' #'+giftId+' to '+zooOwnerId+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["projectid"] = zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["id"];
		arrParameters["paperId"] = paperId;
		arrParameters["ribbonId"] = ribbonId;
		arrParameters["zooOwnerId"] = zd_fb_sig_user;
		arrParameters["action"] = "purchaseGiftItem";
		arrParameters["message"] = strMessage;
		arrParameters["giftId"] = giftId;
		arrParameters["recipientId"] = zooOwnerId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdLogStatus('Sent '+zdSeasonal.arrFilteredSeasonalList[giftId]["name"]+' #'+giftId+' to '+zooOwnerId+'...');
					zdSetResponse(transport.responseText);
					var response = eval( '('+transport.responseText+')' );
					document.getElementById("treecnt").innerHTML=response['return_data']['projects']['giftingpromo']['giftsSent'];
					return;
				}
			}
		);
	},
	openGift: function ( giftId){
	//	zdLogStatus('Opening gift '+giftId+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["projectid"] = zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["id"];
		arrParameters["action"] = "openGift";
		arrParameters["giftId"] = giftId;
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdLogStatus('Opened gift '+giftId+'...');
					zdSetResponse(transport.responseText);
					return;
				}
			}
		);
	},
	multiOpenGift: function ( giftId){
		for(i=0;i<=10;i++){
			zdSeasonal.openGift(giftId);
		}
	},
	listGifts: function ( boolOpenGifts){
//		confirm('Sorry - You will now have to open these by hand!!  Just Kidding...');
		zdLogStatus('Listing gifts...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["projectid"] = zdSeasonal.arrSeasonalList["return_data"]["projects"]["giftingpromo"]["id"];
		arrParameters["action"] = "refresh";
		new Ajax.Request(
			zdProjectServiceUrl,
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport) {
					zdLogStatus('Got gift list...');
					zdSetResponse(transport.responseText);
					var arrGiftList = eval( '('+transport.responseText+')' );
					if(arrGiftList["success"]){
						// store gifts
						zdSeasonal.arrGifts = arrGiftList["return_data"]["projects"]["giftingpromo"]["giftsReceived"];
						if(boolOpenGifts){
							zdLogStatus('Opening '+zdSeasonal.arrGifts.length+' gifts...');
							for(g=0;g<zdSeasonal.arrGifts.length;g++) {
								// open all gifts
								if(!zdSeasonal.arrGifts[g]["is_open"] && zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["type"] !='fbcredits') {
									zdWorkQueuePush('zdSeasonal.openGift( '+zdSeasonal.arrGifts[g]["giftid"]+' );');
								} else if(!zdSeasonal.arrGifts[g]["is_open"] && zdSeasonal.arrFilteredSeasonalList[zdSeasonal.arrGifts[g]["typeid"]]["type"] =='fbcredits'){
									zdLogStatus('Skipping FBC gift '+zdSeasonal.arrGifts[g]["giftid"]+'...');
								}else{
									zdLogStatus('Skipping open gift '+zdSeasonal.arrGifts[g]["giftid"]+'...');
								}
							}
							zdWorkQueueStart();
						}else{
							zdLogStatus('Listing '+zdSeasonal.arrGifts.length+' gifts...');
						}
						// refresh
						zdSeasonal.showSeasonalStatus();
					}else{
						zdLogStatus('Could not open gift list...');
					}
					return;
				}
			}
		);
	}
};
// END SEASONAL

function zdQuiz( intNumTimes){
	var arrParameters = zdGetGenericParameters();
	arrParameters["cmd"] = "inbox";
	arrParameters["num"] = 100;
	if(intNumTimes > 0){
		// happy days
	}else{
		intNumTimes = 1;
	}
	new Ajax.Request(
		zdMailServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				var zdQuizResponseData = eval( '('+transport.responseText+')' );
				var nextAnswer = zdQuizResponseData["return_data"]["new_quizzes"][0]["answerIndex"];
				var nextQuiz = zdQuizResponseData["return_data"]["new_quizzes"][0]["questionId"];
				for(q=0;q<zdQuizResponseData["return_data"]["messages"].length;q++) {
					if(zdQuizResponseData["return_data"]["messages"][q]["type"] == "quiz"){
						var nextMsgID = zdQuizResponseData["return_data"]["messages"][q]["msgID"];
						zdLogStatus('Quiz: '+(zdQuizResponseData["return_data"]["new_quizzes"][0]["question"])+' ');
						if(intNumTimes > 1){
							zdLogStatus('Answering: '+(zdQuizResponseData["return_data"]["new_quizzes"][0]["choices"][nextAnswer])+' ('+intNumTimes+' times)');
							for(l=0;l<intNumTimes;l++) {
								zdAnswerQuiz(nextMsgID, nextQuiz, nextAnswer);
							}
						}else{
							zdLogStatus('Answering: '+(zdQuizResponseData["return_data"]["new_quizzes"][0]["choices"][nextAnswer])+' ');
							zdAnswerQuiz(nextMsgID, nextQuiz, nextAnswer);
						}
						break;
					}else{
						if(q == 0){
							zdLogStatus('Next message is not a quiz, skipping ahead...');
						}
					}
				}
			}
		}
	);
}

function zdAnswerQuiz(nextMsgID, nextQuiz, nextAnswer) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["cmd"] = "quiz";
	arrParameters["quiz"] = nextQuiz;
	arrParameters["answer"] = nextAnswer;
	arrParameters["msgID"] = nextMsgID;
	new Ajax.Request(
		zdMailServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				var zdAnswerResponseData = eval( '('+transport.responseText+')' );
				if(zdAnswerResponseData["return_data"]["correct"] == 1) {
					zdLogStatus('CORRECT!');
					zdLogStatus(zdAnswerResponseData["return_data"]["rewardMessage"]);
				}else{
					zdLogStatus('INCORRECT!');
				}
			}
		}
	);
	return;
}

function zdMultiQuiz(quizzes){
	if(zdAjaxCallDelay < 2000) {
		zdSetAjaxDelay(2000);
	}
	if(quizzes==null){
		var quizzes = prompt("How many quizzes to answer?",1);
	}
	for(i=0;i<quizzes;i++){
		zdWorkQueuePush('zdQuiz(1);');
	}
	zdWorkQueueStart();
}
/*
function zdQuizCashCont(){
	setInterval('zdQuizCash(10);',4000);
}

function zdQuizCash( intAmount){
		// answer quiz question many times for cash
		zdLogStatus('Answering '+intAmount+' times...');
		for(c=0;c<intAmount;c++) {
				zdAnswerQuiz(72805011096, 1030, 1);
		}
		zdZooStatsAjax('cash');
}
*/
function zdSellItemPrompt(itemId) {
	if(itemId==null){
		var itemId = (prompt(zdui.getLabel("specify_item_id_prompt"), ""));
	}
	var numToSell = (prompt(zdui.getLabel("shop_flyout_actions_sell_prompt"), "10"));
	zdFindItemsInInventory(itemId, numToSell);
}

function zdFindItemsInInventory( itemId, numToSell){
	zdLogStatus('Loading inventory for '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdLoadInventoryServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Making into an array...');
				var arrInventoryData = eval( '('+transport.responseText+')' );
				var t = 1;
				var n = numToSell;
				zdLogStatus('Looking for '+n+' of '+itemId+'...');
				if(arrInventoryData["return_data"][itemId]){
					if(zdZooItems[itemId]['rarity']){
						zdSellItemService( itemId, itemId ,numToSell)
					}else{
						while ((t<arrInventoryData["return_data"][itemId].length) && (n>0) && (arrInventoryData["return_data"][itemId].length>2)){
							// iterate through inventory/item list
							if(arrInventoryData["return_data"][itemId][t][0]) {
								zdLogStatus('Found '+itemId+'...');
								zdWorkQueuePush( 'zdSellItemService('+itemId+', '+arrInventoryData["return_data"][itemId][t][0]+', '+numToSell+');' );
								n--;
							}
							t++; 
						}
					}
					zdLogStatus('Starting to sell...');
					zdWorkQueueStart();
					return;
				}else{
					zdLogStatus('No '+itemId+' in inventory');
				}
			}
		}
	); 
}

function zdSellItemService( itemId, objectId ,numToSell){
	var arrParameters = zdGetGenericParameters();
	arrParameters["cmd"] = 'sell';
	arrParameters["objectid"] = objectId;
	arrParameters["itemid"] = itemId;
	arrParameters["qty"] = numToSell;
	new Ajax.Request(
		zdSellbackServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Sold '+objectId+'...');
				return;
			}
		}
	);
}

function zdCupidCollect(){
	// Iterate islands
	for(i=0;i<zdIslands;i++) {
		zdFarmingService(i);
	}
}

function zdCupidMultiCollect(){
	// Iterate islands
	var numIterations = 6; //send 20 requests per island
	for(i=0;i<zdIslands;i++) {
		for(l=0;l<numIterations;l++) {
			zdFarmingService(i);
		}
	}
}

function zdFarmingService( islandId){
	zdLogStatus('Sending request for island '+(islandId+1)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["islandId"] = islandId;
	arrParameters["numHarvested"] = 0;
	arrParameters["accelerator"] = 'cupid';
	arrParameters["additional"] = 'null';
	arrParameters["bonuses"] = '{"'+zdSeasonal.missionProjId+'":10}';
	arrParameters["userId"] = zdUserId;
	new Ajax.Request(
		zdFarmingServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Collected island '+(islandId+1)+'...');
				return;
			}
		}
	);
}

function zdSuperShakey(islandId) {
	for(i=0;i<10;i++) { //shake 10 times
		zdShakeyService(islandId);
	}
}
var reshaker = 0;
var reshakey = 0;

function zdStopShaking(){
	clearInterval(reshaker);
	clearInterval(reshakey);
	zdLogStatus('Repeat Shaking Stopped...');
}

function zdReShakey(islandId,rsint) {  // For Reshakeables
	zdLogStatus('Preparing to start shaking island '+(islandId+1)+'...');
	reshakey=setInterval('zdSuperShakey('+islandId+');',rsint); //shake every rsint
	zdSuperShakey(islandId); //shake first time
}

function zdShakeyService( islandId){
	zdLogStatus('Shaking island '+(islandId+1)+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["islandId"] = islandId;
	arrParameters["accelerator"] = 'shakey';
	arrParameters["additional"] = 'null';
	arrParameters["userId"] = zdUserId;
	arrParameters["displayedZoo"] = zdUserId;
	new Ajax.Request(
		zdFarmingServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Shook island '+(islandId+1)+'...');
				return;
			}
		}
	);
}

function zdMassBuy(){
	var numberToBuy = (prompt(zdui.getLabel("shop_flyout_actions_buylots_prompt"), "10"));
	for(i=1;i<20000;i++){
		if(zdZooItems[i] != null){
			if(( zdZooItems[i]['rarity'] ) && (zdZooItems[i]['rarity'] != "ultraRare" ) && ( zdZooItems[i]['name'].toLowerCase().indexOf('baby') != 0 )){
				var buyThisTime = 0;
				var itemsLeft = numberToBuy;
				while (itemsLeft > 0){
					buyThisTime = itemsLeft;
					if(itemsLeft > 10){
						buyThisTime = 10;
					}else{
						buyThisTime = itemsLeft;
					}
					zdBuyItem(i, buyThisTime);
					itemsLeft = itemsLeft - buyThisTime;
				}
			}
		}
	}
}

function zdMassBuyRare(){
	var numberToBuy = (prompt(zdui.getLabel("shop_flyout_actions_buylots_prompt"), "10"));
	for(i=1;i<20000;i++){
		if(zdZooItems[i] != null){
			if(( zdZooItems[i]['rarity'] ) && (zdZooItems[i]['rarity'] == "rare" ) && ( zdZooItems[i]['name'].toLowerCase().indexOf('baby') != 0 )){
				var buyThisTime = 0;
				var itemsLeft = numberToBuy;
				while (itemsLeft > 0){
					buyThisTime = itemsLeft;
					if(itemsLeft > 10){
						buyThisTime = 10;
					}else{
						buyThisTime = itemsLeft;
					}
					zdBuyItem(i, buyThisTime);
					itemsLeft = itemsLeft - buyThisTime;
				}
			}
		}
	}
}

function zdSellAll(){
	zdLogStatus('Loading inventory for '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdLoadInventoryServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrInventoryData = eval( '('+transport.responseText+')' );
				var numToSell = 1;
				for(t=0;t<arrInventoryData["return_data"].length;t++){
					zdWorkQueuePush( 'zdSellItemService('+arrInventoryData["return_data"][t][0]+', '+arrInventoryData["return_data"][t][1]+', '+numToSell+');' );
				}
				zdWorkQueueStart();
				return;
			}
		}
	); 
}

function zdLoadAndReshakeWlp(islandId) {
	if(isNaN(islandId)){
		var islandId=parseInt(prompt('Reshake which island? (1-'+zdIslands+')',''))-1;
		zdLoadAndReshakeWlp(islandId);
	}else{
		zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+' '+zdui.getLabel("status_island_for")+' '+zd_fb_sig_user_id+'...');
		var arrParameters = zdGetGenericParameters();
		arrParameters["friendId"] = zd_fb_sig_user_id;
		arrParameters["islandId"] = islandId;
		new Ajax.Request(
			zdLoadIslandServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess : function(transport){
					zdSetResponse(transport.responseText);
					var strTransformed = zdTransformIsland( zdGetResponse() );
					var zdShakeItemData = eval( '('+strTransformed+')' );
					zdLogStatus('Have '+zdShakeItemData["return_data"].length+' items on island...');
					var strItems = '[';
					var intSeqNum = 0;
					for(i=0;i<zdShakeItemData["return_data"].length;i++){
						if(zdShakeItemData["return_data"][i].length >= 3){
							// item is a wlp tree
							if((zdShakeItemData["return_data"][i][0]==240)||(zdShakeItemData["return_data"][i][0]==242)||(zdShakeItemData["return_data"][i][0]==423)) {
									if(intSeqNum>0) {
										strItems += ',';
									}
									intSeqNum++;
									strItems += '['+zdShakeItemData["return_data"][i][0]+',"'+zdShakeItemData["return_data"][i][1]+'",false,'+intSeqNum+']';
							} 
						}
					}
					strItems += ']';
					zdLogStatus('Shake list '+strItems+'...');
					reshaker=setInterval('zdCummulativeShaker(\''+strItems+'\','+zd_fb_sig_user_id+');',10500 );
					zdCummulativeShaker(strItems,zd_fb_sig_user_id); //shake first time
					return;
				}
			}
		);
	} 
}

function zdFindInZoo(userId) {
	var animalId = (prompt('Enter AnimalId to Find', ''));
	var strUrl = 'http://apps.facebook.com/'+zd_appurl+'/zoo/home.php?showTrainingForAnimalId='+animalId+'&zooOwnerId='+userId+'';
	window.open( strUrl, '_blank' );
}

function zdRandomGreeting(){
//	var greeting = new Array( 'Hi', 'Welcome', 'Today could be your lucky day,', 'Happy Zooing', 'Nice looking Zoo,', 'How are you', 'What\'s up', 'How\'s it hangin', 'Back again,', 'Ready to play,', 'What\'s shakin', 'Are you addicted to Zoo,', 'You\'re not CHEATING are you' );
//	var greeting = new Array( 'Hi', 'Welcome to a Winter Wonderland', 'Stay Warm,', 'Happy Zooing', 'HAPPY 2019,', 'Are you warm enough', 'We MADE it another year', 'Did you get enough snow', 'Back again,', 'Ready to play,', 'Brrr is it cold enough for you', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
    var greeting = new Array( 'Hi', 'Welcome to a Winter Wonderland', 'Stay Warm,', 'Happy Zooing', 'HAPPY VALENTINES DAY,', 'Are you warm enough', 'Who is YOUR sweetheart', 'Did you get any snow', 'Back again,', 'Ready to play,', 'Brrr is it cold enough for you', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//  var greeting = new Array( 'Hi', 'Spring is right around the corner', 'Stay Warm,', 'Happy Zooing', 'HAPPY ST PATRICKS DAY,', 'Are you ready for Spring', 'Leprechaun Crossing', 'Time for some Green treats', 'Back again,', 'Ready to play,','Brrr is it cold enough for you', 'Are you addicted to Zoo,', 'ENJOYING YOURSELF' );
//	var greeting = new Array( 'Hi', 'Spring is HERE', 'Stay Warm,', 'Happy Zooing', 'HAPPY SPRING,', 'Are you ready for April', 'Did you see the Easter Bunny', 'Are you ready to search for colored eggs', 'Back again,', 'Ready to play,', 'Are you warming up', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//	var greeting = new Array( 'Hi', 'Spring is HERE', 'Stay Warm,', 'Happy Zooing', 'HAPPY SPRING,', 'Are you ready for May', 'Do you see any flowers', 'Are you ready to Plant your garden', 'Back again,', 'Ready to play,', 'Are you warming up', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//	var greeting = new Array( 'Hi', 'School is almost over', 'Time for SunScreen,', 'Happy Zooing', 'HAPPY SPRING,', 'Are you ready for SUMMER', 'Are your flowers blooming', 'Have you planted any veggies', 'Back again,', 'Ready to play,', 'Have you thought about your Teachers lately', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//	var greeting = new Array( 'Hi', 'Summer is HERE', 'Time for SunScreen,', 'Happy Zooing', 'HAPPY SUMMER,', 'Are your storm supplies fresh', 'Are your flowers blooming', 'Have you harvested any veggies', 'Back again,', 'Ready to play,', 'Have you thought about your Teachers lately', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//  var greeting = new Array( 'Hi', 'Summer is Almost over', 'Time for SunScreen', 'Happy Zooing', 'HAPPY END OF SUMMER,', 'Are you ready for Hurricane Season', 'Are you ready for SCHOOL', 'Did You Buy enough School Supplies', 'Back again,', 'Ready to play,', 'Have you thought about your first day outfit', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//  var greeting = new Array( 'Hi', 'Summer is Almost over', 'Time for School,', 'Happy Zooing', 'HAPPY END OF SUMMER,', 'Are you ready for Homework', 'Are you ready for SCHOOL', 'Did You Buy enough School Supplies', 'Back again,', 'Ready to play,', 'Have you thought about your Summer Love lately', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//	var greeting = new Array( 'Hi', 'You have leaves to rake', 'Time to Harvest the Veggies,', 'Happy Zooing', 'HAPPY FALL,', 'Are you ready for Cooler weather', 'Are you ready for Winter', 'Did You Buy enough Canning Supplies', 'Back again,', 'Ready to play,', 'Are you enjoying the cooler mornings', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//  var greeting = new Array( 'BOO,', 'Welcome to the madness', 'That\'s a nice costume', 'Happy Halloween', 'Look into my eyes', 'Your haunted castle or mine,', 'Trick or treat', 'Hanging around,', 'Back for more,', 'Ready for anything,', 'What\'s that noise,', 'Are you still alive,', 'You\'re not dead are you' );
//	var greeting = new Array( 'Hi', 'You STILL have leaves to rake', 'Time to Plan a PARTY,', 'Happy Zooing', 'HAPPY THANKSGIVING,', 'Are you ready for a little snow', 'Are you ready for Winter', 'Did You Buy enough Cranberry Sauce', 'Back again,', 'Ready to play,', 'Are you enjoying the color changes in the trees', 'Are you addicted to Zoo,', 'ARE YOU ENJOYING YOURSELF' );
//    var greeting = new Array( 'Merry Christmas', 'It\'s beginning to look a lot like Christmas,', 'Peace unto you,', 'Happy Hanukkah,', 'Happy Kwanzaa,', 'Have you been naughty,', 'Naughty or nice,', 'Happy Holidays,', 'Can I borrow your stocking,', 'Walking in a winter wonderland,', 'Will you help me decorate the tree,', 'What do you want for Christmas,', 'Which list are YOU on,' );
	var rnd = Math.floor(Math.random()*13); // random number from 0 to 12
	if(rnd<5){
	var endmark = '!';
	}else{
	var endmark = '?';
	}
	zdLogStatus(''+greeting[rnd]+' '+PageData.player.name+''+endmark+'');
}

function zdGiftingAcceptAll(returnGift) { //
	zdLogStatus('You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length+' Zoomate request(s)...');
	zdLogStatus('You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length+' gift(s)...');
	for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
		zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
		zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
		zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
		if(i==arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1){
			zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,returnGift,1); //refresh flyout
		}else{
			zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,returnGift);
		}
	}
	for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length;i++){
		zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["requestId"];
		zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["giftId"];
		zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["friendId"];
		zdAcceptGift(zdrequestId,zdgiftId,zdfriendId);
	}
}

function zdAcceptGift(zdrequestId,zdgiftid,zdfriendid,returnGift,refresh,arrSelectedGifts) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "acceptRequest";
	arrParameters["requestId"] = zdrequestId;
	arrParameters["giftid"] = zdgiftid;
	arrParameters["friendid"] = zdfriendid;
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				if(zdgiftid!=null){
					if(zdArrFriendList != null){
						for(f=0;f<zdArrFriendList['return_data'].length;f++){
							if(zdfriendid==zdArrFriendList['return_data'][f]['uid'] ){
								var zdFriendName =zdArrFriendList['return_data'][f]['name'] ;
							}
						}
					}else{
						var zdFriendName =zdfriendid;
					}
					zdLogStatus('Accepted '+zdGetAnimalForId(zdgiftid)['name']+' from '+zdFriendName+'...');
					if(returnGift){
						zdReturnGift(zdrequestId,zdgiftid,zdfriendid);
					}
				}else{
					if(zdArrFriendList != null){
						for(f=0;f<zdArrFriendList['return_data'].length;f++){
							if(zdfriendid==zdArrFriendList['return_data'][f]['uid'] ){
								var zdFriendName =zdArrFriendList['return_data'][f]['name'] ;
							}
						}
					}else{
						var zdFriendName =zdfriendid;
					}
					zdLogStatus('Accepted Zoomate request from '+zdFriendName+'...');
				}
				if(refresh){
					if(arrSelectedGifts){
						if(returnGift){
							zdLoadGiftingCenterFlyout(arrSelectedGifts,2); //refresh flyout
							zdLogStatus('Refreshing flyout...');
						}else{
							zdLoadGiftingCenterFlyout(arrSelectedGifts,1); //refresh flyout
							zdLogStatus('Refreshing flyout...');
						}
					}else{
						zdLoadGiftingCenterFlyout(); //refresh flyout
						zdLogStatus('Refreshing flyout...');
					}
				}
			}
		}
	); 
}		

function zdReturnGift(zdrequestId,zdgiftid,zdfriendid,notTYGift) {
	//	zdLogStatus('Returning gift '+zdgiftid+' to '+zdfriendid+'...');
	returnFreeAnimals=document.getElementById("returnFreeAnimals").checked;
	returnExclusives=document.getElementById("returnExclusives").checked;
	returnPromoPart=document.getElementById("returnPromoPart").checked;
	if(!notTYGift){
		if(zdZooItems[zdgiftid]['rarity'] ){
		var giftArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,144];
		}	
		if(returnExclusives){
			var giftArr = [300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,376,377,378,379,380,381,382,383,384,385,386];
		}
		if(returnPromoPart && zdSeasonal.arrSeasonalItemsId.length!=0 ){
			var giftArr = [zdSeasonal.arrSeasonalItemsId[zdSeasonal.arrSeasonalItemsId.length-2],zdSeasonal.arrSeasonalItemsId[zdSeasonal.arrSeasonalItemsId.length-1]];
		}
		if(giftArr){
			var rnd = Math.floor(Math.random()*giftArr.length);
			zdgiftid=giftArr[rnd];
		}
	}
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "sendThankyouGift";
	arrParameters["requestId"] = zdrequestId;
	arrParameters["giftid"] = zdgiftid;
	arrParameters["friendid"] = zdfriendid;
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrReturnedGiftData = eval( '('+transport.responseText+')' );
				if(zdArrFriendList != null){
					for(f=0;f<zdArrFriendList['return_data'].length;f++){
						if(zdfriendid==zdArrFriendList['return_data'][f]['uid'] ){
							var zdFriendName =zdArrFriendList['return_data'][f]['name'] ;
						}
					}
				}else{
					var zdFriendName =zdfriendid;
				}
				if(notTYGift){
					if(arrReturnedGiftData["return_data"][zd_fb_sig_user_id] && (arrReturnedGiftData["return_data"][zd_fb_sig_user_id]== true || arrReturnedGiftData["return_data"][zd_fb_sig_user_id].indexOf("201")!=-1)){
						zdLogStatus('Sent '+zdGetAnimalForId(zdgiftid)['name']+' to '+zdFriendName+'...');
					}else{
						zdLogStatus('Cannot Send '+zdGetAnimalForId(zdgiftid)['name']+' to '+zdFriendName+'...');
					}
				}else{
					if(arrReturnedGiftData["return_data"][zd_fb_sig_user_id]!= null){
						zdLogStatus('Returned '+zdGetAnimalForId(zdgiftid)['name']+' to '+zdFriendName+'...');
					}else{
						zdLogStatus('Cannot Return '+zdGetAnimalForId(zdgiftid)['name']+' to '+zdFriendName+'...');
					}
				}
			}
		}
	);
}	

function zdAcceptGiftsbyId(requestId,giftId,returnGift,refresh,arrSelectedGifts){
	for(i=0;i<arrGiftData2[giftId].length;i++){
		if(i==arrGiftData2[giftId].length-1 && refresh==1){
			if(arrSelectedGifts){
				zdAcceptGift(requestId,giftId,arrGiftData2[giftId][i],returnGift,1,arrSelectedGifts); //refresh flyout with selected
			}else{
				zdAcceptGift(requestId,giftId,arrGiftData2[giftId][i],returnGift,1); //refresh flyout
			}
		}else{
			zdAcceptGift(requestId,giftId,arrGiftData2[giftId][i],returnGift);
		}
	}
}

function zdIgnoreGiftsbyId(requestId,giftId,zdReturn,refresh,arrSelectedGifts){
	for(i=0;i<arrGiftData2[giftId].length;i++){
		if(i==arrGiftData2[giftId].length-1 && refresh==1){
			if(arrSelectedGifts){
				zdIgnoreGift(requestId,giftId,arrGiftData2[giftId][i],zdReturn,1,arrSelectedGifts); //refresh flyout with selected
			}else{
				zdIgnoreGift(requestId,giftId,arrGiftData2[giftId][i],zdReturn,1); //refresh flyout
			}
		}else{
			zdIgnoreGift(requestId,giftId,arrGiftData2[giftId][i],zdReturn);
		}
	}
}

function zdGiftingIgnoreAll(zdReturn) {
	if(confirm('Are you sure you want to ignore all gifts and Zoomate requests?')){
		zdLogStatus('You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length+' Zoomate request(s)...');
		zdLogStatus('You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length+' gift(s)...');
		for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
			zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
			zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
			zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
			if(i==arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1){
				zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,zdReturn,1); //refresh flyout
			}else{ 
				zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,zdReturn);
			}
		}
		for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length;i++){
			zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["requestId"];
			zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["giftId"];
			zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["friendId"];
			zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId);
		}
	}
}

function zdIgnoreGift(zdrequestId,zdgiftid,zdfriendid,zdReturn,refresh,arrSelectedGifts) {
	if(zdReturn){
		zdReturnGift(zdrequestId,zdgiftid,zdfriendid);
	}
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "ignoreRequest";
	arrParameters["requestId"] = zdrequestId;
	arrParameters["giftid"] = zdgiftid;
	arrParameters["friendid"] = zdfriendid;
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				if(zdgiftid!=null){
					if(zdArrFriendList != null){
						for(f=0;f<zdArrFriendList['return_data'].length;f++){
							if(zdfriendid==zdArrFriendList['return_data'][f]['uid'] ){
								var zdFriendName =zdArrFriendList['return_data'][f]['name'] ;
							}
						}
					}else{
						var zdFriendName =zdfriendid;
					}
					zdLogStatus('Ignored '+zdGetAnimalForId(zdgiftid)['name']+' from '+zdFriendName+'...');
				}else{
					if(zdArrFriendList != null){
						for(f=0;f<zdArrFriendList['return_data'].length;f++){
							if(zdfriendid==zdArrFriendList['return_data'][f]['uid'] ){
								var zdFriendName =zdArrFriendList['return_data'][f]['name'] ;
							}
						}
					}else{
						var zdFriendName =zdfriendid;
					}
					zdLogStatus('Ignored Zoomate request from '+zdFriendName+'...');
				}
				if(refresh){
					if(arrSelectedGifts){
						zdLoadGiftingCenterFlyout(arrSelectedGifts,0); //refresh flyout
						zdLogStatus('Refreshing flyout...');
					}else{
						zdLoadGiftingCenterFlyout(); //refresh flyout
						zdLogStatus('Refreshing flyout...');
					}
				}
			}
		}
	); 
}

var press = 0;
function Magic8Ball(){
	if(press == 0){
		alert('WINTER IS HERE.\nask Again...');
		press=1;
	}else{
		press=0;
		var answerArr = ['It is certain!','It is decidedly so!','Without a doubt!','Yes - definitly!','You may rely on it!','As I see it, YES!','Most likely...','Outlook good!','Signs point to CHOCOLATE!','Yes!','Reply hazy, try again...','You have Homework to help with.','Better not tell you now!','Cannot predict now...','Concentrate and ask again.','Don\'t count on it...','My reply is no...','My sources say no...','Outlook not so good...','I need more coffee...',
		'Brilliant Idea!','Looking good, is that a new Hair cut?','It Can\'t Be All That Bad...','HAPPY HAPPY HAPPY!','Ummmmm WHAT did you say?','What Do You Think?','You\'ve Got To Be Kidding...'];
		var rnd = Math.floor(Math.random()*27); // random number from 0 to 26
		zdLogStatus('The snow boarding Squirrel says: '+answerArr[rnd]);
	}
}

function zdMoveAnimals(startId,endId,islandId){  //test code eval only
	x=0;
	y=0;
	for(i=startId;i<=endId;i++){
		if(zdZooItems[i] != null){
			if(zdZooItems[i]['rarity'] ){
				if(y<50){
					zdLogStatus('Found '+i+'...');
					zdWorkQueuePush('zdMoveZooItem('+x+','+y+','+i+','+i+','+islandId+');');
					x=x+5;
					if(x>=50){
						y=y+5;
						x=0;
					}
				}
			}
		}
	}
	zdWorkQueueStart();
}

function zdRemoveDups(){  //eval only - paste in array of csv to friends log field [] and eval this.  Result in AJAX results
	zdZooFriends = eval( '('+zdGetFriends()+')' );
	var strFriendList = "\n";
	var arrFoundFriends = new Array();
	var uniqueFriends = 0;
	for(f=0;f<zdZooFriends.length;f++){
		var currentUid = ""+zdZooFriends[f];
		if(arrFoundFriends[currentUid] != null){
			arrFoundFriends[currentUid] = arrFoundFriends[currentUid] + 1;
		}else{
			strFriendList += '' + currentUid + ',';
			arrFoundFriends[currentUid] = 1;
			uniqueFriends++;
		}
		if((f%100)==0) {
			zdLogStatus('Found '+uniqueFriends+' unique friends of '+f+' processed...');
		}
	}
	zdSetResponse(strFriendList+"\n");
	zdLogStatus('Found '+uniqueFriends+' unique friends of '+zdZooFriends['return_data'].length+'...');
}

var arrItemLoc = [];
var arrItemQty = [];
var arrItemPriceSell = [];
function zdGetIslandQty(islandId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zd_fb_sig_user;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strIslandData = zdFormatCoords( zdGetResponse() ); 
				var zdIslandData = eval( '('+transport.responseText+')' );
				for(yd in zdIslandData["return_data"]){ 
					for(xd in zdIslandData["return_data"][yd]){
						var itemId=zdIslandData["return_data"][yd][xd][0];
						if(zdZooItems[itemId] != null){
							if(zdZooItems[itemId]['rarity'] ){
								arrItemQty[itemId]=zdIslandData["return_data"][yd][xd][1];
								arrItemLoc[itemId]=Number(islandId)+1;
								arrItemPriceSell[itemId]=zdIslandData["return_data"][yd][xd][2];
							}else{ //non-animal
								if(isNaN(arrItemQty[itemId])){
									arrItemQty[itemId]=0;
								}
								arrItemQty[itemId]=Number(arrItemQty[itemId])+1;
								if(arrShakeable.has(zdIslandData["return_data"][yd][xd][0])){
									arrItemPriceSell[itemId]=zdIslandData["return_data"][yd][xd][3];
								}else{
									arrItemPriceSell[itemId]=zdIslandData["return_data"][yd][xd][2];
								}
							}
						}
					}
				} 
			}
		}
	);arrItemQty[0]+=1;
}

function zdGetInvQty(refresh) {
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdLoadInventoryServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrInventoryData = eval( '('+transport.responseText+')' );
				for(i in arrInventoryData["return_data"]){
					var itemId=i;
					if(zdZooItems[itemId] != null){
						if(zdZooItems[itemId]['rarity'] ){
							arrItemQty[itemId] = arrInventoryData["return_data"][i][1][0];
							arrItemLoc[itemId]="Inventory";
							arrItemPriceSell[itemId]=arrInventoryData["return_data"][i][1][1];
						}else{ //non-animal
							arrItemQty[itemId]=Number(arrItemQty[itemId])+Number(arrInventoryData["return_data"][i].length-1);
							if(arrShakeable.has(arrInventoryData["return_data"][i][0])){
								arrItemPriceSell[itemId]=arrInventoryData["return_data"][i][1][2];
							}else{
								arrItemPriceSell[itemId]=arrInventoryData["return_data"][i][1][1];
							}
						}
					}
				}
				if(refresh){
					zdShowItemList();
				}
			}
		}
	);arrItemQty[0]+=1;zdShowItemListIfReady();
}

function zdGetItemQty(refresh) {
	//zdLogStatus('Loading islands and inventory for Qty and Loc!');
	for(z=0;z<20000;z++){
		arrItemQty[z] = 0;
	}
	for(i=0;i<zdIslands;i++){
		zdGetIslandQty(i);
	}
	setTimeout("zdGetInvQty("+refresh+");",10000);
}

Array.prototype.has = function(value) {
	var i;
	for (var i = 0, loopCnt = this.length; i < loopCnt; i++) {
		if(this[i]=== value) {
			return true;
		}
	}
	return false;
};

function zdZoomateInvite(userId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["owner_name"] = PageData.player.name;
	arrParameters["zooMateInviteType"] = "friendpanel";
	arrParameters["zooMateInvitesSent"] = 1;
	arrParameters["to[]"] = userId;
	new Ajax.Request(
		zdzoomateInviteIframeUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdLogStatus('Sent Zoomate Invite to '+userId+'...');
			}
		}
	); 
}

function zdZoomateInviteToAll(){
	for(f=0;f<zdArrFriendList['return_data'].length;f++){
		if(zdArrFriendList['return_data'][f] != null) {
			if(!zdArrFriendList['return_data'][f]['is_nonzoofriend']) {	
				if(!zdArrFriendList['return_data'][f]['is_zoomate']){
					zdWorkQueuePush('zdZoomateInvite('+zdArrFriendList['return_data'][f]['uid']+')	'); 
				}
			}
		}
	}zdWorkQueueStart();
}

var arrGiftIds = [];
var arrFreeGift2 = [];
var arrLimitedGift2 = [];
function zdGetGiftIds(refresh){
	var arrParameters = zdGetGenericParameters();
	arrParameters["service"] = 'dsplygiftservice';
	arrParameters["owner_name"] = PageData.player.name;
	new Ajax.Request(
		zdgiftInIframeUrl,
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = transport.responseText;
				var pos0 = content.indexOf("gifts = ")+8;
				var pos1 = content.indexOf("}]", pos0)+2;
				arrGiftInfos = eval( '('+content.slice(pos0, pos1)+')' );var startLimited =0;var startFree=0;
				for (c=0;c<arrGiftInfos.length;c++){
					arrGiftIds[c]=arrGiftInfos[c]["id"];
					if(arrGiftInfos[c]["category"]=="freegift"){
						arrFreeGift2[startFree]=arrGiftInfos[c]["id"];startFree++;
					}else if(arrGiftInfos[c]["category"]=="limitedgift"){
						arrLimitedGift2[startLimited]=arrGiftInfos[c]["id"];startLimited++;
					}
				}
				arrGiftIds[(arrGiftIds.length)] = 515;arrFreeGift2[(arrFreeGift2.length)] = 515;
				if(refresh){zdShowItemList();}
			}
		}
	);
}

var arrShopIds = [];
function zdGetShopIds(){
	var arrParameters = zdGetGenericParameters();
	arrParameters["firstLoad"] = '1';
	arrParameters["owner_name"] = PageData.player.name;
	new Ajax.Request(
		zdshopInIframeUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = transport.responseText;
				var pattern1 = /shopOrder\s\=\s\[[\d+,]+\d+\]/;
				var zdShopData = content.match(pattern1);
				var pattern2 = /[\d+,]+\d+/;
				var zdShop = zdShopData[0].match(pattern2);
				arrShopIds = zdShop[0].split(",");
				for(i=0;i<arrShopIds.length;i++){
					arrShopIds[i]= Number(arrShopIds[i]);
				}
				//zdShowItemList();
			}
		}
	);
}

function checkOne(field){
	if(field.checked){
		field.checked = false ;
	}else{
		field.checked = true ;
	}
}

function checkAll(field){
	for (i = 0; i < field.length; i++){
		field[i].checked = true ;
	}
}

function uncheckAll(field){
	for (i = 0; i < field.length; i++){
		field[i].checked = false ;
	}
}

arrItemOptions=[];

function CheckList(LoadList) {
	boxes = document.myform.list.length;
	for (i=0;i<boxes;i++) {
		if(document.myform.list[i].checked) {
			arrItemOptions[Number(document.myform.list[i].value)] = 1;
		}else{
			arrItemOptions[Number(document.myform.list[i].value)] = null;
		}
	}
	if(LoadList){
		$.ajax({
			url: 'http://dfzw.jaidnet.com/php/itemListRY.php',
			async: false,
			success: function(response) {
				var pos1 = response.indexOf(':true}',0)+7;
				var list=response.slice(0, pos1);
				zdZooItems=eval( '('+list+')' );return zdZooItems;//zdShowItemList();
			}
		});
	}else{//zdShowItemList();
	}
}
var arrPriceIds = [];

function zdTransShopInfo( strShop){
	var strNewShop = strShop.replace(/\=\s\{/g,"");
	strNewShop = strNewShop.replace(/\"[A-Za-z0-9-_]+\"\:true/g,"");
	strNewShop = strNewShop.replace(/\"[A-Za-z0-9-_]+\"\:false/g,"");
	strNewShop = strNewShop.replace(/\"[A-Za-z0-9-_]+\"\:null/g,"");
	strNewShop = strNewShop.replace(/\"id\"\:(\d+)/g,'"id?":"$1?"');
	strNewShop = strNewShop.replace(/\"price\"\:([0-9.]+),/g,'"price?":"$1?"');
	strNewShop = strNewShop.replace(/\"price\"\:\"([0-9.]+)\",/g,'"price?":"$1?"');
	strNewShop = strNewShop.replace(/0.5/g,"5");
	strNewShop = strNewShop.replace(/0.99/g,"10");
	strNewShop = strNewShop.replace(/1.99/g,"20");
	strNewShop = strNewShop.replace(/\"currency\"\:\"([a-z]+)\"/g,'"currency?":"$1?"');
	strNewShop = strNewShop.replace(/[,\:!\'\[\].$_\\\/]+/g,'""');
	strNewShop = strNewShop.replace(/\"[A-Za-z0-9 -]+\"/g,"");
	strNewShop = strNewShop.replace(/[{}"]+/g,'""');
	strNewShop = strNewShop.replace(/\"id\?\"\"([0-9]+)\?\"\"currency\?\"\"([a-z]+)\?\"\"price\?\"\"([0-9.]+)\?\"/g,'"$1":{"currency":"$2","price":$3}');
	strNewShop = strNewShop.replace(/\"[A-Za-z0-9]+\?\"/g,"");
	strNewShop = strNewShop.replace(/\}[A-Za-z0-9 :"-]+\"([0-9]+)\"\:\{/g,'},"$1":{');
	strNewShop = strNewShop.replace(/\}\"/g,' "');
	strNewShop = strNewShop.replace(/\"\"/g,' "');
	strNewShop = strNewShop.replace(/\},\";/g,';');
	strNewShop = strNewShop.replace(/\"usd\",\"price\":1/g,'"usd" "price" 10');
	strNewShop = strNewShop.replace(/\"usd\" \"price\" 100/g,'"usd" "price" 10');
	strNewShop = strNewShop.replace(/[{}:, ]+/g,' ');
	zdSetResponse(strNewShop);
	return strNewShop;
}

function zdGetPriceIds(){
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdshopInIframeUrl,
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = transport.responseText ;
				var x = content.indexOf("itemMap =");
				var y = content.indexOf("var shopOrder");
				var arrItemMap = content.slice(x+8,y-6);
				var arrPriceId = zdTransShopInfo( arrItemMap );
				arrPriceIds = arrPriceId.split(" ");
			}
		}
	);zdZooLoaded=1;
}
var zdStat2 = [];

function zdZooAllStatsAjax(){
	var arrParameters = zdGetGenericParameters();
	arrParameters['activeFlag'] = "true"; 
	var strUrl = zdZooStatsUrl+'?fps=2&avgfps=2&zd=1&qmode=l&checkBreed=1&oauth_consumer_key=facebook.com&oauth_signature=1&vip&version=100';
	new Ajax.Request(
		strUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				zdStat2 = eval( '('+transport.responseText+')' );
				zdLogStatus( 'Creating Stats flyout' );
				zdLoadZooService(userId);
				zdZooStats();
				return;
			}
		}
	); 
}

function zdZooStats(){
	var strHtml = '';
		strHtml += '<h2> &nbsp Stats of your zoo:</h2>';
		strHtml += '<div id="zdShopPreviewBody">';
		strHtml += '<div style="">'; 
		strHtml += '<p style="font-weight: bold; ">GLOBAL STATS :</p>';
		strHtml +='<ul>';
		strHtml +='<img alt="" src="'+zdHomePageUrl+'img/valueicon.png" width="17"/> <b>Zoo Value = $ '+addCommas(zdStat2["return_data"]['zooValue'])+'</b> <br> <img alt="" src="'+zdHomePageUrl+'img/img-money.png"  width="18"/> <b>Cash = $ '+addCommas(zdStat2["return_data"]['cash'])+' </b> <br> <img alt="" src="'+zdHomePageUrl+'img/img-coin.png"  width="12"/> <b>  WLP = '+addCommas(zdStat2["return_data"]['wildlifePoint'])+'</b> <br> <img alt="" src="'+zdHomePageUrl+'img/juiceicon.png" width="6"/> <b>   Juice = '+addCommas(zdStat2["return_data"]['farming']['juiceLevel'])+'</b><br><b>Islands unlocked = '+zdZooResponseData["return_data"]['extras']['numIslandsUnlocked']+'</b><br><b>Level =  '+zdZooResponseData["return_data"]['treats']['xplevel']+'/'+zdZooResponseData["return_data"]['treats']['maxAchievableLevel']+'&nbsp&nbspXP = '+addCommas(zdZooResponseData["return_data"]['treats']['xp'])+'</b>';
		if(zdZooResponseData["return_data"]['treats']['xplevel'] != zdZooResponseData["return_data"]['treats']['maxAchievableLevel']) {
			strHtml +='<br>You need '+addCommas((zdZooResponseData["return_data"]['treats']['nextLevel'] - zdZooResponseData["return_data"]['treats']['xp']))+' XP to reach the next level!';
		}
		strHtml +='</ul>';
		strHtml += '<p style="font-weight: bold; ">REPORT CARD :</p>';
		strHtml +='<ul>';
		if(zdStat2["return_data"]['reportCard']['animalsScore'] == 1 && zdStat2["return_data"]['reportCard']['visitorsScore'] == 1 && zdStat2["return_data"]['reportCard']['workersScore'] == 1 && zdStat2["return_data"]['reportCard']['decorationsScore'] == 1) {
			strHtml +='<p> Zoo happiness = <img alt="" src="'+zdHomePageUrl+'img/happyicon.png"  width="13"/></p>';
		}else{
			strHtml +='<p> Zoo happiness = <img alt="" src="'+zdHomePageUrl+'img/sadicon.png"  width="13"/></p>';
		}
		if(zdStat2["return_data"]['reportCard']['animalsScore'] != 1) {
			strHtml +='You need to feed your animals<br>';
		}
		if(zdStat2["return_data"]['reportCard']['visitorsScore'] != 1) {
			strHtml +='You need to buy some kiosks<br>';
		}
		if(zdStat2["return_data"]['reportCard']['workersScore'] != 1) {
			strHtml +='You need to buy some managers<br>';
		}
		if(zdStat2["return_data"]['reportCard']['decorationsScore'] != 1) {
			strHtml +='You need to buy some decorations<br>';
		}
		strHtml +='</ul>';
		
		strHtml += '<p style="font-weight: bold; ">ANIMALS :</p>';
		strHtml +='<ul>';
		strHtml +='<b> Animals owned = '+addCommas(zdZooResponseData["return_data"]['extras']['animals']['total'])+'</b><br><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['animals']['total'] - (zdZooResponseData["return_data"]['extras']['animals']['uncommon'] + zdZooResponseData["return_data"]['extras']['animals']['rare'] + zdZooResponseData["return_data"]['extras']['animals']['ultraRare']))+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['animals']['uncommon'])+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['animals']['rare'])+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['animals']['ultraRare'])+'<br>';
		strHtml +='<b> Species owned = '+addCommas(zdZooResponseData["return_data"]['extras']['species']['total'])+'</b><br><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['species']['total'] - (zdZooResponseData["return_data"]['extras']['species']['uncommon'] + zdZooResponseData["return_data"]['extras']['species']['rare'] + zdZooResponseData["return_data"]['extras']['species']['ultraRare']))+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['species']['uncommon'])+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['species']['rare'])+'&nbsp<img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/><img alt="" src="'+zdHomePageUrl+'img/rarity_star.gif" width="8"/>&nbsp'+addCommas(zdZooResponseData["return_data"]['extras']['species']['ultraRare'])+'<br>';
		strHtml +='<b> Training tricks = '+zdZooResponseData["return_data"]['extras']['tricks']['learned']+'/'+zdZooResponseData["return_data"]['extras']['tricks']['possible']+'</b><br>';
		var readypinkIds = [];
		for (c=0;c<zdZooResponseData["return_data"]['treats']['animals'].length;c++) { 
			if(zdZooItems[(zdZooResponseData['return_data']['treats']['animals'][c]['typeid'])]['rarity'] && zdZooResponseData['return_data']['treats']['animals'][c]['total_charge'] != 0 && zdZooResponseData['return_data']['treats']['animals'][c]['recharge'] == 0  && zdZooResponseData['return_data']['treats']['animals'][c]['full_recharge'] != 0 && zdZooResponseData['return_data']['treats']['animals'][c]['stale'] == false && zdZooResponseData['return_data']['treats']['animals'][c]['materialState'] != true){
				var d = c;
				readypinkIds.push(zdZooResponseData['return_data']['treats']['animals'][d]['typeid']);
			}
		};
		var numberReadypink = readypinkIds.length;
		strHtml +='<img alt="" src="'+zdHomePageUrl+'img/readypinkicon.png" width="14"/> Ready to collect (pink) = <b>'+numberReadypink+'</b><br>';
		var readyIds = [];
		for (c=0;c<zdZooResponseData["return_data"]['treats']['animals'].length;c++) { 
			if(zdZooItems[(zdZooResponseData['return_data']['treats']['animals'][c]['typeid'])]['rarity'] && zdZooResponseData['return_data']['treats']['animals'][c]['total_charge'] != 0 && zdZooResponseData['return_data']['treats']['animals'][c]['full_recharge'] == 0  && zdZooResponseData['return_data']['treats']['animals'][c]['stale'] == false && zdZooResponseData['return_data']['treats']['animals'][c]['materialState'] != true){
				var d = c;
				readyIds.push(zdZooResponseData['return_data']['treats']['animals'][d]['typeid']);
			}
		};
		var numberReady = readyIds.length;
		strHtml +='<img alt="" src="'+zdHomePageUrl+'img/readyicon.png" width="14"/> Ready to collect (red) = <b>'+numberReady+'</b><br>';
		strHtml +='<img alt="" src="'+zdHomePageUrl+'img/hungryicon.png" width="18"/> Visible Hungry Animals = <b>'+zdStat2["return_data"]['visibleHungryAnimals']+'</b><br>';
		strHtml +='<img alt="" src="'+zdHomePageUrl+'img/staleicon.png" width="14"/> Visible Stale Animals = <b>'+zdStat2["return_data"]['visibleStaleAnimals']+'</b><br>';
		var herdsIds = [];
		for (a=0;a<zdZooResponseData["return_data"]['treats']['animals'].length;a++) { 
			if(zdZooResponseData['return_data']['treats']['animals'][a]['herding_bonus'] ){
				var b = a;
				herdsIds.push(zdZooResponseData['return_data']['treats']['animals'][b]['typeid']);
				};
		};
		var numberHerds = herdsIds.length;
		strHtml +='Species giving herd bonus = <b>'+numberHerds+'</b><br>';
		strHtml +='</ul>';
		strHtml += '<p style="font-weight: bold; ">BABIES :</p>';
		strHtml +='<ul>';
		if(zdStat2["return_data"]['breedGlow'] == 0) {
			strHtml +='<p> Your babies are not ready !  <b>'+arrBreedData["return_data"]["currentBabies"].length+'</b> in nest(s).</p>';
		} else if(zdStat2["return_data"]['breedGlow'] == 1) {
			strHtml +='<p> Your babies are ready ! </p>';
		}else{
			strHtml +='<p> No babies in nest !</p>';
		}
		strHtml += '</ul>';
		strHtml += '<p style="font-weight: bold; ">ACHIEVEMENTS :</p>';
		strHtml +='<ul>';
		strHtml +='<p> <img alt="" src="'+zdHomePageUrl+'img/img-medal-big.png" style="vertical-align:middle"/><b>'+zdStat2["return_data"]['nextAchievement']['title']+'</b><br> '+zdStat2["return_data"]['nextAchievement']['details']+'</p>';
		strHtml += '</ul>';
		strHtml += '<p style="font-weight: bold; ">TROPHIES :</p>';
		strHtml +='<ul>';
		for(i=0;i<zdStat2["return_data"]['trophy']['achievements'].length;i++){
			if(zdStat2["return_data"]['trophy']['achievements'][i]['progress'] == zdStat2["return_data"]['trophy']['achievements'][i]['required']) {
				strHtml +='<img alt="" src="'+zdHomePageUrl+'img/trophy4.png" width="10"/> '+zdStat2["return_data"]['trophy']['achievements'][i]['title']+' : <b>Complete</b><br>';
			}else{
				for(j=0;j<zdStat2["return_data"]['trophy']['achievements'][i]['levels'].length;j++){
					if(zdStat2["return_data"]['trophy']['achievements'][i]['levels'][j]['completed']==0){
						strHtml +='<img alt="" src="'+zdHomePageUrl+'img/trophy'+j+'.png" width="10"/> '+zdStat2["return_data"]['trophy']['achievements'][i]['title']+' : <b>'+(zdStat2["return_data"]['trophy']['achievements'][i]['required'] - zdStat2["return_data"]['trophy']['achievements'][i]['progress'])+'</b> to go.<br>';
						break
					}
				}
			}
		}
		strHtml += '</ul>';
		strHtml += '</div>';
		zdFlyout(strHtml,'Zoo Stats');
	return;
}

function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function zdGiftinCenterFlyout(arrSelectedGifts,action) {
	var strHtml = '';
	strHtml += '<h2>&nbspList of Gifts</h2>';
	strHtml += '<p>';
	strHtml += 'You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length+' gift(s)...'
	strHtml += 'You have '+arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length+' Zoomate request(s)...'
	strHtml += '<div style="text-align: left;">&nbsp<input type="button" style="background-color:#FFCCE0; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdGiftingAcceptAll(1);" value="Acc&Ret All" /><input type="button" style="background-color:#FFCCE0; border:solid 2px grey; border-radius:5px;" id="button23"  onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdGiftingAcceptAll(0);" value="Accept All" /><input type="button" style="background-color:#FFCCE0; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdGiftingIgnoreAll(false);" value="Ignore All" /><input type="button" style="background-color:#FFCCE0; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdGiftingIgnoreAll(true);" value="Ign&Ret All" /><br>&nbsp<input type="button" style="background-color:#E0E0FF; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="CheckGift(2);" value="Acc&Ret Selected" /><input type="button" style="background-color:#E0E0FF; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="CheckGift(1);" value="Accept Selected" /><br>&nbsp<input type="button" style="background-color:#E0E0FF; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="CheckGift(0);" value="Ignore Selected" />&nbsp<input type="button" style="background-color:#E0E0FF; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="CheckGift(3);" value="Ign&Ret Selected" /><input type="button" style="background-color:#CFB8E6; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdIgnoreFreeAnimals();" value="Ignore Free" /><br>&nbspTo show senders names in status <input type="button" style="background-color:#FFD699; border:solid 2px grey; border-radius:5px;" id="button23"   onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="zdGetSenderNames();" value="Load friends list" /></div>';
	strHtml += '<p>';
	strHtml += '<div id="zdItemList" style="height: 580px; width: 300px; overflow: scroll; ">';
	if(arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][0]){
		strHtml += '<p>';
		strHtml += '<p style="font-weight: bold; text-align: left;">&nbsp&nbsp&nbspZOOMATE REQUESTS :</p>';
		strHtml += '<p>';
		for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["mates"].length;i++){
			zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["requestId"];
			zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["giftId"];
			zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["mates"][i]["friendId"];
			strHtml += '<style="float: left;"><img src="https://graph.facebook.com/'+zdfriendId+'/picture" width="30" style="float: left;"/>Zoomate Request from '+zdGetName(zdfriendId)+'  <br><a href="javascript:zdAcceptGift('+zdrequestId+','+zdgiftId+','+zdfriendId+');zdShareWelcomeBasket();">Accept</a>&nbsp/&nbsp<a href="javascript:zdIgnoreGift('+zdrequestId+','+zdgiftId+','+zdfriendId+');">Ignore</a><br><br>';
		}
	}
	if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][0]){
		strHtml += '<p>';
		strHtml += '<p style="font-weight: bold; text-align: left;">&nbsp&nbsp&nbspGIFTS :</p>';
		strHtml += '<p>';
		strHtml += '<form name="selected" action="" method="post">';
		for(g=arrGiftData2.length-1;g>=0;g--){
			if(arrGiftData2[g]){
				zdrequestId = 0;
				zdgiftId = g;
				zdfriendId = arrGiftData2[g];
				if(arrSelectedGifts && arrSelectedGifts!='everything'){
					var arrSelectedGifts2 =arrSelectedGifts.toString();
					var pattern = ","+zdgiftId+",";
					if(arrSelectedGifts2.match(pattern)){
						strHtml += '<p><style="float: left;"><img src="' + zdGetNewImgPath( zdgiftId, 'smallImg' ) + '" width="50" style="float: left;" onClick="checkOne(checkbox' + zdgiftId + ');"/><input id="checkbox' + zdgiftId + '" type="checkbox" name="giftList" onClick="CheckGift();" value="' + zdgiftId + '" checked="checked" style="float: left;">'+arrGiftData2[g].length+' x ';
						var repeat = true;
					}else{
						strHtml += '<p><style="float: left;"><img src="' + zdGetNewImgPath( zdgiftId, 'smallImg' ) + '" width="50" style="float: left;" onClick="checkOne(checkbox' + zdgiftId + ');"/><input id="checkbox' + zdgiftId + '"  type="checkbox" name="giftList" onClick="CheckGift();" value="' + zdgiftId + '"  style="float: left;">'+arrGiftData2[g].length+' x ';
					}
				}else{
					strHtml += '<p><style="float: left;"><img src="' + zdGetNewImgPath( zdgiftId, 'smallImg' ) + '" width="50" style="float: left;" onClick="checkOne(checkbox' + zdgiftId + ');"/><input id="checkbox' + zdgiftId + '"  type="checkbox" name="giftList" onClick="CheckGift();" value="' + zdgiftId + '"  style="float: left;">'+arrGiftData2[g].length+' x ';
					var repeat = false;
				}
				if(zdZooItems[zdgiftId]){
					strHtml += '"'+zdZooItems[zdgiftId]['name']+'" <br>' ;
				}else{
					strHtml += '<span style="font-weight: bold; color: #F00;">"Item #'+zdgiftId+'" </span><br><a href="'+zdZooItemJsUrl+'" style="font-weight: bold; color: #F00;" target="_blank">"Update your items list"</a><br>' ;
				}
				strHtml += '<a href="javascript:zdAcceptGiftsbyId('+zdrequestId+','+zdgiftId+',1,1);">Accept&Ret</a>&nbsp/&nbsp<a href="javascript:zdAcceptGiftsbyId('+zdrequestId+','+zdgiftId+',0,1);">Accept</a>&nbsp/&nbsp<a href="javascript:zdIgnoreGiftsbyId('+zdrequestId+','+zdgiftId+',false,1);">Ignore</a>&nbsp/&nbsp<a href="javascript:zdIgnoreGiftsbyId('+zdrequestId+','+zdgiftId+',true,1);">Ignore&Ret</a><br>';
				strHtml += '<span id="gift'+zdgiftId+'" style="font-weight: bold; color: #336600;">';
				if((!arrShopIds.has(zdgiftId) && !zdZooAdoptItems[zdgiftId]) || (zdZooItems[zdgiftId] && zdZooItems[zdgiftId]['rarity']=='ultraRare')){
					strHtml += 'RARE ';
				}
				if( zdZooAdoptItems[zdgiftId]  ){
					strHtml += 'Adopt ';
				}
				if(arrItemQty[zdgiftId]){
					strHtml += 'Qty:'+arrItemQty[zdgiftId]+' ';
				}
				if(arrBreedData["success"]){
					for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
						if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]===zdgiftId){
							strHtml += '<img alt="" src="'+zdHomePageUrl+'img/breediconcash.png" width="15" height="15"  "/> ';
							break;
						}
					}
				}
				strHtml += '</span>';
				strHtml += '<a href="javascript:zdGetSenderNames('+g+')">From</a><br>' ;
				if(4 >arrGiftData2[g].length){
					for(n=0;n<arrGiftData2[g].length;n++){
						strHtml += '<style="float: center;"><a href="http://www.facebook.com/profile.php?id='+arrGiftData2[g][n]+'" target="_blank"><img src="http://graph.facebook.com/'+arrGiftData2[g][n]+'/picture" width="20" /></a>' ;
					}
				}else{
					for(n=0;n<4;n++){
						strHtml += '<style="float: center;"><a href="http://www.facebook.com/profile.php?id='+arrGiftData2[g][n]+'" target="_blank"><img src="http://graph.facebook.com/'+arrGiftData2[g][n]+'/picture" width="20" /></a>' ;
					}
					strHtml += '...</p>';
				}
			}
		}strHtml += '</form>';
		if(arrSelectedGifts && arrSelectedGifts=='everything' && arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length>0){
			setTimeout('zdAcceptAndReturnEverything();',1000);
		}else if(repeat == true){
			setTimeout('CheckGift('+action+');',1000);
		}else{
			zdLogStatus('Ready'); 
		}
	}else{
		zdLogStatus('No Gifts'); 
	}
	strHtml += '</div>';
	zdFlyout(strHtml,'Gifting Center');
	return;
}

function CheckGift(action) {
	var arrSelectedGifts=[];
	var gifts = document.selected.giftList.length;
	arrSelectedGifts.push('start') ;
	for (i=0;i<gifts;i++) {
		if(document.selected.giftList[i].checked) {
			arrSelectedGifts.push(document.selected.giftList[i].value) ;
		}
	}
	arrSelectedGifts.push('end') ;
	if(action ==2){
		for (j=1;j<arrSelectedGifts.length-1;j++){
			if(j==arrSelectedGifts.length-2){
				zdAcceptGiftsbyId(0,arrSelectedGifts[j],1,1,arrSelectedGifts);//refresh flyout
			}else{
				zdAcceptGiftsbyId(0,arrSelectedGifts[j],1);
			}
		}
	}
	if(action ==1){
		for (j=1;j<arrSelectedGifts.length-1;j++){
			if(j==arrSelectedGifts.length-2){
				zdAcceptGiftsbyId(0,arrSelectedGifts[j],0,1,arrSelectedGifts);//refresh flyout
			}else{
				zdAcceptGiftsbyId(0,arrSelectedGifts[j],0);
			}
		}
	}
	if(action ==0){
		for (j=1;j<arrSelectedGifts.length-1;j++){
			if(j==arrSelectedGifts.length-2){
				zdIgnoreGiftsbyId(0,arrSelectedGifts[j],false,1,arrSelectedGifts);//refresh flyout
			}else{
				zdIgnoreGiftsbyId(0,arrSelectedGifts[j],false);
			}
		}
	}
	if(action ==3){
		for (j=1;j<arrSelectedGifts.length-1;j++){
			if(j==arrSelectedGifts.length-2){
				zdIgnoreGiftsbyId(0,arrSelectedGifts[j],true,1,arrSelectedGifts);//refresh flyout
			}else{
				zdIgnoreGiftsbyId(0,arrSelectedGifts[j],true);
			}
		}
	}
}

function zdAcceptAndReturnEverything(){
	for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
		zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
		zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
		zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
		if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){
			zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,1,1,'everything');
		}else{
			zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,1);
		}
	}
}

function zdLoadGiftsWithoutFlyout(action) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "getRequests";
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				arrGiftData = eval( '('+transport.responseText+')' );
				arrGiftData2 = [];
				for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
					if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"] ){
						var itemId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						var friendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData2[itemId]){
								arrGiftData2[itemId].push(friendId);
						}else{
							arrGiftData2[itemId]=[];
							arrGiftData2[itemId].push(friendId);
						}
					}
				}
				if(action==0){//accept only
					for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
						zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
						zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId);zdLoadGiftsWithoutFlyout(action);
						}else{
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId);
						}
					}
				}
				if(action==1){//accept and return
					for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
						zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
						zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,1);
							zdLoadGiftsWithoutFlyout(action);
						}else{
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,1);
						}
					}
				}
				if(action==2){//ignore
					for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
						zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
						zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,false);zdLoadGiftsWithoutFlyout(action);
						}else{
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,false);
						}
					}
				}
				if(action==3){//ignore&Ret
					for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
						zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
						zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,true);
							zdLoadGiftsWithoutFlyout(action);
						}else{
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,true);
						}
					}
				}
			}
		}
	); 
}

function zdChangeGiftsButtons(){
	var zdGiftsButtonsHtml = document.getElementById("zdGiftsActions").innerHTML;
	if(zdGiftsButtonsHtml.toString()=='<input type="button" id="button23" onclick="zdChangeGiftsButtons();" value="Everything Gift Actions" style="float: left;"> <input type="button" id="button23" onclick="zdLoadGiftingCenterFlyout();" value="Show all your gifts" style="float: right;">'){
		document.getElementById("zdGiftsActions").innerHTML='<input type="button" id="button23" onClick="zdChangeGiftsButtons();" value="back" style="float: right;" /><input type="button" id="button23" onClick="zdLoadGiftsWithoutFlyout(1);" value="Acc/Ret everything" style="float: left;" /><input type="button" id="button23" onClick="zdLoadGiftsWithoutFlyout(0);" value="Accept everything" style="float: left;" /><input type="button" id="button23" onClick="zdLoadGiftsWithoutFlyout(2);" value="Ignore everything" style="float: left;" /><input type="button" id="button23" onClick="zdLoadGiftsWithoutFlyout(3);" value="Ign/Ret everything" style="float: left;" />';
	}else{
		document.getElementById("zdGiftsActions").innerHTML='<input type="button" id="button23" onclick="zdChangeGiftsButtons();" value="Everything Gift Actions" style="float: left;"> <input type="button" id="button23" onclick="zdLoadGiftingCenterFlyout();" value="Show all your gifts" style="float: right;">';
	}
}

var arrGiftData = [];
var arrGiftData2 = [];
function zdLoadGiftingCenterFlyout(arrSelectedGifts,action) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "getRequests";
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				arrGiftData = eval( '('+transport.responseText+')' );
				arrGiftData2 = [];
				for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
					if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"] ){
						var itemId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						var friendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrGiftData2[itemId]){
							arrGiftData2[itemId].push(friendId);
						}else{
							arrGiftData2[itemId]=[];
							arrGiftData2[itemId].push(friendId);
						}
					}
				}
				if(arrSelectedGifts=='everything'){
					zdGiftinCenterFlyout(arrSelectedGifts);
				}else if(arrSelectedGifts && (action || action == 0)){
					zdGiftinCenterFlyout(arrSelectedGifts,action);
				}else{
					zdGiftinCenterFlyout();
				}
			}
		}
	); 
}

function russianroulette(){
	var chamber = 1+Math.floor(Math.random()*6);
	zdLogStatus('Round loaded in '+chamber);
	alert('One round loaded!\nSpin the cylinder?');
	var cyl = 1+Math.floor(Math.random()*6);
	zdLogStatus('Landed on '+cyl);
	for(i=0;i<6;i++){
		cyl++;
		if(cyl>6){
			cyl=1;
		}
		zdLogStatus('Firing cylinder '+cyl);
		var trigger = confirm('Pull the trigger?');
		if(trigger){
			if(cyl==chamber){
				alert('BANG!');
				break;
			}else{
				alert('click...');
			}
		}else{
			alert(PageData.player.name+' chickened out!');
			break;
		}
	}
}

function spinbottle(){
	var bottleFriends=[];
	var strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	var arrRawFriendList = eval( '('+strFriends+')' );
	var sex = confirm('Include Same Sex?');
	if(!sex){
		var mysex = PageData.player.sex;
		for(i=0;i<arrRawFriendList['return_data'].length;i++){
			if(arrRawFriendList['return_data'][i]['sex']!=mysex){
				bottleFriends.push(arrRawFriendList["return_data"][i]["name"]);
			}
		}
		zdLogStatus('Playing spin the bottle with ' + bottleFriends.length + ' friends who are not '+mysex+'...');
		alert('Spin the bottle!');
		var kiss = Math.floor(Math.random()*bottleFriends.length);
		zdLogStatus(PageData.player.name+' has to kiss '+bottleFriends[kiss]+'!');
	}else{
		zdLogStatus('Playing spin the bottle with ' + arrRawFriendList['return_data'].length + ' friends...');
		alert('Spin the bottle!');
		var kiss = Math.floor(Math.random()*arrRawFriendList['return_data'].length);
		zdLogStatus(PageData.player.name+' has to kiss '+arrRawFriendList["return_data"][kiss]["name"]+'!');
	}
}

function zdSharePlantingTable(){
	var arrParameters = zdGetGenericParameters();
	arrParameters["type"] = 'claimQuery';
	arrParameters["owner_name"] = PageData.player.name;
	arrParameters["userId"] = zdUserId;
	arrParameters["zooOwnerId"] = zdUserId;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var claim = eval( '('+transport.responseText+')' );
				var zdclaimQuery = claim["return_data"]["claimQuery"];
				shareBuildable({itemName:'Table',img:'75_plantTable.gif',claimQuery:zdclaimQuery});
			}
		}
	);
}

function zdShareWelcomeBasket(){
	var timestamp = (new Date()).getTime();
	var imageUrl = ZOO_IMG_PATH + "dialogs/welcomeBaskets/basket_130.png";
	var storyTitle = PageData.player.name + " needs help welcoming a new ZooMate";
	var actionUrl = PageData.app.url + "zoo/acceptGift.php?acceptBasket&friend="+zdUserId+"&order=1&basketTS="+timestamp+"&_ryfbe=fb-zoo-newZooMate-feed-celebrate-clicked";
	var storyBody = "In celebration, "+ PageData.player.name + " wants you to share the love. Everyone who helps gets a basket too.";
	var attachment = {"name": storyTitle,
	"href":actionUrl,
	"description":storyBody,
	"media":[{"type":"image","src": imageUrl,"href":actionUrl}]
	};
	var action_links = [{"text":"Claim and Share", "href":actionUrl}];
	FBPUBLISH.promptUser(attachment, action_links, null);
}

function zdSortedFriendList(){
	var arrSortedFriends = [];
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		var strHtml = '';
		// title
		strHtml += '<h2>&nbsp;Sorted Friends</h2>';
		strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
		if(zdArrFriendList['success']){
			var num = 0;
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				if(zdArrFriendList['return_data'][f] != null) {
					arrSortedFriends.push(zdArrFriendList['return_data'][f]['name']);
					num++;
				}
			}
			arrSortedFriends.sort();
			strHtml += '<p>';
			for(f=0;f<arrSortedFriends.length;f++){
				strHtml += arrSortedFriends[f];
				strHtml += '<br>';
			}
			strHtml += '</p><br>';
			zdLogStatus('Found '+num+' Friends');
		}
		strHtml += '</div>';
		zdFlyout(strHtml,'Sorted Friend List');
	}
}

function timeTill(epochDate){
	epochDate = parseInt(epochDate);
	var now = Math.round(new Date().getTime()/1000.0);
	var t = parseInt(epochDate-now);
	var days = parseInt(t/86400);
	t = t-(days*86400);
	var hours = parseInt(t/3600);
	t = t-(hours*3600);
	var minutes = parseInt(t/60);
	t = t-(minutes*60);
	var content = "";
	if(days)content+=days+" days";
	if(hours||days){ if(content)content+=", "; content+=hours+" hrs"; }
	if(content)content+=", "; content+=minutes+" mins and "+t+" secs.";
	return content;
} 

function zdSendFreeGiftFlyout(){
	var strHtml = '';
	strHtml += '<h2>&nbspSend Free Gifts</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdItemList" style=" width: 300px; ">';
	strHtml += '<p style="font-weight: bold; text-align: left;">&nbsp&nbsp&nbspTO ALL ZOOMATES :</p>';
	for (c=0;c<arrFreeGift2.length;c++){
		var itemId = arrFreeGift2[c];
		strHtml += '&nbsp';
		strHtml += '<a href="javascript:zdSendGiftToAllZoomates('+itemId+');"><img alt="" src="'+zdGetNewImgPath( itemId, 'smallImg' )+'"  title="Send to all Zoomates" width="50"/></a>';
		strHtml += '&nbsp';
	};
	strHtml += '<p style="font-weight: bold; text-align: left;">&nbsp&nbsp&nbspTO ALL FRIENDS :</p>';
	for (c=0;c<arrFreeGift2.length;c++){
		var itemId = arrFreeGift2[c];
		strHtml += '&nbsp';
		strHtml += '<a href="javascript:zdSendGiftToAllFriends('+itemId+');"><img alt="" src="'+zdGetNewImgPath( itemId, 'smallImg' )+'"  title="Send to all Friends" width="50"/></a>';
		strHtml += '&nbsp';
	};
	strHtml += '</div>';
	zdFlyout(strHtml,'Send Gift To All Friends');
	return;
}


function zdBreedStatsFlyout(){
	var strHtml = '';
	strHtml += '<h2>&nbspBreeding Stats</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdItemList" style=" width: 300px; height: 500px; ">';
	strHtml += '<p style=" text-align: center;">Warning !<br>This list contains only species you CAN breed to earn trophies and WLP (no ultra rare animals)</p>';
	var arrBreedingTime = [30,48,72,90,96,144,192,240,276,288,432,572,576,864,1152,1196,1440]
	for(t=0;t<arrBreedingTime.length;t++){
		strHtml += '<h3 style="font-weight: bold; text-align: center;">~~~~~~ '+arrBreedingTime[t]/12+'hr ~~~~~~</h3>';
		for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
			if( arrBreedData["return_data"]["availableBreedableAnimals"][b]["points"]==null){
				var i = arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"] ;
				var itemGest = zdZooItems[i]['gestation'];
				if(itemGest == arrBreedingTime[t]){
					var zdbred = arrBreedData["return_data"]["availableBreedableAnimals"][b]["bredCount"];
					for(m=0;m<101;m++){
						if(0 < itemGest && itemGest <= 48){ var g = 48;}else if(48 < itemGest && itemGest <= 96){ var g = 96;}else if(96 < itemGest && itemGest <= 144){ var g = 144;}else if(144 < itemGest && itemGest <= 288){ var g = 288;}else if(288 < itemGest && itemGest <= 576){ var g = 576;}else if(576 < itemGest && itemGest <= 864){ var g = 864;}else if(864 < itemGest && itemGest <= 1152){ var g = 1152;}else if(1152 < itemGest && itemGest <= 1440){ var g = 1440;}
						if(arrBreedData["return_data"]["masteryValues"][g][m]){
							if(m>zdbred){ 
								var mastdiff = m-zdbred;
								var trophy = arrBreedData["return_data"]["masteryValues"][g][m]['rankName'];
								var reward = arrBreedData["return_data"]["masteryValues"][g][m]['reward'];
								break;
							}
						}
					}
					if(arrItemQty[i]>=(mastdiff*2)){
						var Bpoints = (itemGest*mastdiff/12);
					}else{
						var Bpoints = (itemGest*mastdiff/12)*2;
					}
					if( zdZooItems[i]['rarity'] != 'ultraRare' ){
						if(mastdiff!=0 && mastdiff && m != 101){
							strHtml += '&nbsp';
							if(Bpoints <= 120){
								strHtml += '<p><img src="' + zdGetNewImgPath( i, 'smallImg' ) + '" width="50" style="float: left;"/><img alt="" src="'+zdHomePageUrl+'img/idee.png" width="25"style="float: left;/><style="text-align: left;">#'+i+', '+zdZooItems[i]['name']+', <br>Qty='+arrItemQty[i]+', Btime='+itemGest/12+', Bcount='+zdbred+',<br> '+mastdiff+' needed to earn '+reward+' wlp for '+trophy+', <br><a href="javascript:zdbreed.addBreeding('+i+',0);">Breed</a> / <a href="javascript:zdbreed.addBreeding('+i+',2);">BreedBoost (uses 50 juice)</a></p>';
							}else{
								strHtml += '<p><img src="' + zdGetNewImgPath( i, 'smallImg' ) + '" width="50" style="float: left;"/><style="text-align: left;">#'+i+', '+zdZooItems[i]['name']+', <br>Qty='+arrItemQty[i]+', Btime='+itemGest/12+', Bcount='+zdbred+',<br> '+mastdiff+' needed to earn '+reward+' wlp for '+trophy+', <br><a href="javascript:zdbreed.addBreeding('+i+',0);">Breed</a> / <a href="javascript:zdbreed.addBreeding('+i+',2);">BreedBoost (uses 50 juice)</a></p>';
							}
						}
					}
				}
			}
		}
		strHtml += '<p><style="text-align: left;">No more species available to earn WLP</p>';
		strHtml += '<p>  &nbsp </p>';
	}
	strHtml += '</div>';
	zdFlyout(strHtml,'Breed Stats');
	return;
}

var zdFriendName = 0;
function zdShowName(friendId){
	$.ajax({
		url: zdprotocol+'graph.facebook.com/'+friendId+'?fields=name',
		dataType: 'json',
		async: false,
		success: function(response) {
			zdLogStatus(response.name);
		}
	});
}

function zdGetName(friendId){
	zdFriendName = 0;
	zdGetFBName(friendId);
	if(zdFriendName){
		return zdFriendName;
	}else{
		return 'None';
	}
}

function zdGetFBName(friendId){
	$.ajax({
		url: zdprotocol+'graph.facebook.com/'+friendId+'?fields=name',
		dataType: 'json',
		async: false,
		success: function(response) {
			//	zdLogStatus(response.name);
			zdFriendName = response.name;
		}
	});
};

function zdGetSenderNames(g){
	if(zdArrFriendList == null){
		// get friend list
		var strFriends = zdGetFriends();
		if(strFriends.length < 10){
			zdAjaxFriendService();
			strFriends = zdGetFriends();
		}
		zdArrFriendList = eval( '('+strFriends+')' );
	}
	if(zdArrFriendList != null){
		for (n=0;n<arrGiftData2[g].length;n++){
			for(f=0;f<zdArrFriendList['return_data'].length;f++){
				var zdFriendId = arrGiftData2[g][n];
				if(zdFriendId == zdArrFriendList['return_data'][f]['uid'] ){
					var zdFriendName = zdArrFriendList['return_data'][f]['name'] ;
					zdLogStatus(''+(n+1)+' - '+zdZooItems[g]['name']+' from '+zdFriendName+'');
				}
			}
		}
	}
}

function zdSendGiftToListOfIdsFlyout(giftId,giftListId) {
	var strHtml = '';
	strHtml += '<h2>&nbspSend a gift to a list of IDs</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdShopPreviewBody" style=" width: 300px;  ">';
	strHtml += '<p style=" ">Put the Item Id (be sure it\'s a giftable) then put a list of playerIds (separated by comma, no space or other character) <br></p>';
	if(giftId){
		strHtml += '<br />GiftId : <input type="text" value="'+giftId+'" name="zdGiftToListId" id="zdGiftToListId" /> ';
	}else{
		strHtml += '<br />GiftId : <input type="text" value="" name="zdGiftToListId" id="zdGiftToListId" /> ';
	}
	//		strHtml += '<br />to PlayersId(s): <input type="text" value="" name="zdSendGiftListId" id="zdSendGiftListId" style="overflow: scroll;   "/>  ';
	strHtml += '<p>';
	strHtml += '<br /><tr><td>List of PlayersId(s): </td></p>  ' ;
	strHtml += '<p style=" ">NEW You can put Ids OR usernames OR profile urls OR a mix of them (separated by comma, no space) then click \"Convert to list of Ids\", wait a few seconds your list show only Ids. This function works differently depending on your connection and how long your list is. <a href="javascript:zdToAllFriendsIds();">Show all friends Ids </a> / <a href="javascript:zdToAllZoomatesIds();">Show all zoomates Ids </a><br></p>';
	if(giftListId){
		strHtml += '<br /><td><textarea id="zdSendGiftListId" name="zdSendGiftListId"   style="width: 280px; height: 100px;">'+giftListId+'</textarea></td>'
	}else{
		strHtml += '<br /><td><textarea id="zdSendGiftListId" name="zdSendGiftListId"   style="width: 280px; height: 100px;"></textarea></td>'
	}
	strHtml += ' <p><input type="button" class="button23" value="Send to list" onclick="zdSendGiftToListOfIds();" /> <input type="button" class="button23" value="Convert list" onclick="zdTranslateToIds();" /><input type="button" class="button23" value="Get Names" onClick="zdstartNameProcess();" /><input type="button" class="button23" value="Visit List" onclick="zdVisitListOfIds();" /></p> ';
	strHtml += '</div>';
	zdFlyout(strHtml,'Send To List');
	return;
}

function zdSendGiftToListOfIds(){
	var giftCount = 0;
	var tempList= document.getElementById("zdSendGiftListId").value;
	if(tempList[tempList.length-1] == ','){
		tempList=tempList.substring(0,tempList.length-1);
	}
	var friendId = tempList.split(",");
	var giftId = document.getElementById("zdGiftToListId").value;
	zdLogStatus('Found '+friendId.length+' friendId(s)...');
	for(f=0;f<friendId.length;f++){
		if(isNaN(friendId[f])){
			var toFriendId = friendId[f].replace(/http\:\/\/www.facebook.com\/profile.php\?id\=/g,"").replace(/http\:\/\/www.facebook.com\//g,"");
			$.ajax({
				url: zdprotocol+'graph.facebook.com/'+toFriendId+'?fields=id',
				dataType: 'json',
				async: false,
				success: function(response) {
					toFriendId =response.id;
				}
			});
		}else{
			var toFriendId = friendId[f];
		}
		giftCount++;
		zdWorkQueuePush('zdSendGift('+giftId+','+toFriendId+','+giftCount+')');
	}
	zdWorkQueueStart();
	return;
}

function zdTranslateToIds(){
		var friendId = (document.getElementById("zdSendGiftListId").value).split(",");
		var giftId = document.getElementById("zdGiftToListId").value;
		var giftListId = [];
		zdLogStatus('Found '+friendId.length+' friendId(s)...');
		for(f=0;f<friendId.length;f++){
			if(isNaN(friendId[f])){
				var toFriendId = friendId[f].replace(/http\:\/\/www.facebook.com\/profile.php\?id\=/g,"").replace(/http\:\/\/www.facebook.com\//g,"").replace(/https\:\/\/www.facebook.com\/profile.php\?id\=/g,"").replace(/https\:\/\/www.facebook.com\//g,"").replace(/&.*/g,"");
			$.ajax({
				url: zdprotocol+'graph.facebook.com/'+toFriendId+'?fields=id',
				dataType: 'json',
				async: false,
				success: function(response) {
					giftListId.push(response.id);
				}
			});
		}else{
			giftListId.push(friendId[f]);
		}
	}
	zdSendGiftToListOfIdsFlyout(giftId,giftListId);
}

function zdToAllFriendsIds(){
		var strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	var friendId = eval( '('+strFriends+')' );
	var giftId = document.getElementById("zdGiftToListId").value;
	var giftListId = [];
	zdLogStatus('Found '+friendId['return_data'].length+' friendId(s)...');
	for(f=0;f<friendId['return_data'].length;f++){
		if(friendId["return_data"][f]["uid"] != zd_fb_sig_user){
			giftListId.push(friendId["return_data"][f]["uid"]);
		}
	}
	zdSendGiftToListOfIdsFlyout(giftId,giftListId);
}

function zdToAllZoomatesIds(){
	var strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	var friendId = eval( '('+strFriends+')' );
	var giftId = document.getElementById("zdGiftToListId").value;
	var giftListId = [];
	zdLogStatus('Found '+friendId['return_data'].length+' friendId(s)...');
	for(f=0;f<friendId['return_data'].length;f++){
		if(friendId["return_data"][f]["uid"] != zd_fb_sig_user && friendId['return_data'][f]["is_zoomate"] ){
			giftListId.push(friendId["return_data"][f]["uid"]);
		}
	}
	zdSendGiftToListOfIdsFlyout(giftId,giftListId);
}

function zdRemoveGHTreesOnIsland(islandId, treeId) {
	if(islandId==0) {
		islandNum = Number(prompt("Enter Island Number", 1));
	}else{
		islandNum = islandId+1;
	}
	if(treeId==0) {
		treeId = prompt("Enter Tree Id", 214);
	}
	zdLogStatus('Loading island '+(islandNum)+' for '+zd_fb_sig_user+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zd_fb_sig_user;
	arrParameters["islandId"] = islandNum-1;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var strTransformed = zdTransformIsland( zdGetResponse() );
				var zdMoveItemData = eval( '('+strTransformed+')' );
				for(i=0;i<zdMoveItemData["return_data"].length;i++){
					if((zdMoveItemData["return_data"][i][0] >= 556) && (zdMoveItemData["return_data"][i][0] <= 558)){
						// only green houses
						var strToQueue = 'zdGetGreenHouseInfo('+zdMoveItemData["return_data"][i][0]+', '+zdMoveItemData["return_data"][i][1]+', '+treeId+')';
						zdWorkQueuePush( strToQueue );
					}
				}
				zdWorkQueueStart();
			}
		}
	);
}

function zdGetGreenHouseInfo(ghItemId, ghObjectId, treeId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["category"] = "greenhouse";
	arrParameters["page"] = 1;
	arrParameters["containerTypeId"] = ghItemId;
	arrParameters["containerId"] = ghObjectId;
	arrParameters["type"] = "getGHInfo_built";
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdGHCountResponseData = eval( '('+transport.responseText+')' );
				var intTreeCount = zdGHCountResponseData["return_data"]["treeCount"];
				var intCapacity = zdGHCountResponseData["return_data"]["capacity"];
				zdLogStatus('Greenhouse '+ghObjectId+' has '+intTreeCount+' trees...');
				if(intTreeCount > 0){
					for(i=0;i<intTreeCount;i++){
						zdWorkQueuePush( 'zdEmptyGreenHouseItem('+ghItemId+', '+ghObjectId+', '+treeId+', '+intTreeCount+');' );
					}
				}
			}
		}
	);
}

function zdEmptyGreenHouseItem(ghItemId, ghObjectId, treeId) {
	var arrParameters = zdGetGenericParameters();
	arrParameters["containerTypeId"] = ghItemId; //558, silver 557, bronze 556 
	arrParameters["containerId"] = ghObjectId; //Greenhouse container ID - get from status after shaking the island the greenhouse is on.
	arrParameters["typeId"] = treeId; //Item id to remove
	arrParameters["type"] = "moveOut";
	arrParameters["zooOwnerId"] = zd_fb_sig_user;
	new Ajax.Request(
		zdBuildablesServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdLoadResponseData = eval( '('+transport.responseText+')' );
				if(zdLoadResponseData["return_data"]["success"]==true){
					zdLogStatus('Moved tree from '+ghObjectId);
				}else{
					zdLogStatus('Not moved from '+ghObjectId);
				}
			},
		}
	); 
}

function zdShowNewItems(showAll) {
	var zdImgUrl = "http://cdn.rockyou.com/apps/zoo/item/largeImg/";
	var zdImgBabyUrl = "http://cdn.rockyou.com/apps/zoo/item/babyLargeImg/";
	var strHtml = '';
	// title
	strHtml += '<h2>New Items:</h2>';
	strHtml += '<div id="zdShopPreviewBody" style="height: 500px; overflow: scroll;">';
	strHtml += '<div id="result">Searching...</div>';
	//New Items
	var itemNums = [];
	for(key in zdZooItems){
		itemNums.push(key);
	}
	itemNums.sort(function(a,b){return a-b});
	var lastItem = itemNums[itemNums.length-2];
	var start=Number(prompt('New Items Number FROM',lastItem));
	var stop=Number(prompt('New Items Number END',start+100));
	if(showAll) {
		for(i=start;i<=stop;i++) {
			if( i < stop){
				strHtml+='<div id="src'+i+'"><a href="'+zdImgUrl+i+'.gif" download="'+i+'.gif"><img src="'+zdImgUrl+i+'.gif" width="120px" height="120px" title="'+i+'" onerror="document.getElementById(\'src'+i+'\').parentNode.removeChild(document.getElementById(\'src'+i+'\'))"></a><img src="'+zdImgBabyUrl+i+'.gif" width="50px" height="50px" onerror="this.style.display=\'none\'"></div>';
			}
			if( i == stop){
				strHtml+='<div id="src'+i+'"><a href="'+zdImgUrl+i+'.gif" download="'+i+'.gif"><img src="'+zdImgUrl+i+'.gif" width="120px" height="120px" title="'+i+'" onload="setTimeout(\'zdDisplayNoResult('+start+','+stop+');\',100);" onerror="document.getElementById(\'src'+i+'\').parentNode.removeChild(document.getElementById(\'src'+i+'\'));setTimeout(\'zdDisplayNoResult('+start+','+stop+');\',100);"></a><img src="'+zdImgBabyUrl+i+'.gif" width="50px" height="50px" onerror="this.style.display=\'none\'"></div>';
			}
		}
	}else{
		for(i=start;i<=stop;i++) {
			if(!zdZooItems[i]){
				if( i < stop){
					strHtml+='<div id="src'+i+'"><a href="'+zdImgUrl+i+'.gif" download="'+i+'.gif"><img src="'+zdImgUrl+i+'.gif" width="120px" height="120px" title="'+i+'" onerror="document.getElementById(\'src'+i+'\').parentNode.removeChild(document.getElementById(\'src'+i+'\'))"></a><img src="'+zdImgBabyUrl+i+'.gif" width="50px" height="50px" onerror="this.style.display=\'none\'"></div>';
				}
				if( i == stop){
					strHtml+='<div id="src'+i+'"><a href="'+zdImgUrl+i+'.gif" download="'+i+'.gif"><img src="'+zdImgUrl+i+'.gif" width="120px" height="120px" title="'+i+'" onload="setTimeout(\'zdDisplayNoResult('+start+','+stop+');\',100);" onerror="document.getElementById(\'src'+i+'\').parentNode.removeChild(document.getElementById(\'src'+i+'\'));setTimeout(\'zdDisplayNoResult('+start+','+stop+');\',100);"></a><img src="'+zdImgBabyUrl+i+'.gif" width="50px" height="50px" onerror="this.style.display=\'none\'"></div>';
				}
			}
		}
	}
	strHtml += '</div>';
	zdFlyout(strHtml,'New Items');
}

function zdDisplayNoResult(start,stop){
	if(document.getElementById('zdShopPreviewBody').innerHTML.length == 35){
		document.getElementById('result').innerHTML = 'No items found from '+start+' to '+stop;
	}else{
		var countPic = 0;
		var zdImgUrl = "http://cdn.rockyou.com/apps/zoo/item/largeImg/";
		var urlList = '';
		var childPic = document.getElementById('zdShopPreviewBody').childNodes;
		for (i=1;i<childPic.length;i++){
			countPic++;
			urlList += zdImgUrl+childPic[i].id.replace('src','')+'.gif<br />';
		}
		document.getElementById('result').innerHTML = countPic+' item(s) found from '+start+' to '+stop+'. Click a pic to download. <br /> List of Urls : '+urlList+'<br />';
	}
}  
/*
function zdShakeyMyIslands(){
	for(i=0;i<zdIslands;i++){
	if(zdAjaxCallDelay < 6000) {
	zdSetAjaxDelay(6000);
	}
	zdWorkQueuePush( 'zdShakeyService('+i+');' );
	}
	zdWorkQueueStart();
	return;
}
*/

function zdCollectMoneyLinksFlyout(){
	var strHtml = '';
	strHtml += '<h2>&nbspCollect links</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdShopPreviewBody" style=" width: 300px;  ">';
	strHtml += '<p style=" ">Paste links from friends notes. Links must be in text format! <br></p>';
	strHtml += '<p>';
	strHtml += '<br /><tr><td>Links: </td></p>  ' ;
	strHtml += '<br /><td><textarea id="zdLinksToCollect" name="zdLinksToCollect" style="width: 280px; height: 100px;"></textarea></td>'
	strHtml += ' <p><input type="button" id="button58" value="Collect" onClick="zdCollectMoneyLinks();" /></p> ';
	strHtml += '</div>';
	zdFlyout(strHtml,'Collect Links');
	return;
}

function zdCollectMoneyLinks(){
	var arrParam = [];
	var linkCount = 0;
	var links = (document.getElementById("zdLinksToCollect").value);
	var links = links.replace(/&amp;/g,"&");
	if(links.length > 0) {
		var matches = links.match(/(http|https|ftp)\:\/\/.*/gi);
		if(matches != null) {
			if(matches.length == 1){
				linkCount = 1;
			}else{
				linkCount = matches.length;
			}
			for (var i = 0; i < matches.length; i++) {
				var url = matches[i];
				arrParam[i]=[];
				var pos0 = url.indexOf('http');
				var pos1 = url.indexOf('.php', pos0)+5;
				var pos2 = url.length;
				var param = url.slice(pos1, pos2);
				arrParam[i].push(param);
			}
		} 
	}
	if(linkCount>1){
		zdLogStatus(''+linkCount+' links to collect...');
	}
	for(m=0;m<arrParam.length;m++){
		if((arrParam[m].toString().indexOf('seasonal')!=-1)|(arrParam[m].toString().indexOf('missions')!=-1)|(arrParam[m].toString().indexOf('vitamin')!=-1)){
			zdSendAcceptTicketForLink(arrParam[m],1);
		}else if((arrParam[m].toString().indexOf('roses')!=-1)|(arrParam[m].toString().indexOf('giftedAnimalId')!=-1)){
			zdSendAcceptTicketForLink(arrParam[m],2);
		}else{
			zdSendAcceptClaimForLink(arrParam[m]);
		}
	}
	return;
}

function zdSendAcceptTicketForLink(strActionUrl,statusText){
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdprotocol+''+zdIndexPHP+'acceptTicket?t=1&oauth_consumer_key=facebook.com&oauth_signature=1&vip=&version=100&rysrv=www368.rockyou.com&'+strActionUrl
		, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = eval( '('+transport.responseText+')' );
				if(content!=null){
					if(statusText==1){
						if(content["return_data"]["dialogData"]["subtitle"]!=" "){
							zdLogStatus(content["return_data"]["dialogData"]["subtitle"]);
						}else{
							zdLogStatus(content["return_data"]["dialogData"]["bodyText"]);
						}
					}else if(statusText==2){
						zdLogStatus(content["return_data"]["dialogData"]["bodyText"]);
					}
				}
				return;
			}
		}
	);
}

function zdSendAcceptClaimForLink(strActionUrl){
	var arrParameters = zdGetGenericParameters();
	new Ajax.Request(
		zdprotocol+'fbeq.rockyou.com/facebook_apps/zoo/server/index.php/AcceptClaim?t=1&oauth_consumer_key=facebook.com&oauth_signature=1&vip=&version=100&rysrv=www368.rockyou.com&'+strActionUrl
		, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = eval( '('+transport.responseText+')' );
				zdLogStatus(content["return_data"]["dialogData"]["bodyText"]);
			}
		}
	);
}

function zdGetIdTreasureService(){
	var group = prompt('Enter a number from 1 to 4 to collect per group or \"all\" to collect all','all');
	if(group == 'all'){
		for (i=0;i<idList.length;i++){
			zdWorkQueuePush('zdGetTreasureService('+idList[i]+')');
		}
		zdWorkQueueStart();
	}
	if(group == 1){
		for (i=0;i<3750;i++){
			zdGetTreasureService(idList[i]);
		}
	}
	if(group == 2){
		for (i=3750;i<7500;i++){
			zdGetTreasureService(idList[i]);
		}
	}
	if(group == 3){
		for (i=7500;i<11250;i++){
			zdGetTreasureService(idList[i]);
		}
	}
	if(group == 4){
		for (i=11250;i<idList.length;i++){
			zdGetTreasureService(idList[i]);
		}
	}
}

function zdGetIdTreasureService2(){
	var group = prompt('Enter a number from 1 to 15 to collect per group','1');
	var start = (group-1)*1000;
	for (i=start;i<(start+1000);i++){
		zdGetTreasureService(idList[i]);
	}
}

function zdGetTreasureService(zooOwnerId) { // PrizeClaimService
	var arrParameters = zdGetGenericParameters();
	arrParameters["scavengerHunt"] = 1;
	arrParameters["zooOwnerId"] = zooOwnerId;
	new Ajax.Request(
		zdPrizeClaimServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var zdPrizeResponseData = eval( '('+transport.responseText+')' );
				if(parseInt(zdPrizeResponseData["return_data"]["treasureHunt"]) > 0){
					zdLogStatus('You got: $'+zdPrizeResponseData["return_data"]["treasureHunt"]+'...');
					zdVisitZooCash += parseInt(zdPrizeResponseData["return_data"]["treasureHunt"]);
				}
				zdLogStatus('Total: $'+zdVisitZooCash+'...');
				return;
			}
		}
	); 
}

function zdZooPageRSS(){
	var strHtml = '';
// title
	strHtml += '<h2>Zooworld Facebook page :</h2>';
	strHtml += '<div id="zdShopPreviewBody" style="width:300px;height: 500px; ">';
	strHtml += '<iframe title="RSS Feed" width="300" height="490" scrolling="auto" frameborder="0" id="333391246" name="333391246" allowtransparency="true" class="igm" src="https://ag0p85pls00984bsg1fkeb3bkqkq4832-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=http://www.gstatic.com/sites-gadgets/rss-sites/rss_sites.xml&amp;container=enterprise&amp;view=home&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=c79c9df35ce482fc&amp;libs=core:setprefs:settitle&amp;mid=145&amp;up_font_family=Verdana&amp;up_items_to_show=30&amp;up_font_size=12&amp;up_display=1&amp;up_title_color=%239d4d6&amp;up_snippet=3&amp;up_txt_color=%23c1538&amp;up_rss_feed_url=https://www.facebook.com/feeds/page.php?id%3D162104552518%26format%3Drss20"></iframe>';
	strHtml += '</div>';
	zdFlyout(strHtml,'Zoo Page');
}

function zdLoadAndCheckIslands(zooOwnerId) {
	var arrResultFriends = [];
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	new Ajax.Request(
		zdLoadZooServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var arrZooFriendData = eval( '('+transport.responseText+')' );
				var zdMaxIslands = (arrZooFriendData["return_data"]["itemList"]["islandId"] + 1);
				//for 24 Islands
				zdWorkQueuePush( 'zdLoadAndListFriends(0,'+zooOwnerId+','+zdMaxIslands+');');
			}
		}
	);
	zdWorkQueueStart();
}

var arrResultFriends = [];
function zdLoadAndListFriends(islandId,zooOwnerId,zdMaxIslands) {
	arrResultFriends[islandId] = [];
	zdLogStatus(zdui.getLabel("status_island_loadingisland")+' '+(islandId+1)+' '+zdui.getLabel("status_island_for")+' '+zooOwnerId+'...');
	var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = zooOwnerId;
	arrParameters["islandId"] = islandId;
	new Ajax.Request(
		zdLoadIslandServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var result = eval( '('+zdGetResponse()+')' );
				arrResultFriends[islandId] = result["return_data"];
				if(zdMaxIslands==(islandId+1)){
					zdShowMissingList(zooOwnerId);
				}else{
					zdLoadAndListFriends(islandId+1,zooOwnerId,zdMaxIslands);
				}
			}
		}
	); 
}

function zdShowMissingList(zooOwnerId){
	var friendsName = zdGetName(zooOwnerId);
	var strHtml = '';
	strHtml += '<h2>&nbspMissing List of '+friendsName+'</h2>';
	strHtml += '<p>';
	strHtml += '<div id="zdShopPreviewBody" style=" width: 300px;height: 500px; overflow: scroll; ">';
	var strHtml1 = '<div style="border:2px #999 solid;background: #EEF;"><b>'+friendsName+' has not any of this animals (or they are hidden in storage) :</b><br>';
	var strHtml2 = '<div style="border:2px #999 solid;background: #FEE;"><b>'+friendsName+' has only one of this animals :</b><br>';
	for (i=0;i<arrLimitedGift2.length-1;i++){
		//owned 0
		var pattern1 = '":['+arrLimitedGift2[i]+',';
		if(JSON.stringify(arrResultFriends).replace(/\[\[/g,"[").indexOf(pattern1)==-1){
			strHtml1 += '<p style="display:block;height:40px"><img src="' + zdGetNewImgPath( arrLimitedGift2[i], 'smallImg' ) + '" width="50" height="50" style="float: left;"/>';
			strHtml1 += '<b>'+((zdZooItems[arrLimitedGift2[i]])?zdZooItems[arrLimitedGift2[i]].name:'unknown')+'</b>';
			strHtml1 += '&nbsp #'+arrLimitedGift2[i]+'&nbsp';
			if(arrBreedData["success"]){
				for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
					if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]===Number(arrLimitedGift2[i])){
						strHtml1 += '<a href="javascript:zdbreed.addBreeding('+arrLimitedGift2[i]+',0);"><img alt="" src="'+zdHomePageUrl+'img/breediconcash.png" width="15" height="15" title="Click to breed "/> </a>';
						break;
					}
				}
			}
			if(arrItemQty[arrLimitedGift2[i]]<=24){
					strHtml1 += '<br><b style="font-weight: bold; color: #F00;">You only own '+arrItemQty[arrLimitedGift2[i]]+'</b> ';
			}else{
					strHtml1 += '<br>You own '+arrItemQty[arrLimitedGift2[i]]+' ';
			}
			if( !zdZooAdoptItems[arrLimitedGift2[i]] && arrShopIds.has(Number(arrLimitedGift2[i])) && (arrPriceIds[(arrPriceIds.indexOf('"'+arrLimitedGift2[i]+'"')+ 4)] != '"zcash"') ){
				strHtml1 += ' '+'<a href="javascript:zdBuyLotsItem('+arrLimitedGift2[i]+');"><img alt="" src="'+zdHomePageUrl+'img/shoplotsicon.png"  width="15" height="15" title="Buy lots"/> </a>';
			}
			strHtml1 += '<br> <a href="javascript:zdSendGift('+arrLimitedGift2[i]+','+zooOwnerId+');">Send</a> ';
			if( zdZooAdoptItems[arrLimitedGift2[i]]  ){
				strHtml1 += '/ <a href="javascript:zdSpawnAdoption('+arrLimitedGift2[i]+');">Post Adopt</a> ';
			}
			strHtml1 += '</p>';
		}
//owned 1
		var pattern2 = '":['+arrLimitedGift2[i]+',1,';
		if(JSON.stringify(arrResultFriends).replace(/\[\[/g,"[").indexOf(pattern2)!=-1){
			strHtml2 += '<p style="display:block;height:40px"><img src="' + zdGetNewImgPath( arrLimitedGift2[i], 'smallImg' ) + '" width="50" height="50" style="float: left;"/>';
			strHtml2 += '<b>'+((zdZooItems[arrLimitedGift2[i]])?zdZooItems[arrLimitedGift2[i]].name:'unknown')+'</b>';
			strHtml2 += '&nbsp #'+arrLimitedGift2[i]+'&nbsp';
			if(arrBreedData["success"]){
				for(b=0;b<arrBreedData["return_data"]["availableBreedableAnimals"].length;b++){
					if(arrBreedData["return_data"]["availableBreedableAnimals"][b]["id"]===Number(arrLimitedGift2[i])){
						strHtml2 += '<a href="javascript:zdbreed.addBreeding('+arrLimitedGift2[i]+',0);"><img alt="" src="'+zdHomePageUrl+'img/breediconcash.png" width="15" height="15" title="Click to breed "/> </a>';
						break;
					}
				}
			}
			if(arrItemQty[arrLimitedGift2[i]]<=24){
				strHtml2 += '<br><b style="font-weight: bold; color: #F00;">You only own '+arrItemQty[arrLimitedGift2[i]]+'</b> ';
			}else{
				strHtml2 += '<br>You own '+arrItemQty[arrLimitedGift2[i]]+' ';
			}
			if( !zdZooAdoptItems[arrLimitedGift2[i]] && arrShopIds.has(Number(arrLimitedGift2[i])) && (arrPriceIds[(arrPriceIds.indexOf('"'+arrLimitedGift2[i]+'"')+ 4)] != '"zcash"')){
				strHtml2 += ' '+'<a href="javascript:zdBuyLotsItem('+arrLimitedGift2[i]+');"><img alt="" src="'+zdHomePageUrl+'img/shoplotsicon.png"  width="15" height="15" title="Buy lots"/> </a>';
			}
			strHtml2 += '<br> <a href="javascript:zdSendGift('+arrLimitedGift2[i]+','+zooOwnerId+');">Send</a> ';
			if( zdZooAdoptItems[arrLimitedGift2[i]]  ){
				strHtml2 += '/ <a href="javascript:zdSpawnAdoption('+arrLimitedGift2[i]+');">Post Adopt</a> ';
			}
			strHtml2 += '</p>';
			}
	}
	strHtml1 += '</div><p>';strHtml2 += '</div>';
	strHtml += strHtml1 + strHtml2;
	strHtml += '</div>';
	zdFlyout(strHtml,'Missing List');
	return;
}

function zdIgnoreFreeAnimals(){
var arrIgnoreGift = ["start",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,144,"end"];
zdLoadGiftingCenterFlyout(arrIgnoreGift,0);
}

function zdLoadGiftsReceived(friendId){
var arrParameters = zdGetGenericParameters();
	arrParameters["friendId"] = friendId;
	new Ajax.Request(
		zdLoadZooServiceUrl, 
		{
			method: 'post',
			asynchronous: false,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetZoo(transport.responseText);
				zdZooResponseData = eval( '('+transport.responseText+')' );
				zdLogStatus(friendId+'...'+zdZooResponseData["return_data"]["projects"]["giftingpromo"]["unopenedGiftsReceivedNum"]+' / '+zdZooResponseData["return_data"]["projects"]["giftingpromo"]["giftsReceivedNum"]);
			}
		}
	);
}

function zdCheckGiftsReceived(){
	var strFriends = zdGetFriends();
	if(strFriends.length < 10){
		zdAjaxFriendService();
		strFriends = zdGetFriends();
	}
	var arrRawFriendList = eval( '('+strFriends+')' );
	for(var f=0;f<arrRawFriendList['return_data'].length;f++) {
		if(arrRawFriendList['return_data'][f]["is_zoomate"]){	
			zdWorkQueuePush('zdLoadGiftsReceived('+arrRawFriendList["return_data"][f]["uid"]+')');
		}
	}
	zdWorkQueueStart();
}

function zdBuyLuckyEgg(){
	var arrParameters = zdGetGenericParameters();
	arrParameters["action"] = 'crate';
	arrParameters["typeid"] = -1;
	arrParameters["qty"] = 1;
	new Ajax.Request(
		zdShopActionServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				var content = eval( '('+transport.responseText+')' );
				zdLogStatus(content["return_data"]["crateitems"][0]["name"]);
				return;
			}
		}
	)
};

function zdBuyLotsLuckyEgg(){
	var intAmount = (prompt('number of eggs to buy', '1'));
	for(var g=0;g<intAmount;g++) {
		zdWorkQueuePush('zdBuyLuckyEgg()');
	}
	zdWorkQueueStart();
	return;
}

function openMessageFlyout(to){
	var strHtml = '';
	strHtml += '<h2>Messages:</h2>';
	var zdMessageResponseData =[];
	var zdChatMessage =[];
	var zdChatIndex = -1;
	var arrParameters = zdGetGenericParameters();
	arrParameters["cmd"] = "inbox";
	new Ajax.Request(
		zdMailServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdMessageResponseData = eval( '('+transport.responseText+')' );
				if(	zdMessageResponseData["return_data"]["messages"]){
					for (m=0;m<zdMessageResponseData["return_data"]["messages"].length;m++){
						if(	zdMessageResponseData["return_data"]["messages"][m]["type"]=="chat" && zdMessageResponseData["return_data"]["messages"][m]["fb_name"]){
							zdChatIndex++;
							zdChatMessage[zdChatIndex]=[];
							zdChatMessage[zdChatIndex]["msg"] = zdMessageResponseData["return_data"]["messages"][m]["msg"];
							zdChatMessage[zdChatIndex]["fb_name"] = zdMessageResponseData["return_data"]["messages"][m]["fb_name"];
							zdChatMessage[zdChatIndex]["msgID"] = zdMessageResponseData["return_data"]["messages"][m]["msgID"];
							zdChatMessage[zdChatIndex]["from"] = zdMessageResponseData["return_data"]["messages"][m]["from"];
							zdChatMessage[zdChatIndex]["read"] = zdMessageResponseData["return_data"]["messages"][m]["read"];
							zdChatMessage[zdChatIndex]["date"] = zdMessageResponseData["return_data"]["messages"][m]["date"];
							zdChatMessage[zdChatIndex]["fb_pic"] = zdMessageResponseData["return_data"]["messages"][m]["fb_pic"].replace('\/','/');
						}
					}
				}
				if(zdChatIndex == -1){
					strHtml += 'No messages';
				}else{
					strHtml += 'You\'ve got '+(zdChatIndex+1)+' mail(s) in your box <a href="javascript:zdDeleteAllMessages();">Delete All</a> / <a href="javascript:openMessageFlyout();">Refresh</a>';
					strHtml += '<div id="zdMessageList" style="height: 300px; width: 300px; overflow: scroll; background-color: #FFF;">';
					for(f=0;f<zdChatMessage.length;f++){
						strHtml += '<div id='+zdChatMessage[f]["msgID"]+' style="clear: both; margin: 1px; border: 2px solid #999; padding: 2px; min-height:60px;';
						if(zdChatMessage[f]["read"] == true){
							strHtml += ' background-color: #FFB9B9;';
						}else{
							strHtml += ' background-color: #99E699;';
						}
						strHtml += '"><img src="' +zdChatMessage[f]["fb_pic"];
						strHtml += '" style="float: right;"/>';	
						strHtml += zdChatMessage[f]["date"]+'<br><b>From '+zdChatMessage[f]["fb_name"]+'</b> : <br>'+zdChatMessage[f]["msg"]+'<br>';
						strHtml += '<a href="javascript:zdMessageCall('+zdChatMessage[f]["msgID"]+',\'delete\');">Delete</a> / <a href="javascript:zdMessageCall('+zdChatMessage[f]["msgID"]+',\'read\');">Read</a> / <a href="javascript:zdAnswerMessage('+zdChatMessage[f]["from"]+');">Answer</a><br>';
						strHtml += '</div>';
					}
					strHtml += '</div>';
				}
				strHtml += '<div id="zdNewMessage" style="height: 300px; width: 300px;">';
				strHtml += '<b>Send a message</b> :<br />to PlayersId(s): <input type="text" value="'+((to) ? to : '')+'" name="zdSendMessageTo" id="zdSendMessageTo" style=""/>  ';
				strHtml += '<br />Message: <textarea value="" name="zdSendMessageText" id="zdSendMessageText" style="height: 100px; width: 280px;"/></textarea>  ';
				strHtml += '<input type="button" id="button100" onClick="zdSendNewMessage();" value="Send" />';
				strHtml += '</div>';
				zdFlyout(strHtml,'Message');
				return;
			}
		}
	);
}

function zdAnswerMessage(to){
	document.getElementById('zdSendMessageTo').value = to;
	document.getElementById('zdSendMessageText').focus();
}

function zdSendNewMessage(){
	var to = document.getElementById('zdSendMessageTo').value;
	var msg = document.getElementById('zdSendMessageText').value;
	zdMessageCall('null','send',to,msg);
}

function zdMessageCall(msgID, cmd, to, msg){
	// cmd can be delete, read, send
	if(cmd == "send" && !msg){
		var msg =prompt('Type your message here :','');
	}
	if(msg || cmd!='send'){
		var arrParameters = zdGetGenericParameters();
		arrParameters["cmd"] = cmd;
		if(cmd == "send"){
			arrParameters["to"] = to;
			arrParameters["msg"] = msg;
		}else{
			arrParameters["msgID"] = msgID;
		}
		new Ajax.Request(
			zdMailServiceUrl, 
			{
				method: 'post',
				asynchronous: true,
				parameters: arrParameters,
				onSuccess: function(transport){
					zdSetResponse(transport.responseText);
					if(cmd=='send'){
						openMessageFlyout('Message sent !');zdMessageCounter();
					}else if(to!='noRefresh'){
						openMessageFlyout();zdMessageCounter();
					}
				}
			}
		);
	}
}

function zdDeleteAllMessages(){
	var childMail = document.getElementById('zdMessageList').childNodes;
	for (i=0;i<childMail.length;i++){
		zdMessageCall(childMail[i].id,'delete','noRefresh');
		if(i==childMail.length-1){
			openMessageFlyout();zdMessageCounter();
		}
	}
}

function zdMessageCounter(){
	var zdChatCount = 0;
	var arrParameters = zdGetGenericParameters();
	arrParameters["cmd"] = "inbox";
	new Ajax.Request(
		zdMailServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess: function(transport){
				zdSetResponse(transport.responseText);
				zdMessageResponseData = eval( '('+transport.responseText+')' );
				if(	zdMessageResponseData["return_data"]["messages"]){
					for (m=0;m<zdMessageResponseData["return_data"]["messages"].length;m++){
						if(	zdMessageResponseData["return_data"]["messages"][m]["type"]=="chat" && zdMessageResponseData["return_data"]["messages"][m]["fb_name"]){		
							zdChatCount++;
						}
					}
					document.getElementById('zdMessageCount').innerHTML = '('+zdChatCount+')';
				}zdShowItemList();
			}
		}
	);
}

var arrWAEParams = {};
function getWAEParams(){
	arrWAEParams = {};
	//zdSetResponse(watchearn_checkDeal);
	//var content=zdGetResponse();
	var re4 = /\"itemInfo\"\:([\w-\[\]\{\}\\\/.\"\':, ]+)/;
	var content = JSON.stringify(PageData.ads.watchearn);
	arrWAEParams["itemInfo"] = PageData.ads.watchearn.itemInfo;
	//arrWAEParams["itemInfo"]=eval('('+arrWAEParams.itemInfo.replace('}]}','}]')+')' );
	//zdLogStatus(content);
	content = content.replace(/\"/g,'');
	content = content.replace(/\s/g,'');
	//var re0 = /thirdpartyid\:([\w-]+)/;
	//var waeparam = content.match(re0);
	arrWAEParams["thirdpartyid"] = PageData.ads.dotd.tpi;
	//zdLogStatus(arrWAEParams.thirdpartyid);
	//var re1 = /placeguid\:([\w]+)/;
	//waeparam = content.match(re1);
	//arrWAEParams["placeguid"] =waeparam[1];
	//zdLogStatus(arrWAEParams.placeguid);
	//var re2 = /timestamp\:([\d]+)/;
	//waeparam = content.match(re2);
	arrWAEParams["timestamp"] =PageData.ads.dotd.now;
	//zdLogStatus(arrWAEParams.timestamp);
	//var re3 = /signature\:([\w]+)/g;
	//waeparam = content.match(re3);
	//arrWAEParams["signature"] =waeparam[0].replace(/signature\:/,'');
	//zdLogStatus(arrWAEParams.signature);
	zdWAEFlyout();zdGetWAEBalance();setTimeout('zdGetWAEBalance();',zdAjaxCallDelay*10-1000);// zdLogStatus('trying to collect 1 view... ');
}

function zdget10WAEParams(){
	for (i=0;i<10;i++){
		var timeOut = (zdAjaxCallDelay*10*i);
		setTimeout('getWAEParams();',timeOut);
	}
}

function zdget60WAEParams(){
	zdDeleteCookies();
	for (i=0;i<60;i++){
		var timeOut = (zdAjaxCallDelay*10*i);
		setTimeout('getWAEParams();',timeOut);
	}
}

function zdWAEFlyout(){
	var strHtml = '';
	strHtml += '<h2> &nbsp Watch and Earn</h2>';
	strHtml += '<p>';
	strHtml += '<p>';
	//strHtml += '&nbsp<input type="button" id="button23" onClick="getWAEParams();" value="SMILE" />&nbsp<input type="button" id="button23" onClick="zdgetWAEParamsRepeat();" value="PLAY HAPPY" />';
	//strHtml += '</p>';
	strHtml += 'Click a pic to redeem (you must have enough views)<br>';
//	strHtml += 'FOR ZOO ID :&nbsp<input value="'+zdUserId+'" type="text" id="zdRedeemFor" name="zdRedeemFor"   style="width: 180px;"/><br>';
//	strHtml += zdUserId+'&nbspis your ID, change it to friend Id to send the item to friend';
//	strHtml += '</p>';
//	strHtml += '<h3>DO NOT USE MULTI IF YOU HAVE LOTS OF VIEWS</h3>';
	strHtml += '</p>';
	strHtml += 'You have : <b id="zdBalanceOfViews">???</b>  views&nbsp<input type="button" id="button23" onClick="zdGetWAEBalance();" value="Refresh number of views" />';
	//strHtml += '<div><iframe frameborder="0" type="text" vspace="0" width="200" height="20" hspace="0"  marginwidth="0"  marginheight="0" src="https://fbeq.rockyou.com/facebook_apps/zoo/server/index.php/watchEarn?cmd=getDeal&dotdParams%5BuserId%5D='+arrWAEParams.thirdpartyid+'&dotdParams%5Bplaceguid%5D='+PageData.ads.dotd.dotdId+'&dotdParams%5BinitTimeStamp%5D='+arrWAEParams.timestamp+'&dotdParams%5Bsignature%5D='+PageData.ads.dotd.sig+'&dotdParams%5BrewardUrl%5D=https://fbeq.rockyou.com/facebook_apps/zoo/server/index.php/dotd/reward?parentAppId='+PageData.ads.dotd.rewardUrl.replace('https://fbeq.rockyou.com/facebook_apps/zoo/server/index.php/dotd/reward?parentAppId=',"").replace('&campaign=',"")+'&signed_request='+zd_signed_request+'&ryAppId=65" width="230" scrolling="no" height="200" name="myFrame" id="myFrame" "></iframe></div>';
	//strHtml += '<p>';
	strHtml += '<div style="height: 400px; overflow: scroll;">';
	var WAEItems = arrWAEParams["itemInfo"].length-1;
	for(i=WAEItems;i>=0;i--){
		strHtml += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 28%;height: 140px;";><b style="position: relative;float: left;">'+arrWAEParams["itemInfo"][i]["id"]+'</b><b style="position: relative;float: right;">';
		if(arrItemQty[arrWAEParams["itemInfo"][i]["id"]] != null){
			strHtml += 'Qty:'+arrItemQty[arrWAEParams["itemInfo"][i]["id"]];
		}else{
			strHtml += 'Qty:0';
		}
		strHtml += '</b><br><img src="' + zdGetNewImgPath(arrWAEParams["itemInfo"][i]["id"], 'smallImg' ) + '" width="50"><br /> '+arrWAEParams["itemInfo"][i]["name"]+'<br />'+arrWAEParams["itemInfo"][i]["views"]+' views</br>';
		strHtml += '<a class="button23" href="javascript:zdRedeem('+i+');">Redeem 1</a><br>';
//		strHtml += '/<a class="button23" href="javascript:zdMultiRedeem('+i+');">Multi</a><br>';
		if( arrGiftIds.indexOf(Number(arrWAEParams["itemInfo"][i]["id"]))!=-1 ){
			strHtml += 'Giftable';
		}else{
		strHtml += 'Not Giftable';
		}
		strHtml += '</div>';
	}
	strHtml += '</div>';
	zdFlyout(strHtml,'WAEitems');
	return;
}

function zdRedeem(itemWAEId){
	zdLogStatus('redeem '+arrWAEParams["itemInfo"][itemWAEId]["name"]+'...');
	//var zdRedeemForId = document.getElementById("zdRedeemFor").value;
	var arrParameters = {};
	arrParameters["signed_request"] = zd_signed_request;
	new Ajax.Request (
		zdWatchAndEarnUrl+'&appname='+zd_appname+'&signed_request='+zd_signed_request+'&method=collect&item='+arrWAEParams["itemInfo"][itemWAEId]["id"]+'',
		{
			method: 'get',
			asynchronous: true,
			parameters: arrParameters,
		}
	);
}

/*function zdMultiRedeem(itemWAEId) {
	for(i=0;i<=10;i++){
		zdRedeem(itemWAEId);
	}
}
*/

function newwaeFlyout(){zdGetWAEBalance();rywatchearn_lib.loadAd();
	var script = document.getElementsByTagName('head')[0].innerHTML; 
	var x = script.indexOf("RYANDeal")-1;
	var y = script.indexOf("src",x)+5;
	var z = script.indexOf("/script",y)-3;
var scriptID=script.slice(y,z).replace("mime-type=application%2Fjavascript&amp;",'').replace(/ver=o2[0-9]*\.?[0-9]+/g,'ver=o2118.7');
	//var urlscript=window.scriptID.src;
	//zdLogStatus(scriptID);
	var strHtml = '';
		strHtml += '<h2> &nbsp Watch and Earn</h2>';
		strHtml += 'You have : <b id="zdBalanceOfViews2">???</b>  views&nbsp<input type="button" id="button23" onClick="zdGetWAEBalance();" value="Refresh number of views" />';
	//	strHtml += '<div style="float: left;"><iframe frameborder="0" type="text" vspace="0" width="49%" height="150" hspace="0"  marginwidth="0"  marginheight="0" src='+scriptID+' name="myFrame" id="myFrame" "></iframe><div style="width:49%;float: right;"><input type="button" style="background-color:#FFCCE0; border:solid 2px grey; border-radius:5px;" id="button23"  onmouseover="this.style.border=\'solid 2px black\'" onmouseout="this.style.border=\'solid 2px grey\'" onClick="'+zdHomePageUrl+'img/under_Construction.png" value="OUT OF ORDER" />Disable other extensions (adBlock etc...).If the video is stuck, Dan will reload after a delay. Let the video run. It is automatic.  If you use the "open in another tab", you can even close your zoo. You can open several tabs depending on your computer and internet speed. Have fun but do not abuse. </div></div>';
	zdFlyout(strHtml,'WAEview');	
}

function zdgetWAEParamsRepeat(){
	NumOfViews = prompt("Enter the number of views you want to collect - Limit 1000; WARNING DO NOT ABUSE", 100);
	if(NumOfViews<1001){
		for (i=0;i<NumOfViews;i++){
			var timeOut = (6000*i);
			setTimeout('zdWAEFlyout();',timeOut);
		}//
	}else{alert("PLEASE DO NOT ABUSE!!!");}
}

function zdGetWAEBalance(){
//zdLogStatus('checking for number of view(s)...');
	var arrParameters = {};
	arrParameters["signed_request"] = zd_signed_request;
	new Ajax.Request (
		zdWatchAndEarnUrl+'&appname='+zd_appname+'&signed_request='+zd_signed_request+'&method=balance',
		{
			method: 'get',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				var content = eval( '('+transport.responseText+')' );
				if(content["success"]){
					var balance = content["return_data"]["balance"];
					if(document.getElementById("zdBalanceOfViews")){
						document.getElementById("zdBalanceOfViews").innerHTML=balance;
					}
					if(document.getElementById("zdBalanceOfViews2")){
						document.getElementById("zdBalanceOfViews2").innerHTML=balance;
					}
				}
			}
		}
	);
}

var zdOriginalList = [];
var resultListOfName = [];

function zdShowName2(friendId){
	$.ajax({
		url: zdprotocol+'graph.facebook.com/'+friendId+'?fields=name',
		dataType: 'json',
		async: false,
		success: function(response) {
			resultListOfName.push(response.name);
			zdOriginalList.splice(0,1);
			zdCreateList();
		}
	});
}

function startNameProcess(){
	resultListOfName = [];
	zdOriginalList = (document.getElementById("zdSendGiftListId").value).split(",");
	zdCreateList();
}

function zdCreateList(){
	if(zdOriginalList.length>0){zdShowName2(zdOriginalList[0]);
	}else{zdLogStatus(resultListOfName);}
}

function zdNewAdoptButton(){
	if(typeof  triggerChainedAdoptAnimal !=="undefined"){
		zdSetResponse(triggerChainedAdoptAnimal);
		var zdCurrentAdopt=zdGetResponse().match(/showGiftFeedFBDialog.*\'\); /g);
		//	var zdCurrentAdoptImg=zdGetResponse().match(/\([\d]+,/);zdCurrentAdoptImg=zdCurrentAdoptImg[0].match(/\d+/);if(zdZooAdoptItems[zdCurrentAdoptImg] == null){zdLogStatus('A new Adopt Animal is there! Item '+zdCurrentAdoptImg);document.getElementById('breakingnews').innerHTML='<marquee  style="font-family:Book Antiqua; color: #f52424;font-size:xx-large;" scrolldelay="200"  id="BreakingNews" >A new Adopt Animal is there! Item '+zdCurrentAdoptImg+'<img alt="" src="http://cdnrockyou-a.akamaihd.net/apps/zoo/item/smallImg/'+zdCurrentAdoptImg+'.gif" onClick="promptFeedGiftDialog();" width="40" title="click" /></marquee>';}
		document.getElementById('AdoptDiv').innerHTML='<img alt="" src="http://cdnrockyou-a.akamaihd.net/apps/zoo/item/smallImg/'+zdCurrentAdoptImg+'.gif" onClick="promptFeedGiftDialog();" width="40" title="click" />';
	}
}

function showCurrentSalesPopup(){
	if(thisWeekSales!=undefined){
		var strHtml = '';
		strHtml += '<h2>This Weeks Sales in Local Time</h2><div style="height: 400px; width: 300px; overflow: scroll; ">';
		var now_time=new Date();
		for (var i=0;i<thisWeekSales.length;i++){
			var zdStartDate=new Date((new Date(zdSaleStarts).valueOf()+(i*zdSaleTimeSpan))), zdEndDate=new Date((new Date(zdSaleStarts).valueOf()+((i+1)*zdSaleTimeSpan)));
			strHtml += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 90%;height: auto;";><b>'+zdStartDate.toLocaleString() + '</b><br>';
			for (var j=0;j<thisWeekSales[i].length;j++){
				strHtml += '<div style="border: 1px solid #000;position: relative;float: left;text-align: center;margin: 2px;padding: 2px;width: 28%;height: auto;";><span><b style="position: relative;float: left;">'+thisWeekSales[i][j].id+'</b><b style="position: relative;float: right;">';
				if(arrItemQty[thisWeekSales[i][j].id] != null){
					strHtml += 'Qty:'+arrItemQty[thisWeekSales[i][j].id];
				}else{
					strHtml += 'Qty:0';
				}
				strHtml += '</b><br><img src="http://cdnrockyou-a.akamaihd.net/apps/zoo/item/smallImg/'+ thisWeekSales[i][j].id +'.gif " title="'+ zdZooItems[thisWeekSales[i][j].id]['name'] + '" width="50"></br>';
				if( ( now_time.valueOf()>(zdStartDate.valueOf())) && (now_time.valueOf()<zdEndDate.valueOf() ) ){
					strHtml += '<a class="button23" href="javascript:zdBuyItem('+thisWeekSales[i][j].id+', 1);">Buy 1</a><br>';
					//strHtml += '/<a class="button23" title="WILL DEPLETE WLP" onclick="MultiBuyItem('+thisWeekSales[i][j].id+');">Multi Buy</a>';				
				}
				if( arrGiftIds.indexOf(Number(thisWeekSales[i][j].id))!=-1 ){
					strHtml += 'Giftable</br>';
				}else{
				strHtml += 'Not Giftable</br>';
				}
				if(thisWeekSales[i][j].price.toString().indexOf('%')==-1){
					strHtml += '<b>'+thisWeekSales[i][j].price +' wlp </b><br>'+Math.floor((thisWeekSales[i][j].orig-thisWeekSales[i][j].price)/thisWeekSales[i][j].orig*100)+'% </br><del>'+thisWeekSales[i][j].orig+' wlp</del></span>';
				} else if(arrPriceIds[thisWeekSales[i][j].id]!='undefined' && thisWeekSales[i][j].orig<0){
					strHtml += 'varies<br/>'+thisWeekSales[i][j].price+'<br>'+arrPriceIds[thisWeekSales[i][j].id]['price']+' wlp</br></span>';
				}else{
					strHtml += 'varies<br/>'+thisWeekSales[i][j].price+'<br>varies</br></span>';
				}
				strHtml += '</div>';
			}
			strHtml += '</div></p>';
		}strHtml += '</div>';
		zdFlyout(strHtml,'Flash Sales');
	return;
	}
}

var lazyLoading = function(){
	var toload = jQuery("img.lazy-loading");
	if(toload.length) { toload = toload.eq(0); 
		toload.attr('src', toload.attr('id')); toload.attr('class', 'loaded');setTimeout('lazyLoading()',5); ;
	}
}

function zdLoadManageGifts(){
	if(document.getElementById('giftsStatusOptions').checked && !document.getElementById('Manage Gifts Status')){
		var strHtml='<h2>Manage Gifts Status</h2><div id="GiftsStatus" style="height: 400px; width: 300px; overflow: scroll; "></div>'
		zdFlyout(strHtml,'Manage Gifts Status');
	}
	var arrParameters = zdGetGenericParameters();
	arrParameters["userid"] = zd_fb_sig_user;
	arrParameters["appid"] = 65;
	arrParameters["method"] = "getRequests";
	new Ajax.Request(
		zdGiftingCenterServiceUrl, 
		{
			method: 'post',
			asynchronous: true,
			parameters: arrParameters,
			onSuccess : function(transport){
				zdSetResponse(transport.responseText);
				arrGiftData = eval( '('+transport.responseText+')' );
				if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length>0){
					for(i=0;i<arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length;i++){
						zdrequestId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["requestId"];
						zdgiftId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["giftId"];
						zdfriendId = arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"][i]["friendId"];
						if(arrIR.has(Number(zdgiftId))){//ignore and return
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,true);zdGiftsStatusFlyout(zdfriendId,zdgiftId,0);
						}else if(arrI.has(Number(zdgiftId))){//ignore
							zdIgnoreGift(zdrequestId,zdgiftId,zdfriendId,false);zdGiftsStatusFlyout(zdfriendId,zdgiftId,0);
						}else if(arrAO.has(Number(zdgiftId))){//accept only
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId);zdGiftsStatusFlyout(zdfriendId,zdgiftId,1);
						}else if(arrAR.has(Number(zdgiftId))){//accept and return
							zdAcceptGift(zdrequestId,zdgiftId,zdfriendId,1);zdGiftsStatusFlyout(zdfriendId,zdgiftId,2);
						}else{
							zdAlertManage(zdgiftId);break;
						}
						if(arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length-1==i){setTimeout('zdLoadManageGifts();',arrGiftData["return_data"][zd_fb_sig_user_id]["gifts"].length*200+1000);}
					}
				}else{zdLogStatus('No more gifts')}
			}
		}
	);
}

function setIntervalX(callback, delay, repetitions) {
	var x = 0;
	var intervalID = window.setInterval(function (){
	callback();
	if(++x === repetitions) {
		window.clearInterval(intervalID);
	}
	}, delay);
}

function zdGiftsStatusFlyout(friendId,giftId,status){
	if(document.getElementById('GiftsStatus')){
		var strhtml='<div style="display:block;width:150px;height:50px;border: 2px solid #999;background:';
		if(status==0){//ignore
			strhtml+='#DF0124';
		}else if(status==1){//accept only
			strhtml+='#F2C201';
		}else{//accept and return
			strhtml+='#01AF34';
		}
		strhtml+='"><img src="' + zdGetNewImgPath( zdgiftId, 'smallImg' ) + '" width="50" style="float: left;" /> from <a href="http://www.facebook.com/profile.php?id='+friendId+'" target="_blank"><img src="https://graph.facebook.com/'+friendId+'/picture" width="50" style="float: right;"/></div><br>';
		document.getElementById('GiftsStatus').innerHTML+=strhtml;
	}
}

function zdAlertManage(zdgiftId){
	var alertMessage = confirm(zdgiftId+" This item is not in manage list! Do you want to set it now ?");
	if(alertMessage){
		window.open(optionsUrl+'?new='+zdgiftId,'_self');
	}
}
