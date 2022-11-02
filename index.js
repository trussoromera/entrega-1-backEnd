class Usuario{
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    }
 
 
//Metodos
getFullName() {
    return (`${this.nombre} ${this.apellido}`);
}
 
 
addMascota(mascota){
    this.mascotas.push(mascota)
}
 
countMascotas(){
    return this.mascotas.length
}
 
addBook(nombre, autor){
    this.libros.push({
        Nombre: nombre,
        Autor: autor,
    })
}
 
 
getBookNames(){
    let nombresLibros=[]
    for (let index = 0; index < this.libros.length; index++) {
        const libro = this.libros[index];
        nombresLibros.push(libro.Nombre)
    }
//this.libros.forEach(libro => {
//    nombresLibros.push(libro.Nombre)
//})
return nombresLibros;
}
}
 
let santiao = new Usuario("Santi", "Arguello", [{Nombre:"Principito", Autor:"Daniel"}], ["Diana"])
 
console.log(santiao.getFullName())
 
console.log(`Santiao tiene ${santiao.countMascotas()} mascotas`)
 
santiao.addMascota(`Lucifer`)
 
console.log(`Santiao tiene ${santiao.countMascotas()} mascotas`)
 
console.log(santiao.libros)
 
santiao.addBook(`MindHunter`, `Pepito`)
 
console.log(santiao.libros)
 
console.log(santiao.getBookNames())


