/*

Écrire une fonction qui prend en entrée un tableau non trié et qui le
trie par ordre croissant en utilisant le tri à bulles (bubble sort). La
fonction doit modifier le tableau d'origine et afficher le tableau trié.

*/

function ft_print_bubble_sort() {
    var tab = [2,3,5,1,4,6,7,8,9,10];
    var i = 0;
    var j = 0;
    var tampon = 0;
    var len = tab.length;
    while (i < len) {
        while (j < len) {
            if (tab[i] < tab[j]) {
                tampon = tab[i];
                tab[i] = tab[j];
                tab[j] = tampon;
            }
            j++;
        }
        i++;
        j = 0;
    }
    console.log(tab);
}

ft_print_bubble_sort();