$(document).ready(function() {
	console.log("Hello world!");

	//ADD CLICK EVENT IN SEARCH
	$("#searchProfile").click(function() {
		console.log("Click search Profile!!");

		var battleTag = $("input[name='battleTag']").val();
		console.log(battleTag);


		//ADD SEARCHING TEXT
		$('body').append("<br/><br/><div id='searchingText'>Searching Data..</div>");

		var getProfileUrl = "https://api.lootbox.eu/pc/kr/";
		var userName = battleTag.substring(0, battleTag.indexOf("#"));
		var battleCode = battleTag.substring(battleTag.indexOf("#")+1, battleTag.length);
		console.log(userName);
		console.log(battleCode);

		getProfileUrl = getProfileUrl.concat(userName).concat("-").concat(battleCode).concat("/profile");
		//using ajax
		$.ajax({
			type:"GET",
			url: getProfileUrl,
			success: function(data) {
				console.log(data);
			}
		})
	});
});