let nbrNote = null;
let notesEleve = [];
let nbrEleveMoyen = [];

do{
    nbrNote = parseInt(prompt("Combien des notes voulais vous enregistrer !"));
}while(isNaN(nbrNote));

// Saisie du tableau
function saisieTableau(tab,nbr){
    for(let i=0; i<nbr; i++){
        let note;
        
        do{
            note = parseInt(prompt("saise le note de l'eleve "+(i+1)));
        }while(isNaN(note));
        
        tab.push(note); 
    }
}

// Fonction qui calcule la moyenne
function moyenne(tab){

    const somme = tab.reduce((accumulator, currentValue) => accumulator + currentValue);

      return somme/tab.length;
}

// Fonction qui cherche les eleves qui ont la moyenne
function etdMoyenne(tab){
    let count = 0;
    for(let i=0; i<tab.length; i++){
        if(tab[i] >= 10){
            count++;
        }
    }

    return count;
}

saisieTableau(notesEleve,nbrNote);
let my = moyenne(notesEleve);
let nbreleve = etdMoyenne(notesEleve);

// Affichage du tableau
document.write('<div class="container">');
document.write("<h4>Le tableau saisie :</h4>");
document.write("<table><tr>");
for(let i=0; i<notesEleve.length; i++){
document.write("<td>"+notesEleve[i]+"</td>");
}
document.write("</tr></table>");
document.write('</div>');

// affichage du moyenne et nombre d'étudiant qui ont la moyenne
document.write('<div class="container mt-3">');
document.write("<p> La moyenne de la classe  est : "+my+"</p>");
document.write("<p> Le nombre d'élèves qui ont une note supérieur à la moyenne: "+nbreleve+"</p>");
document.write('</div>');
