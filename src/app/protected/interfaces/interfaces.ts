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
    Productos: ItemCarrito[];
    _id: string;
    userID: string;
    __v: number;
}



export interface Producto{
    _id: string;
    imagenes: string[];
    rating: number;
    descripcion?: string;
    ratings: number[];
    name: string;
    precio: number;
    cantidad: number;
    categoria: Categoria[];
}

export interface ItemCarrito{
    cantidad: number;
    _id: string;
    productoID: Producto;
    carritoID: string;
    __v: number;
}