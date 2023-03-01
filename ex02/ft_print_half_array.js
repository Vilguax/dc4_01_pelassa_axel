/*

Écrire une fonction qui affiche dans la console de développement une
case sur deux d’un tableau de reçu en paramètre.

*/

function ft_print_half_array(array) {
    var i = 0;
    while (i < array.length) {
        if (i % 2 === 0) {
            console.log(array[i]);
        }
        i++;
    }

}
ft_print_half_array([1,2,3,4]);