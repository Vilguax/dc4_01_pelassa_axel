/*

Écrire une fonction qui prend en entrée un tableau d'entiers non trié
et qui le trie par insertion. La fonction doit modifier le tableau
d'origine et afficher le tableau trié.

*/

function ft_print_insertion_sort(tab) {
    let i = 1;
    let j = 0;
    let temp = 0;
    
    while (i < tab.length) {
        j = i;
        while (j > 0 && tab[j] < tab[j - 1]) {
        temp = tab[j];
        tab[j] = tab[j - 1];
        tab[j - 1] = temp;
        j--;
        }
        i++;
    }
    
    console.log(tab);
    }

ft_print_insertion_sort([5,12,16,3,8,9,10,1,2,4,6,7,11,13,14,15,17,18,19,20]);