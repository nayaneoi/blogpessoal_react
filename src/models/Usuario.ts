import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nombre: string;
    email: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null;
}