let nbr = null;

do{
    nbr = parseInt(prompt("Saisie un nombre!"));
}while(isNaN(nbr));

function factorielle(a){
    let fact = 1;

    for(let i=1; i <= a; i++){
        fact *= i;
    }

    document.write('<div class="container">');
    document.write("La factorielle de "+a+" est : "+fact);
    document.write('</div>');
}

factorielle(nbr);