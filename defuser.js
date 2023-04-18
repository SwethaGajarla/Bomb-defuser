let defuser = document.getElementById("defuser")
let timer = document.getElementById("timer")
let image = document.getElementById("image")
let count = 10
let id = setInterval(function(){
        timer.textContent= count
        console.log(count)
       
        if(count === 0){
            image.src ="https://cdn.vectorstock.com/i/1000x1000/50/38/bomb-blast-in-style-comics-cartoons-vector-13335038.webp"
            timer.style.color ="red"
            timer.textContent = "BOOM !"
            clearInterval(id);
        }
        count -= 1

    }, 1000);


defuser.addEventListener("keydown",function(event){
    console.log(event.target.value)
    if(event.key==="Enter" && event.target.value==="defuse" && count > 0){
        timer.style.color ="green"
        timer.textContent ="Bomb Defused"
        clearInterval(id)
        event.target.value =""
    }
})

