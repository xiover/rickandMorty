export interface Personaje{
    id:number;
    name:string;
    image:string;
}

export interface ResponsePersonaje {
    info:any;
    results: Personaje[];
}