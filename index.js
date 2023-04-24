let gender = 'Female';
let accent = 'UK English';
let volume = 0.5;
let rate = 1;
let pitch = 1;

let err = 2;

window.addEventListener('load', function(){
	//Get and set heights
	let height = window.innerHeight;
	if(window.innerWidth<=500){
		document.getElementById('homeleft').style.minHeight = (0.30*height).toString()+'px';
		document.getElementById('homeleft').style.maxHeight = (0.30*height).toString()+'px';
		document.getElementById('homeright').style.minHeight = (0.40*height).toString()+'px';
		document.getElementById('homeright').style.maxHeight = (0.40*height).toString()+'px';
	}

	if(window.innerWidth>=768 && window.innerWidth<=1023){
		document.getElementById('homeleft').style.minHeight = (0.38*height).toString()+'px';
		document.getElementById('homeleft').style.maxHeight = (0.38*height).toString()+'px';
		document.getElementById('homeright').style.minHeight = (0.38*height).toString()+'px';
		document.getElementById('homeright').style.maxHeight = (0.38*height).toString()+'px';
	}

	let datetime = new Date();
	let time = datetime.toString().split(' ')[4];
	let hour = time.toString().split(':')[0]
	
	//The theme is automatically set to dark so we check if it is day and set it to the light theme if it is
	//If it is morning
	if(hour>=7 && hour<=18){
		toggle();
	}

	document.getElementById('me').addEventListener('mouseover', function(){
		document.getElementById('mydiv').style.width = '100%';
	});

	document.getElementById('me').addEventListener('mouseleave', function(){
		document.getElementById('mydiv').style.width = '0px';
	});

	document.getElementById('textarea').addEventListener('focus', ()=>{
		if(document.getElementById('settingspane').style.top =="5vh"){
			document.getElementById('settingspane').style.top = '110vh';
		}
	});

	document.getElementById('textarea').addEventListener('keypress', (e)=>{
		if(e.key == "Enter"){ 
			animate();
			let text = document.getElementById('textarea').value.trim();
			let voice = accent+' '+gender;
			if(text != ''){
				responsiveVoice.speak(text, voice, { volume: volume, rate: rate, pitch:pitch, onend: ()=>{
					document.getElementById('micdiv').style.display = 'none';
					document.getElementById('tadiv').style.display = 'flex';
				} });
			}
		}
	});

	document.getElementById('micdiv').addEventListener('click', ()=>{undo();});

	let opening = 'Welcome to VocalEnigma by beginners lock. Anything you\'d like me to say?'
	responsiveVoice.speak(opening, 'UK English Female')
});

function animate(){
	document.getElementById('textarea').value = '';
	document.getElementById('tadiv').style.display = 'none';
	document.getElementById('micdiv').style.display = 'flex';
}

function undo(){
	document.getElementById('micdiv').style.display = 'none';
	document.getElementById('tadiv').style.display = 'flex';
}

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
			document.getElementById('togglecircle').style.left = '105px';
			theme('dark');
		}else{
			document.getElementById('togglecircle').style.left = '0px';
			theme('light');
		}
	}

	//Mobile
	if(window.innerWidth<=500){
		if(document.getElementById('togglecircle').style.left=='0px'){
			document.getElementById('togglecircle').style.left = '50px';
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
		document.getElementById('me').style.color = 'black';
		document.getElementById('mydiv').style.backgroundColor = 'black';
	}else{
		document.getElementById('pagecont').style.backgroundColor = 'black';
		document.getElementById('navbar').style.backgroundColor = 'black';
		document.getElementById('hllarge').style.color = 'white';
		document.getElementById('hlsmall').style.color = 'white';
		document.getElementById('textarea').style.color = 'white';
		document.getElementById('textarea').style.backgroundColor = 'rgba(180, 180, 180, 0.3)';
		document.getElementById('togglecircle').style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
		document.getElementById('togglediv').style.backgroundColor = 'rgba(200, 200, 200, 0.2)';
		document.getElementById('me').style.color = 'white';
		document.getElementById('mydiv').style.backgroundColor = 'white';
	}
}

function setgender(el){
	gender = el.nextElementSibling.innerText;
}

function setaccent(el){
	accent = el.nextElementSibling.innerText;
}

function setvocal(el, globvar){
	if(globvar == 'volume'){
		volume = parseFloat(el.value/10).toFixed(1);
	}

	if(globvar == 'pitch'){
		pitch = parseFloat((el.value/10)*2).toFixed(1);
	}

	if(globvar == 'rate'){
		rate = parseFloat((el.value/10) * 1.5).toFixed(1);
	}
}

function docker(){
	let top = document.getElementById('settingspane').style.top;
	if(top=="" || top=="110vh"){
		if(window.innerWidth<=500){ document.getElementById('settingspane').style.top = '8vh'; }

		if(window.innerWidth>=768 && window.innerWidth<=1023){ document.getElementById('settingspane').style.top = '5vh'; }

		if(window.innerWidth>=1024){ document.getElementById('settingspane').style.top = '5vh'; }
	}else{
		document.getElementById('settingspane').style.top = '110vh';
	}
}

function speak(){
	let text = document.getElementById('textarea').value.trim();
	if(!(text == '')){
		responsiveVoice.speak(text, 'Italian Female');
	}else{
		if(err>=0){
			document.getElementById('textarea').focus();
			responsiveVoice.speak("Type something in first dammit. Gaawwwwd I hate this job!!!", 'UK English Female', {volume:10});
			err--;
		}else{
			responsiveVoice.speak("Type something in first dammit. Gaawwwwd I hate this job!!!", 'UK English Female', {volume:10});
		}
	}
}

function mypage(){
	window.open('https://github.com/beginners-lock', '_blank');
}