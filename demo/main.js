var speakButton = document.getElementById("speakButton");
speakButton.onclick = function() {
	tellMeIn("en-US").say(
		"Hello! How are you doing?",
		function() {
			console.log("Finished");
		}
	);
};
