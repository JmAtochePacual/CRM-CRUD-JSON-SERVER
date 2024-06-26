import {
  nombreInputElement,
  emailInputElement,
  telefonoInputElement,
  empresaInputElement,
} from './selectores.js';

// Vadlidar si los campos del formulario son diferentes de vacío
export const validarCliente = (cliente) => Object.values(cliente).every(dato => dato !== '');


// Muestra un mensaje de alerta
export const mostrarAlerta = (contenedor, mensaje, tipo = true) => {
  // Si ya hay una alerta, no mostrar otra
  if (contenedor.querySelector('.alerta')) {
    return;
  }

  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');

  tipo
    ? alerta.innerHTML = `<strong class="font-bold">Correcto!</strong> ${mensaje}`
    : alerta.innerHTML = `<strong class="font-bold">Error!</strong> ${mensaje}`;

  tipo
    ? alerta.classList.add('bg-green-100', 'border-green-500', 'text-green-700')
    : alerta.classList.add('bg-red-100', 'border-red-500', 'text-red-700');

  contenedor.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
};


// Crear objeto Cliente
export const crearCliente = () => {
  const cliente = {
    nombre: nombreInputElement.value.trim(),
    email: emailInputElement.value.trim(),
    telefono: telefonoInputElement.value.trim(),
    empresa: empresaInputElement.value.trim()
  };

  return cliente;
};


// Llena los campos del formulario con los datos del cliente
export const llenarInputsFormulario = (cliente) => {
  const { nombre, email, telefono, empresa } = cliente;

  nombreInputElement.value = nombre;
  emailInputElement.value = email;
  telefonoInputElement.value = telefono;
  empresaInputElement.value = empresa;
};


// Obtiene el ID de la URL
export const obtenerIdClienteDesdeURL = () => {
  const parametrosURL = new URLSearchParams(window.location.search);
  return parametrosURL.get('id');
};