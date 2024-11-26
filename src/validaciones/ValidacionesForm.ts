import * as yup from "yup"


export const ValidacionesLogin = yup.object({
    correo: yup.string() .required("El correo es requerido"),

    password: yup.string() .required("La contraseña es requerida"),
  });

  
export const ValidacionesRegistroRom = yup.object({
  
    nombre: yup.string() .required("El nombre es requerido"),
      apellido: yup.string() .required("El apellido es requerido"),
      telefono: yup.string() .required("El telefono es requerido"),
      correo: yup.string() .required("El correo es requerido"),
      contrasena: yup.string() .required("El contrasena es requerido"),
      fecha_nacimiento: yup.string() .required("El fecha_nacimiento es requerido"),
      dni: yup.string() .required("El dni es requerido"),
      administrador: yup.boolean() .required("El administrador es requerido"),
    });
   

export const ValidacionesRegistro = yup.object({
  name: yup.string() .required("El nombre es requerido"),

  password: yup.string() .required("La contraseña es necesaria"),

  correo: yup.string() .required("El correo es requerido"),

  apellido: yup.string() .required("El apellido es necesario"),

  direccion: yup.string() .required("La direccion es necesaria"),

  DNI: yup.string() .length(8) .required("El DNI es requerido"),

  telefono: yup.string() .length(10) .required("El telefono es necesario"),

 tipoUsuario:   yup.string().required()
});


export const ValidacionesAnimales = yup.object({

nombre:yup.string() .required("El nombre es obligatorio"),

raza:yup.string() .required("La raza es necesaria"),

descripcion:yup.string() .required("Ingrese una descripcion del animal"),

alergias:yup.string(),

edad:yup.string() .required("La edad es obligatoria"),

peso:yup.string() .required("El peso es requerido"),

castrado:yup.boolean(),

tipo: yup.string() .required("El tipo es requerido")

})