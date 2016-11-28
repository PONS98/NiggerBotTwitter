console.log('Bot started.');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//

var stream = T.stream('user')

stream.on('tweet', replyEvent);

function replyEvent(eventMSG){
	var replyto = eventMSG.in_reply_to_screen_name;
	var from = eventMSG.user.screen_name;

	if (replyto === 'RandomBot98') {
		var answer = '@' + from + ' ' + from + ' is gay';
		tweetText(answer);
	}


}
  

function tweetText(txt) {
	var tweet = {
		status: txt
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err){
			console.log(data);
		}
		else {
			console.log("Done!");
		}
	}
}

// Random message every now and then

var countdownfrom = 6;

var msg1 = '@KilkPlays fuck me anal';
var msg2 = '@KilkPlays i need more memes';
var msg3 = '@cgbeemovie this might be useful http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html';
var msg4 = '@Gojirhabc is my sugardaddy';
var msg5 = '@TurtolV2 SchildpaddoV2';
var msg6 = '@Nickpowns Papi';

var seconds = 600;

tweetIt();
doCountDown();

setInterval(tweetIt, 1000*seconds);
setInterval(doCountDown, 1000*seconds);

function doCountDown(){
	countdownfrom = countdownfrom - 1;
}

function tweetIt() {
	if (countdownfrom == 6) {
		var tweet = {
			status: msg6
		}
	}
	else if (countdownfrom == 5) {
		var tweet = {
			status: msg5
		}
	}
	else if (countdownfrom == 4) {
		var tweet = {
			status: msg4
		}
	}
	else if (countdownfrom == 3) {
		var tweet = {
			status: msg3
		}
	}
	else if (countdownfrom == 2) {
		var tweet = {
			status: msg2
		}
	}
	else if (countdownfrom == 1) {
		var tweet = {
			status: msg1
		}
	}
	else {
		countdownfrom = 6;
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err){
			console.log(data);
		}
		else {
			console.log("Done!");
		}
	}
}







