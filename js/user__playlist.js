let user__playlist = document.getElementById("user__playlists")

// código que carrega as playlists para o usuário
document.addEventListener("load", addUserPlaylist())

function addUserPlaylist(){

    // playlists que viram do próprio banco de dados através de API
    let obj__playlists = {
        playlist_um: {
            img: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/28/1182102755-jybaoy6rbvdm3ie5v52xqlwyye.png",
            title: "Rock!!!",
        },
        playlist_dois: {
            img: "https://pbs.twimg.com/media/Ege80enWkAAPYJz.jpg",
            title: "Pagodin",
        },
        playlist_tres: {
            img: "https://i.scdn.co/image/ab67616d0000b273d30e8b92e89c93628a4cb3bf",
            title: "RAP",
        }
    }
    
    user__playlist.innerHTML += `
    <div class="user__playlists--item">
        <img src="${obj__playlists.playlist_um.img}" alt="logo-playlist-rock">
        <p>${obj__playlists.playlist_um.title}</p>
    </div>
    <div class="user__playlists--item">
        <img src="${obj__playlists.playlist_dois.img}" alt="logo-playlist-pagode">
        <p>${obj__playlists.playlist_dois.title}</p>
    </div>
    <div class="user__playlists--item">
        <img src="${obj__playlists.playlist_tres.img}" alt="logo-playlist-rap">
        <p>${obj__playlists.playlist_tres.title}</p>
    </div>`
}
