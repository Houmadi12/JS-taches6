let nbr1 = null;
let nbr2 = null;

do{
   nbr1 = parseInt(prompt("Saisie le premier nombre"));
}while(isNaN(nbr1))

do{
   nbr2 = parseInt(prompt("Saisie le deuxieme nombre"));
}while(isNaN(nbr2))

function multiplication(a,b){
    document.write(a+" multiplié par "+b+" vaut "+a*b);
}

multiplication(nbr1,nbr2);