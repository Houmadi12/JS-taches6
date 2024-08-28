let n = null;

do{
    n = parseInt(prompt("Saisier un nombre"));
}while(isNaN(n));

function modulo(a){
    let reslt = a % 4;
    document.write('<div class="container">');
    document.write("\"Si l'on divise "+n+" par 4, le reste est de "+reslt+" \"");
    document.write('</div>');
}

modulo(n);