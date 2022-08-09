export interface DataResponse{
    ok: boolean,
    uid?: string,
    name: string,
    msg?: string

}

export interface Categoria{
    name: string;
}
export interface Carrito{
    userID: string;
    Productos?: string[];
}

export interface Carrito{
    userID: string;
    Productos?: string[];
    Estado: string;
    Direccion_Entrega: string;
}



export interface Producto{
    imagen: string;
    rating: number;
    descripcion?: string;
    ratings: number[];
    name: string;
    precio: number;
    cantidad: number;
    categoria: Categoria[];
}