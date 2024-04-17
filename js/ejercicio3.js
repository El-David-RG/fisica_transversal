function dividirLista(lista) {

    const mitad = Math.floor(lista.length / 2);


    const primeraMitad = lista.slice(0, mitad);
    const segundaMitad = lista.slice(mitad);

    return [primeraMitad, segundaMitad];
}


const nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Elena"];
const [primeraMitad, segundaMitad] = dividirLista(nombres);
console.log("Primera mitad:", primeraMitad);
console.log("Segunda mitad:", segundaMitad);
