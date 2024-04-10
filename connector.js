import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://pwwrvbcpbymqvewxhruc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3d3J2YmNwYnltcXZld3hocnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxOTE0MTQsImV4cCI6MjAyNzc2NzQxNH0.lk6a6y7AEMYp3U63D9q-gPvrdnaGQiXW1ese55PSO5o'
const supabase = createClient(supabaseUrl, supabaseKey) 

let { data: aviones, error } = await supabase
  .from('aviones')
  .select('*')

  async function ShowModeloInfo () {
    let avionesList = document.getElementById('aviones-list');

    if (avionesList) {
        aviones.forEach(avion => {
            let listItem = document.createElement('li');
            listItem.textContent = avion.modelo; 
            avionesList.appendChild(listItem);
        });
  } 
} 

async function ShowCapacidadInfo () {
  let avionesList = document.getElementById('Capacidad-list');

  if (avionesList) {
      aviones.forEach(avion => {
          let listItem = document.createElement('li');
          listItem.textContent = avion.capacidadpasajeros; 
          avionesList.appendChild(listItem);
      });
} 

} 
async function ShownanioInfo () {
  let avionesList = document.getElementById('anios-list');

  if (avionesList) {
      aviones.forEach(avion => {
          let listItem = document.createElement('li');
          listItem.textContent = avion.aniofabricacion;
          avionesList.appendChild(listItem);
      });
} 

} 
async function ShowNumeroInfo () {
  let avionesList = document.getElementById('Nserie-list');

  if (avionesList) {
      aviones.forEach(avion => {
          let listItem = document.createElement('li');
          listItem.textContent = avion.numeroserie; 
          avionesList.appendChild(listItem);
      });
} 
}

//Funciones de Aeropuertos

let { data: aeropuertos} = await supabase
  .from('aeropuertos')
  .select('*')

async function ShowNombreInfo () {
  let aeropuertosList = document.getElementById('aeropuertos-list');

  if (aeropuertosList) {
      aeropuertos.forEach(aeropuertos => {
          let listItem = document.createElement('li');
          listItem.textContent = aeropuertos.nombre; 
          aeropuertosList.appendChild(listItem);
      });
} 

}
async function ShowCiudadInfo () {
  let aeropuertosList = document.getElementById('ciudad-list');

  if (aeropuertosList) {
      aeropuertos.forEach(aeropuertos => {
        let listItem = document.createElement('li');
        listItem.textContent = aeropuertos.ciudad; 
        aeropuertosList.appendChild(listItem);
      });
} 
} 

async function ShowPaisinfo () {
  let aeropuertosList = document.getElementById('Pais-list');

  if (aeropuertos) {
      aeropuertos.forEach(aeropuertos => {
          let listItem = document.createElement('li');
          listItem.textContent = aeropuertos.pais; 
          aeropuertosList.appendChild(listItem);
      });
} 
} 

//Funciones de Empleados

let { data: empleados} = await supabase
  .from('empleados')
  .select('*')

