window.addEventListener("click",up);
var player=document.getElementById("player");
var obstacles=document.getElementById("obstacles");
var score=0;
function up(){
    if(player.classList =="up_above") {return}
        player.classList.add("up_above");
    setTimeout(() => {
        player.classList.remove("up_above");
    },300);
}
    var lost= setInterval(() => {
        const player_up=parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        const obstacles_left=parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
        if (obstacles_left<20 && obstacles_left>-20 && player_up>=309) {
            obstacles.style.animation="none";
            alert("your score: "+Math.floor(score/100));
            score=0;
            obstacles.style.animation="obstacles 1s infinite linear";
        }else{
            score++;
            document.querySelector("span").innerHTML= Math.floor(score/100);
        }
    
    }, 10);