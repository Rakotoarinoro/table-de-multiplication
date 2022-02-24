// table de multiplication
//installer un prompt dans le terminal pour importer un valeur que vous voulez.
//npm install prompt-sync 

const prompt = require('prompt-sync')();
//tapez une table de multiplication que vous voulez.
let nombre = prompt("Table de multiplication par : ");
//boucle for (let i=début;i<=condition; i++=pas)

for (let i = 1; i<=10; i++){
    console.log(nombre + " * "+ i +" = " + (nombre*i));
}