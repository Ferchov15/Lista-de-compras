let boton = document.getElementById("botonanadir");
let input = document.getElementById("input");
let list = document.getElementById("lista");

// Cargar lista desde localStorage al iniciar
let itemsGuardados = JSON.parse(localStorage.getItem("listaItems")) || [];
itemsGuardados.forEach(item => crearElemento(item));

// Agregar nuevo ítem
boton.addEventListener("click", () => {
  let myItem = input.value.trim();
  if (myItem !== "") {
    if (!itemsGuardados.includes(myItem)) {
      crearElemento(myItem);
      itemsGuardados.push(myItem);
      localStorage.setItem("listaItems", JSON.stringify(itemsGuardados));
    } else {
      alert("Este elemento ya fue agregado.");
    }
    input.value = "";
  } else {
    alert("No se puede agregar un elemento vacío");
  }
  input.focus();
});

// Función para crear el <li> visualmente y agregar funcionalidad
function crearElemento(myItem) {
  let listItem = document.createElement("li");
  let listText = document.createElement("span");
  let listBtncomprar = document.createElement("button");
  let listBtneliminar = document.createElement("button");

  listText.textContent = myItem;
  listBtncomprar.textContent = "Seleccionar";
  listBtneliminar.textContent = "Eliminar";

  listItem.appendChild(listText);
  listItem.appendChild(listBtncomprar);
  listItem.appendChild(listBtneliminar);
  list.appendChild(listItem);

  listBtncomprar.onclick = () => {
    listText.style.textDecoration =
      listText.style.textDecoration === "line-through" ? "none" : "line-through";
  };

  listBtneliminar.onclick = () => {
    list.removeChild(listItem);
    // Eliminar del localStorage
    itemsGuardados = itemsGuardados.filter(item => item !== myItem);
    localStorage.setItem("listaItems", JSON.stringify(itemsGuardados));
  };
}
