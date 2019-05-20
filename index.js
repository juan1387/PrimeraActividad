const {cursos,presentarCursos,presentarCursosValCall,loopAllCours} = requirer('./materias')
const opciones ={
    idCurso:{
        demand:true,
        alias: 'Id'
    },
    nombreEstudiante:{
        demand:true,
        alias: 'Nombre'
    },
    cedula:{
        demand:true,
        alias: 'Doc'
    }
}

const argv = require('yargs')
            .command ('Matricular','Matricular estudiante', opciones)
            .argv

const fs = require('fs');

let isMatri = true;
let nomEst = argv.nombreEstudiante;
let docEstu = argv.cedula;
let idCurso = argv.idCurso;

let makeFile = (nombre,cedula,idCurso) =>{
    let estudianteNotaImp = cursos.find(function(notaEst ) {return notaEst.id == idCurso});
   
    if(estudianteNotaImp===undefined){Console.log('Materia no encontrada');}else{
        texto = 'el estudiante '+nombre+' con cedula numero '+cedula+'\n'+
            'ha sido matriculado en el curso: ' + idCurso+', llamado: '+estudianteNotaImp.nombre+'\n'+
            'con una duración de '+ estudianteNotaImp.duracion + ' horas y el valor del curso es: '+estudianteNotaImp.valor;
        fs.writeFile('prematricula.txt',texto,(err)=>{
        if (err) 
        {
            console.log('ocurrio un error en el proceso de matricula, hagase revisar');
            throw (err);
        }
        console.log('se ha matriculado correctamente y creado el archivo')
            });
        }
    }

if(process.argv.length > 2){
    if(process.argv[2] === 'Matricular')
        {
            let estudianteNotaImp = cursos.find(function(notaEst ) {return notaEst.id == idCurso});
    //console.log('el id del curso es: '+estudianteNota.id + ', el nombre del curso es: '+estudianteNota.nombre);
        if(estudianteNotaImp===undefined){
            console.log('El curso no se encuentra registrado');
            console.log('Estos son los cursos disponibles: '+'\n');
            loopAllCours([1,2,3,4,5],
            function(value, allresult, next) {
                presentarCursosValCall(value, function(value, result) { next(); });
         
                }
            );
        }else{
                presentarCursos(idCurso);
                makeFile(nomEst,docEstu,idCurso);}
    	}
    else{
    	console.log('no sirvio: '+argv.command);
    }
}else{
    console.log('Cursos disponibles: '+'\n');
    loopAllCours([1,2,3,4,5],
	    function(value, allresult, next) {
	        presentarCursosValCall(value, function(value, result) { next(); });
	    }
	);
    
}