var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];


console.log(scores);
//sorting for the highest grade
scores.sort(function(a, b){return b-a});
	console.log("The highest grade is ", scores[0]);

//sorting for the lowest grade
scores.sort(function(a, b){return a-b});
	console.log("The lowest grade is ", scores[0]);


//looping through the array and at every if statement, counting the number of grades that fall within a certain letter grade range.
for (i = 0; i < scores.length; i++){
	if (scores[i] >= 91 && scores[i] <= 100) {
		scoreA++;
	} else if (scores[i] >= 81 && scores[i] <= 90) {
		scoreB++;
	} else if (scores[i] >= 71 && scores[i] <= 80) {
		scoreC++;
	} else if (scores[i] >= 61 && scores[i] <= 70) {
		scoreD++;
	} else if (scores[i] >= 50 && scores[i] <= 60) {
		scoreF++;
	}
}
	console.log("There are this many A's: ", scoreA);
	console.log("There are this many B's: ", scoreB);
	console.log("There are this many C's: ", scoreC);
	console.log("There are this many D's: ", scoreD);
	console.log("There are this many F's: ", scoreF);
