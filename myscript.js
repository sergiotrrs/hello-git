console.log("My script");
const materiasBase = ["Ingles", "Química", "Física", "Historia", "Mecánica"];

function mostrarCoincidencias(){
    console.log("click on button");
    console.log(obtenerMaterias());
    console.log(buscaCoincidencias( obtenerMaterias(), materiasBase));
    alert("Coincidencias: " +  buscaCoincidencias( obtenerMaterias(), materiasBase))
}

function buscaCoincidencias(materias, materiasBase){
    return materias.filter( materia=> materiasBase.includes(materia));
}

function obtenerMaterias(){
    const inputs = document.getElementById("materias").value;
    return inputs.replace(/ /g,"").split(",");
}