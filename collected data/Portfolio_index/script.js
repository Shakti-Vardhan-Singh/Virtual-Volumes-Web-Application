let menu = document.querySelector("#header ul");
let bar = document.querySelector("#header .fa-bars");

bar.addEventListener("click", function(){
    menu.classList.toggle("show");
})

const colors = ["#d20962", "#0ebeff", "#7ac143", "#00a78e", "#00bce4", "#8e43e7", "#005be2"];
const numballs = 30;
const balls = [];

for(let i = 0; i < numballs; i++){
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background=colors[Math.floor(Math.random()*colors.length)];
    ball.style.left=`${Math.floor(Math.random()*80)}vw`;
    ball.style.top=`${Math.floor(Math.random()*80)}vh`;
    ball.style.transform=`scale(${Math.random()})`;
    ball.style.width=`${Math.random()}em`;
    ball.style.height=ball.style.width;
    balls.push(ball);
    document.getElementById('hero-area').append(ball);
}

//keyFrames

balls.forEach((el,i,ra)=>{
    let to = {
        x:Math.random()*(i*2===0?-11:11),
        y:Math.random()*12
    };
    let anim = el.animate(
        [
            {transform:"translate(0,0"},
            {transform:`translate(${to.x}rem, ${to.y}rem)`}
        ],
        {
            duration:(Math.random() + 1) * 2000,
            direction:"alternate",
            fill:"both",
            iteration:Infinity,
            easing:"ease-in-out"
        }
    );
})