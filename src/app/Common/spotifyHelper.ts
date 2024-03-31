import { IPlayList } from "../interfaces/IPlayList";
import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUsertoUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images != null ? user.images.pop().url : ''
    }
}

export function SpotifyPlayListToPlayList(playList: SpotifyApi.PlaylistObjectSimplified): IPlayList {
    console.log('HELPER',playList.name, playList.images, playList.images != null)
    return {
        id: playList.id,
        nome: playList.name,
        imageUrl: ''
        //playList.images != null && playList.images.pop().url != undefined ? playList.images.pop().url :
    }
}