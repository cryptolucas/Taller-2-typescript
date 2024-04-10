export class Serie {

    id: number
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    enlace: string;
    imagen: string;


    constructor(id_n: number, nombre_n: string, canal_n: string, temporadas_n: number, 
        descripcion_n: string, enlace_n: string, imagen_n: string
    ) {
      
      this.id= id_n
      this.nombre = nombre_n;
      this.canal = canal_n;
      this.temporadas = temporadas_n;
      this.descripcion = descripcion_n;
      this.enlace = enlace_n;
      this.imagen = imagen_n;
      
    }
  }