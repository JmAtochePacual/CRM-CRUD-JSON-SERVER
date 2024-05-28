import { mostrarAlerta } from './funciones.js';
import { formularioElement } from './selectores.js';

// Agregar cliente a la API
export const agregarCliente = async (cliente) => {
  const URL = 'http://localhost:4000/clientes';

  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    mostrarAlerta(formularioElement, 'Cliente agregado correctamente');

    window.location.href = 'index.html';

  } catch (error) {
    console.log(error, 'Error al agregar cliente en la API');
  }
};


// Obtiene los clientes de la API
export const obtenerClientes = async () => {
  const URL = 'http://localhost:4000/clientes';

  try {
    const respuesta = await fetch(URL);
    const clientes = await respuesta.json();

    return clientes;
  } catch (error) {
    console.log(error, 'Error al obtener clientes de la API');
  }
};

// Obtiene un cliente por su ID
export const obtenerCliente = async (id) => {
  const URL = `http://localhost:4000/clientes/${id}`;

  try {
    const respuesta = await fetch(URL);
    const cliente = await respuesta.json();

    return cliente;
  } catch (error) {
    console.log(error, 'Error al obtener cliente de la API');
  }
};


// Elimina un cliente de la API
export const eliminarCliente = async (id) => {
  const URL = `http://localhost:4000/clientes/${id}`;

  try {
    await fetch(URL, {
      method: 'DELETE'
    });

  } catch (error) {
    console.log(error, 'Error al eliminar cliente de la API');
  }
};


// Actualiza un cliente en la API
export const actualizarCliente = async (cliente) => {
  const URL = `http://localhost:4000/clientes/${cliente.id}`;

  try {
    await fetch(URL, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    window.location.href = 'index.html';
  } catch (error) {
    console.log(error, 'Error al actualizar cliente');
  }
}; 