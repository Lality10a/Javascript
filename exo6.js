var calculatriceOn = document.getElementsByTagName('a')[0];
console.log(calculatriceOn);

var calculatriceOff = document.getElementsByTagName('a')[1];
console.log(calculatriceOff);


var calculatrice = document.getElementsByTagName('section')[0];
console.log(calculatrice);

var champs1 = document.getElementsByTagName('input')[0];
var operateur = document.getElementsByTagName('select')[0];
var champs2 = document.getElementsByTagName ('input')[1];
var go = document.getElementsByTagName('span')[0];


calculatriceOn.addEventListener('click', apparition);
calculatriceOff.addEventListener('click', disparition);
go.addEventListener('click', calcule);
	          
 //FONCTION
 function apparition() {
 	calculatrice.style.display = 'block';

 }
  function disparition() {
 	calculatrice.style.display = 'none';
}


function calcule(){
	console.log('click !');

                                    

     var premier = parseInt(champs1.value);
     console.log(premier);
     var deuxieme = parseInt(champs2.value);
     console.log(deuxieme);

     /*console.log(deuxieme.value);*/
     console.log(typeof (premier));
     
	if(operateur.value == '+') {
		var resultat = premier + deuxieme;
		console.log(resultat);
	} else if (operateur.value == '-') {
		var resultat = premier - deuxieme;
	} else if (operateur.value == '*') {
		var resultat = premier * deuxieme;
	} else if (operateur.value == '/') {
		var resultat = premier / deuxieme;
	}

	alert(premier + operateur.value + deuxieme + '=' + resultat);

}


              