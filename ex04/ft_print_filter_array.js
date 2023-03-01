/*

Écrire une fonction qui filtre tous les nombres impairs d’un tableau.
Affichez le résultat dans la console de développement

*/

function ft_print_filter_array(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    var i = 0;
    var array2 = [];
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            array2.push(array[i]);
        }
        i++;
    }
    console.log(array2);

}
ft_print_filter_array();