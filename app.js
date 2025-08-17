// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var friends = []


function agregarAmigo()
{
    let input_text = document.getElementById('amigo').value

    if (input_text.trim())
    {
        friends.push(input_text)
        document.getElementById('amigo').value = ""
    }
    else
    {
        alert("Por favor, inserte un nombre")
    }

    updateFriends()
}

function updateFriends()
{
    let htmlList = document.getElementById('listaAmigos')
    htmlList.innerHTML = ""

    for(let i = 0; i < friends.length; i++)
    {
        const newElement = document.createElement('li')
        newElement.textContent = friends[i]

        htmlList.appendChild(newElement)

    }
    
}

function sortearAmigo()
{
    if(friends.length == 0)
    {
        alert("No hay amigos disponibles para sortear. Agregue algunos amigos primero")
        return
    }

    const randomIndex = Math.floor(Math.random() * friends.length)

    const secretFriend = friends[randomIndex]

    const result = document.getElementById("resultado")

    result.innerHTML = secretFriend

    
}

function cleanResult() {
    const result = document.getElementById("resultado")
    if (result) {
        result.innerHTML = ""
    }

}
