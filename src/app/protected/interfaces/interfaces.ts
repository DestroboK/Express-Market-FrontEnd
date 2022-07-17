export interface DataResponse{
    ok: boolean,
    uid?: string,
    name: string,
    msg?: string

}

export interface Categoria{
    _id: string;
    name: string;
    Url: string;
    __v: number;
}