/*

Écrire une fonction qui insert dans un tableau un nombre reçu en
paramètre dans l’ordre croissant. Le tableau de référence sera le
suivant :

let tab = [0,1,2,3,4,5,6,7,8,9]

*/

function ft_insert_number(number) {
    let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let i = 0;
    
    while (i < tab.length && number > tab[i]) {
      i++;
    }

    tab.splice(i, 0, number);
  
    console.log(tab);
  }
  
ft_insert_number(13); 
  
  
  