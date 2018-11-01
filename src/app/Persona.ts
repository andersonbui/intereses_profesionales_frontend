export class Persona {
    private fechaNacimiento?: Date;
    private ciudad?: string;
    private departamento?: string;
    private pais?: string;
    private celular?: string;
    private direccion?: string;
    private email: string;
    private identificacion: string;
    private tipoIdentificacion: string;
    private apellidos: string;
    private nombres: string;

    constructor(
        identificacion: string,
        tipoIdentificacion: string,
        apellidos: string,
        nombres: string,
        email: string,
        direccion?: string,
        ciudad?: string,
        departamento?: string,
        pais?: string,
        fechaNacimiento?: Date,
        celular?: string,
    ) {
        this.fechaNacimiento = fechaNacimiento;
        this.ciudad = ciudad;
        this.departamento = departamento;
        this.pais = pais;
        this.celular = celular;
        this.direccion = direccion;
        this.email = email;
        this.identificacion = identificacion;
        this.tipoIdentificacion = tipoIdentificacion;
        this.apellidos = apellidos;
        this.nombres = nombres;
    }
}
