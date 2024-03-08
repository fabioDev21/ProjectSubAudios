let user__inserts = document.getElementById("user__recentlyInserts")

// comando que busca na API as últimas músicas inseridas pelo usuário
document.addEventListener("load", addLastMusics())

function addLastMusics(){
    // comando que deve buscar as músicas na API 
    
    // objeto de teste, apenas
    let obj__ultimosAdd = {
        insert_um: {
            cantor: "Michael Jackson",
            musica: "Beat it"
        },
        insert_dois: {
            cantor: "Eagles",
            musica: "Hotel California",
        },
        insert_tres: {
            cantor: "Red Hot Chilli Peppers",
            musica: "Dark necessities",
        }
    }
    user__inserts.innerHTML += `      
    <span>${obj__ultimosAdd.insert_um.cantor} - ${obj__ultimosAdd.insert_um.musica}</span>
    <span>${obj__ultimosAdd.insert_dois.cantor} - ${obj__ultimosAdd.insert_dois.musica}</span>
    <span>${obj__ultimosAdd.insert_tres.cantor} - ${obj__ultimosAdd.insert_tres.musica}</span>
    `
}