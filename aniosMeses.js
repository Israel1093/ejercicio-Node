console.log("hola israel");
const fs = require('fs')

/*fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
  if (error)
    console.log(error)
  else
    console.log('El archivo fue creado')
})

console.log('última línea del programa')*/
var anioActual=new Date();
var anio=anioActual.getFullYear();
console.log(anio);
//Carpeta principal
fs.mkdir('./IsraelMorales',(err)=>{
    if (err) throw err;
})
//listas
let  meses= ["enero", "febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
//crear carpetas y carpetas dentro de meses
for(var i=2017;i<anio+1;i++)
{
  fs.mkdir('./IsraelMorales/'+i,(err)=>{
    if (err) throw err;
  })
  for(var j=0;j<meses.length;j++){
    fs.mkdir('./IsraelMorales/'+i+'/'+meses[j],(err)=>{
      if (err) throw err;
    })

    

  }
}