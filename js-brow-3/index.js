// Obtener elementos del DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const section = document.querySelector('section');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', handleSubmit);

// Función para manejar el evento de enviar el formulario
function handleSubmit(event) {
  event.preventDefault();

  // Obtener los valores de los campos de entrada
  const name = nameInput.value;
  const email = emailInput.value;

  // Verificar si se ingresaron un nombre y un correo electrónico
  if (name && email) {
    // Crear un objeto con el nombre y el correo electrónico
    const userData = {
      name: name,
      email: email
    };

    // Almacenar el objeto en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Mostrar el nombre y el correo en la sección
    showUserData(userData);
  }
}

// Función para mostrar el nombre y el correo almacenados en localStorage
function showUserData(userData) {
  // Verificar si hay datos almacenados
  if (userData) {
    // Mostrar el nombre y el correo en la sección
    section.innerHTML = `<p>Nombre: ${userData.name}</p><p>Correo: ${userData.email}</p>`;

    // Agregar el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', deleteUserData);
    section.appendChild(deleteButton);
  } else {
    // Mostrar mensaje si no hay datos almacenados
    section.textContent = 'No hay datos almacenados.';
  }
}

// Función para borrar los datos almacenados en localStorage
function deleteUserData() {
  // Borrar los datos de userData en localStorage
  localStorage.removeItem('userData');

  // Limpiar la sección
  section.innerHTML = '';

  // Mostrar mensaje de éxito
  const message = document.createElement('p');
  message.textContent = 'Datos eliminados.';
  section.appendChild(message);
}

// Mostrar los datos almacenados al cargar la página
const storedData = localStorage.getItem('userData');
if (storedData) {
  const userData = JSON.parse(storedData);
  showUserData(userData);
} else {
  section.textContent = 'No hay datos almacenados.';
}