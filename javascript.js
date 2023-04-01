document.getElementById('promptBtn').disabled = true;



let randomNum = parseInt(Math.random() * 50);
function generate() 
{
	document.getElementById('random_number').innerHTML = randomNum;
	document.getElementById('promptBtn').disabled = false;
	document.getElementById('generateBtn').innerHTML = `Generated<i class="fa-solid fa-circle-check"></i>`
	document.querySelector('.fa-circle-check').style.color = "green"
	document.getElementById('generateBtn').disabled = true;
}




// Chances Code ---------->
let chances = 10;
document.getElementById('chance_number').innerHTML = chances;




//  Conditions Check Code -------------------->

function checkBtn()
{
	let guessValue = Number(document.getElementById('guessInput').value);
	if (chances === 0) 
	{
		document.getElementById('promptBtn').disabled = true;
		document.getElementById('generateBtn').disabled = true;
		alert('You have lost your full chance, please refresh to play again.')
	}

	else if (guessValue > randomNum) 
	{
		chances--;
		document.getElementById('chance_number').innerHTML = chances;
		document.getElementById('hint_content').innerHTML = `${guessValue} Is Greater Then Random Number`;
	}

	else if (guessValue < randomNum)
	{
		chances--;
		document.getElementById('chance_number').innerHTML = chances;
		document.getElementById('hint_content').innerHTML = `${guessValue} Is Less Then Random Number`
	}

	else if (guessValue == randomNum && chances > 8)
	{
		document.getElementById('result').innerHTML = "Excellent 🧐";
		document.getElementById('hint_content').innerHTML = `WOW, You crack it.`;
		document.getElementById('random_number').style.opacity = "1";
		setTimeout(reloadPage, 1000);
	}

	else if (guessValue == randomNum && chances > 6)
	{
		document.getElementById('result').innerHTML = "Awesome 😎";
		document.getElementById('hint_content').innerHTML = `WOW, You crack it.`;
		document.getElementById('random_number').style.opacity = "1";
		setTimeout(reloadPage, 1000);
	}

	else if (guessValue == randomNum && chances > 4)
	{
		document.getElementById('result').innerHTML = "Very Good 👍";
		document.getElementById('hint_content').innerHTML = `WOW, You crack it.`;
		document.getElementById('random_number').style.opacity = "1";
		setTimeout(reloadPage, 1000);
	}

	else if (guessValue == randomNum && chances > 2)
	{
		document.getElementById('result').innerHTML = "Good 😉";
		document.getElementById('hint_content').innerHTML = `WOW, You crack it.`;
		document.getElementById('random_number').style.opacity = "1";
		setTimeout(reloadPage, 1000);
	}

	else if (guessValue == randomNum && chances <= 2)
	{
		document.getElementById('result').innerHTML = "Not Good But Okay 🙄";
		document.getElementById('hint_content').innerHTML = `WOW, You crack it.`;
		document.getElementById('random_number').style.opacity = "1";
		setTimeout(reloadPage, 1000);
	}
};


// Automatically Reload Page Code ------------------>
function reloadPage() {
	document.getElementById('refresh_text').style.display = "block"
	let timeleft = 10;
	let downloadTimer = setInterval(function(){
		if(timeleft <= 0){
			clearInterval(downloadTimer);
			setTimeout(refreshPage);
		} 
		else{
			document.getElementById("refresh_count").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);	
}

function refreshPage() 
{
	window.location.reload()
}




// RuleBook Open Close Code ---------------->
function openRule() 
{
	document.getElementById('rule_box').classList.add('openRuleBook')
	document.getElementById('fade').style.display = "block";
}

function closeRule() 
{
	document.getElementById('rule_box').classList.remove('openRuleBook')
	document.getElementById('fade').style.display = "none";
}