export interface AuthResponse{
    ok: boolean,
    uid?: string
    name?: string,
    token?: string,
    msg?: string,
    role?: string
}

export interface Usuario{
    uid: string,
    name?: string,
    role?: string,
    token?: string
}
