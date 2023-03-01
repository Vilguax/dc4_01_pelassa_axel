/*

Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.

*/

function ft_print_alphabet() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetArray = alphabet.split("");
    var alphabetUppercase = "";
    for (var i = 0; i < alphabetArray.length; i++) {
        alphabetUppercase += String.fromCharCode(alphabetArray[i].charCodeAt(0) - 32);
    }
    console.log(alphabetUppercase);
}
ft_print_alphabet();