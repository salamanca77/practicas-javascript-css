let listaDatos = [];
let listaAux = [];
const $inputName = document.querySelector('#inputName');
const $inputDate = document.querySelector('#inputDate');
const $inputBoton = document.querySelector('.inputBoton');
const $listaDatos = document.querySelector('.listaDatos');
const $form = document.querySelector('#form');

const json = obtener();
try {
    listaAux = JSON.parse(json)
} catch (error) {
    listaAux = [];
}

listaDatos = listaAux? [...listaAux]:[]

renderLista();

$form.addEventListener('submit', e => {
    e.preventDefault();
    addLista();
})


function addLista() {

    if ($inputName.value === '' || $inputDate.value === '') {
        return;
    }


    if (dateDiff($inputDate.value) < 0) {
        return;
    }

    const lista = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: $inputName.value,
        date: $inputDate.value
    }

    listaDatos.unshift(lista);
    save(JSON.stringify(listaDatos))

    $inputName.value = '';
    renderLista();
}

function dateDiff(newDate) {
    let diffDate = new Date(newDate).getTime() - new Date().getTime();
    const days = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    return days;
}

function renderLista() {

    const listaHtml = listaDatos.map((lista) => {
        return `
            <div>
            <div>${dateDiff(lista.date)}dias</div>
            <div>${lista.name}</div>
            <div>${lista.date}</div>
            <button class="classDelete" data-id="${lista.id}">Eliminar</button>
            </div>
        `
    })

    $listaDatos.innerHTML = listaHtml.join('')

    document.querySelectorAll('.classDelete').forEach(boton => {
       console.log(boton);
        boton.addEventListener('click', e =>{
            const id = boton.getAttribute('data-id')
            listaDatos = listaDatos.filter((lista)=> lista.id != id);
            save(JSON.stringify(listaDatos))
            renderLista();
        })
    });

}


function save(dato){
    localStorage.setItem("items", dato)
}

function obtener(){
    return localStorage.getItem("items")
}

const arr1 = Array.from(Array(8))
console.log(arr1);