async function ShowEnombreinfo () {
    let empleadosList = document.getElementById('Enombre-list');
  
    if (empleados) {
        empleados.forEach(empleados => {
            let listItem = document.createElement('li');
            listItem.textContent = empleados.nombre; 
            empleadosList.appendChild(listItem);
        });
  } 
  } 
  
  async function ShowApellidoinfo () {
    let empleadosList = document.getElementById('Apellido-list');
  
    if (empleados) {
        empleados.forEach(empleados => {
            let listItem = document.createElement('li');
            listItem.textContent = empleados.apellido; 
            empleadosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowFechaContrainfo () {
    let empleadosList = document.getElementById('Fechacontra-list');
  
    if (empleados) {
        empleados.forEach(empleados => {
            let listItem = document.createElement('li');
            listItem.textContent = empleados.fechacontratacion; 
            empleadosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowSalarioinfo () {
    let empleadosList = document.getElementById('Salario-list');
  
    if (empleados) {
        empleados.forEach(empleados => {
            let listItem = document.createElement('li');
            listItem.textContent = empleados.salario; 
            empleadosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowPuestoinfo () {
    let empleadosList = document.getElementById('Puesto-list');
  
    if (empleados) {
        empleados.forEach(empleados => {
            let listItem = document.createElement('li');
            listItem.textContent = empleados.puesto; 
            empleadosList.appendChild(listItem);
        });
  } 
  } 

  //Funciones de pasajaros
  let { data: pasajeros} = await supabase
  .from('pasajeros')
  .select('*')

  async function ShowPnombreinfo () {
    let pasajerosList = document.getElementById('PNombres-list');
  
    if (pasajeros) {
        pasajeros.forEach(pasajeros => {
            let listItem = document.createElement('li');
            listItem.textContent = pasajeros.nombre; 
            pasajerosList.appendChild(listItem);
        });
  } 
  } 
  
  async function ShowPapellidoinfo () {
    let pasajerosList = document.getElementById('PApellidos-list');
  
    if (pasajeros) {
        pasajeros.forEach(pasajeros => {
            let listItem = document.createElement('li');
            listItem.textContent = pasajeros.apellido; 
            pasajerosList.appendChild(listItem);
        });
  } 
  } 
  
  async function ShowEdadinfo () {
    let pasajerosList = document.getElementById('PEdad-list');
  
    if (pasajeros) {
        pasajeros.forEach(pasajeros => {
            let listItem = document.createElement('li');
            listItem.textContent = pasajeros.edad; 
            pasajerosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowGeneroinfo () {
    let pasajerosList = document.getElementById('PGeneros-list');
  
    if (pasajeros) {
        pasajeros.forEach(pasajeros => {
            let listItem = document.createElement('li');
            listItem.textContent = pasajeros.genero; 
            pasajerosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowNPasaporteinfo () {
    let pasajerosList = document.getElementById('Pnumero-list');
  
    if (pasajeros) {
        pasajeros.forEach(pasajeros => {
            let listItem = document.createElement('li');
            listItem.textContent = pasajeros.numeropasaporte; 
            pasajerosList.appendChild(listItem);
        });
  } 
  } 

  //Funciones de Reservas
  let { data: reservas} = await supabase
  .from('reservas')
  .select('*')

  async function ShowPIDinfo () {
    let reservasList = document.getElementById('PID-list');
  
    if (reservas) {
        reservas.forEach(reservas => {
            let listItem = document.createElement('li');
            listItem.textContent = reservas.pasajeroid; 
            reservasList.appendChild(listItem);
        });
  } 
  } 
  
  async function ShowVIDinfo () {
    let reservasList = document.getElementById('VID-list');
  
    if (reservas) {
        reservas.forEach(reservas => {
            let listItem = document.createElement('li');
            listItem.textContent = reservas.vueloid; 
            reservasList.appendChild(listItem);
        });
  } 
  } 

  async function ShowAsientoinfo () {
    let reservasList = document.getElementById('Asiento-list');
  
    if (reservas) {
        reservas.forEach(reservas => {
            let listItem = document.createElement('li');
            listItem.textContent = reservas.asiento; 
            reservasList.appendChild(listItem);
        });
  } 
  } 

  //Funciones de vuelos

  let { data: vuelos} = await supabase
  .from('vuelos')
  .select('*')

  async function ShowOrigeninfo () {
    let vuelosList = document.getElementById('origen-list');
  
    if (vuelos) {
        vuelos.forEach(vuelos => {
            let listItem = document.createElement('li');
            listItem.textContent = vuelos.origen; 
            vuelosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowDestinoinfo () {
    let vuelosList = document.getElementById('destino-list');
  
    if (vuelos) {
        vuelos.forEach(vuelos => {
            let listItem = document.createElement('li');
            listItem.textContent = vuelos.destino; 
            vuelosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowFechaSinfo () {
    let vuelosList = document.getElementById('fechaS-list');
  
    if (vuelos) {
        vuelos.forEach(vuelos => {
            let listItem = document.createElement('li');
            listItem.textContent = vuelos.fechahorasalida; 
            vuelosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowFechaDinfo () {
    let vuelosList = document.getElementById('FechaL-list');
  
    if (vuelos) {
        vuelos.forEach(vuelos => {
            let listItem = document.createElement('li');
            listItem.textContent = vuelos.fechahorallegada; 
            vuelosList.appendChild(listItem);
        });
  } 
  } 

  async function ShowDuracioninfo () {
    let vuelosList = document.getElementById('Duracion-list');
  
    if (vuelos) {
        vuelos.forEach(vuelos => {
            let listItem = document.createElement('li');
            listItem.textContent = vuelos.duracion; 
            vuelosList.appendChild(listItem);
        });
  } 
  } 

//funciones de Insert


//Funciones de Update


//Funciones de Delete
          

//Aeropuertos
ShowNombreInfo();
ShowPaisinfo();
ShowCiudadInfo();

//Aviones
ShowModeloInfo();
ShowCapacidadInfo();
ShowNumeroInfo();
ShownanioInfo ();

//Empleados
ShowEnombreinfo();
ShowApellidoinfo();
ShowPuestoinfo();
ShowSalarioinfo();
ShowFechaContrainfo();

//Pasajeros
ShowPnombreinfo();
ShowPapellidoinfo();
ShowEdadinfo();
ShowNPasaporteinfo();
ShowGeneroinfo();

//Reservas
ShowPIDinfo();
ShowVIDinfo();
ShowAsientoinfo();

//Vuelos
ShowOrigeninfo();
ShowDestinoinfo();
ShowFechaSinfo();
ShowFechaDinfo();
ShowDuracioninfo();

//CRUD Create


//Crud Update


//Crud Delete

console.log('eto funciona')

