import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUsertoUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images[1].url
    }
}