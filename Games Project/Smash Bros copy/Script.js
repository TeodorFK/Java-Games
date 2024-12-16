const mycanvas = document.getElementById("mycanvas");

mycanvas.width = 340;
mycanvas.height = 240;

const ctx = mycanvas.getContext("2d");
ctx.fillStyle = "lightblue"
ctx.fillRect(0, 0, mycanvas.width, mycanvas.height)

let keys ={
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
} 


let player ={
width: 50,
height: 50,
color: 'red',
velocity: {x: 0, y: 0},
jumpStrength: -10,
isJumping: true,
y: 0,
x: 0,
}

const gravity = 0.5;

function updatePlayerPosition() {
    if (player.isJumping) {
        player.velocity.y += gravity;  
        player.y += player.velocity.y; 

        if (player.y >= 200) {
            player.y = 190; 
            player.isJumping = false;
            player.velocity.y = 0;
        }
    }

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}


document.addEventListener("keydown", (event)  =>  {
    switch (event.key) {
        case 'ArrowUp':
        if (!player.isJumping) {
            player.velocity.y = player.jumpStrength;
            console.log(player.velocity.y)
            player.isJumping = true;
        } 
            break;

        case 'ArrowDown':
            player.height = 35
            player.y = 205
            break;

        case 'ArrowLeft':
            player.x -= 10;
            player.velocity.x = -player.velocity.x -2;
            break;
            
        case 'ArrowRight':
            player.x += 10;
            player.velocity.x = +player.velocity.x +2;
            break;
    }
})

document.addEventListener("keyup", (event)  =>  {
    if (event.key ===  'ArrowDown') {
        player.height = 50
    }
})

function gameLoop() {
    ctx.fillStyle = "lightblue";  
    ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);
    updatePlayerPosition(); 
    requestAnimationFrame(gameLoop); 
}
gameLoop();