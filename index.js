let err = 2;

window.addEventListener('load', function(){
	let datetime = new Date();
	let time = datetime.toString().split(' ')[4];
	let hour = time.toString().split(':')[0]
	
	//The theme is automatically set to dark so we check if it is day and set it to the light theme if it is
	//If it is morning
	if(hour>=7 && hour<=18){
		toggle();
	}

	let opening = 'Welcome to VocalEnigma. One of the portfolio sites of beginners lock which makes use of ResponsiveVoice API. Type something in, then test and I\'ll do the rest'
	responsiveVoice.speak(opening, 'UK English Female')
});

function toggle(){
	//Laptop
	if(window.innerWidth>=1024){
		if(document.getElementById('togglecircle').style.left=='0px'){
			document.getElementById('togglecircle').style.left = '80px';
			theme('dark');
		}else{
			document.getElementById('togglecircle').style.left = '0px';
			theme('light');
		}
	}

	//Tablet
	if(window.innerWidth>=768 && window.innerWidth<=1023){
		if(document.getElementById('togglecircle').style.left=='0px'){
			document.getElementById('togglecircle').style.left = '120px';
			theme('dark');
		}else{
			document.getElementById('togglecircle').style.left = '0px';
			theme('light');
		}
	}

	//Mobile
	if(window.innerWidth<=500){
		if(document.getElementById('togglecircle').style.left=='0px'){
			document.getElementById('togglecircle').style.left = '80px';
			theme('dark');
		}else{
			document.getElementById('togglecircle').style.left = '0px';
			theme('light');
		}
	}
}

function theme(type){
	if(type=='light'){
		document.getElementById('pagecont').style.backgroundColor = 'white';
		document.getElementById('navbar').style.backgroundColor = 'white';
		document.getElementById('hllarge').style.color = 'black';
		document.getElementById('hlsmall').style.color = 'black';
		document.getElementById('textarea').style.color = 'black';
		document.getElementById('textarea').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
		document.getElementById('togglecircle').style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		document.getElementById('togglediv').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
	}else{
		document.getElementById('pagecont').style.backgroundColor = 'black';
		document.getElementById('navbar').style.backgroundColor = 'black';
		document.getElementById('hllarge').style.color = 'white';
		document.getElementById('hlsmall').style.color = 'white';
		document.getElementById('textarea').style.color = 'white';
		document.getElementById('textarea').style.backgroundColor = 'rgba(180, 180, 180, 0.3)';
		document.getElementById('togglecircle').style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
		document.getElementById('togglediv').style.backgroundColor = 'rgba(200, 200, 200, 0.2)';
	}
}

function speak(){
	let text = document.getElementById('textarea').value.trim();
	if(!(text == '')){
		responsiveVoice.speak(text);
	}else{
		if(err>=0){
			document.getElementById('textarea').focus();
			err--;
		}else{
			responsiveVoice.speak("Type something in first dammit. Gaawwwwd I hate this job!!!", 'UK English Female', {volume:10});
		}
	}
}