/*

Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.

*/

function ft_print_alphabet() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabet_uppercase = "";
    for (var i = 0; i < alphabet.length; i++) {
        alphabet_uppercase += String.fromCharCode(alphabet.charCodeAt(i) - 32);
    }
    console.log(alphabet_uppercase);
}
ft_print_alphabet();