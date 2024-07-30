//your JS code here. If required.

let myFunction = (event)=>{
	let eve = document.getElementById('colorSelect').selectedIndex ;
	if(eve != -1){
		document.getElementById('colorSelect').remove(eve);
	}
}
let event = document.getElementsByTagName('input')[0].addEventListener('click',myFunction);