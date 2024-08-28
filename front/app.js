

document.addEventListener('DOMContentLoaded', ()=>{
    const guitarOne = document.getElementById(`guitarristaUno`)
    const guitarTwo = document.getElementById('guitarristaDos')
    const boton = document.getElementById('obtener-datos')

    async function cambiarTexto(){
        /*uitarOne.textContent = getGuitarristaPorId(0)
        console.log("Texto cambiado")*/
        const nombreGuitarrista = await getGuitarristaPorId(0);
        guitarOne.textContent = nombreGuitarrista;
        const nombreGuitarrista2 = await getGuitarristaPorId(1);
        guitarTwo.textContent = nombreGuitarrista2;
        console.log("Texto cambiado");
    }

    boton.addEventListener('click', cambiarTexto)
})




async function getGuitarristas(){
    const res = await fetch('http://localhost:4000/guitarristas')
    const resJson = await res.json();
    return resJson;
}

console.log(getGuitarristas())

//Obtener guitarrista por ID
async function getGuitarristaPorId(id) {
    const data = await getGuitarristas();
    const guitarrista = data[id];
    return guitarrista.nombre;
}
console.log(getGuitarristaPorId(0))
