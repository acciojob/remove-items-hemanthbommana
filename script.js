//your JS code here. If required.

let myFunction = ()=>{
	let eve = document.getElementById('colorSelect').selectedIndex ;
	if(eve != -1){
		document.getElementById('colorSelect').remove(eve);
	}
}
document.getElementsByTagName('input')[0].addEventListener('click',myFunction);