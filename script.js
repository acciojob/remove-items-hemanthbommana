//your JS code here. If required.

let myFunction = ()=>{
	let select = document.getElementById("colorSelect");
	let option = select.selectedIndex; // it will give you the index of the option

	if(option >= 0){
		select.remove(option);
	}
	
	
}
document.getElementsByTagName('input')[0].addEventListener('click',myFunction);