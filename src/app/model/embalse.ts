export class Embalse{
    private _id: number;
    private _nombre: string;
    private _provincia: string;
    private _capacidad: number; 
    private _capacidadActual: number;

    constructor(id: number, nombre: string, provincia: string, capacidad: number, capacidadActual: number){
        this._id = id;
        this._nombre = nombre;
        this._provincia = provincia;
        this._capacidad = capacidad;
        this._capacidadActual = capacidadActual;
    }

    public get nombre(): string {
        console.log("Entra por getter");
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }
    public get capacidad(): number {
        return this._capacidad;
    }
    public set capacidad(value: number) {
        this._capacidad = value;
    }
    public get capacidadActual(): number {
        return this._capacidadActual;
    }
    public set capacidadActual(value: number) {
        this._capacidadActual = value;
    }
}