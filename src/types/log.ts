export interface LoginTypes {
    correo: string;
    password: string;
  }
  export interface RegistroRom {
    id_usuario: number,
    nombre: string,
      apellido: string,
      telefono: string,
      correo: string,
      contrasena: string ,
      fecha_nacimiento: string,
      dni: string,
      administrador: boolean,

  }
  export type RegistroRomSinID = Omit<RegistroRom, 'id_usuario'>

  export interface RegistroP {
    idUsuario:string 
    name: string
    apellido: string
    DNI: string
    correo: string
    telefono: string
    direccion: string
    password: string
    tipoUsuario: string
  }
  export type usuarioSinID = Omit<RegistroP, ' idUsuario'>

  export interface RegistroAnimal{
    idMascota:string
    nombre:string
    raza:string
    descripcion:string
    alergias:string
    edad:string
    peso:string
    castrado:boolean
    idSalud:string
    tipo:string
  }
  export type animalSinID = Omit<RegistroAnimal,  'idMascota' | 'idSalud'>