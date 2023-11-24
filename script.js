function volume_sphere() {
    //Write your code here
   let radius=document.getElementById('radius').value;

	let ans= (4/3)*Math.PI*Math.pow(radius,3);
	document.getElementById("volume").value = ans.toFixed(4);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
