let user__singles = document.getElementById("user__singles")

document.addEventListener("load", addUserSingles())

function addUserSingles(){
    // script que carrega as infos de uma API, objeto apenas para teste

    let obj__singles = {
        single_um: {
            img: "https://i.scdn.co/image/ab67616d0000b2734d03019367695b4c0a2a6337",
            title: "The Strokes - You only live once", 
        },
        single_dois: {
            img: "https://m.media-amazon.com/images/I/81ogsUqshzL._UF1000,1000_QL80_.jpg",
            title: "Michael Jackson - The girl is mine", 
        },
        single_tres: {
            img: "https://i.scdn.co/image/ab67616d0000b273128450651c9f0442780d8eb8",
            title: "Linyrd Skinyrd - Free bird", 
        }
    }

    user__singles.innerHTML += `
    <div title="${obj__singles.single_um.title}" >
        <img src="${obj__singles.single_um.img}" alt="logo yolo" title="The strokes - You only live once">
    </div>
    <div title="${obj__singles.single_dois.title}">
        <img src="${obj__singles.single_dois.img}" alt="logo tgim" title="Michael Jackson - The girl is mine">
    </div>
    <div title="${obj__singles.single_tres.title}">
        <img src="${obj__singles.single_tres.img}" alt="logo fb" title="Linyrd Skinyrd - Free bird">
    </div>`
}