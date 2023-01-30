// Exo 1
// const tableau = new Array() ;
// let hundred = false ;
// let x = 0
// // Demande age 
// while (hundred==false){
//     tableau[x] = window.prompt (`Saisissez un age`) ;
//     tableau[x] = parseInt (tableau[x]) ;
//     if (tableau[x] >= 100){
//         hundred=true ;
//     }
//     x++
// }
// // rangement age
// x = 0 ;
// let nbr_jeunes = 0
// let nbr_Mid_age = 0
// let nbr_vieux = 0
// while (x < tableau.length ){
//     if (tableau[x] < 20){
//         nbr_jeunes++ ;
//     }
//     else if ( tableau[x]> 40 ){
//         nbr_vieux++
//     }
//     else {
//         nbr_Mid_age++
//     }
//     x++
// }
// window.alert (tableau + "\n il y a " + nbr_jeunes +" jeunes"+"\n il y a "+ nbr_Mid_age + " en milieu d'age" + "\n il y a "+ nbr_vieux+" personnes agées" )

// Exo 2

// function table(chiffres){
// y = 0 ;
// while (y <= 10){
//     let multiple = chiffres * y 
//     document.write (y + " * " + chiffres + " = " + multiple + "<br>" )
//     y++
// }
// }
// table (7)

// // Exo 3
// let Prénoms = new Array ("Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane") ;
// let recherche_prn = window.prompt("écrire un prénom")
// if (Prénoms.indexOf (recherche_prn) != -1){
//     window.alert("bravo prénom trouvé : " + recherche_prn ) ;
//     Prénoms.push (" ")
//     Prénoms.splice( Prénoms.indexOf (recherche_prn) , 1 )
// } 
// else {
//     window.alert (recherche_prn + " n'est pas un prénom dans la liste")
// }
// console.log(Prénoms)

// Exo 4

const PU = parseInt (window.prompt ("Saisir le prix unitaire"))
const QTECOM = parseInt (window.prompt ("Saisir la quantité"))
let TOT = (PU*QTECOM) ;
document.write ("Prix : " + PU + "€ Quantité : " + QTECOM + " Total avant remise : " + TOT +"€<br>")
// Calcul rem
let REM = 0
if ( TOT >= 100 && TOT <= 200 ){
    REM = TOT*0.05
    TOT = TOT-REM
}
else if (TOT > 200){
    REM = TOT*0.1
    TOT=TOT-REM
}
document.write("Remise de : " + REM.toFixed(2) + "€ soit " + TOT.toFixed(2) +"€")
// Calcul PORC
let PORT = 0
if (TOT > 500){
    PORT = TOT*0
    TOT = TOT + PORT
}
else {
    PORT=TOT*0.02
    if (PORT < 6 ){
        PORT=6
    }
    TOT= TOT+PORT
}
document.write (" Frais de port de : " + PORT.toFixed(2) + "€ soit un total de : " + TOT.toFixed(2) +"€")