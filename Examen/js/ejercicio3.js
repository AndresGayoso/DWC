const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

var numeroRegistroPaciente = [];
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

for(let i = 0; i < registroPacientes.size;i++){
    var KeyPacientes = registroPacientes.keys();
    var KeyValue = KeyPacientes.next().value;
    var string = registroPacientes.get(KeyValue);
    var array = string.split(" ");
    numeroRegistroPaciente[i] = array[0] + " " + array[1];
    console.log(numeroRegistroPaciente[i],i)
}