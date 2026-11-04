// Seleccionamos los elementos principales del DOM
const dropdown = document.getElementById("customDropdown");
const header = document.getElementById("dropdownHeader");
const selectedText = document.getElementById("selectedText");
const items = document.querySelectorAll(".dropdown-item");

// 1. Abrir o cerrar el menú al hacer clic en la cabecera
header.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que el evento se propague a la ventana
  dropdown.classList.toggle("open");
});

// 2. Manejar la selección de una materia de la lista[cite: 12]
items.forEach((item) => {
  item.addEventListener("click", () => {
    const value = item.getAttribute("data-value");

    // Mostramos la materia seleccionada en la cabecera
    selectedText.textContent = value;
    selectedText.style.color = "#1f2937";

    // Quitamos la clase 'selected' de todos y la ponemos solo en el elegido[cite: 12]
    items.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");

    // Cerramos el menú desplegable automáticamente[cite: 12]
    dropdown.classList.remove("open");
  });
});

// 3. Cerrar el menú si el usuario hace clic fuera de él
window.addEventListener("click", () => {
  dropdown.classList.remove("open");
});
