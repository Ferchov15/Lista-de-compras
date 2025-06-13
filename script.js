let boton = document.getElementById("botonanadir");
let input = document.getElementById("input");
let list = document.getElementById("lista");


boton.addEventListener("click",()=>{
    let myItem = input.value;
    input.value = '';
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtncomprar = document.createElement('button');
    let listBtneliminar = document.createElement('button');

    
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtncomprar);
    listBtncomprar.textContent = 'Seleccionar';
    listItem.appendChild(listBtneliminar);
    listBtneliminar.textContent = 'Eliminar';

    
    list.appendChild(listItem);  

    listBtncomprar.onclick = (e) => {
        listText.style.textDecoration = 'line-through';
    }
    
    listBtneliminar.onclick = (e) => {
        list.removeChild(listItem);
    }

input.focus();
})



