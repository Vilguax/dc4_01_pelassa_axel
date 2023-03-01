/*

Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.

*/

function ft_print_alphabet(str) {
    var i = 0;
    var result = "";

    while (i < str.length) {
        result += String.fromCharCode(str.charCodeAt(i) - 32);
        i++;
    }
    console.log(result);
    
}

ft_print_alphabet("abcdefghijklmnopqrstuvwxyz");