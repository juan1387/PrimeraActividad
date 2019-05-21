 let cursos = [
    {
        idRes: 1,
        tiempo: 38,
        nombre: 'Ciencias',
        costo: 698000 
    },
    {
        idRes: 2,
        tiempo: 120,
        nombre: 'Algebra',
        costo: 655000 
    },
    {
        idRes: 3,
        tiempo: 78,
        nombre: 'Mecanica',
        tiempo: 96,
        costo: 780000 
    },
    {
        idRes: 4,
        tiempo: 95,
        nombre: 'Robotica',
        costo: 250000 
    },
    {
        idRes: 5,
        tiempo: 45,
        nombre: 'Fisica',
        costo: 135000 
    }
];

let presentarCursos=id=>{
    let notaEst = cursos.find(function(nota) {
	return nota.idRes == id
	});
	console.log('id curso : '+notaEst.idRes + ', nombre del curso : '+notaEst.nombre+'\n'
	+'Duracion del curso: '+notaEst.tiempo + ' horas, el costo de curso es: '+notaEst.costo);
}
let presentarCursosValCall =(value, callback) => {
    setTimeout(function() {
        let notaEst = cursos.find(function(notaEst ) {
        return notaEst.idRes == value});
        console.log('Id curso: '+notaEst.idRes + ', nombre del curso : '+notaEst.nombre+'\n'
        +'Duracion del curso:  '+notaEst.tiempo + ' horas, el costo de curso es: '+notaEst.costo+'\n'
        +'\n');
        callback(value, value * value);
    }, 2000);
}
let loopAllCours=(data, each)=> {
    var n = -1, result = [];
    var next = function () {
        if (++n < data.length) { 
        	each(data[n], result, next); 
        }
    } 
    next();
}
module.exports={
	cursos,
	presentarCursos,
	presentarCursosValCall,
	loopAllCours
}

