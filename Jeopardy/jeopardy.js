
var questionsLvl1 = {'question1' : "What's my name?"};
document.cookie ="question1=Whats";
//alert("Hello " + questionsLvl1.question1);
$(document).ready(function() {
	sessionStorage.clear();
	sessionStorage.setItem("questionsLvl1", "What's my name?=Alex;Question12=Response12;Question13=Response13;Question14=Response14;Question15=Response15;");
	sessionStorage.setItem("questionsLvl2", "What's?;Question22;Question32;Question42;Question52;");
	sessionStorage.setItem("questionsLvl3", "What's?;Question23;Question33;Question43;Question53;");
	sessionStorage.setItem("questionsLvl4", "What's?;Question24;Question34;Question44;Question54;");
	sessionStorage.setItem("questionsLvl5", "What's?;Question25;Question35;Question45;Question55;");

	$(".question").click(function() {
		var topic = $(this).attr("topic");
		var questionNumber = $(this).attr("question");
		console.log("clicked " + topic);
		var questionsStr = sessionStorage.getItem("questionsLvl"+questionNumber);
		var questionsArray = questionsStr.split(";");
		console.log(questionsStr);
		console.log((questionsArray[topic-1].split("="))[0]);

        var Modalelem = document.querySelector('#modal1');
        var instance = M.Modal.init(Modalelem);
        instance.open();

	});
	



});