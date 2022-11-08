/*

collect info
store info
put stored info in arrays
build cards


*/
const submitBtn= document.getElementById('submitBtn')
let games = []
submitBtn.addEventListener('click'),(e)=>{
    e.preventDefault()
    console.log('clicked')

    //collect info
    const gameName = document.getElementById('gameName').value
    const category = document.querySelector('select[name=category]').value
    const gameImage= document.getElementById('gameImage').value

    console.log(gameName)
    let info = {
        gameName,
        category,
        gameImage
    }
    console.log(data)
}

//put stored info in arrays
let gameArr = [...games, data]
console.log(game)



//...[item1, item2, item3] => item1, item2, item3
