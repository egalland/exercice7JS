// FONCTION CALCUL
function calcul(){
// DECLARATION ET RECUPERATION DES VARIABLES
var shoeSize = document.getElementById('shoeSize').value;
var birthYear = document.getElementById('birthYear').value;
// VERIFICATION DES VARIABLES
 if(/^[0-9.]+$/.test(shoeSize && birthYear) == true){
    // VERIFICATION OK -> CALCUL
    var result = shoeSize * 2;
    result =  result + 5;
    result =  result * 50;
    result =  result - birthYear;
    result =  result + 1766;
    alert(result);
  }else{
    // ECHEC
      alert('Ce n\'est pas un nombre');
    }
}
