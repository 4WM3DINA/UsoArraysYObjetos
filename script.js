//---->Punto 1

let pacientesRadiologia = [
    {hora: '11:00',especialista: 'IGNACIO SCHULZ',paciente: 'FRANCISCA ROJAS',rut:'9878782-1',prevision: 'FONASA',}, 
    {hora: '11:30',especialista: 'FEDERICO SUBERCASEAUX',paciente:'PAMELA ESTRADA',rut:'15345241-3',prevision: 'ISAPRE',},
    {hora: '15:00',especialista: 'FERNANDO WURTHZ',paciente:'ARMANDO LUNA',rut:'16445345-9',prevision: 'ISAPRE',},
    {hora: '15:30',especialista: 'ANA MARIA GODOY',paciente:'MANUEL GODOY',rut:'17666419-0',prevision: 'FONASA',},
    {hora: '16:00',especialista: 'PATRICIA SUAZO',paciente:'RAMON ULLOA',rut:'14989389-K',prevision: 'FONASA',},
];

let pacientesTraumatologia= [
    {hora: '08:00',especialista: 'MARIA PAZ ALTUZARRA ',paciente: 'PAULA SANCHEZ',rut:'15554774-5',prevision: 'FONASA',}, 
    {hora: '10:00',especialista: 'RAUL ARAYA',paciente:'ANGÉLICA NAVAS',rut:'15444147-9',prevision: 'ISAPRE',},
    {hora: '10:30',especialista: 'MARIA ARRIAGADA',paciente:'ANA KLAPP',rut:'17879423-9',prevision: 'ISAPRE',},
    {hora: '11:00',especialista: 'ALEJANDRO BADILLA',paciente:'FELIPE MARDONES',rut:'1547423-6',prevision: 'ISAPRE',},
    {hora: '11:30',especialista: 'CECILIA BUDNIK',paciente:'DIEGO MARRE',rut:'16554741-K',prevision: 'FONASA',},
    {hora: '12:00',especialista: 'ARTURO CAVAGNARO',paciente:'CECILIA MENDEZ',rut:'9747535-8',prevision: 'ISAPRE',},
    {hora: '12:30',especialista: 'ANDRES KANACRI',paciente:'MARCIAL SUAZO',rut:'11254785-5',prevision: 'ISAPRE',},
];  

let pacientesDental  = [
    {hora: '08:30',especialista: 'ANDREA ZUÑIGA',paciente: 'MARCELA RETAMAL',rut:'11123425-6',prevision: 'ISAPRE',}, 
    {hora: '11:00',especialista: 'MARIA PIA ZAÑARTU',paciente:'ANGEL MUÑOZ',rut:'9878789-2',prevision: 'ISAPRE',},
    {hora: '11:30',especialista: 'SCARLETT WITTING',paciente:'MARIO KAST' ,rut:'7998789-5',prevision: 'FONASA',},
    {hora: '13:00',especialista: 'FRANCISCO VON TEUBER',paciente:'KARIN FERNANDEZ',rut:'18887662-K',prevision: 'FONASA',},
    {hora: '13:30',especialista: 'EDUARDO VIÑUELA',paciente:'HUGO SANCHEZ',rut:'17665461-4',prevision: 'FONASA',},
    {hora: '14:00',especialista: 'RAQUEL VILLASECA',paciente:'ANA SEPULVEDA',rut:'14441281-0',prevision: 'ISAPRE',},
];

//----Punto 2
let primerPacienteRadiologia= pacientesRadiologia[0];
let ultimoPacienteRadiologia = pacientesRadiologia[pacientesRadiologia.length - 1]

let primerPacienteTraumatologia = pacientesTraumatologia[0];
let ultimoPacienteTraumatologia = pacientesTraumatologia[pacientesTraumatologia.length - 1]

let primerPacienteDental = pacientesDental[0];
let ultimoPacienteDental = pacientesDental[pacientesDental.length - 1];

document.getElementById(`pacientes`).innerHTML = `<h1>Estadisticas centro medico ñuñoa</h1> <br/>

<h1>Radiologia</h1> <p>Primera atencion: ${primerPacienteRadiologia.paciente} - ${primerPacienteRadiologia.prevision} | 
Ultimo paciente: ${ultimoPacienteRadiologia.paciente} - ${ultimoPacienteRadiologia.prevision}</p>

<h1>Traumatología</h1> <p>Primera atencion: ${primerPacienteTraumatologia.paciente} - ${primerPacienteTraumatologia.prevision} | 
Ultimo paciente:  ${ultimoPacienteTraumatologia.paciente} - ${ultimoPacienteTraumatologia.prevision} </p>

<h1>Dental</h1> <p>Primera atencion: ${primerPacienteDental.paciente} - ${primerPacienteDental.prevision} | 
Ultimo paciente:  ${ultimoPacienteDental.paciente} - ${ultimoPacienteDental.prevision}</p>`;

// Muestra Tabla Radiología

let radiologia = `<caption>Tabla Radiología</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesRadiologia.length; i++) {
radiologia += `<tr style="border: solid 2px red">
<td style="border: solid 2px red">${pacientesRadiologia[i].paciente}</td>
<td style="border: solid 2px red">${pacientesRadiologia[i].rut}</td>
<td style="border: solid 2px red">${pacientesRadiologia[i].especialista}</td>
<td style="border: solid 2px red">${pacientesRadiologia[i].hora}</td>
<td style="border: solid 2px red">${pacientesRadiologia[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla1').innerHTML = radiologia;

// Muestra Tabla Traumatologia

let traumatologia = `<caption>Tabla traumatología</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesTraumatologia.length; i++) {
traumatologia += `<tr style="border: solid 2px red">
<td style="border: solid 2px red">${pacientesTraumatologia[i].paciente}</td>
<td style="border: solid 2px red">${pacientesTraumatologia[i].rut}</td>
<td style="border: solid 2px red">${pacientesTraumatologia[i].especialista}</td>
<td style="border: solid 2px red">${pacientesTraumatologia[i].hora}</td>
<td style="border: solid 2px red">${pacientesTraumatologia[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla2').innerHTML = traumatologia;

// Muestra Tabla Dental

let dental = `<caption>Tabla Dental</caption> <tr><th>Nombre</th><th>Rut</th><th>Especialista</th><th>Hora</th><th>Previsión</th></tr>`;


for (let i = 0; i < pacientesDental.length; i++) {
dental += `<tr style="border: solid 2px red">
<td style="border: solid 2px red">${pacientesDental[i].paciente}</td>
<td style="border: solid 2px red">${pacientesDental[i].rut}</td>
<td style="border: solid 2px red">${pacientesDental[i].especialista}</td>
<td style="border: solid 2px red">${pacientesDental[i].hora}</td>
<td style="border: solid 2px red">${pacientesDental[i].prevision}</td>
</tr>`;


}

document.querySelector('.tabla3').innerHTML = dental;