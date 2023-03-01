/*

Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.

*/

function ft_print_alphabet(str) {
    var array = str.split("");
    var i = 0;
    while (i < array.length) {
        array[i] = String.fromCharCode(array[i].charCodeAt(0) - 32);
        i++;
    }

    console.log(array.join(""));
}

ft_print_alphabet("abcdefghijklmnopqrstuvwxyz");