//your code here
/*let str;
document.getElementById("evaluatedText").value = ""; 

document.addEventListener("keyup", function () {
	  str = document.getElementById("evaluatedText").value; 
	// consostr.split(' ').length;
		
 let x = str.split(' ')
	x= x.filter(item => item);
	console.log(x)
	document.querySelector("#wordCount").textContent = x.length;
	
    
});*/

let str;

document.getElementById("evaluatedText").value = ""; 

document.addEventListener("keyup", function () {

	  str = document.getElementById("evaluatedText").value; 	// consostr.split(' ').length;

		

 let x = str.split(' ')

	x= x.filter(item => item);

	console.log(x)

	document.querySelector("#wordCount").textContent = x.length;

	

    

});
